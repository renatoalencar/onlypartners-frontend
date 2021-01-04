// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
onlypartners.router.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$group_DASH_id,"subscribe",cljs.core.cst$kw$step,cljs.core.cst$kw$plans], null));
onlypartners.router.go = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,onlypartners.router.state,cljs.core.assoc);
