import{_ as m,r as i,o as a,c,a as e,F as _,b as v,w,v as g,d as h,t as b,u as k,e as u,f as d}from"./index-60329a40.js";const y={name:"Carousel",components:{},setup(){const o=i([{src:"https://res.cloudinary.com/dwmznusxf/image/upload/v1682851025/hl7plctepel3gqzu4ljc.png",name:"yabu"},{src:"https://res.cloudinary.com/dwmznusxf/image/upload/v1682851028/q0ah3rxsqxpukc0l7uwl.png",name:"Kyojuro"},{src:"https://res.cloudinary.com/dwmznusxf/image/upload/v1682851031/qh7oug7tzu8lrq2hbkps.png",name:"Inosuke"}]),t=i(0);return{items:o,currentIndex:t,prev:()=>{t.value=t.value===0?o.value.length-1:t.value-1},next:()=>{t.value=t.value===o.value.length-1?0:t.value+1}}}},$={class:"w-full relative"},C={class:"carousel-wrapper"},j={class:"carousel-inner"},B={class:"relative w-8/12 overflow-visible flex flex-col items-center"},z=e("img",{src:"https://res.cloudinary.com/dwmznusxf/image/upload/v1682851034/tnpnmdscpso4krhqea9o.png",class:"absolute -top-24 object-cover max-h-96",alt:""},null,-1),q=["src"],V={class:"font-bold text-white text-7xl"},D={class:"text-fuchsia-400"},I=e("div",{class:"text-white w-2/3 flex flex-col items-center mt-3"},[e("span",{class:""},"Ver anime en línea en HD, subtitulado o doblado, "),e("span",null,"en tu celular o computadora."),e("span",null,"¡Animeyabu, tu portal de anime en línea!")],-1),M=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),N=[M],S=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1),F=[S];function H(o,t,r,s,p,f){return a(),c("div",$,[e("div",C,[e("div",j,[(a(!0),c(_,null,v(s.items,(n,l)=>w((a(),c("div",{key:l,class:"carousel-item flex justify-center items-center w-full flex-col"},[e("div",B,[z,e("img",{src:n.src,class:"relative max-h-96",alt:""},null,8,q)]),e("span",V,[h(" anime"),e("span",D,b(n.name),1)]),I])),[[g,l===s.currentIndex]])),128))]),e("button",{onClick:t[0]||(t[0]=n=>s.prev()),class:"absolute left-0 top-0 h-full w-16 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all duration-150"},N),e("button",{onClick:t[1]||(t[1]=n=>s.next()),class:"absolute right-0 top-0 h-full w-16 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all duration-150"},F)])])}const L=m(y,[["render",H]]),A={components:{Carousel:L},setup(){const o=k();return{onBack:()=>o.back()}}},E={class:"flex flex-row"},K={class:"bg-black max-[768px]:bg-gradient-to-b from-fuchsia-200 to-black min-h-screen flex flex-col items-center p-2 justify-between md:w-1/2 w-screen"},R={class:"flex flex-col self-start m-2"},T=e("div",{class:"md:flex items-center self-start mb-3 hidden"},[e("img",{src:"https://res.cloudinary.com/dwmznusxf/image/upload/v1682856062/vpmxm10fxx6ttjakuahv.png",alt:"icons pages",class:"mr-3 w-8"}),e("span",{class:"font-bold text-white"},[h(" anime"),e("span",{class:"text-fuchsia-400"},"yabu")])],-1),G=e("svg",{class:"text-white w-5 h-5",viewBox:"0 0 20 20"},[e("path",{fill:"#fff",d:`M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
            L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
            c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
            c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
            S18.707,9.212,18.271,9.212z`})],-1),J=[G],O={class:"flex flex-col"},P=e("div",null,null,-1),Q={class:"md:w-1/2 md:bg-fuchsia-600 h-auto hidden md:flex justify-center items-center"};function U(o,t,r,s,p,f){const n=u("router-view"),l=u("Carousel");return a(),c("div",E,[e("div",K,[e("div",R,[T,e("button",{class:"self-start",onClick:t[0]||(t[0]=(...x)=>s.onBack&&s.onBack(...x))},J)]),e("div",O,[d(n)]),P]),e("div",Q,[d(l)])])}const X=m(A,[["render",U]]);export{X as default};
