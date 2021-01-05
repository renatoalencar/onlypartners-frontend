// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('firemore.firebase');
goog.require('cljs.core');
goog.require('firebase.app');
goog.require('firebase.auth');
goog.require('firebase.firestore');
goog.require('firemore.config');
firemore.firebase.FB = cljs.core.atom.call(null,null);
firemore.firebase.https = (function firemore$firebase$https(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28465 = arguments.length;
var i__4737__auto___28466 = (0);
while(true){
if((i__4737__auto___28466 < len__4736__auto___28465)){
args__4742__auto__.push((arguments[i__4737__auto___28466]));

var G__28467 = (i__4737__auto___28466 + (1));
i__4737__auto___28466 = G__28467;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return firemore.firebase.https.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(firemore.firebase.https.cljs$core$IFn$_invoke$arity$variadic = (function (ds){
return cljs.core.apply.call(null,cljs.core.str,"https://",ds);
}));

(firemore.firebase.https.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(firemore.firebase.https.cljs$lang$applyTo = (function (seq28464){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28464));
}));

firemore.firebase.database_url = (function firemore$firebase$database_url(firebase_project_id){
return firemore.firebase.https.call(null,firebase_project_id,".firebaseio.com");
});
firemore.firebase.storage_bucket = (function firemore$firebase$storage_bucket(firebase_project_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firebase_project_id),".appspot.com"].join('');
});
firemore.firebase.auth_domain = (function firemore$firebase$auth_domain(firebase_project_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firebase_project_id),".firebaseapp.com"].join('');
});
firemore.firebase.overrides = cljs.core.atom.call(null,null);
firemore.firebase.opts__GT_js_opts = (function firemore$firebase$opts__GT_js_opts(config){
var map__28468 = config;
var map__28468__$1 = (((((!((map__28468 == null))))?(((((map__28468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28468):map__28468);
var api_key = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var project_id = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var extra_overrides = cljs.core.dissoc.call(null,config,new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Keyword(null,"project-id","project-id",206449307));
if(cljs.core.empty_QMARK_.call(null,extra_overrides)){
} else {
cljs.core.reset_BANG_.call(null,firemore.firebase.overrides,extra_overrides);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"apiKey","apiKey",-942818613),api_key,new cljs.core.Keyword(null,"authDomain","authDomain",-1125516118),firemore.firebase.auth_domain.call(null,project_id),new cljs.core.Keyword(null,"projectId","projectId",-1551013096),project_id], null);
});
firemore.firebase.initialize = (function firemore$firebase$initialize(var_args){
var G__28471 = arguments.length;
switch (G__28471) {
case 0:
return firemore.firebase.initialize.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firemore.firebase.initialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firebase.initialize.cljs$core$IFn$_invoke$arity$0 = (function (){
return firemore.firebase.initialize.call(null,firemore.config.default_firebase_config);
}));

(firemore.firebase.initialize.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var js_opts = cljs.core.clj__GT_js.call(null,firemore.firebase.opts__GT_js_opts.call(null,opts));
var app = firebase.initializeApp(js_opts);
return cljs.core.reset_BANG_.call(null,firemore.firebase.FB,app);
}));

(firemore.firebase.initialize.cljs$lang$maxFixedArity = 1);

firemore.firebase.db = (function firemore$firebase$db(firebase){
var db = firebase.firestore();
var temp__5720__auto___28473 = cljs.core.deref.call(null,firemore.firebase.overrides);
if(cljs.core.truth_(temp__5720__auto___28473)){
var overrides_28474 = temp__5720__auto___28473;
db.settings(cljs.core.clj__GT_js.call(null,overrides_28474));
} else {
}

return db;
});
firemore.firebase.auth = (function firemore$firebase$auth(firebase){
return firebase.auth();
});

//# sourceMappingURL=firebase.js.map
