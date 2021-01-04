// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
onlypartners.db.default_db = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$group,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$plans,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$selected_DASH_plan,null], null);
onlypartners.db.db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(onlypartners.db.default_db);
cljs.core.add_watch(onlypartners.db.db,cljs.core.cst$kw$debug,(function (key,atom,old_state,new_state){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,key,cljs.core.cst$kw$atom,atom,cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,new_state], null)], 0));
}));
onlypartners.db.selected_QMARK_ = (function onlypartners$db$selected_QMARK_(id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selected_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(onlypartners.db.db)),id);
});
onlypartners.db.select_plan = (function onlypartners$db$select_plan(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(onlypartners.db.db,cljs.core.assoc,cljs.core.cst$kw$selected_DASH_plan,id);
});
onlypartners.db.selected_plan = (function onlypartners$db$selected_plan(){
var map__26722 = cljs.core.deref(onlypartners.db.db);
var map__26722__$1 = (((((!((map__26722 == null))))?(((((map__26722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26722):map__26722);
var selected_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26722__$1,cljs.core.cst$kw$selected_DASH_plan);
var plans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26722__$1,cljs.core.cst$kw$plans);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26721_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_plan,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26721_SHARP_));
}),plans));
});
onlypartners.db.report_error = (function onlypartners$db$report_error(error){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(onlypartners.db.db,cljs.core.assoc,cljs.core.cst$kw$error,error);
});
onlypartners.db.step_to = (function onlypartners$db$step_to(step){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(onlypartners.db.db,cljs.core.assoc,cljs.core.cst$kw$step,step);
});
