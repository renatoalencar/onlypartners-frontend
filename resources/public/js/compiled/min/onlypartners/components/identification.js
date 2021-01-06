// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.components.identification');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('onlypartners.util');
goog.require('onlypartners.components.mask');
goog.require('onlypartners.components.validation');
onlypartners.components.identification.cpf_format = (function (){var triad = "(\\d{3})";
var digit = "(\\d{2})";
var dot = "\\.?";
var dash = "-?";
return cljs.core.re_pattern.call(null,["(?:",triad,dot,"(?:",triad,dot,"(?:",triad,dash,"(?:",digit,")?",")?",")?",")?"].join(''));
})();
onlypartners.components.identification.format_cpf = (function onlypartners$components$identification$format_cpf(cpf){
var vec__23213 = cljs.core.re_matches.call(null,onlypartners.components.identification.cpf_format,cpf);
var match = cljs.core.nth.call(null,vec__23213,(0),null);
var p1 = cljs.core.nth.call(null,vec__23213,(1),null);
var p2 = cljs.core.nth.call(null,vec__23213,(2),null);
var p3 = cljs.core.nth.call(null,vec__23213,(3),null);
var digit = cljs.core.nth.call(null,vec__23213,(4),null);
var formatted = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1),(cljs.core.truth_(p2)?".":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2),(cljs.core.truth_(p3)?".":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3),(cljs.core.truth_(digit)?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(digit)].join('');
if(cljs.core.truth_(match)){
return formatted;
} else {
return cpf;
}
});
onlypartners.components.identification.valid_cpf_format_QMARK_ = (function onlypartners$components$identification$valid_cpf_format_QMARK_(cpf){
return (!((cljs.core.re_matches.call(null,/[\d\.-]{0,14}/,cpf) == null)));
});
onlypartners.components.identification.valid_cpf_QMARK_ = (function onlypartners$components$identification$valid_cpf_QMARK_(cpf){
var digits = cljs.core.mapv.call(null,parseInt,cljs.core.re_seq.call(null,/\d/,cpf));
var get_digit = (function (p1__23216_SHARP_){
return ((11) - cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,cljs.core.take.call(null,p1__23216_SHARP_,digits),cljs.core.reverse.call(null,cljs.core.range.call(null,(2),(p1__23216_SHARP_ + (2)))))),(11)));
});
return ((cljs.core._EQ_.call(null,get_digit.call(null,(9)),cljs.core.get.call(null,digits,(9)))) && (cljs.core._EQ_.call(null,get_digit.call(null,(10)),cljs.core.get.call(null,digits,(10)))));
});
onlypartners.components.identification.cpf_field = (function onlypartners$components$identification$cpf_field(){
var vec__23218 = onlypartners.components.mask.use_mask.call(null,onlypartners.components.identification.valid_cpf_format_QMARK_,onlypartners.components.identification.format_cpf);
var cpf = cljs.core.nth.call(null,vec__23218,(0),null);
var set_cpf_BANG_ = cljs.core.nth.call(null,vec__23218,(1),null);
var vec__23221 = onlypartners.components.validation.use_validation.call(null,"CPF \u00E9 obrigat\u00F3rio",cljs.core.empty_QMARK_,"CPF n\u00E3o \u00E9 v\u00E1lido",cljs.core.comp.call(null,cljs.core.not,onlypartners.components.identification.valid_cpf_QMARK_));
var error = cljs.core.nth.call(null,vec__23221,(0),null);
var validate_BANG_ = cljs.core.nth.call(null,vec__23221,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"identification","identification",-1342325264)], null),"CPF"], null),(cljs.core.truth_(error.call(null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.field__error","span.field__error",293560684),error.call(null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#identification.field","input#identification.field",-1287054681),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"field--invalid","field--invalid",-1287614816),(function (){
return (!((error.call(null) == null)));
})),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"data-checkout","data-checkout",1904349121),new cljs.core.Keyword(null,"docNumber","docNumber",-1719173346),new cljs.core.Keyword(null,"value","value",305978217),cpf.call(null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23217_SHARP_){
return set_cpf_BANG_.call(null,p1__23217_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return validate_BANG_.call(null,cpf.call(null));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"123.456.789-00",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"data-checkout","data-checkout",1904349121),new cljs.core.Keyword(null,"docType","docType",602900159),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"CPF","CPF",199691873)], null)], null)], null);
});
});
onlypartners.components.identification.email_field = (function onlypartners$components$identification$email_field(){
var email = reagent.core.atom.call(null,"");
var vec__23225 = onlypartners.components.validation.use_validation.call(null,"E-mail \u00E9 obrigat\u00F3rio",cljs.core.empty_QMARK_);
var error = cljs.core.nth.call(null,vec__23225,(0),null);
var validate_BANG_ = cljs.core.nth.call(null,vec__23225,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"email","email",1415816706)], null),"E-mail"], null),(cljs.core.truth_(error.call(null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.field__error","span.field__error",293560684),error.call(null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#email.field","input#email.field",-861252700),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),onlypartners.util.classes.call(null,new cljs.core.Keyword(null,"field--invalid","field--invalid",-1287614816),(function (){
return (!((error.call(null) == null)));
})),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,email),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23224_SHARP_){
return cljs.core.reset_BANG_.call(null,email,p1__23224_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return validate_BANG_.call(null,cljs.core.deref.call(null,email));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"fulano@exemplo.com.br"], null)], null)], null);
});
});

//# sourceMappingURL=identification.js.map
