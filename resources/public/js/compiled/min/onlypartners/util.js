// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.util');
goog.require('cljs.core');
goog.require('clojure.string');
onlypartners.util.create_number_formatter = (function onlypartners$util$create_number_formatter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22076 = arguments.length;
var i__4737__auto___22077 = (0);
while(true){
if((i__4737__auto___22077 < len__4736__auto___22076)){
args__4742__auto__.push((arguments[i__4737__auto___22077]));

var G__22078 = (i__4737__auto___22077 + (1));
i__4737__auto___22077 = G__22078;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return onlypartners.util.create_number_formatter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(onlypartners.util.create_number_formatter.cljs$core$IFn$_invoke$arity$variadic = (function (language,options){
return Intl.NumberFormat(language,cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.hash_map,options)));
}));

(onlypartners.util.create_number_formatter.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(onlypartners.util.create_number_formatter.cljs$lang$applyTo = (function (seq22074){
var G__22075 = cljs.core.first.call(null,seq22074);
var seq22074__$1 = cljs.core.next.call(null,seq22074);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22075,seq22074__$1);
}));

onlypartners.util.format_currency = (function onlypartners$util$format_currency(x){
return onlypartners.util.create_number_formatter.call(null,undefined,new cljs.core.Keyword(null,"style","style",-496642736),"currency",new cljs.core.Keyword(null,"currency","currency",-898327568),"BRL").format(x);
});
onlypartners.util.printrn = (function onlypartners$util$printrn(x){
cljs.core.prn.call(null,x);

return x;
});
onlypartners.util.classes = (function onlypartners$util$classes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22081 = arguments.length;
var i__4737__auto___22082 = (0);
while(true){
if((i__4737__auto___22082 < len__4736__auto___22081)){
args__4742__auto__.push((arguments[i__4737__auto___22082]));

var G__22083 = (i__4737__auto___22082 + (1));
i__4737__auto___22082 = G__22083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return onlypartners.util.classes.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(onlypartners.util.classes.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.name,cljs.core.first),cljs.core.filter.call(null,(function (p1__22079_SHARP_){
return cljs.core.second.call(null,p1__22079_SHARP_).call(null);
}),cljs.core.apply.call(null,cljs.core.hash_map,args))));
}));

(onlypartners.util.classes.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(onlypartners.util.classes.cljs$lang$applyTo = (function (seq22080){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22080));
}));

onlypartners.util.attach = (function onlypartners$util$attach(f,ref){
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.merge.call(null,cljs.core.deref.call(null,ref),props)], null);
});
});

//# sourceMappingURL=util.js.map
