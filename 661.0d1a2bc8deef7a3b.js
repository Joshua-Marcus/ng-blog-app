"use strict";(self.webpackChunkposts_app=self.webpackChunkposts_app||[]).push([[661],{1661:(ne,ot,a)=>{a.r(ot),a.d(ot,{PostsModule:()=>$});var m=a(6895),c=a(433),g=a(8456),o=a(8274);class I{}I.\u0275fac=function(t){return new(t||I)},I.\u0275mod=o.oAB({type:I}),I.\u0275inj=o.cJS({imports:[c.u5,c.UX,m.ez,g.Bz]});var M=a(7579),L=a(5698),U=a(4482),S=a(5403),B=a(8421),nt=a(5032);function E(n){return(0,U.e)((t,e)=>{(0,B.Xf)(n).subscribe((0,S.x)(e,()=>e.complete(),nt.Z)),!e.closed&&t.subscribe(e)})}var st=a(4408),it=a(7565);const rt=new it.v(st.o),yt=rt;var G=a(9751),vt=a(3532);function xt(n,t=rt){return function gt(n){return(0,U.e)((t,e)=>{let s=!1,i=null,r=null,l=!1;const d=()=>{if(r?.unsubscribe(),r=null,s){s=!1;const p=i;i=null,e.next(p)}l&&e.complete()},u=()=>{r=null,l&&e.complete()};t.subscribe((0,S.x)(e,p=>{s=!0,i=p,r||(0,B.Xf)(n(p)).subscribe(r=(0,S.x)(e,d,u))},()=>{l=!0,(!s||!r||r.closed)&&e.complete()}))})}(()=>function bt(n=0,t,e=yt){let s=-1;return null!=t&&((0,vt.K)(t)?e=t:s=t),new G.y(i=>{let r=function Ct(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;r<0&&(r=0);let l=0;return e.schedule(function(){i.closed||(i.next(l++),0<=s?this.schedule(void 0,s):i.complete())},r)})}(n,t))}class w{constructor(){this.internalControl=new c.NI,this.autoCompleteText="no",this.disabled=!1,this.name="default",this.type="text",this.$nginit=new M.x,this.$ngdestroy=new M.x,this._destroyed=new M.x,this.isRequired=!1,this.propagateChange=t=>{},this.onTouched=()=>{},this.$nginit.pipe((0,L.q)(1)).subscribe(()=>this._init()),this.$ngdestroy.pipe((0,L.q)(1)).subscribe(()=>this._destroy())}ngOnInit(){this.$nginit.next()}ngOnDestroy(){this.$ngdestroy.next()}_init(){if(this._destroyed.next(),this.allowAutoComplete?(this.autoCompleteObscureName=this.formControlName||this.name,this.autoCompleteText="yes"):this.autoCompleteObscureName=function Tt(n){let t="";const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=e.length;for(let i=0;i<n;i++)t+=e.charAt(Math.floor(Math.random()*s));return t}(8),this.internalControl.valueChanges.pipe(E(this._destroyed)).pipe(xt(100)).subscribe(()=>{this._value=this.internalControl.value,this.onChange(this._value),this.onTouched()}),!this.label){const t=function Pt(n){return n.replace(/([A-Z])/g," $1").trim().replace(/_/g," ").split(" ").map(s=>s.charAt(0).toUpperCase()+s.substring(1).toLowerCase()).join(" ")}(this.formControlName+"");this.label=t}}_destroy(){this._destroyed.next()}get value(){return this._value}set value(t){this._value=t,this.internalControl.setValue(t)}writeValue(t){void 0!==t&&(this.value=t)}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,setTimeout(()=>{t?this.internalControl.disable():this.internalControl.enable()})}validate(t){return this.internalControl.setValidators(t.validator),this.validationError?{validationError:{valid:!1}}:null}onChange(t){this.validationError="",this.propagateChange(this.validationError?this.value:t)}generateErrorMessage(){let t="";const e=this.internalControl.errors;return(null!=e||null!=e)&&Object.entries(e).forEach(([s,i])=>{"pattern"===s?t+="Please input correct email format. ":"required"===s?t+="This field is required. ":"minlength"===s?t+=`The minimum length for this field is ${e.minlength.requiredLength} characters.`:"maxlength"===s?t+=`The maximum length for this field is ${e.maxlength.requiredLength} characters.`:i.message&&(t+=i.message)}),t}}function It(n,t){if(1&n&&(o.TgZ(0,"div",4)(1,"div"),o._uU(2),o.qZA()()),2&n){const e=o.oxw();o.xp6(2),o.Oqu(e.generateErrorMessage())}}w.\u0275fac=function(t){return new(t||w)},w.\u0275dir=o.lG2({type:w,inputs:{allowAutoComplete:"allowAutoComplete",formControlName:"formControlName",placeholder:"placeholder",label:"label",name:"name",type:"type"}});class h extends w{errorBorder(){return!this.internalControl.valid&&this.internalControl.touched&&this.internalControl.dirty}}h.\u0275fac=function(){let n;return function(e){return(n||(n=o.n5z(h)))(e||h)}}(),h.\u0275cmp=o.Xpm({type:h,selectors:[["form-text"]],inputs:{maxlength:"maxlength",default:"default"},features:[o._Bn([{provide:c.JU,useExisting:(0,o.Gpc)(()=>h),multi:!0},{provide:c.Cf,useExisting:(0,o.Gpc)(()=>h),multi:!0}]),o.qOj],decls:5,vars:13,consts:[[1,"block","text-sm","font-medium","text-gray-700",3,"for"],[1,"mt-1"],["required","",1,"appearance-none","block","w-full","px-3","py-2","border","rounded-md","shadow-sm","placeholder-gray-400","focus:outline-none","focus:ring-primary","focus:border-primary","sm:text-sm",3,"name","id","type","autocomplete","placeholder","formControl","maxlength","value"],["class","alert text-xs text-red-600 mt-1.5",4,"ngIf"],[1,"alert","text-xs","text-red-600","mt-1.5"]],template:function(t,e){1&t&&(o.TgZ(0,"label",0),o._uU(1),o.qZA(),o.TgZ(2,"div",1),o._UZ(3,"input",2),o.YNc(4,It,3,1,"div",3),o.qZA()),2&t&&(o.Q6J("for",e.label),o.xp6(1),o.hij(" ",e.label," "),o.xp6(2),o.Tol(e.errorBorder()?"border-red-300":"border-gray-300"),o.Q6J("name",e.autoCompleteObscureName)("id",e.autoCompleteObscureName)("type",e.type)("autocomplete",e.autoCompleteText)("placeholder",e.placeholder)("formControl",e.internalControl)("maxlength",e.maxlength)("value",e.default),o.xp6(1),o.Q6J("ngIf",!e.internalControl.valid&&e.internalControl.touched&&e.internalControl.dirty))},dependencies:[c.Fj,c.JJ,c.Q7,c.nD,c.oH,m.O5],encapsulation:2});class y extends w{}y.\u0275fac=function(){let n;return function(e){return(n||(n=o.n5z(y)))(e||y)}}(),y.\u0275cmp=o.Xpm({type:y,selectors:[["form-textarea"]],inputs:{rows:"rows"},features:[o._Bn([{provide:c.JU,useExisting:(0,o.Gpc)(()=>y),multi:!0},{provide:c.Cf,useExisting:(0,o.Gpc)(()=>y),multi:!0}]),o.qOj],decls:4,vars:8,consts:[[1,"block","text-sm","font-medium","text-gray-700",3,"for"],[1,"mt-1"],["required","",1,"appearance-none","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","placeholder-gray-400","focus:outline-none","focus:ring-primary","focus:border-primary","sm:text-sm",3,"name","id","autocomplete","placeholder","formControl","rows"]],template:function(t,e){1&t&&(o.TgZ(0,"label",0),o._uU(1),o.qZA(),o.TgZ(2,"div",1),o._UZ(3,"textarea",2),o.qZA()),2&t&&(o.Q6J("for",e.label),o.xp6(1),o.hij(" ",e.label," "),o.xp6(2),o.Q6J("name",e.autoCompleteObscureName)("id",e.autoCompleteObscureName)("autocomplete",e.autoCompleteText)("placeholder",e.placeholder)("formControl",e.internalControl)("rows",e.rows))},dependencies:[c.Fj,c.JJ,c.Q7,c.oH],encapsulation:2});class F{}function at(n,t,e,s,i,r,l){try{var d=n[r](l),u=d.value}catch(p){return void e(p)}d.done?t(u):Promise.resolve(u).then(s,i)}function Z(n){return function(){var t=this,e=arguments;return new Promise(function(s,i){var r=n.apply(t,e);function l(u){at(r,s,i,l,d,"next",u)}function d(u){at(r,s,i,l,d,"throw",u)}l(void 0)})}}F.\u0275fac=function(t){return new(t||F)},F.\u0275mod=o.oAB({type:F}),F.\u0275inj=o.cJS({imports:[c.u5,c.UX,m.ez,g.Bz]});var H=a(3900),J=a(9646),St=a(6805),wt=a(930);function X(n,t){const e="object"==typeof t;return new Promise((s,i)=>{const r=new wt.Hp({next:l=>{s(l),r.unsubscribe()},error:i,complete:()=>{e?s(t.defaultValue):i(new St.K)}});n.subscribe(r)})}var f=a(3078);class v extends f.mm{constructor(){super(...arguments),this.document=f.Ps`
    mutation ($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `}}v.\u0275fac=function(){let n;return function(e){return(n||(n=o.n5z(v)))(e||v)}}(),v.\u0275prov=o.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"});class C extends f.mm{constructor(){super(...arguments),this.document=f.Ps`
    mutation ($id: ID!) {
      deletePost(id: $id)
    }
  `}}C.\u0275fac=function(){let n;return function(e){return(n||(n=o.n5z(C)))(e||C)}}(),C.\u0275prov=o.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"});class b extends f.AE{constructor(){super(...arguments),this.document=f.Ps`
    query Post($id: ID!) {
      post(id: $id) {
        id
        title
        body
      }
    }
  `}}b.\u0275fac=function(){let n;return function(e){return(n||(n=o.n5z(b)))(e||b)}}(),b.\u0275prov=o.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"});class x extends f.AE{constructor(){super(...arguments),this.document=f.Ps`
    query Posts($options: PageQueryOptions) {
      posts(options: $options) {
        data {
          id
          title
          body
        }
      }
    }
  `}}x.\u0275fac=function(){let n;return function(e){return(n||(n=o.n5z(x)))(e||x)}}(),x.\u0275prov=o.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"});class T extends f.mm{constructor(){super(...arguments),this.document=f.Ps`
    mutation ($id: ID!, $input: UpdatePostInput!) {
      updatePost(id: $id, input: $input) {
        id
        title
        body
      }
    }
  `}}T.\u0275fac=function(){let n;return function(e){return(n||(n=o.n5z(T)))(e||T)}}(),T.\u0275prov=o.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"});var q=a(1864);class A{constructor(t){this.fb=t,this.saveClicked=new o.vpe}ngOnInit(){var t=this;return Z(function*(){const e=t.initialModel;if(!e)throw new Error('Must set "initialModel"');t.makeForm(e)})()}makeForm(t){this.postFormGroup=this.fb.group({title:new c.NI(null,c.kI.required),body:new c.NI(null,c.kI.required)}),this.postFormGroup.patchValue(t)}onSubmitForm(){var t=this;return Z(function*(){console.log("OnClickSubmit",t.postFormGroup.valid),t.postFormGroup.valid?t.saveClicked.emit(t.postFormGroup.value):console.log("Invalid Form")})()}}function Ft(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"posts-form",4),o.NdJ("saveClicked",function(i){o.CHM(e);const r=o.oxw();return o.KtG(r.onSubmit(i))}),o.qZA()}if(2&n){const e=o.oxw();o.Q6J("initialModel",e.post)}}A.\u0275fac=function(t){return new(t||A)(o.Y36(c.qu))},A.\u0275cmp=o.Xpm({type:A,selectors:[["posts-form"]],inputs:{initialModel:"initialModel"},outputs:{saveClicked:"saveClicked"},decls:10,vars:1,consts:[[1,"space-y-6",3,"formGroup","submit"],["formControlName","title","name","title","placeholder","Input the title of your post","label","Title"],["formControlName","body","name","body","placeholder","Input the body content of your post","label","Body"],[1,"flex","justify-end","space-x-3"],["type","button",1,"default-btn"],["type","submit",1,"accent-btn"]],template:function(t,e){1&t&&(o.TgZ(0,"form",0),o.NdJ("submit",function(){return e.onSubmitForm()}),o.TgZ(1,"div"),o._UZ(2,"form-text",1),o.qZA(),o.TgZ(3,"div"),o._UZ(4,"form-textarea",2),o.qZA(),o.TgZ(5,"div",3)(6,"button",4),o._uU(7,"Cancel"),o.qZA(),o.TgZ(8,"button",5),o._uU(9,"Submit"),o.qZA()()()),2&t&&o.Q6J("formGroup",e.postFormGroup)},dependencies:[c._Y,c.JJ,c.JL,c.sg,c.u,h,y],encapsulation:2});class O{constructor(t,e,s,i){this.route=t,this.router=e,this.createMutation=s,this.t=i}ngOnInit(){var t=this;return Z(function*(){t.route.paramMap.pipe((0,H.w)(()=>(0,J.of)({title:"",body:""}))).subscribe(s=>{t.post=s})})()}onSubmit(t){var e=this;return Z(function*(){try{yield X(e.createMutation.mutate({input:t})),e.t.success("Post successfully created!",{iconTheme:{primary:"#567992",secondary:"#fffaf5"}}),e.router.navigate(["posts"])}catch{e.t.error("There was a problem creating the post, please try again later.",{iconTheme:{primary:"#e6908b",secondary:"#fffaf5"}})}})()}}O.\u0275fac=function(t){return new(t||O)(o.Y36(g.gz),o.Y36(g.F0),o.Y36(v),o.Y36(q.jE))},O.\u0275cmp=o.Xpm({type:O,selectors:[["app-create-post"]],decls:5,vars:1,consts:[[1,"text-3xl","font-bold","text-dark"],[1,"border-t","border-gray-200","mt-8","px-4","pt-8"],[1,"bg-white","p-8","mx-auto","shadow-md","rounded"],[3,"initialModel","saveClicked",4,"ngIf"],[3,"initialModel","saveClicked"]],template:function(t,e){1&t&&(o.TgZ(0,"h2",0),o._uU(1,"Create Post"),o.qZA(),o.TgZ(2,"div",1)(3,"div",2),o.YNc(4,Ft,1,1,"posts-form",3),o.qZA()()),2&t&&(o.xp6(4),o.Q6J("ngIf",e.post))},dependencies:[m.O5,A],encapsulation:2});var D=a(8505),K=a(4004);function Zt(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"posts-form",4),o.NdJ("saveClicked",function(i){o.CHM(e);const r=o.oxw();return o.KtG(r.onSubmit(i))}),o.qZA()}if(2&n){const e=o.oxw();o.Q6J("initialModel",e.post)}}class j{constructor(t,e,s,i,r){this.route=t,this.postQuery=e,this.updateMutation=s,this.t=i,this.router=r}ngOnInit(){this.route.paramMap.pipe((0,H.w)(e=>{const s=e.get("id");return s?this.postQuery.watch({id:s}).valueChanges.pipe((0,D.b)(i=>console.log("res",i)),(0,K.U)(i=>{const r=i.data.post;return r?(this.postId=+s,r):{title:"",body:""}})):(0,J.of)({title:"",body:""})})).subscribe(e=>{this.post=e})}onSubmit(t){var e=this;return Z(function*(){try{yield X(e.updateMutation.mutate({input:t,id:e.postId})),e.t.success("Post successfully updated!",{iconTheme:{primary:"#567992",secondary:"#fffaf5"}}),e.router.navigate(["posts"])}catch{e.t.error("There was a problem updating the post, please try again later.",{iconTheme:{primary:"#e6908b",secondary:"#fffaf5"}})}})()}}j.\u0275fac=function(t){return new(t||j)(o.Y36(g.gz),o.Y36(b),o.Y36(T),o.Y36(q.jE),o.Y36(g.F0))},j.\u0275cmp=o.Xpm({type:j,selectors:[["app-edit-post"]],decls:5,vars:1,consts:[[1,"text-3xl","font-bold","text-dark"],[1,"border-t","border-gray-200","mt-8","px-4","pt-8"],[1,"bg-white","p-8","mx-auto","shadow-md","rounded"],[3,"initialModel","saveClicked",4,"ngIf"],[3,"initialModel","saveClicked"]],template:function(t,e){1&t&&(o.TgZ(0,"h2",0),o._uU(1,"Edit Post"),o.qZA(),o.TgZ(2,"div",1)(3,"div",2),o.YNc(4,Zt,1,1,"posts-form",3),o.qZA()()),2&t&&(o.xp6(4),o.Q6J("ngIf",e.post))},dependencies:[m.O5,A],encapsulation:2});var At=a(727);let V,$t=1;const Q={};function lt(n){return n in Q&&(delete Q[n],!0)}const Mt={setImmediate(n){const t=$t++;return Q[t]=!0,V||(V=Promise.resolve()),V.then(()=>lt(t)&&n()),t},clearImmediate(n){lt(n)}},{setImmediate:Et,clearImmediate:Ot}=Mt,Y={setImmediate(...n){const{delegate:t}=Y;return(t?.setImmediate||Et)(...n)},clearImmediate(n){const{delegate:t}=Y;return(t?.clearImmediate||Ot)(n)},delegate:void 0},ct=new class kt extends it.v{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:s}=this;let i;t=t||s.shift();do{if(i=t.execute(t.state,t.delay))break}while((t=s[0])&&t.id===e&&s.shift());if(this._active=!1,i){for(;(t=s[0])&&t.id===e&&s.shift();)t.unsubscribe();throw i}}}(class jt extends st.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,s=0){return null!==s&&s>0?super.requestAsyncId(t,e,s):(t.actions.push(this),t._scheduled||(t._scheduled=Y.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,e,s=0){var i;if(null!=s?s>0:this.delay>0)return super.recycleAsyncId(t,e,s);const{actions:r}=t;null!=e&&(null===(i=r[r.length-1])||void 0===i?void 0:i.id)!==e&&(Y.clearImmediate(e),t._scheduled=void 0)}});var zt=a(6063);class W extends M.x{constructor(t=1/0,e=1/0,s=zt.l){super(),this._bufferSize=t,this._windowTime=e,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,e)}next(t){const{isStopped:e,_buffer:s,_infiniteTimeWindow:i,_timestampProvider:r,_windowTime:l}=this;e||(s.push(t),!i&&s.push(r.now()+l)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(t),{_infiniteTimeWindow:s,_buffer:i}=this,r=i.slice();for(let l=0;l<r.length&&!t.closed;l+=s?1:2)t.next(r[l]);return this._checkFinalizedStatuses(t),e}_trimBuffer(){const{_bufferSize:t,_timestampProvider:e,_buffer:s,_infiniteTimeWindow:i}=this,r=(i?1:2)*t;if(t<1/0&&r<s.length&&s.splice(0,s.length-r),!i){const l=e.now();let d=0;for(let u=1;u<s.length&&s[u]<=l;u+=2)d=u;d&&s.splice(0,d+1)}}}var ut=a(576);function dt(n){return!!n&&(n instanceof G.y||(0,ut.m)(n.lift)&&(0,ut.m)(n.subscribe))}var pt=a(233),R=a(515),Nt=a(2843),Ut=a(7159),Jt=a(9841),Dt=a(5363),ft=a(4671),Qt=a(3269),mt=a(262);function Bt(n,t){return n===t}var Gt=a(3099);function tt(n){return"function"==typeof n.ngrxOnStoreInit}function et(n){return"function"==typeof n.ngrxOnStateInit}const Xt=new o.OlP("@ngrx/component-store Initial State");let qt=(()=>{class n{constructor(e){this.destroySubject$=new W(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new W(1),this.isInitialized=!1,this.state$=this.select(s=>s),this.\u0275hasProvider=!1,e&&this.initState(e),this.checkProviderForHooks()}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(e){return s=>{let r,i=!0;const d=(dt(s)?s:(0,J.of)(s)).pipe((0,Dt.Q)(pt.N),(0,D.b)(()=>this.assertStateIsInitialized()),function Yt(...n){const t=(0,Qt.jO)(n);return(0,U.e)((e,s)=>{const i=n.length,r=new Array(i);let l=n.map(()=>!1),d=!1;for(let u=0;u<i;u++)(0,B.Xf)(n[u]).subscribe((0,S.x)(s,p=>{r[u]=p,!d&&!l[u]&&(l[u]=!0,(d=l.every(ft.y))&&(l=null))},nt.Z));e.subscribe((0,S.x)(s,u=>{if(d){const p=[u,...r];s.next(t?t(...p):p)}}))})}(this.stateSubject$),(0,K.U)(([u,p])=>e(p,u)),(0,D.b)(u=>this.stateSubject$.next(u)),(0,mt.K)(u=>i?(r=u,R.E):(0,Nt._)(u)),E(this.destroy$)).subscribe();if(r)throw r;return i=!1,d}}initState(e){(0,Ut.x)([e],pt.N).subscribe(s=>{this.isInitialized=!0,this.stateSubject$.next(s)})}setState(e){"function"!=typeof e?this.initState(e):this.updater(e)()}patchState(e){const s="function"==typeof e?e(this.get()):e;this.updater((i,r)=>({...i,...r}))(s)}get(e){let s;return this.assertStateIsInitialized(),this.stateSubject$.pipe((0,L.q)(1)).subscribe(i=>{s=e?e(i):i}),s}select(...e){const{observablesOrSelectorsObject:s,projector:i,config:r}=function Kt(n){const t=Array.from(n);let e={debounce:!1};if(function Vt(n){return typeof n.debounce<"u"}(t[t.length-1])&&(e={...e,...t.pop()}),1===t.length&&"function"!=typeof t[0])return{observablesOrSelectorsObject:t[0],projector:void 0,config:e};const s=t.pop();return{observablesOrSelectorsObject:t,projector:s,config:e}}(e);return(function Wt(n,t){return Array.isArray(n)&&0===n.length&&t}(s,i)?this.stateSubject$:(0,Jt.a)(s)).pipe(r.debounce?function Ht(){return n=>new G.y(t=>{let e,s;const i=new At.w0;return i.add(n.subscribe({complete:()=>{e&&t.next(s),t.complete()},error:r=>{t.error(r)},next:r=>{s=r,e||(e=ct.schedule(()=>{t.next(s),e=void 0}),i.add(e))}})),i})}():n=>n,i?(0,K.U)(d=>s.length>0&&Array.isArray(d)?i(...d):i(d)):n=>n,function Lt(n,t=ft.y){return n=n??Bt,(0,U.e)((e,s)=>{let i,r=!0;e.subscribe((0,S.x)(s,l=>{const d=t(l);(r||!n(i,d))&&(r=!1,i=d,s.next(l))}))})}(),function _t(n,t,e){let s,i=!1;return n&&"object"==typeof n?({bufferSize:s=1/0,windowTime:t=1/0,refCount:i=!1,scheduler:e}=n):s=n??1/0,(0,Gt.B)({connector:()=>new W(s,t,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}({refCount:!0,bufferSize:1}),E(this.destroy$))}effect(e){const s=new M.x;return e(s).pipe(E(this.destroy$)).subscribe(),i=>(dt(i)?i:(0,J.of)(i)).pipe(E(this.destroy$)).subscribe(l=>{s.next(l)})}checkProviderForHooks(){ct.schedule(()=>{if((0,o.X6Q)()&&(tt(this)||et(this))&&!this.\u0275hasProvider){const e=[tt(this)?"OnStoreInit":"",et(this)?"OnStateInit":""].filter(s=>s);console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${e.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`)}})}assertStateIsInitialized(){if(!this.isInitialized)throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`)}}return n.\u0275fac=function(e){return new(e||n)(o.LFG(Xt,8))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})();class P extends qt{constructor(t){super({posts:[]}),this.postsQuery=t,this.posts$=this.select(({posts:e})=>e),this.fetchAll=this.effect(e=>e.pipe((0,H.w)(()=>this.postsQuery.fetch().pipe(function Rt(n,t,e){return s=>s.pipe((0,D.b)({next:n,complete:e}),(0,mt.K)(i=>(t(i),R.E)))}(s=>this.addMany(s.data.posts.data),s=>(console.error(`Error fetching villagers: ${s}`),R.E)))))),this.addMany=this.updater((e,s)=>({posts:s})),this.updateOne=this.updater((e,s)=>({posts:e.posts.map(i=>i.id===s?.id?{...i,...s}:i)}))}}function te(n,t){1&n&&(o.TgZ(0,"div",1),o.O4$(),o.TgZ(1,"svg",2)(2,"circle",3),o._UZ(3,"animate",4)(4,"animate",5),o.qZA(),o.TgZ(5,"circle",6),o._UZ(6,"animate",7)(7,"animate",8),o.qZA(),o.TgZ(8,"circle",9),o._UZ(9,"animate",4)(10,"animate",5),o.qZA()()())}P.\u0275fac=function(t){return new(t||P)(o.LFG(x))},P.\u0275prov=o.Yz7({token:P,factory:P.\u0275fac});class k{}k.\u0275fac=function(t){return new(t||k)},k.\u0275cmp=o.Xpm({type:k,selectors:[["app-loader"]],inputs:{active:"active"},decls:1,vars:1,consts:[["class","absolute left-1/2 top-1/2",4,"ngIf"],[1,"absolute","left-1/2","top-1/2"],["width","120","height","30","viewBox","0 0 120 30",1,"fill-primary"],["cx","15","cy","15","r","15"],["attributeName","r","from","15","to","15","begin","0s","dur","0.8s","values","15;9;15","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","1","to","1","begin","0s","dur","0.8s","values","1;.5;1","calcMode","linear","repeatCount","indefinite"],["cx","60","cy","15","r","9","fill-opacity","0.3"],["attributeName","r","from","9","to","9","begin","0s","dur","0.8s","values","9;15;9","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","0.5","to","0.5","begin","0s","dur","0.8s","values",".5;1;.5","calcMode","linear","repeatCount","indefinite"],["cx","105","cy","15","r","15"]],template:function(t,e){1&t&&o.YNc(0,te,11,0,"div",0),2&t&&o.Q6J("ngIf",e.active)},dependencies:[m.O5],encapsulation:2});class z{constructor(){this.onClickEdit=new o.vpe,this.onClickDelete=new o.vpe}}function ee(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"post",4),o.NdJ("onClickEdit",function(i){o.CHM(e);const r=o.oxw();return o.KtG(r.routeToEditPost(i))})("onClickDelete",function(i){o.CHM(e);const r=o.oxw();return o.KtG(r.onDeletePost(i))}),o.qZA()}2&n&&o.Q6J("post",t.$implicit)}z.\u0275fac=function(t){return new(t||z)},z.\u0275cmp=o.Xpm({type:z,selectors:[["post"]],inputs:{post:"post"},outputs:{onClickEdit:"onClickEdit",onClickDelete:"onClickDelete"},decls:15,vars:2,consts:[[1,"flex","max-w-xl","flex-col","items-start","justify-between","border-b","border-gray-400","border-opacity-50","pb-4"],[1,"mt-3","text-lg","font-semibold","leading-6","text-dark","line-clamp-1"],[1,"mt-5","text-sm","leading-6","text-gray-600","line-clamp-2","overflow-hidden","text-ellipsis"],[1,"mt-8","flex","items-center","gap-x-4"],[1,"flex","gap-x-4","text-xs"],[1,"txt-btn","text-dark",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"w-4","h-4"],["d","M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"],[1,"txt-btn","text-primary",3,"click"],["fill-rule","evenodd","d","M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z","clip-rule","evenodd"]],template:function(t,e){1&t&&(o.TgZ(0,"article",0)(1,"h3",1),o._uU(2),o.qZA(),o.TgZ(3,"p",2),o._uU(4),o.qZA(),o.TgZ(5,"div",3)(6,"div",4)(7,"p",5),o.NdJ("click",function(){return e.onClickEdit.emit(e.post.id)}),o.O4$(),o.TgZ(8,"svg",6),o._UZ(9,"path",7),o.qZA(),o._uU(10," Edit "),o.qZA(),o.kcU(),o.TgZ(11,"p",8),o.NdJ("click",function(){return e.onClickDelete.emit(e.post.id)}),o.O4$(),o.TgZ(12,"svg",6),o._UZ(13,"path",9),o.qZA(),o._uU(14," Delete "),o.qZA()()()()),2&t&&(o.xp6(2),o.hij(" ",e.post.title," "),o.xp6(2),o.hij(" ",e.post.body," "))},encapsulation:2});class N{constructor(t,e,s,i){this.store=t,this.router=e,this.deleteMutation=s,this.t=i,this.posts$=this.store.posts$}ngOnInit(){this.store.fetchAll()}routeToEditPost(t){this.router.navigate([`/posts/edit/${t}`])}onDeletePost(t){var e=this;return Z(function*(){try{yield X(e.deleteMutation.mutate({id:t})),e.t.success("Post successfully deleted!",{iconTheme:{primary:"#567992",secondary:"#fffaf5"}})}catch{e.t.error("There was a problem deleting the post, please try again later.",{iconTheme:{primary:"#e6908b",secondary:"#fffaf5"}})}})()}}N.\u0275fac=function(t){return new(t||N)(o.Y36(P),o.Y36(g.F0),o.Y36(C),o.Y36(q.jE))},N.\u0275cmp=o.Xpm({type:N,selectors:[["app-posts-list"]],features:[o._Bn([P])],decls:7,vars:6,consts:[[1,"text-3xl","font-bold","text-dark"],[3,"active"],[1,"mx-auto","grid","grid-cols-1","gap-x-12","gap-y-12","border-t","border-gray-200","mt-8","pt-8","lg:grid-cols-2"],[3,"post","onClickEdit","onClickDelete",4,"ngFor","ngForOf"],[3,"post","onClickEdit","onClickDelete"]],template:function(t,e){if(1&t&&(o.TgZ(0,"h2",0),o._uU(1,"Posts"),o.qZA(),o._UZ(2,"app-loader",1),o.ALo(3,"async"),o.TgZ(4,"div",2),o.YNc(5,ee,1,1,"post",3),o.ALo(6,"async"),o.qZA()),2&t){let s;o.xp6(2),o.Q6J("active",!(null!=(s=o.lcZ(3,2,e.posts$))&&s.length)),o.xp6(3),o.Q6J("ngForOf",o.lcZ(6,4,e.posts$))}},dependencies:[m.sg,k,z,m.Ov],encapsulation:2,changeDetection:0});const oe=[{path:"",component:N},{path:"create",component:O},{path:"edit/:id",component:j}];class ${}$.\u0275fac=function(t){return new(t||$)},$.\u0275mod=o.oAB({type:$}),$.\u0275inj=o.cJS({imports:[m.ez,g.Bz.forChild(oe),c.u5,c.UX,I,F]})}}]);