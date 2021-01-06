// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('firemore.hydrator');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('clojure.set');
goog.require('firemore.config');
goog.require('firemore.firestore');
cljs.core.enable_console_print_BANG_.call(null);
firemore.hydrator.ATM__GT_PATH__GT_LISTEN_MAP = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
firemore.hydrator.nil_when_empty_QMARK_ = (function firemore$hydrator$nil_when_empty_QMARK_(coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
return coll;
}
});
firemore.hydrator.dissoc_in_internal = (function firemore$hydrator$dissoc_in_internal(m,ks){
var vec__28881 = ks;
var seq__28882 = cljs.core.seq.call(null,vec__28881);
var first__28883 = cljs.core.first.call(null,seq__28882);
var seq__28882__$1 = cljs.core.next.call(null,seq__28882);
var k = first__28883;
var ks_rest = seq__28882__$1;
return firemore.hydrator.nil_when_empty_QMARK_.call(null,(function (){var G__28884 = cljs.core.count.call(null,ks);
switch (G__28884) {
case (0):
throw cljs.core.ex_info.call(null,"Cannot dissoc from empty ks",m);

break;
case (1):
return cljs.core.dissoc.call(null,m,k);

break;
default:
var temp__5718__auto__ = firemore.hydrator.dissoc_in_internal.call(null,cljs.core.get.call(null,m,k),ks_rest);
if(cljs.core.truth_(temp__5718__auto__)){
var new_v = temp__5718__auto__;
return cljs.core.assoc.call(null,m,k,new_v);
} else {
return cljs.core.dissoc.call(null,m,k);
}

}
})());
});
firemore.hydrator.dissoc_in = (function firemore$hydrator$dissoc_in(m,ks){
var or__4126__auto__ = firemore.hydrator.dissoc_in_internal.call(null,m,ks);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
firemore.hydrator.subscribe_path = (function firemore$hydrator$subscribe_path(atm__GT_path__GT_listen_map,atm,reference,path){
if(((cljs.core.contains_QMARK_.call(null,atm__GT_path__GT_listen_map,atm)) && (cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,atm__GT_path__GT_listen_map,atm),path)))){
throw cljs.core.ex_info.call(null,"atm->path is already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"atm","atm",690883934),atm,new cljs.core.Keyword(null,"path","path",-188191168),path], null));
} else {
}

var listen_map = firemore.firestore.listen.call(null,reference);
return cljs.core.assoc_in.call(null,atm__GT_path__GT_listen_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path], null),listen_map);
});
firemore.hydrator.unsubscribe_path = (function firemore$hydrator$unsubscribe_path(atm__GT_path__GT_listen_map,atm,path){
cljs.core.apply.call(null,new cljs.core.Keyword(null,"unsubscribe","unsubscribe",632650147).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,atm__GT_path__GT_listen_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path], null))),cljs.core.PersistentVector.EMPTY);

return firemore.hydrator.dissoc_in.call(null,atm__GT_path__GT_listen_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path], null));
});
firemore.hydrator.watch_BANG_ = (function firemore$hydrator$watch_BANG_(var_args){
var G__28887 = arguments.length;
switch (G__28887) {
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
return firemore.hydrator.watch_BANG_.call(null,atm,reference,reference);
}));

(firemore.hydrator.watch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atm,reference,path){
var map__28888 = cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,firemore.hydrator.ATM__GT_PATH__GT_LISTEN_MAP,firemore.hydrator.subscribe_path,atm,reference,path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path], null));
var map__28888__$1 = (((((!((map__28888 == null))))?(((((map__28888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28888):map__28888);
var c = cljs.core.get.call(null,map__28888__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
cljs.core.swap_BANG_.call(null,atm,cljs.core.assoc_in,path,firemore.config.LOADING);

var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_28902){
var state_val_28903 = (state_28902[(1)]);
if((state_val_28903 === (1))){
var state_28902__$1 = state_28902;
var statearr_28904_28917 = state_28902__$1;
(statearr_28904_28917[(2)] = null);

(statearr_28904_28917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (2))){
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28902__$1,(4),c);
} else {
if((state_val_28903 === (3))){
var inst_28900 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28902__$1,inst_28900);
} else {
if((state_val_28903 === (4))){
var inst_28892 = (state_28902[(7)]);
var inst_28892__$1 = (state_28902[(2)]);
var state_28902__$1 = (function (){var statearr_28905 = state_28902;
(statearr_28905[(7)] = inst_28892__$1);

return statearr_28905;
})();
if(cljs.core.truth_(inst_28892__$1)){
var statearr_28906_28918 = state_28902__$1;
(statearr_28906_28918[(1)] = (5));

} else {
var statearr_28907_28919 = state_28902__$1;
(statearr_28907_28919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (5))){
var inst_28892 = (state_28902[(7)]);
var inst_28894 = cljs.core.swap_BANG_.call(null,atm,cljs.core.assoc_in,path,inst_28892);
var state_28902__$1 = (function (){var statearr_28908 = state_28902;
(statearr_28908[(8)] = inst_28894);

return statearr_28908;
})();
var statearr_28909_28920 = state_28902__$1;
(statearr_28909_28920[(2)] = null);

(statearr_28909_28920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (6))){
var state_28902__$1 = state_28902;
var statearr_28910_28921 = state_28902__$1;
(statearr_28910_28921[(2)] = null);

(statearr_28910_28921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (7))){
var inst_28898 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28911_28922 = state_28902__$1;
(statearr_28911_28922[(2)] = inst_28898);

(statearr_28911_28922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var firemore$hydrator$state_machine__24475__auto__ = null;
var firemore$hydrator$state_machine__24475__auto____0 = (function (){
var statearr_28912 = [null,null,null,null,null,null,null,null,null];
(statearr_28912[(0)] = firemore$hydrator$state_machine__24475__auto__);

(statearr_28912[(1)] = (1));

return statearr_28912;
});
var firemore$hydrator$state_machine__24475__auto____1 = (function (state_28902){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_28902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e28913){if((e28913 instanceof Object)){
var ex__24478__auto__ = e28913;
var statearr_28914_28923 = state_28902;
(statearr_28914_28923[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28924 = state_28902;
state_28902 = G__28924;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
firemore$hydrator$state_machine__24475__auto__ = function(state_28902){
switch(arguments.length){
case 0:
return firemore$hydrator$state_machine__24475__auto____0.call(this);
case 1:
return firemore$hydrator$state_machine__24475__auto____1.call(this,state_28902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
firemore$hydrator$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = firemore$hydrator$state_machine__24475__auto____0;
firemore$hydrator$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = firemore$hydrator$state_machine__24475__auto____1;
return firemore$hydrator$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_28915 = f__24642__auto__.call(null);
(statearr_28915[(6)] = c__24641__auto__);

return statearr_28915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
}));

(firemore.hydrator.watch_BANG_.cljs$lang$maxFixedArity = 3);

firemore.hydrator.unwatch_BANG_ = (function firemore$hydrator$unwatch_BANG_(atm,path){
cljs.core.swap_BANG_.call(null,firemore.hydrator.ATM__GT_PATH__GT_LISTEN_MAP,firemore.hydrator.unsubscribe_path,atm,path);

return cljs.core.swap_BANG_.call(null,atm,firemore.hydrator.dissoc_in,path);
});

//# sourceMappingURL=hydrator.js.map
