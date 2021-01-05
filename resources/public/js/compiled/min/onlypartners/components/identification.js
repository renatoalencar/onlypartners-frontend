// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.components.identification');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('onlypartners.util');
goog.require('onlypartners.components.mask');
goog.require('onlypartners.components.validation');
onlypartners.components.identification.cpf_format = (function (){var triad = "(\\d{3})";
var digit = "(\\d{2})";
var dot = "\\.?";
var dash = "-?";
return cljs.core.re_pattern(["(?:",triad,dot,"(?:",triad,dot,"(?:",triad,dash,"(?:",digit,")?",")?",")?",")?"].join(''));
})();
onlypartners.components.identification.format_cpf = (function onlypartners$components$identification$format_cpf(cpf){
var vec__26732 = cljs.core.re_matches(onlypartners.components.identification.cpf_format,cpf);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(1),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(3),null);
var digit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(4),null);
var formatted = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1),(cljs.core.truth_(p2)?".":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2),(cljs.core.truth_(p3)?".":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3),(cljs.core.truth_(digit)?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(digit)].join('');
if(cljs.core.truth_(match)){
return formatted;
} else {
return cpf;
}
});
onlypartners.components.identification.valid_cpf_format_QMARK_ = (function onlypartners$components$identification$valid_cpf_format_QMARK_(cpf){
return (!((cljs.core.re_matches(/[\d\.-]{0,14}/,cpf) == null)));
});
onlypartners.components.identification.valid_cpf_QMARK_ = (function onlypartners$components$identification$valid_cpf_QMARK_(cpf){
var digits = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.re_seq(/\d/,cpf));
var get_digit = (function (p1__26735_SHARP_){
return ((11) - cljs.core.mod(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__26735_SHARP_,digits),cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),(p1__26735_SHARP_ + (2)))))),(11)));
});
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(get_digit((9)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(digits,(9)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(get_digit((10)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(digits,(10)))));
});
onlypartners.components.identification.cpf_field = (function onlypartners$components$identification$cpf_field(){
var vec__26737 = onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$2(onlypartners.components.identification.valid_cpf_format_QMARK_,onlypartners.components.identification.format_cpf);
var cpf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(0),null);
var set_cpf_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(1),null);
var vec__26740 = onlypartners.components.validation.use_validation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CPF \u00E9 obrigat\u00F3rio",cljs.core.empty_QMARK_,"CPF n\u00E3o \u00E9 v\u00E1lido",cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,onlypartners.components.identification.valid_cpf_QMARK_)], 0));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(0),null);
var validate_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(1),null);
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$identification], null),"CPF"], null),(cljs.core.truth_((error.cljs$core$IFn$_invoke$arity$0 ? error.cljs$core$IFn$_invoke$arity$0() : error.call(null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$field__error,(error.cljs$core$IFn$_invoke$arity$0 ? error.cljs$core$IFn$_invoke$arity$0() : error.call(null))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_identification$field,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$class,onlypartners.util.classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$field_DASH__DASH_invalid,(function (){
return (!(((error.cljs$core$IFn$_invoke$arity$0 ? error.cljs$core$IFn$_invoke$arity$0() : error.call(null)) == null)));
})], 0)),cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$data_DASH_checkout,cljs.core.cst$kw$docNumber,cljs.core.cst$kw$value,(cpf.cljs$core$IFn$_invoke$arity$0 ? cpf.cljs$core$IFn$_invoke$arity$0() : cpf.call(null)),cljs.core.cst$kw$on_DASH_change,(function (p1__26736_SHARP_){
var G__26743 = p1__26736_SHARP_.target.value;
return (set_cpf_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_cpf_BANG_.cljs$core$IFn$_invoke$arity$1(G__26743) : set_cpf_BANG_.call(null,G__26743));
}),cljs.core.cst$kw$on_DASH_blur,(function (){
var G__26744 = (cpf.cljs$core$IFn$_invoke$arity$0 ? cpf.cljs$core$IFn$_invoke$arity$0() : cpf.call(null));
return (validate_BANG_.cljs$core$IFn$_invoke$arity$1 ? validate_BANG_.cljs$core$IFn$_invoke$arity$1(G__26744) : validate_BANG_.call(null,G__26744));
}),cljs.core.cst$kw$placeholder,"123.456.789-00",cljs.core.cst$kw$inputMode,cljs.core.cst$kw$numeric], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$hidden,cljs.core.cst$kw$data_DASH_checkout,cljs.core.cst$kw$docType,cljs.core.cst$kw$value,cljs.core.cst$kw$CPF], null)], null)], null);
});
});
