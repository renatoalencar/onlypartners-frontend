// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('firemore.firebase');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('firemore.config');
firemore.firebase.FB = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
firemore.firebase.https = (function firemore$firebase$https(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30001 = arguments.length;
var i__4737__auto___30002 = (0);
while(true){
if((i__4737__auto___30002 < len__4736__auto___30001)){
args__4742__auto__.push((arguments[i__4737__auto___30002]));

var G__30003 = (i__4737__auto___30002 + (1));
i__4737__auto___30002 = G__30003;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return firemore.firebase.https.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(firemore.firebase.https.cljs$core$IFn$_invoke$arity$variadic = (function (ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"https://",ds);
}));

(firemore.firebase.https.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(firemore.firebase.https.cljs$lang$applyTo = (function (seq30000){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30000));
}));

firemore.firebase.database_url = (function firemore$firebase$database_url(firebase_project_id){
return firemore.firebase.https.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([firebase_project_id,".firebaseio.com"], 0));
});
firemore.firebase.storage_bucket = (function firemore$firebase$storage_bucket(firebase_project_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firebase_project_id),".appspot.com"].join('');
});
firemore.firebase.auth_domain = (function firemore$firebase$auth_domain(firebase_project_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firebase_project_id),".firebaseapp.com"].join('');
});
firemore.firebase.overrides = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
firemore.firebase.opts__GT_js_opts = (function firemore$firebase$opts__GT_js_opts(config){
var map__30004 = config;
var map__30004__$1 = (((((!((map__30004 == null))))?(((((map__30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30004):map__30004);
var api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,cljs.core.cst$kw$api_DASH_key);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,cljs.core.cst$kw$project_DASH_id);
var extra_overrides = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,cljs.core.cst$kw$api_DASH_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$project_DASH_id], 0));
if(cljs.core.empty_QMARK_(extra_overrides)){
} else {
cljs.core.reset_BANG_(firemore.firebase.overrides,extra_overrides);
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$apiKey,api_key,cljs.core.cst$kw$authDomain,firemore.firebase.auth_domain(project_id),cljs.core.cst$kw$projectId,project_id], null);
});
firemore.firebase.initialize = (function firemore$firebase$initialize(var_args){
var G__30007 = arguments.length;
switch (G__30007) {
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
return firemore.firebase.initialize.cljs$core$IFn$_invoke$arity$1(firemore.config.default_firebase_config);
}));

(firemore.firebase.initialize.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var js_opts = cljs.core.clj__GT_js(firemore.firebase.opts__GT_js_opts(opts));
var app = firebase.initializeApp(js_opts);
return cljs.core.reset_BANG_(firemore.firebase.FB,app);
}));

(firemore.firebase.initialize.cljs$lang$maxFixedArity = 1);

firemore.firebase.db = (function firemore$firebase$db(firebase){
var db = firebase.firestore();
var temp__5720__auto___30009 = cljs.core.deref(firemore.firebase.overrides);
if(cljs.core.truth_(temp__5720__auto___30009)){
var overrides_30010 = temp__5720__auto___30009;
db.settings(cljs.core.clj__GT_js(overrides_30010));
} else {
}

return db;
});
firemore.firebase.auth = (function firemore$firebase$auth(firebase){
return firebase.auth();
});
