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
cljs.core.enable_console_print_BANG_.call(null);
onlypartners.core.plan_card = (function onlypartners$core$plan_card(p__29196){
var map__29197 = p__29196;
var map__29197__$1 = (((((!((map__29197 == null))))?(((((map__29197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29197):map__29197);
var plan = map__29197__$1;
var id = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var price = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"price","price",22129180));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.card.plan-card","li.card.plan-card",-1557283021),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"plan-card--selected","plan-card--selected",-1850808056),(function (){
return onlypartners.db.selected_QMARK_.call(null,id);
})),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
analytics.track(new cljs.core.Keyword(null,"click-plan","click-plan",1112819499),new cljs.core.Keyword(null,"plan","plan",1118952668),plan);

return onlypartners.db.select_plan.call(null,id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.plan-card__price","b.plan-card__price",1102885291),onlypartners.util.format_currency.call(null,price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plan-card__title","h3.plan-card__title",-1534512787),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.plan-card__description","p.plan-card__description",1140363509),description], null)], null);
});
onlypartners.core.plan_selection = (function onlypartners$core$plan_selection(p__29199){
var map__29200 = p__29199;
var map__29200__$1 = (((((!((map__29200 == null))))?(((((map__29200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29200):map__29200);
var group = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"group","group",582596132));
var plans = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"plans","plans",75657163));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.plan-selection","main.plan-selection",50718965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-selection__content","div.plan-selection__content",-1492657019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.plan-list","ul.plan-list",1209831687),cljs.core.doall.call(null,cljs.core.map.call(null,onlypartners.core.plan_card,plans))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.plan-selection__subscribe-button","button.button.plan-selection__subscribe-button",-545677672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(new cljs.core.Keyword(null,"selected-plan","selected-plan",210054588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,onlypartners.db.db)) == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
analytics.track(new cljs.core.Keyword(null,"select-plan","select-plan",116174626),new cljs.core.Keyword(null,"plan","plan",1118952668),onlypartners.db.selected_plan.call(null));

return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"payment","payment",-1682035288));
})], null),"Assinar"], null)], null);
});
onlypartners.payment.set_public_key.call(null,"TEST-21ee96e7-5cab-40a3-959c-7da1a0adbd2a");
onlypartners.core.submit = (function onlypartners$core$submit(event){
event.preventDefault();

event.persist();

analytics.track(new cljs.core.Keyword(null,"pay","pay",-1672734919),new cljs.core.Keyword(null,"plan","plan",1118952668),onlypartners.db.selected_plan.call(null));

var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29219){
var state_val_29220 = (state_29219[(1)]);
if((state_val_29220 === (1))){
var inst_29205 = event.target;
var inst_29206 = onlypartners.payment.create_token.call(null,inst_29205);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(2),inst_29206);
} else {
if((state_val_29220 === (2))){
var inst_29208 = (state_29219[(2)]);
var inst_29209 = cljs.core.nth.call(null,inst_29208,(0),null);
var inst_29210 = cljs.core.nth.call(null,inst_29208,(1),null);
var state_29219__$1 = (function (){var statearr_29221 = state_29219;
(statearr_29221[(7)] = inst_29210);

return statearr_29221;
})();
if(cljs.core.truth_(inst_29209)){
var statearr_29222_29231 = state_29219__$1;
(statearr_29222_29231[(1)] = (3));

} else {
var statearr_29223_29232 = state_29219__$1;
(statearr_29223_29232[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (3))){
var inst_29210 = (state_29219[(7)]);
var inst_29212 = onlypartners.db.register_payment.call(null,inst_29210);
var inst_29213 = onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"confirmation","confirmation",-634977782));
var state_29219__$1 = (function (){var statearr_29224 = state_29219;
(statearr_29224[(8)] = inst_29212);

return statearr_29224;
})();
var statearr_29225_29233 = state_29219__$1;
(statearr_29225_29233[(2)] = inst_29213);

(statearr_29225_29233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (4))){
var inst_29215 = onlypartners.db.report_error.call(null,"Verifique os dados do cart\u00E3o.");
var state_29219__$1 = state_29219;
var statearr_29226_29234 = state_29219__$1;
(statearr_29226_29234[(2)] = inst_29215);

(statearr_29226_29234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (5))){
var inst_29217 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29219__$1,inst_29217);
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
var statearr_29227 = [null,null,null,null,null,null,null,null,null];
(statearr_29227[(0)] = onlypartners$core$submit_$_state_machine__24475__auto__);

(statearr_29227[(1)] = (1));

return statearr_29227;
});
var onlypartners$core$submit_$_state_machine__24475__auto____1 = (function (state_29219){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29228){if((e29228 instanceof Object)){
var ex__24478__auto__ = e29228;
var statearr_29229_29235 = state_29219;
(statearr_29229_29235[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29236 = state_29219;
state_29219 = G__29236;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$submit_$_state_machine__24475__auto__ = function(state_29219){
switch(arguments.length){
case 0:
return onlypartners$core$submit_$_state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$submit_$_state_machine__24475__auto____1.call(this,state_29219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$submit_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$submit_$_state_machine__24475__auto____0;
onlypartners$core$submit_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$submit_$_state_machine__24475__auto____1;
return onlypartners$core$submit_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29230 = f__24642__auto__.call(null);
(statearr_29230[(6)] = c__24641__auto__);

return statearr_29230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
});
onlypartners.core.payment_information = (function onlypartners$core$payment_information(p__29238){
var map__29239 = p__29238;
var map__29239__$1 = (((((!((map__29239 == null))))?(((((map__29239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29239):map__29239);
var group = cljs.core.get.call(null,map__29239__$1,new cljs.core.Keyword(null,"group","group",582596132));
var error = cljs.core.get.call(null,map__29239__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-information","main.payment-information",743248647),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.order.order_description,group,(function (p1__29237_SHARP_){
p1__29237_SHARP_.preventDefault();

analytics.track(new cljs.core.Keyword(null,"change-plan","change-plan",694238975),new cljs.core.Keyword(null,"plan","plan",1118952668),onlypartners.db.selected_plan.call(null));

return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"plans","plans",75657163));
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.card.payment-information__form","form.card.payment-information__form",686881964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),onlypartners.core.submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.payment-information__form__title","h2.payment-information__form__title",1679413475),"Pagamento"], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.payment-information__error","p.payment-information__error",1599315108),error], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.cpf_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.email_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_owner_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_number_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_expiration_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_security_code_field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Pagar"], null)], null)], null);
});
onlypartners.core.create_subscription = (function onlypartners$core$create_subscription(user_object){
analytics.track(new cljs.core.Keyword(null,"subscribe","subscribe",416253756),new cljs.core.Keyword(null,"plan","plan",1118952668),onlypartners.db.selected_plan.call(null));

var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29283){
var state_val_29284 = (state_29283[(1)]);
if((state_val_29284 === (7))){
var inst_29255 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29285_29303 = state_29283__$1;
(statearr_29285_29303[(2)] = inst_29255);

(statearr_29285_29303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (1))){
var inst_29242 = (state_29283[(7)]);
var inst_29242__$1 = cljs.core.deref.call(null,onlypartners.db.db);
var inst_29244 = (inst_29242__$1 == null);
var inst_29245 = cljs.core.not.call(null,inst_29244);
var state_29283__$1 = (function (){var statearr_29286 = state_29283;
(statearr_29286[(7)] = inst_29242__$1);

return statearr_29286;
})();
if(inst_29245){
var statearr_29287_29304 = state_29283__$1;
(statearr_29287_29304[(1)] = (2));

} else {
var statearr_29288_29305 = state_29283__$1;
(statearr_29288_29305[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (4))){
var inst_29258 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29258)){
var statearr_29289_29306 = state_29283__$1;
(statearr_29289_29306[(1)] = (8));

} else {
var statearr_29290_29307 = state_29283__$1;
(statearr_29290_29307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (6))){
var state_29283__$1 = state_29283;
var statearr_29291_29308 = state_29283__$1;
(statearr_29291_29308[(2)] = false);

(statearr_29291_29308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (3))){
var state_29283__$1 = state_29283;
var statearr_29292_29309 = state_29283__$1;
(statearr_29292_29309[(2)] = false);

(statearr_29292_29309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (2))){
var inst_29242 = (state_29283[(7)]);
var inst_29247 = inst_29242.cljs$lang$protocol_mask$partition0$;
var inst_29248 = (inst_29247 & (64));
var inst_29249 = inst_29242.cljs$core$ISeq$;
var inst_29250 = (cljs.core.PROTOCOL_SENTINEL === inst_29249);
var inst_29251 = ((inst_29248) || (inst_29250));
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29251)){
var statearr_29293_29310 = state_29283__$1;
(statearr_29293_29310[(1)] = (5));

} else {
var statearr_29294_29311 = state_29283__$1;
(statearr_29294_29311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (11))){
var inst_29281 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29283__$1,inst_29281);
} else {
if((state_val_29284 === (9))){
var inst_29242 = (state_29283[(7)]);
var state_29283__$1 = state_29283;
var statearr_29295_29312 = state_29283__$1;
(statearr_29295_29312[(2)] = inst_29242);

(statearr_29295_29312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (5))){
var state_29283__$1 = state_29283;
var statearr_29296_29313 = state_29283__$1;
(statearr_29296_29313[(2)] = true);

(statearr_29296_29313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (10))){
var inst_29263 = (state_29283[(2)]);
var inst_29264 = cljs.core.get.call(null,inst_29263,new cljs.core.Keyword(null,"payment","payment",-1682035288));
var inst_29265 = cljs.core.get.call(null,inst_29263,new cljs.core.Keyword(null,"group","group",582596132));
var inst_29266 = cljs.core.js__GT_clj.call(null,user_object);
var inst_29267 = JSON.stringify(user_object);
var inst_29268 = cljs.core.prn.call(null,inst_29266,inst_29267);
var inst_29269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29270 = cljs.core.get.call(null,inst_29266,"id");
var inst_29271 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29270);
var inst_29272 = [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),inst_29271];
var inst_29273 = (new cljs.core.PersistentVector(null,2,(5),inst_29269,inst_29272,null));
var inst_29274 = [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"telegram-user","telegram-user",498793212),new cljs.core.Keyword(null,"telegram-user-id","telegram-user-id",2015805807),new cljs.core.Keyword(null,"telegram-group-id","telegram-group-id",-1222938158)];
var inst_29275 = cljs.core.get.call(null,inst_29266,"id");
var inst_29276 = new cljs.core.Keyword(null,"telegram","telegram",-1805820965).cljs$core$IFn$_invoke$arity$1(inst_29265);
var inst_29277 = [inst_29264,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_29266,inst_29275,inst_29276];
var inst_29278 = cljs.core.PersistentHashMap.fromArrays(inst_29274,inst_29277);
var inst_29279 = firemore.core.write_BANG_.call(null,inst_29273,inst_29278);
var state_29283__$1 = (function (){var statearr_29297 = state_29283;
(statearr_29297[(8)] = inst_29268);

return statearr_29297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(11),inst_29279);
} else {
if((state_val_29284 === (8))){
var inst_29242 = (state_29283[(7)]);
var inst_29260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29242);
var state_29283__$1 = state_29283;
var statearr_29298_29314 = state_29283__$1;
(statearr_29298_29314[(2)] = inst_29260);

(statearr_29298_29314[(1)] = (10));


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
var statearr_29299 = [null,null,null,null,null,null,null,null,null];
(statearr_29299[(0)] = onlypartners$core$create_subscription_$_state_machine__24475__auto__);

(statearr_29299[(1)] = (1));

return statearr_29299;
});
var onlypartners$core$create_subscription_$_state_machine__24475__auto____1 = (function (state_29283){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29300){if((e29300 instanceof Object)){
var ex__24478__auto__ = e29300;
var statearr_29301_29315 = state_29283;
(statearr_29301_29315[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29316 = state_29283;
state_29283 = G__29316;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$create_subscription_$_state_machine__24475__auto__ = function(state_29283){
switch(arguments.length){
case 0:
return onlypartners$core$create_subscription_$_state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$create_subscription_$_state_machine__24475__auto____1.call(this,state_29283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$create_subscription_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$create_subscription_$_state_machine__24475__auto____0;
onlypartners$core$create_subscription_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$create_subscription_$_state_machine__24475__auto____1;
return onlypartners$core$create_subscription_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29302 = f__24642__auto__.call(null);
(statearr_29302[(6)] = c__24641__auto__);

return statearr_29302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
});
onlypartners.core.append_telegram_widget = (function onlypartners$core$append_telegram_widget(target){
var script = document.createElement("script");
(script.src = "https://telegram.org/js/telegram-widget.js?14");

(script.async = true);

(script.dataset.telegramLogin = "new_agent_773_bot");

(script.dataset.size = "large");

(script.dataset.onauth = "onlypartners.core.create_subscription(user)");

(script.dataset.requestAccess = "write");

return target.appendChild(script);
});
onlypartners.core.telegram_login = (function onlypartners$core$telegram_login(){
var ref = reagent.core.atom.call(null,null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__29317_SHARP_){
return cljs.core.reset_BANG_.call(null,ref,p1__29317_SHARP_);
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
return onlypartners.core.create_subscription.call(null,(function (){var G__29318 = new cljs.core.Keyword(null,"id","id",-1388402092);
var obj29320 = ({});
goog.object.set(obj29320,G__29318,username);

return obj29320;
})());
})], null),"Finalizar"], null);
});
onlypartners.core.payment_confirmation = (function onlypartners$core$payment_confirmation(p__29321){
var map__29322 = p__29321;
var map__29322__$1 = (((((!((map__29322 == null))))?(((((map__29322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29322):map__29322);
var group = cljs.core.get.call(null,map__29322__$1,new cljs.core.Keyword(null,"group","group",582596132));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-confirmation","main.payment-confirmation",-1817280467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/success.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Agora basta voc\u00EA acessar com seu Telegram clicando no bot\u00E3o abaixo que te adicionaremos no grupo."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.telegram_login], null)], null);
});
onlypartners.core.app = (function onlypartners$core$app(p__29324){
var map__29325 = p__29324;
var map__29325__$1 = (((((!((map__29325 == null))))?(((((map__29325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29325):map__29325);
var state = map__29325__$1;
var step = cljs.core.get.call(null,map__29325__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var G__29327 = step;
var G__29327__$1 = (((G__29327 instanceof cljs.core.Keyword))?G__29327.fqn:null);
switch (G__29327__$1) {
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
var c__24641__auto___29370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29361){
var state_val_29362 = (state_29361[(1)]);
if((state_val_29362 === (1))){
var inst_29339 = (state_29361[(7)]);
var inst_29337 = (state_29361[(8)]);
var inst_29330 = [new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Keyword(null,"project-id","project-id",206449307)];
var inst_29331 = ["AIzaSyDdGlT3chqZXptsT82H6jSvLKhvs0FqiME","only-partners"];
var inst_29332 = cljs.core.PersistentHashMap.fromArrays(inst_29330,inst_29331);
var inst_29333 = firemore.firebase.initialize.call(null,inst_29332);
var inst_29337__$1 = cljs.core.re_matches.call(null,/\/subscribe\/(?<groupid>[a-zA-Z]+)/,location.pathname);
var inst_29338 = cljs.core.nth.call(null,inst_29337__$1,(0),null);
var inst_29339__$1 = cljs.core.nth.call(null,inst_29337__$1,(1),null);
var inst_29340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29341 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_29339__$1];
var inst_29342 = (new cljs.core.PersistentVector(null,2,(5),inst_29340,inst_29341,null));
var inst_29343 = firemore.core.get.call(null,inst_29342);
var state_29361__$1 = (function (){var statearr_29363 = state_29361;
(statearr_29363[(9)] = inst_29333);

(statearr_29363[(7)] = inst_29339__$1);

(statearr_29363[(8)] = inst_29337__$1);

(statearr_29363[(10)] = inst_29338);

return statearr_29363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29361__$1,(2),inst_29343);
} else {
if((state_val_29362 === (2))){
var inst_29339 = (state_29361[(7)]);
var inst_29345 = (state_29361[(2)]);
var inst_29346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29347 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_29339,new cljs.core.Keyword(null,"plans","plans",75657163)];
var inst_29348 = (new cljs.core.PersistentVector(null,3,(5),inst_29346,inst_29347,null));
var inst_29349 = firemore.core.get.call(null,inst_29348);
var state_29361__$1 = (function (){var statearr_29364 = state_29361;
(statearr_29364[(11)] = inst_29345);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29361__$1,(3),inst_29349);
} else {
if((state_val_29362 === (3))){
var inst_29339 = (state_29361[(7)]);
var inst_29345 = (state_29361[(11)]);
var inst_29337 = (state_29361[(8)]);
var inst_29338 = (state_29361[(10)]);
var inst_29351 = (state_29361[(2)]);
var inst_29352 = (function (){var vec__29334 = inst_29337;
var _ = inst_29338;
var group_id = inst_29339;
var group = inst_29345;
var plans = inst_29351;
return (function (p1__29329_SHARP_){
return cljs.core.assoc.call(null,p1__29329_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__29329_SHARP_)));
});
})();
var inst_29353 = cljs.core.map.call(null,inst_29352,inst_29351);
var inst_29354 = cljs.core.swap_BANG_.call(null,onlypartners.db.db,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),inst_29345,new cljs.core.Keyword(null,"plans","plans",75657163),inst_29353);
var inst_29355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29356 = [onlypartners.core.app_wrapper];
var inst_29357 = (new cljs.core.PersistentVector(null,1,(5),inst_29355,inst_29356,null));
var inst_29358 = document.getElementById("app");
var inst_29359 = reagent.dom.render.call(null,inst_29357,inst_29358);
var state_29361__$1 = (function (){var statearr_29365 = state_29361;
(statearr_29365[(12)] = inst_29354);

return statearr_29365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29361__$1,inst_29359);
} else {
return null;
}
}
}
});
return (function() {
var onlypartners$core$state_machine__24475__auto__ = null;
var onlypartners$core$state_machine__24475__auto____0 = (function (){
var statearr_29366 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29366[(0)] = onlypartners$core$state_machine__24475__auto__);

(statearr_29366[(1)] = (1));

return statearr_29366;
});
var onlypartners$core$state_machine__24475__auto____1 = (function (state_29361){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29367){if((e29367 instanceof Object)){
var ex__24478__auto__ = e29367;
var statearr_29368_29371 = state_29361;
(statearr_29368_29371[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29372 = state_29361;
state_29361 = G__29372;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$state_machine__24475__auto__ = function(state_29361){
switch(arguments.length){
case 0:
return onlypartners$core$state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$state_machine__24475__auto____1.call(this,state_29361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$state_machine__24475__auto____0;
onlypartners$core$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$state_machine__24475__auto____1;
return onlypartners$core$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29369 = f__24642__auto__.call(null);
(statearr_29369[(6)] = c__24641__auto___29370);

return statearr_29369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

onlypartners.core.on_js_reload = (function onlypartners$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map
