/* Код перевірки для «Підготовка до ДР № 2». Спільний для index.html і perevirka.html. */
const SALT='DR2-8kl';
const normName=s=>s.trim().replace(/\s+/g,' ').toLowerCase();
// date — 'ДД.ММ.РРРР', result — '7/8'
function kod(name,date,result){
  const s=normName(name)+'|'+date+'|'+result+'|'+SALT;
  let h=0x811c9dc5;
  for(const ch of s){h^=ch.codePointAt(0);h=Math.imul(h,0x01000193)>>>0}
  const A='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let out='';
  for(let i=0;i<6;i++){out+=A[h&31];h>>>=5}
  return out;
}
const dateStr=d=>String(d.getDate()).padStart(2,'0')+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+d.getFullYear();
