(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{tpnC:function(t,e,r){"use strict";r.r(e);var a=r("ofXK"),i=r("tyNb"),n=r("3Pt+"),o=r("SxV6");class s{constructor(t,e,r,a,i){this.username=a,this.email=t,this.firstname=e,this.lastname=r,this.password=i}}var c=r("fXoL"),l=r("ej43"),b=r("tk/3");let u=(()=>{class t{constructor(t){this.http=t,this.userBaseUrl="/api/users",this.userInfUrl="/api/user"}getAll(){return this.http.get(this.userBaseUrl)}getUserInfo(){return this.http.get(this.userInfUrl)}createUser(t){return this.http.post(this.userBaseUrl,t)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(b.b))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=r("dNgK"),p=r("XiUz"),d=r("znSr"),f=r("Wp6s"),h=r("wZkO"),g=r("kmnG"),U=r("qFsG"),v=r("bTqV"),w=r("f3yp");function T(t,e){1&t&&(c.Ub(0,"mat-error"),c.Bc(1," The email and password were not recognised "),c.Tb())}function y(t,e){1&t&&(c.Ub(0,"mat-error"),c.Bc(1," password and confirm password fields don't match "),c.Tb())}function x(t,e){1&t&&(c.Ub(0,"mat-error"),c.Bc(1," Passwords do not match "),c.Tb())}function k(t,e){if(1&t){const t=c.Vb();c.Ub(0,"div",15),c.Ub(1,"mat-card",16),c.Ub(2,"mat-card-content"),c.Ub(3,"nav",17),c.Ub(4,"a",18),c.Bc(5," Login "),c.Tb(),c.Ub(6,"a",19),c.Bc(7," Sign Up "),c.Tb(),c.Tb(),c.Ub(8,"form",20),c.cc("ngSubmit",(function(){return c.tc(t),c.gc().onSubmit()})),c.zc(9,T,2,0,"mat-error",14),c.zc(10,y,2,0,"mat-error",14),c.Ub(11,"mat-form-field",21),c.Pb(12,"input",22),c.Ub(13,"mat-error"),c.Bc(14," Please provide a valid email address "),c.Tb(),c.Tb(),c.Ub(15,"div",23),c.Ub(16,"mat-form-field",24),c.Pb(17,"input",25),c.Tb(),c.Ub(18,"mat-form-field",24),c.Pb(19,"input",26),c.Tb(),c.Tb(),c.Ub(20,"mat-form-field",21),c.Pb(21,"input",27),c.Ub(22,"mat-error"),c.Bc(23," Please provide a username. "),c.Tb(),c.Tb(),c.Ub(24,"mat-form-field",21),c.Pb(25,"input",28),c.Ub(26,"mat-error"),c.Bc(27," Please provide a valid password "),c.Tb(),c.Tb(),c.Ub(28,"mat-form-field",21),c.Pb(29,"input",29),c.Ub(30,"mat-error"),c.Bc(31," Please re type the password "),c.Tb(),c.zc(32,x,2,0,"mat-error",14),c.Tb(),c.Ub(33,"button",30),c.Bc(34,"Sign Up"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&t){const t=c.gc();c.Cb(4),c.mc("active",!1),c.Cb(2),c.mc("active",!0),c.Cb(2),c.mc("formGroup",t.signUpForm),c.Cb(1),c.mc("ngIf",t.loginInvalid),c.Cb(1),c.mc("ngIf",null==t.signUpForm.errors?null:t.signUpForm.errors.notSame),c.Cb(22),c.mc("ngIf",t.signUpForm.hasError("notSame"))}}function B(t,e){1&t&&c.Pb(0,"app-spinner")}const C=[{path:"",component:(()=>{class t{constructor(t,e,r,a,i,n){this.formBuilder=t,this.route=e,this.router=r,this.authenticationService=a,this.userService=i,this.matSnackBar=n,this.loading=!1,this.submitted=!1,this.checkPasswords=t=>{const e=t.get("password"),r=t.get("confirmPassword");if(""!==e.value&&""!==r.value)return e.value===r.value?null:{notSame:!0}},this.authenticationService.currentUserValue&&this.router.navigate(["/"])}get f(){return this.signUpForm.controls}ngOnInit(){this.signUpForm=this.formBuilder.group({email:["",[n.k.required,n.k.email]],firstName:[""],lastName:[""],username:["",n.k.required],password:["",n.k.required],confirmPassword:["",n.k.required]},{validators:this.checkPasswords}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}onSubmit(){if(this.submitted=!0,this.signUpForm.invalid)return;this.loading=!0;const t=new s(this.f.email.value,this.f.firstName.value,this.f.lastName.value,this.f.username.value,this.f.password.value);this.userService.createUser(t).pipe(Object(o.a)()).subscribe(t=>{this.matSnackBar.open("User Creation was successful, please login to continue.","dismiss",{duration:5e3,verticalPosition:"top"}),this.router.navigate(["/verification/login"])},t=>{this.loginInvalid=!0,this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(n.b),c.Ob(i.a),c.Ob(i.b),c.Ob(l.a),c.Ob(u),c.Ob(m.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-sign-up"]],decls:44,vars:3,consts:[["fxLayout","row","fxLayout.xs","column"],["commonTemplate",""],["fxFlex","50%","fxShow","false","fxShow.gt-sm",""],[3,"ngTemplateOutlet"],["fxFlex","50%","fxShow","false","fxShow.gt-sm","",1,"desktop-column-outer"],[1,"desktop-column-background"],[1,"description-root"],[1,"description-container"],["fxLayout","row","fxLayoutAlign","start center"],["alt","app logo","src","assets/app-logo.png",2,"height","64px"],[2,"margin","0 8px"],["href","https://github.com/kunalms","target","_blank"],["href","https://github.com/kunalms/cryptoticker-web","target","_blank"],["fxHide","false","fxHide.gt-sm",""],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center",1,"mat-card-wrapper"],["ngClass.gt-xs","card-gt-xs","ngClass.lt-sm","card-lt-sm",1,"mat-elevation-z4"],["mat-tab-nav-bar",""],["fxFlex","50%","mat-tab-link","","routerLink","/verification/login",3,"active"],["fxFlex","50%","mat-tab-link","","routerLink","/verification/signup",3,"active"],["fxLayout","column","fxLayoutAlign","center",1,"padding-16",3,"formGroup","ngSubmit"],[1,"full-width-input"],["formControlName","email","matInput","","placeholder","Email","required",""],["fxLayout","row","fxLayoutGap","10px"],["fxFlex","calc(50% - 5px)",1,"full-width-input"],["formControlName","firstName","matInput","","placeholder","First name"],["formControlName","lastName","matInput","","placeholder","Last name"],["formControlName","username","matInput","","placeholder","User name","required",""],["formControlName","password","matInput","","placeholder","Password","required","","type","password"],["formControlName","confirmPassword","matInput","","placeholder","Confirm Password","required","","type","password"],["color","primary","mat-raised-button","",1,"margin-top-10"]],template:function(t,e){if(1&t&&(c.Ub(0,"div",0),c.zc(1,k,35,6,"ng-template",null,1,c.Ac),c.Ub(3,"div",2),c.Qb(4,3),c.Tb(),c.Ub(5,"div",4),c.Ub(6,"div",5),c.Ub(7,"div",6),c.Ub(8,"div",7),c.Ub(9,"div"),c.Ub(10,"div",8),c.Pb(11,"img",9),c.Ub(12,"h2",10),c.Bc(13,"Cryptoticker"),c.Tb(),c.Tb(),c.Ub(14,"p"),c.Bc(15,"Cryptoticker is a web based platform that helps you keep a track of all your crypto currencies on the fly. Tracking of all your favourite crypto currencies is not easier."),c.Tb(),c.Tb(),c.Ub(16,"div"),c.Ub(17,"h3"),c.Bc(18,"Key Features"),c.Tb(),c.Ub(19,"ul"),c.Ub(20,"li"),c.Bc(21,"Accessible anywhere across the globe."),c.Tb(),c.Ub(22,"li"),c.Bc(23,"Secured using advance encryption algorithms."),c.Tb(),c.Ub(24,"li"),c.Bc(25,"Faster than a native mobile application."),c.Tb(),c.Ub(26,"li"),c.Bc(27,"Helps you keep tracks by means of watchlist."),c.Tb(),c.Ub(28,"li"),c.Bc(29,"Responsive in nature, works on all internet enabled devices."),c.Tb(),c.Ub(30,"li"),c.Bc(31,"Extremely user friendly."),c.Tb(),c.Tb(),c.Tb(),c.Ub(32,"div"),c.Ub(33,"h2"),c.Bc(34,"Made with \u2764\ufe0f by "),c.Ub(35,"a",11),c.Bc(36," Kunal Sharma"),c.Tb(),c.Tb(),c.Ub(37,"p"),c.Bc(38,"Find the source code on "),c.Ub(39,"a",12),c.Bc(40,"Github"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(41,"div",13),c.Qb(42,3),c.Tb(),c.Tb(),c.zc(43,B,1,0,"app-spinner",14)),2&t){const t=c.rc(2);c.Cb(4),c.mc("ngTemplateOutlet",t),c.Cb(38),c.mc("ngTemplateOutlet",t),c.Cb(1),c.mc("ngIf",e.loading)}},directives:[p.c,p.a,d.b,a.s,p.b,a.n,f.a,d.a,f.c,h.b,i.d,h.a,n.l,n.g,n.d,g.b,n.a,U.a,n.f,n.c,n.j,g.a,p.d,v.a,w.a],styles:[".mat-card-wrapper[_ngcontent-%COMP%]{height:90vh;text-align:center;padding:8px}.card-gt-xs[_ngcontent-%COMP%]{width:70%}.card-lt-sm[_ngcontent-%COMP%]{width:95%}mat-form-field[_ngcontent-%COMP%]{display:block}mat-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}"]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(C)],i.e]}),t})();var S=r("PCNd"),I=r("YUcS");r.d(e,"SignUpModule",(function(){return F}));let F=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[a.c,P,f.d,n.i,g.d,S.a,v.b,U.b,I.a,h.c,m.b]]}),t})()}}]);