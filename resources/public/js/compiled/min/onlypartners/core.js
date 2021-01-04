// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
cljs.core.enable_console_print_BANG_();
onlypartners.core.plan_card = (function onlypartners$core$plan_card(p__30399){
var map__30400 = p__30399;
var map__30400__$1 = (((((!((map__30400 == null))))?(((((map__30400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30400):map__30400);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30400__$1,cljs.core.cst$kw$id);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30400__$1,cljs.core.cst$kw$title);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30400__$1,cljs.core.cst$kw$description);
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30400__$1,cljs.core.cst$kw$price);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$card$plan_DASH_card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,id,cljs.core.cst$kw$class,onlypartners.util.classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$plan_DASH_card_DASH__DASH_selected,(function (){
return onlypartners.db.selected_QMARK_(id);
})], 0)),cljs.core.cst$kw$on_DASH_click,(function (){
return onlypartners.db.select_plan(id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b$plan_DASH_card__price,onlypartners.util.format_currency(price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$plan_DASH_card__title,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$plan_DASH_card__description,description], null)], null);
});
onlypartners.core.plan_selection = (function onlypartners$core$plan_selection(p__30402){
var map__30403 = p__30402;
var map__30403__$1 = (((((!((map__30403 == null))))?(((((map__30403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30403):map__30403);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30403__$1,cljs.core.cst$kw$group);
var plans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30403__$1,cljs.core.cst$kw$plans);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main$plan_DASH_selection,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$plan_DASH_selection__content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$plan_DASH_list,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(onlypartners.core.plan_card,plans))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$plan_DASH_selection__subscribe_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__30405 = cljs.core.cst$kw$step;
var G__30406 = cljs.core.cst$kw$payment;
return (onlypartners.router.go.cljs$core$IFn$_invoke$arity$2 ? onlypartners.router.go.cljs$core$IFn$_invoke$arity$2(G__30405,G__30406) : onlypartners.router.go.call(null,G__30405,G__30406));
})], null),"Assinar"], null)], null);
});
onlypartners.payment.set_public_key("TEST-21ee96e7-5cab-40a3-959c-7da1a0adbd2a");
onlypartners.core.submit = (function onlypartners$core$submit(event){
event.preventDefault();

event.persist();

var c__28061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_30423){
var state_val_30424 = (state_30423[(1)]);
if((state_val_30424 === (1))){
var inst_30410 = event.target;
var inst_30411 = onlypartners.payment.create_token(inst_30410);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30423__$1,(2),inst_30411);
} else {
if((state_val_30424 === (2))){
var inst_30413 = (state_30423[(2)]);
var inst_30414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30413,(0),null);
var inst_30415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30413,(1),null);
var state_30423__$1 = (function (){var statearr_30425 = state_30423;
(statearr_30425[(7)] = inst_30415);

return statearr_30425;
})();
if(cljs.core.truth_(inst_30414)){
var statearr_30426_30436 = state_30423__$1;
(statearr_30426_30436[(1)] = (3));

} else {
var statearr_30427_30437 = state_30423__$1;
(statearr_30427_30437[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30424 === (3))){
var inst_30417 = (function (){var G__30428 = cljs.core.cst$kw$step;
var G__30429 = cljs.core.cst$kw$confirmation;
return (onlypartners.router.go.cljs$core$IFn$_invoke$arity$2 ? onlypartners.router.go.cljs$core$IFn$_invoke$arity$2(G__30428,G__30429) : onlypartners.router.go.call(null,G__30428,G__30429));
})();
var state_30423__$1 = state_30423;
var statearr_30430_30438 = state_30423__$1;
(statearr_30430_30438[(2)] = inst_30417);

(statearr_30430_30438[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30424 === (4))){
var inst_30419 = onlypartners.db.report_error("Verifique os dados do cart\u00E3o.");
var state_30423__$1 = state_30423;
var statearr_30431_30439 = state_30423__$1;
(statearr_30431_30439[(2)] = inst_30419);

(statearr_30431_30439[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30424 === (5))){
var inst_30421 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30423__$1,inst_30421);
} else {
return null;
}
}
}
}
}
});
return (function() {
var onlypartners$core$submit_$_state_machine__27990__auto__ = null;
var onlypartners$core$submit_$_state_machine__27990__auto____0 = (function (){
var statearr_30432 = [null,null,null,null,null,null,null,null];
(statearr_30432[(0)] = onlypartners$core$submit_$_state_machine__27990__auto__);

(statearr_30432[(1)] = (1));

return statearr_30432;
});
var onlypartners$core$submit_$_state_machine__27990__auto____1 = (function (state_30423){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_30423);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e30433){if((e30433 instanceof Object)){
var ex__27993__auto__ = e30433;
var statearr_30434_30440 = state_30423;
(statearr_30434_30440[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30423);

return cljs.core.cst$kw$recur;
} else {
throw e30433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__30441 = state_30423;
state_30423 = G__30441;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
onlypartners$core$submit_$_state_machine__27990__auto__ = function(state_30423){
switch(arguments.length){
case 0:
return onlypartners$core$submit_$_state_machine__27990__auto____0.call(this);
case 1:
return onlypartners$core$submit_$_state_machine__27990__auto____1.call(this,state_30423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$submit_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$submit_$_state_machine__27990__auto____0;
onlypartners$core$submit_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$submit_$_state_machine__27990__auto____1;
return onlypartners$core$submit_$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_30435 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_30435[(6)] = c__28061__auto__);

return statearr_30435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

return c__28061__auto__;
});
onlypartners.core.payment_information = (function onlypartners$core$payment_information(p__30443){
var map__30444 = p__30443;
var map__30444__$1 = (((((!((map__30444 == null))))?(((((map__30444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30444):map__30444);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30444__$1,cljs.core.cst$kw$group);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30444__$1,cljs.core.cst$kw$error);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main$payment_DASH_information,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.order.order_description,group,(function (p1__30442_SHARP_){
p1__30442_SHARP_.preventDefault();

var G__30446 = cljs.core.cst$kw$step;
var G__30447 = cljs.core.cst$kw$plans;
return (onlypartners.router.go.cljs$core$IFn$_invoke$arity$2 ? onlypartners.router.go.cljs$core$IFn$_invoke$arity$2(G__30446,G__30447) : onlypartners.router.go.call(null,G__30446,G__30447));
})], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$card$payment_DASH_information__form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,onlypartners.core.submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$payment_DASH_information__form__title,"Pagamento"], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$payment_DASH_information__error,error], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.identification.cpf_field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$email], null),"E-mail"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_email$field,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$email,cljs.core.cst$kw$name,cljs.core.cst$kw$email,cljs.core.cst$kw$placeholder,"fulano@exemplo.com.br"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_owner_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_number_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_expiration_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.credit_card.card_security_code_field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$submit], null),"Pagar"], null)], null)], null);
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
var ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,(function (p1__30448_SHARP_){
return cljs.core.reset_BANG_(ref,p1__30448_SHARP_);
})], null),(cljs.core.truth_(cljs.core.deref(ref))?(function (){
onlypartners.core.append_telegram_widget(cljs.core.deref(ref));

return null;
})()
:null)], null);
});
});
onlypartners.core.payment_confirmation = (function onlypartners$core$payment_confirmation(p__30449){
var map__30450 = p__30449;
var map__30450__$1 = (((((!((map__30450 == null))))?(((((map__30450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30450):map__30450);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30450__$1,cljs.core.cst$kw$group);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main$payment_DASH_confirmation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"/img/success.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Agora basta voc\u00EA acessar com seu Telegram clicando no bot\u00E3o abaixo que te adicionaremos no grupo."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.telegram_login], null)], null);
});
onlypartners.core.app = (function onlypartners$core$app(p__30452){
var map__30453 = p__30452;
var map__30453__$1 = (((((!((map__30453 == null))))?(((((map__30453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30453):map__30453);
var state = map__30453__$1;
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30453__$1,cljs.core.cst$kw$step);
var G__30455 = step;
var G__30455__$1 = (((G__30455 instanceof cljs.core.Keyword))?G__30455.fqn:null);
switch (G__30455__$1) {
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
onlypartners.core.app_wrapper = onlypartners.util.attach(onlypartners.util.attach(onlypartners.core.app,onlypartners.router.state),onlypartners.db.db);
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.core.app_wrapper], null),document.getElementById("app"));
var c__28061__auto___30483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_30475){
var state_val_30476 = (state_30475[(1)]);
if((state_val_30476 === (1))){
var inst_30457 = [cljs.core.cst$kw$api_DASH_key,cljs.core.cst$kw$project_DASH_id];
var inst_30458 = ["AIzaSyDdGlT3chqZXptsT82H6jSvLKhvs0FqiME","only-partners"];
var inst_30459 = cljs.core.PersistentHashMap.fromArrays(inst_30457,inst_30458);
var inst_30460 = firemore.firebase.initialize.cljs$core$IFn$_invoke$arity$1(inst_30459);
var inst_30461 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30462 = [cljs.core.cst$kw$groups,"fnNebpIsLJkXBQJhoUBo"];
var inst_30463 = (new cljs.core.PersistentVector(null,2,(5),inst_30461,inst_30462,null));
var inst_30464 = firemore.core.get(inst_30463);
var state_30475__$1 = (function (){var statearr_30477 = state_30475;
(statearr_30477[(7)] = inst_30460);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30475__$1,(2),inst_30464);
} else {
if((state_val_30476 === (2))){
var inst_30466 = (state_30475[(2)]);
var inst_30467 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30468 = [cljs.core.cst$kw$groups,"fnNebpIsLJkXBQJhoUBo",cljs.core.cst$kw$plans];
var inst_30469 = (new cljs.core.PersistentVector(null,3,(5),inst_30467,inst_30468,null));
var inst_30470 = firemore.core.get(inst_30469);
var state_30475__$1 = (function (){var statearr_30478 = state_30475;
(statearr_30478[(8)] = inst_30466);

return statearr_30478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30475__$1,(3),inst_30470);
} else {
if((state_val_30476 === (3))){
var inst_30466 = (state_30475[(8)]);
var inst_30472 = (state_30475[(2)]);
var inst_30473 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(onlypartners.db.db,cljs.core.assoc,cljs.core.cst$kw$group,inst_30466,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$plans,inst_30472], 0));
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30475__$1,inst_30473);
} else {
return null;
}
}
}
});
return (function() {
var onlypartners$core$state_machine__27990__auto__ = null;
var onlypartners$core$state_machine__27990__auto____0 = (function (){
var statearr_30479 = [null,null,null,null,null,null,null,null,null];
(statearr_30479[(0)] = onlypartners$core$state_machine__27990__auto__);

(statearr_30479[(1)] = (1));

return statearr_30479;
});
var onlypartners$core$state_machine__27990__auto____1 = (function (state_30475){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_30475);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e30480){if((e30480 instanceof Object)){
var ex__27993__auto__ = e30480;
var statearr_30481_30484 = state_30475;
(statearr_30481_30484[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30475);

return cljs.core.cst$kw$recur;
} else {
throw e30480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__30485 = state_30475;
state_30475 = G__30485;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
onlypartners$core$state_machine__27990__auto__ = function(state_30475){
switch(arguments.length){
case 0:
return onlypartners$core$state_machine__27990__auto____0.call(this);
case 1:
return onlypartners$core$state_machine__27990__auto____1.call(this,state_30475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onlypartners$core$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = onlypartners$core$state_machine__27990__auto____0;
onlypartners$core$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = onlypartners$core$state_machine__27990__auto____1;
return onlypartners$core$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_30482 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_30482[(6)] = c__28061__auto___30483);

return statearr_30482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

onlypartners.core.on_js_reload = (function onlypartners$core$on_js_reload(){
return null;
});
