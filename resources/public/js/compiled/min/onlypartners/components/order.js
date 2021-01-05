// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('onlypartners.components.order');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('onlypartners.components.group');
goog.require('onlypartners.db');
goog.require('onlypartners.util');
onlypartners.components.order.order_description = (function onlypartners$components$order$order_description(group,on_change_order){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$card$order_DASH_description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onlypartners.components.group.group_profile,group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr$divider], null),(function (){var map__30374 = onlypartners.db.selected_plan();
var map__30374__$1 = (((((!((map__30374 == null))))?(((((map__30374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30374):map__30374);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30374__$1,cljs.core.cst$kw$title);
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30374__$1,cljs.core.cst$kw$price);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$order_DASH_description__items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$order_DASH_description__items__item,"Plano"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$order_DASH_description__items__name,title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$order_DASH_description__items__item,"Pre\u00E7o"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$order_DASH_description__items__name,onlypartners.util.format_currency(price)], null)], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_change_order], null),"Trocar"], null)], null);
});
