import {test} from 'node:test';
import assert from 'node:assert/strict';
import {lessons,challenges} from '../src/data.js';
import {cleanProgress,loadProgress,parseRoute,advance,escapeHtml} from '../src/model.js';

test('All normal and fault traces have valid endpoints, sources and complete questions',()=>{
  assert.equal(new Set(lessons.map(l=>l.id)).size,12);
  for(const l of lessons){
    assert.ok(l.rfc.length>0,l.id);
    for(const scenario of [l.events,l.fault.events]){
      assert.ok(scenario.length>=2,l.id);
      for(const event of scenario){
        assert.ok(l.nodes.some(n=>n.id===event.from),`${l.id}: invalid sender`);
        assert.ok(l.nodes.some(n=>n.id===event.to),`${l.id}: invalid recipient`);
        assert.notEqual(event.from,event.to);
        assert.ok(typeof event.text==='string'&&event.text.trim().length>0);
        assert.ok(Object.keys(event.fields).length>0);
      }
    }
    assert.ok(l.quiz.options[l.quiz.answer]);
  }
  for(const c of challenges){assert.ok(lessons.some(l=>l.id===c.lesson));assert.ok(c.options[c.answer]);}
});
test('TCP teaching trace acknowledges SYN sequence space and 100 payload bytes',()=>{
  const e=lessons.find(l=>l.id==='tcp').events;
  assert.equal(Number(e[1].fields.Ack),Number(e[0].fields.Seq)+1);
  assert.equal(Number(e[2].fields.Ack),Number(e[1].fields.Seq)+1);
  assert.equal(Number(e[4].fields.Ack),Number(e[3].fields.Seq)+100);
});
test('DHCP allocation order and broadcasts are consistent for a new client',()=>{
  const e=lessons.find(l=>l.id==='dhcp').events;
  assert.deepEqual(e.map(x=>x.label),['DHCPDISCOVER','DHCPOFFER','DHCPREQUEST','DHCPACK']);
  assert.equal(e[0].fields.Origen,'0.0.0.0:68');
  assert.equal(e[0].fields.Destino,'255.255.255.255:67');
  assert.equal(e[3].fields.IP,e[1].fields.yiaddr);
});
test('TLS descriptions never claim ciphertext is a real decrypted capture',()=>{
  const tls=lessons.find(l=>l.id==='tls').events;
  assert.match(tls[2].fields.Contenido,/Cifrado/);
  const https=lessons.find(l=>l.id==='https').events;
  assert.ok(https.slice(-2).every(e=>/Cifrado/.test(e.fields.Contenido)));
});
test('Deep links restore correct scenario and clamp malformed positions',()=>{
  assert.equal(parseRoute('#/dns/2/normal').step,2);
  assert.equal(parseRoute('#/dns/999/fallo').step,1);
  assert.equal(parseRoute('#/dns/-30/normal').step,0);
  assert.equal(parseRoute('#/tcp/NaN/normal').step,0);
  assert.equal(parseRoute('#/missing/0/normal').lesson.id,'tcp');
  assert.equal(parseRoute('#/dns/0/fallo').fault,true);
  assert.equal(advance(4,5),4);
});
test('Stored progress handles corruption and never accepts unknown IDs or duplicates',()=>{
  assert.deepEqual(cleanProgress({seen:['tcp','tcp','bogus'],passed:'all',solved:['tpv','unknown']}),{seen:['tcp'],passed:[],solved:['tpv']});
  assert.deepEqual(loadProgress({getItem:()=>'{broken'}),{seen:[],passed:[],solved:[]});
  assert.deepEqual(loadProgress({getItem:()=>{throw Error('blocked');}}),{seen:[],passed:[],solved:[]});
  assert.equal(escapeHtml('<img onerror="alert(1)">'),'&lt;img onerror=&quot;alert(1)&quot;&gt;');
});
