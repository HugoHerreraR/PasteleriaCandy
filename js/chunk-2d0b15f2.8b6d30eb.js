(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b15f2"],{2020:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-row",{staticStyle:{"max-width":"100%"},attrs:{"ma-1":""}},[t("v-tabs",{attrs:{centered:"","fixed-tabs":"","show-arrows":"","center-active":!0},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t("v-tabs-slider"),t("v-tab",{attrs:{href:"#sabor"}},[e._v("Inventario de sabores")]),t("v-tab",{attrs:{href:"#adornos"}},[e._v("Inventario de adornos")])],1),t("v-tabs-items",{model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t("v-tab-item",{attrs:{id:"sabor"}},[t("v-container",[t("v-row",[t("v-col",[t("sabores")],1)],1)],1)],1),t("v-tab-item",{attrs:{id:"adornos"}},[t("v-container",[t("v-row",[t("v-col",[t("decoraciones")],1)],1)],1)],1)],1)],1)},s=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{"grid-list-xs":""}},[t("v-card",[t("v-card-title",[e._v(" Lista de sabores "),t("v-spacer"),t("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"items-per-page":5,"item-key":"name",search:e.search,"footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right",prevIcon:"mdi-minus",nextIcon:"mdi-plus"}}})],1)],1)},n=[],c={data:function(){return{search:"",headers:[{text:"Sabor",align:"start",value:"sabor"},{text:"Cantidad",value:"numero"}],desserts:[{sabor:"Moka",numero:51},{sabor:"Chocolate con menta",numero:290},{sabor:"Trufa",numero:10},{sabor:"Rompope",numero:21},{sabor:"Marmoleado",numero:67}]}}},i=c,l=t("2877"),d=Object(l["a"])(i,o,n,!1,null,null,null),u=d.exports,m=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{"grid-list-xs":""}},[t("v-card",[t("v-card-title",[e._v(" Lista de decoraciones "),t("v-spacer"),t("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"items-per-page":5,"item-key":"name",search:e.search,"footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right",prevIcon:"mdi-minus",nextIcon:"mdi-plus"}}})],1)],1)},v=[],b={data:function(){return{search:"",headers:[{text:"Decoración",align:"start",value:"decoracion"},{text:"Cantidad",value:"numero"}],desserts:[{decoracion:"Tematica de cumpleaños",numero:51},{decoracion:"Decoración de gato",numero:290},{decoracion:"Decoración de Mickey Mouse",numero:10},{decoracion:"Decoración de corazón",numero:21},{decoracion:"Tematiza de parque jurasico",numero:67}]}}},p=b,h=Object(l["a"])(p,m,v,!1,null,null,null),f=h.exports,x={name:"Inventario",components:{sabores:u,decoraciones:f},data:function(){return{tab:null}}},w=x,g=Object(l["a"])(w,r,s,!1,null,null,null);a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0b15f2.8b6d30eb.js.map