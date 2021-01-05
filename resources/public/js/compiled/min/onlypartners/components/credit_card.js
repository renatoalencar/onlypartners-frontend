// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.components.credit_card');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('onlypartners.util');
goog.require('onlypartners.components.mask');
goog.require('onlypartners.components.validation');
onlypartners.components.credit_card.valid_date_format_QMARK_ = (function onlypartners$components$credit_card$valid_date_format_QMARK_(date){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/\d{0,2}\/?\d{0,2}/,date));
});
onlypartners.components.credit_card.format_date = (function onlypartners$components$credit_card$format_date(date){
var vec__23156 = cljs.core.re_matches.call(null,/(\d{2})\/?(\d{2})/,date);
var match = cljs.core.nth.call(null,vec__23156,(0),null);
var month = cljs.core.nth.call(null,vec__23156,(1),null);
var year = cljs.core.nth.call(null,vec__23156,(2),null);
if(cljs.core.truth_(match)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),(cljs.core.truth_(year)?"/":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
} else {
return date;
}
});
onlypartners.components.credit_card.valid_date_QMARK_ = (function onlypartners$components$credit_card$valid_date_QMARK_(date){
var vec__23159 = cljs.core.re_matches.call(null,/(\d{2})\/?(\d{0,2})/,date);
var match = cljs.core.nth.call(null,vec__23159,(0),null);
var month = cljs.core.nth.call(null,vec__23159,(1),null);
var year = cljs.core.nth.call(null,vec__23159,(2),null);
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
var vec__23163 = onlypartners.components.mask.use_mask.call(null,onlypartners.components.credit_card.valid_date_format_QMARK_,onlypartners.components.credit_card.format_date);
var date = cljs.core.nth.call(null,vec__23163,(0),null);
var set_date_BANG_ = cljs.core.nth.call(null,vec__23163,(1),null);
var vec__23166 = onlypartners.components.validation.use_validation.call(null,"Expira\u00E7\u00E3o \u00E9 obrigat\u00F3rio",cljs.core.empty_QMARK_,"Data \u00E9 inv\u00E1lida",cljs.core.comp.call(null,cljs.core.not,onlypartners.components.credit_card.valid_date_QMARK_));
var error = cljs.core.nth.call(null,vec__23166,(0),null);
var validate_BANG_ = cljs.core.nth.call(null,vec__23166,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"expiration-date","expiration-date",-1266973669)], null),"Expira\u00E7\u00E3o"], null),(cljs.core.truth_(error.call(null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.field__error","span.field__error",293560684),error.call(null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#expiration-date.field","input#expiration-date.field",-2021117081),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"field--invalid","field--invalid",-1287614816),error),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"expiration-date","expiration-date",-1266973669),new cljs.core.Keyword(null,"value","value",305978217),date.call(null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23162_SHARP_){
return set_date_BANG_.call(null,p1__23162_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return validate_BANG_.call(null,date.call(null));
}),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"DD / AA"], null)], null),(function (){var vec__23169 = cljs.core.re_matches.call(null,/(\d{2})\/(\d{2})/,date.call(null));
var match = cljs.core.nth.call(null,vec__23169,(0),null);
var month = cljs.core.nth.call(null,vec__23169,(1),null);
var year = cljs.core.nth.call(null,vec__23169,(2),null);
if((!((match == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"data-checkout","data-checkout",1904349121),new cljs.core.Keyword(null,"cardExpirationMonth","cardExpirationMonth",-657220400),new cljs.core.Keyword(null,"value","value",305978217),month], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"data-checkout","data-checkout",1904349121),new cljs.core.Keyword(null,"cardExpirationYear","cardExpirationYear",-1752837533),new cljs.core.Keyword(null,"value","value",305978217),year], null)], null)], null);
} else {
return null;
}
})()], null);
});
});
onlypartners.components.credit_card.card_owner_field = (function onlypartners$components$credit_card$card_owner_field(){
var owner = reagent.core.atom.call(null,"");
var vec__23173 = onlypartners.components.validation.use_validation.call(null,"Nome \u00E9 obrigat\u00F3rio",cljs.core.empty_QMARK_);
var error = cljs.core.nth.call(null,vec__23173,(0),null);
var validate_BANG_ = cljs.core.nth.call(null,vec__23173,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"name","name",1843675177)], null),"Nome do Titular"], null),(cljs.core.truth_(error.call(null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.field__error","span.field__error",293560684),error.call(null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#name.field","input#name.field",51792279),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"field--invalid","field--invalid",-1287614816),(function (){
return (!((error.call(null) == null)));
})),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"data-checkout","data-checkout",1904349121),new cljs.core.Keyword(null,"cardholderName","cardholderName",1300897754),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,owner),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23172_SHARP_){
return cljs.core.reset_BANG_.call(null,owner,p1__23172_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return validate_BANG_.call(null,cljs.core.deref.call(null,owner));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"JOAQUIM M M ASSIS"], null)], null)], null);
});
});
onlypartners.components.credit_card.card_number_pattern = (function (){var number = "(\\d{0,4})";
var space = "\\s?";
return cljs.core.re_pattern.call(null,["(?:",number,space,"(?:",number,space,"(?:",number,space,"(?:",number,")?",")?",")?",")?"].join(''));
})();
onlypartners.components.credit_card.valid_card_number_QMARK_ = (function onlypartners$components$credit_card$valid_card_number_QMARK_(card_number){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(\d(\d(\d(\d\s?)?)?)?){0,4}/,card_number));
});
onlypartners.components.credit_card.format_card_number = (function onlypartners$components$credit_card$format_card_number(card_number){
var vec__23176 = cljs.core.re_matches.call(null,onlypartners.components.credit_card.card_number_pattern,card_number);
var seq__23177 = cljs.core.seq.call(null,vec__23176);
var first__23178 = cljs.core.first.call(null,seq__23177);
var seq__23177__$1 = cljs.core.next.call(null,seq__23177);
var match = first__23178;
var parts = seq__23177__$1;
return clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.boolean$,parts));
});
onlypartners.components.credit_card.card_number_field = (function onlypartners$components$credit_card$card_number_field(){
var vec__23180 = onlypartners.components.mask.use_mask.call(null,onlypartners.components.credit_card.valid_card_number_QMARK_,onlypartners.components.credit_card.format_card_number);
var card_number = cljs.core.nth.call(null,vec__23180,(0),null);
var set_card_number_BANG_ = cljs.core.nth.call(null,vec__23180,(1),null);
var vec__23183 = onlypartners.components.validation.use_validation.call(null,"N\u00FAmero do cart\u00E3o \u00E9 obrigat\u00F3rio",cljs.core.empty_QMARK_);
var error = cljs.core.nth.call(null,vec__23183,(0),null);
var validate_BANG_ = cljs.core.nth.call(null,vec__23183,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"card-number","card-number",2071197827)], null),"N\u00FAmero do cart\u00E3o"], null),(cljs.core.truth_(error.call(null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.field__error","span.field__error",293560684),error.call(null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#card-number.field","input#card-number.field",-59835782),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"field--invalid","field--invalid",-1287614816),(function (){
return (!((error.call(null) == null)));
})),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"data-checkout","data-checkout",1904349121),new cljs.core.Keyword(null,"cardNumber","cardNumber",243741922),new cljs.core.Keyword(null,"value","value",305978217),card_number.call(null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23179_SHARP_){
return set_card_number_BANG_.call(null,p1__23179_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return validate_BANG_.call(null,card_number.call(null));
}),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"1234 5678 9012 3456"], null)], null)], null);
});
});
onlypartners.components.credit_card.card_security_code_field = (function onlypartners$components$credit_card$card_security_code_field(){
var vec__23187 = onlypartners.components.mask.use_mask.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/^\d{0,3}$/));
var security_code = cljs.core.nth.call(null,vec__23187,(0),null);
var set_security_code_BANG_ = cljs.core.nth.call(null,vec__23187,(1),null);
var vec__23190 = onlypartners.components.validation.use_validation.call(null,"C\u00F3digo \u00E9 obrigat\u00F3rio",cljs.core.empty_QMARK_);
var error = cljs.core.nth.call(null,vec__23190,(0),null);
var validate_BANG_ = cljs.core.nth.call(null,vec__23190,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"verification-code","verification-code",-1045306756)], null),"C\u00F3digo de verifica\u00E7\u00E3o"], null),(cljs.core.truth_(error.call(null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.field__error","span.field__error",293560684),error.call(null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#verification-code.field","input#verification-code.field",-408235432),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"field--invalid","field--invalid",-1287614816),(function (){
return (!((error.call(null) == null)));
})),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"data-checkout","data-checkout",1904349121),new cljs.core.Keyword(null,"securityCode","securityCode",-1098270131),new cljs.core.Keyword(null,"value","value",305978217),security_code.call(null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23186_SHARP_){
return set_security_code_BANG_.call(null,p1__23186_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return validate_BANG_.call(null,security_code.call(null));
}),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"000"], null)], null)], null);
});
});

//# sourceMappingURL=credit_card.js.map
