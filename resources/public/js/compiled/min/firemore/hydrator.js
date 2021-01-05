// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('firemore.hydrator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('clojure.set');
goog.require('firemore.config');
goog.require('firemore.firestore');
cljs.core.enable_console_print_BANG_();
firemore.hydrator.ATM__GT_PATH__GT_LISTEN_MAP = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
firemore.hydrator.nil_when_empty_QMARK_ = (function firemore$hydrator$nil_when_empty_QMARK_(coll){
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
return coll;
}
});
firemore.hydrator.dissoc_in_internal = (function firemore$hydrator$dissoc_in_internal(m,ks){
var vec__30203 = ks;
var seq__30204 = cljs.core.seq(vec__30203);
var first__30205 = cljs.core.first(seq__30204);
var seq__30204__$1 = cljs.core.next(seq__30204);
var k = first__30205;
var ks_rest = seq__30204__$1;
return firemore.hydrator.nil_when_empty_QMARK_((function (){var G__30206 = cljs.core.count(ks);
switch (G__30206) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot dissoc from empty ks",m);

break;
case (1):
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);

break;
default:
var temp__5718__auto__ = (function (){var G__30207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__30208 = ks_rest;
return (firemore.hydrator.dissoc_in_internal.cljs$core$IFn$_invoke$arity$2 ? firemore.hydrator.dissoc_in_internal.cljs$core$IFn$_invoke$arity$2(G__30207,G__30208) : firemore.hydrator.dissoc_in_internal.call(null,G__30207,G__30208));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var new_v = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new_v);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}

}
})());
});
firemore.hydrator.dissoc_in = (function firemore$hydrator$dissoc_in(m,ks){
var or__4126__auto__ = firemore.hydrator.dissoc_in_internal(m,ks);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
firemore.hydrator.subscribe_path = (function firemore$hydrator$subscribe_path(atm__GT_path__GT_listen_map,atm,reference,path){
if(((cljs.core.contains_QMARK_(atm__GT_path__GT_listen_map,atm)) && (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(atm__GT_path__GT_listen_map,atm),path)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("atm->path is already registered",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atm,atm,cljs.core.cst$kw$path,path], null));
} else {
}

var listen_map = firemore.firestore.listen.cljs$core$IFn$_invoke$arity$1(reference);
return cljs.core.assoc_in(atm__GT_path__GT_listen_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path], null),listen_map);
});
firemore.hydrator.unsubscribe_path = (function firemore$hydrator$unsubscribe_path(atm__GT_path__GT_listen_map,atm,path){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unsubscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(atm__GT_path__GT_listen_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path], null))),cljs.core.PersistentVector.EMPTY);

return firemore.hydrator.dissoc_in(atm__GT_path__GT_listen_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path], null));
});
firemore.hydrator.watch_BANG_ = (function firemore$hydrator$watch_BANG_(var_args){
var G__30211 = arguments.length;
switch (G__30211) {
case 2:
return firemore.hydrator.watch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firemore.hydrator.watch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.hydrator.watch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atm,reference){
return firemore.hydrator.watch_BANG_.cljs$core$IFn$_invoke$arity$3(atm,reference,reference);
}));

(firemore.hydrator.watch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atm,reference,path){
var map__30212 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(firemore.hydrator.ATM__GT_PATH__GT_LISTEN_MAP,firemore.hydrator.subscribe_path,atm,reference,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path], null));
var map__30212__$1 = (((((!((map__30212 == null))))?(((((map__30212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30212):map__30212);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30212__$1,cljs.core.cst$kw$c);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(atm,cljs.core.assoc_in,path,firemore.config.LOADING);

var c__28061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_30226){
var state_val_30227 = (state_30226[(1)]);
if((state_val_30227 === (1))){
var state_30226__$1 = state_30226;
var statearr_30228_30241 = state_30226__$1;
(statearr_30228_30241[(2)] = null);

(statearr_30228_30241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30227 === (2))){
var state_30226__$1 = state_30226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30226__$1,(4),c);
} else {
if((state_val_30227 === (3))){
var inst_30224 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30226__$1,inst_30224);
} else {
if((state_val_30227 === (4))){
var inst_30216 = (state_30226[(7)]);
var inst_30216__$1 = (state_30226[(2)]);
var state_30226__$1 = (function (){var statearr_30229 = state_30226;
(statearr_30229[(7)] = inst_30216__$1);

return statearr_30229;
})();
if(cljs.core.truth_(inst_30216__$1)){
var statearr_30230_30242 = state_30226__$1;
(statearr_30230_30242[(1)] = (5));

} else {
var statearr_30231_30243 = state_30226__$1;
(statearr_30231_30243[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30227 === (5))){
var inst_30216 = (state_30226[(7)]);
var inst_30218 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(atm,cljs.core.assoc_in,path,inst_30216);
var state_30226__$1 = (function (){var statearr_30232 = state_30226;
(statearr_30232[(8)] = inst_30218);

return statearr_30232;
})();
var statearr_30233_30244 = state_30226__$1;
(statearr_30233_30244[(2)] = null);

(statearr_30233_30244[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30227 === (6))){
var state_30226__$1 = state_30226;
var statearr_30234_30245 = state_30226__$1;
(statearr_30234_30245[(2)] = null);

(statearr_30234_30245[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30227 === (7))){
var inst_30222 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
var statearr_30235_30246 = state_30226__$1;
(statearr_30235_30246[(2)] = inst_30222);

(statearr_30235_30246[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var firemore$hydrator$state_machine__27990__auto__ = null;
var firemore$hydrator$state_machine__27990__auto____0 = (function (){
var statearr_30236 = [null,null,null,null,null,null,null,null,null];
(statearr_30236[(0)] = firemore$hydrator$state_machine__27990__auto__);

(statearr_30236[(1)] = (1));

return statearr_30236;
});
var firemore$hydrator$state_machine__27990__auto____1 = (function (state_30226){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_30226);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e30237){if((e30237 instanceof Object)){
var ex__27993__auto__ = e30237;
var statearr_30238_30247 = state_30226;
(statearr_30238_30247[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30226);

return cljs.core.cst$kw$recur;
} else {
throw e30237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__30248 = state_30226;
state_30226 = G__30248;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
firemore$hydrator$state_machine__27990__auto__ = function(state_30226){
switch(arguments.length){
case 0:
return firemore$hydrator$state_machine__27990__auto____0.call(this);
case 1:
return firemore$hydrator$state_machine__27990__auto____1.call(this,state_30226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
firemore$hydrator$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = firemore$hydrator$state_machine__27990__auto____0;
firemore$hydrator$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = firemore$hydrator$state_machine__27990__auto____1;
return firemore$hydrator$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_30239 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_30239[(6)] = c__28061__auto__);

return statearr_30239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

return c__28061__auto__;
}));

(firemore.hydrator.watch_BANG_.cljs$lang$maxFixedArity = 3);

firemore.hydrator.unwatch_BANG_ = (function firemore$hydrator$unwatch_BANG_(atm,path){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(firemore.hydrator.ATM__GT_PATH__GT_LISTEN_MAP,firemore.hydrator.unsubscribe_path,atm,path);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(atm,firemore.hydrator.dissoc_in,path);
});
