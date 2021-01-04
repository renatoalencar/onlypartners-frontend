// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.components.mask');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
onlypartners.components.mask.use_mask = (function onlypartners$components$mask$use_mask(var_args){
var G__26674 = arguments.length;
switch (G__26674) {
case 2:
return onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$2 = (function (valid_QMARK_,format){
var value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.deref(value);
}),(function (p1__26672_SHARP_){
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__26672_SHARP_) : valid_QMARK_.call(null,p1__26672_SHARP_)))){
return cljs.core.reset_BANG_(value,(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(p1__26672_SHARP_) : format.call(null,p1__26672_SHARP_)));
} else {
return null;
}
})], null);
}));

(onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$1 = (function (valid_QMARK_){
return onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$2(valid_QMARK_,cljs.core.identity);
}));

(onlypartners.components.mask.use_mask.cljs$lang$maxFixedArity = 2);

