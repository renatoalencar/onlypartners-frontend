// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('firemore.firestore');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('firemore.config');
goog.require('firemore.firebase');
firemore.firestore.server_timestamp = firebase.firestore.FieldValue.serverTimestamp();
firemore.firestore.active_transactions = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
firemore.firestore.index_of_transaction = (function firemore$firestore$index_of_transaction(transactions,trx){
return cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__28647_SHARP_){
return (new cljs.core.Keyword(null,"trx","trx",-1323841164).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__28647_SHARP_)) === trx);
}),cljs.core.map_indexed.call(null,cljs.core.vector,transactions)));
});
firemore.firestore.add_reference_to_transaction = (function firemore$firestore$add_reference_to_transaction(transactions,trx,reference){
var i = (function (){var or__4126__auto__ = firemore.firestore.index_of_transaction.call(null,transactions,trx);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.count.call(null,transactions);
}
})();
var m2 = cljs.core.get.call(null,transactions,i,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trx","trx",-1323841164),trx,new cljs.core.Keyword(null,"references","references",882562509),cljs.core.PersistentHashSet.EMPTY], null));
var m3 = cljs.core.update.call(null,m2,new cljs.core.Keyword(null,"references","references",882562509),cljs.core.conj,reference);
return cljs.core.assoc.call(null,transactions,i,m3);
});
firemore.firestore.remove_reference_from_transaction = (function firemore$firestore$remove_reference_from_transaction(transactions,trx,reference){
var temp__5718__auto__ = firemore.firestore.index_of_transaction.call(null,transactions,trx);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core.update_in.call(null,transactions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"references","references",882562509)], null),cljs.core.disj,reference);
} else {
return transactions;
}
});
firemore.firestore.remove_transaction_from_transactions = (function firemore$firestore$remove_transaction_from_transactions(transactions,trx){
var temp__5718__auto__ = firemore.firestore.index_of_transaction.call(null,transactions,trx);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core.vec.call(null,cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.subvec.call(null,transactions,(0),i);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljs.core.subvec.call(null,transactions,(i + (1)));
}),null,null))));
} else {
return transactions;
}
});
/**
 * Convert a firemore reference to a firebase reference
 */
firemore.firestore.ref = (function firemore$firestore$ref(var_args){
var G__28649 = arguments.length;
switch (G__28649) {
case 1:
return firemore.firestore.ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firemore.firestore.ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.ref.cljs$core$IFn$_invoke$arity$1 = (function (path){
return firemore.firestore.ref.call(null,cljs.core.deref.call(null,firemore.firebase.FB),path);
}));

(firemore.firestore.ref.cljs$core$IFn$_invoke$arity$2 = (function (fb,path){
var G__28653 = path;
var vec__28654 = G__28653;
var seq__28655 = cljs.core.seq.call(null,vec__28654);
var first__28656 = cljs.core.first.call(null,seq__28655);
var seq__28655__$1 = cljs.core.next.call(null,seq__28655);
var p = first__28656;
var ps = seq__28655__$1;
var collection_QMARK_ = true;
var obj = firemore.firebase.db.call(null,fb);
var G__28653__$1 = G__28653;
var collection_QMARK___$1 = collection_QMARK_;
var obj__$1 = obj;
while(true){
var vec__28657 = G__28653__$1;
var seq__28658 = cljs.core.seq.call(null,vec__28657);
var first__28659 = cljs.core.first.call(null,seq__28658);
var seq__28658__$1 = cljs.core.next.call(null,seq__28658);
var p__$1 = first__28659;
var ps__$1 = seq__28658__$1;
var collection_QMARK___$2 = collection_QMARK___$1;
var obj__$2 = obj__$1;
var new_obj = ((collection_QMARK___$2)?obj__$2.collection(cljs.core.name.call(null,p__$1)):obj__$2.doc(p__$1));
if(cljs.core.empty_QMARK_.call(null,ps__$1)){
return new_obj;
} else {
var G__28661 = ps__$1;
var G__28662 = (!(collection_QMARK___$2));
var G__28663 = new_obj;
G__28653__$1 = G__28661;
collection_QMARK___$1 = G__28662;
obj__$1 = G__28663;
continue;
}
break;
}
}));

(firemore.firestore.ref.cljs$lang$maxFixedArity = 2);

/**
 * If s begins with ':' then convert into a keyword, else returns 's
 */
firemore.firestore.str__GT_keywordize = (function firemore$firestore$str__GT_keywordize(s){
if(cljs.core._EQ_.call(null,cljs.core.subs.call(null,s,(0),(1)),":")){
var $ = s;
var $__$1 = cljs.core.subs.call(null,$,(1));
var $__$2 = clojure.string.split.call(null,$__$1,"/");
return cljs.core.apply.call(null,cljs.core.keyword,$__$2);
} else {
return s;
}
});
/**
 * Mirror function for str->keywordize
 */
firemore.firestore.keywordize__GT_str = (function firemore$firestore$keywordize__GT_str(k){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
});
firemore.firestore.jsonify = (function firemore$firestore$jsonify(value){
return cljs.core.clj__GT_js.call(null,value,new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),firemore.firestore.keywordize__GT_str);
});
firemore.firestore.clojurify = (function firemore$firestore$clojurify(json_document){
return cljs.core.reduce_kv.call(null,(function (p1__28664_SHARP_,p2__28665_SHARP_,p3__28666_SHARP_){
return cljs.core.assoc.call(null,p1__28664_SHARP_,firemore.firestore.str__GT_keywordize.call(null,p2__28665_SHARP_),p3__28666_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.call(null,json_document));
});
/**
 * Replace `config/TIMESTAMP (keyword) with firebase Server Timestamp
 */
firemore.firestore.replace_timestamp = (function firemore$firestore$replace_timestamp(m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core._EQ_.call(null,v,firemore.config.TIMESTAMP)){
return cljs.core.assoc.call(null,m__$1,k,firemore.firestore.server_timestamp);
} else {
return m__$1;
}
}),m,m);
});
firemore.firestore.build_path = (function firemore$firestore$build_path(fb,path){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),firemore.firestore.ref.call(null,fb,path),new cljs.core.Keyword(null,"path","path",-188191168),path], null),((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,path)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.peek.call(null,path)], null):null));
});
firemore.firestore.expand_where = (function firemore$firestore$expand_where(where){
if(cljs.core.truth_(where)){
var vec__28667 = where;
var expression_1 = cljs.core.nth.call(null,vec__28667,(0),null);
if(cljs.core.vector_QMARK_.call(null,expression_1)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where], null)], null);
}
} else {
return null;
}
});
firemore.firestore.convert_if_string = (function firemore$firestore$convert_if_string(order_expression){
if(typeof order_expression === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [order_expression,"asc"], null);
} else {
return order_expression;
}
});
firemore.firestore.expand_order = (function firemore$firestore$expand_order(order){
if(cljs.core.truth_(order)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.mapv.call(null,firemore.firestore.convert_if_string,order)], null);
} else {
return null;
}
});
firemore.firestore.expand_query = (function firemore$firestore$expand_query(query){
var map__28670 = query;
var map__28670__$1 = (((((!((map__28670 == null))))?(((((map__28670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28670):map__28670);
var where = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var order = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var limit = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var start_at = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"start-at","start-at",-103334680));
var start_after = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"start-after","start-after",-1380036532));
var end_at = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"end-at","end-at",1331226740));
var end_before = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"end-before","end-before",1724055831));
return cljs.core.merge.call(null,query,firemore.firestore.expand_where.call(null,where),firemore.firestore.expand_order.call(null,order));
});
firemore.firestore.build_query = (function firemore$firestore$build_query(fb,path,query){
return cljs.core.merge.call(null,firemore.firestore.build_path.call(null,fb,path),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),firemore.firestore.expand_query.call(null,query)], null));
});
firemore.firestore.shared_db = (function firemore$firestore$shared_db(var_args){
var G__28673 = arguments.length;
switch (G__28673) {
case 2:
return firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$2 = (function (fb,reference){
if(cljs.core.vector_QMARK_.call(null,reference)){
} else {
throw (new Error("Assert failed: (vector? reference)"));
}

if(cljs.core.map_QMARK_.call(null,cljs.core.peek.call(null,reference))){
return firemore.firestore.build_query.call(null,fb,cljs.core.pop.call(null,reference),cljs.core.peek.call(null,reference));
} else {
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,reference))){
return firemore.firestore.build_query.call(null,fb,reference,cljs.core.PersistentArrayMap.EMPTY);
} else {
return firemore.firestore.build_path.call(null,fb,reference);

}
}
}));

(firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$3 = (function (fb,reference,value){
return cljs.core.merge.call(null,firemore.firestore.shared_db.call(null,fb,reference),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-value","js-value",-758336661),firemore.firestore.jsonify.call(null,firemore.firestore.replace_timestamp.call(null,value))], null));
}));

(firemore.firestore.shared_db.cljs$lang$maxFixedArity = 3);

firemore.firestore.promise__GT_chan = (function firemore$firestore$promise__GT_chan(var_args){
var G__28676 = arguments.length;
switch (G__28676) {
case 1:
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$1 = (function (promise){
return firemore.firestore.promise__GT_chan.call(null,promise,cljs.core.identity);
}));

(firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$2 = (function (promise,on_success){
return firemore.firestore.promise__GT_chan.call(null,promise,on_success,(function (error){
return cljs.core.ex_info.call(null,new cljs.core.Keyword(null,"promise->chan-failure","promise->chan-failure",-636959831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
}));
}));

(firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$3 = (function (promise,on_success,on_failure){
var c = cljs.core.async.chan.call(null);
promise.then((function (value){
var G__28677 = value;
var G__28677__$1 = (((G__28677 == null))?null:on_success.call(null,G__28677));
if((G__28677__$1 == null)){
return null;
} else {
return cljs.core.async.put_BANG_.call(null,c,G__28677__$1);
}
})).catch((function (error){
var temp__5720__auto__ = on_failure.call(null,error);
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
console.error(cljs.core.pr_str.call(null,e));

return cljs.core.async.put_BANG_.call(null,c,e);
} else {
return null;
}
})).finally((function (_){
return cljs.core.async.close_BANG_.call(null,c);
}));

return c;
}));

(firemore.firestore.promise__GT_chan.cljs$lang$maxFixedArity = 3);

firemore.firestore.chan__GT_promise = (function firemore$firestore$chan__GT_promise(var_args){
var G__28680 = arguments.length;
switch (G__28680) {
case 1:
return firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$1 = (function (c){
return firemore.firestore.chan__GT_promise.call(null,c,(function (m){
return new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(m) === false;
}));
}));

(firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$2 = (function (c,reject_QMARK_){
return firemore.firestore.chan__GT_promise.call(null,c,reject_QMARK_,(function (c__$1,v){
return cljs.core.async.close_BANG_.call(null,c__$1);
}));
}));

(firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$3 = (function (c,reject_QMARK_,finally_fx){
return (new Promise((function (resolve,reject){
var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_28692){
var state_val_28693 = (state_28692[(1)]);
if((state_val_28693 === (1))){
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28692__$1,(2),c);
} else {
if((state_val_28693 === (2))){
var inst_28682 = (state_28692[(7)]);
var inst_28682__$1 = (state_28692[(2)]);
var inst_28683 = reject_QMARK_.call(null,inst_28682__$1);
var state_28692__$1 = (function (){var statearr_28694 = state_28692;
(statearr_28694[(7)] = inst_28682__$1);

return statearr_28694;
})();
if(cljs.core.truth_(inst_28683)){
var statearr_28695_28705 = state_28692__$1;
(statearr_28695_28705[(1)] = (3));

} else {
var statearr_28696_28706 = state_28692__$1;
(statearr_28696_28706[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (3))){
var inst_28682 = (state_28692[(7)]);
var inst_28685 = reject.call(null,inst_28682);
var state_28692__$1 = state_28692;
var statearr_28697_28707 = state_28692__$1;
(statearr_28697_28707[(2)] = inst_28685);

(statearr_28697_28707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (4))){
var inst_28682 = (state_28692[(7)]);
var inst_28687 = resolve.call(null,inst_28682);
var state_28692__$1 = state_28692;
var statearr_28698_28708 = state_28692__$1;
(statearr_28698_28708[(2)] = inst_28687);

(statearr_28698_28708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (5))){
var inst_28682 = (state_28692[(7)]);
var inst_28689 = (state_28692[(2)]);
var inst_28690 = finally_fx.call(null,c,inst_28682);
var state_28692__$1 = (function (){var statearr_28699 = state_28692;
(statearr_28699[(8)] = inst_28689);

return statearr_28699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28692__$1,inst_28690);
} else {
return null;
}
}
}
}
}
});
return (function() {
var firemore$firestore$state_machine__24475__auto__ = null;
var firemore$firestore$state_machine__24475__auto____0 = (function (){
var statearr_28700 = [null,null,null,null,null,null,null,null,null];
(statearr_28700[(0)] = firemore$firestore$state_machine__24475__auto__);

(statearr_28700[(1)] = (1));

return statearr_28700;
});
var firemore$firestore$state_machine__24475__auto____1 = (function (state_28692){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_28692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e28701){if((e28701 instanceof Object)){
var ex__24478__auto__ = e28701;
var statearr_28702_28709 = state_28692;
(statearr_28702_28709[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28710 = state_28692;
state_28692 = G__28710;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
firemore$firestore$state_machine__24475__auto__ = function(state_28692){
switch(arguments.length){
case 0:
return firemore$firestore$state_machine__24475__auto____0.call(this);
case 1:
return firemore$firestore$state_machine__24475__auto____1.call(this,state_28692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
firemore$firestore$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = firemore$firestore$state_machine__24475__auto____0;
firemore$firestore$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = firemore$firestore$state_machine__24475__auto____1;
return firemore$firestore$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_28703 = f__24642__auto__.call(null);
(statearr_28703[(6)] = c__24641__auto__);

return statearr_28703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
})));
}));

(firemore.firestore.chan__GT_promise.cljs$lang$maxFixedArity = 3);

firemore.firestore.default_options = (function firemore$firestore$default_options(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.deref.call(null,firemore.firebase.FB)], null);
});
firemore.firestore.merge_default_options = (function firemore$firestore$merge_default_options(options){
return cljs.core.merge.call(null,firemore.firestore.default_options.call(null),options);
});
firemore.firestore.set_db_BANG_ = (function firemore$firestore$set_db_BANG_(var_args){
var G__28712 = arguments.length;
switch (G__28712) {
case 2:
return firemore.firestore.set_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firemore.firestore.set_db_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.set_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reference,value){
return firemore.firestore.set_db_BANG_.call(null,reference,value,null);
}));

(firemore.firestore.set_db_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reference,value,options){
var map__28713 = firemore.firestore.merge_default_options.call(null,options);
var map__28713__$1 = (((((!((map__28713 == null))))?(((((map__28713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28713):map__28713);
var fb = cljs.core.get.call(null,map__28713__$1,new cljs.core.Keyword(null,"fb","fb",-1331669322));
var transaction = cljs.core.get.call(null,map__28713__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var batch = cljs.core.get.call(null,map__28713__$1,new cljs.core.Keyword(null,"batch","batch",-662921200));
var map__28714 = firemore.firestore.shared_db.call(null,fb,reference,value);
var map__28714__$1 = (((((!((map__28714 == null))))?(((((map__28714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28714):map__28714);
var ref = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var js_value = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"js-value","js-value",-758336661));
var override = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return batch;
}
})();
if(cljs.core.truth_(override)){
if(cljs.core.truth_(transaction)){
cljs.core.swap_BANG_.call(null,firemore.firestore.active_transactions,firemore.firestore.remove_reference_from_transaction,transaction,reference);
} else {
}

return override.set(ref,js_value);
} else {
return firemore.firestore.promise__GT_chan.call(null,ref.set(js_value));
}
}));

(firemore.firestore.set_db_BANG_.cljs$lang$maxFixedArity = 3);

firemore.firestore.add_db_BANG_ = (function firemore$firestore$add_db_BANG_(var_args){
var G__28719 = arguments.length;
switch (G__28719) {
case 3:
return firemore.firestore.add_db_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firemore.firestore.add_db_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.add_db_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reference,collection,value){
return firemore.firestore.add_db_BANG_.call(null,reference,collection,value,null);
}));

(firemore.firestore.add_db_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reference,collection,value,options){
var map__28720 = firemore.firestore.merge_default_options.call(null,options);
var map__28720__$1 = (((((!((map__28720 == null))))?(((((map__28720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28720):map__28720);
var fb = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"fb","fb",-1331669322));
var map__28721 = firemore.firestore.shared_db.call(null,fb,cljs.core.conj.call(null,cljs.core.vec.call(null,reference),collection),value);
var map__28721__$1 = (((((!((map__28721 == null))))?(((((map__28721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28721):map__28721);
var ref = cljs.core.get.call(null,map__28721__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var js_value = cljs.core.get.call(null,map__28721__$1,new cljs.core.Keyword(null,"js-value","js-value",-758336661));
return firemore.firestore.promise__GT_chan.call(null,ref.add(js_value),(function (docRef){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),docRef.id], null);
}));
}));

(firemore.firestore.add_db_BANG_.cljs$lang$maxFixedArity = 4);

firemore.firestore.update_db_BANG_ = (function firemore$firestore$update_db_BANG_(var_args){
var G__28726 = arguments.length;
switch (G__28726) {
case 2:
return firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reference,value){
return firemore.firestore.update_db_BANG_.call(null,reference,value,null);
}));

(firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reference,value,options){
var map__28727 = firemore.firestore.merge_default_options.call(null,options);
var map__28727__$1 = (((((!((map__28727 == null))))?(((((map__28727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28727):map__28727);
var fb = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"fb","fb",-1331669322));
var transaction = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var batch = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"batch","batch",-662921200));
var map__28728 = firemore.firestore.shared_db.call(null,fb,reference,value);
var map__28728__$1 = (((((!((map__28728 == null))))?(((((map__28728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28728):map__28728);
var ref = cljs.core.get.call(null,map__28728__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var js_value = cljs.core.get.call(null,map__28728__$1,new cljs.core.Keyword(null,"js-value","js-value",-758336661));
var override = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return batch;
}
})();
if(cljs.core.truth_(override)){
if(cljs.core.truth_(transaction)){
cljs.core.swap_BANG_.call(null,firemore.firestore.active_transactions,firemore.firestore.remove_reference_from_transaction,transaction,reference);
} else {
}

return override.update(ref,js_value);
} else {
return firemore.firestore.promise__GT_chan.call(null,ref.update(js_value));
}
}));

(firemore.firestore.update_db_BANG_.cljs$lang$maxFixedArity = 3);

firemore.firestore.delete_db_BANG_ = (function firemore$firestore$delete_db_BANG_(var_args){
var G__28733 = arguments.length;
switch (G__28733) {
case 1:
return firemore.firestore.delete_db_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firemore.firestore.delete_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.delete_db_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reference){
return firemore.firestore.delete_db_BANG_.call(null,reference,null);
}));

(firemore.firestore.delete_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reference,options){
var map__28734 = firemore.firestore.merge_default_options.call(null,options);
var map__28734__$1 = (((((!((map__28734 == null))))?(((((map__28734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28734):map__28734);
var fb = cljs.core.get.call(null,map__28734__$1,new cljs.core.Keyword(null,"fb","fb",-1331669322));
var transaction = cljs.core.get.call(null,map__28734__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var batch = cljs.core.get.call(null,map__28734__$1,new cljs.core.Keyword(null,"batch","batch",-662921200));
var map__28735 = firemore.firestore.shared_db.call(null,fb,reference,null);
var map__28735__$1 = (((((!((map__28735 == null))))?(((((map__28735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28735):map__28735);
var ref = cljs.core.get.call(null,map__28735__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var override = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return batch;
}
})();
if(cljs.core.truth_(override)){
if(cljs.core.truth_(transaction)){
cljs.core.swap_BANG_.call(null,firemore.firestore.active_transactions,firemore.firestore.remove_reference_from_transaction,transaction,reference);
} else {
}

return override.delete(ref);
} else {
return firemore.firestore.promise__GT_chan.call(null,ref.delete());
}
}));

(firemore.firestore.delete_db_BANG_.cljs$lang$maxFixedArity = 2);

firemore.firestore.add_where_to_ref = (function firemore$firestore$add_where_to_ref(ref,query){
return cljs.core.reduce.call(null,(function (ref__$1,p__28739){
var vec__28740 = p__28739;
var k = cljs.core.nth.call(null,vec__28740,(0),null);
var op = cljs.core.nth.call(null,vec__28740,(1),null);
var v = cljs.core.nth.call(null,vec__28740,(2),null);
return ref__$1.where(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),op,((cljs.core.coll_QMARK_.call(null,v))?cljs.core.clj__GT_js.call(null,v):v));
}),ref,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(query));
});
firemore.firestore.add_order_to_ref = (function firemore$firestore$add_order_to_ref(ref,query){
return cljs.core.reduce.call(null,(function (ref__$1,p__28743){
var vec__28744 = p__28743;
var k = cljs.core.nth.call(null,vec__28744,(0),null);
var direction = cljs.core.nth.call(null,vec__28744,(1),null);
return ref__$1.orderBy(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),direction);
}),ref,new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(query));
});
firemore.firestore.add_limit_to_ref = (function firemore$firestore$add_limit_to_ref(ref,query){
var temp__5718__auto__ = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5718__auto__)){
var limit = temp__5718__auto__;
return ref.limit(limit);
} else {
return ref;
}
});
firemore.firestore.filter_by_query = (function firemore$firestore$filter_by_query(ref,query){
return firemore.firestore.add_limit_to_ref.call(null,firemore.firestore.add_order_to_ref.call(null,firemore.firestore.add_where_to_ref.call(null,ref,query),query),query);
});
firemore.firestore.doc_upgrader = (function firemore$firestore$doc_upgrader(reference,doc){
var temp__5718__auto__ = doc.exists;
if(cljs.core.truth_(temp__5718__auto__)){
var exists_QMARK_ = temp__5718__auto__;
return cljs.core.with_meta.call(null,firemore.firestore.clojurify.call(null,doc.data()),(function (){var id = doc.id;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"reference","reference",-1711695023),cljs.core.conj.call(null,cljs.core.pop.call(null,reference),id),new cljs.core.Keyword(null,"pending?","pending?",-2133618792),doc.metadata.hasPendingWrites], null);
})());
} else {
return firemore.config.NO_DOCUMENT;
}
});
firemore.firestore.get_db = (function firemore$firestore$get_db(var_args){
var G__28749 = arguments.length;
switch (G__28749) {
case 1:
return firemore.firestore.get_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firemore.firestore.get_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.get_db.cljs$core$IFn$_invoke$arity$1 = (function (reference){
return firemore.firestore.get_db.call(null,reference,null);
}));

(firemore.firestore.get_db.cljs$core$IFn$_invoke$arity$2 = (function (reference,options){
var map__28750 = firemore.firestore.merge_default_options.call(null,options);
var map__28750__$1 = (((((!((map__28750 == null))))?(((((map__28750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28750):map__28750);
var fb = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"fb","fb",-1331669322));
var transaction = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var map__28751 = firemore.firestore.shared_db.call(null,fb,reference);
var map__28751__$1 = (((((!((map__28751 == null))))?(((((map__28751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751):map__28751);
var ref = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var query = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_(query)){
return firemore.firestore.promise__GT_chan.call(null,firemore.firestore.filter_by_query.call(null,ref,query).get(),(function (snapshot){
var a = cljs.core.atom.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reference","reference",-1711695023),reference], null)));
snapshot.forEach((function (p1__28747_SHARP_){
return cljs.core.swap_BANG_.call(null,a,cljs.core.conj,firemore.firestore.doc_upgrader.call(null,reference,p1__28747_SHARP_));
}));

return cljs.core.deref.call(null,a);
}));
} else {
return firemore.firestore.promise__GT_chan.call(null,(cljs.core.truth_(transaction)?(function (){
cljs.core.swap_BANG_.call(null,firemore.firestore.active_transactions,firemore.firestore.add_reference_to_transaction,transaction,reference);

return transaction.get(ref);
})()
:ref.get()),(function (doc){
return firemore.firestore.doc_upgrader.call(null,reference,doc);
}));
}
}));

(firemore.firestore.get_db.cljs$lang$maxFixedArity = 2);

firemore.firestore.snapshot_handler = (function firemore$firestore$snapshot_handler(collection_QMARK_,c,reference,snapshot){
return cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(collection_QMARK_)?(function (){var a = cljs.core.atom.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reference","reference",-1711695023),reference], null)));
snapshot.forEach((function (p1__28755_SHARP_){
return cljs.core.swap_BANG_.call(null,a,cljs.core.conj,firemore.firestore.doc_upgrader.call(null,reference,p1__28755_SHARP_));
}));

return cljs.core.deref.call(null,a);
})():firemore.firestore.doc_upgrader.call(null,reference,snapshot)));
});
firemore.firestore.snapshot_listen_options__GT_js = (function firemore$firestore$snapshot_listen_options__GT_js(options){
var map__28756 = options;
var map__28756__$1 = (((((!((map__28756 == null))))?(((((map__28756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28756):map__28756);
var include_metadata_changes = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"include-metadata-changes","include-metadata-changes",1841924941));
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(include_metadata_changes)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"includeMetadataChanges","includeMetadataChanges",-1442358339),true], null):null)));
});
firemore.firestore.listen = (function firemore$firestore$listen(var_args){
var G__28759 = arguments.length;
switch (G__28759) {
case 1:
return firemore.firestore.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firemore.firestore.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.listen.cljs$core$IFn$_invoke$arity$1 = (function (reference){
return firemore.firestore.listen.call(null,reference,null);
}));

(firemore.firestore.listen.cljs$core$IFn$_invoke$arity$2 = (function (reference,options){
var map__28760 = firemore.firestore.merge_default_options.call(null,options);
var map__28760__$1 = (((((!((map__28760 == null))))?(((((map__28760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28760):map__28760);
var fb = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"fb","fb",-1331669322));
var map__28761 = firemore.firestore.shared_db.call(null,fb,reference,null);
var map__28761__$1 = (((((!((map__28761 == null))))?(((((map__28761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28761):map__28761);
var ref = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var query = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var c = cljs.core.async.chan.call(null);
var collection_QMARK_ = (!((query == null)));
var handler = cljs.core.partial.call(null,firemore.firestore.snapshot_handler,collection_QMARK_,c,reference);
var unsubscribe = ((collection_QMARK_)?firemore.firestore.filter_by_query.call(null,ref,query):ref).onSnapshot(firemore.firestore.snapshot_listen_options__GT_js.call(null,options),handler);
var unsubscribe_fx = (function (){
cljs.core.async.close_BANG_.call(null,c);

return unsubscribe.call(null);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"unsubscribe","unsubscribe",632650147),unsubscribe_fx], null);
}));

(firemore.firestore.listen.cljs$lang$maxFixedArity = 2);

firemore.firestore.unlisten_db = (function firemore$firestore$unlisten_db(p__28765){
var map__28766 = p__28765;
var map__28766__$1 = (((((!((map__28766 == null))))?(((((map__28766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28766):map__28766);
var unsubscribe = cljs.core.get.call(null,map__28766__$1,new cljs.core.Keyword(null,"unsubscribe","unsubscribe",632650147));
return unsubscribe.call(null);
});
firemore.firestore.noop_unwritten_reads_BANG_ = (function firemore$firestore$noop_unwritten_reads_BANG_(transactions,trx){
var seq__28768 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"references","references",882562509).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,transactions,firemore.firestore.index_of_transaction.call(null,transactions,trx))));
var chunk__28769 = null;
var count__28770 = (0);
var i__28771 = (0);
while(true){
if((i__28771 < count__28770)){
var unwritten_reference = cljs.core._nth.call(null,chunk__28769,i__28771);
firemore.firestore.update_db_BANG_.call(null,unwritten_reference,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),trx], null));


var G__28772 = seq__28768;
var G__28773 = chunk__28769;
var G__28774 = count__28770;
var G__28775 = (i__28771 + (1));
seq__28768 = G__28772;
chunk__28769 = G__28773;
count__28770 = G__28774;
i__28771 = G__28775;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28768);
if(temp__5720__auto__){
var seq__28768__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28768__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28768__$1);
var G__28776 = cljs.core.chunk_rest.call(null,seq__28768__$1);
var G__28777 = c__4556__auto__;
var G__28778 = cljs.core.count.call(null,c__4556__auto__);
var G__28779 = (0);
seq__28768 = G__28776;
chunk__28769 = G__28777;
count__28770 = G__28778;
i__28771 = G__28779;
continue;
} else {
var unwritten_reference = cljs.core.first.call(null,seq__28768__$1);
firemore.firestore.update_db_BANG_.call(null,unwritten_reference,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),trx], null));


var G__28780 = cljs.core.next.call(null,seq__28768__$1);
var G__28781 = null;
var G__28782 = (0);
var G__28783 = (0);
seq__28768 = G__28780;
chunk__28769 = G__28781;
count__28770 = G__28782;
i__28771 = G__28783;
continue;
}
} else {
return null;
}
}
break;
}
});
firemore.firestore.transact_db_BANG_ = (function firemore$firestore$transact_db_BANG_(var_args){
var G__28788 = arguments.length;
switch (G__28788) {
case 1:
return firemore.firestore.transact_db_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firemore.firestore.transact_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.transact_db_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (update_fx){
return firemore.firestore.transact_db_BANG_.call(null,update_fx,null);
}));

(firemore.firestore.transact_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (update_fx,options){
var map__28789 = firemore.firestore.merge_default_options.call(null,options);
var map__28789__$1 = (((((!((map__28789 == null))))?(((((map__28789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28789):map__28789);
var fb = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"fb","fb",-1331669322));
var c = cljs.core.async.chan.call(null);
var new_update_fx = (function (trx){
return firemore.firestore.chan__GT_promise.call(null,update_fx.call(null,trx)).then((function (p1__28784_SHARP_){
firemore.firestore.noop_unwritten_reads_BANG_.call(null,cljs.core.deref.call(null,firemore.firestore.active_transactions),trx);

return p1__28784_SHARP_;
})).finally((function (){
return cljs.core.swap_BANG_.call(null,firemore.firestore.active_transactions,firemore.firestore.remove_transaction_from_transactions,trx);
}));
});
firemore.firebase.db.call(null,fb).runTransaction(new_update_fx).then((function (p1__28785_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__28785_SHARP_);
})).catch((function (p1__28786_SHARP_){
return console.error(p1__28786_SHARP_);
})).finally((function (){
return cljs.core.async.close_BANG_.call(null,c);
}));

return c;
}));

(firemore.firestore.transact_db_BANG_.cljs$lang$maxFixedArity = 2);

firemore.firestore.create_batch = (function firemore$firestore$create_batch(var_args){
var G__28793 = arguments.length;
switch (G__28793) {
case 0:
return firemore.firestore.create_batch.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firemore.firestore.create_batch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.firestore.create_batch.cljs$core$IFn$_invoke$arity$0 = (function (){
return firemore.firestore.create_batch.call(null,cljs.core.deref.call(null,firemore.firebase.FB));
}));

(firemore.firestore.create_batch.cljs$core$IFn$_invoke$arity$1 = (function (fb){
return firemore.firebase.db.call(null,fb).batch();
}));

(firemore.firestore.create_batch.cljs$lang$maxFixedArity = 1);

firemore.firestore.commit_batch_BANG_ = (function firemore$firestore$commit_batch_BANG_(btx){
return firemore.firestore.promise__GT_chan.call(null,btx.commit());
});

//# sourceMappingURL=firestore.js.map
