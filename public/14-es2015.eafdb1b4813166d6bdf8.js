(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{tpnC:function(t,r,e){"use strict";e.r(r);var a=e("ofXK"),n=e("tyNb"),i=e("3Pt+"),o=e("SxV6");class s{constructor(t,r,e,a,n){this.username=a,this.email=t,this.firstname=r,this.lastname=e,this.password=n}}var c=e("fXoL"),m=e("ej43"),l=e("qfBg"),u=e("dNgK"),p=e("XiUz"),d=e("Wp6s"),b=e("znSr"),f=e("wZkO"),g=e("kmnG"),h=e("qFsG"),v=e("bTqV"),w=e("f3yp");function S(t,r){1&t&&(c.Sb(0,"mat-error"),c.tc(1," The email and password were not recognised "),c.Rb())}function R(t,r){1&t&&(c.Sb(0,"mat-error"),c.tc(1," password and confirm password fields don't match "),c.Rb())}function N(t,r){1&t&&(c.Sb(0,"mat-error"),c.tc(1," Passwords do not match "),c.Rb())}function P(t,r){1&t&&c.Ob(0,"app-spinner")}const x=[{path:"",component:(()=>{class t{constructor(t,r,e,a,n,i){this.formBuilder=t,this.route=r,this.router=e,this.authenticationService=a,this.userService=n,this.matSnackBar=i,this.loading=!1,this.submitted=!1,this.checkPasswords=t=>{const r=t.get("password"),e=t.get("confirmPassword");if(""!==r.value&&""!==e.value)return r.value===e.value?null:{notSame:!0}},this.authenticationService.currentUserValue&&this.router.navigate(["/"])}get f(){return this.signUpForm.controls}ngOnInit(){this.signUpForm=this.formBuilder.group({email:["",[i.p.required,i.p.email]],firstName:[""],lastName:[""],username:["",i.p.required],password:["",i.p.required],confirmPassword:["",i.p.required]},{validators:this.checkPasswords}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}onSubmit(){if(this.submitted=!0,this.signUpForm.invalid)return;this.loading=!0;const t=new s(this.f.email.value,this.f.firstName.value,this.f.lastName.value,this.f.username.value,this.f.password.value);this.userService.createUser(t).pipe(Object(o.a)()).subscribe(t=>{this.matSnackBar.open("User Creation was successful, please login to continue.","dismiss",{duration:5e3,verticalPosition:"top"}),this.router.navigate(["/verification/login"])},t=>{this.loginInvalid=!0,this.loading=!1})}}return t.\u0275fac=function(r){return new(r||t)(c.Nb(i.c),c.Nb(n.a),c.Nb(n.b),c.Nb(m.a),c.Nb(l.a),c.Nb(u.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-sign-up"]],decls:36,vars:7,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"mat-card-wrapper"],["ngClass.gt-xs","card-gt-xs","ngClass.lt-sm","card-lt-sm",1,"mat-elevation-z4"],["mat-tab-nav-bar",""],["fxFlex","50%","mat-tab-link","","routerLink","/verification/login",3,"active"],["fxFlex","50%","mat-tab-link","","routerLink","/verification/signup",3,"active"],["fxLayout","column","fxLayoutAlign","center",1,"padding-16",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"full-width-input"],["formControlName","email","matInput","","placeholder","Email","required",""],["fxLayout","row","fxLayoutGap","10px"],["fxFlex","calc(50% - 5px)",1,"full-width-input"],["formControlName","firstName","matInput","","placeholder","First name"],["formControlName","lastName","matInput","","placeholder","Last name"],["formControlName","username","matInput","","placeholder","User name","required",""],["formControlName","password","matInput","","placeholder","Password","required","","type","password"],["formControlName","confirmPassword","matInput","","placeholder","Confirm Password","required","","type","password"],["color","primary","mat-raised-button","",1,"margin-top-10"]],template:function(t,r){1&t&&(c.Sb(0,"div",0),c.Sb(1,"mat-card",1),c.Sb(2,"mat-card-content"),c.Sb(3,"nav",2),c.Sb(4,"a",3),c.tc(5," Login "),c.Rb(),c.Sb(6,"a",4),c.tc(7," Sign Up "),c.Rb(),c.Rb(),c.Sb(8,"form",5),c.ac("ngSubmit",(function(){return r.onSubmit()})),c.sc(9,S,2,0,"mat-error",6),c.sc(10,R,2,0,"mat-error",6),c.Sb(11,"mat-form-field",7),c.Ob(12,"input",8),c.Sb(13,"mat-error"),c.tc(14," Please provide a valid email address "),c.Rb(),c.Rb(),c.Sb(15,"div",9),c.Sb(16,"mat-form-field",10),c.Ob(17,"input",11),c.Rb(),c.Sb(18,"mat-form-field",10),c.Ob(19,"input",12),c.Rb(),c.Rb(),c.Sb(20,"mat-form-field",7),c.Ob(21,"input",13),c.Sb(22,"mat-error"),c.tc(23," Please provide a username. "),c.Rb(),c.Rb(),c.Sb(24,"mat-form-field",7),c.Ob(25,"input",14),c.Sb(26,"mat-error"),c.tc(27," Please provide a valid password "),c.Rb(),c.Rb(),c.Sb(28,"mat-form-field",7),c.Ob(29,"input",15),c.Sb(30,"mat-error"),c.tc(31," Please re type the password "),c.Rb(),c.sc(32,N,2,0,"mat-error",6),c.Rb(),c.Sb(33,"button",16),c.tc(34,"Sign Up"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.sc(35,P,1,0,"app-spinner",6)),2&t&&(c.Bb(4),c.gc("active",!1),c.Bb(2),c.gc("active",!0),c.Bb(2),c.gc("formGroup",r.signUpForm),c.Bb(1),c.gc("ngIf",r.loginInvalid),c.Bb(1),c.gc("ngIf",null==r.signUpForm.errors?null:r.signUpForm.errors.notSame),c.Bb(22),c.gc("ngIf",r.signUpForm.hasError("notSame")),c.Bb(3),c.gc("ngIf",r.loading))},directives:[p.c,p.b,d.a,b.a,d.b,f.b,n.d,p.a,f.a,i.q,i.k,i.e,a.j,g.b,i.b,h.a,i.j,i.d,i.o,g.a,p.d,v.a,w.a],styles:[".mat-card-wrapper[_ngcontent-%COMP%]{height:90vh;text-align:center;padding:8px}.card-gt-xs[_ngcontent-%COMP%]{width:50%}.card-lt-sm[_ngcontent-%COMP%]{width:95%}mat-form-field[_ngcontent-%COMP%]{display:block}mat-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(r){return new(r||t)},imports:[[n.e.forChild(x)],n.e]}),t})();var C=e("PCNd"),U=e("YUcS");e.d(r,"SignUpModule",(function(){return O}));let O=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(r){return new(r||t)},imports:[[a.b,y,d.c,i.n,g.d,C.a,v.b,h.b,U.a,f.c,u.b]]}),t})()}}]);