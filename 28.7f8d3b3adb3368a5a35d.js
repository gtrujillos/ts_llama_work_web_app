(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{fJE5:function(t,a,e){"use strict";e.r(a);var i=e("Valr"),o=e("6onV"),s=e("G1oj"),r=e("DUip"),n=function(){return function(t,a,e,i,o,s){this.taskTitle=t,this.taskMessage=a,this.createdOn=e,this.createdBy=i,this.assignedTo=o,this.status=s}}(),l=function(){return function(t){this.payload=t,this.type="ADD_TODO"}}(),b=e("TYT/"),c=["todoTitle"],d=["todoMessage"],p=function(t){return[t]};function m(t,a){if(1&t&&(b.Vb(0,"div"),b.Vb(1,"div",14),b.Vb(2,"div",15),b.Vb(3,"div",31),b.Vb(4,"h5",32),b.Sc(5),b.Ub(),b.Vb(6,"div",33),b.Qb(7,"i",34),b.Qb(8,"i",35),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Sc(10),b.Ub(),b.Qb(11,"img",36),b.Vb(12,"span",37),b.Sc(13),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t){var e=a.$implicit;b.Bb(5),b.Tc(e.taskTitle),b.Bb(5),b.Tc(e.taskMessage),b.Bb(1),b.sc("src",b.wc(4,p,e.assignedTo),b.Kc),b.Bb(2),b.Tc(e.createdOn)}}function g(t,a){if(1&t&&(b.Vb(0,"div"),b.Vb(1,"div",14),b.Vb(2,"div",15),b.Vb(3,"div",31),b.Vb(4,"h5",38),b.Sc(5),b.Ub(),b.Vb(6,"div",33),b.Qb(7,"i",34),b.Qb(8,"i",35),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Sc(10),b.Ub(),b.Qb(11,"img",36),b.Vb(12,"span",39),b.Sc(13),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t){var e=a.$implicit;b.Bb(5),b.Tc(e.taskTitle),b.Bb(5),b.Tc(e.taskMessage),b.Bb(1),b.sc("src",b.wc(4,p,e.assignedTo),b.Kc),b.Bb(2),b.Tc(e.createdOn)}}function u(t,a){if(1&t&&(b.Vb(0,"div"),b.Vb(1,"div",14),b.Vb(2,"div",15),b.Vb(3,"div",31),b.Vb(4,"h5",40),b.Sc(5),b.Ub(),b.Vb(6,"div",33),b.Qb(7,"i",34),b.Qb(8,"i",35),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Sc(10),b.Ub(),b.Qb(11,"img",36),b.Vb(12,"span",41),b.Sc(13),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t){var e=a.$implicit;b.Bb(5),b.Tc(e.taskTitle),b.Bb(5),b.Tc(e.taskMessage),b.Bb(1),b.sc("src",b.wc(4,p,e.assignedTo),b.Kc),b.Bb(2),b.Tc(e.createdOn)}}function f(t,a){if(1&t&&(b.Vb(0,"div"),b.Vb(1,"div",14),b.Vb(2,"div",15),b.Vb(3,"div",31),b.Vb(4,"h5",42),b.Sc(5),b.Ub(),b.Vb(6,"div",33),b.Qb(7,"i",34),b.Qb(8,"i",35),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Sc(10),b.Ub(),b.Qb(11,"img",36),b.Vb(12,"span",43),b.Sc(13),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t){var e=a.$implicit;b.Bb(5),b.Tc(e.taskTitle),b.Bb(5),b.Tc(e.taskMessage),b.Bb(1),b.sc("src",b.wc(4,p,e.assignedTo),b.Kc),b.Bb(2),b.Tc(e.createdOn)}}var v=[{path:"",component:function(){function t(t,a){this.elRef=t,this.store=a}return t.prototype.ngOnInit=function(){var t=this;this.taskboardState=this.store.select("task"),this.subscription=this.taskboardState.subscribe((function(a){t.todo=a.todo,t.inProcess=a.inProcess,t.backLog=a.backLog,t.completed=a.completed}))},t.prototype.onAddTask=function(){""!=this.messageInputRef.nativeElement.value&&""!=this.titleInputRef.nativeElement.value&&this.store.dispatch(new l(new n(this.titleInputRef.nativeElement.value,this.messageInputRef.nativeElement.value,"Nov 12","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"))),this.titleInputRef.nativeElement.value="",this.messageInputRef.nativeElement.value="",this.titleInputRef.nativeElement.focus()},t.\u0275fac=function(a){return new(a||t)(b.Pb(b.l),b.Pb(o.c))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-ngrx-taskboard"]],viewQuery:function(t,a){var e;1&t&&(b.Zc(c,!0),b.Zc(d,!0)),2&t&&(b.Ec(e=b.ic())&&(a.titleInputRef=e.first),b.Ec(e=b.ic())&&(a.messageInputRef=e.first))},decls:54,vars:12,consts:[[1,"row"],[1,"col-sm-12"],[1,"content-header","text-left"],[1,"content-sub-header"],["id","taskboard"],[1,"col-md-3","col-12"],[1,"ml-2","mt-2","text-bold-500","text-left"],[1,"ft-list","mr-1","float-left"],[1,"dragdrop-container",3,"dragula","dragulaModel"],[4,"ngFor","ngForOf"],[1,"ft-trending-up","mr-1","float-left"],[1,"ft-thumbs-up","mr-1","float-left"],[1,"ft-alert-octagon","mr-1","float-left"],[1,"taskboard-app-form","bg-blue-grey","bg-lighten-5"],[1,"card"],[1,"card-body","pt-3","text-left"],[1,"text-bold-500"],[1,"taskboard-app-input","row"],[1,"position-relative","has-icon-left","col-md-4","col-12","mb-1"],[1,"form-control-position"],[1,"icon-emoticon-smile"],["type","text","id","todoTitle","placeholder","Title",1,"form-control"],[1,"form-control-position","control-position-right"],[1,"ft-image","gallery-icon-title"],[1,"position-relative","has-icon-left","col-md-6","col-12","mb-1"],["type","text","id","todoMessage","placeholder","Message",1,"form-control"],[1,"ft-image","gallery-icon-msg"],[1,"position-relative","has-icon-left","col-md-2","col-12","mb-1","add-task-btn"],["type","button",1,"btn","btn-raised","btn-primary","px-4","mb-0"],[1,"ft","ft-plus-circle","d-lg-none","d-xl-inline-block"],[1,"d-lg-inline-block","d-none","ml-1"],[1,"clearfix"],[1,"text-bold-500","primary","float-left"],[1,"actions","float-right"],[1,"ft-edit","mr-1","info"],[1,"ft-trash-2","danger"],[1,"rounded-circle","width-50","mr-2",3,"src"],[1,"primary"],[1,"text-bold-500","info","float-left"],[1,"info"],[1,"text-bold-500","success","float-left"],[1,"success"],[1,"text-bold-500","warning","float-left"],[1,"warning"]],template:function(t,a){1&t&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Vb(2,"div",2),b.Sc(3,"Task Board NgRx"),b.Ub(),b.Qb(4,"p",3),b.Ub(),b.Ub(),b.Vb(5,"section",4),b.Vb(6,"div",0),b.Vb(7,"div",5),b.Vb(8,"h4",6),b.Qb(9,"i",7),b.Sc(10," To Dos"),b.Ub(),b.Vb(11,"div",8),b.Qc(12,m,14,6,"div",9),b.Ub(),b.Ub(),b.Vb(13,"div",5),b.Vb(14,"h4",6),b.Qb(15,"i",10),b.Sc(16," In Progress"),b.Ub(),b.Vb(17,"div",8),b.Qc(18,g,14,6,"div",9),b.Ub(),b.Ub(),b.Vb(19,"div",5),b.Vb(20,"h4",6),b.Qb(21,"i",11),b.Sc(22,"Completed"),b.Ub(),b.Vb(23,"div",8),b.Qc(24,u,14,6,"div",9),b.Ub(),b.Ub(),b.Vb(25,"div",5),b.Vb(26,"h4",6),b.Qb(27,"i",12),b.Sc(28,"On Hold"),b.Ub(),b.Vb(29,"div",8),b.Qc(30,f,14,6,"div",9),b.Ub(),b.Ub(),b.Ub(),b.Vb(31,"section",13),b.Vb(32,"div",14),b.Vb(33,"div",15),b.Vb(34,"h5",16),b.Sc(35,"Create new Task"),b.Ub(),b.Vb(36,"form",17),b.Vb(37,"fieldset",18),b.Vb(38,"div",19),b.Qb(39,"i",20),b.Ub(),b.Qb(40,"input",21),b.Vb(41,"div",22),b.Qb(42,"i",23),b.Ub(),b.Ub(),b.Vb(43,"fieldset",24),b.Vb(44,"div",19),b.Qb(45,"i",20),b.Ub(),b.Qb(46,"input",25),b.Vb(47,"div",22),b.Qb(48,"i",26),b.Ub(),b.Ub(),b.Vb(49,"fieldset",27),b.Vb(50,"button",28),b.Qb(51,"i",29),b.Vb(52,"span",30),b.Sc(53,"Create"),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Bb(11),b.sc("dragula","task-group")("dragulaModel",a.todo),b.Bb(1),b.sc("ngForOf",a.todo),b.Bb(5),b.sc("dragula","task-group")("dragulaModel",a.inProcess),b.Bb(1),b.sc("ngForOf",a.inProcess),b.Bb(5),b.sc("dragula","task-group")("dragulaModel",a.completed),b.Bb(1),b.sc("ngForOf",a.completed),b.Bb(5),b.sc("dragula","task-group")("dragulaModel",a.backLog),b.Bb(1),b.sc("ngForOf",a.backLog))},directives:[s.a,i.o],styles:[".gh-fork{position:fixed;top:0;right:0;border:0}.dragdrop-wrapper{display:table}.dragdrop-container:nth-child(odd){background-color:rgba(0,0,0,.2)}.dragdrop-container>div,.gu-mirror{transition:opacity .4s ease-in-out}.dragdrop-container>div{cursor:move;cursor:grab;cursor:-webkit-grab}.gu-mirror{cursor:grabbing;cursor:-webkit-grabbing}.dragdrop-container .ex-moved{background-color:#e74c3c}.dragdrop-container.ex-over{background-color:hsla(0,0%,100%,.3)}#left-lovehandles>div,#right-lovehandles>div{cursor:auto}.handle{padding:0 5px;margin-right:5px;background-color:rgba(0,0,0,.4);cursor:move}.image-thing{margin:20px 0;display:block;text-align:center}.slack-join{position:absolute;font-weight:400;font-size:14px;right:10px;top:50%;margin-top:-8px;line-height:16px}.taskboard-app-input i.ft.ft-plus-circle{position:relative;top:2px}.taskboard-app-input .form-control-position.control-position-right .gallery-icon-title{position:absolute;left:363px;font-size:1.2rem;top:7px}.taskboard-app-input .form-control-position.control-position-right .gallery-icon-msg{position:absolute;left:573px;font-size:1.2rem;top:7px}@media (max-width:992px){.taskboard-app-input i.ft.ft-plus-circle{padding:.25rem}}"],encapsulation:2}),t}(),data:{title:"Taskboard"}}],h=function(){function t(){}return t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({factory:function(a){return new(a||t)},imports:[[r.f.forChild(v)],r.f]}),t}(),U=e("mrSG"),V={todo:[new n("Responsive","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"),new n("QA Testing","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"),new n("Budget","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New")],inProcess:[new n("checklist","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In Process"),new n("Navigation","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In Process"),new n("Bootstrap 4","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In Process")],backLog:[new n("Assessment","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending"),new n("Schedule","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending"),new n("Unit tests","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending")],completed:[new n("Angular 5","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed"),new n("Fields","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed"),new n("Task board","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed")]};function k(t,a){switch(void 0===t&&(t=V),a.type){case"ADD_TODO":return Object(U.__spreadArrays)(t.todo),Object(U.__assign)(Object(U.__assign)({},t),{todo:Object(U.__spreadArrays)(t.todo,[a.payload])});default:return t}}e.d(a,"TaskboardNGRXModule",(function(){return w}));var w=function(){function t(){}return t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({factory:function(a){return new(a||t)},imports:[[i.c,h,s.b.forRoot(),o.e.forFeature("task",k)]]}),t}()}}]);