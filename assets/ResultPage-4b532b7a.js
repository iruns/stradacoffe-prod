import{_ as y}from"./PageContainer.vue_vue_type_style_index_0_lang-6f44bd57.js";import{d as S,b as k,x,k as p,y as v,D as m,N as B,l as I,w,o as i,a as e,t as l,u as c,s as u,c as h,m as C,e as R,A as M,F as P,p as z,g as D,_ as F}from"./index-ca6b6884.js";import{c as N,a as T}from"./beansAndBlends-a007d6ac.js";import"./math-c3d3a642.js";const A=r=>(z("data-v-08e59603"),r=r(),D(),r),E={class:"result"},L={class:"blends"},V={class:"label"},$=A(()=>e("div",{class:"cover"},null,-1)),j={class:"group"},q=S({__name:"ResultPage",setup(r){const _=k(),f=x(),g=p(()=>f.lang),o=v({}),b=p(()=>{const a=N(T,_.progress.scores,o.value);return a.length=4,a}),d=v({});return m(()=>{B(()=>{let a=0;for(const n in o.value){const s=n;a=Math.max(a,o.value[s]**10)}for(const n in o.value){const s=n;d.value[s]=0}setTimeout(()=>{for(const n in o.value){const s=n;let t=o.value[s]**10/a;t*=300,t=Math.round(t),t/=10,d.value[s]=t}},50)})}),m(()=>{_.endRun()}),(a,n)=>(i(),I(y,null,{default:w(()=>[e("div",E,[e("h1",null,l(c(u)("1")),1),e("div",L,[(i(!0),h(P,null,C(b.value,(s,t)=>(i(),h("div",{key:t,class:R(["blend",{["num"+t]:!0}])},[e("div",{class:"value",style:M({width:d.value[s.id]+"%"})},[e("label",null,l(d.value[s.id])+"% ",1)],4),e("div",V,[e("label",null,l(s.label[g.value]),1)])],2))),128)),$]),e("div",j,[e("p",null,l(c(u)("2")),1),e("p",null,l(c(u)("3")),1),e("h2",null,l(c(u)("4")),1),e("p",null,l(c(u)("5")),1)])])]),_:1}))}});const O=F(q,[["__scopeId","data-v-08e59603"]]);export{O as default};
