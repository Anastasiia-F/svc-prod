(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9O2V":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){function l(l,n){this.route=l,this.router=n}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe(function(n){l.plan=n.plan.replace("-"," "),l.price=n.price,l.vrm=n.vrm})},l}(),a=function(){return function(){}}(),o=u("pMnS"),i=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),r=t.ob({encapsulation:0,styles:[[".svc-payment-details-description[_ngcontent-%COMP%]{padding:80px 0 50px}.svc-payment-details-description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:18px}"]],data:{}});function s(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,12,"div",[["class","svc-payment-details-description"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"div",[["class","fs-36 font-secondary cl-purple"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Payment Details"])),(l()(),t.qb(4,0,null,null,9,"div",[["class","mt-24"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"p",[["class","fw-300"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["You're one step away from getvting your check"])),(l()(),t.qb(7,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["- It's one off payment and there are no further commitments"])),(l()(),t.qb(10,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["- Our online payment gateway is super secure"])),(l()(),t.qb(12,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["- You'll get instant access to the report and support from our team"]))],null,null)}var b=u("21Lb"),p=u("OzfB"),c=u("gIcY"),f=u("Ip0R"),d=u("hUWP"),g=u("Fzqc"),m=u("fNgX"),y=u("Hf/j"),x=u("ZYjt"),h=u("CGbT"),v=u("7dP1"),C=function(){function l(l,n,u){this.auth=l,this.notifier=n,this.router=u,this.submitted=!1}return l.prototype.ngOnInit=function(){this.paymentForm=new c.h({name:new c.f("",[c.r.required]),phone:new c.f("",[]),creditCard:new c.f("",[c.r.required]),email:new c.f("",[]),receiveInfo:new c.f(!1),agreePolicies:new c.f(!1)})},l.prototype.onPaymentSubmit=function(){var l=this;if(this.submitted=!0,this.paymentForm.errors)this.notifier.notify("error","Please correct your infos.");else if(this.paymentForm.value.agreePolicies){var n=this.paymentForm.value,u={creditType:"Basic Check"===this.plan?"Basic":"Full",registration:this.vrm};if(n.credits=[],"Multicheck"!==this.plan)n.credits.push(u);else for(var t=0,e=[0,1,2];t<e.length;t++)e[t]>0&&(u.registration=""),n.credits.push(u);this.auth.signUp(n).subscribe(function(n){l.router.navigate(["auth","set-password"])})}else this.notifier.notify("error","You should agree on our Terms & Conditions.")},Object.defineProperty(l.prototype,"name",{get:function(){return this.paymentForm.get("name")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"phone",{get:function(){return this.paymentForm.get("phone")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"creditCard",{get:function(){return this.paymentForm.get("creditCard")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"email",{get:function(){return this.paymentForm.get("email")},enumerable:!0,configurable:!0}),l}(),k=u("ZYCi"),q=t.ob({encapsulation:0,styles:[["button[_ngcontent-%COMP%]{border-top-right-radius:3px;border-bottom-right-radius:3px;color:#fff;background:#10cf6c;border:none;cursor:pointer;padding:12px}button[_ngcontent-%COMP%]:focus{outline:0!important}input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{border:none;padding:8px;margin:16px 0;background:#ececec;width:95%;font-size:18px;border-radius:2px;display:block}input[type=email][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus{outline:0}.input-invalid[_ngcontent-%COMP%]{border:1px solid #ff8e8c!important}.form-border[_ngcontent-%COMP%]{padding:14px;border-bottom:2px solid #ececec;margin-bottom:24px}"]],data:{}});function z(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,107,"div",[["fxFlex",""]],null,null,null,null,null)),t.pb(1,671744,null,0,b.a,[t.k,p.i,p.e,b.f,p.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(2,0,null,null,1,"div",[["class","cl-purple fs-22 font-secondary py-36"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Pay using card"])),(l()(),t.qb(4,0,null,null,103,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,a=l.component;return"submit"===n&&(e=!1!==t.zb(l,6).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.zb(l,6).onReset()&&e),"ngSubmit"===n&&(e=!1!==a.onPaymentSubmit()&&e),e},null,null)),t.pb(5,16384,null,0,c.u,[],null,null),t.pb(6,540672,null,0,c.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Eb(2048,null,c.c,null,[c.i]),t.pb(8,16384,null,0,c.n,[[4,c.c]],null,null),(l()(),t.qb(9,0,null,null,55,"div",[["fxLayout","row wrap"],["fxLayoutAlign","space-between start"]],null,null,null,null,null)),t.pb(10,671744,null,0,b.c,[t.k,p.i,[2,b.i],p.f],{fxLayout:[0,"fxLayout"]},null),t.pb(11,671744,null,0,b.b,[t.k,p.i,[2,b.g],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(12,0,null,null,11,"div",[["fxFlex","49"]],null,null,null,null,null)),t.pb(13,671744,null,0,b.a,[t.k,p.i,p.e,b.f,p.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(14,0,null,null,9,"input",[["formControlName","name"],["name","name"],["placeholder","Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,17)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,17).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,17)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,17)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(15,278528,null,0,f.i,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Cb(16,{"input-invalid":0}),t.pb(17,16384,null,0,c.d,[t.F,t.k,[2,c.a]],null,null),t.Eb(1024,null,c.k,function(l){return[l]},[c.d]),t.pb(19,671744,null,0,c.g,[[3,c.c],[8,null],[8,null],[6,c.k],[2,c.w]],{name:[0,"name"]},null),t.Eb(2048,null,c.l,null,[c.g]),t.pb(21,16384,null,0,c.m,[[4,c.l]],null,null),t.pb(22,933888,null,0,d.a,[t.k,p.i,p.f,t.t,t.u,t.F,[6,f.i]],{ngClass:[0,"ngClass"]},null),t.Cb(23,{"input-invalid":0}),(l()(),t.qb(24,0,null,null,11,"div",[["fxFlex","49"]],null,null,null,null,null)),t.pb(25,671744,null,0,b.a,[t.k,p.i,p.e,b.f,p.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(26,0,null,null,9,"input",[["formControlName","phone"],["name","phone"],["placeholder","Phone"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,29)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,29).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,29)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,29)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(27,278528,null,0,f.i,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Cb(28,{"input-invalid":0}),t.pb(29,16384,null,0,c.d,[t.F,t.k,[2,c.a]],null,null),t.Eb(1024,null,c.k,function(l){return[l]},[c.d]),t.pb(31,671744,null,0,c.g,[[3,c.c],[8,null],[8,null],[6,c.k],[2,c.w]],{name:[0,"name"]},null),t.Eb(2048,null,c.l,null,[c.g]),t.pb(33,16384,null,0,c.m,[[4,c.l]],null,null),t.pb(34,933888,null,0,d.a,[t.k,p.i,p.f,t.t,t.u,t.F,[6,f.i]],{ngClass:[0,"ngClass"]},null),t.Cb(35,{"input-invalid":0}),(l()(),t.qb(36,0,null,null,14,"div",[["fxFlex","49"]],null,null,null,null,null)),t.pb(37,671744,null,0,b.a,[t.k,p.i,p.e,b.f,p.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(38,0,null,null,1,"label",[["class","cl-secondary"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Card or debit card"])),(l()(),t.qb(40,0,null,null,10,"input",[["formControlName","creditCard"],["name","creditCard"],["placeholder","Card"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,43)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,43).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,43)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,43)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.zb(l,44).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.zb(l,44).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,44).onTouched()&&e),e},null,null)),t.pb(41,278528,null,0,f.i,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Cb(42,{"input-invalid":0}),t.pb(43,16384,null,0,c.d,[t.F,t.k,[2,c.a]],null,null),t.pb(44,16384,null,0,c.t,[t.F,t.k],null,null),t.Eb(1024,null,c.k,function(l,n){return[l,n]},[c.d,c.t]),t.pb(46,671744,null,0,c.g,[[3,c.c],[8,null],[8,null],[6,c.k],[2,c.w]],{name:[0,"name"]},null),t.Eb(2048,null,c.l,null,[c.g]),t.pb(48,16384,null,0,c.m,[[4,c.l]],null,null),t.pb(49,933888,null,0,d.a,[t.k,p.i,p.f,t.t,t.u,t.F,[6,f.i]],{ngClass:[0,"ngClass"]},null),t.Cb(50,{"input-invalid":0}),(l()(),t.qb(51,0,null,null,13,"div",[["fxFlex","49"]],null,null,null,null,null)),t.pb(52,671744,null,0,b.a,[t.k,p.i,p.e,b.f,p.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(53,0,null,null,1,"label",[["class","cl-secondary"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["We will send a link to the report to:"])),(l()(),t.qb(55,0,null,null,9,"input",[["formControlName","email"],["name","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,58)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,58).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,58)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,58)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(56,278528,null,0,f.i,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Cb(57,{"input-invalid":0}),t.pb(58,16384,null,0,c.d,[t.F,t.k,[2,c.a]],null,null),t.Eb(1024,null,c.k,function(l){return[l]},[c.d]),t.pb(60,671744,null,0,c.g,[[3,c.c],[8,null],[8,null],[6,c.k],[2,c.w]],{name:[0,"name"]},null),t.Eb(2048,null,c.l,null,[c.g]),t.pb(62,16384,null,0,c.m,[[4,c.l]],null,null),t.pb(63,933888,null,0,d.a,[t.k,p.i,p.f,t.t,t.u,t.F,[6,f.i]],{ngClass:[0,"ngClass"]},null),t.Cb(64,{"input-invalid":0}),(l()(),t.qb(65,0,null,null,1,"div",[["class","my-24 fs-18 cl-secondary"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["+ (Optional) Have a referral code?"])),(l()(),t.qb(67,0,null,null,11,"div",[["fxLayout",""],["fxLayoutAlign","start center"],["fxLayoutGap","8px"]],null,null,null,null,null)),t.pb(68,671744,null,0,b.c,[t.k,p.i,[2,b.i],p.f],{fxLayout:[0,"fxLayout"]},null),t.pb(69,1720320,null,0,b.d,[t.k,t.B,g.b,p.i,[2,b.h],p.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.pb(70,671744,null,0,b.b,[t.k,p.i,[2,b.g],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(71,0,null,null,5,"input",[["formControlName","receiveInfo"],["id","receiveInfo"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.zb(l,72).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.zb(l,72).onTouched()&&e),e},null,null)),t.pb(72,16384,null,0,c.b,[t.F,t.k],null,null),t.Eb(1024,null,c.k,function(l){return[l]},[c.b]),t.pb(74,671744,null,0,c.g,[[3,c.c],[8,null],[8,null],[6,c.k],[2,c.w]],{name:[0,"name"]},null),t.Eb(2048,null,c.l,null,[c.g]),t.pb(76,16384,null,0,c.m,[[4,c.l]],null,null),(l()(),t.qb(77,0,null,null,1,"label",[["for","receiveInfo"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Tick the box if you want to receive discounts, offers, news and important motoring information"])),(l()(),t.qb(79,0,null,null,14,"div",[["fxLayout",""],["fxLayoutAlign","start center"],["fxLayoutGap","8px"]],null,null,null,null,null)),t.pb(80,671744,null,0,b.c,[t.k,p.i,[2,b.i],p.f],{fxLayout:[0,"fxLayout"]},null),t.pb(81,1720320,null,0,b.d,[t.k,t.B,g.b,p.i,[2,b.h],p.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.pb(82,671744,null,0,b.b,[t.k,p.i,[2,b.g],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(83,0,null,null,5,"input",[["formControlName","agreePolicies"],["id","agreePolicies"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.zb(l,84).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.zb(l,84).onTouched()&&e),e},null,null)),t.pb(84,16384,null,0,c.b,[t.F,t.k],null,null),t.Eb(1024,null,c.k,function(l){return[l]},[c.b]),t.pb(86,671744,null,0,c.g,[[3,c.c],[8,null],[8,null],[6,c.k],[2,c.w]],{name:[0,"name"]},null),t.Eb(2048,null,c.l,null,[c.g]),t.pb(88,16384,null,0,c.m,[[4,c.l]],null,null),(l()(),t.qb(89,0,null,null,4,"label",[["for","agreePolicies"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["I agree to the "])),(l()(),t.qb(91,0,null,null,1,"strong",[["class","cl-secondary fs-16 fw-700"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Terms & Conditions, Cookie, Privacy"])),(l()(),t.Hb(-1,null,[" policies"])),(l()(),t.qb(94,0,null,null,0,"div",[["class","form-border"]],null,null,null,null,null)),(l()(),t.qb(95,0,null,null,12,"div",[["fxLayout",""],["fxLayoutAlign","space-between center"]],null,null,null,null,null)),t.pb(96,671744,null,0,b.c,[t.k,p.i,[2,b.i],p.f],{fxLayout:[0,"fxLayout"]},null),t.pb(97,671744,null,0,b.b,[t.k,p.i,[2,b.g],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(98,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Hb(99,null,["",""])),(l()(),t.qb(100,0,null,null,7,"button",[["fxLayout",""],["fxLayoutAlign","start center"],["type","submit"]],null,null,null,null,null)),t.pb(101,671744,null,0,b.c,[t.k,p.i,[2,b.i],p.f],{fxLayout:[0,"fxLayout"]},null),t.pb(102,671744,null,0,b.b,[t.k,p.i,[2,b.g],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(103,0,null,null,1,"span",[["class","mr-16 fs-16"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Pay Now"])),(l()(),t.qb(105,0,null,null,2,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,m.b,m.a)),t.pb(106,573440,null,0,y.a,[x.b,y.b],{iconProp:[0,"iconProp"]},null),t.Ab(107,2)],function(l,n){var u=n.component;l(n,1,0,""),l(n,6,0,u.paymentForm),l(n,10,0,"row wrap"),l(n,11,0,"space-between start"),l(n,13,0,"49");var t=l(n,16,0,u.submitted&&(null==u.name.errors?null:u.name.errors.required));l(n,15,0,t),l(n,19,0,"name");var e=l(n,23,0,u.submitted&&(null==u.name.errors?null:u.name.errors.required));l(n,22,0,e),l(n,25,0,"49");var a=l(n,28,0,u.submitted&&(null==u.phone.errors?null:u.phone.errors.required));l(n,27,0,a),l(n,31,0,"phone");var o=l(n,35,0,u.submitted&&(null==u.phone.errors?null:u.phone.errors.required));l(n,34,0,o),l(n,37,0,"49");var i=l(n,42,0,u.submitted&&(null==u.creditCard.errors?null:u.creditCard.errors.required));l(n,41,0,i),l(n,46,0,"creditCard");var r=l(n,50,0,u.submitted&&(null==u.creditCard.errors?null:u.creditCard.errors.required));l(n,49,0,r),l(n,52,0,"49");var s=l(n,57,0,u.submitted&&(null==u.email.errors?null:u.email.errors.required));l(n,56,0,s),l(n,60,0,"email");var b=l(n,64,0,u.submitted&&(null==u.email.errors?null:u.email.errors.required));l(n,63,0,b),l(n,68,0,""),l(n,69,0,"8px"),l(n,70,0,"start center"),l(n,74,0,"receiveInfo"),l(n,80,0,""),l(n,81,0,"8px"),l(n,82,0,"start center"),l(n,86,0,"agreePolicies"),l(n,96,0,""),l(n,97,0,"space-between center"),l(n,101,0,""),l(n,102,0,"start center");var p=l(n,107,0,"fas","angle-right");l(n,106,0,p)},function(l,n){var u=n.component;l(n,4,0,t.zb(n,8).ngClassUntouched,t.zb(n,8).ngClassTouched,t.zb(n,8).ngClassPristine,t.zb(n,8).ngClassDirty,t.zb(n,8).ngClassValid,t.zb(n,8).ngClassInvalid,t.zb(n,8).ngClassPending),l(n,14,0,t.zb(n,21).ngClassUntouched,t.zb(n,21).ngClassTouched,t.zb(n,21).ngClassPristine,t.zb(n,21).ngClassDirty,t.zb(n,21).ngClassValid,t.zb(n,21).ngClassInvalid,t.zb(n,21).ngClassPending),l(n,26,0,t.zb(n,33).ngClassUntouched,t.zb(n,33).ngClassTouched,t.zb(n,33).ngClassPristine,t.zb(n,33).ngClassDirty,t.zb(n,33).ngClassValid,t.zb(n,33).ngClassInvalid,t.zb(n,33).ngClassPending),l(n,40,0,t.zb(n,48).ngClassUntouched,t.zb(n,48).ngClassTouched,t.zb(n,48).ngClassPristine,t.zb(n,48).ngClassDirty,t.zb(n,48).ngClassValid,t.zb(n,48).ngClassInvalid,t.zb(n,48).ngClassPending),l(n,55,0,t.zb(n,62).ngClassUntouched,t.zb(n,62).ngClassTouched,t.zb(n,62).ngClassPristine,t.zb(n,62).ngClassDirty,t.zb(n,62).ngClassValid,t.zb(n,62).ngClassInvalid,t.zb(n,62).ngClassPending),l(n,71,0,t.zb(n,76).ngClassUntouched,t.zb(n,76).ngClassTouched,t.zb(n,76).ngClassPristine,t.zb(n,76).ngClassDirty,t.zb(n,76).ngClassValid,t.zb(n,76).ngClassInvalid,t.zb(n,76).ngClassPending),l(n,83,0,t.zb(n,88).ngClassUntouched,t.zb(n,88).ngClassTouched,t.zb(n,88).ngClassPristine,t.zb(n,88).ngClassDirty,t.zb(n,88).ngClassValid,t.zb(n,88).ngClassInvalid,t.zb(n,88).ngClassPending),l(n,99,0,u.price),l(n,105,0,t.zb(n,106).renderedIconHTML)})}var L=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),w=t.ob({encapsulation:0,styles:[[""]],data:{}});function P(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" payment-paypal works!\n"]))],null,null)}var F=function(){function l(l){var n=this;this.store=l,l.select("carData").subscribe(function(l){n.summary$=l})}return l.prototype.ngOnInit=function(){},l}(),M=u("yGQT"),H=t.ob({encapsulation:0,styles:[['@font-face{font-family:Museo;font-style:normal;font-weight:300;font-display:swap;src:url(/assets/fonts/Museo/Museo300-Regular.otf) format("opentype")}@font-face{font-family:Museo;font-style:normal;font-weight:500;font-display:swap;src:url(/assets/fonts/Museo/Museo500-Regular.otf) format("opentype")}@font-face{font-family:Museo;font-style:normal;font-weight:700;font-display:swap;src:url(/assets/fonts/Museo/Museo700-Regular.otf) format("opentype")}@font-face{font-family:Lato;font-style:normal;font-weight:400;font-display:swap;src:local("Lato Regular"),local("Lato-Regular"),url(/assets/fonts/Lato/Lato-Regular.ttf) format("truetype")}@font-face{font-family:Lato;font-style:normal;font-weight:700;font-display:swap;src:local("Lato Bold"),local("Lato-Bold"),url(/assets/fonts/Lato/Lato-Bold.ttf) format("truetype")}@font-face{font-family:Icons;font-style:normal;font-weight:400;src:url(/assets/fonts/icons.ttf) format("truetype")}.summary-box[_ngcontent-%COMP%]{background:#f4f4f4;padding:24px}']],data:{}});function I(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,39,"div",[["class","py-36"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,8,"div",[["class","fs-16"],["fxLayout",""],["fxLayoutAlign","start center"],["fxLayoutGap","12px"]],null,null,null,null,null)),t.pb(2,671744,null,0,b.c,[t.k,p.i,[2,b.i],p.f],{fxLayout:[0,"fxLayout"]},null),t.pb(3,1720320,null,0,b.d,[t.k,t.B,g.b,p.i,[2,b.h],p.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.pb(4,671744,null,0,b.b,[t.k,p.i,[2,b.g],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(5,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["SSL/TLS Protected Page"])),(l()(),t.qb(7,0,null,null,2,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,m.b,m.a)),t.pb(8,573440,null,0,y.a,[x.b,y.b],{iconProp:[0,"iconProp"]},null),t.Ab(9,2),(l()(),t.qb(10,0,null,null,29,"div",[["class","summary$-box"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,1,"div",[["class","fs-18 cl-purple font-secondary"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Your summary$"])),(l()(),t.qb(13,0,null,null,1,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.Hb(14,null,[" You've chosen HPI "," 3-pack for the following vehicle: "])),(l()(),t.qb(15,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Registration Number"])),(l()(),t.qb(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(19,null,["",""])),(l()(),t.qb(20,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Make"])),(l()(),t.qb(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(24,null,["",""])),(l()(),t.qb(25,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Model"])),(l()(),t.qb(28,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(29,null,["",""])),(l()(),t.qb(30,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Year of Manufacture"])),(l()(),t.qb(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(34,null,["",""])),(l()(),t.qb(35,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(36,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Color"])),(l()(),t.qb(38,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(39,null,["",""]))],function(l,n){l(n,2,0,""),l(n,3,0,"12px"),l(n,4,0,"start center");var u=l(n,9,0,"fas","lock");l(n,8,0,u)},function(l,n){var u=n.component;l(n,7,0,t.zb(n,8).renderedIconHTML),l(n,14,0,u.plan),l(n,19,0,u.summary$.vrm),l(n,24,0,u.summary$.make),l(n,29,0,u.summary$.model),l(n,34,0,u.summary$.year),l(n,39,0,u.summary$.colour)})}var O=function(){function l(){}return l.prototype.ngOnInit=function(){this.paymentMethod="card"},l}(),_=t.ob({encapsulation:0,styles:[[".payment-tab-content[_ngcontent-%COMP%]{padding-bottom:400px}"]],data:{}});function T(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-payment-card",[],null,null,null,z,q)),t.pb(2,114688,null,0,C,[v.a,h.b,k.k],{plan:[0,"plan"],price:[1,"price"],vrm:[2,"vrm"]},null)],function(l,n){var u=n.component;l(n,2,0,u.plan,u.price,u.vrm)},null)}function A(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-payment-paypal",[],null,null,null,P,w)),t.pb(2,114688,null,0,L,[],null,null)],function(l,n){l(n,2,0)},null)}function E(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,28,"div",[["class","payment-tabs-container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,13,"div",[["class","payment-tabs-bar container"],["fxLayout",""]],null,null,null,null,null)),t.pb(2,671744,null,0,b.c,[t.k,p.i,[2,b.i],p.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.qb(3,0,null,null,5,"a",[["class","pt-8 pl-8 pr-8"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==(l.component.paymentMethod="card")&&t),t},null,null)),t.pb(4,278528,null,0,f.i,[t.t,t.u,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(5,{"back-white":0}),t.pb(6,933888,null,0,d.a,[t.k,p.i,p.f,t.t,t.u,t.F,[6,f.i]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),t.Cb(7,{"back-white":0}),(l()(),t.qb(8,0,null,null,0,"img",[["alt",""],["height","40"],["src","assets/images/pay-by-card.png"]],null,null,null,null,null)),(l()(),t.qb(9,0,null,null,5,"a",[["class","pt-8 pl-8 pr-8"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==(l.component.paymentMethod="paypal")&&t),t},null,null)),t.pb(10,278528,null,0,f.i,[t.t,t.u,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(11,{"back-white":0}),t.pb(12,933888,null,0,d.a,[t.k,p.i,p.f,t.t,t.u,t.F,[6,f.i]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),t.Cb(13,{"back-white":0}),(l()(),t.qb(14,0,null,null,0,"img",[["alt",""],["height","30"],["src","assets/images/pay-by-paypal.png"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,13,"div",[["class","payment-tab-content back-white"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,12,"div",[["class","container"],["fxLayout","row"],["fxLayout.lt-md","column"],["fxLayoutAlign","space-between stretch"]],null,null,null,null,null)),t.pb(17,671744,null,0,b.c,[t.k,p.i,[2,b.i],p.f],{fxLayout:[0,"fxLayout"],"fxLayout.lt-md":[1,"fxLayout.lt-md"]},null),t.pb(18,671744,null,0,b.b,[t.k,p.i,[2,b.g],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(19,0,null,null,5,"div",[["fxFlex","63"],["fxFlex.lt-md","false"]],null,null,null,null,null)),t.pb(20,671744,null,0,b.a,[t.k,p.i,p.e,b.f,p.f],{fxFlex:[0,"fxFlex"],"fxFlex.lt-md":[1,"fxFlex.lt-md"]},null),(l()(),t.ib(16777216,null,null,1,null,T)),t.pb(22,16384,null,0,f.k,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,A)),t.pb(24,16384,null,0,f.k,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(25,0,null,null,3,"div",[["fxFlex","30"],["fxFlex.lt-md","false"]],null,null,null,null,null)),t.pb(26,671744,null,0,b.a,[t.k,p.i,p.e,b.f,p.f],{fxFlex:[0,"fxFlex"],"fxFlex.lt-md":[1,"fxFlex.lt-md"]},null),(l()(),t.qb(27,0,null,null,1,"app-summary",[],null,null,null,I,H)),t.pb(28,114688,null,0,F,[M.m],{plan:[0,"plan"]},null)],function(l,n){var u=n.component;l(n,2,0,"");var t=l(n,5,0,"card"==u.paymentMethod);l(n,4,0,"pt-8 pl-8 pr-8",t);var e=l(n,7,0,"card"==u.paymentMethod);l(n,6,0,e,"pt-8 pl-8 pr-8");var a=l(n,11,0,"paypal"==u.paymentMethod);l(n,10,0,"pt-8 pl-8 pr-8",a);var o=l(n,13,0,"paypal"==u.paymentMethod);l(n,12,0,o,"pt-8 pl-8 pr-8"),l(n,17,0,"row","column"),l(n,18,0,"space-between stretch"),l(n,20,0,"63","false"),l(n,22,0,"card"==u.paymentMethod),l(n,24,0,"paypal"==u.paymentMethod),l(n,26,0,"30","false"),l(n,28,0,u.plan)},null)}var S=t.ob({encapsulation:0,styles:[[""]],data:{}});function N(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,6,"div",[["class","svc-payment-details"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"app-payment-details-description",[],null,null,null,s,r)),t.pb(3,114688,null,0,i,[],null,null),(l()(),t.qb(4,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"app-payment-tabs",[],null,null,null,E,_)),t.pb(6,114688,null,0,O,[],{plan:[0,"plan"],price:[1,"price"],vrm:[2,"vrm"]},null)],function(l,n){var u=n.component;l(n,3,0),l(n,6,0,u.plan,u.price,u.vrm)},null)}function D(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,1,"app-layout",[],null,null,null,N,S)),t.pb(1,114688,null,0,e,[k.a,k.k],null,null)],function(l,n){l(n,1,0)},null)}var G=t.mb("app-layout",e,D,{},{},[]),J=u("3pJQ"),j=u("V9q+"),B=u("PCNd");u.d(n,"PaymentDetailsModuleNgFactory",function(){return R});var R=t.nb(a,[],function(l){return t.wb([t.xb(512,t.j,t.db,[[8,[o.a,G]],[3,t.j],t.z]),t.xb(4608,f.m,f.l,[t.v,[2,f.v]]),t.xb(4608,c.e,c.e,[]),t.xb(4608,c.v,c.v,[]),t.xb(5120,t.b,function(l,n){return[p.j(l,n)]},[f.c,t.D]),t.xb(1073742336,f.b,f.b,[]),t.xb(1073742336,k.n,k.n,[[2,k.t],[2,k.k]]),t.xb(1073742336,c.s,c.s,[]),t.xb(1073742336,c.q,c.q,[]),t.xb(1073742336,y.f,y.f,[]),t.xb(1073742336,p.c,p.c,[]),t.xb(1073742336,g.a,g.a,[]),t.xb(1073742336,b.e,b.e,[]),t.xb(1073742336,d.c,d.c,[]),t.xb(1073742336,J.a,J.a,[]),t.xb(1073742336,j.a,j.a,[[2,p.g],t.D]),t.xb(1073742336,c.j,c.j,[]),t.xb(1073742336,B.a,B.a,[]),t.xb(1073742336,a,a,[]),t.xb(1024,k.i,function(){return[[{path:"",component:e}]]},[])])})}}]);