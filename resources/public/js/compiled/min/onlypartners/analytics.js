// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.analytics');
goog.require('cljs.core');
onlypartners.analytics.track = (function onlypartners$analytics$track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29166 = arguments.length;
var i__4737__auto___29167 = (0);
while(true){
if((i__4737__auto___29167 < len__4736__auto___29166)){
args__4742__auto__.push((arguments[i__4737__auto___29167]));

var G__29168 = (i__4737__auto___29167 + (1));
i__4737__auto___29167 = G__29168;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return onlypartners.analytics.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(onlypartners.analytics.track.cljs$core$IFn$_invoke$arity$variadic = (function (event,traits){
return plausible(cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),(function (){var G__29163 = new cljs.core.Keyword(null,"props","props",453281727);
var obj29165 = ({});
goog.object.set(obj29165,G__29163,cljs.core.apply.call(null,cljs.core.js_obj,traits));

return obj29165;
})());
}));

(onlypartners.analytics.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(onlypartners.analytics.track.cljs$lang$applyTo = (function (seq29161){
var G__29162 = cljs.core.first.call(null,seq29161);
var seq29161__$1 = cljs.core.next.call(null,seq29161);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29162,seq29161__$1);
}));


//# sourceMappingURL=analytics.js.map
