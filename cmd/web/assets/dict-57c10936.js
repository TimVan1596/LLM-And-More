import{d as N,r as u,x as L,aC as ne,c as O,U as D,k as I,l as M,m as t,j as e,Z as A,F as J,Y as Z,al as G,am as X,W as p,P as ee,av as U,a1 as te,$ as B,ak as de,_ as V,ax as ie,ac as ce,o as ue,S as pe,aA as z,Q as me,n as E,aB as fe}from"./utils-b5033829.js";import{_ as _e}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-6d0dee73.js";import{_ as Q}from"./UiParentCard.vue_vue_type_script_setup_true_lang-376c5560.js";import{A as ye}from"./AlertBlock-47a7c50e.js";import{a5 as R,ae as ve,_ as le,V as be}from"./index-a319b856.js";import{V as he}from"./VTextarea-b2446ea6.js";import{V as Ve}from"./VForm-5d962dd0.js";import{_ as ge}from"./ConfirmByInput.vue_vue_type_style_index_0_lang-6b5cfced.js";import{_ as xe}from"./ConfirmByClick.vue_vue_type_style_index_0_lang-0325f4ff.js";import{V as P}from"./VCol-3b0a2491.js";import{V as ae}from"./VRow-ca04fd4f.js";import"./IconInfoCircle-10f069c7.js";import"./VAlert-b2ba5739.js";import"./Confirm-8cb73da5.js";const S=b=>(G("data-v-682f93d5"),b=b(),X(),b),ke=S(()=>p("label",{class:"required"},"字典编号",-1)),De=S(()=>p("label",{class:"required"},"字典名称",-1)),we=S(()=>p("label",{class:"required"},"字典键值",-1)),Ce=S(()=>p("label",{class:"required"},"字典键值",-1)),Ie=S(()=>p("label",{class:"required"},"字典排序",-1)),Te=S(()=>p("label",{class:"required"},"值类型",-1)),$e=S(()=>p("label",null,"字典备注",-1)),Fe=N({__name:"DictForm",props:{type:{default:"add"},parentId:{default:0}},setup(b,{expose:$}){const T={parentId:0,code:"",dictLabel:"",dictValue:"",dictType:null,sort:0,remark:""},x=b,l=u({...T}),_=u(),i=L({code:[s=>!!s||"请输入字典编号"],dictLabel:[s=>!!s||"请输入字典名称"],dictValue:[s=>g(s)],sort:[s=>s!==""||"请输入字典排序"],dictType:[s=>!!s||"请选择值类型"]}),g=s=>s?l.value.dictType==="json"&&!ne.isJson(s)?"JSON格式不正确":!0:"请输入字典键值",f=O(()=>x.type==="edit"),n=O(()=>f.value||x.type==="add"&&x.parentId!==0);return $({reset:(s={})=>{l.value={...T,...s}},setFormData:s=>{l.value={...s}},getFormData(){return{...l.value,parentId:x.parentId}},getRef(){return _.value}}),(s,o)=>{const F=D("CodeMirror"),k=D("Select");return I(),M(Ve,{ref_key:"refForm",ref:_,class:"my-form"},{default:t(()=>[e(R,{type:"text",placeholder:"请输入字典编号","hide-details":"auto",clearable:"",rules:i.code,modelValue:l.value.code,"onUpdate:modelValue":o[0]||(o[0]=r=>l.value.code=r),disabled:n.value},{prepend:t(()=>[ke]),_:1},8,["rules","modelValue","disabled"]),e(R,{type:"text",placeholder:"请输入字典名称","hide-details":"auto",clearable:"",rules:i.dictLabel,modelValue:l.value.dictLabel,"onUpdate:modelValue":o[1]||(o[1]=r=>l.value.dictLabel=r)},{prepend:t(()=>[De]),_:1},8,["rules","modelValue"]),s.parentId!==0?(I(),A(J,{key:0},[l.value.dictType==="json"?(I(),M(ve,{key:0,modelValue:l.value.dictValue,"onUpdate:modelValue":o[3]||(o[3]=r=>l.value.dictValue=r),rules:i.dictValue,"center-affix":!1,"validate-on":"submit"},{prepend:t(()=>[we]),default:t(()=>[e(F,{modelValue:l.value.dictValue,"onUpdate:modelValue":o[2]||(o[2]=r=>l.value.dictValue=r),placeholder:"请输入"},null,8,["modelValue"])]),_:1},8,["modelValue","rules"])):(I(),M(R,{key:1,type:"text",placeholder:"请输入字典键值","hide-details":"auto",clearable:"",rules:i.dictValue,modelValue:l.value.dictValue,"onUpdate:modelValue":o[4]||(o[4]=r=>l.value.dictValue=r)},{prepend:t(()=>[Ce]),_:1},8,["rules","modelValue"]))],64)):Z("",!0),e(R,{type:"number",placeholder:"请输入字典排序","hide-details":"auto",rules:i.sort,modelValue:l.value.sort,"onUpdate:modelValue":o[5]||(o[5]=r=>l.value.sort=r),modelModifiers:{number:!0}},{prepend:t(()=>[Ie]),_:1},8,["rules","modelValue"]),e(k,{placeholder:"请选择值类型",rules:i.dictType,mapDictionary:{code:"sys_dict_type"},modelValue:l.value.dictType,"onUpdate:modelValue":o[6]||(o[6]=r=>l.value.dictType=r)},{prepend:t(()=>[Te]),_:1},8,["rules","modelValue"]),e(he,{modelValue:l.value.remark,"onUpdate:modelValue":o[7]||(o[7]=r=>l.value.remark=r),modelModifiers:{trim:!0},placeholder:"请输入字典备注",clearable:""},{prepend:t(()=>[$e]),_:1},8,["modelValue"])]),_:1},512)}}});const oe=le(Fe,[["__scopeId","data-v-682f93d5"]]),Pe={class:"mx-auto mt-3",style:{width:"540px"}},Le=N({__name:"CreateDictPane",emits:["submit"],setup(b,{expose:$,emit:T}){const x=T,l=L({operateType:"add"}),_=u(),i=u(),g=async({showLoading:f})=>{const{valid:n}=await i.value.getRef().validate();if(n){const v=i.value.getFormData(),c={url:"",method:""};l.operateType=="add"?(c.url="/sys/dict",c.method="post"):(c.url=`/sys/dict/${v.id}`,c.method="put");const[s,o]=await U[c.method]({showLoading:f,showSuccess:!0,url:c.url,data:v});o&&(_.value.hide(),x("submit"))}else te.warning("请处理页面标错的地方后，再尝试提交")};return $({show({title:f,operateType:n,infos:v}){_.value.show({title:f}),l.operateType=n,ee(()=>{l.operateType==="add"?i.value.reset():i.value.setFormData(v)})}}),(f,n)=>{const v=D("Pane");return I(),M(v,{ref_key:"refPane",ref:_,onSubmit:g},{default:t(()=>[p("div",Pe,[e(oe,{ref_key:"refDictForm",ref:i},null,512)])]),_:1},512)}}}),Se=b=>(G("data-v-7706e3d6"),b=b(),X(),b),Be={class:"d-flex justify-space-between align-center w-100 pr-2 overflow-hidden"},Re={class:"text-truncate"},Ue=["onClick"],Me=["onClick"],qe=Se(()=>p("br",null,null,-1)),Ae={class:"text-primary font-weight-black"},Ne=N({__name:"ConfigDictPane",emits:["refresh"],setup(b,{expose:$,emit:T}){const x=T,l=u([]),_=u(),i=u(),g=u(),f=u(),n=L({type:"edit",parentId:0,title:"编辑"}),v=u(0),c=u(null),s=u(),o=L({id:null,currentLabel:""}),F=u(!1),k=async()=>{const[a,m]=await U.get({url:"/sys/dict",data:{parentId:v.value}});m&&(l.value=m.list||[],c.value||q(m.list[0]),ee(()=>{r()}))},r=()=>{i.value.setCurrentKey(c.value)},q=a=>{n.title=`编辑（${a.dictLabel}）`,n.type="edit",c.value=a.id;const m={id:a.id,parentId:a.parentId,code:a.code,dictValue:a.dictValue,dictLabel:a.dictLabel,dictType:a.dictType,sort:a.sort,remark:a.remark};n.parentId=a.parentId,f.value.setFormData(m)},K=async()=>{const{valid:a}=await f.value.getRef().validate();if(a){const m=f.value.getFormData(),d={url:"",method:""};n.type=="add"?(d.url="/sys/dict",d.method="post"):(d.url=`/sys/dict/${m.id}`,d.method="put");const[H,Y]=await U[d.method]({showLoading:g.value.$el,showSuccess:!0,url:d.url,data:m});Y&&(await k(),n.type==="add"&&f.value.reset({code:m.code}),m.parentId===0&&n.type==="edit"&&(F.value=!0))}else te.warning("请处理页面标错的地方后，再尝试提交")},y=a=>{n.title=`新增子项(${a.dictLabel})`,n.type="add",n.parentId=a.id,c.value=a.id,r(),f.value.reset({code:a.code}),C()},h=a=>{o.currentLabel=a.dictLabel,o.id=a.id,s.value.show({width:"450px",confirmText:o.currentLabel})},w=async(a={})=>{const[m,d]=await U.delete({...a,showSuccess:!0,url:`/sys/dict/${o.id}`});d&&(s.value.hide(),o.id===c.value&&(c.value=null),k())},C=()=>{g.value&&ie(g.value.$el,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:"cubic-bezier(0.4, 0, 0.2, 1)"})};function W(){c.value=null,F.value&&x("refresh")}return $({show({title:a,id:m}){_.value.show({width:900,showActions:!1,title:a}),v.value=m,F.value=!1,k()}}),(a,m)=>{const d=D("el-tree"),H=D("AiBtn"),Y=D("Pane");return I(),M(Y,{ref_key:"refPane",ref:_,onClose:W},{default:t(()=>[e(ae,null,{default:t(()=>[e(P,{cols:"5"},{default:t(()=>[e(Q,null,{default:t(()=>[e(d,{ref_key:"refTree",ref:i,data:l.value,"node-key":"id","default-expand-all":"","highlight-current":!0,"expand-on-click-node":!1,props:{label:"dictLabel"},onNodeClick:q},{default:t(({node:se,data:j})=>[p("span",Be,[p("span",Re,B(se.label),1),p("span",{class:"ml-2",onClick:m[0]||(m[0]=de(()=>{},["stop"]))},[p("a",{class:"link text-info",onClick:re=>y(j)},"添加",8,Ue),j.parentId!==0?(I(),A("a",{key:0,class:"link text-error ml-2",onClick:re=>h(j)},"删除",8,Me)):Z("",!0)])])]),_:1},8,["data"])]),_:1})]),_:1}),e(P,{cols:"7"},{default:t(()=>[e(Q,{class:"dict-card",ref_key:"refDictFormCard",ref:g,title:n.title},{action:t(()=>[e(H,{class:"ml-2",size:"small",color:"primary",variant:"flat",onClick:K},{default:t(()=>[V("提交")]),_:1})]),default:t(()=>[e(oe,{ref_key:"refDictForm",ref:f,type:n.type,parentId:n.parentId},null,8,["type","parentId"])]),_:1},8,["title"])]),_:1})]),_:1}),e(xe,{ref_key:"refConfirmDelete",ref:s,onSubmit:w},{text:t(()=>[V(" 这是进行一项操作时必须了解的重要信息"),qe,V(" 您将要删除 "),p("span",Ae,B(o.currentLabel),1),V(" ，确定要继续吗？ ")]),_:1},512)]),_:1},512)}}});const Ke=le(Ne,[["__scopeId","data-v-7706e3d6"]]),We=p("span",{class:"text-primary"},"删除",-1),Ye=p("br",null,null,-1),je={class:"text-primary font-weight-black"},Qe=p("br",null,null,-1),rt=N({__name:"dict",setup(b){const{getLabels:$,loadDictTree:T}=ce();T(["sys_dict_type"]);const x=u({title:"系统字典"}),l=u([{text:"系统管理",disabled:!1,href:"#"},{text:"系统字典",disabled:!0,href:"#"}]),_=L({code:"",label:""}),i=L({list:[],total:0}),g=u(),f=u(),n=u(),v=u(),c=L({id:null,currentCode:""}),s=y=>{let h=[];return h.push({text:"字典配置",color:"info",click(){K(y)}}),h.push({text:"删除",color:"error",click(){o(y)}}),h},o=y=>{c.currentCode=y.code,c.id=y.id,v.value.show({width:"450px",confirmText:c.currentCode})},F=async(y={})=>{const[h,w]=await U.delete({...y,showSuccess:!0,url:`/sys/dict/${c.id}`});w&&(v.value.hide(),k())},k=async(y={})=>{const[h,w]=await U.get({url:"/sys/dict",showLoading:n.value.el,data:{..._,...y}});w?(i.list=w.list||[],i.total=w.total):(i.list=[],i.total=0)},r=()=>{n.value.query({page:1})},q=()=>{g.value.show({title:"添加字典",operateType:"add"})},K=y=>{f.value.show({title:`字典配置（${y.dictLabel}）`,id:y.id})};return ue(()=>{k()}),(y,h)=>{const w=D("ButtonsInForm"),C=D("el-table-column"),W=D("ButtonsInTable"),a=D("TableWithPager"),m=pe("copy");return I(),A(J,null,[e(_e,{title:x.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(Q,null,{default:t(()=>[e(ae,null,{default:t(()=>[e(P,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(R,{modelValue:_.code,"onUpdate:modelValue":h[0]||(h[0]=d=>_.code=d),label:"请输入字典编号","hide-details":"",clearable:"",onKeyup:z(r,["enter"]),"onClick:clear":r},null,8,["modelValue","onKeyup"])]),_:1}),e(P,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(R,{modelValue:_.label,"onUpdate:modelValue":h[1]||(h[1]=d=>_.label=d),label:"请输入字典名称","hide-details":"",clearable:"",onKeyup:z(r,["enter"]),"onClick:clear":r},null,8,["modelValue","onKeyup"])]),_:1}),e(P,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(w,null,{default:t(()=>[e(be,{color:"primary",onClick:q},{default:t(()=>[V("添加字典")]),_:1})]),_:1})]),_:1}),e(P,{cols:"12"},{default:t(()=>[e(ye,null,{default:t(()=>[V("修改之后将实时生效，请谨慎操作！")]),_:1})]),_:1}),e(P,{cols:"12"},{default:t(()=>[e(a,{onQuery:k,ref_key:"tableWithPagerRef",ref:n,infos:i},{default:t(()=>[e(C,{label:"字典编号",width:"200px",prop:"code"},{default:t(({row:d})=>[me((I(),A("span",null,[V(B(d.code),1)])),[[m,d.code]])]),_:1}),e(C,{label:"字典名称",prop:"dictLabel",width:"150px"}),e(C,{label:"字典排序",prop:"sort",width:"100px"}),e(C,{label:"字典类型",width:"100px"},{default:t(({row:d})=>[p("span",null,B(E($)([["sys_dict_type",d.dictType]])),1)]),_:1}),e(C,{label:"备注",prop:"remark","min-width":"200px"}),e(C,{label:"更新时间","min-width":"160px"},{default:t(({row:d})=>[V(B(E(fe).dateFormat(d.updatedAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),e(C,{label:"操作",width:"160px",fixed:"right"},{default:t(({row:d})=>[e(W,{buttons:s(d)},null,8,["buttons"])]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1})]),_:1}),e(ge,{ref_key:"refConfirmDelete",ref:v,onSubmit:F},{text:t(()=>[V(" 此操作将会"),We,V("正在使用的字典"),Ye,V(" 字典编号："),p("span",je,B(c.currentCode),1),Qe,V(" 你还要继续吗？ ")]),_:1},512),e(Le,{ref_key:"createDictPaneRef",ref:g,onSubmit:r},null,512),e(Ke,{ref_key:"configDictPaneRef",ref:f,onRefresh:k},null,512)],64)}}});export{rt as default};
