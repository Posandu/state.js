var State;(()=>{var e={212:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=class{constructor(e,t=null){this.name=e,this.value=t}setDebug(e,t=!0){t&&(window.debug___states=e),this.debug=e}sendDebug(e,t){(debug___states||this.debug)&&console.log(`%c${e}`,`color:${t}`)}set(e){this.oldValue=this.value,this.value=e,this.emitChange(),this.sendDebug(`${this.name} changed to ${JSON.stringify(this.value)}`,"green")}get(){return this.value}emitChange(){document.dispatchEvent(new CustomEvent("stateChange",{detail:{name:this.name,value:this.value}})),this.sendDebug(`${this.name} emitted change`,"green")}addChangeListener(e){document.addEventListener("stateChange",(t=>{t.detail.name===this.name&&t.detail.value!==this.oldValue&&(e(t.detail.value,this.oldValue),this.sendDebug(`${this.name} received change`,"green"))}))}}},10:(e,t,s)=>{const a=s(212).Z;e.exports=a}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a=s(10);State=a})();