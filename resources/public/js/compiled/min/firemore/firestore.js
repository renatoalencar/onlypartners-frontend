// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('firemore.firestore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('firemore.config');
goog.require('firemore.firebase');
firemore.firestore.server_timestamp = firebase.firestore.FieldValue.serverTimestamp();
firemore.firestore.active_transactions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
firemore.firestore.index_of_transaction = (function firemore$firestore$index_of_transaction(transactions,trx){
return cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30032_SHARP_){
return (cljs.core.cst$kw$trx.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30032_SHARP_)) === trx);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,transactions)));
});
firemore.firestore.add_reference_to_transaction = (function firemore$firestore$add_reference_to_transaction(transactions,trx,reference){
var i = (function (){var or__4126__auto__ = firemore.firestore.index_of_transaction(transactions,trx);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.count(transactions);
}
})();
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(transactions,i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$trx,trx,cljs.core.cst$kw$references,cljs.core.PersistentHashSet.EMPTY], null));
var m3 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(m2,cljs.core.cst$kw$references,cljs.core.conj,reference);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transactions,i,m3);
});
firemore.firestore.remove_reference_from_transaction = (function firemore$firestore$remove_reference_from_transaction(transactions,trx,reference){
var temp__5718__auto__ = firemore.firestore.index_of_transaction(transactions,trx);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(transactions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.cst$kw$references], null),cljs.core.disj,reference);
} else {
return transactions;
}
});
firemore.firestore.remove_transaction_from_transactions = (function firemore$firestore$remove_transaction_from_transactions(transactions,trx){
var temp__5718__auto__ = firemore.firestore.index_of_transaction(transactions,trx);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(transactions,(0),i);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(transactions,(i + (1)));
}),null,null))));
} else {
return transactions;
}
});
/**
 * Convert a firemore reference to a firebase reference
 */
firemore.firestore.ref = (function firemore$firestore$ref(var_args){
var G__30034 = arguments.length;
switch (G__30034) {
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
return firemore.firestore.ref.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(firemore.firebase.FB),path);
}));

(firemore.firestore.ref.cljs$core$IFn$_invoke$arity$2 = (function (fb,path){
var G__30038 = path;
var vec__30039 = G__30038;
var seq__30040 = cljs.core.seq(vec__30039);
var first__30041 = cljs.core.first(seq__30040);
var seq__30040__$1 = cljs.core.next(seq__30040);
var p = first__30041;
var ps = seq__30040__$1;
var collection_QMARK_ = true;
var obj = firemore.firebase.db(fb);
var G__30038__$1 = G__30038;
var collection_QMARK___$1 = collection_QMARK_;
var obj__$1 = obj;
while(true){
var vec__30042 = G__30038__$1;
var seq__30043 = cljs.core.seq(vec__30042);
var first__30044 = cljs.core.first(seq__30043);
var seq__30043__$1 = cljs.core.next(seq__30043);
var p__$1 = first__30044;
var ps__$1 = seq__30043__$1;
var collection_QMARK___$2 = collection_QMARK___$1;
var obj__$2 = obj__$1;
var new_obj = ((collection_QMARK___$2)?obj__$2.collection(cljs.core.name(p__$1)):obj__$2.doc(p__$1));
if(cljs.core.empty_QMARK_(ps__$1)){
return new_obj;
} else {
var G__30046 = ps__$1;
var G__30047 = (!(collection_QMARK___$2));
var G__30048 = new_obj;
G__30038__$1 = G__30046;
collection_QMARK___$1 = G__30047;
obj__$1 = G__30048;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),":")){
var $ = s;
var $__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2($,(1));
var $__$2 = clojure.string.split.cljs$core$IFn$_invoke$arity$2($__$1,"/");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,$__$2);
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
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keyword_DASH_fn,firemore.firestore.keywordize__GT_str], 0));
});
firemore.firestore.clojurify = (function firemore$firestore$clojurify(json_document){
return cljs.core.reduce_kv((function (p1__30049_SHARP_,p2__30050_SHARP_,p3__30051_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30049_SHARP_,firemore.firestore.str__GT_keywordize(p2__30050_SHARP_),p3__30051_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(json_document));
});
/**
 * Replace `config/TIMESTAMP (keyword) with firebase Server Timestamp
 */
firemore.firestore.replace_timestamp = (function firemore$firestore$replace_timestamp(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,firemore.config.TIMESTAMP)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,firemore.firestore.server_timestamp);
} else {
return m__$1;
}
}),m,m);
});
firemore.firestore.build_path = (function firemore$firestore$build_path(fb,path){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ref,firemore.firestore.ref.cljs$core$IFn$_invoke$arity$2(fb,path),cljs.core.cst$kw$path,path], null),((cljs.core.even_QMARK_(cljs.core.count(path)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.peek(path)], null):null)], 0));
});
firemore.firestore.expand_where = (function firemore$firestore$expand_where(where){
if(cljs.core.truth_(where)){
var vec__30052 = where;
var expression_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30052,(0),null);
if(cljs.core.vector_QMARK_(expression_1)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where], null)], null);
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
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$order,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(firemore.firestore.convert_if_string,order)], null);
} else {
return null;
}
});
firemore.firestore.expand_query = (function firemore$firestore$expand_query(query){
var map__30055 = query;
var map__30055__$1 = (((((!((map__30055 == null))))?(((((map__30055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30055):map__30055);
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,cljs.core.cst$kw$where);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,cljs.core.cst$kw$order);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,cljs.core.cst$kw$limit);
var start_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,cljs.core.cst$kw$start_DASH_at);
var start_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,cljs.core.cst$kw$start_DASH_after);
var end_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,cljs.core.cst$kw$end_DASH_at);
var end_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,cljs.core.cst$kw$end_DASH_before);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query,firemore.firestore.expand_where(where),firemore.firestore.expand_order(order)], 0));
});
firemore.firestore.build_query = (function firemore$firestore$build_query(fb,path,query){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([firemore.firestore.build_path(fb,path),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,firemore.firestore.expand_query(query)], null)], 0));
});
firemore.firestore.shared_db = (function firemore$firestore$shared_db(var_args){
var G__30058 = arguments.length;
switch (G__30058) {
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
if(cljs.core.vector_QMARK_(reference)){
} else {
throw (new Error("Assert failed: (vector? reference)"));
}

if(cljs.core.map_QMARK_(cljs.core.peek(reference))){
return firemore.firestore.build_query(fb,cljs.core.pop(reference),cljs.core.peek(reference));
} else {
if(cljs.core.odd_QMARK_(cljs.core.count(reference))){
return firemore.firestore.build_query(fb,reference,cljs.core.PersistentArrayMap.EMPTY);
} else {
return firemore.firestore.build_path(fb,reference);

}
}
}));

(firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$3 = (function (fb,reference,value){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$2(fb,reference),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$js_DASH_value,firemore.firestore.jsonify(firemore.firestore.replace_timestamp(value))], null)], 0));
}));

(firemore.firestore.shared_db.cljs$lang$maxFixedArity = 3);

firemore.firestore.promise__GT_chan = (function firemore$firestore$promise__GT_chan(var_args){
var G__30061 = arguments.length;
switch (G__30061) {
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
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$2(promise,cljs.core.identity);
}));

(firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$2 = (function (promise,on_success){
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$3(promise,on_success,(function (error){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$promise_DASH__GT_chan_DASH_failure,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null));
}));
}));

(firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$3 = (function (promise,on_success,on_failure){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
promise.then((function (value){
var G__30062 = value;
var G__30062__$1 = (((G__30062 == null))?null:(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__30062) : on_success.call(null,G__30062)));
if((G__30062__$1 == null)){
return null;
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,G__30062__$1);
}
})).catch((function (error){
var temp__5720__auto__ = (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(error) : on_failure.call(null,error));
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
console.error(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,e);
} else {
return null;
}
})).finally((function (_){
return cljs.core.async.close_BANG_(c);
}));

return c;
}));

(firemore.firestore.promise__GT_chan.cljs$lang$maxFixedArity = 3);

firemore.firestore.chan__GT_promise = (function firemore$firestore$chan__GT_promise(var_args){
var G__30065 = arguments.length;
switch (G__30065) {
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
return firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$2(c,(function (m){
return cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(m) === false;
}));
}));

(firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$2 = (function (c,reject_QMARK_){
return firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$3(c,reject_QMARK_,(function (c__$1,v){
return cljs.core.async.close_BANG_(c__$1);
}));
}));

(firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$3 = (function (c,reject_QMARK_,finally_fx){
return (new Promise((function (resolve,reject){
var c__28061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_30077){
var state_val_30078 = (state_30077[(1)]);
if((state_val_30078 === (1))){
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30077__$1,(2),c);
} else {
if((state_val_30078 === (2))){
var inst_30067 = (state_30077[(7)]);
var inst_30067__$1 = (state_30077[(2)]);
var inst_30068 = (reject_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reject_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_30067__$1) : reject_QMARK_.call(null,inst_30067__$1));
var state_30077__$1 = (function (){var statearr_30079 = state_30077;
(statearr_30079[(7)] = inst_30067__$1);

return statearr_30079;
})();
if(cljs.core.truth_(inst_30068)){
var statearr_30080_30090 = state_30077__$1;
(statearr_30080_30090[(1)] = (3));

} else {
var statearr_30081_30091 = state_30077__$1;
(statearr_30081_30091[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (3))){
var inst_30067 = (state_30077[(7)]);
var inst_30070 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_30067) : reject.call(null,inst_30067));
var state_30077__$1 = state_30077;
var statearr_30082_30092 = state_30077__$1;
(statearr_30082_30092[(2)] = inst_30070);

(statearr_30082_30092[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (4))){
var inst_30067 = (state_30077[(7)]);
var inst_30072 = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(inst_30067) : resolve.call(null,inst_30067));
var state_30077__$1 = state_30077;
var statearr_30083_30093 = state_30077__$1;
(statearr_30083_30093[(2)] = inst_30072);

(statearr_30083_30093[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (5))){
var inst_30067 = (state_30077[(7)]);
var inst_30074 = (state_30077[(2)]);
var inst_30075 = (finally_fx.cljs$core$IFn$_invoke$arity$2 ? finally_fx.cljs$core$IFn$_invoke$arity$2(c,inst_30067) : finally_fx.call(null,c,inst_30067));
var state_30077__$1 = (function (){var statearr_30084 = state_30077;
(statearr_30084[(8)] = inst_30074);

return statearr_30084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30077__$1,inst_30075);
} else {
return null;
}
}
}
}
}
});
return (function() {
var firemore$firestore$state_machine__27990__auto__ = null;
var firemore$firestore$state_machine__27990__auto____0 = (function (){
var statearr_30085 = [null,null,null,null,null,null,null,null,null];
(statearr_30085[(0)] = firemore$firestore$state_machine__27990__auto__);

(statearr_30085[(1)] = (1));

return statearr_30085;
});
var firemore$firestore$state_machine__27990__auto____1 = (function (state_30077){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_30077);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e30086){if((e30086 instanceof Object)){
var ex__27993__auto__ = e30086;
var statearr_30087_30094 = state_30077;
(statearr_30087_30094[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30077);

return cljs.core.cst$kw$recur;
} else {
throw e30086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__30095 = state_30077;
state_30077 = G__30095;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
firemore$firestore$state_machine__27990__auto__ = function(state_30077){
switch(arguments.length){
case 0:
return firemore$firestore$state_machine__27990__auto____0.call(this);
case 1:
return firemore$firestore$state_machine__27990__auto____1.call(this,state_30077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
firemore$firestore$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = firemore$firestore$state_machine__27990__auto____0;
firemore$firestore$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = firemore$firestore$state_machine__27990__auto____1;
return firemore$firestore$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_30088 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_30088[(6)] = c__28061__auto__);

return statearr_30088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

return c__28061__auto__;
})));
}));

(firemore.firestore.chan__GT_promise.cljs$lang$maxFixedArity = 3);

firemore.firestore.default_options = (function firemore$firestore$default_options(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fb,cljs.core.deref(firemore.firebase.FB)], null);
});
firemore.firestore.merge_default_options = (function firemore$firestore$merge_default_options(options){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([firemore.firestore.default_options(),options], 0));
});
firemore.firestore.set_db_BANG_ = (function firemore$firestore$set_db_BANG_(var_args){
var G__30097 = arguments.length;
switch (G__30097) {
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
return firemore.firestore.set_db_BANG_.cljs$core$IFn$_invoke$arity$3(reference,value,null);
}));

(firemore.firestore.set_db_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reference,value,options){
var map__30098 = firemore.firestore.merge_default_options(options);
var map__30098__$1 = (((((!((map__30098 == null))))?(((((map__30098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30098):map__30098);
var fb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$fb);
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$transaction);
var batch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$batch);
var map__30099 = firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$3(fb,reference,value);
var map__30099__$1 = (((((!((map__30099 == null))))?(((((map__30099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30099):map__30099);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30099__$1,cljs.core.cst$kw$ref);
var js_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30099__$1,cljs.core.cst$kw$js_DASH_value);
var override = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return batch;
}
})();
if(cljs.core.truth_(override)){
if(cljs.core.truth_(transaction)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(firemore.firestore.active_transactions,firemore.firestore.remove_reference_from_transaction,transaction,reference);
} else {
}

return override.set(ref,js_value);
} else {
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$1(ref.set(js_value));
}
}));

(firemore.firestore.set_db_BANG_.cljs$lang$maxFixedArity = 3);

firemore.firestore.add_db_BANG_ = (function firemore$firestore$add_db_BANG_(var_args){
var G__30104 = arguments.length;
switch (G__30104) {
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
return firemore.firestore.add_db_BANG_.cljs$core$IFn$_invoke$arity$4(reference,collection,value,null);
}));

(firemore.firestore.add_db_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reference,collection,value,options){
var map__30105 = firemore.firestore.merge_default_options(options);
var map__30105__$1 = (((((!((map__30105 == null))))?(((((map__30105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30105):map__30105);
var fb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,cljs.core.cst$kw$fb);
var map__30106 = firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$3(fb,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(reference),collection),value);
var map__30106__$1 = (((((!((map__30106 == null))))?(((((map__30106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30106):map__30106);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30106__$1,cljs.core.cst$kw$ref);
var js_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30106__$1,cljs.core.cst$kw$js_DASH_value);
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$2(ref.add(js_value),(function (docRef){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,docRef.id], null);
}));
}));

(firemore.firestore.add_db_BANG_.cljs$lang$maxFixedArity = 4);

firemore.firestore.update_db_BANG_ = (function firemore$firestore$update_db_BANG_(var_args){
var G__30111 = arguments.length;
switch (G__30111) {
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
return firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$3(reference,value,null);
}));

(firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reference,value,options){
var map__30112 = firemore.firestore.merge_default_options(options);
var map__30112__$1 = (((((!((map__30112 == null))))?(((((map__30112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30112):map__30112);
var fb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30112__$1,cljs.core.cst$kw$fb);
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30112__$1,cljs.core.cst$kw$transaction);
var batch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30112__$1,cljs.core.cst$kw$batch);
var map__30113 = firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$3(fb,reference,value);
var map__30113__$1 = (((((!((map__30113 == null))))?(((((map__30113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30113):map__30113);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30113__$1,cljs.core.cst$kw$ref);
var js_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30113__$1,cljs.core.cst$kw$js_DASH_value);
var override = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return batch;
}
})();
if(cljs.core.truth_(override)){
if(cljs.core.truth_(transaction)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(firemore.firestore.active_transactions,firemore.firestore.remove_reference_from_transaction,transaction,reference);
} else {
}

return override.update(ref,js_value);
} else {
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$1(ref.update(js_value));
}
}));

(firemore.firestore.update_db_BANG_.cljs$lang$maxFixedArity = 3);

firemore.firestore.delete_db_BANG_ = (function firemore$firestore$delete_db_BANG_(var_args){
var G__30118 = arguments.length;
switch (G__30118) {
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
return firemore.firestore.delete_db_BANG_.cljs$core$IFn$_invoke$arity$2(reference,null);
}));

(firemore.firestore.delete_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reference,options){
var map__30119 = firemore.firestore.merge_default_options(options);
var map__30119__$1 = (((((!((map__30119 == null))))?(((((map__30119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30119):map__30119);
var fb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,cljs.core.cst$kw$fb);
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,cljs.core.cst$kw$transaction);
var batch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,cljs.core.cst$kw$batch);
var map__30120 = firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$3(fb,reference,null);
var map__30120__$1 = (((((!((map__30120 == null))))?(((((map__30120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30120):map__30120);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30120__$1,cljs.core.cst$kw$ref);
var override = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return batch;
}
})();
if(cljs.core.truth_(override)){
if(cljs.core.truth_(transaction)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(firemore.firestore.active_transactions,firemore.firestore.remove_reference_from_transaction,transaction,reference);
} else {
}

return override.delete(ref);
} else {
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$1(ref.delete());
}
}));

(firemore.firestore.delete_db_BANG_.cljs$lang$maxFixedArity = 2);

firemore.firestore.add_where_to_ref = (function firemore$firestore$add_where_to_ref(ref,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ref__$1,p__30124){
var vec__30125 = p__30124;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30125,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30125,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30125,(2),null);
return ref__$1.where(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),op,((cljs.core.coll_QMARK_(v))?cljs.core.clj__GT_js(v):v));
}),ref,cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(query));
});
firemore.firestore.add_order_to_ref = (function firemore$firestore$add_order_to_ref(ref,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ref__$1,p__30128){
var vec__30129 = p__30128;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30129,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30129,(1),null);
return ref__$1.orderBy(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),direction);
}),ref,cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(query));
});
firemore.firestore.add_limit_to_ref = (function firemore$firestore$add_limit_to_ref(ref,query){
var temp__5718__auto__ = cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5718__auto__)){
var limit = temp__5718__auto__;
return ref.limit(limit);
} else {
return ref;
}
});
firemore.firestore.filter_by_query = (function firemore$firestore$filter_by_query(ref,query){
return firemore.firestore.add_limit_to_ref(firemore.firestore.add_order_to_ref(firemore.firestore.add_where_to_ref(ref,query),query),query);
});
firemore.firestore.doc_upgrader = (function firemore$firestore$doc_upgrader(reference,doc){
var temp__5718__auto__ = doc.exists;
if(cljs.core.truth_(temp__5718__auto__)){
var exists_QMARK_ = temp__5718__auto__;
return cljs.core.with_meta(firemore.firestore.clojurify(doc.data()),(function (){var id = doc.id;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$reference,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(reference),id),cljs.core.cst$kw$pending_QMARK_,doc.metadata.hasPendingWrites], null);
})());
} else {
return firemore.config.NO_DOCUMENT;
}
});
firemore.firestore.get_db = (function firemore$firestore$get_db(var_args){
var G__30134 = arguments.length;
switch (G__30134) {
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
return firemore.firestore.get_db.cljs$core$IFn$_invoke$arity$2(reference,null);
}));

(firemore.firestore.get_db.cljs$core$IFn$_invoke$arity$2 = (function (reference,options){
var map__30135 = firemore.firestore.merge_default_options(options);
var map__30135__$1 = (((((!((map__30135 == null))))?(((((map__30135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30135):map__30135);
var fb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30135__$1,cljs.core.cst$kw$fb);
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30135__$1,cljs.core.cst$kw$transaction);
var map__30136 = firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$2(fb,reference);
var map__30136__$1 = (((((!((map__30136 == null))))?(((((map__30136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30136):map__30136);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30136__$1,cljs.core.cst$kw$ref);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30136__$1,cljs.core.cst$kw$query);
if(cljs.core.truth_(query)){
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$2(firemore.firestore.filter_by_query(ref,query).get(),(function (snapshot){
var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reference,reference], null)));
snapshot.forEach((function (p1__30132_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,firemore.firestore.doc_upgrader(reference,p1__30132_SHARP_));
}));

return cljs.core.deref(a);
}));
} else {
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(transaction)?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(firemore.firestore.active_transactions,firemore.firestore.add_reference_to_transaction,transaction,reference);

return transaction.get(ref);
})()
:ref.get()),(function (doc){
return firemore.firestore.doc_upgrader(reference,doc);
}));
}
}));

(firemore.firestore.get_db.cljs$lang$maxFixedArity = 2);

firemore.firestore.snapshot_handler = (function firemore$firestore$snapshot_handler(collection_QMARK_,c,reference,snapshot){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,(cljs.core.truth_(collection_QMARK_)?(function (){var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reference,reference], null)));
snapshot.forEach((function (p1__30140_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,firemore.firestore.doc_upgrader(reference,p1__30140_SHARP_));
}));

return cljs.core.deref(a);
})():firemore.firestore.doc_upgrader(reference,snapshot)));
});
firemore.firestore.snapshot_listen_options__GT_js = (function firemore$firestore$snapshot_listen_options__GT_js(options){
var map__30141 = options;
var map__30141__$1 = (((((!((map__30141 == null))))?(((((map__30141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30141):map__30141);
var include_metadata_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,cljs.core.cst$kw$include_DASH_metadata_DASH_changes);
return cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(include_metadata_changes)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$includeMetadataChanges,true], null):null)], 0)));
});
firemore.firestore.listen = (function firemore$firestore$listen(var_args){
var G__30144 = arguments.length;
switch (G__30144) {
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
return firemore.firestore.listen.cljs$core$IFn$_invoke$arity$2(reference,null);
}));

(firemore.firestore.listen.cljs$core$IFn$_invoke$arity$2 = (function (reference,options){
var map__30145 = firemore.firestore.merge_default_options(options);
var map__30145__$1 = (((((!((map__30145 == null))))?(((((map__30145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30145):map__30145);
var fb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30145__$1,cljs.core.cst$kw$fb);
var map__30146 = firemore.firestore.shared_db.cljs$core$IFn$_invoke$arity$3(fb,reference,null);
var map__30146__$1 = (((((!((map__30146 == null))))?(((((map__30146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30146):map__30146);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30146__$1,cljs.core.cst$kw$ref);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30146__$1,cljs.core.cst$kw$query);
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var collection_QMARK_ = (!((query == null)));
var handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(firemore.firestore.snapshot_handler,collection_QMARK_,c,reference);
var unsubscribe = ((collection_QMARK_)?firemore.firestore.filter_by_query(ref,query):ref).onSnapshot(firemore.firestore.snapshot_listen_options__GT_js(options),handler);
var unsubscribe_fx = (function (){
cljs.core.async.close_BANG_(c);

return (unsubscribe.cljs$core$IFn$_invoke$arity$0 ? unsubscribe.cljs$core$IFn$_invoke$arity$0() : unsubscribe.call(null));
});
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$c,c,cljs.core.cst$kw$unsubscribe,unsubscribe_fx], null);
}));

(firemore.firestore.listen.cljs$lang$maxFixedArity = 2);

firemore.firestore.unlisten_db = (function firemore$firestore$unlisten_db(p__30150){
var map__30151 = p__30150;
var map__30151__$1 = (((((!((map__30151 == null))))?(((((map__30151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30151):map__30151);
var unsubscribe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30151__$1,cljs.core.cst$kw$unsubscribe);
return (unsubscribe.cljs$core$IFn$_invoke$arity$0 ? unsubscribe.cljs$core$IFn$_invoke$arity$0() : unsubscribe.call(null));
});
firemore.firestore.noop_unwritten_reads_BANG_ = (function firemore$firestore$noop_unwritten_reads_BANG_(transactions,trx){
var seq__30153 = cljs.core.seq(cljs.core.cst$kw$references.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(transactions,firemore.firestore.index_of_transaction(transactions,trx))));
var chunk__30154 = null;
var count__30155 = (0);
var i__30156 = (0);
while(true){
if((i__30156 < count__30155)){
var unwritten_reference = chunk__30154.cljs$core$IIndexed$_nth$arity$2(null,i__30156);
firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$3(unwritten_reference,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transaction,trx], null));


var G__30157 = seq__30153;
var G__30158 = chunk__30154;
var G__30159 = count__30155;
var G__30160 = (i__30156 + (1));
seq__30153 = G__30157;
chunk__30154 = G__30158;
count__30155 = G__30159;
i__30156 = G__30160;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30153);
if(temp__5720__auto__){
var seq__30153__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30153__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30153__$1);
var G__30161 = cljs.core.chunk_rest(seq__30153__$1);
var G__30162 = c__4556__auto__;
var G__30163 = cljs.core.count(c__4556__auto__);
var G__30164 = (0);
seq__30153 = G__30161;
chunk__30154 = G__30162;
count__30155 = G__30163;
i__30156 = G__30164;
continue;
} else {
var unwritten_reference = cljs.core.first(seq__30153__$1);
firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$3(unwritten_reference,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transaction,trx], null));


var G__30165 = cljs.core.next(seq__30153__$1);
var G__30166 = null;
var G__30167 = (0);
var G__30168 = (0);
seq__30153 = G__30165;
chunk__30154 = G__30166;
count__30155 = G__30167;
i__30156 = G__30168;
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
var G__30173 = arguments.length;
switch (G__30173) {
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
return firemore.firestore.transact_db_BANG_.cljs$core$IFn$_invoke$arity$2(update_fx,null);
}));

(firemore.firestore.transact_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (update_fx,options){
var map__30174 = firemore.firestore.merge_default_options(options);
var map__30174__$1 = (((((!((map__30174 == null))))?(((((map__30174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30174):map__30174);
var fb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30174__$1,cljs.core.cst$kw$fb);
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var new_update_fx = (function (trx){
return firemore.firestore.chan__GT_promise.cljs$core$IFn$_invoke$arity$1((update_fx.cljs$core$IFn$_invoke$arity$1 ? update_fx.cljs$core$IFn$_invoke$arity$1(trx) : update_fx.call(null,trx))).then((function (p1__30169_SHARP_){
firemore.firestore.noop_unwritten_reads_BANG_(cljs.core.deref(firemore.firestore.active_transactions),trx);

return p1__30169_SHARP_;
})).finally((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(firemore.firestore.active_transactions,firemore.firestore.remove_transaction_from_transactions,trx);
}));
});
firemore.firebase.db(fb).runTransaction(new_update_fx).then((function (p1__30170_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__30170_SHARP_);
})).catch((function (p1__30171_SHARP_){
return console.error(p1__30171_SHARP_);
})).finally((function (){
return cljs.core.async.close_BANG_(c);
}));

return c;
}));

(firemore.firestore.transact_db_BANG_.cljs$lang$maxFixedArity = 2);

firemore.firestore.create_batch = (function firemore$firestore$create_batch(var_args){
var G__30178 = arguments.length;
switch (G__30178) {
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
return firemore.firestore.create_batch.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(firemore.firebase.FB));
}));

(firemore.firestore.create_batch.cljs$core$IFn$_invoke$arity$1 = (function (fb){
return firemore.firebase.db(fb).batch();
}));

(firemore.firestore.create_batch.cljs$lang$maxFixedArity = 1);

firemore.firestore.commit_batch_BANG_ = (function firemore$firestore$commit_batch_BANG_(btx){
return firemore.firestore.promise__GT_chan.cljs$core$IFn$_invoke$arity$1(btx.commit());
});
