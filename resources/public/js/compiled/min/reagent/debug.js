// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22169__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22170__i = 0, G__22170__a = new Array(arguments.length -  0);
while (G__22170__i < G__22170__a.length) {G__22170__a[G__22170__i] = arguments[G__22170__i + 0]; ++G__22170__i;}
  args = new cljs.core.IndexedSeq(G__22170__a,0,null);
} 
return G__22169__delegate.call(this,args);};
G__22169.cljs$lang$maxFixedArity = 0;
G__22169.cljs$lang$applyTo = (function (arglist__22171){
var args = cljs.core.seq(arglist__22171);
return G__22169__delegate(args);
});
G__22169.cljs$core$IFn$_invoke$arity$variadic = G__22169__delegate;
return G__22169;
})()
);

(o.error = (function() { 
var G__22172__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22173__i = 0, G__22173__a = new Array(arguments.length -  0);
while (G__22173__i < G__22173__a.length) {G__22173__a[G__22173__i] = arguments[G__22173__i + 0]; ++G__22173__i;}
  args = new cljs.core.IndexedSeq(G__22173__a,0,null);
} 
return G__22172__delegate.call(this,args);};
G__22172.cljs$lang$maxFixedArity = 0;
G__22172.cljs$lang$applyTo = (function (arglist__22174){
var args = cljs.core.seq(arglist__22174);
return G__22172__delegate(args);
});
G__22172.cljs$core$IFn$_invoke$arity$variadic = G__22172__delegate;
return G__22172;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
