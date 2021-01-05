// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.components.validation');
goog.require('cljs.core');
goog.require('reagent.core');
onlypartners.components.validation.use_validation = (function onlypartners$components$validation$use_validation(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23151 = arguments.length;
var i__4737__auto___23152 = (0);
while(true){
if((i__4737__auto___23152 < len__4736__auto___23151)){
args__4742__auto__.push((arguments[i__4737__auto___23152]));

var G__23153 = (i__4737__auto___23152 + (1));
i__4737__auto___23152 = G__23153;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return onlypartners.components.validation.use_validation.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(onlypartners.components.validation.use_validation.cljs$core$IFn$_invoke$arity$variadic = (function (validations){
var error = reagent.core.atom.call(null,null);
var validations_map = cljs.core.apply.call(null,cljs.core.hash_map,validations);
var validate = (function (value){
return cljs.core.reset_BANG_.call(null,error,cljs.core.some.call(null,(function (p__23147){
var vec__23148 = p__23147;
var msg = cljs.core.nth.call(null,vec__23148,(0),null);
var f = cljs.core.nth.call(null,vec__23148,(1),null);
if(cljs.core.truth_(f.call(null,value))){
return msg;
} else {
return null;
}
}),validations_map));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.deref.call(null,error);
}),validate], null);
}));

(onlypartners.components.validation.use_validation.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(onlypartners.components.validation.use_validation.cljs$lang$applyTo = (function (seq23146){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23146));
}));


//# sourceMappingURL=validation.js.map
