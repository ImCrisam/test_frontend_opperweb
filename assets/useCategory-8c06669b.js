import{s as a,x as s}from"./index-9c3dc80e.js";const p=()=>{const t=a();return{createCategory:async e=>await t.dispatch("category/create",e),getListCategories:async()=>await t.dispatch("category/list"),selectCategory:async e=>await t.dispatch("category/current",e),updateCategory:async e=>await t.dispatch("category/update",e),listCategories:s(()=>t.getters["category/list"]),currentCategory:s(()=>t.getters["category/currentCategory"])}};export{p as u};