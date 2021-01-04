// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
onlypartners.util.create_number_formatter = (function onlypartners$util$create_number_formatter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26035 = arguments.length;
var i__4737__auto___26036 = (0);
while(true){
if((i__4737__auto___26036 < len__4736__auto___26035)){
args__4742__auto__.push((arguments[i__4737__auto___26036]));

var G__26037 = (i__4737__auto___26036 + (1));
i__4737__auto___26036 = G__26037;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return onlypartners.util.create_number_formatter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(onlypartners.util.create_number_formatter.cljs$core$IFn$_invoke$arity$variadic = (function (language,options){
return Intl.NumberFormat(language,cljs.core.clj__GT_js(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)));
}));

(onlypartners.util.create_number_formatter.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(onlypartners.util.create_number_formatter.cljs$lang$applyTo = (function (seq26033){
var G__26034 = cljs.core.first(seq26033);
var seq26033__$1 = cljs.core.next(seq26033);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26034,seq26033__$1);
}));

onlypartners.util.format_currency = (function onlypartners$util$format_currency(x){
return onlypartners.util.create_number_formatter.cljs$core$IFn$_invoke$arity$variadic(undefined,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$style,"currency",cljs.core.cst$kw$currency,"BRL"], 0)).format(x);
});
onlypartners.util.printrn = (function onlypartners$util$printrn(x){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

return x;
});
onlypartners.util.classes = (function onlypartners$util$classes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26041 = arguments.length;
var i__4737__auto___26042 = (0);
while(true){
if((i__4737__auto___26042 < len__4736__auto___26041)){
args__4742__auto__.push((arguments[i__4737__auto___26042]));

var G__26043 = (i__4737__auto___26042 + (1));
i__4737__auto___26042 = G__26043;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return onlypartners.util.classes.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(onlypartners.util.classes.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26038_SHARP_){
var fexpr__26040 = cljs.core.second(p1__26038_SHARP_);
return (fexpr__26040.cljs$core$IFn$_invoke$arity$0 ? fexpr__26040.cljs$core$IFn$_invoke$arity$0() : fexpr__26040.call(null));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args))));
}));

(onlypartners.util.classes.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(onlypartners.util.classes.cljs$lang$applyTo = (function (seq26039){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26039));
}));

onlypartners.util.attach = (function onlypartners$util$attach(f,ref){
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(ref),props], 0))], null);
});
});
