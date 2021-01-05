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
onlypartners.core.plan_card = (function onlypartners$core$plan_card(p__29176){
var map__29177 = p__29176;
var map__29177__$1 = (((((!((map__29177 == null))))?(((((map__29177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29177):map__29177);
var id = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var price = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"price","price",22129180));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.card.plan-card","li.card.plan-card",-1557283021),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"plan-card--selected","plan-card--selected",-1850808056),(function (){
return onlypartners.db.selected_QMARK_.call(null,id);
})),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return onlypartners.db.select_plan.call(null,id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.plan-card__price","b.plan-card__price",1102885291),onlypartners.util.format_currency.call(null,price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plan-card__title","h3.plan-card__title",-1534512787),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.plan-card__description","p.plan-card__description",1140363509),description], null)], null);
});
onlypartners.core.plan_selection = (function onlypartners$core$plan_selection(p__29179){
var map__29180 = p__29179;
var map__29180__$1 = (((((!((map__29180 == null))))?(((((map__29180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29180):map__29180);
var group = cljs.core.get.call(null,map__29180__$1,new cljs.core.Keyword(null,"group","group",582596132));
var plans = cljs.core.get.call(null,map__29180__$1,new cljs.core.Keyword(null,"plans","plans",75657163));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.plan-selection","main.plan-selection",50718965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-selection__content","div.plan-selection__content",-1492657019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.plan-list","ul.plan-list",1209831687),cljs.core.doall.call(null,cljs.core.map.call(null,onlypartners.core.plan_card,plans))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.plan-selection__subscribe-button","button.button.plan-selection__subscribe-button",-545677672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"payment","payment",-1682035288));
})], null),"Assinar"], null)], null);
});
onlypartners.payment.set_public_key.call(null,"TEST-21ee96e7-5cab-40a3-959c-7da1a0adbd2a");
onlypartners.core.submit = (function onlypartners$core$submit(event){
event.preventDefault();

event.persist();

var c__24626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_29198){
var state_val_29199 = (state_29198[(1)]);
if((state_val_29199 === (1))){
var inst_29185 = event.target;
var inst_29186 = onlypartners.payment.create_token.call(null,inst_29185);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(2),inst_29186);
} else {
if((state_val_29199 === (2))){
var inst_29188 = (state_29198[(2)]);
var inst_29189 = cljs.core.nth.call(null,inst_29188,(0),null);
var inst_29190 = cljs.core.nth.call(null,inst_29188,(1),null);
var state_29198__$1 = (function (){var statearr_29200 = state_29198;
(statearr_29200[(7)] = inst_29190);

return statearr_29200;
})();
if(cljs.core.truth_(inst_29189)){
var statearr_29201_29209 = state_29198__$1;
(statearr_29201_29209[(1)] = (3));

} else {
var statearr_29202_29210 = state_29198__$1;
(statearr_29202_29210[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (3))){
var inst_29192 = onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"confirmation","confirmation",-634977782));
var state_29198__$1 = state_29198;
var statearr_29203_29211 = state_29198__$1;
(statearr_29203_29211[(2)] = inst_29192);

(statearr_29203_29211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (4))){
var inst_29194 = onlypartners.db.report_error.call(null,"Verifique os dados do cart\u00E3o.");
var state_29198__$1 = state_29198;
var statearr_29204_29212 = state_29198__$1;
(statearr_29204_29212[(2)] = inst_29194);

(statearr_29204_29212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (5))){
var inst_29196 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29198__$1,inst_29196);
} else {
return null;
}
}
}
}
}
});
return (function() {
var onlypartners$core$submit_$_state_machine__24460__auto__ = null;
var onlypartners$core$submit_$_state_machine__24460__auto____0 = (function (){
var statearr_29205 = [null,null,null,null,null,null,null,null];
(statearr_29205[(0)] = onlypartners$core$submit_$_state_machine__24460__auto__);

(statearr_29205[(1)] = (1));

return statearr_29205;
});
var onlypartners$core$submit_$_state_machine__24460__auto____1 = (function (state_29198){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_29198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e29206){if((e29206 instanceof Object)){
var ex__24463__auto__ = e29206;
var statearr_29207_29213 = state_29198;
(statearr_29207_29213[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29214 = state_29198;
state_29198 = G__29214;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
onlypartners$core$submit_$_state_machine__24460__auto__ = function(state_29198){
switch(arguments.length){
case 0:
return onlypartners$core$submit_$_state_machine__24460__auto____0.call(this);
case 1:
return onlypartners$core$submit_$_state_machine__24460__auto____1.call(this,state_29198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$submit_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$submit_$_state_machine__24460__auto____0;
onlypartners$core$submit_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$submit_$_state_machine__24460__auto____1;
return onlypartners$core$submit_$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_29208 = f__24627__auto__.call(null);
(statearr_29208[(6)] = c__24626__auto__);

return statearr_29208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));

return c__24626__auto__;
});
onlypartners.core.payment_information = (function onlypartners$core$payment_information(p__29216){
var map__29217 = p__29216;
var map__29217__$1 = (((((!((map__29217 == null))))?(((((map__29217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29217):map__29217);
var group = cljs.core.get.call(null,map__29217__$1,new cljs.core.Keyword(null,"group","group",582596132));
var error = cljs.core.get.call(null,map__29217__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-information","main.payment-information",743248647),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.order.order_description,group,(function (p1__29215_SHARP_){
p1__29215_SHARP_.preventDefault();

return onlypartners.router.go.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"plans","plans",75657163));
})], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.card.payment-information__form","form.card.payment-information__form",686881964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),onlypartners.core.submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.payment-information__form__title","h2.payment-information__form__title",1679413475),"Pagamento"], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.payment-information__error","p.payment-information__error",1599315108),error], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.cpf_field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"email","email",1415816706)], null),"E-mail"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#email.field","input#email.field",-861252700),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"fulano@exemplo.com.br"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_owner_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_number_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_expiration_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_security_code_field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Pagar"], null)], null)], null);
});
onlypartners.core.create_subscription = (function onlypartners$core$create_subscription(user){
return alert(JSON.stringify(user));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__29219_SHARP_){
return cljs.core.reset_BANG_.call(null,ref,p1__29219_SHARP_);
})], null),(cljs.core.truth_(cljs.core.deref.call(null,ref))?(function (){
onlypartners.core.append_telegram_widget.call(null,cljs.core.deref.call(null,ref));

return null;
})()
:null)], null);
});
});
onlypartners.core.payment_confirmation = (function onlypartners$core$payment_confirmation(p__29220){
var map__29221 = p__29220;
var map__29221__$1 = (((((!((map__29221 == null))))?(((((map__29221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29221):map__29221);
var group = cljs.core.get.call(null,map__29221__$1,new cljs.core.Keyword(null,"group","group",582596132));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.payment-confirmation","main.payment-confirmation",-1817280467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/success.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Agora basta voc\u00EA acessar com seu Telegram clicando no bot\u00E3o abaixo que te adicionaremos no grupo."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.telegram_login], null)], null);
});
onlypartners.core.app = (function onlypartners$core$app(p__29223){
var map__29224 = p__29223;
var map__29224__$1 = (((((!((map__29224 == null))))?(((((map__29224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29224):map__29224);
var state = map__29224__$1;
var step = cljs.core.get.call(null,map__29224__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var G__29226 = step;
var G__29226__$1 = (((G__29226 instanceof cljs.core.Keyword))?G__29226.fqn:null);
switch (G__29226__$1) {
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
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.app_wrapper], null),document.getElementById("app"));
var c__24626__auto___29254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_29246){
var state_val_29247 = (state_29246[(1)]);
if((state_val_29247 === (1))){
var inst_29228 = [new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Keyword(null,"project-id","project-id",206449307)];
var inst_29229 = ["AIzaSyDdGlT3chqZXptsT82H6jSvLKhvs0FqiME","only-partners"];
var inst_29230 = cljs.core.PersistentHashMap.fromArrays(inst_29228,inst_29229);
var inst_29231 = firemore.firebase.initialize.call(null,inst_29230);
var inst_29232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29233 = [new cljs.core.Keyword(null,"groups","groups",-136896102),"fnNebpIsLJkXBQJhoUBo"];
var inst_29234 = (new cljs.core.PersistentVector(null,2,(5),inst_29232,inst_29233,null));
var inst_29235 = firemore.core.get.call(null,inst_29234);
var state_29246__$1 = (function (){var statearr_29248 = state_29246;
(statearr_29248[(7)] = inst_29231);

return statearr_29248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29246__$1,(2),inst_29235);
} else {
if((state_val_29247 === (2))){
var inst_29237 = (state_29246[(2)]);
var inst_29238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29239 = [new cljs.core.Keyword(null,"groups","groups",-136896102),"fnNebpIsLJkXBQJhoUBo",new cljs.core.Keyword(null,"plans","plans",75657163)];
var inst_29240 = (new cljs.core.PersistentVector(null,3,(5),inst_29238,inst_29239,null));
var inst_29241 = firemore.core.get.call(null,inst_29240);
var state_29246__$1 = (function (){var statearr_29249 = state_29246;
(statearr_29249[(8)] = inst_29237);

return statearr_29249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29246__$1,(3),inst_29241);
} else {
if((state_val_29247 === (3))){
var inst_29237 = (state_29246[(8)]);
var inst_29243 = (state_29246[(2)]);
var inst_29244 = cljs.core.swap_BANG_.call(null,onlypartners.db.db,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),inst_29237,new cljs.core.Keyword(null,"plans","plans",75657163),inst_29243);
var state_29246__$1 = state_29246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29246__$1,inst_29244);
} else {
return null;
}
}
}
});
return (function() {
var onlypartners$core$state_machine__24460__auto__ = null;
var onlypartners$core$state_machine__24460__auto____0 = (function (){
var statearr_29250 = [null,null,null,null,null,null,null,null,null];
(statearr_29250[(0)] = onlypartners$core$state_machine__24460__auto__);

(statearr_29250[(1)] = (1));

return statearr_29250;
});
var onlypartners$core$state_machine__24460__auto____1 = (function (state_29246){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_29246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e29251){if((e29251 instanceof Object)){
var ex__24463__auto__ = e29251;
var statearr_29252_29255 = state_29246;
(statearr_29252_29255[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29256 = state_29246;
state_29246 = G__29256;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
onlypartners$core$state_machine__24460__auto__ = function(state_29246){
switch(arguments.length){
case 0:
return onlypartners$core$state_machine__24460__auto____0.call(this);
case 1:
return onlypartners$core$state_machine__24460__auto____1.call(this,state_29246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$state_machine__24460__auto____0;
onlypartners$core$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$state_machine__24460__auto____1;
return onlypartners$core$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_29253 = f__24627__auto__.call(null);
(statearr_29253[(6)] = c__24626__auto___29254);

return statearr_29253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));

onlypartners.core.on_js_reload = (function onlypartners$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map
