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
onlypartners.core.plan_card = (function onlypartners$core$plan_card(p__29191){
var map__29192 = p__29191;
var map__29192__$1 = (((((!((map__29192 == null))))?(((((map__29192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29192):map__29192);
var id = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var price = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"price","price",22129180));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.card.plan-card","li.card.plan-card",-1557283021),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"plan-card--selected","plan-card--selected",-1850808056),(function (){
return onlypartners.db.selected_QMARK_.call(null,id);
})),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return onlypartners.db.select_plan.call(null,id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.plan-card__price","b.plan-card__price",1102885291),onlypartners.util.format_currency.call(null,price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plan-card__title","h3.plan-card__title",-1534512787),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.plan-card__description","p.plan-card__description",1140363509),description], null)], null);
});
onlypartners.core.plan_selection = (function onlypartners$core$plan_selection(p__29194){
var map__29195 = p__29194;
var map__29195__$1 = (((((!((map__29195 == null))))?(((((map__29195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);
var group = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"group","group",582596132));
var plans = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"plans","plans",75657163));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.plan-selection","main.plan-selection",50718965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-selection__content","div.plan-selection__content",-1492657019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.plan-list","ul.plan-list",1209831687),cljs.core.doall.call(null,cljs.core.map.call(null,onlypartners.core.plan_card,plans))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.plan-selection__subscribe-button","button.button.plan-selection__subscribe-button",-545677672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(new cljs.core.Keyword(null,"selected-plan","selected-plan",210054588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,onlypartners.db.db)) == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"payment","payment",-1682035288));
})], null),"Assinar"], null)], null);
});
onlypartners.payment.set_public_key.call(null,"TEST-21ee96e7-5cab-40a3-959c-7da1a0adbd2a");
onlypartners.core.submit = (function onlypartners$core$submit(event){
event.preventDefault();

event.persist();

var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29214){
var state_val_29215 = (state_29214[(1)]);
if((state_val_29215 === (1))){
var inst_29200 = event.target;
var inst_29201 = onlypartners.payment.create_token.call(null,inst_29200);
var state_29214__$1 = state_29214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29214__$1,(2),inst_29201);
} else {
if((state_val_29215 === (2))){
var inst_29203 = (state_29214[(2)]);
var inst_29204 = cljs.core.nth.call(null,inst_29203,(0),null);
var inst_29205 = cljs.core.nth.call(null,inst_29203,(1),null);
var state_29214__$1 = (function (){var statearr_29216 = state_29214;
(statearr_29216[(7)] = inst_29205);

return statearr_29216;
})();
if(cljs.core.truth_(inst_29204)){
var statearr_29217_29226 = state_29214__$1;
(statearr_29217_29226[(1)] = (3));

} else {
var statearr_29218_29227 = state_29214__$1;
(statearr_29218_29227[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (3))){
var inst_29205 = (state_29214[(7)]);
var inst_29207 = onlypartners.db.register_payment.call(null,inst_29205);
var inst_29208 = onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"confirmation","confirmation",-634977782));
var state_29214__$1 = (function (){var statearr_29219 = state_29214;
(statearr_29219[(8)] = inst_29207);

return statearr_29219;
})();
var statearr_29220_29228 = state_29214__$1;
(statearr_29220_29228[(2)] = inst_29208);

(statearr_29220_29228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (4))){
var inst_29210 = onlypartners.db.report_error.call(null,"Verifique os dados do cart\u00E3o.");
var state_29214__$1 = state_29214;
var statearr_29221_29229 = state_29214__$1;
(statearr_29221_29229[(2)] = inst_29210);

(statearr_29221_29229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (5))){
var inst_29212 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29214__$1,inst_29212);
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
var statearr_29222 = [null,null,null,null,null,null,null,null,null];
(statearr_29222[(0)] = onlypartners$core$submit_$_state_machine__24475__auto__);

(statearr_29222[(1)] = (1));

return statearr_29222;
});
var onlypartners$core$submit_$_state_machine__24475__auto____1 = (function (state_29214){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29223){if((e29223 instanceof Object)){
var ex__24478__auto__ = e29223;
var statearr_29224_29230 = state_29214;
(statearr_29224_29230[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29231 = state_29214;
state_29214 = G__29231;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$submit_$_state_machine__24475__auto__ = function(state_29214){
switch(arguments.length){
case 0:
return onlypartners$core$submit_$_state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$submit_$_state_machine__24475__auto____1.call(this,state_29214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$submit_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$submit_$_state_machine__24475__auto____0;
onlypartners$core$submit_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$submit_$_state_machine__24475__auto____1;
return onlypartners$core$submit_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29225 = f__24642__auto__.call(null);
(statearr_29225[(6)] = c__24641__auto__);

return statearr_29225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
});
onlypartners.core.payment_information = (function onlypartners$core$payment_information(p__29233){
var map__29234 = p__29233;
var map__29234__$1 = (((((!((map__29234 == null))))?(((((map__29234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29234):map__29234);
var group = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"group","group",582596132));
var error = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-information","main.payment-information",743248647),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.order.order_description,group,(function (p1__29232_SHARP_){
p1__29232_SHARP_.preventDefault();

return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"plans","plans",75657163));
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.card.payment-information__form","form.card.payment-information__form",686881964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),onlypartners.core.submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.payment-information__form__title","h2.payment-information__form__title",1679413475),"Pagamento"], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.payment-information__error","p.payment-information__error",1599315108),error], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.cpf_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.email_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_owner_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_number_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_expiration_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_security_code_field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Pagar"], null)], null)], null);
});
onlypartners.core.create_subscription = (function onlypartners$core$create_subscription(user_object){
var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29278){
var state_val_29279 = (state_29278[(1)]);
if((state_val_29279 === (7))){
var inst_29250 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
var statearr_29280_29298 = state_29278__$1;
(statearr_29280_29298[(2)] = inst_29250);

(statearr_29280_29298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (1))){
var inst_29237 = (state_29278[(7)]);
var inst_29237__$1 = cljs.core.deref.call(null,onlypartners.db.db);
var inst_29239 = (inst_29237__$1 == null);
var inst_29240 = cljs.core.not.call(null,inst_29239);
var state_29278__$1 = (function (){var statearr_29281 = state_29278;
(statearr_29281[(7)] = inst_29237__$1);

return statearr_29281;
})();
if(inst_29240){
var statearr_29282_29299 = state_29278__$1;
(statearr_29282_29299[(1)] = (2));

} else {
var statearr_29283_29300 = state_29278__$1;
(statearr_29283_29300[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (4))){
var inst_29253 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
if(cljs.core.truth_(inst_29253)){
var statearr_29284_29301 = state_29278__$1;
(statearr_29284_29301[(1)] = (8));

} else {
var statearr_29285_29302 = state_29278__$1;
(statearr_29285_29302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (6))){
var state_29278__$1 = state_29278;
var statearr_29286_29303 = state_29278__$1;
(statearr_29286_29303[(2)] = false);

(statearr_29286_29303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (3))){
var state_29278__$1 = state_29278;
var statearr_29287_29304 = state_29278__$1;
(statearr_29287_29304[(2)] = false);

(statearr_29287_29304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (2))){
var inst_29237 = (state_29278[(7)]);
var inst_29242 = inst_29237.cljs$lang$protocol_mask$partition0$;
var inst_29243 = (inst_29242 & (64));
var inst_29244 = inst_29237.cljs$core$ISeq$;
var inst_29245 = (cljs.core.PROTOCOL_SENTINEL === inst_29244);
var inst_29246 = ((inst_29243) || (inst_29245));
var state_29278__$1 = state_29278;
if(cljs.core.truth_(inst_29246)){
var statearr_29288_29305 = state_29278__$1;
(statearr_29288_29305[(1)] = (5));

} else {
var statearr_29289_29306 = state_29278__$1;
(statearr_29289_29306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (11))){
var inst_29276 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29278__$1,inst_29276);
} else {
if((state_val_29279 === (9))){
var inst_29237 = (state_29278[(7)]);
var state_29278__$1 = state_29278;
var statearr_29290_29307 = state_29278__$1;
(statearr_29290_29307[(2)] = inst_29237);

(statearr_29290_29307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (5))){
var state_29278__$1 = state_29278;
var statearr_29291_29308 = state_29278__$1;
(statearr_29291_29308[(2)] = true);

(statearr_29291_29308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (10))){
var inst_29258 = (state_29278[(2)]);
var inst_29259 = cljs.core.get.call(null,inst_29258,new cljs.core.Keyword(null,"payment","payment",-1682035288));
var inst_29260 = cljs.core.get.call(null,inst_29258,new cljs.core.Keyword(null,"group","group",582596132));
var inst_29261 = cljs.core.js__GT_clj.call(null,user_object);
var inst_29262 = JSON.stringify(user_object);
var inst_29263 = cljs.core.prn.call(null,inst_29261,inst_29262);
var inst_29264 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29265 = cljs.core.get.call(null,inst_29261,"id");
var inst_29266 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29265);
var inst_29267 = [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),inst_29266];
var inst_29268 = (new cljs.core.PersistentVector(null,2,(5),inst_29264,inst_29267,null));
var inst_29269 = [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"telegram-user","telegram-user",498793212),new cljs.core.Keyword(null,"telegram-user-id","telegram-user-id",2015805807),new cljs.core.Keyword(null,"telegram-group-id","telegram-group-id",-1222938158)];
var inst_29270 = cljs.core.get.call(null,inst_29261,"id");
var inst_29271 = new cljs.core.Keyword(null,"telegram","telegram",-1805820965).cljs$core$IFn$_invoke$arity$1(inst_29260);
var inst_29272 = [inst_29259,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_29261,inst_29270,inst_29271];
var inst_29273 = cljs.core.PersistentHashMap.fromArrays(inst_29269,inst_29272);
var inst_29274 = firemore.core.write_BANG_.call(null,inst_29268,inst_29273);
var state_29278__$1 = (function (){var statearr_29292 = state_29278;
(statearr_29292[(8)] = inst_29263);

return statearr_29292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29278__$1,(11),inst_29274);
} else {
if((state_val_29279 === (8))){
var inst_29237 = (state_29278[(7)]);
var inst_29255 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29237);
var state_29278__$1 = state_29278;
var statearr_29293_29309 = state_29278__$1;
(statearr_29293_29309[(2)] = inst_29255);

(statearr_29293_29309[(1)] = (10));


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
var statearr_29294 = [null,null,null,null,null,null,null,null,null];
(statearr_29294[(0)] = onlypartners$core$create_subscription_$_state_machine__24475__auto__);

(statearr_29294[(1)] = (1));

return statearr_29294;
});
var onlypartners$core$create_subscription_$_state_machine__24475__auto____1 = (function (state_29278){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29295){if((e29295 instanceof Object)){
var ex__24478__auto__ = e29295;
var statearr_29296_29310 = state_29278;
(statearr_29296_29310[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29311 = state_29278;
state_29278 = G__29311;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$create_subscription_$_state_machine__24475__auto__ = function(state_29278){
switch(arguments.length){
case 0:
return onlypartners$core$create_subscription_$_state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$create_subscription_$_state_machine__24475__auto____1.call(this,state_29278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$create_subscription_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$create_subscription_$_state_machine__24475__auto____0;
onlypartners$core$create_subscription_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$create_subscription_$_state_machine__24475__auto____1;
return onlypartners$core$create_subscription_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29297 = f__24642__auto__.call(null);
(statearr_29297[(6)] = c__24641__auto__);

return statearr_29297;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__29312_SHARP_){
return cljs.core.reset_BANG_.call(null,ref,p1__29312_SHARP_);
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
return onlypartners.core.create_subscription.call(null,(function (){var G__29313 = new cljs.core.Keyword(null,"id","id",-1388402092);
var obj29315 = ({});
goog.object.set(obj29315,G__29313,username);

return obj29315;
})());
})], null),"Finalizar"], null);
});
onlypartners.core.payment_confirmation = (function onlypartners$core$payment_confirmation(p__29316){
var map__29317 = p__29316;
var map__29317__$1 = (((((!((map__29317 == null))))?(((((map__29317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29317):map__29317);
var group = cljs.core.get.call(null,map__29317__$1,new cljs.core.Keyword(null,"group","group",582596132));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-confirmation","main.payment-confirmation",-1817280467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/success.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Agora basta voc\u00EA acessar com seu Telegram clicando no bot\u00E3o abaixo que te adicionaremos no grupo."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.telegram_login], null)], null);
});
onlypartners.core.app = (function onlypartners$core$app(p__29319){
var map__29320 = p__29319;
var map__29320__$1 = (((((!((map__29320 == null))))?(((((map__29320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29320):map__29320);
var state = map__29320__$1;
var step = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var G__29322 = step;
var G__29322__$1 = (((G__29322 instanceof cljs.core.Keyword))?G__29322.fqn:null);
switch (G__29322__$1) {
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
var c__24641__auto___29365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_29356){
var state_val_29357 = (state_29356[(1)]);
if((state_val_29357 === (1))){
var inst_29334 = (state_29356[(7)]);
var inst_29332 = (state_29356[(8)]);
var inst_29325 = [new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Keyword(null,"project-id","project-id",206449307)];
var inst_29326 = ["AIzaSyDdGlT3chqZXptsT82H6jSvLKhvs0FqiME","only-partners"];
var inst_29327 = cljs.core.PersistentHashMap.fromArrays(inst_29325,inst_29326);
var inst_29328 = firemore.firebase.initialize.call(null,inst_29327);
var inst_29332__$1 = cljs.core.re_matches.call(null,/\/subscribe\/(?<groupid>[a-zA-Z]+)/,location.pathname);
var inst_29333 = cljs.core.nth.call(null,inst_29332__$1,(0),null);
var inst_29334__$1 = cljs.core.nth.call(null,inst_29332__$1,(1),null);
var inst_29335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29336 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_29334__$1];
var inst_29337 = (new cljs.core.PersistentVector(null,2,(5),inst_29335,inst_29336,null));
var inst_29338 = firemore.core.get.call(null,inst_29337);
var state_29356__$1 = (function (){var statearr_29358 = state_29356;
(statearr_29358[(7)] = inst_29334__$1);

(statearr_29358[(9)] = inst_29333);

(statearr_29358[(8)] = inst_29332__$1);

(statearr_29358[(10)] = inst_29328);

return statearr_29358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(2),inst_29338);
} else {
if((state_val_29357 === (2))){
var inst_29334 = (state_29356[(7)]);
var inst_29340 = (state_29356[(2)]);
var inst_29341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29342 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_29334,new cljs.core.Keyword(null,"plans","plans",75657163)];
var inst_29343 = (new cljs.core.PersistentVector(null,3,(5),inst_29341,inst_29342,null));
var inst_29344 = firemore.core.get.call(null,inst_29343);
var state_29356__$1 = (function (){var statearr_29359 = state_29356;
(statearr_29359[(11)] = inst_29340);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(3),inst_29344);
} else {
if((state_val_29357 === (3))){
var inst_29334 = (state_29356[(7)]);
var inst_29333 = (state_29356[(9)]);
var inst_29332 = (state_29356[(8)]);
var inst_29340 = (state_29356[(11)]);
var inst_29346 = (state_29356[(2)]);
var inst_29347 = (function (){var vec__29329 = inst_29332;
var _ = inst_29333;
var group_id = inst_29334;
var group = inst_29340;
var plans = inst_29346;
return (function (p1__29324_SHARP_){
return cljs.core.assoc.call(null,p1__29324_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__29324_SHARP_)));
});
})();
var inst_29348 = cljs.core.map.call(null,inst_29347,inst_29346);
var inst_29349 = cljs.core.swap_BANG_.call(null,onlypartners.db.db,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),inst_29340,new cljs.core.Keyword(null,"plans","plans",75657163),inst_29348);
var inst_29350 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29351 = [onlypartners.core.app_wrapper];
var inst_29352 = (new cljs.core.PersistentVector(null,1,(5),inst_29350,inst_29351,null));
var inst_29353 = document.getElementById("app");
var inst_29354 = reagent.dom.render.call(null,inst_29352,inst_29353);
var state_29356__$1 = (function (){var statearr_29360 = state_29356;
(statearr_29360[(12)] = inst_29349);

return statearr_29360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29356__$1,inst_29354);
} else {
return null;
}
}
}
});
return (function() {
var onlypartners$core$state_machine__24475__auto__ = null;
var onlypartners$core$state_machine__24475__auto____0 = (function (){
var statearr_29361 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29361[(0)] = onlypartners$core$state_machine__24475__auto__);

(statearr_29361[(1)] = (1));

return statearr_29361;
});
var onlypartners$core$state_machine__24475__auto____1 = (function (state_29356){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_29356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29362){if((e29362 instanceof Object)){
var ex__24478__auto__ = e29362;
var statearr_29363_29366 = state_29356;
(statearr_29363_29366[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29367 = state_29356;
state_29356 = G__29367;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
onlypartners$core$state_machine__24475__auto__ = function(state_29356){
switch(arguments.length){
case 0:
return onlypartners$core$state_machine__24475__auto____0.call(this);
case 1:
return onlypartners$core$state_machine__24475__auto____1.call(this,state_29356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$state_machine__24475__auto____0;
onlypartners$core$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$state_machine__24475__auto____1;
return onlypartners$core$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29364 = f__24642__auto__.call(null);
(statearr_29364[(6)] = c__24641__auto___29365);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

onlypartners.core.on_js_reload = (function onlypartners$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map
