import{d as v,b as d,k as s,c as p,a as _,e as f,t as g,v as k,o as x,r as b,_ as C}from"./index-ca6b6884.js";const D={class:"free-menu-item"},I=v({__name:"FreeMenuItem",props:{route:{},text:{}},setup(m){const t=m;d();const n=s(()=>b[t.route.name]),r=s(()=>n.value.meta.guards),l=s(()=>n.value.meta.flow),u=s(()=>!l.value.isDone||l.value.isDone()),a=s(()=>{var o,e;return u.value?(o=r.value)==null?void 0:o.deleteProgress:(e=r.value)==null?void 0:e.fakeProgress});function i(){k.replace({name:t.route.name})}return(o,e)=>(x(),p("div",D,[_("div",{class:f(["was-done",{done:u.value,switchable:!!a.value}]),onClick:e[0]||(e[0]=w=>{var c;return(c=a.value)==null?void 0:c.call(a)})},null,2),_("a",{onClick:i},g(o.text),1)]))}});const B=C(I,[["__scopeId","data-v-01970088"]]);export{B as F};
