import{_ as w,u as _,g as b,i as h,h as x,e as y,o as n,c as a,a as e,j as g,w as i,l as f,k as r,m as d,f as v,F as V,n as k}from"./index-9c3dc80e.js";import{S as N}from"./SocialBtn-9b1475a1.js";const U={components:{SocialBtn:N},setup(){const m=_(),{createUser:t}=b(),c=h("Swal"),o=x({name:"randomusername12",lastname:"randomusername12",telephone:"12345678932",razon_social:"randomusername5",NIT:"1234567895",type_user_id:"1",verify_tc:"1",identy_document:"12345678921",email:"randommail21@mail.com",password:"strongkey12321",password_confirmation:"strongkey12321"});return{form:o,submitForm:async p=>{try{const{ok:l,message:s}=await t({...o});console.log({ok:l,message:s}),l?m.push({name:"user"}):c.fire("Error",s,"error")}catch(l){console.log(l)}finally{}}}}},z=k('<div class="flex items-center"><img src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682833731/jfokloccgzkkzpswgtlz.png" alt="" sizes="" srcset=""><div class="flex flex-col"><span class="text-3xl text-white font-bold">ようこそ!</span><span class="text-sm text-white">Bienvenido(a)!</span></div></div>',1),S={class:"max-w-xs"},B={class:"flex my-6"},T=e("label",{for:"inline-radio",class:"text-sm text-white me-3"},"Tipo de persona",-1),C={class:"flex items-center mr-4"},F=e("label",{for:"inline-radio",class:"ml-2 text-sm text-white"},"Natural",-1),R={class:"flex items-center mr-4"},I=e("label",{for:"inline-2-radio",class:"ml-2 text-sm text-white"},"Jurídica",-1),j={key:0},M=e("label",{class:"text-sm text-white",for:"name"},"Razón social",-1),A={key:1},E=e("label",{class:"text-sm text-white",for:"name"},"NIT",-1),P={key:2},D=e("label",{class:"text-sm text-white",for:"name"},"Nombre",-1),J={key:3},q=e("label",{class:"text-sm text-white",for:"lastName"},"Apellido:",-1),G=e("label",{class:"text-sm text-white",for:"phone"},"Telefono:",-1),H={key:4},K=e("label",{class:"text-sm text-white",for:"identification"},"Numero de identificacion:",-1),L=e("label",{class:"text-sm text-white",for:"email"},"Correo electrónico:",-1),O=e("label",{class:"text-sm text-white",for:"password"},"Contraseña:",-1),Q=e("label",{class:"text-sm text-white",for:"confirmPassword"},"Confirmar Contraseña:",-1),W=e("button",{type:"submit",class:"w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 text-sm"}," Registrar ",-1);function X(m,t,c,o,u,p){const l=y("SocialBtn");return n(),a(V,null,[z,e("div",S,[e("form",{onSubmit:t[11]||(t[11]=g((...s)=>o.submitForm&&o.submitForm(...s),["prevent"]))},[e("div",B,[T,e("div",C,[i(e("input",{id:"inline-radio",type:"radio",value:"2",name:"inline-radio-group",class:"w-4 h-4","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.type_user_id=s)},null,512),[[f,o.form.type_user_id]]),F]),e("div",R,[i(e("input",{id:"inline-2-radio",type:"radio",value:"1",name:"inline-radio-group",class:"w-4 h-4","onUpdate:modelValue":t[1]||(t[1]=s=>o.form.type_user_id=s)},null,512),[[f,o.form.type_user_id]]),I])]),o.form.type_user_id==1?(n(),a("div",j,[M,i(e("input",{type:"text",id:"razon_social","onUpdate:modelValue":t[2]||(t[2]=s=>o.form.razon_social=s),class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"},null,512),[[r,o.form.razon_social]])])):d("",!0),o.form.type_user_id==1?(n(),a("div",A,[E,i(e("input",{type:"text",id:"nit","onUpdate:modelValue":t[3]||(t[3]=s=>o.form.NIT=s),class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"},null,512),[[r,o.form.NIT]])])):d("",!0),o.form.type_user_id==2?(n(),a("div",P,[D,i(e("input",{type:"text",id:"name","onUpdate:modelValue":t[4]||(t[4]=s=>o.form.name=s),class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"},null,512),[[r,o.form.name]])])):d("",!0),o.form.type_user_id==2?(n(),a("div",J,[q,i(e("input",{type:"text",id:"lastName",class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70","onUpdate:modelValue":t[5]||(t[5]=s=>o.form.lastname=s)},null,512),[[r,o.form.lastname]])])):d("",!0),e("div",null,[G,i(e("input",{type:"number",id:"phone",class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70","onUpdate:modelValue":t[6]||(t[6]=s=>o.form.telephone=s)},null,512),[[r,o.form.telephone]])]),o.form.type_user_id==2?(n(),a("div",H,[K,i(e("input",{type:"text",id:"identification",class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70","onUpdate:modelValue":t[7]||(t[7]=s=>o.form.identy_document=s)},null,512),[[r,o.form.identy_document]])])):d("",!0),e("div",null,[L,i(e("input",{type:"email",id:"email",class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70","onUpdate:modelValue":t[8]||(t[8]=s=>o.form.email=s)},null,512),[[r,o.form.email]])]),e("div",null,[O,i(e("input",{type:"password",id:"password",class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70","onUpdate:modelValue":t[9]||(t[9]=s=>o.form.password=s)},null,512),[[r,o.form.password]])]),e("div",null,[Q,i(e("input",{type:"password",id:"confirmPassword",class:"border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70","onUpdate:modelValue":t[10]||(t[10]=s=>o.form.password_confirmation=s)},null,512),[[r,o.form.password_confirmation]])]),W],32),v(l)])],64)}const $=w(U,[["render",X]]);export{$ as default};