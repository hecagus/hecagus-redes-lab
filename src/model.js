import { lessons, challenges } from './data.js';
export const KEY='hecagus:redes-lab:v1';
const validIds=new Set(lessons.map(l=>l.id));
export function cleanProgress(value){
  const v=value&&typeof value==='object'?value:{};
  return {seen:[...new Set(Array.isArray(v.seen)?v.seen.filter(id=>validIds.has(id)):[])],
    passed:[...new Set(Array.isArray(v.passed)?v.passed.filter(id=>validIds.has(id)):[])],
    solved:[...new Set(Array.isArray(v.solved)?v.solved.filter(id=>challenges.some(c=>c.id===id)):[])]};
}
export function loadProgress(storage){try{return cleanProgress(JSON.parse(storage.getItem(KEY)||'{}'));}catch{return cleanProgress({});}}
export function parseRoute(hash){
  const [id,index,mode]=hash.replace(/^#\/?/,'').split('/');
  const lesson=lessons.find(l=>l.id===id)||lessons[0];
  const fault=mode==='fallo';
  const events=fault?lesson.fault.events:lesson.events;
  const step=Math.min(events.length-1,Math.max(0,Number.isInteger(Number(index))?Number(index):0));
  return {lesson,step,fault};
}
export function advance(step,length){return Math.min(length-1,Math.max(0,step+1));}
export function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
