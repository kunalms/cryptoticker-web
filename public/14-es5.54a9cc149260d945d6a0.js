function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{tpnC:function(e,t,a){"use strict";a.r(t);var r=a("ofXK"),n=a("tyNb"),i=a("3Pt+"),o=a("SxV6"),s=function e(t,a,r,n,i){_classCallCheck(this,e),this.username=n,this.email=t,this.firstname=a,this.lastname=r,this.password=i},c=a("fXoL"),l=a("ej43"),b=a("qfBg"),u=a("dNgK"),m=a("XiUz"),d=a("znSr"),f=a("Wp6s"),p=a("wZkO"),h=a("kmnG"),v=a("qFsG"),g=a("bTqV"),S=a("f3yp");function w(e,t){1&e&&(c.Tb(0,"mat-error"),c.vc(1," The email and password were not recognised "),c.Sb())}function T(e,t){1&e&&(c.Tb(0,"mat-error"),c.vc(1," password and confirm password fields don't match "),c.Sb())}function y(e,t){1&e&&(c.Tb(0,"mat-error"),c.vc(1," Passwords do not match "),c.Sb())}function x(e,t){if(1&e){var a=c.Ub();c.Tb(0,"div",12),c.Tb(1,"mat-card",13),c.Tb(2,"mat-card-content"),c.Tb(3,"nav",14),c.Tb(4,"a",15),c.vc(5," Login "),c.Sb(),c.Tb(6,"a",16),c.vc(7," Sign Up "),c.Sb(),c.Sb(),c.Tb(8,"form",17),c.bc("ngSubmit",(function(){return c.nc(a),c.ec().onSubmit()})),c.tc(9,w,2,0,"mat-error",11),c.tc(10,T,2,0,"mat-error",11),c.Tb(11,"mat-form-field",18),c.Ob(12,"input",19),c.Tb(13,"mat-error"),c.vc(14," Please provide a valid email address "),c.Sb(),c.Sb(),c.Tb(15,"div",20),c.Tb(16,"mat-form-field",21),c.Ob(17,"input",22),c.Sb(),c.Tb(18,"mat-form-field",21),c.Ob(19,"input",23),c.Sb(),c.Sb(),c.Tb(20,"mat-form-field",18),c.Ob(21,"input",24),c.Tb(22,"mat-error"),c.vc(23," Please provide a username. "),c.Sb(),c.Sb(),c.Tb(24,"mat-form-field",18),c.Ob(25,"input",25),c.Tb(26,"mat-error"),c.vc(27," Please provide a valid password "),c.Sb(),c.Sb(),c.Tb(28,"mat-form-field",18),c.Ob(29,"input",26),c.Tb(30,"mat-error"),c.vc(31," Please re type the password "),c.Sb(),c.tc(32,y,2,0,"mat-error",11),c.Sb(),c.Tb(33,"button",27),c.vc(34,"Sign Up"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&e){var r=c.ec();c.Bb(4),c.hc("active",!1),c.Bb(2),c.hc("active",!0),c.Bb(2),c.hc("formGroup",r.signUpForm),c.Bb(1),c.hc("ngIf",r.loginInvalid),c.Bb(1),c.hc("ngIf",null==r.signUpForm.errors?null:r.signUpForm.errors.notSame),c.Bb(22),c.hc("ngIf",r.signUpForm.hasError("notSame"))}}function C(e,t){1&e&&c.Ob(0,"app-spinner")}var k,P,N=[{path:"",component:(k=function(){function e(t,a,r,n,i,o){_classCallCheck(this,e),this.formBuilder=t,this.route=a,this.router=r,this.authenticationService=n,this.userService=i,this.matSnackBar=o,this.loading=!1,this.submitted=!1,this.checkPasswords=function(e){var t=e.get("password"),a=e.get("confirmPassword");if(""!==t.value&&""!==a.value)return t.value===a.value?null:{notSame:!0}},this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return _createClass(e,[{key:"ngOnInit",value:function(){this.signUpForm=this.formBuilder.group({email:["",[i.p.required,i.p.email]],firstName:[""],lastName:[""],username:["",i.p.required],password:["",i.p.required],confirmPassword:["",i.p.required]},{validators:this.checkPasswords}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}},{key:"onSubmit",value:function(){var e=this;if(this.submitted=!0,!this.signUpForm.invalid){this.loading=!0;var t=new s(this.f.email.value,this.f.firstName.value,this.f.lastName.value,this.f.username.value,this.f.password.value);this.userService.createUser(t).pipe(Object(o.a)()).subscribe((function(t){e.matSnackBar.open("User Creation was successful, please login to continue.","dismiss",{duration:5e3,verticalPosition:"top"}),e.router.navigate(["/verification/login"])}),(function(t){e.loginInvalid=!0,e.loading=!1}))}}},{key:"f",get:function(){return this.signUpForm.controls}}]),e}(),k.\u0275fac=function(e){return new(e||k)(c.Nb(i.c),c.Nb(n.a),c.Nb(n.b),c.Nb(l.a),c.Nb(b.a),c.Nb(u.a))},k.\u0275cmp=c.Hb({type:k,selectors:[["app-sign-up"]],decls:36,vars:3,consts:[["fxLayout","row","fxLayout.xs","column"],["commonTemplate",""],["fxFlex","50%","fxShow","false","fxShow.gt-sm",""],[3,"ngTemplateOutlet"],["fxFlex","50%","fxShow","false","fxShow.gt-sm","",1,"desktop-column-outer"],[1,"desktop-column-background"],[1,"description-root"],[1,"description-container"],["href","https://github.com/kunalms","target","_blank"],["href","https://github.com/kunalms/cryptoticker-web","target","_blank"],["fxHide","false","fxHide.gt-sm",""],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center",1,"mat-card-wrapper"],["ngClass.gt-xs","card-gt-xs","ngClass.lt-sm","card-lt-sm",1,"mat-elevation-z4"],["mat-tab-nav-bar",""],["fxFlex","50%","mat-tab-link","","routerLink","/verification/login",3,"active"],["fxFlex","50%","mat-tab-link","","routerLink","/verification/signup",3,"active"],["fxLayout","column","fxLayoutAlign","center",1,"padding-16",3,"formGroup","ngSubmit"],[1,"full-width-input"],["formControlName","email","matInput","","placeholder","Email","required",""],["fxLayout","row","fxLayoutGap","10px"],["fxFlex","calc(50% - 5px)",1,"full-width-input"],["formControlName","firstName","matInput","","placeholder","First name"],["formControlName","lastName","matInput","","placeholder","Last name"],["formControlName","username","matInput","","placeholder","User name","required",""],["formControlName","password","matInput","","placeholder","Password","required","","type","password"],["formControlName","confirmPassword","matInput","","placeholder","Confirm Password","required","","type","password"],["color","primary","mat-raised-button","",1,"margin-top-10"]],template:function(e,t){if(1&e&&(c.Tb(0,"div",0),c.tc(1,x,35,6,"ng-template",null,1,c.uc),c.Tb(3,"div",2),c.Pb(4,3),c.Sb(),c.Tb(5,"div",4),c.Tb(6,"div",5),c.Tb(7,"div",6),c.Tb(8,"div",7),c.Tb(9,"div"),c.Tb(10,"h2"),c.vc(11,"Tic Tac toe"),c.Sb(),c.Tb(12,"p"),c.vc(13,"Sign up and play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players.."),c.Sb(),c.Sb(),c.Tb(14,"div"),c.Tb(15,"h3"),c.vc(16,"Key Features"),c.Sb(),c.Tb(17,"ul"),c.Tb(18,"li"),c.vc(19,"Light weight."),c.Sb(),c.Tb(20,"li"),c.vc(21,"Accessible anywhere across the globe."),c.Sb(),c.Tb(22,"li"),c.vc(23,"User friendly."),c.Sb(),c.Sb(),c.Sb(),c.Tb(24,"div"),c.Tb(25,"h2"),c.vc(26,"Made with \u2764\ufe0f by "),c.Tb(27,"a",8),c.vc(28," Kunal Sharma"),c.Sb(),c.Sb(),c.Tb(29,"p"),c.vc(30,"find the source code on "),c.Tb(31,"a",9),c.vc(32,"Github"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(33,"div",10),c.Pb(34,3),c.Sb(),c.Sb(),c.tc(35,C,1,0,"app-spinner",11)),2&e){var a=c.mc(2);c.Bb(4),c.hc("ngTemplateOutlet",a),c.Bb(30),c.hc("ngTemplateOutlet",a),c.Bb(1),c.hc("ngIf",t.loading)}},directives:[m.c,m.a,d.b,r.o,r.j,m.b,f.a,d.a,f.b,p.b,n.d,p.a,i.q,i.k,i.e,h.b,i.b,v.a,i.j,i.d,i.o,h.a,m.d,g.a,S.a],styles:[".mat-card-wrapper[_ngcontent-%COMP%]{height:90vh;text-align:center;padding:8px}.card-gt-xs[_ngcontent-%COMP%]{width:70%}.card-lt-sm[_ngcontent-%COMP%]{width:95%}mat-form-field[_ngcontent-%COMP%]{display:block}mat-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}"]}),k)}],U=((P=function e(){_classCallCheck(this,e)}).\u0275mod=c.Lb({type:P}),P.\u0275inj=c.Kb({factory:function(e){return new(e||P)},imports:[[n.e.forChild(N)],n.e]}),P),O=a("PCNd"),_=a("YUcS");a.d(t,"SignUpModule",(function(){return F}));var L,F=((L=function e(){_classCallCheck(this,e)}).\u0275mod=c.Lb({type:L}),L.\u0275inj=c.Kb({factory:function(e){return new(e||L)},imports:[[r.b,U,f.c,i.n,h.d,O.a,g.b,v.b,_.a,p.c,u.b]]}),L)}}]);