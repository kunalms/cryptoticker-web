(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{tpnC:function(t,e,n){"use strict";n.r(e);var a=n("ofXK"),s=n("tyNb"),i=n("3Pt+"),r=n("SxV6");class o{constructor(t,e,n,a,s){this.username=a,this.email=t,this.firstname=e,this.lastname=n,this.password=s}}var c=n("fXoL"),l=n("ej43"),h=n("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.userBaseUrl="/api/users",this.userInfUrl="/api/user"}getAll(){return this.http.get(this.userBaseUrl)}getUserInfo(){return this.http.get(this.userInfUrl)}createUser(t){return this.http.post(this.userBaseUrl,t)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(h.b))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=n("rDax"),b=n("+rOU"),p=n("FKr1"),u=n("bTqV"),f=n("XNiG"),g=n("IzEk"),_=n("1G5W"),v=n("R0Ic"),k=n("u47x"),w=n("0MNC");function B(t,e){if(1&t){const t=c.Vb();c.Ub(0,"div",1),c.Ub(1,"button",2),c.cc("click",(function(){return c.tc(t),c.gc().action()})),c.Bc(2),c.Tb(),c.Tb()}if(2&t){const t=c.gc();c.Cb(2),c.Cc(t.data.action)}}function x(t,e){}const y=Math.pow(2,31)-1;class U{constructor(t,e){this._overlayRef=e,this._afterDismissed=new f.a,this._afterOpened=new f.a,this._onAction=new f.a,this._dismissedByAction=!1,this.containerInstance=t,this.onAction().subscribe(()=>this.dismiss()),t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete())}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(t,y))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed.asObservable()}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction.asObservable()}}const T=new c.r("MatSnackBarData");class O{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}let C=(()=>{class t{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(U),c.Ob(T))},t.\u0275cmp=c.Ib({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(c.Ub(0,"span"),c.Bc(1),c.Tb(),c.zc(2,B,3,1,"div",0)),2&t&&(c.Cb(1),c.Cc(e.data.message),c.Cb(1),c.mc("ngIf",e.hasAction))},directives:[a.n,u.a],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"],encapsulation:2,changeDetection:0}),t})();const S={snackBarState:Object(v.n)("state",[Object(v.k)("void, hidden",Object(v.l)({transform:"scale(0.8)",opacity:0})),Object(v.k)("visible",Object(v.l)({transform:"scale(1)",opacity:1})),Object(v.m)("* => visible",Object(v.e)("150ms cubic-bezier(0, 0, 0.2, 1)")),Object(v.m)("* => void, * => hidden",Object(v.e)("75ms cubic-bezier(0.4, 0.0, 1, 1)",Object(v.l)({opacity:0})))])};let P=(()=>{class t extends b.a{constructor(t,e,n,a){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=n,this.snackBarConfig=a,this._destroyed=!1,this._onExit=new f.a,this._onEnter=new f.a,this._animationState="void",this.attachDomPortal=t=>(this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachDomPortal(t)),this._role="assertive"!==a.politeness||a.announcementMessage?"off"===a.politeness?null:"status":"alert"}attachComponentPortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)}onAnimationEnd(t){const{fromState:e,toState:n}=t;if(("void"===n&&"void"!==e||"hidden"===n)&&this._completeExit(),"visible"===n){const t=this._onEnter;this._ngZone.run(()=>{t.next(),t.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}exit(){return this._animationState="hidden",this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(g.a)(1)).subscribe(()=>{this._onExit.next(),this._onExit.complete()})}_applySnackBarClasses(){const t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(e=>t.classList.add(e)):t.classList.add(e)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")}_assertNotAttached(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach snack bar content after content is already attached")}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(c.A),c.Ob(c.l),c.Ob(c.h),c.Ob(O))},t.\u0275cmp=c.Ib({type:t,selectors:[["snack-bar-container"]],viewQuery:function(t,e){var n;1&t&&c.xc(b.c,!0),2&t&&c.qc(n=c.dc())&&(e._portalOutlet=n.first)},hostAttrs:[1,"mat-snack-bar-container"],hostVars:2,hostBindings:function(t,e){1&t&&c.Gb("@state.done",(function(t){return e.onAnimationEnd(t)})),2&t&&(c.Db("role",e._role),c.Ec("@state",e._animationState))},features:[c.zb],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&c.zc(0,x,0,0,"ng-template",0)},directives:[b.c],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],encapsulation:2,data:{animation:[S.snackBarState]}}),t})(),A=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[m.e,b.h,a.c,u.b,p.e],p.e]}),t})();const j=new c.r("mat-snack-bar-default-options",{providedIn:"root",factory:function(){return new O}});let I=(()=>{class t{constructor(t,e,n,a,s,i){this._overlay=t,this._live=e,this._injector=n,this._breakpointObserver=a,this._parentSnackBar=s,this._defaultConfig=i,this._snackBarRefAtThisLevel=null}get _openedSnackBarRef(){const t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){const a=Object.assign(Object.assign({},this._defaultConfig),n);return a.data={message:t,action:e},a.announcementMessage||(a.announcementMessage=t),this.openFromComponent(C,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){const n=new b.g(e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,new WeakMap([[O,e]])),a=new b.d(P,e.viewContainerRef,n),s=t.attach(a);return s.instance.snackBarConfig=e,s.instance}_attach(t,e){const n=Object.assign(Object.assign(Object.assign({},new O),this._defaultConfig),e),a=this._createOverlay(n),s=this._attachSnackBarContainer(a,n),i=new U(s,a);if(t instanceof c.M){const e=new b.i(t,null,{$implicit:n.data,snackBarRef:i});i.instance=s.attachTemplatePortal(e)}else{const e=this._createInjector(n,i),a=new b.d(t,void 0,e),r=s.attachComponentPortal(a);i.instance=r.instance}return this._breakpointObserver.observe(w.b.HandsetPortrait).pipe(Object(_.a)(a.detachments())).subscribe(t=>{const e=a.overlayElement.classList;t.matches?e.add("mat-snack-bar-handset"):e.remove("mat-snack-bar-handset")}),this._animateSnackBar(i,n),this._openedSnackBarRef=i,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),e.announcementMessage&&this._live.announce(e.announcementMessage,e.politeness)}_createOverlay(t){const e=new m.d;e.direction=t.direction;let n=this._overlay.position().global();const a="rtl"===t.direction,s="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!a||"end"===t.horizontalPosition&&a,i=!s&&"center"!==t.horizontalPosition;return s?n.left("0"):i?n.right("0"):n.centerHorizontally(),"top"===t.verticalPosition?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){return new b.g(t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,new WeakMap([[U,e],[T,t.data]]))}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(m.c),c.Yb(k.h),c.Yb(c.s),c.Yb(w.a),c.Yb(t,12),c.Yb(j))},t.\u0275prov=Object(c.Kb)({factory:function(){return new t(Object(c.Yb)(m.c),Object(c.Yb)(k.h),Object(c.Yb)(c.p),Object(c.Yb)(w.a),Object(c.Yb)(t,12),Object(c.Yb)(j))},token:t,providedIn:A}),t})();var R=n("XiUz"),L=n("znSr"),M=n("Wp6s"),z=n("wZkO"),E=n("kmnG"),N=n("qFsG"),D=n("f3yp");function F(t,e){1&t&&(c.Ub(0,"mat-error"),c.Bc(1," The email and password were not recognised "),c.Tb())}function Y(t,e){1&t&&(c.Ub(0,"mat-error"),c.Bc(1," password and confirm password fields don't match "),c.Tb())}function q(t,e){1&t&&(c.Ub(0,"mat-error"),c.Bc(1," Passwords do not match "),c.Tb())}function G(t,e){if(1&t){const t=c.Vb();c.Ub(0,"div",12),c.Ub(1,"mat-card",13),c.Ub(2,"mat-card-content"),c.Ub(3,"nav",14),c.Ub(4,"a",15),c.Bc(5," Login "),c.Tb(),c.Ub(6,"a",16),c.Bc(7," Sign Up "),c.Tb(),c.Tb(),c.Ub(8,"form",17),c.cc("ngSubmit",(function(){return c.tc(t),c.gc().onSubmit()})),c.zc(9,F,2,0,"mat-error",11),c.zc(10,Y,2,0,"mat-error",11),c.Ub(11,"mat-form-field",18),c.Pb(12,"input",19),c.Ub(13,"mat-error"),c.Bc(14," Please provide a valid email address "),c.Tb(),c.Tb(),c.Ub(15,"div",20),c.Ub(16,"mat-form-field",21),c.Pb(17,"input",22),c.Tb(),c.Ub(18,"mat-form-field",21),c.Pb(19,"input",23),c.Tb(),c.Tb(),c.Ub(20,"mat-form-field",18),c.Pb(21,"input",24),c.Ub(22,"mat-error"),c.Bc(23," Please provide a username. "),c.Tb(),c.Tb(),c.Ub(24,"mat-form-field",18),c.Pb(25,"input",25),c.Ub(26,"mat-error"),c.Bc(27," Please provide a valid password "),c.Tb(),c.Tb(),c.Ub(28,"mat-form-field",18),c.Pb(29,"input",26),c.Ub(30,"mat-error"),c.Bc(31," Please re type the password "),c.Tb(),c.zc(32,q,2,0,"mat-error",11),c.Tb(),c.Ub(33,"button",27),c.Bc(34,"Sign Up"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&t){const t=c.gc();c.Cb(4),c.mc("active",!1),c.Cb(2),c.mc("active",!0),c.Cb(2),c.mc("formGroup",t.signUpForm),c.Cb(1),c.mc("ngIf",t.loginInvalid),c.Cb(1),c.mc("ngIf",null==t.signUpForm.errors?null:t.signUpForm.errors.notSame),c.Cb(22),c.mc("ngIf",t.signUpForm.hasError("notSame"))}}function W(t,e){1&t&&c.Pb(0,"app-spinner")}const K=[{path:"",component:(()=>{class t{constructor(t,e,n,a,s,i){this.formBuilder=t,this.route=e,this.router=n,this.authenticationService=a,this.userService=s,this.matSnackBar=i,this.loading=!1,this.submitted=!1,this.checkPasswords=t=>{const e=t.get("password"),n=t.get("confirmPassword");if(""!==e.value&&""!==n.value)return e.value===n.value?null:{notSame:!0}},this.authenticationService.currentUserValue&&this.router.navigate(["/"])}get f(){return this.signUpForm.controls}ngOnInit(){this.signUpForm=this.formBuilder.group({email:["",[i.k.required,i.k.email]],firstName:[""],lastName:[""],username:["",i.k.required],password:["",i.k.required],confirmPassword:["",i.k.required]},{validators:this.checkPasswords}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}onSubmit(){if(this.submitted=!0,this.signUpForm.invalid)return;this.loading=!0;const t=new o(this.f.email.value,this.f.firstName.value,this.f.lastName.value,this.f.username.value,this.f.password.value);this.userService.createUser(t).pipe(Object(r.a)()).subscribe(t=>{this.matSnackBar.open("User Creation was successful, please login to continue.","dismiss",{duration:5e3,verticalPosition:"top"}),this.router.navigate(["/verification/login"])},t=>{this.loginInvalid=!0,this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(i.b),c.Ob(s.a),c.Ob(s.b),c.Ob(l.a),c.Ob(d),c.Ob(I))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-sign-up"]],decls:36,vars:3,consts:[["fxLayout","row","fxLayout.xs","column"],["commonTemplate",""],["fxFlex","50%","fxShow","false","fxShow.gt-sm",""],[3,"ngTemplateOutlet"],["fxFlex","50%","fxShow","false","fxShow.gt-sm","",1,"desktop-column-outer"],[1,"desktop-column-background"],[1,"description-root"],[1,"description-container"],["href","https://github.com/kunalms","target","_blank"],["href","https://github.com/kunalms/cryptoticker-web","target","_blank"],["fxHide","false","fxHide.gt-sm",""],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center",1,"mat-card-wrapper"],["ngClass.gt-xs","card-gt-xs","ngClass.lt-sm","card-lt-sm",1,"mat-elevation-z4"],["mat-tab-nav-bar",""],["fxFlex","50%","mat-tab-link","","routerLink","/verification/login",3,"active"],["fxFlex","50%","mat-tab-link","","routerLink","/verification/signup",3,"active"],["fxLayout","column","fxLayoutAlign","center",1,"padding-16",3,"formGroup","ngSubmit"],[1,"full-width-input"],["formControlName","email","matInput","","placeholder","Email","required",""],["fxLayout","row","fxLayoutGap","10px"],["fxFlex","calc(50% - 5px)",1,"full-width-input"],["formControlName","firstName","matInput","","placeholder","First name"],["formControlName","lastName","matInput","","placeholder","Last name"],["formControlName","username","matInput","","placeholder","User name","required",""],["formControlName","password","matInput","","placeholder","Password","required","","type","password"],["formControlName","confirmPassword","matInput","","placeholder","Confirm Password","required","","type","password"],["color","primary","mat-raised-button","",1,"margin-top-10"]],template:function(t,e){if(1&t&&(c.Ub(0,"div",0),c.zc(1,G,35,6,"ng-template",null,1,c.Ac),c.Ub(3,"div",2),c.Qb(4,3),c.Tb(),c.Ub(5,"div",4),c.Ub(6,"div",5),c.Ub(7,"div",6),c.Ub(8,"div",7),c.Ub(9,"div"),c.Ub(10,"h2"),c.Bc(11,"Tic Tac toe"),c.Tb(),c.Ub(12,"p"),c.Bc(13,"Sign up and play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players.."),c.Tb(),c.Tb(),c.Ub(14,"div"),c.Ub(15,"h3"),c.Bc(16,"Key Features"),c.Tb(),c.Ub(17,"ul"),c.Ub(18,"li"),c.Bc(19,"Light weight."),c.Tb(),c.Ub(20,"li"),c.Bc(21,"Accessible anywhere across the globe."),c.Tb(),c.Ub(22,"li"),c.Bc(23,"User friendly."),c.Tb(),c.Tb(),c.Tb(),c.Ub(24,"div"),c.Ub(25,"h2"),c.Bc(26,"Made with \u2764\ufe0f by "),c.Ub(27,"a",8),c.Bc(28," Kunal Sharma"),c.Tb(),c.Tb(),c.Ub(29,"p"),c.Bc(30,"find the source code on "),c.Ub(31,"a",9),c.Bc(32,"Github"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(33,"div",10),c.Qb(34,3),c.Tb(),c.Tb(),c.zc(35,W,1,0,"app-spinner",11)),2&t){const t=c.rc(2);c.Cb(4),c.mc("ngTemplateOutlet",t),c.Cb(30),c.mc("ngTemplateOutlet",t),c.Cb(1),c.mc("ngIf",e.loading)}},directives:[R.c,R.a,L.b,a.s,a.n,R.b,M.a,L.a,M.c,z.b,s.d,z.a,i.l,i.g,i.d,E.b,i.a,N.a,i.f,i.c,i.j,E.a,R.d,u.a,D.a],styles:[".mat-card-wrapper[_ngcontent-%COMP%]{height:90vh;text-align:center;padding:8px}.card-gt-xs[_ngcontent-%COMP%]{width:70%}.card-lt-sm[_ngcontent-%COMP%]{width:95%}mat-form-field[_ngcontent-%COMP%]{display:block}mat-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}"]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[s.e.forChild(K)],s.e]}),t})();var H=n("PCNd"),X=n("YUcS");n.d(e,"SignUpModule",(function(){return Z}));let Z=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[a.c,V,M.d,i.i,E.d,H.a,u.b,N.b,X.a,z.c,A]]}),t})()}}]);