// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26165__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26166__i = 0, G__26166__a = new Array(arguments.length -  0);
while (G__26166__i < G__26166__a.length) {G__26166__a[G__26166__i] = arguments[G__26166__i + 0]; ++G__26166__i;}
  args = new cljs.core.IndexedSeq(G__26166__a,0,null);
} 
return G__26165__delegate.call(this,args);};
G__26165.cljs$lang$maxFixedArity = 0;
G__26165.cljs$lang$applyTo = (function (arglist__26167){
var args = cljs.core.seq(arglist__26167);
return G__26165__delegate(args);
});
G__26165.cljs$core$IFn$_invoke$arity$variadic = G__26165__delegate;
return G__26165;
})()
);

(o.error = (function() { 
var G__26168__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26169__i = 0, G__26169__a = new Array(arguments.length -  0);
while (G__26169__i < G__26169__a.length) {G__26169__a[G__26169__i] = arguments[G__26169__i + 0]; ++G__26169__i;}
  args = new cljs.core.IndexedSeq(G__26169__a,0,null);
} 
return G__26168__delegate.call(this,args);};
G__26168.cljs$lang$maxFixedArity = 0;
G__26168.cljs$lang$applyTo = (function (arglist__26170){
var args = cljs.core.seq(arglist__26170);
return G__26168__delegate(args);
});
G__26168.cljs$core$IFn$_invoke$arity$variadic = G__26168__delegate;
return G__26168;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
