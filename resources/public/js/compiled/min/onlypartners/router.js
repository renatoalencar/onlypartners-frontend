// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('onlypartners.router');
goog.require('cljs.core');
goog.require('reagent.core');
onlypartners.router.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),"subscribe",new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"plans","plans",75657163)], null));
onlypartners.router.go = cljs.core.partial.call(null,cljs.core.swap_BANG_,onlypartners.router.state,cljs.core.assoc);

//# sourceMappingURL=router.js.map
