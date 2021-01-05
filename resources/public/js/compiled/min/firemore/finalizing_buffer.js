// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('firemore.finalizing_buffer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');

/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.protocols.Buffer}
*/
firemore.finalizing_buffer.FinalizingBuffer = (function (buf,n,opts){
this.buf = buf;
this.n = n;
this.opts = opts;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(firemore.finalizing_buffer.FinalizingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL);

(firemore.finalizing_buffer.FinalizingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.buf.length === self__.n);
}));

(firemore.finalizing_buffer.FinalizingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
}));

(firemore.finalizing_buffer.FinalizingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
self__.buf.unbounded_unshift(itm);

return this$__$1;
}));

(firemore.finalizing_buffer.FinalizingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__26726 = self__.opts;
var G__26726__$1 = (((G__26726 == null))?null:cljs.core.cst$kw$on_DASH_close.cljs$core$IFn$_invoke$arity$1(G__26726));
if((G__26726__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__26726__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}
}));

(firemore.finalizing_buffer.FinalizingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
}));

(firemore.finalizing_buffer.FinalizingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$buf,cljs.core.cst$sym$n,cljs.core.cst$sym$opts], null);
}));

(firemore.finalizing_buffer.FinalizingBuffer.cljs$lang$type = true);

(firemore.finalizing_buffer.FinalizingBuffer.cljs$lang$ctorStr = "firemore.finalizing-buffer/FinalizingBuffer");

(firemore.finalizing_buffer.FinalizingBuffer.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"firemore.finalizing-buffer/FinalizingBuffer");
}));

/**
 * Positional factory function for firemore.finalizing-buffer/FinalizingBuffer.
 */
firemore.finalizing_buffer.__GT_FinalizingBuffer = (function firemore$finalizing_buffer$__GT_FinalizingBuffer(buf,n,opts){
return (new firemore.finalizing_buffer.FinalizingBuffer(buf,n,opts));
});

firemore.finalizing_buffer.create = (function firemore$finalizing_buffer$create(var_args){
var G__26728 = arguments.length;
switch (G__26728) {
case 1:
return firemore.finalizing_buffer.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firemore.finalizing_buffer.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.finalizing_buffer.create.cljs$core$IFn$_invoke$arity$1 = (function (n){
return firemore.finalizing_buffer.create.cljs$core$IFn$_invoke$arity$2(n,cljs.core.PersistentArrayMap.EMPTY);
}));

(firemore.finalizing_buffer.create.cljs$core$IFn$_invoke$arity$2 = (function (n,opts){
return (new firemore.finalizing_buffer.FinalizingBuffer(cljs.core.async.impl.buffers.ring_buffer(n),n,opts));
}));

(firemore.finalizing_buffer.create.cljs$lang$maxFixedArity = 2);

