(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Yd5H:function(t,a,e){"use strict";e.r(a);var i=e("Valr"),s=e("G1oj"),o=e("MnXN"),r=e("QJY3"),n=e("DUip"),c=function(){return function(t,a,e,i,s,o,r){this.taskId=t,this.taskTitle=a,this.taskMessage=e,this.createdOn=i,this.createdBy=s,this.assignedTo=o,this.status=r}}(),d=e("F/XL"),l=e("vubp"),b=e("TYT/"),u=function(){function t(){this.tasks=[new c(1,"Responsive","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"),new c(2,"QA Testing","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"),new c(3,"Budget","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"),new c(4,"checklist","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In-Process"),new c(5,"Navigation","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In-Process"),new c(6,"Bootstrap 4","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In-Process"),new c(7,"Assessment","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending"),new c(8,"Schedule","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending"),new c(9,"Unit tests","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending"),new c(10,"Angular 5","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed"),new c(11,"Fields","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed"),new c(12,"Task board","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed")]}return t.prototype.addNewTask=function(t,a){var e={taskId:Math.round(1e10*Math.random()),taskTitle:t,taskMessage:a,createdOn:"Nov 12",createdBy:"Elizabeth Elliott",assignedTo:"assets/img/portrait/small/avatar-s-3.png",status:"New"};return this.tasks.unshift(e),Object(d.a)(this.tasks.slice()).pipe(Object(l.a)(100))},t.prototype.UpdateTask=function(t,a){return this.tasks=this.tasks.map((function(a){return a.taskId===t.taskId?Object.assign({},a,t):a})),Object(d.a)(this.tasks.slice()).pipe(Object(l.a)(1e3))},t.prototype.deleteTask=function(t){return this.tasks.splice(t,1),Object(d.a)(this.tasks.slice()).pipe(Object(l.a)(100))},t.\u0275prov=b.Lb({token:t,factory:t.\u0275fac=function(a){return new(a||t)}}),t}(),m=function(){function t(t,a){this.activeModal=t,this.formBuilder=a,this.ModalTitle=""}return t.prototype.ngOnInit=function(){this.buildItemForm(this.data),this.ModalTitle=0===this.id?"Add Task":"Edit Task"},t.prototype.buildItemForm=function(t){this.myForm=this.formBuilder.group({title:[t.title||"",r.A.required],message:[t.message||"",r.A.required]})},t.prototype.submitForm=function(){this.activeModal.close(this.myForm.value)},t.\u0275fac=function(a){return new(a||t)(b.Pb(o.c),b.Pb(r.e))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-crud-modal"]],inputs:{id:"id",data:"data"},decls:25,vars:5,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],[3,"formGroup","ngSubmit"],[1,"modal-body","taskboard-modal"],[1,"container"],[1,"form-group","position-relative","has-icon-left"],[1,"form-control-position"],[1,"icon-emoticon-smile"],["type","text","formControlName","title","id","todoTitle","placeholder","Title","required","",1,"form-control",3,"formControl","keydown.enter"],["todoTitle",""],[1,"form-control-position","control-position-right"],[1,"ft-image"],["type","text","formControlName","message","id","todoMessage","placeholder","Message","required","",1,"form-control",3,"formControl","keydown.enter"],["todoMessage",""],[1,"modal-footer","taskboard-modal-footer"],[1,"btn","btn-success","btn-save",3,"disabled"]],template:function(t,a){1&t&&(b.Vb(0,"div",0),b.Vb(1,"h4",1),b.Sc(2),b.Ub(),b.Vb(3,"button",2),b.hc("click",(function(t){return a.activeModal.dismiss("Cross click")})),b.Sc(4," x "),b.Ub(),b.Ub(),b.Vb(5,"form",3),b.hc("ngSubmit",(function(t){return a.submitForm()})),b.Vb(6,"div",4),b.Vb(7,"div",5),b.Vb(8,"fieldset",6),b.Vb(9,"div",7),b.Qb(10,"i",8),b.Ub(),b.Vb(11,"input",9,10),b.hc("keydown.enter",(function(t){return t.preventDefault()})),b.Ub(),b.Vb(13,"div",11),b.Qb(14,"i",12),b.Ub(),b.Ub(),b.Vb(15,"fieldset",6),b.Vb(16,"div",7),b.Qb(17,"i",8),b.Ub(),b.Vb(18,"input",13,14),b.hc("keydown.enter",(function(t){return t.preventDefault()})),b.Ub(),b.Vb(20,"div",11),b.Qb(21,"i",12),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(22,"div",15),b.Vb(23,"button",16),b.Sc(24," Save "),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Bb(2),b.Tc(a.ModalTitle),b.Bb(3),b.sc("formGroup",a.myForm),b.Bb(6),b.sc("formControl",a.myForm.controls.title),b.Bb(7),b.sc("formControl",a.myForm.controls.message),b.Bb(5),b.sc("disabled",!a.myForm.valid))},directives:[r.C,r.q,r.j,r.c,r.p,r.h,r.y,r.g],styles:[""]}),t}(),p=["todoTitle"],f=["todoMessage"],g=function(t){return[t]};function k(t,a){if(1&t){var e=b.Wb();b.Vb(0,"div"),b.Vb(1,"div",21),b.Vb(2,"div",22),b.Vb(3,"div",23),b.Vb(4,"h5",24),b.Sc(5),b.Ub(),b.Vb(6,"div",25),b.Vb(7,"i",26),b.hc("click",(function(t){b.Ic(e);var i=a.$implicit;return b.lc().editTask(i.taskId)})),b.Ub(),b.Vb(8,"i",27),b.hc("click",(function(t){b.Ic(e);var i=a.$implicit;return b.lc().deleteTask(i.taskId)})),b.Ub(),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Sc(10),b.Ub(),b.Qb(11,"img",28),b.Vb(12,"span",29),b.Sc(13),b.Ub(),b.Ub(),b.Ub(),b.Ub()}if(2&t){var i=a.$implicit;b.Cb("task-id",i.taskId),b.Bb(5),b.Tc(i.taskTitle),b.Bb(5),b.Tc(i.taskMessage),b.Bb(1),b.sc("src",b.wc(5,g,i.assignedTo),b.Kc),b.Bb(2),b.Tc(i.createdOn)}}function v(t,a){if(1&t){var e=b.Wb();b.Vb(0,"div"),b.Vb(1,"div",21),b.Vb(2,"div",22),b.Vb(3,"div",23),b.Vb(4,"h5",30),b.Sc(5),b.Ub(),b.Vb(6,"div",25),b.Vb(7,"i",26),b.hc("click",(function(t){b.Ic(e);var i=a.$implicit;return b.lc().editTask(i.taskId)})),b.Ub(),b.Vb(8,"i",27),b.hc("click",(function(t){b.Ic(e);var i=a.$implicit;return b.lc().deleteTask(i.taskId)})),b.Ub(),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Sc(10),b.Ub(),b.Qb(11,"img",28),b.Vb(12,"span",31),b.Sc(13),b.Ub(),b.Ub(),b.Ub(),b.Ub()}if(2&t){var i=a.$implicit;b.Cb("task-id",i.taskId),b.Bb(5),b.Tc(i.taskTitle),b.Bb(5),b.Tc(i.taskMessage),b.Bb(1),b.sc("src",b.wc(5,g,i.assignedTo),b.Kc),b.Bb(2),b.Tc(i.createdOn)}}function h(t,a){if(1&t){var e=b.Wb();b.Vb(0,"div"),b.Vb(1,"div",21),b.Vb(2,"div",22),b.Vb(3,"div",23),b.Vb(4,"h5",32),b.Sc(5),b.Ub(),b.Vb(6,"div",25),b.Vb(7,"i",26),b.hc("click",(function(t){b.Ic(e);var i=a.$implicit;return b.lc().editTask(i.taskId)})),b.Ub(),b.Vb(8,"i",27),b.hc("click",(function(t){b.Ic(e);var i=a.$implicit;return b.lc().deleteTask(i.taskId)})),b.Ub(),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Sc(10),b.Ub(),b.Qb(11,"img",28),b.Vb(12,"span",33),b.Sc(13),b.Ub(),b.Ub(),b.Ub(),b.Ub()}if(2&t){var i=a.$implicit;b.Cb("task-id",i.taskId),b.Bb(5),b.Tc(i.taskTitle),b.Bb(5),b.Tc(i.taskMessage),b.Bb(1),b.sc("src",b.wc(5,g,i.assignedTo),b.Kc),b.Bb(2),b.Tc(i.createdOn)}}function U(t,a){if(1&t){var e=b.Wb();b.Vb(0,"div"),b.Vb(1,"div",21),b.Vb(2,"div",22),b.Vb(3,"div",23),b.Vb(4,"h5",34),b.Sc(5),b.Ub(),b.Vb(6,"div",25),b.Vb(7,"i",26),b.hc("click",(function(t){b.Ic(e);var i=a.$implicit;return b.lc().editTask(i.taskId)})),b.Ub(),b.Vb(8,"i",27),b.hc("click",(function(t){b.Ic(e);var i=a.$implicit;return b.lc().deleteTask(i.taskId)})),b.Ub(),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Sc(10),b.Ub(),b.Qb(11,"img",28),b.Vb(12,"span",35),b.Sc(13),b.Ub(),b.Ub(),b.Ub(),b.Ub()}if(2&t){var i=a.$implicit;b.Cb("task-id",i.taskId),b.Bb(5),b.Tc(i.taskTitle),b.Bb(5),b.Tc(i.taskMessage),b.Bb(1),b.sc("src",b.wc(5,g,i.assignedTo),b.Kc),b.Bb(2),b.Tc(i.createdOn)}}var V=[{path:"",component:function(){function t(t,a,e,i){var s=this;this.dragulaService=t,this.elRef=a,this.taskBoardService=e,this.modalService=i,this.BAG="task-group",this.tasks=this.taskBoardService.tasks,this.loadTasks(),t.drop(this.BAG).subscribe((function(t){var a=t.target;s.updateTaskStatus(t.el.getAttribute("task-id"),a.id)}))}return t.prototype.loadTasks=function(){this.todo=this.tasks.filter((function(t){return"New"===t.status})),this.inProcess=this.tasks.filter((function(t){return"In-Process"===t.status})),this.backLog=this.tasks.filter((function(t){return"Pending"===t.status})),this.completed=this.tasks.filter((function(t){return"Completed"===t.status}))},t.prototype.editTask=function(t){var a=this,e=this.tasks.find((function(a){return a.taskId===t})),i=this.modalService.open(m);i.componentInstance.id=t,i.componentInstance.data={title:e.taskTitle,message:e.taskMessage},i.result.then((function(t){var i=a.tasks.indexOf(e);e.taskTitle=t.title,e.taskMessage=t.message,a.taskBoardService.UpdateTask(e,i).subscribe((function(t){a.tasks=t,a.loadTasks()}))})).catch((function(t){console.log(t)}))},t.prototype.updateTaskStatus=function(t,a){var e=this;if(t){var i=this.tasks.find((function(a){return a.taskId===+t})),s=this.tasks.indexOf(i);i.status=a,this.taskBoardService.UpdateTask(i,s).subscribe((function(t){e.tasks=t,e.loadTasks()}))}},t.prototype.deleteTask=function(t){var a=this,e=this.tasks.find((function(a){return a.taskId===t})),i=this.tasks.indexOf(e);this.taskBoardService.deleteTask(i).subscribe((function(t){a.tasks=t,a.loadTasks()}))},t.prototype.addTask=function(){var t=this,a=this.modalService.open(m);a.componentInstance.id=0,a.componentInstance.data={title:"",message:""},a.result.then((function(a){t.taskBoardService.addNewTask(a.title,a.message).subscribe((function(a){t.tasks=a,t.loadTasks()}))})).catch((function(t){console.log(t)}))},t.\u0275fac=function(a){return new(a||t)(b.Pb(s.c),b.Pb(b.l),b.Pb(u),b.Pb(o.q))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-taskboard"]],viewQuery:function(t,a){var e;1&t&&(b.Zc(p,!0),b.Zc(f,!0)),2&t&&(b.Ec(e=b.ic())&&(a.titleInputRef=e.first),b.Ec(e=b.ic())&&(a.messageInputRef=e.first))},features:[b.Ab([u])],decls:36,vars:12,consts:[[1,"row","mt-2"],[1,"col-6"],[1,"content-header","text-left"],[1,"content-sub-header"],[1,"col-6","text-right"],["type","button",1,"btn","btn-raised","btn-danger",3,"click"],[1,"fa","fa-paper-plane-o","d-lg-none","d-block"],[1,"d-lg-block","d-none"],["id","taskboard"],[1,"row"],[1,"col-md-3","col-12"],[1,"ml-2","mt-2","text-bold-500","text-left"],[1,"ft-list","mr-1","float-left"],["id","New",1,"dragdrop-container",3,"dragula","dragulaModel"],[4,"ngFor","ngForOf"],[1,"ft-trending-up","mr-1","float-left"],["id","In-Process",1,"dragdrop-container",3,"dragula","dragulaModel"],[1,"ft-thumbs-up","mr-1","float-left"],["id","Completed",1,"dragdrop-container",3,"dragula","dragulaModel"],[1,"ft-alert-octagon","mr-1","float-left"],["id","Pending",1,"dragdrop-container",3,"dragula","dragulaModel"],[1,"card"],[1,"card-body","pt-3","text-left"],[1,"clearfix"],[1,"text-bold-500","primary","float-left"],[1,"actions","float-right"],[1,"ft-edit","cursor-pointer","mr-1","info",3,"click"],[1,"ft-trash-2","cursor-pointer","danger",3,"click"],[1,"rounded-circle","width-50","mr-2",3,"src"],[1,"primary"],[1,"text-bold-500","info","float-left"],[1,"info"],[1,"text-bold-500","success","float-left"],[1,"success"],[1,"text-bold-500","warning","float-left"],[1,"warning"]],template:function(t,a){1&t&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Vb(2,"div",2),b.Sc(3,"Task Board"),b.Ub(),b.Qb(4,"p",3),b.Ub(),b.Vb(5,"div",4),b.Vb(6,"button",5),b.hc("click",(function(t){return a.addTask()})),b.Qb(7,"i",6),b.Vb(8,"span",7),b.Sc(9,"Create"),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(10,"section",8),b.Vb(11,"div",9),b.Vb(12,"div",10),b.Vb(13,"h4",11),b.Qb(14,"i",12),b.Sc(15," To Dos"),b.Ub(),b.Vb(16,"div",13),b.Qc(17,k,14,7,"div",14),b.Ub(),b.Ub(),b.Vb(18,"div",10),b.Vb(19,"h4",11),b.Qb(20,"i",15),b.Sc(21," In Progress"),b.Ub(),b.Vb(22,"div",16),b.Qc(23,v,14,7,"div",14),b.Ub(),b.Ub(),b.Vb(24,"div",10),b.Vb(25,"h4",11),b.Qb(26,"i",17),b.Sc(27,"Completed"),b.Ub(),b.Vb(28,"div",18),b.Qc(29,h,14,7,"div",14),b.Ub(),b.Ub(),b.Vb(30,"div",10),b.Vb(31,"h4",11),b.Qb(32,"i",19),b.Sc(33,"On Hold"),b.Ub(),b.Vb(34,"div",20),b.Qc(35,U,14,7,"div",14),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Bb(16),b.sc("dragula","task-group")("dragulaModel",a.todo),b.Bb(1),b.sc("ngForOf",a.todo),b.Bb(5),b.sc("dragula","task-group")("dragulaModel",a.inProcess),b.Bb(1),b.sc("ngForOf",a.inProcess),b.Bb(5),b.sc("dragula","task-group")("dragulaModel",a.completed),b.Bb(1),b.sc("ngForOf",a.completed),b.Bb(5),b.sc("dragula","task-group")("dragulaModel",a.backLog),b.Bb(1),b.sc("ngForOf",a.backLog))},directives:[s.a,i.o],styles:[".gh-fork{position:fixed;top:0;right:0;border:0}.dragdrop-wrapper{display:table}.dragdrop-container:nth-child(odd){background-color:rgba(0,0,0,.2)}.dragdrop-container>div,.gu-mirror{transition:opacity .4s ease-in-out}.dragdrop-container>div{cursor:move;cursor:grab;cursor:-webkit-grab}.gu-mirror{cursor:grabbing;cursor:-webkit-grabbing}.dragdrop-container .ex-moved{background-color:#e74c3c}.dragdrop-container.ex-over{background-color:hsla(0,0%,100%,.3)}#left-lovehandles>div,#right-lovehandles>div{cursor:auto}.handle{padding:0 5px;margin-right:5px;background-color:rgba(0,0,0,.4);cursor:move}.image-thing{margin:20px 0;display:block;text-align:center}.slack-join{position:absolute;font-weight:400;font-size:14px;right:10px;top:50%;margin-top:-8px;line-height:16px}.taskboard-modal-footer .btn-save{color:#fff!important}"],encapsulation:2}),t}(),data:{title:"Taskboard"}}],T=function(){function t(){}return t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({factory:function(a){return new(a||t)},imports:[[n.f.forChild(V)],n.f]}),t}();e.d(a,"TaskboardModule",(function(){return y}));var y=function(){function t(){}return t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({factory:function(a){return new(a||t)},imports:[[i.c,T,s.b.forRoot(),r.k,r.x,o.s]]}),t}()}}]);