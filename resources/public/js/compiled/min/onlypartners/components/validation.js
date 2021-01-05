// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.components.validation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
onlypartners.components.validation.use_validation = (function onlypartners$components$validation$use_validation(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26683 = arguments.length;
var i__4737__auto___26684 = (0);
while(true){
if((i__4737__auto___26684 < len__4736__auto___26683)){
args__4742__auto__.push((arguments[i__4737__auto___26684]));

var G__26685 = (i__4737__auto___26684 + (1));
i__4737__auto___26684 = G__26685;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return onlypartners.components.validation.use_validation.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(onlypartners.components.validation.use_validation.cljs$core$IFn$_invoke$arity$variadic = (function (validations){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var validations_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,validations);
var validate = (function (value){
return cljs.core.reset_BANG_(error,cljs.core.some((function (p__26679){
var vec__26680 = p__26679;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26680,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26680,(1),null);
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value)))){
return msg;
} else {
return null;
}
}),validations_map));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.deref(error);
}),validate], null);
}));

(onlypartners.components.validation.use_validation.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(onlypartners.components.validation.use_validation.cljs$lang$applyTo = (function (seq26678){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26678));
}));

