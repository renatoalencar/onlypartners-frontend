// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.components.credit_card');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('onlypartners.util');
goog.require('onlypartners.components.mask');
goog.require('onlypartners.components.validation');
onlypartners.components.credit_card.valid_date_format_QMARK_ = (function onlypartners$components$credit_card$valid_date_format_QMARK_(date){
return cljs.core.boolean$(cljs.core.re_matches(/\d{0,2}\/?\d{0,2}/,date));
});
onlypartners.components.credit_card.format_date = (function onlypartners$components$credit_card$format_date(date){
var vec__26688 = cljs.core.re_matches(/(\d{2})\/?(\d{2})/,date);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26688,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26688,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26688,(2),null);
if(cljs.core.truth_(match)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),(cljs.core.truth_(year)?"/":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
} else {
return date;
}
});
onlypartners.components.credit_card.valid_date_QMARK_ = (function onlypartners$components$credit_card$valid_date_QMARK_(date){
var vec__26691 = cljs.core.re_matches(/(\d{2})\/?(\d{0,2})/,date);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26691,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26691,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26691,(2),null);
var month__$1 = parseInt(month);
var year__$1 = parseInt(year);
var and__4115__auto__ = match;
if(cljs.core.truth_(and__4115__auto__)){
return (((month__$1 >= (1))) && ((month__$1 <= (12))) && ((year__$1 > (0))));
} else {
return and__4115__auto__;
}
});
onlypartners.components.credit_card.card_expiration_field = (function onlypartners$components$credit_card$card_expiration_field(){
var vec__26695 = onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$2(onlypartners.components.credit_card.valid_date_format_QMARK_,onlypartners.components.credit_card.format_date);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26695,(0),null);
var set_date_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26695,(1),null);
var vec__26698 = onlypartners.components.validation.use_validation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expira\u00E7\u00E3o \u00E9 obrigat\u00F3rio",cljs.core.empty_QMARK_,"Data \u00E9 inv\u00E1lida",cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,onlypartners.components.credit_card.valid_date_QMARK_)], 0));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26698,(0),null);
var validate_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26698,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$expiration_DASH_date], null),"Expira\u00E7\u00E3o"], null),(cljs.core.truth_((error.cljs$core$IFn$_invoke$arity$0 ? error.cljs$core$IFn$_invoke$arity$0() : error.call(null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$field__error,(error.cljs$core$IFn$_invoke$arity$0 ? error.cljs$core$IFn$_invoke$arity$0() : error.call(null))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_expiration_DASH_date$field,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$class,onlypartners.util.classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$field_DASH__DASH_invalid,error], 0)),cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$name,cljs.core.cst$kw$expiration_DASH_date,cljs.core.cst$kw$value,(date.cljs$core$IFn$_invoke$arity$0 ? date.cljs$core$IFn$_invoke$arity$0() : date.call(null)),cljs.core.cst$kw$on_DASH_change,(function (p1__26694_SHARP_){
var G__26701 = p1__26694_SHARP_.target.value;
return (set_date_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_date_BANG_.cljs$core$IFn$_invoke$arity$1(G__26701) : set_date_BANG_.call(null,G__26701));
}),cljs.core.cst$kw$on_DASH_blur,(function (){
var G__26702 = (date.cljs$core$IFn$_invoke$arity$0 ? date.cljs$core$IFn$_invoke$arity$0() : date.call(null));
return (validate_BANG_.cljs$core$IFn$_invoke$arity$1 ? validate_BANG_.cljs$core$IFn$_invoke$arity$1(G__26702) : validate_BANG_.call(null,G__26702));
}),cljs.core.cst$kw$inputMode,cljs.core.cst$kw$numeric,cljs.core.cst$kw$placeholder,"DD / AA"], null)], null),(function (){var vec__26703 = cljs.core.re_matches(/(\d{2})\/(\d{2})/,(date.cljs$core$IFn$_invoke$arity$0 ? date.cljs$core$IFn$_invoke$arity$0() : date.call(null)));
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26703,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26703,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26703,(2),null);
if((!((match == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$hidden,cljs.core.cst$kw$data_DASH_checkout,cljs.core.cst$kw$cardExpirationMonth,cljs.core.cst$kw$value,month], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$hidden,cljs.core.cst$kw$data_DASH_checkout,cljs.core.cst$kw$cardExpirationYear,cljs.core.cst$kw$value,year], null)], null)], null);
} else {
return null;
}
})()], null);
});
});
onlypartners.components.credit_card.card_owner_field = (function onlypartners$components$credit_card$card_owner_field(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$name], null),"Nome do Titular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_name$field,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$data_DASH_checkout,cljs.core.cst$kw$cardholderName,cljs.core.cst$kw$placeholder,"JOAQUIM M M ASSIS"], null)], null)], null);
});
onlypartners.components.credit_card.card_number_pattern = (function (){var number = "(\\d{0,4})";
var space = "\\s?";
return cljs.core.re_pattern(["(?:",number,space,"(?:",number,space,"(?:",number,space,"(?:",number,")?",")?",")?",")?"].join(''));
})();
onlypartners.components.credit_card.valid_card_number_QMARK_ = (function onlypartners$components$credit_card$valid_card_number_QMARK_(card_number){
return cljs.core.boolean$(cljs.core.re_matches(/(\d(\d(\d(\d\s?)?)?)?){0,4}/,card_number));
});
onlypartners.components.credit_card.format_card_number = (function onlypartners$components$credit_card$format_card_number(card_number){
var vec__26706 = cljs.core.re_matches(onlypartners.components.credit_card.card_number_pattern,card_number);
var seq__26707 = cljs.core.seq(vec__26706);
var first__26708 = cljs.core.first(seq__26707);
var seq__26707__$1 = cljs.core.next(seq__26707);
var match = first__26708;
var parts = seq__26707__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,parts));
});
onlypartners.components.credit_card.card_number_field = (function onlypartners$components$credit_card$card_number_field(){
var vec__26710 = onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$2(onlypartners.components.credit_card.valid_card_number_QMARK_,onlypartners.components.credit_card.format_card_number);
var card_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26710,(0),null);
var set_card_number_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26710,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$card_DASH_number], null),"N\u00FAmero do cart\u00E3o"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_card_DASH_number$field,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$data_DASH_checkout,cljs.core.cst$kw$cardNumber,cljs.core.cst$kw$value,(card_number.cljs$core$IFn$_invoke$arity$0 ? card_number.cljs$core$IFn$_invoke$arity$0() : card_number.call(null)),cljs.core.cst$kw$on_DASH_change,(function (p1__26709_SHARP_){
var G__26713 = p1__26709_SHARP_.target.value;
return (set_card_number_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_card_number_BANG_.cljs$core$IFn$_invoke$arity$1(G__26713) : set_card_number_BANG_.call(null,G__26713));
}),cljs.core.cst$kw$inputMode,cljs.core.cst$kw$numeric,cljs.core.cst$kw$placeholder,"1234 5678 9012 3456"], null)], null)], null);
});
});
onlypartners.components.credit_card.card_security_code_field = (function onlypartners$components$credit_card$card_security_code_field(){
var vec__26715 = onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,/^\d{0,3}$/));
var security_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26715,(0),null);
var set_security_code_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26715,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$verification_DASH_code], null),"C\u00F3digo de verifica\u00E7\u00E3o"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_verification_DASH_code$field,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$data_DASH_checkout,cljs.core.cst$kw$securityCode,cljs.core.cst$kw$value,(security_code.cljs$core$IFn$_invoke$arity$0 ? security_code.cljs$core$IFn$_invoke$arity$0() : security_code.call(null)),cljs.core.cst$kw$on_DASH_change,(function (p1__26714_SHARP_){
var G__26718 = p1__26714_SHARP_.target.value;
return (set_security_code_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_security_code_BANG_.cljs$core$IFn$_invoke$arity$1(G__26718) : set_security_code_BANG_.call(null,G__26718));
}),cljs.core.cst$kw$inputMode,cljs.core.cst$kw$numeric,cljs.core.cst$kw$placeholder,"000"], null)], null)], null);
});
});
