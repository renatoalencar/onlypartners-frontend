// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.db');
goog.require('cljs.core');
goog.require('reagent.core');
onlypartners.db.default_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"plans","plans",75657163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected-plan","selected-plan",210054588),null], null);
onlypartners.db.db = reagent.core.atom.call(null,onlypartners.db.default_db);
cljs.core.add_watch.call(null,onlypartners.db.db,new cljs.core.Keyword(null,"debug","debug",-1608172596),(function (key,atom,old_state,new_state){
return cljs.core.prn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"atom","atom",-397043653),atom,new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_state], null));
}));
onlypartners.db.selected_QMARK_ = (function onlypartners$db$selected_QMARK_(id){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-plan","selected-plan",210054588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,onlypartners.db.db)),id);
});
onlypartners.db.select_plan = (function onlypartners$db$select_plan(id){
return cljs.core.swap_BANG_.call(null,onlypartners.db.db,cljs.core.assoc,new cljs.core.Keyword(null,"selected-plan","selected-plan",210054588),id);
});
onlypartners.db.selected_plan = (function onlypartners$db$selected_plan(){
var map__23186 = cljs.core.deref.call(null,onlypartners.db.db);
var map__23186__$1 = (((((!((map__23186 == null))))?(((((map__23186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23186):map__23186);
var selected_plan = cljs.core.get.call(null,map__23186__$1,new cljs.core.Keyword(null,"selected-plan","selected-plan",210054588));
var plans = cljs.core.get.call(null,map__23186__$1,new cljs.core.Keyword(null,"plans","plans",75657163));
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__23185_SHARP_){
return cljs.core._EQ_.call(null,selected_plan,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__23185_SHARP_));
}),plans));
});
onlypartners.db.report_error = (function onlypartners$db$report_error(error){
return cljs.core.swap_BANG_.call(null,onlypartners.db.db,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),error);
});
onlypartners.db.step_to = (function onlypartners$db$step_to(step){
return cljs.core.swap_BANG_.call(null,onlypartners.db.db,cljs.core.assoc,new cljs.core.Keyword(null,"step","step",1288888124),step);
});

//# sourceMappingURL=db.js.map
