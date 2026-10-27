'use strict';
// One decoded sample buffer, looped by the audio clock. No HTML media seek at the seam.
window.corekaMusic=(()=>{
 let context,gain,source,buffer,pending,enabled=true,volume=.25;
 const status=()=>document.querySelector('#musicToggle');
 async function load(){
  if(buffer)return buffer;
  if(!pending)pending=(async()=>{const r=await fetch('assets/cancion-loop.ogg');if(!r.ok)throw Error('audio');buffer=await context.decodeAudioData(await r.arrayBuffer());return buffer})();
  try{return await pending}catch(e){pending=null;throw e}
 }
 async function set(on,value){
  enabled=on;volume=value;
  try{
   if(!context){context=new (window.AudioContext||window.webkitAudioContext)();gain=context.createGain();gain.gain.value=enabled?volume:0;gain.connect(context.destination)}
   gain.gain.setTargetAtTime(enabled?volume:0,context.currentTime,.08);
   await context.resume();
   if(!source){status().textContent='Cargando canción…';await load();if(!source){source=context.createBufferSource();source.buffer=buffer;source.loop=true;source.loopStart=0;source.loopEnd=buffer.duration;source.connect(gain);source.start()}}
   status().textContent=enabled?'Música: activada':'Música: silenciada';
  }catch(e){status().textContent='Toca para reintentar música'}
 }
 return {set};
})();
