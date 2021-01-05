// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.components.mask');
goog.require('cljs.core');
goog.require('reagent.core');
onlypartners.components.mask.use_mask = (function onlypartners$components$mask$use_mask(var_args){
var G__22956 = arguments.length;
switch (G__22956) {
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
var value = reagent.core.atom.call(null,"");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.deref.call(null,value);
}),(function (p1__22954_SHARP_){
if(cljs.core.truth_(valid_QMARK_.call(null,p1__22954_SHARP_))){
return cljs.core.reset_BANG_.call(null,value,format.call(null,p1__22954_SHARP_));
} else {
return null;
}
})], null);
}));

(onlypartners.components.mask.use_mask.cljs$core$IFn$_invoke$arity$1 = (function (valid_QMARK_){
return onlypartners.components.mask.use_mask.call(null,valid_QMARK_,cljs.core.identity);
}));

(onlypartners.components.mask.use_mask.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=mask.js.map
