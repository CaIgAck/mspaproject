(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da956"],{"6be9":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("editTask")},i=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"4"}},[e("form",[e("h2",[t._v(t._s(t.tasks.title))]),e("v-combobox",{attrs:{chips:"",clearable:"",label:"tag",multiple:""},model:{value:t.chips,callback:function(s){t.chips=s},expression:"chips"}}),e("v-text-field",{attrs:{label:"Description",required:"",counter:"2048"},model:{value:t.description,callback:function(s){t.description=s},expression:"description"}}),e("v-text-field",{attrs:{label:"status",required:"",counter:"2048"},model:{value:t.status,callback:function(s){t.status=s},expression:"status"}}),e("v-btn",{staticClass:"mt-10",attrs:{dark:"",type:"submit"},on:{click:function(s){return s.preventDefault(),t.saveTask.apply(null,arguments)}}},[t._v(" сохранить ")])],1)])],1)],1)},r=[],c=(e("a4d3"),e("e01a"),{name:"editTask",data:function(){return{status:"",description:"",chips:""}},mounted:function(){this.description=this.tasks.description,this.chips=this.tasks.chips,this.status=this.tasks.status},computed:{tasks:function(){return this.$store.getters.taskId(+this.$route.params.id)}},methods:{saveTask:function(){this.$store.dispatch("SAVE_TASK",{id:this.tasks.id,status:this.status,description:this.description}),this.$router.push("/viewTask")}}}),o=c,u=e("2877"),l=e("6544"),d=e.n(l),p=e("8336"),h=e("62ad"),f=e("2b5d"),k=e("0fd9"),v=e("8654"),b=Object(u["a"])(o,n,r,!1,null,"1793f308",null),m=b.exports;d()(b,{VBtn:p["a"],VCol:h["a"],VCombobox:f["a"],VRow:k["a"],VTextField:v["a"]});var x={name:"Change",components:{editTask:m}},w=x,T=Object(u["a"])(w,a,i,!1,null,"365346ff",null);s["default"]=T.exports}}]);
//# sourceMappingURL=chunk-2d0da956.443c7906.js.map