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
onlypartners.core.plan_card = (function onlypartners$core$plan_card(p__29190){
var map__29191 = p__29190;
var map__29191__$1 = (((((!((map__29191 == null))))?(((((map__29191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var id = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var price = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"price","price",22129180));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.card.plan-card","li.card.plan-card",-1557283021),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"plan-card--selected","plan-card--selected",-1850808056),(function (){
return onlypartners.db.selected_QMARK_.call(null,id);
})),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return onlypartners.db.select_plan.call(null,id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.plan-card__price","b.plan-card__price",1102885291),onlypartners.util.format_currency.call(null,price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plan-card__title","h3.plan-card__title",-1534512787),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.plan-card__description","p.plan-card__description",1140363509),description], null)], null);
});
onlypartners.core.plan_selection = (function onlypartners$core$plan_selection(p__29193){
var map__29194 = p__29193;
var map__29194__$1 = (((((!((map__29194 == null))))?(((((map__29194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29194):map__29194);
var group = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"group","group",582596132));
var plans = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"plans","plans",75657163));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.plan-selection","main.plan-selection",50718965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-selection__content","div.plan-selection__content",-1492657019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.plan-list","ul.plan-list",1209831687),cljs.core.doall.call(null,cljs.core.map.call(null,onlypartners.core.plan_card,plans))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.plan-selection__subscribe-button","button.button.plan-selection__subscribe-button",-545677672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(new cljs.core.Keyword(null,"selected-plan","selected-plan",210054588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,onlypartners.db.db)) == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"payment","payment",-1682035288));
})], null),"Assinar"], null)], null);
});
onlypartners.payment.set_public_key.call(null,"TEST-21ee96e7-5cab-40a3-959c-7da1a0adbd2a");
onlypartners.core.submit = (function onlypartners$core$submit(event){
event.preventDefault();

event.persist();

var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_29213){
var state_val_29214 = (state_29213[(1)]);
if((state_val_29214 === (1))){
var inst_29199 = event.target;
var inst_29200 = onlypartners.payment.create_token.call(null,inst_29199);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(2),inst_29200);
} else {
if((state_val_29214 === (2))){
var inst_29202 = (state_29213[(2)]);
var inst_29203 = cljs.core.nth.call(null,inst_29202,(0),null);
var inst_29204 = cljs.core.nth.call(null,inst_29202,(1),null);
var state_29213__$1 = (function (){var statearr_29215 = state_29213;
(statearr_29215[(7)] = inst_29204);

return statearr_29215;
})();
if(cljs.core.truth_(inst_29203)){
var statearr_29216_29225 = state_29213__$1;
(statearr_29216_29225[(1)] = (3));

} else {
var statearr_29217_29226 = state_29213__$1;
(statearr_29217_29226[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (3))){
var inst_29204 = (state_29213[(7)]);
var inst_29206 = onlypartners.db.register_payment.call(null,inst_29204);
var inst_29207 = onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"confirmation","confirmation",-634977782));
var state_29213__$1 = (function (){var statearr_29218 = state_29213;
(statearr_29218[(8)] = inst_29206);

return statearr_29218;
})();
var statearr_29219_29227 = state_29213__$1;
(statearr_29219_29227[(2)] = inst_29207);

(statearr_29219_29227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (4))){
var inst_29209 = onlypartners.db.report_error.call(null,"Verifique os dados do cart\u00E3o.");
var state_29213__$1 = state_29213;
var statearr_29220_29228 = state_29213__$1;
(statearr_29220_29228[(2)] = inst_29209);

(statearr_29220_29228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (5))){
var inst_29211 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29213__$1,inst_29211);
} else {
return null;
}
}
}
}
}
});
return (function() {
var onlypartners$core$submit_$_state_machine__24474__auto__ = null;
var onlypartners$core$submit_$_state_machine__24474__auto____0 = (function (){
var statearr_29221 = [null,null,null,null,null,null,null,null,null];
(statearr_29221[(0)] = onlypartners$core$submit_$_state_machine__24474__auto__);

(statearr_29221[(1)] = (1));

return statearr_29221;
});
var onlypartners$core$submit_$_state_machine__24474__auto____1 = (function (state_29213){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_29213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e29222){if((e29222 instanceof Object)){
var ex__24477__auto__ = e29222;
var statearr_29223_29229 = state_29213;
(statearr_29223_29229[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29230 = state_29213;
state_29213 = G__29230;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
onlypartners$core$submit_$_state_machine__24474__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return onlypartners$core$submit_$_state_machine__24474__auto____0.call(this);
case 1:
return onlypartners$core$submit_$_state_machine__24474__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$submit_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$submit_$_state_machine__24474__auto____0;
onlypartners$core$submit_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$submit_$_state_machine__24474__auto____1;
return onlypartners$core$submit_$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_29224 = f__24641__auto__.call(null);
(statearr_29224[(6)] = c__24640__auto__);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));

return c__24640__auto__;
});
onlypartners.core.payment_information = (function onlypartners$core$payment_information(p__29232){
var map__29233 = p__29232;
var map__29233__$1 = (((((!((map__29233 == null))))?(((((map__29233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29233):map__29233);
var group = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"group","group",582596132));
var error = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-information","main.payment-information",743248647),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.order.order_description,group,(function (p1__29231_SHARP_){
p1__29231_SHARP_.preventDefault();

return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"plans","plans",75657163));
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.card.payment-information__form","form.card.payment-information__form",686881964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),onlypartners.core.submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.payment-information__form__title","h2.payment-information__form__title",1679413475),"Pagamento"], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.payment-information__error","p.payment-information__error",1599315108),error], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.cpf_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.email_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_owner_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_number_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_expiration_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_security_code_field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Pagar"], null)], null)], null);
});
onlypartners.core.create_subscription = (function onlypartners$core$create_subscription(user){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_29273){
var state_val_29274 = (state_29273[(1)]);
if((state_val_29274 === (7))){
var inst_29249 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29275_29292 = state_29273__$1;
(statearr_29275_29292[(2)] = inst_29249);

(statearr_29275_29292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (1))){
var inst_29236 = (state_29273[(7)]);
var inst_29236__$1 = cljs.core.deref.call(null,onlypartners.db.db);
var inst_29238 = (inst_29236__$1 == null);
var inst_29239 = cljs.core.not.call(null,inst_29238);
var state_29273__$1 = (function (){var statearr_29276 = state_29273;
(statearr_29276[(7)] = inst_29236__$1);

return statearr_29276;
})();
if(inst_29239){
var statearr_29277_29293 = state_29273__$1;
(statearr_29277_29293[(1)] = (2));

} else {
var statearr_29278_29294 = state_29273__$1;
(statearr_29278_29294[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (4))){
var inst_29252 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
if(cljs.core.truth_(inst_29252)){
var statearr_29279_29295 = state_29273__$1;
(statearr_29279_29295[(1)] = (8));

} else {
var statearr_29280_29296 = state_29273__$1;
(statearr_29280_29296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (6))){
var state_29273__$1 = state_29273;
var statearr_29281_29297 = state_29273__$1;
(statearr_29281_29297[(2)] = false);

(statearr_29281_29297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (3))){
var state_29273__$1 = state_29273;
var statearr_29282_29298 = state_29273__$1;
(statearr_29282_29298[(2)] = false);

(statearr_29282_29298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (2))){
var inst_29236 = (state_29273[(7)]);
var inst_29241 = inst_29236.cljs$lang$protocol_mask$partition0$;
var inst_29242 = (inst_29241 & (64));
var inst_29243 = inst_29236.cljs$core$ISeq$;
var inst_29244 = (cljs.core.PROTOCOL_SENTINEL === inst_29243);
var inst_29245 = ((inst_29242) || (inst_29244));
var state_29273__$1 = state_29273;
if(cljs.core.truth_(inst_29245)){
var statearr_29283_29299 = state_29273__$1;
(statearr_29283_29299[(1)] = (5));

} else {
var statearr_29284_29300 = state_29273__$1;
(statearr_29284_29300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (11))){
var inst_29271 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29273__$1,inst_29271);
} else {
if((state_val_29274 === (9))){
var inst_29236 = (state_29273[(7)]);
var state_29273__$1 = state_29273;
var statearr_29285_29301 = state_29273__$1;
(statearr_29285_29301[(2)] = inst_29236);

(statearr_29285_29301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (5))){
var state_29273__$1 = state_29273;
var statearr_29286_29302 = state_29273__$1;
(statearr_29286_29302[(2)] = true);

(statearr_29286_29302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (10))){
var inst_29257 = (state_29273[(2)]);
var inst_29258 = cljs.core.get.call(null,inst_29257,new cljs.core.Keyword(null,"payment","payment",-1682035288));
var inst_29259 = cljs.core.get.call(null,inst_29257,new cljs.core.Keyword(null,"group","group",582596132));
var inst_29260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29261 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(user);
var inst_29262 = [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),inst_29261];
var inst_29263 = (new cljs.core.PersistentVector(null,2,(5),inst_29260,inst_29262,null));
var inst_29264 = [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"telegram-user","telegram-user",498793212),new cljs.core.Keyword(null,"telegram-user-id","telegram-user-id",2015805807),new cljs.core.Keyword(null,"telegram-group-id","telegram-group-id",-1222938158)];
var inst_29265 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(user);
var inst_29266 = new cljs.core.Keyword(null,"telegram","telegram",-1805820965).cljs$core$IFn$_invoke$arity$1(inst_29259);
var inst_29267 = [inst_29258,new cljs.core.Keyword(null,"pending","pending",-220036727),user,inst_29265,inst_29266];
var inst_29268 = cljs.core.PersistentHashMap.fromArrays(inst_29264,inst_29267);
var inst_29269 = firemore.core.write_BANG_.call(null,inst_29263,inst_29268);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29273__$1,(11),inst_29269);
} else {
if((state_val_29274 === (8))){
var inst_29236 = (state_29273[(7)]);
var inst_29254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29236);
var state_29273__$1 = state_29273;
var statearr_29287_29303 = state_29273__$1;
(statearr_29287_29303[(2)] = inst_29254);

(statearr_29287_29303[(1)] = (10));


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
var onlypartners$core$create_subscription_$_state_machine__24474__auto__ = null;
var onlypartners$core$create_subscription_$_state_machine__24474__auto____0 = (function (){
var statearr_29288 = [null,null,null,null,null,null,null,null];
(statearr_29288[(0)] = onlypartners$core$create_subscription_$_state_machine__24474__auto__);

(statearr_29288[(1)] = (1));

return statearr_29288;
});
var onlypartners$core$create_subscription_$_state_machine__24474__auto____1 = (function (state_29273){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_29273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e29289){if((e29289 instanceof Object)){
var ex__24477__auto__ = e29289;
var statearr_29290_29304 = state_29273;
(statearr_29290_29304[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29305 = state_29273;
state_29273 = G__29305;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
onlypartners$core$create_subscription_$_state_machine__24474__auto__ = function(state_29273){
switch(arguments.length){
case 0:
return onlypartners$core$create_subscription_$_state_machine__24474__auto____0.call(this);
case 1:
return onlypartners$core$create_subscription_$_state_machine__24474__auto____1.call(this,state_29273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$create_subscription_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$create_subscription_$_state_machine__24474__auto____0;
onlypartners$core$create_subscription_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$create_subscription_$_state_machine__24474__auto____1;
return onlypartners$core$create_subscription_$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_29291 = f__24641__auto__.call(null);
(statearr_29291[(6)] = c__24640__auto__);

return statearr_29291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));

return c__24640__auto__;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__29306_SHARP_){
return cljs.core.reset_BANG_.call(null,ref,p1__29306_SHARP_);
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
return onlypartners.core.create_subscription.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),username], null));
})], null),"Finalizar"], null);
});
onlypartners.core.payment_confirmation = (function onlypartners$core$payment_confirmation(p__29307){
var map__29308 = p__29307;
var map__29308__$1 = (((((!((map__29308 == null))))?(((((map__29308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29308):map__29308);
var group = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"group","group",582596132));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-confirmation","main.payment-confirmation",-1817280467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/success.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Agora basta voc\u00EA acessar com seu Telegram clicando no bot\u00E3o abaixo que te adicionaremos no grupo."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.telegram_login], null)], null);
});
onlypartners.core.app = (function onlypartners$core$app(p__29310){
var map__29311 = p__29310;
var map__29311__$1 = (((((!((map__29311 == null))))?(((((map__29311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29311):map__29311);
var state = map__29311__$1;
var step = cljs.core.get.call(null,map__29311__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var G__29313 = step;
var G__29313__$1 = (((G__29313 instanceof cljs.core.Keyword))?G__29313.fqn:null);
switch (G__29313__$1) {
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
var c__24640__auto___29350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_29341){
var state_val_29342 = (state_29341[(1)]);
if((state_val_29342 === (1))){
var inst_29316 = [new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Keyword(null,"project-id","project-id",206449307)];
var inst_29317 = ["AIzaSyDdGlT3chqZXptsT82H6jSvLKhvs0FqiME","only-partners"];
var inst_29318 = cljs.core.PersistentHashMap.fromArrays(inst_29316,inst_29317);
var inst_29319 = firemore.firebase.initialize.call(null,inst_29318);
var inst_29320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29321 = [new cljs.core.Keyword(null,"groups","groups",-136896102),"fnNebpIsLJkXBQJhoUBo"];
var inst_29322 = (new cljs.core.PersistentVector(null,2,(5),inst_29320,inst_29321,null));
var inst_29323 = firemore.core.get.call(null,inst_29322);
var state_29341__$1 = (function (){var statearr_29343 = state_29341;
(statearr_29343[(7)] = inst_29319);

return statearr_29343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29341__$1,(2),inst_29323);
} else {
if((state_val_29342 === (2))){
var inst_29325 = (state_29341[(2)]);
var inst_29326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29327 = [new cljs.core.Keyword(null,"groups","groups",-136896102),"fnNebpIsLJkXBQJhoUBo",new cljs.core.Keyword(null,"plans","plans",75657163)];
var inst_29328 = (new cljs.core.PersistentVector(null,3,(5),inst_29326,inst_29327,null));
var inst_29329 = firemore.core.get.call(null,inst_29328);
var state_29341__$1 = (function (){var statearr_29344 = state_29341;
(statearr_29344[(8)] = inst_29325);

return statearr_29344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29341__$1,(3),inst_29329);
} else {
if((state_val_29342 === (3))){
var inst_29325 = (state_29341[(8)]);
var inst_29331 = (state_29341[(2)]);
var inst_29332 = (function (){var group_id = "fnNebpIsLJkXBQJhoUBo";
var group = inst_29325;
var plans = inst_29331;
return (function (p1__29315_SHARP_){
return cljs.core.assoc.call(null,p1__29315_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__29315_SHARP_)));
});
})();
var inst_29333 = cljs.core.map.call(null,inst_29332,inst_29331);
var inst_29334 = cljs.core.swap_BANG_.call(null,onlypartners.db.db,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),inst_29325,new cljs.core.Keyword(null,"plans","plans",75657163),inst_29333);
var inst_29335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29336 = [onlypartners.core.app_wrapper];
var inst_29337 = (new cljs.core.PersistentVector(null,1,(5),inst_29335,inst_29336,null));
var inst_29338 = document.getElementById("app");
var inst_29339 = reagent.dom.render.call(null,inst_29337,inst_29338);
var state_29341__$1 = (function (){var statearr_29345 = state_29341;
(statearr_29345[(9)] = inst_29334);

return statearr_29345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29341__$1,inst_29339);
} else {
return null;
}
}
}
});
return (function() {
var onlypartners$core$state_machine__24474__auto__ = null;
var onlypartners$core$state_machine__24474__auto____0 = (function (){
var statearr_29346 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29346[(0)] = onlypartners$core$state_machine__24474__auto__);

(statearr_29346[(1)] = (1));

return statearr_29346;
});
var onlypartners$core$state_machine__24474__auto____1 = (function (state_29341){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_29341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e29347){if((e29347 instanceof Object)){
var ex__24477__auto__ = e29347;
var statearr_29348_29351 = state_29341;
(statearr_29348_29351[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29352 = state_29341;
state_29341 = G__29352;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
onlypartners$core$state_machine__24474__auto__ = function(state_29341){
switch(arguments.length){
case 0:
return onlypartners$core$state_machine__24474__auto____0.call(this);
case 1:
return onlypartners$core$state_machine__24474__auto____1.call(this,state_29341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$state_machine__24474__auto____0;
onlypartners$core$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$state_machine__24474__auto____1;
return onlypartners$core$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_29349 = f__24641__auto__.call(null);
(statearr_29349[(6)] = c__24640__auto___29350);

return statearr_29349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));

onlypartners.core.on_js_reload = (function onlypartners$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map
