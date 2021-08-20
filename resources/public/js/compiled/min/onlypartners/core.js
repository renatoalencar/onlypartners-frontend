// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('firemore.core');
goog.require('onlypartners.components.group');
goog.require('onlypartners.components.order');
goog.require('onlypartners.components.identification');
goog.require('onlypartners.components.credit_card');
goog.require('onlypartners.db');
goog.require('onlypartners.router');
goog.require('onlypartners.util');
goog.require('onlypartners.payment');
goog.require('onlypartners.analytics');
cljs.core.enable_console_print_BANG_.call(null);
onlypartners.core.plan_card = (function onlypartners$core$plan_card(p__29201){
var map__29202 = p__29201;
var map__29202__$1 = (((((!((map__29202 == null))))?(((((map__29202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29202):map__29202);
var plan = map__29202__$1;
var id = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var price = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"price","price",22129180));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.card.plan-card","li.card.plan-card",-1557283021),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"plan-card--selected","plan-card--selected",-1850808056),(function (){
return onlypartners.db.selected_QMARK_.call(null,id);
})),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
onlypartners.analytics.track.call(null,new cljs.core.Keyword(null,"click-plan","click-plan",1112819499),new cljs.core.Keyword(null,"plan","plan",1118952668),plan);

return onlypartners.db.select_plan.call(null,id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.plan-card__price","b.plan-card__price",1102885291),onlypartners.util.format_currency.call(null,price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plan-card__title","h3.plan-card__title",-1534512787),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.plan-card__description","p.plan-card__description",1140363509),description], null)], null);
});
onlypartners.core.plan_selection = (function onlypartners$core$plan_selection(p__29204){
var map__29205 = p__29204;
var map__29205__$1 = (((((!((map__29205 == null))))?(((((map__29205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29205):map__29205);
var group = cljs.core.get.call(null,map__29205__$1,new cljs.core.Keyword(null,"group","group",582596132));
var plans = cljs.core.get.call(null,map__29205__$1,new cljs.core.Keyword(null,"plans","plans",75657163));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.plan-selection","main.plan-selection",50718965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-selection__content","div.plan-selection__content",-1492657019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.plan-list","ul.plan-list",1209831687),cljs.core.doall.call(null,cljs.core.map.call(null,onlypartners.core.plan_card,plans))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.plan-selection__subscribe-button","button.button.plan-selection__subscribe-button",-545677672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(new cljs.core.Keyword(null,"selected-plan","selected-plan",210054588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,onlypartners.db.db)) == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
onlypartners.analytics.track.call(null,new cljs.core.Keyword(null,"select-plan","select-plan",116174626),new cljs.core.Keyword(null,"plan","plan",1118952668),onlypartners.db.selected_plan.call(null));

return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"payment","payment",-1682035288));
})], null),"Assinar"], null)], null);
});
onlypartners.payment.set_public_key.call(null,"[REDACTED]");
onlypartners.core.submit = (function onlypartners$core$submit(event){
event.preventDefault();

event.persist();

onlypartners.analytics.track.call(null,new cljs.core.Keyword(null,"pay","pay",-1672734919),new cljs.core.Keyword(null,"plan","plan",1118952668),onlypartners.db.selected_plan.call(null));

var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29224){
var state_val_29225 = (state_29224[(1)]);
if((state_val_29225 === (1))){
var inst_29210 = event.target;
var inst_29211 = onlypartners.payment.create_token.call(null,inst_29210);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(2),inst_29211);
} else {
if((state_val_29225 === (2))){
var inst_29213 = (state_29224[(2)]);
var inst_29214 = cljs.core.nth.call(null,inst_29213,(0),null);
var inst_29215 = cljs.core.nth.call(null,inst_29213,(1),null);
var state_29224__$1 = (function (){var statearr_29226 = state_29224;
(statearr_29226[(7)] = inst_29215);

return statearr_29226;
})();
if(cljs.core.truth_(inst_29214)){
var statearr_29227_29236 = state_29224__$1;
(statearr_29227_29236[(1)] = (3));

} else {
var statearr_29228_29237 = state_29224__$1;
(statearr_29228_29237[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (3))){
var inst_29215 = (state_29224[(7)]);
var inst_29217 = onlypartners.db.register_payment.call(null,inst_29215);
var inst_29218 = onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"confirmation","confirmation",-634977782));
var state_29224__$1 = (function (){var statearr_29229 = state_29224;
(statearr_29229[(8)] = inst_29217);

return statearr_29229;
})();
var statearr_29230_29238 = state_29224__$1;
(statearr_29230_29238[(2)] = inst_29218);

(statearr_29230_29238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (4))){
var inst_29220 = onlypartners.db.report_error.call(null,"Verifique os dados do cart\u00E3o.");
var state_29224__$1 = state_29224;
var statearr_29231_29239 = state_29224__$1;
(statearr_29231_29239[(2)] = inst_29220);

(statearr_29231_29239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (5))){
var inst_29222 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29224__$1,inst_29222);
} else {
return null;
}
}
}
}
}
});
return (function() {
var onlypartners$core$submit_$_state_machine__24475__auto__ = null;
var onlypartners$core$submit_$_state_machine__24475__auto____0 = (function (){
var statearr_29232 = [null,null,null,null,null,null,null,null,null];
(statearr_29232[(0)] = onlypartners$core$submit_$_state_machine__24475__auto__);

(statearr_29232[(1)] = (1));

return statearr_29232;
});
var onlypartners$core$submit_$_state_machine__24475__auto____1 = (function (state_29224){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29233){if((e29233 instanceof Object)){
var ex__24478__auto__ = e29233;
var statearr_29234_29240 = state_29224;
(statearr_29234_29240[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29241 = state_29224;
state_29224 = G__29241;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$submit_$_state_machine__24475__auto__ = function(state_29224){
switch(arguments.length){
case 0:
return onlypartners$core$submit_$_state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$submit_$_state_machine__24475__auto____1.call(this,state_29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$submit_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$submit_$_state_machine__24475__auto____0;
onlypartners$core$submit_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$submit_$_state_machine__24475__auto____1;
return onlypartners$core$submit_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29235 = f__24642__auto__.call(null);
(statearr_29235[(6)] = c__24641__auto__);

return statearr_29235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
});
onlypartners.core.payment_information = (function onlypartners$core$payment_information(p__29243){
var map__29244 = p__29243;
var map__29244__$1 = (((((!((map__29244 == null))))?(((((map__29244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29244):map__29244);
var group = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"group","group",582596132));
var error = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-information","main.payment-information",743248647),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.order.order_description,group,(function (p1__29242_SHARP_){
p1__29242_SHARP_.preventDefault();

onlypartners.analytics.track.call(null,new cljs.core.Keyword(null,"change-plan","change-plan",694238975),new cljs.core.Keyword(null,"plan","plan",1118952668),onlypartners.db.selected_plan.call(null));

return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"plans","plans",75657163));
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.card.payment-information__form","form.card.payment-information__form",686881964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),onlypartners.core.submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.payment-information__form__title","h2.payment-information__form__title",1679413475),"Pagamento"], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.payment-information__error","p.payment-information__error",1599315108),error], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.cpf_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.email_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_owner_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_number_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_expiration_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_security_code_field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Pagar"], null)], null)], null);
});
onlypartners.core.create_subscription = (function onlypartners$core$create_subscription(user_object){
onlypartners.analytics.track.call(null,new cljs.core.Keyword(null,"subscribe","subscribe",416253756),new cljs.core.Keyword(null,"plan","plan",1118952668),onlypartners.db.selected_plan.call(null));

var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29288){
var state_val_29289 = (state_29288[(1)]);
if((state_val_29289 === (7))){
var inst_29260 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
var statearr_29290_29308 = state_29288__$1;
(statearr_29290_29308[(2)] = inst_29260);

(statearr_29290_29308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (1))){
var inst_29247 = (state_29288[(7)]);
var inst_29247__$1 = cljs.core.deref.call(null,onlypartners.db.db);
var inst_29249 = (inst_29247__$1 == null);
var inst_29250 = cljs.core.not.call(null,inst_29249);
var state_29288__$1 = (function (){var statearr_29291 = state_29288;
(statearr_29291[(7)] = inst_29247__$1);

return statearr_29291;
})();
if(inst_29250){
var statearr_29292_29309 = state_29288__$1;
(statearr_29292_29309[(1)] = (2));

} else {
var statearr_29293_29310 = state_29288__$1;
(statearr_29293_29310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (4))){
var inst_29263 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
if(cljs.core.truth_(inst_29263)){
var statearr_29294_29311 = state_29288__$1;
(statearr_29294_29311[(1)] = (8));

} else {
var statearr_29295_29312 = state_29288__$1;
(statearr_29295_29312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (6))){
var state_29288__$1 = state_29288;
var statearr_29296_29313 = state_29288__$1;
(statearr_29296_29313[(2)] = false);

(statearr_29296_29313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (3))){
var state_29288__$1 = state_29288;
var statearr_29297_29314 = state_29288__$1;
(statearr_29297_29314[(2)] = false);

(statearr_29297_29314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (2))){
var inst_29247 = (state_29288[(7)]);
var inst_29252 = inst_29247.cljs$lang$protocol_mask$partition0$;
var inst_29253 = (inst_29252 & (64));
var inst_29254 = inst_29247.cljs$core$ISeq$;
var inst_29255 = (cljs.core.PROTOCOL_SENTINEL === inst_29254);
var inst_29256 = ((inst_29253) || (inst_29255));
var state_29288__$1 = state_29288;
if(cljs.core.truth_(inst_29256)){
var statearr_29298_29315 = state_29288__$1;
(statearr_29298_29315[(1)] = (5));

} else {
var statearr_29299_29316 = state_29288__$1;
(statearr_29299_29316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (11))){
var inst_29286 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29288__$1,inst_29286);
} else {
if((state_val_29289 === (9))){
var inst_29247 = (state_29288[(7)]);
var state_29288__$1 = state_29288;
var statearr_29300_29317 = state_29288__$1;
(statearr_29300_29317[(2)] = inst_29247);

(statearr_29300_29317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (5))){
var state_29288__$1 = state_29288;
var statearr_29301_29318 = state_29288__$1;
(statearr_29301_29318[(2)] = true);

(statearr_29301_29318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (10))){
var inst_29268 = (state_29288[(2)]);
var inst_29269 = cljs.core.get.call(null,inst_29268,new cljs.core.Keyword(null,"payment","payment",-1682035288));
var inst_29270 = cljs.core.get.call(null,inst_29268,new cljs.core.Keyword(null,"group","group",582596132));
var inst_29271 = cljs.core.js__GT_clj.call(null,user_object);
var inst_29272 = JSON.stringify(user_object);
var inst_29273 = cljs.core.prn.call(null,inst_29271,inst_29272);
var inst_29274 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29275 = cljs.core.get.call(null,inst_29271,"id");
var inst_29276 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29275);
var inst_29277 = [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),inst_29276];
var inst_29278 = (new cljs.core.PersistentVector(null,2,(5),inst_29274,inst_29277,null));
var inst_29279 = [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"telegram-user","telegram-user",498793212),new cljs.core.Keyword(null,"telegram-user-id","telegram-user-id",2015805807),new cljs.core.Keyword(null,"telegram-group-id","telegram-group-id",-1222938158)];
var inst_29280 = cljs.core.get.call(null,inst_29271,"id");
var inst_29281 = new cljs.core.Keyword(null,"telegram","telegram",-1805820965).cljs$core$IFn$_invoke$arity$1(inst_29270);
var inst_29282 = [inst_29269,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_29271,inst_29280,inst_29281];
var inst_29283 = cljs.core.PersistentHashMap.fromArrays(inst_29279,inst_29282);
var inst_29284 = firemore.core.write_BANG_.call(null,inst_29278,inst_29283);
var state_29288__$1 = (function (){var statearr_29302 = state_29288;
(statearr_29302[(8)] = inst_29273);

return statearr_29302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29288__$1,(11),inst_29284);
} else {
if((state_val_29289 === (8))){
var inst_29247 = (state_29288[(7)]);
var inst_29265 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29247);
var state_29288__$1 = state_29288;
var statearr_29303_29319 = state_29288__$1;
(statearr_29303_29319[(2)] = inst_29265);

(statearr_29303_29319[(1)] = (10));


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
}
}
}
}
});
return (function() {
var onlypartners$core$create_subscription_$_state_machine__24475__auto__ = null;
var onlypartners$core$create_subscription_$_state_machine__24475__auto____0 = (function (){
var statearr_29304 = [null,null,null,null,null,null,null,null,null];
(statearr_29304[(0)] = onlypartners$core$create_subscription_$_state_machine__24475__auto__);

(statearr_29304[(1)] = (1));

return statearr_29304;
});
var onlypartners$core$create_subscription_$_state_machine__24475__auto____1 = (function (state_29288){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29305){if((e29305 instanceof Object)){
var ex__24478__auto__ = e29305;
var statearr_29306_29320 = state_29288;
(statearr_29306_29320[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29321 = state_29288;
state_29288 = G__29321;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$create_subscription_$_state_machine__24475__auto__ = function(state_29288){
switch(arguments.length){
case 0:
return onlypartners$core$create_subscription_$_state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$create_subscription_$_state_machine__24475__auto____1.call(this,state_29288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$create_subscription_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$create_subscription_$_state_machine__24475__auto____0;
onlypartners$core$create_subscription_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$create_subscription_$_state_machine__24475__auto____1;
return onlypartners$core$create_subscription_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29307 = f__24642__auto__.call(null);
(statearr_29307[(6)] = c__24641__auto__);

return statearr_29307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
});
onlypartners.core.append_telegram_widget = (function onlypartners$core$append_telegram_widget(target){
var script = document.createElement("script");
(script.src = "https://telegram.org/js/telegram-widget.js?14");

(script.async = true);

(script.dataset.telegramLogin = "[REDACTED]");

(script.dataset.size = "large");

(script.dataset.onauth = "onlypartners.core.create_subscription(user)");

(script.dataset.requestAccess = "write");

return target.appendChild(script);
});
onlypartners.core.telegram_login = (function onlypartners$core$telegram_login(){
var ref = reagent.core.atom.call(null,null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__29322_SHARP_){
return cljs.core.reset_BANG_.call(null,ref,p1__29322_SHARP_);
})], null),(cljs.core.truth_(cljs.core.deref.call(null,ref))?(function (){
onlypartners.core.append_telegram_widget.call(null,cljs.core.deref.call(null,ref));

return null;
})()
:null)], null);
});
});
onlypartners.core.telegram_login_dev = (function onlypartners$core$telegram_login_dev(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var username = prompt("Telegram username");
return onlypartners.core.create_subscription.call(null,(function (){var G__29323 = new cljs.core.Keyword(null,"id","id",-1388402092);
var obj29325 = ({});
goog.object.set(obj29325,G__29323,username);

return obj29325;
})());
})], null),"Finalizar"], null);
});
onlypartners.core.payment_confirmation = (function onlypartners$core$payment_confirmation(p__29326){
var map__29327 = p__29326;
var map__29327__$1 = (((((!((map__29327 == null))))?(((((map__29327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29327):map__29327);
var group = cljs.core.get.call(null,map__29327__$1,new cljs.core.Keyword(null,"group","group",582596132));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-confirmation","main.payment-confirmation",-1817280467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/success.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Agora basta voc\u00EA acessar com seu Telegram clicando no bot\u00E3o abaixo que te adicionaremos no grupo."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.telegram_login], null)], null);
});
onlypartners.core.app = (function onlypartners$core$app(p__29329){
var map__29330 = p__29329;
var map__29330__$1 = (((((!((map__29330 == null))))?(((((map__29330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29330):map__29330);
var state = map__29330__$1;
var step = cljs.core.get.call(null,map__29330__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var G__29332 = step;
var G__29332__$1 = (((G__29332 instanceof cljs.core.Keyword))?G__29332.fqn:null);
switch (G__29332__$1) {
case "plans":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.plan_selection,state], null);

break;
case "payment":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.payment_information,state], null);

break;
case "confirmation":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.payment_confirmation,state], null);

break;
default:
return null;

}
});
onlypartners.core.app_wrapper = onlypartners.util.attach.call(null,onlypartners.util.attach.call(null,onlypartners.core.app,onlypartners.router.state),onlypartners.db.db);
var c__24641__auto___29375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29366){
var state_val_29367 = (state_29366[(1)]);
if((state_val_29367 === (1))){
var inst_29344 = (state_29366[(7)]);
var inst_29342 = (state_29366[(8)]);
var inst_29335 = [new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Keyword(null,"project-id","project-id",206449307)];
var inst_29336 = ["[REDACTED]","[REDACTED]"];
var inst_29337 = cljs.core.PersistentHashMap.fromArrays(inst_29335,inst_29336);
var inst_29338 = firemore.firebase.initialize.call(null,inst_29337);
var inst_29342__$1 = cljs.core.re_matches.call(null,/\/subscribe\/(?<groupid>[a-zA-Z]+)/,location.pathname);
var inst_29343 = cljs.core.nth.call(null,inst_29342__$1,(0),null);
var inst_29344__$1 = cljs.core.nth.call(null,inst_29342__$1,(1),null);
var inst_29345 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29346 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_29344__$1];
var inst_29347 = (new cljs.core.PersistentVector(null,2,(5),inst_29345,inst_29346,null));
var inst_29348 = firemore.core.get.call(null,inst_29347);
var state_29366__$1 = (function (){var statearr_29368 = state_29366;
(statearr_29368[(7)] = inst_29344__$1);

(statearr_29368[(9)] = inst_29343);

(statearr_29368[(8)] = inst_29342__$1);

(statearr_29368[(10)] = inst_29338);

return statearr_29368;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29366__$1,(2),inst_29348);
} else {
if((state_val_29367 === (2))){
var inst_29344 = (state_29366[(7)]);
var inst_29350 = (state_29366[(2)]);
var inst_29351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29352 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_29344,new cljs.core.Keyword(null,"plans","plans",75657163)];
var inst_29353 = (new cljs.core.PersistentVector(null,3,(5),inst_29351,inst_29352,null));
var inst_29354 = firemore.core.get.call(null,inst_29353);
var state_29366__$1 = (function (){var statearr_29369 = state_29366;
(statearr_29369[(11)] = inst_29350);

return statearr_29369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29366__$1,(3),inst_29354);
} else {
if((state_val_29367 === (3))){
var inst_29350 = (state_29366[(11)]);
var inst_29344 = (state_29366[(7)]);
var inst_29343 = (state_29366[(9)]);
var inst_29342 = (state_29366[(8)]);
var inst_29356 = (state_29366[(2)]);
var inst_29357 = (function (){var vec__29339 = inst_29342;
var _ = inst_29343;
var group_id = inst_29344;
var group = inst_29350;
var plans = inst_29356;
return (function (p1__29334_SHARP_){
return cljs.core.assoc.call(null,p1__29334_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__29334_SHARP_)));
});
})();
var inst_29358 = cljs.core.map.call(null,inst_29357,inst_29356);
var inst_29359 = cljs.core.swap_BANG_.call(null,onlypartners.db.db,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),inst_29350,new cljs.core.Keyword(null,"plans","plans",75657163),inst_29358);
var inst_29360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29361 = [onlypartners.core.app_wrapper];
var inst_29362 = (new cljs.core.PersistentVector(null,1,(5),inst_29360,inst_29361,null));
var inst_29363 = document.getElementById("app");
var inst_29364 = reagent.dom.render.call(null,inst_29362,inst_29363);
var state_29366__$1 = (function (){var statearr_29370 = state_29366;
(statearr_29370[(12)] = inst_29359);

return statearr_29370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29366__$1,inst_29364);
} else {
return null;
}
}
}
});
return (function() {
var onlypartners$core$state_machine__24475__auto__ = null;
var onlypartners$core$state_machine__24475__auto____0 = (function (){
var statearr_29371 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29371[(0)] = onlypartners$core$state_machine__24475__auto__);

(statearr_29371[(1)] = (1));

return statearr_29371;
});
var onlypartners$core$state_machine__24475__auto____1 = (function (state_29366){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29372){if((e29372 instanceof Object)){
var ex__24478__auto__ = e29372;
var statearr_29373_29376 = state_29366;
(statearr_29373_29376[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29377 = state_29366;
state_29366 = G__29377;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$state_machine__24475__auto__ = function(state_29366){
switch(arguments.length){
case 0:
return onlypartners$core$state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$state_machine__24475__auto____1.call(this,state_29366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$state_machine__24475__auto____0;
onlypartners$core$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$state_machine__24475__auto____1;
return onlypartners$core$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29374 = f__24642__auto__.call(null);
(statearr_29374[(6)] = c__24641__auto___29375);

return statearr_29374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

onlypartners.core.on_js_reload = (function onlypartners$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map
