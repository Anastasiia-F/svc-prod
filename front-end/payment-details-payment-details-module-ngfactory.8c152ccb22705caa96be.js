(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9O2V":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){function l(l,n){this.route=l,this.router=n}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe(function(n){l.plan=n.plan.replace("-"," "),l.price=n.price,l.vrm=n.vrm})},l}(),a=function(){return function(){}}(),o=u("pMnS"),i=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),r=t.ob({encapsulation:0,styles:[[".svc-payment-details-description[_ngcontent-%COMP%]{padding:80px 0 50px}.svc-payment-details-description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:18px}"]],data:{}});function s(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,12,"div",[["class","svc-payment-details-description"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"div",[["class","fs-36 font-secondary cl-purple"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Payment Details"])),(l()(),t.qb(4,0,null,null,9,"div",[["class","mt-24"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"p",[["class","fw-300"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["You're one step away from getvting your check"])),(l()(),t.qb(7,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["- It's one off payment and there are no further commitments"])),(l()(),t.qb(10,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["- Our online payment gateway is super secure"])),(l()(),t.qb(12,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["- You'll get instant access to the report and support from our team"]))],null,null)}var c=u("21Lb"),b=u("OzfB"),p=u("gIcY"),f=u("Ip0R"),d=u("hUWP"),g=u("Fzqc"),m=u("fNgX"),y=u("Hf/j"),v=u("ZYjt"),h=u("CGbT"),x=u("7dP1"),C=function(){function l(l,n,u){this.auth=l,this.notifier=n,this.router=u,this.submitted=!1}return l.prototype.ngOnInit=function(){this.paymentForm=new p.h({name:new p.f("",[p.r.required]),creditCard:new p.f("",[p.r.required]),email:new p.f("",[]),receiveInfo:new p.f(!1),agreePolicies:new p.f(!1),date:new p.f(!1),cvc:new p.f(!1)})},l.prototype.onPaymentSubmit=function(){var l=this;if(this.submitted=!0,this.paymentForm.errors)this.notifier.notify("error","Please correct your infos.");else if(this.paymentForm.value.agreePolicies){var n=this.paymentForm.value,u={creditType:"Basic Check"===this.plan?"Basic":"Full",registration:this.vrm};if(n.credits=[],"Multicheck"!==this.plan)n.credits.push(u);else for(var t=0,e=[0,1,2];t<e.length;t++)e[t]>0&&(u.registration=""),n.credits.push(u);this.auth.signUp(n).subscribe(function(n){l.router.navigate(["auth","set-password"])})}else this.notifier.notify("error","You should agree on our Terms & Conditions.")},Object.defineProperty(l.prototype,"name",{get:function(){return this.paymentForm.get("name")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"creditCard",{get:function(){return this.paymentForm.get("creditCard")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"email",{get:function(){return this.paymentForm.get("email")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"date",{get:function(){return this.paymentForm.get("date")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"cvc",{get:function(){return this.paymentForm.get("cvc")},enumerable:!0,configurable:!0}),l}(),A=u("ZYCi"),q=t.ob({encapsulation:0,styles:[['@font-face{font-family:Museo;font-style:normal;font-weight:300;font-display:swap;src:url(/assets/fonts/Museo/Museo300-Regular.otf) format("opentype")}@font-face{font-family:Museo;font-style:normal;font-weight:500;font-display:swap;src:url(/assets/fonts/Museo/Museo500-Regular.otf) format("opentype")}@font-face{font-family:Museo;font-style:normal;font-weight:700;font-display:swap;src:url(/assets/fonts/Museo/Museo700-Regular.otf) format("opentype")}@font-face{font-family:Lato;font-style:normal;font-weight:400;font-display:swap;src:local("Lato Regular"),local("Lato-Regular"),url(/assets/fonts/Lato/Lato-Regular.ttf) format("truetype")}@font-face{font-family:Lato;font-style:normal;font-weight:700;font-display:swap;src:local("Lato Bold"),local("Lato-Bold"),url(/assets/fonts/Lato/Lato-Bold.ttf) format("truetype")}@font-face{font-family:Icons;font-style:normal;font-weight:400;src:url(/assets/fonts/icons.ttf) format("truetype")}button[_ngcontent-%COMP%]{border-radius:3px;color:#fff;background:#10cf6c;border:none;cursor:pointer;font-family:Museo;font-size:15px;height:44px;text-align:center;padding:12px 0;width:122px}button[_ngcontent-%COMP%]:focus{outline:0!important}button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}input[type=date][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{border:none;margin:16px 0;background:#ececec;height:45px;width:100%;font-size:18px;padding:8px;border-radius:2px;display:block}input[type=date][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus{outline:0}.card-data[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:48%}.input-invalid[_ngcontent-%COMP%]{border:1px solid #ff8e8c!important}.form-border[_ngcontent-%COMP%]{padding:14px;border-bottom:2px solid #ececec;margin-bottom:24px}.price[_ngcontent-%COMP%]{font-size:25px;font-family:Lato,sans-serif}']],data:{}});function k(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,123,"div",[["fxFlex",""]],null,null,null,null,null)),t.pb(1,671744,null,0,c.a,[t.k,b.i,b.e,c.f,b.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(2,0,null,null,1,"div",[["class","cl-purple fs-22 font-secondary py-36"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Pay using card"])),(l()(),t.qb(4,0,null,null,119,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,a=l.component;return"submit"===n&&(e=!1!==t.Ab(l,6).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ab(l,6).onReset()&&e),"ngSubmit"===n&&(e=!1!==a.onPaymentSubmit()&&e),e},null,null)),t.pb(5,16384,null,0,p.u,[],null,null),t.pb(6,540672,null,0,p.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Fb(2048,null,p.c,null,[p.i]),t.pb(8,16384,null,0,p.n,[[4,p.c]],null,null),(l()(),t.qb(9,0,null,null,73,"div",[["fxLayout","row wrap"],["fxLayoutAlign","space-between start"]],null,null,null,null,null)),t.pb(10,671744,null,0,c.c,[t.k,b.i,[2,c.i],b.f],{fxLayout:[0,"fxLayout"]},null),t.pb(11,671744,null,0,c.b,[t.k,b.i,[2,c.g],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(12,0,null,null,13,"div",[["fxFlex","48"]],null,null,null,null,null)),t.pb(13,671744,null,0,c.a,[t.k,b.i,b.e,c.f,b.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(14,0,null,null,1,"label",[["class","cl-secondary"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Your name"])),(l()(),t.qb(16,0,null,null,9,"input",[["formControlName","name"],["name","name"],["placeholder","Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,19)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,19).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,19)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,19)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(17,278528,null,0,f.j,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Db(18,{"input-invalid":0}),t.pb(19,16384,null,0,p.d,[t.F,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.k,function(l){return[l]},[p.d]),t.pb(21,671744,null,0,p.g,[[3,p.c],[8,null],[8,null],[6,p.k],[2,p.w]],{name:[0,"name"]},null),t.Fb(2048,null,p.l,null,[p.g]),t.pb(23,16384,null,0,p.m,[[4,p.l]],null,null),t.pb(24,933888,null,0,d.a,[t.k,b.i,b.f,t.t,t.u,t.F,[6,f.j]],{ngClass:[0,"ngClass"]},null),t.Db(25,{"input-invalid":0}),(l()(),t.qb(26,0,null,null,13,"div",[["fxFlex","48"]],null,null,null,null,null)),t.pb(27,671744,null,0,c.a,[t.k,b.i,b.e,c.f,b.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(28,0,null,null,1,"label",[["class","cl-secondary"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["We will send a link to the report to:"])),(l()(),t.qb(30,0,null,null,9,"input",[["formControlName","email"],["name","creditCard"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,33)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,33).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,33)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,33)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(31,278528,null,0,f.j,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Db(32,{"input-invalid":0}),t.pb(33,16384,null,0,p.d,[t.F,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.k,function(l){return[l]},[p.d]),t.pb(35,671744,null,0,p.g,[[3,p.c],[8,null],[8,null],[6,p.k],[2,p.w]],{name:[0,"name"]},null),t.Fb(2048,null,p.l,null,[p.g]),t.pb(37,16384,null,0,p.m,[[4,p.l]],null,null),t.pb(38,933888,null,0,d.a,[t.k,b.i,b.f,t.t,t.u,t.F,[6,f.j]],{ngClass:[0,"ngClass"]},null),t.Db(39,{"input-invalid":0}),(l()(),t.qb(40,0,null,null,14,"div",[["fxFlex","48"]],null,null,null,null,null)),t.pb(41,671744,null,0,c.a,[t.k,b.i,b.e,c.f,b.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(42,0,null,null,1,"label",[["class","cl-secondary"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Card or debit card"])),(l()(),t.qb(44,0,null,null,10,"input",[["formControlName","creditCard"],["name","creditCard"],["placeholder","Card"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,47)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,47).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,47)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,47)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ab(l,48).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Ab(l,48).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,48).onTouched()&&e),e},null,null)),t.pb(45,278528,null,0,f.j,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Db(46,{"input-invalid":0}),t.pb(47,16384,null,0,p.d,[t.F,t.k,[2,p.a]],null,null),t.pb(48,16384,null,0,p.t,[t.F,t.k],null,null),t.Fb(1024,null,p.k,function(l,n){return[l,n]},[p.d,p.t]),t.pb(50,671744,null,0,p.g,[[3,p.c],[8,null],[8,null],[6,p.k],[2,p.w]],{name:[0,"name"]},null),t.Fb(2048,null,p.l,null,[p.g]),t.pb(52,16384,null,0,p.m,[[4,p.l]],null,null),t.pb(53,933888,null,0,d.a,[t.k,b.i,b.f,t.t,t.u,t.F,[6,f.j]],{ngClass:[0,"ngClass"]},null),t.Db(54,{"input-invalid":0}),(l()(),t.qb(55,0,null,null,27,"div",[["class","card-data"],["fxFlex","48"],["fxLayout","row wrap"],["fxLayoutAlign","space-between"]],null,null,null,null,null)),t.pb(56,671744,null,0,c.c,[t.k,b.i,[2,c.i],b.f],{fxLayout:[0,"fxLayout"]},null),t.pb(57,671744,null,0,c.b,[t.k,b.i,[2,c.g],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),t.pb(58,671744,null,0,c.a,[t.k,b.i,b.e,c.f,b.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.qb(59,0,null,null,2,"label",[["class","cl-secondary"],["fxFlex","100"]],null,null,null,null,null)),t.pb(60,671744,null,0,c.a,[t.k,b.i,b.e,c.f,b.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.Ib(-1,null,["Date and CVV code"])),(l()(),t.qb(62,0,null,null,9,"input",[["formControlName","date"],["name","creditCard"],["placeholder","Date"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,65)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,65).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,65)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,65)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(63,278528,null,0,f.j,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Db(64,{"input-invalid":0}),t.pb(65,16384,null,0,p.d,[t.F,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.k,function(l){return[l]},[p.d]),t.pb(67,671744,null,0,p.g,[[3,p.c],[8,null],[8,null],[6,p.k],[2,p.w]],{name:[0,"name"]},null),t.Fb(2048,null,p.l,null,[p.g]),t.pb(69,16384,null,0,p.m,[[4,p.l]],null,null),t.pb(70,933888,null,0,d.a,[t.k,b.i,b.f,t.t,t.u,t.F,[6,f.j]],{ngClass:[0,"ngClass"]},null),t.Db(71,{"input-invalid":0}),(l()(),t.qb(72,0,null,null,10,"input",[["formControlName","cvc"],["name","creditCard"],["placeholder","CVV"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,75)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,75).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,75)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,75)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ab(l,76).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Ab(l,76).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,76).onTouched()&&e),e},null,null)),t.pb(73,278528,null,0,f.j,[t.t,t.u,t.k,t.F],{ngClass:[0,"ngClass"]},null),t.Db(74,{"input-invalid":0}),t.pb(75,16384,null,0,p.d,[t.F,t.k,[2,p.a]],null,null),t.pb(76,16384,null,0,p.t,[t.F,t.k],null,null),t.Fb(1024,null,p.k,function(l,n){return[l,n]},[p.d,p.t]),t.pb(78,671744,null,0,p.g,[[3,p.c],[8,null],[8,null],[6,p.k],[2,p.w]],{name:[0,"name"]},null),t.Fb(2048,null,p.l,null,[p.g]),t.pb(80,16384,null,0,p.m,[[4,p.l]],null,null),t.pb(81,933888,null,0,d.a,[t.k,b.i,b.f,t.t,t.u,t.F,[6,f.j]],{ngClass:[0,"ngClass"]},null),t.Db(82,{"input-invalid":0}),(l()(),t.qb(83,0,null,null,1,"div",[["class","my-24 fs-18 cl-secondary"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["+ (Optional) Have a referral code?"])),(l()(),t.qb(85,0,null,null,11,"div",[["fxLayout",""],["fxLayoutAlign","start center"],["fxLayoutGap","8px"]],null,null,null,null,null)),t.pb(86,671744,null,0,c.c,[t.k,b.i,[2,c.i],b.f],{fxLayout:[0,"fxLayout"]},null),t.pb(87,1720320,null,0,c.d,[t.k,t.B,g.b,b.i,[2,c.h],b.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.pb(88,671744,null,0,c.b,[t.k,b.i,[2,c.g],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(89,0,null,null,5,"input",[["formControlName","receiveInfo"],["id","receiveInfo"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.Ab(l,90).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.Ab(l,90).onTouched()&&e),e},null,null)),t.pb(90,16384,null,0,p.b,[t.F,t.k],null,null),t.Fb(1024,null,p.k,function(l){return[l]},[p.b]),t.pb(92,671744,null,0,p.g,[[3,p.c],[8,null],[8,null],[6,p.k],[2,p.w]],{name:[0,"name"]},null),t.Fb(2048,null,p.l,null,[p.g]),t.pb(94,16384,null,0,p.m,[[4,p.l]],null,null),(l()(),t.qb(95,0,null,null,1,"label",[["for","receiveInfo"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Tick the box if you want to receive discounts, offers, news and important motoring information"])),(l()(),t.qb(97,0,null,null,14,"div",[["fxLayout",""],["fxLayoutAlign","start center"],["fxLayoutGap","8px"]],null,null,null,null,null)),t.pb(98,671744,null,0,c.c,[t.k,b.i,[2,c.i],b.f],{fxLayout:[0,"fxLayout"]},null),t.pb(99,1720320,null,0,c.d,[t.k,t.B,g.b,b.i,[2,c.h],b.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.pb(100,671744,null,0,c.b,[t.k,b.i,[2,c.g],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(101,0,null,null,5,"input",[["formControlName","agreePolicies"],["id","agreePolicies"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.Ab(l,102).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.Ab(l,102).onTouched()&&e),e},null,null)),t.pb(102,16384,null,0,p.b,[t.F,t.k],null,null),t.Fb(1024,null,p.k,function(l){return[l]},[p.b]),t.pb(104,671744,null,0,p.g,[[3,p.c],[8,null],[8,null],[6,p.k],[2,p.w]],{name:[0,"name"]},null),t.Fb(2048,null,p.l,null,[p.g]),t.pb(106,16384,null,0,p.m,[[4,p.l]],null,null),(l()(),t.qb(107,0,null,null,4,"label",[["for","agreePolicies"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["I agree to the "])),(l()(),t.qb(109,0,null,null,1,"strong",[["class","cl-secondary fs-16 fw-700"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Terms & Conditions, Cookie, Privacy"])),(l()(),t.Ib(-1,null,[" policies"])),(l()(),t.qb(112,0,null,null,0,"div",[["class","form-border"]],null,null,null,null,null)),(l()(),t.qb(113,0,null,null,10,"div",[["fxLayout",""],["fxLayoutAlign","space-between center"]],null,null,null,null,null)),t.pb(114,671744,null,0,c.c,[t.k,b.i,[2,c.i],b.f],{fxLayout:[0,"fxLayout"]},null),t.pb(115,671744,null,0,c.b,[t.k,b.i,[2,c.g],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(116,0,null,null,1,"div",[["class","price"]],null,null,null,null,null)),(l()(),t.Ib(117,null,["\xa3 ",""])),(l()(),t.qb(118,0,null,null,5,"button",[["type","submit"]],null,null,null,null,null)),(l()(),t.qb(119,0,null,null,1,"span",[["class","mr-16"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Pay Now"])),(l()(),t.qb(121,0,null,null,2,"fa-icon",[["class","icon ng-fa-icon"]],[[8,"innerHTML",1]],null,null,m.b,m.a)),t.pb(122,573440,null,0,y.a,[v.b,y.b],{iconProp:[0,"iconProp"]},null),t.Bb(123,2)],function(l,n){var u=n.component;l(n,1,0,""),l(n,6,0,u.paymentForm),l(n,10,0,"row wrap"),l(n,11,0,"space-between start"),l(n,13,0,"48");var t=l(n,18,0,u.submitted&&(null==u.name.errors?null:u.name.errors.required));l(n,17,0,t),l(n,21,0,"name");var e=l(n,25,0,u.submitted&&(null==u.name.errors?null:u.name.errors.required));l(n,24,0,e),l(n,27,0,"48");var a=l(n,32,0,u.submitted&&(null==u.email.errors?null:u.email.errors.required));l(n,31,0,a),l(n,35,0,"email");var o=l(n,39,0,u.submitted&&(null==u.email.errors?null:u.email.errors.required));l(n,38,0,o),l(n,41,0,"48");var i=l(n,46,0,u.submitted&&(null==u.creditCard.errors?null:u.creditCard.errors.required));l(n,45,0,i),l(n,50,0,"creditCard");var r=l(n,54,0,u.submitted&&(null==u.creditCard.errors?null:u.creditCard.errors.required));l(n,53,0,r),l(n,56,0,"row wrap"),l(n,57,0,"space-between"),l(n,58,0,"48"),l(n,60,0,"100");var s=l(n,64,0,u.submitted&&(null==u.creditCard.errors?null:u.creditCard.errors.required));l(n,63,0,s),l(n,67,0,"date");var c=l(n,71,0,u.submitted&&(null==u.creditCard.errors?null:u.creditCard.errors.required));l(n,70,0,c);var b=l(n,74,0,u.submitted&&(null==u.creditCard.errors?null:u.creditCard.errors.required));l(n,73,0,b),l(n,78,0,"cvc");var p=l(n,82,0,u.submitted&&(null==u.creditCard.errors?null:u.creditCard.errors.required));l(n,81,0,p),l(n,86,0,""),l(n,87,0,"8px"),l(n,88,0,"start center"),l(n,92,0,"receiveInfo"),l(n,98,0,""),l(n,99,0,"8px"),l(n,100,0,"start center"),l(n,104,0,"agreePolicies"),l(n,114,0,""),l(n,115,0,"space-between center");var f=l(n,123,0,"fas","angle-right");l(n,122,0,f)},function(l,n){var u=n.component;l(n,4,0,t.Ab(n,8).ngClassUntouched,t.Ab(n,8).ngClassTouched,t.Ab(n,8).ngClassPristine,t.Ab(n,8).ngClassDirty,t.Ab(n,8).ngClassValid,t.Ab(n,8).ngClassInvalid,t.Ab(n,8).ngClassPending),l(n,16,0,t.Ab(n,23).ngClassUntouched,t.Ab(n,23).ngClassTouched,t.Ab(n,23).ngClassPristine,t.Ab(n,23).ngClassDirty,t.Ab(n,23).ngClassValid,t.Ab(n,23).ngClassInvalid,t.Ab(n,23).ngClassPending),l(n,30,0,t.Ab(n,37).ngClassUntouched,t.Ab(n,37).ngClassTouched,t.Ab(n,37).ngClassPristine,t.Ab(n,37).ngClassDirty,t.Ab(n,37).ngClassValid,t.Ab(n,37).ngClassInvalid,t.Ab(n,37).ngClassPending),l(n,44,0,t.Ab(n,52).ngClassUntouched,t.Ab(n,52).ngClassTouched,t.Ab(n,52).ngClassPristine,t.Ab(n,52).ngClassDirty,t.Ab(n,52).ngClassValid,t.Ab(n,52).ngClassInvalid,t.Ab(n,52).ngClassPending),l(n,62,0,t.Ab(n,69).ngClassUntouched,t.Ab(n,69).ngClassTouched,t.Ab(n,69).ngClassPristine,t.Ab(n,69).ngClassDirty,t.Ab(n,69).ngClassValid,t.Ab(n,69).ngClassInvalid,t.Ab(n,69).ngClassPending),l(n,72,0,t.Ab(n,80).ngClassUntouched,t.Ab(n,80).ngClassTouched,t.Ab(n,80).ngClassPristine,t.Ab(n,80).ngClassDirty,t.Ab(n,80).ngClassValid,t.Ab(n,80).ngClassInvalid,t.Ab(n,80).ngClassPending),l(n,89,0,t.Ab(n,94).ngClassUntouched,t.Ab(n,94).ngClassTouched,t.Ab(n,94).ngClassPristine,t.Ab(n,94).ngClassDirty,t.Ab(n,94).ngClassValid,t.Ab(n,94).ngClassInvalid,t.Ab(n,94).ngClassPending),l(n,101,0,t.Ab(n,106).ngClassUntouched,t.Ab(n,106).ngClassTouched,t.Ab(n,106).ngClassPristine,t.Ab(n,106).ngClassDirty,t.Ab(n,106).ngClassValid,t.Ab(n,106).ngClassInvalid,t.Ab(n,106).ngClassPending),l(n,117,0,u.price),l(n,121,0,t.Ab(n,122).renderedIconHTML)})}var L=function(){function l(l){var n=this;this.store=l,l.select("carData").subscribe(function(l){n.summary$=l})}return l.prototype.ngOnInit=function(){},l}(),F=u("yGQT"),w=t.ob({encapsulation:0,styles:[['@font-face{font-family:Museo;font-style:normal;font-weight:300;font-display:swap;src:url(/assets/fonts/Museo/Museo300-Regular.otf) format("opentype")}@font-face{font-family:Museo;font-style:normal;font-weight:500;font-display:swap;src:url(/assets/fonts/Museo/Museo500-Regular.otf) format("opentype")}@font-face{font-family:Museo;font-style:normal;font-weight:700;font-display:swap;src:url(/assets/fonts/Museo/Museo700-Regular.otf) format("opentype")}@font-face{font-family:Lato;font-style:normal;font-weight:400;font-display:swap;src:local("Lato Regular"),local("Lato-Regular"),url(/assets/fonts/Lato/Lato-Regular.ttf) format("truetype")}@font-face{font-family:Lato;font-style:normal;font-weight:700;font-display:swap;src:local("Lato Bold"),local("Lato-Bold"),url(/assets/fonts/Lato/Lato-Bold.ttf) format("truetype")}@font-face{font-family:Icons;font-style:normal;font-weight:400;src:url(/assets/fonts/icons.ttf) format("truetype")}.summary-box[_ngcontent-%COMP%]{background:#f4f4f4;padding:24px}']],data:{}});function P(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,39,"div",[["class","py-36"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,8,"div",[["class","fs-16"],["fxLayout",""],["fxLayoutAlign","start center"],["fxLayoutGap","12px"]],null,null,null,null,null)),t.pb(2,671744,null,0,c.c,[t.k,b.i,[2,c.i],b.f],{fxLayout:[0,"fxLayout"]},null),t.pb(3,1720320,null,0,c.d,[t.k,t.B,g.b,b.i,[2,c.h],b.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.pb(4,671744,null,0,c.b,[t.k,b.i,[2,c.g],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(5,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["SSL/TLS Protected Page"])),(l()(),t.qb(7,0,null,null,2,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,m.b,m.a)),t.pb(8,573440,null,0,y.a,[v.b,y.b],{iconProp:[0,"iconProp"]},null),t.Bb(9,2),(l()(),t.qb(10,0,null,null,29,"div",[["class","summary$-box"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,1,"div",[["class","fs-18 cl-purple font-secondary"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Your summary$"])),(l()(),t.qb(13,0,null,null,1,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.Ib(14,null,[" You've chosen HPI "," 3-pack for the following vehicle: "])),(l()(),t.qb(15,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Registration Number"])),(l()(),t.qb(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(19,null,["",""])),(l()(),t.qb(20,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Make"])),(l()(),t.qb(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(24,null,["",""])),(l()(),t.qb(25,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Model"])),(l()(),t.qb(28,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(29,null,["",""])),(l()(),t.qb(30,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Year of Manufacture"])),(l()(),t.qb(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(34,null,["",""])),(l()(),t.qb(35,0,null,null,4,"div",[["class","mb-12"]],null,null,null,null,null)),(l()(),t.qb(36,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Color"])),(l()(),t.qb(38,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(39,null,["",""]))],function(l,n){l(n,2,0,""),l(n,3,0,"12px"),l(n,4,0,"start center");var u=l(n,9,0,"fas","lock");l(n,8,0,u)},function(l,n){var u=n.component;l(n,7,0,t.Ab(n,8).renderedIconHTML),l(n,14,0,u.plan),l(n,19,0,u.summary$.vrm),l(n,24,0,u.summary$.make),l(n,29,0,u.summary$.model),l(n,34,0,u.summary$.year),l(n,39,0,u.summary$.colour)})}var I=function(){function l(){}return l.prototype.ngOnInit=function(){this.paymentMethod="card"},l}(),M=t.ob({encapsulation:0,styles:[[".payment-tab-content[_ngcontent-%COMP%]{padding-bottom:400px}"]],data:{}});function _(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-payment-card",[],null,null,null,k,q)),t.pb(2,114688,null,0,C,[x.a,h.b,A.l],{plan:[0,"plan"],price:[1,"price"],vrm:[2,"vrm"]},null)],function(l,n){var u=n.component;l(n,2,0,u.plan,u.price,u.vrm)},null)}function O(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,20,"div",[["class","payment-tabs-container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,7,"div",[["class","payment-tabs-bar container"],["fxLayout",""]],null,null,null,null,null)),t.pb(2,671744,null,0,c.c,[t.k,b.i,[2,c.i],b.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.qb(3,0,null,null,5,"a",[["class","pt-8 pl-8 pr-8"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==(l.component.paymentMethod="card")&&t),t},null,null)),t.pb(4,278528,null,0,f.j,[t.t,t.u,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Db(5,{"back-white":0}),t.pb(6,933888,null,0,d.a,[t.k,b.i,b.f,t.t,t.u,t.F,[6,f.j]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),t.Db(7,{"back-white":0}),(l()(),t.qb(8,0,null,null,0,"img",[["alt",""],["height","40"],["src","assets/images/pay-by-card.png"]],null,null,null,null,null)),(l()(),t.qb(9,0,null,null,11,"div",[["class","payment-tab-content back-white"]],null,null,null,null,null)),(l()(),t.qb(10,0,null,null,10,"div",[["class","container"],["fxLayout","row"],["fxLayout.lt-md","column"],["fxLayoutAlign","space-between stretch"]],null,null,null,null,null)),t.pb(11,671744,null,0,c.c,[t.k,b.i,[2,c.i],b.f],{fxLayout:[0,"fxLayout"],"fxLayout.lt-md":[1,"fxLayout.lt-md"]},null),t.pb(12,671744,null,0,c.b,[t.k,b.i,[2,c.g],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.qb(13,0,null,null,3,"div",[["fxFlex","63"],["fxFlex.lt-md","false"]],null,null,null,null,null)),t.pb(14,671744,null,0,c.a,[t.k,b.i,b.e,c.f,b.f],{fxFlex:[0,"fxFlex"],"fxFlex.lt-md":[1,"fxFlex.lt-md"]},null),(l()(),t.ib(16777216,null,null,1,null,_)),t.pb(16,16384,null,0,f.l,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(17,0,null,null,3,"div",[["fxFlex","30"],["fxFlex.lt-md","false"]],null,null,null,null,null)),t.pb(18,671744,null,0,c.a,[t.k,b.i,b.e,c.f,b.f],{fxFlex:[0,"fxFlex"],"fxFlex.lt-md":[1,"fxFlex.lt-md"]},null),(l()(),t.qb(19,0,null,null,1,"app-summary",[],null,null,null,P,w)),t.pb(20,114688,null,0,L,[F.m],{plan:[0,"plan"]},null)],function(l,n){var u=n.component;l(n,2,0,"");var t=l(n,5,0,"card"==u.paymentMethod);l(n,4,0,"pt-8 pl-8 pr-8",t);var e=l(n,7,0,"card"==u.paymentMethod);l(n,6,0,e,"pt-8 pl-8 pr-8"),l(n,11,0,"row","column"),l(n,12,0,"space-between stretch"),l(n,14,0,"63","false"),l(n,16,0,"card"==u.paymentMethod),l(n,18,0,"30","false"),l(n,20,0,u.plan)},null)}var T=t.ob({encapsulation:0,styles:[[""]],data:{}});function D(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,6,"div",[["class","svc-payment-details"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"app-payment-details-description",[],null,null,null,s,r)),t.pb(3,114688,null,0,i,[],null,null),(l()(),t.qb(4,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"app-payment-tabs",[],null,null,null,O,M)),t.pb(6,114688,null,0,I,[],{plan:[0,"plan"],price:[1,"price"],vrm:[2,"vrm"]},null)],function(l,n){var u=n.component;l(n,3,0),l(n,6,0,u.plan,u.price,u.vrm)},null)}function j(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-layout",[],null,null,null,D,T)),t.pb(1,114688,null,0,e,[A.a,A.l],null,null)],function(l,n){l(n,1,0)},null)}var S=t.mb("app-layout",e,j,{},{},[]),R=u("3pJQ"),B=u("V9q+"),N=u("PCNd");u.d(n,"PaymentDetailsModuleNgFactory",function(){return V});var V=t.nb(a,[],function(l){return t.xb([t.yb(512,t.j,t.db,[[8,[o.a,S]],[3,t.j],t.z]),t.yb(4608,f.n,f.m,[t.v,[2,f.w]]),t.yb(4608,p.e,p.e,[]),t.yb(4608,p.v,p.v,[]),t.yb(5120,t.b,function(l,n){return[b.j(l,n)]},[f.d,t.D]),t.yb(1073742336,f.c,f.c,[]),t.yb(1073742336,A.o,A.o,[[2,A.u],[2,A.l]]),t.yb(1073742336,p.s,p.s,[]),t.yb(1073742336,p.q,p.q,[]),t.yb(1073742336,y.f,y.f,[]),t.yb(1073742336,b.c,b.c,[]),t.yb(1073742336,g.a,g.a,[]),t.yb(1073742336,c.e,c.e,[]),t.yb(1073742336,d.c,d.c,[]),t.yb(1073742336,R.a,R.a,[]),t.yb(1073742336,B.a,B.a,[[2,b.g],t.D]),t.yb(1073742336,p.j,p.j,[]),t.yb(1073742336,N.a,N.a,[]),t.yb(1073742336,a,a,[]),t.yb(1024,A.j,function(){return[[{path:"",component:e}]]},[])])})}}]);