// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28121 = arguments.length;
switch (G__28121) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28122 = (function (f,blockable,meta28123){
this.f = f;
this.blockable = blockable;
this.meta28123 = meta28123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28124,meta28123__$1){
var self__ = this;
var _28124__$1 = this;
return (new cljs.core.async.t_cljs$core$async28122(self__.f,self__.blockable,meta28123__$1));
}));

(cljs.core.async.t_cljs$core$async28122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28124){
var self__ = this;
var _28124__$1 = this;
return self__.meta28123;
}));

(cljs.core.async.t_cljs$core$async28122.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta28123], null);
}));

(cljs.core.async.t_cljs$core$async28122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28122");

(cljs.core.async.t_cljs$core$async28122.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28122.
 */
cljs.core.async.__GT_t_cljs$core$async28122 = (function cljs$core$async$__GT_t_cljs$core$async28122(f__$1,blockable__$1,meta28123){
return (new cljs.core.async.t_cljs$core$async28122(f__$1,blockable__$1,meta28123));
});

}

return (new cljs.core.async.t_cljs$core$async28122(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28128 = arguments.length;
switch (G__28128) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28131 = arguments.length;
switch (G__28131) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28134 = arguments.length;
switch (G__28134) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_28136 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28136) : fn1.call(null,val_28136));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28136) : fn1.call(null,val_28136));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28138 = arguments.length;
switch (G__28138) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___28140 = n;
var x_28141 = (0);
while(true){
if((x_28141 < n__4613__auto___28140)){
(a[x_28141] = x_28141);

var G__28142 = (x_28141 + (1));
x_28141 = G__28142;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28143 = (function (flag,meta28144){
this.flag = flag;
this.meta28144 = meta28144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28145,meta28144__$1){
var self__ = this;
var _28145__$1 = this;
return (new cljs.core.async.t_cljs$core$async28143(self__.flag,meta28144__$1));
}));

(cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28145){
var self__ = this;
var _28145__$1 = this;
return self__.meta28144;
}));

(cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta28144], null);
}));

(cljs.core.async.t_cljs$core$async28143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28143");

(cljs.core.async.t_cljs$core$async28143.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28143.
 */
cljs.core.async.__GT_t_cljs$core$async28143 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28143(flag__$1,meta28144){
return (new cljs.core.async.t_cljs$core$async28143(flag__$1,meta28144));
});

}

return (new cljs.core.async.t_cljs$core$async28143(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28146 = (function (flag,cb,meta28147){
this.flag = flag;
this.cb = cb;
this.meta28147 = meta28147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28148,meta28147__$1){
var self__ = this;
var _28148__$1 = this;
return (new cljs.core.async.t_cljs$core$async28146(self__.flag,self__.cb,meta28147__$1));
}));

(cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28148){
var self__ = this;
var _28148__$1 = this;
return self__.meta28147;
}));

(cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta28147], null);
}));

(cljs.core.async.t_cljs$core$async28146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28146");

(cljs.core.async.t_cljs$core$async28146.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28146.
 */
cljs.core.async.__GT_t_cljs$core$async28146 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28146(flag__$1,cb__$1,meta28147){
return (new cljs.core.async.t_cljs$core$async28146(flag__$1,cb__$1,meta28147));
});

}

return (new cljs.core.async.t_cljs$core$async28146(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28149_SHARP_){
var G__28151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28149_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28151) : fret.call(null,G__28151));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28150_SHARP_){
var G__28152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28150_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28152) : fret.call(null,G__28152));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28153 = (i + (1));
i = G__28153;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28159 = arguments.length;
var i__4737__auto___28160 = (0);
while(true){
if((i__4737__auto___28160 < len__4736__auto___28159)){
args__4742__auto__.push((arguments[i__4737__auto___28160]));

var G__28161 = (i__4737__auto___28160 + (1));
i__4737__auto___28160 = G__28161;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28156){
var map__28157 = p__28156;
var map__28157__$1 = (((((!((map__28157 == null))))?(((((map__28157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28157):map__28157);
var opts = map__28157__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28154){
var G__28155 = cljs.core.first(seq28154);
var seq28154__$1 = cljs.core.next(seq28154);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28155,seq28154__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28163 = arguments.length;
switch (G__28163) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28061__auto___28209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28187){
var state_val_28188 = (state_28187[(1)]);
if((state_val_28188 === (7))){
var inst_28183 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
var statearr_28189_28210 = state_28187__$1;
(statearr_28189_28210[(2)] = inst_28183);

(statearr_28189_28210[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (1))){
var state_28187__$1 = state_28187;
var statearr_28190_28211 = state_28187__$1;
(statearr_28190_28211[(2)] = null);

(statearr_28190_28211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (4))){
var inst_28166 = (state_28187[(7)]);
var inst_28166__$1 = (state_28187[(2)]);
var inst_28167 = (inst_28166__$1 == null);
var state_28187__$1 = (function (){var statearr_28191 = state_28187;
(statearr_28191[(7)] = inst_28166__$1);

return statearr_28191;
})();
if(cljs.core.truth_(inst_28167)){
var statearr_28192_28212 = state_28187__$1;
(statearr_28192_28212[(1)] = (5));

} else {
var statearr_28193_28213 = state_28187__$1;
(statearr_28193_28213[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (13))){
var state_28187__$1 = state_28187;
var statearr_28194_28214 = state_28187__$1;
(statearr_28194_28214[(2)] = null);

(statearr_28194_28214[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (6))){
var inst_28166 = (state_28187[(7)]);
var state_28187__$1 = state_28187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28187__$1,(11),to,inst_28166);
} else {
if((state_val_28188 === (3))){
var inst_28185 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28187__$1,inst_28185);
} else {
if((state_val_28188 === (12))){
var state_28187__$1 = state_28187;
var statearr_28195_28215 = state_28187__$1;
(statearr_28195_28215[(2)] = null);

(statearr_28195_28215[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (2))){
var state_28187__$1 = state_28187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28187__$1,(4),from);
} else {
if((state_val_28188 === (11))){
var inst_28176 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
if(cljs.core.truth_(inst_28176)){
var statearr_28196_28216 = state_28187__$1;
(statearr_28196_28216[(1)] = (12));

} else {
var statearr_28197_28217 = state_28187__$1;
(statearr_28197_28217[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (9))){
var state_28187__$1 = state_28187;
var statearr_28198_28218 = state_28187__$1;
(statearr_28198_28218[(2)] = null);

(statearr_28198_28218[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (5))){
var state_28187__$1 = state_28187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28199_28219 = state_28187__$1;
(statearr_28199_28219[(1)] = (8));

} else {
var statearr_28200_28220 = state_28187__$1;
(statearr_28200_28220[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (14))){
var inst_28181 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
var statearr_28201_28221 = state_28187__$1;
(statearr_28201_28221[(2)] = inst_28181);

(statearr_28201_28221[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (10))){
var inst_28173 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
var statearr_28202_28222 = state_28187__$1;
(statearr_28202_28222[(2)] = inst_28173);

(statearr_28202_28222[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28188 === (8))){
var inst_28170 = cljs.core.async.close_BANG_(to);
var state_28187__$1 = state_28187;
var statearr_28203_28223 = state_28187__$1;
(statearr_28203_28223[(2)] = inst_28170);

(statearr_28203_28223[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_28204 = [null,null,null,null,null,null,null,null];
(statearr_28204[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_28204[(1)] = (1));

return statearr_28204;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_28187){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28187);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28205){if((e28205 instanceof Object)){
var ex__27993__auto__ = e28205;
var statearr_28206_28224 = state_28187;
(statearr_28206_28224[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28187);

return cljs.core.cst$kw$recur;
} else {
throw e28205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28225 = state_28187;
state_28187 = G__28225;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_28187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_28187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28207 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28207[(6)] = c__28061__auto___28209);

return statearr_28207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__28226){
var vec__28227 = p__28226;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28227,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28227,(1),null);
var job = vec__28227;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28061__auto___28398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28234){
var state_val_28235 = (state_28234[(1)]);
if((state_val_28235 === (1))){
var state_28234__$1 = state_28234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28234__$1,(2),res,v);
} else {
if((state_val_28235 === (2))){
var inst_28231 = (state_28234[(2)]);
var inst_28232 = cljs.core.async.close_BANG_(res);
var state_28234__$1 = (function (){var statearr_28236 = state_28234;
(statearr_28236[(7)] = inst_28231);

return statearr_28236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28234__$1,inst_28232);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0 = (function (){
var statearr_28237 = [null,null,null,null,null,null,null,null];
(statearr_28237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__);

(statearr_28237[(1)] = (1));

return statearr_28237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1 = (function (state_28234){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28234);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28238){if((e28238 instanceof Object)){
var ex__27993__auto__ = e28238;
var statearr_28239_28399 = state_28234;
(statearr_28239_28399[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28234);

return cljs.core.cst$kw$recur;
} else {
throw e28238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28400 = state_28234;
state_28234 = G__28400;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = function(state_28234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1.call(this,state_28234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28240 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28240[(6)] = c__28061__auto___28398);

return statearr_28240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28241){
var vec__28242 = p__28241;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(1),null);
var job = vec__28242;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___28401 = n;
var __28402 = (0);
while(true){
if((__28402 < n__4613__auto___28401)){
var G__28245_28403 = type;
var G__28245_28404__$1 = (((G__28245_28403 instanceof cljs.core.Keyword))?G__28245_28403.fqn:null);
switch (G__28245_28404__$1) {
case "compute":
var c__28061__auto___28406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28402,c__28061__auto___28406,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async){
return (function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = ((function (__28402,c__28061__auto___28406,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async){
return (function (state_28258){
var state_val_28259 = (state_28258[(1)]);
if((state_val_28259 === (1))){
var state_28258__$1 = state_28258;
var statearr_28260_28407 = state_28258__$1;
(statearr_28260_28407[(2)] = null);

(statearr_28260_28407[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28259 === (2))){
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28258__$1,(4),jobs);
} else {
if((state_val_28259 === (3))){
var inst_28256 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28258__$1,inst_28256);
} else {
if((state_val_28259 === (4))){
var inst_28248 = (state_28258[(2)]);
var inst_28249 = process(inst_28248);
var state_28258__$1 = state_28258;
if(cljs.core.truth_(inst_28249)){
var statearr_28261_28408 = state_28258__$1;
(statearr_28261_28408[(1)] = (5));

} else {
var statearr_28262_28409 = state_28258__$1;
(statearr_28262_28409[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28259 === (5))){
var state_28258__$1 = state_28258;
var statearr_28263_28410 = state_28258__$1;
(statearr_28263_28410[(2)] = null);

(statearr_28263_28410[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28259 === (6))){
var state_28258__$1 = state_28258;
var statearr_28264_28411 = state_28258__$1;
(statearr_28264_28411[(2)] = null);

(statearr_28264_28411[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28259 === (7))){
var inst_28254 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28265_28412 = state_28258__$1;
(statearr_28265_28412[(2)] = inst_28254);

(statearr_28265_28412[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__28402,c__28061__auto___28406,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async))
;
return ((function (__28402,switch__27989__auto__,c__28061__auto___28406,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0 = (function (){
var statearr_28266 = [null,null,null,null,null,null,null];
(statearr_28266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__);

(statearr_28266[(1)] = (1));

return statearr_28266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1 = (function (state_28258){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28258);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28267){if((e28267 instanceof Object)){
var ex__27993__auto__ = e28267;
var statearr_28268_28413 = state_28258;
(statearr_28268_28413[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28258);

return cljs.core.cst$kw$recur;
} else {
throw e28267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28414 = state_28258;
state_28258 = G__28414;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = function(state_28258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1.call(this,state_28258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__;
})()
;})(__28402,switch__27989__auto__,c__28061__auto___28406,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async))
})();
var state__28063__auto__ = (function (){var statearr_28269 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28269[(6)] = c__28061__auto___28406);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
});})(__28402,c__28061__auto___28406,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async))
);


break;
case "async":
var c__28061__auto___28415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28402,c__28061__auto___28415,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async){
return (function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = ((function (__28402,c__28061__auto___28415,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async){
return (function (state_28282){
var state_val_28283 = (state_28282[(1)]);
if((state_val_28283 === (1))){
var state_28282__$1 = state_28282;
var statearr_28284_28416 = state_28282__$1;
(statearr_28284_28416[(2)] = null);

(statearr_28284_28416[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28283 === (2))){
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28282__$1,(4),jobs);
} else {
if((state_val_28283 === (3))){
var inst_28280 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28282__$1,inst_28280);
} else {
if((state_val_28283 === (4))){
var inst_28272 = (state_28282[(2)]);
var inst_28273 = async(inst_28272);
var state_28282__$1 = state_28282;
if(cljs.core.truth_(inst_28273)){
var statearr_28285_28417 = state_28282__$1;
(statearr_28285_28417[(1)] = (5));

} else {
var statearr_28286_28418 = state_28282__$1;
(statearr_28286_28418[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28283 === (5))){
var state_28282__$1 = state_28282;
var statearr_28287_28419 = state_28282__$1;
(statearr_28287_28419[(2)] = null);

(statearr_28287_28419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28283 === (6))){
var state_28282__$1 = state_28282;
var statearr_28288_28420 = state_28282__$1;
(statearr_28288_28420[(2)] = null);

(statearr_28288_28420[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28283 === (7))){
var inst_28278 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
var statearr_28289_28421 = state_28282__$1;
(statearr_28289_28421[(2)] = inst_28278);

(statearr_28289_28421[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__28402,c__28061__auto___28415,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async))
;
return ((function (__28402,switch__27989__auto__,c__28061__auto___28415,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0 = (function (){
var statearr_28290 = [null,null,null,null,null,null,null];
(statearr_28290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__);

(statearr_28290[(1)] = (1));

return statearr_28290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1 = (function (state_28282){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28282);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28291){if((e28291 instanceof Object)){
var ex__27993__auto__ = e28291;
var statearr_28292_28422 = state_28282;
(statearr_28292_28422[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28282);

return cljs.core.cst$kw$recur;
} else {
throw e28291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28423 = state_28282;
state_28282 = G__28423;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = function(state_28282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1.call(this,state_28282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__;
})()
;})(__28402,switch__27989__auto__,c__28061__auto___28415,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async))
})();
var state__28063__auto__ = (function (){var statearr_28293 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28293[(6)] = c__28061__auto___28415);

return statearr_28293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
});})(__28402,c__28061__auto___28415,G__28245_28403,G__28245_28404__$1,n__4613__auto___28401,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28245_28404__$1)].join('')));

}

var G__28424 = (__28402 + (1));
__28402 = G__28424;
continue;
} else {
}
break;
}

var c__28061__auto___28425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28315){
var state_val_28316 = (state_28315[(1)]);
if((state_val_28316 === (7))){
var inst_28311 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28317_28426 = state_28315__$1;
(statearr_28317_28426[(2)] = inst_28311);

(statearr_28317_28426[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28316 === (1))){
var state_28315__$1 = state_28315;
var statearr_28318_28427 = state_28315__$1;
(statearr_28318_28427[(2)] = null);

(statearr_28318_28427[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28316 === (4))){
var inst_28296 = (state_28315[(7)]);
var inst_28296__$1 = (state_28315[(2)]);
var inst_28297 = (inst_28296__$1 == null);
var state_28315__$1 = (function (){var statearr_28319 = state_28315;
(statearr_28319[(7)] = inst_28296__$1);

return statearr_28319;
})();
if(cljs.core.truth_(inst_28297)){
var statearr_28320_28428 = state_28315__$1;
(statearr_28320_28428[(1)] = (5));

} else {
var statearr_28321_28429 = state_28315__$1;
(statearr_28321_28429[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28316 === (6))){
var inst_28296 = (state_28315[(7)]);
var inst_28301 = (state_28315[(8)]);
var inst_28301__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28302 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28303 = [inst_28296,inst_28301__$1];
var inst_28304 = (new cljs.core.PersistentVector(null,2,(5),inst_28302,inst_28303,null));
var state_28315__$1 = (function (){var statearr_28322 = state_28315;
(statearr_28322[(8)] = inst_28301__$1);

return statearr_28322;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28315__$1,(8),jobs,inst_28304);
} else {
if((state_val_28316 === (3))){
var inst_28313 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28315__$1,inst_28313);
} else {
if((state_val_28316 === (2))){
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28315__$1,(4),from);
} else {
if((state_val_28316 === (9))){
var inst_28308 = (state_28315[(2)]);
var state_28315__$1 = (function (){var statearr_28323 = state_28315;
(statearr_28323[(9)] = inst_28308);

return statearr_28323;
})();
var statearr_28324_28430 = state_28315__$1;
(statearr_28324_28430[(2)] = null);

(statearr_28324_28430[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28316 === (5))){
var inst_28299 = cljs.core.async.close_BANG_(jobs);
var state_28315__$1 = state_28315;
var statearr_28325_28431 = state_28315__$1;
(statearr_28325_28431[(2)] = inst_28299);

(statearr_28325_28431[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28316 === (8))){
var inst_28301 = (state_28315[(8)]);
var inst_28306 = (state_28315[(2)]);
var state_28315__$1 = (function (){var statearr_28326 = state_28315;
(statearr_28326[(10)] = inst_28306);

return statearr_28326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28315__$1,(9),results,inst_28301);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0 = (function (){
var statearr_28327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__);

(statearr_28327[(1)] = (1));

return statearr_28327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1 = (function (state_28315){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28315);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28328){if((e28328 instanceof Object)){
var ex__27993__auto__ = e28328;
var statearr_28329_28432 = state_28315;
(statearr_28329_28432[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28315);

return cljs.core.cst$kw$recur;
} else {
throw e28328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28433 = state_28315;
state_28315 = G__28433;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = function(state_28315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1.call(this,state_28315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28330 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28330[(6)] = c__28061__auto___28425);

return statearr_28330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


var c__28061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28368){
var state_val_28369 = (state_28368[(1)]);
if((state_val_28369 === (7))){
var inst_28364 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
var statearr_28370_28434 = state_28368__$1;
(statearr_28370_28434[(2)] = inst_28364);

(statearr_28370_28434[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (20))){
var state_28368__$1 = state_28368;
var statearr_28371_28435 = state_28368__$1;
(statearr_28371_28435[(2)] = null);

(statearr_28371_28435[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (1))){
var state_28368__$1 = state_28368;
var statearr_28372_28436 = state_28368__$1;
(statearr_28372_28436[(2)] = null);

(statearr_28372_28436[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (4))){
var inst_28333 = (state_28368[(7)]);
var inst_28333__$1 = (state_28368[(2)]);
var inst_28334 = (inst_28333__$1 == null);
var state_28368__$1 = (function (){var statearr_28373 = state_28368;
(statearr_28373[(7)] = inst_28333__$1);

return statearr_28373;
})();
if(cljs.core.truth_(inst_28334)){
var statearr_28374_28437 = state_28368__$1;
(statearr_28374_28437[(1)] = (5));

} else {
var statearr_28375_28438 = state_28368__$1;
(statearr_28375_28438[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (15))){
var inst_28346 = (state_28368[(8)]);
var state_28368__$1 = state_28368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28368__$1,(18),to,inst_28346);
} else {
if((state_val_28369 === (21))){
var inst_28359 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
var statearr_28376_28439 = state_28368__$1;
(statearr_28376_28439[(2)] = inst_28359);

(statearr_28376_28439[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (13))){
var inst_28361 = (state_28368[(2)]);
var state_28368__$1 = (function (){var statearr_28377 = state_28368;
(statearr_28377[(9)] = inst_28361);

return statearr_28377;
})();
var statearr_28378_28440 = state_28368__$1;
(statearr_28378_28440[(2)] = null);

(statearr_28378_28440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (6))){
var inst_28333 = (state_28368[(7)]);
var state_28368__$1 = state_28368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28368__$1,(11),inst_28333);
} else {
if((state_val_28369 === (17))){
var inst_28354 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
if(cljs.core.truth_(inst_28354)){
var statearr_28379_28441 = state_28368__$1;
(statearr_28379_28441[(1)] = (19));

} else {
var statearr_28380_28442 = state_28368__$1;
(statearr_28380_28442[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (3))){
var inst_28366 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28368__$1,inst_28366);
} else {
if((state_val_28369 === (12))){
var inst_28343 = (state_28368[(10)]);
var state_28368__$1 = state_28368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28368__$1,(14),inst_28343);
} else {
if((state_val_28369 === (2))){
var state_28368__$1 = state_28368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28368__$1,(4),results);
} else {
if((state_val_28369 === (19))){
var state_28368__$1 = state_28368;
var statearr_28381_28443 = state_28368__$1;
(statearr_28381_28443[(2)] = null);

(statearr_28381_28443[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (11))){
var inst_28343 = (state_28368[(2)]);
var state_28368__$1 = (function (){var statearr_28382 = state_28368;
(statearr_28382[(10)] = inst_28343);

return statearr_28382;
})();
var statearr_28383_28444 = state_28368__$1;
(statearr_28383_28444[(2)] = null);

(statearr_28383_28444[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (9))){
var state_28368__$1 = state_28368;
var statearr_28384_28445 = state_28368__$1;
(statearr_28384_28445[(2)] = null);

(statearr_28384_28445[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (5))){
var state_28368__$1 = state_28368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28385_28446 = state_28368__$1;
(statearr_28385_28446[(1)] = (8));

} else {
var statearr_28386_28447 = state_28368__$1;
(statearr_28386_28447[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (14))){
var inst_28346 = (state_28368[(8)]);
var inst_28346__$1 = (state_28368[(2)]);
var inst_28347 = (inst_28346__$1 == null);
var inst_28348 = cljs.core.not(inst_28347);
var state_28368__$1 = (function (){var statearr_28387 = state_28368;
(statearr_28387[(8)] = inst_28346__$1);

return statearr_28387;
})();
if(inst_28348){
var statearr_28388_28448 = state_28368__$1;
(statearr_28388_28448[(1)] = (15));

} else {
var statearr_28389_28449 = state_28368__$1;
(statearr_28389_28449[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (16))){
var state_28368__$1 = state_28368;
var statearr_28390_28450 = state_28368__$1;
(statearr_28390_28450[(2)] = false);

(statearr_28390_28450[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (10))){
var inst_28340 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
var statearr_28391_28451 = state_28368__$1;
(statearr_28391_28451[(2)] = inst_28340);

(statearr_28391_28451[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (18))){
var inst_28351 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
var statearr_28392_28452 = state_28368__$1;
(statearr_28392_28452[(2)] = inst_28351);

(statearr_28392_28452[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28369 === (8))){
var inst_28337 = cljs.core.async.close_BANG_(to);
var state_28368__$1 = state_28368;
var statearr_28393_28453 = state_28368__$1;
(statearr_28393_28453[(2)] = inst_28337);

(statearr_28393_28453[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0 = (function (){
var statearr_28394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__);

(statearr_28394[(1)] = (1));

return statearr_28394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1 = (function (state_28368){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28368);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28395){if((e28395 instanceof Object)){
var ex__27993__auto__ = e28395;
var statearr_28396_28454 = state_28368;
(statearr_28396_28454[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28368);

return cljs.core.cst$kw$recur;
} else {
throw e28395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28455 = state_28368;
state_28368 = G__28455;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__ = function(state_28368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1.call(this,state_28368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28397 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28397[(6)] = c__28061__auto__);

return statearr_28397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

return c__28061__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28457 = arguments.length;
switch (G__28457) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28460 = arguments.length;
switch (G__28460) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28463 = arguments.length;
switch (G__28463) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28061__auto___28512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28489){
var state_val_28490 = (state_28489[(1)]);
if((state_val_28490 === (7))){
var inst_28485 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28491_28513 = state_28489__$1;
(statearr_28491_28513[(2)] = inst_28485);

(statearr_28491_28513[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (1))){
var state_28489__$1 = state_28489;
var statearr_28492_28514 = state_28489__$1;
(statearr_28492_28514[(2)] = null);

(statearr_28492_28514[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (4))){
var inst_28466 = (state_28489[(7)]);
var inst_28466__$1 = (state_28489[(2)]);
var inst_28467 = (inst_28466__$1 == null);
var state_28489__$1 = (function (){var statearr_28493 = state_28489;
(statearr_28493[(7)] = inst_28466__$1);

return statearr_28493;
})();
if(cljs.core.truth_(inst_28467)){
var statearr_28494_28515 = state_28489__$1;
(statearr_28494_28515[(1)] = (5));

} else {
var statearr_28495_28516 = state_28489__$1;
(statearr_28495_28516[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (13))){
var state_28489__$1 = state_28489;
var statearr_28496_28517 = state_28489__$1;
(statearr_28496_28517[(2)] = null);

(statearr_28496_28517[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (6))){
var inst_28466 = (state_28489[(7)]);
var inst_28472 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28466) : p.call(null,inst_28466));
var state_28489__$1 = state_28489;
if(cljs.core.truth_(inst_28472)){
var statearr_28497_28518 = state_28489__$1;
(statearr_28497_28518[(1)] = (9));

} else {
var statearr_28498_28519 = state_28489__$1;
(statearr_28498_28519[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (3))){
var inst_28487 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28489__$1,inst_28487);
} else {
if((state_val_28490 === (12))){
var state_28489__$1 = state_28489;
var statearr_28499_28520 = state_28489__$1;
(statearr_28499_28520[(2)] = null);

(statearr_28499_28520[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (2))){
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28489__$1,(4),ch);
} else {
if((state_val_28490 === (11))){
var inst_28466 = (state_28489[(7)]);
var inst_28476 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28489__$1,(8),inst_28476,inst_28466);
} else {
if((state_val_28490 === (9))){
var state_28489__$1 = state_28489;
var statearr_28500_28521 = state_28489__$1;
(statearr_28500_28521[(2)] = tc);

(statearr_28500_28521[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (5))){
var inst_28469 = cljs.core.async.close_BANG_(tc);
var inst_28470 = cljs.core.async.close_BANG_(fc);
var state_28489__$1 = (function (){var statearr_28501 = state_28489;
(statearr_28501[(8)] = inst_28469);

return statearr_28501;
})();
var statearr_28502_28522 = state_28489__$1;
(statearr_28502_28522[(2)] = inst_28470);

(statearr_28502_28522[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (14))){
var inst_28483 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28503_28523 = state_28489__$1;
(statearr_28503_28523[(2)] = inst_28483);

(statearr_28503_28523[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (10))){
var state_28489__$1 = state_28489;
var statearr_28504_28524 = state_28489__$1;
(statearr_28504_28524[(2)] = fc);

(statearr_28504_28524[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (8))){
var inst_28478 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
if(cljs.core.truth_(inst_28478)){
var statearr_28505_28525 = state_28489__$1;
(statearr_28505_28525[(1)] = (12));

} else {
var statearr_28506_28526 = state_28489__$1;
(statearr_28506_28526[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_28507 = [null,null,null,null,null,null,null,null,null];
(statearr_28507[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_28507[(1)] = (1));

return statearr_28507;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_28489){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28489);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28508){if((e28508 instanceof Object)){
var ex__27993__auto__ = e28508;
var statearr_28509_28527 = state_28489;
(statearr_28509_28527[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28489);

return cljs.core.cst$kw$recur;
} else {
throw e28508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28528 = state_28489;
state_28489 = G__28528;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_28489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_28489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28510 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28510[(6)] = c__28061__auto___28512);

return statearr_28510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28549){
var state_val_28550 = (state_28549[(1)]);
if((state_val_28550 === (7))){
var inst_28545 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28551_28569 = state_28549__$1;
(statearr_28551_28569[(2)] = inst_28545);

(statearr_28551_28569[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28550 === (1))){
var inst_28529 = init;
var state_28549__$1 = (function (){var statearr_28552 = state_28549;
(statearr_28552[(7)] = inst_28529);

return statearr_28552;
})();
var statearr_28553_28570 = state_28549__$1;
(statearr_28553_28570[(2)] = null);

(statearr_28553_28570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28550 === (4))){
var inst_28532 = (state_28549[(8)]);
var inst_28532__$1 = (state_28549[(2)]);
var inst_28533 = (inst_28532__$1 == null);
var state_28549__$1 = (function (){var statearr_28554 = state_28549;
(statearr_28554[(8)] = inst_28532__$1);

return statearr_28554;
})();
if(cljs.core.truth_(inst_28533)){
var statearr_28555_28571 = state_28549__$1;
(statearr_28555_28571[(1)] = (5));

} else {
var statearr_28556_28572 = state_28549__$1;
(statearr_28556_28572[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28550 === (6))){
var inst_28529 = (state_28549[(7)]);
var inst_28532 = (state_28549[(8)]);
var inst_28536 = (state_28549[(9)]);
var inst_28536__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28529,inst_28532) : f.call(null,inst_28529,inst_28532));
var inst_28537 = cljs.core.reduced_QMARK_(inst_28536__$1);
var state_28549__$1 = (function (){var statearr_28557 = state_28549;
(statearr_28557[(9)] = inst_28536__$1);

return statearr_28557;
})();
if(inst_28537){
var statearr_28558_28573 = state_28549__$1;
(statearr_28558_28573[(1)] = (8));

} else {
var statearr_28559_28574 = state_28549__$1;
(statearr_28559_28574[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28550 === (3))){
var inst_28547 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28549__$1,inst_28547);
} else {
if((state_val_28550 === (2))){
var state_28549__$1 = state_28549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28549__$1,(4),ch);
} else {
if((state_val_28550 === (9))){
var inst_28536 = (state_28549[(9)]);
var inst_28529 = inst_28536;
var state_28549__$1 = (function (){var statearr_28560 = state_28549;
(statearr_28560[(7)] = inst_28529);

return statearr_28560;
})();
var statearr_28561_28575 = state_28549__$1;
(statearr_28561_28575[(2)] = null);

(statearr_28561_28575[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28550 === (5))){
var inst_28529 = (state_28549[(7)]);
var state_28549__$1 = state_28549;
var statearr_28562_28576 = state_28549__$1;
(statearr_28562_28576[(2)] = inst_28529);

(statearr_28562_28576[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28550 === (10))){
var inst_28543 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28563_28577 = state_28549__$1;
(statearr_28563_28577[(2)] = inst_28543);

(statearr_28563_28577[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28550 === (8))){
var inst_28536 = (state_28549[(9)]);
var inst_28539 = cljs.core.deref(inst_28536);
var state_28549__$1 = state_28549;
var statearr_28564_28578 = state_28549__$1;
(statearr_28564_28578[(2)] = inst_28539);

(statearr_28564_28578[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27990__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27990__auto____0 = (function (){
var statearr_28565 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28565[(0)] = cljs$core$async$reduce_$_state_machine__27990__auto__);

(statearr_28565[(1)] = (1));

return statearr_28565;
});
var cljs$core$async$reduce_$_state_machine__27990__auto____1 = (function (state_28549){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28549);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28566){if((e28566 instanceof Object)){
var ex__27993__auto__ = e28566;
var statearr_28567_28579 = state_28549;
(statearr_28567_28579[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28549);

return cljs.core.cst$kw$recur;
} else {
throw e28566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28580 = state_28549;
state_28549 = G__28580;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27990__auto__ = function(state_28549){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27990__auto____1.call(this,state_28549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27990__auto____0;
cljs$core$async$reduce_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27990__auto____1;
return cljs$core$async$reduce_$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28568 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28568[(6)] = c__28061__auto__);

return statearr_28568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

return c__28061__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28586){
var state_val_28587 = (state_28586[(1)]);
if((state_val_28587 === (1))){
var inst_28581 = cljs.core.async.reduce(f__$1,init,ch);
var state_28586__$1 = state_28586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28586__$1,(2),inst_28581);
} else {
if((state_val_28587 === (2))){
var inst_28583 = (state_28586[(2)]);
var inst_28584 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28583) : f__$1.call(null,inst_28583));
var state_28586__$1 = state_28586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28586__$1,inst_28584);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27990__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27990__auto____0 = (function (){
var statearr_28588 = [null,null,null,null,null,null,null];
(statearr_28588[(0)] = cljs$core$async$transduce_$_state_machine__27990__auto__);

(statearr_28588[(1)] = (1));

return statearr_28588;
});
var cljs$core$async$transduce_$_state_machine__27990__auto____1 = (function (state_28586){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28586);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28589){if((e28589 instanceof Object)){
var ex__27993__auto__ = e28589;
var statearr_28590_28592 = state_28586;
(statearr_28590_28592[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28586);

return cljs.core.cst$kw$recur;
} else {
throw e28589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28593 = state_28586;
state_28586 = G__28593;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27990__auto__ = function(state_28586){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27990__auto____1.call(this,state_28586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27990__auto____0;
cljs$core$async$transduce_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27990__auto____1;
return cljs$core$async$transduce_$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28591 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28591[(6)] = c__28061__auto__);

return statearr_28591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

return c__28061__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28595 = arguments.length;
switch (G__28595) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28620){
var state_val_28621 = (state_28620[(1)]);
if((state_val_28621 === (7))){
var inst_28602 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28622_28643 = state_28620__$1;
(statearr_28622_28643[(2)] = inst_28602);

(statearr_28622_28643[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (1))){
var inst_28596 = cljs.core.seq(coll);
var inst_28597 = inst_28596;
var state_28620__$1 = (function (){var statearr_28623 = state_28620;
(statearr_28623[(7)] = inst_28597);

return statearr_28623;
})();
var statearr_28624_28644 = state_28620__$1;
(statearr_28624_28644[(2)] = null);

(statearr_28624_28644[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (4))){
var inst_28597 = (state_28620[(7)]);
var inst_28600 = cljs.core.first(inst_28597);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28620__$1,(7),ch,inst_28600);
} else {
if((state_val_28621 === (13))){
var inst_28614 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28625_28645 = state_28620__$1;
(statearr_28625_28645[(2)] = inst_28614);

(statearr_28625_28645[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (6))){
var inst_28605 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28605)){
var statearr_28626_28646 = state_28620__$1;
(statearr_28626_28646[(1)] = (8));

} else {
var statearr_28627_28647 = state_28620__$1;
(statearr_28627_28647[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (3))){
var inst_28618 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28620__$1,inst_28618);
} else {
if((state_val_28621 === (12))){
var state_28620__$1 = state_28620;
var statearr_28628_28648 = state_28620__$1;
(statearr_28628_28648[(2)] = null);

(statearr_28628_28648[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (2))){
var inst_28597 = (state_28620[(7)]);
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28597)){
var statearr_28629_28649 = state_28620__$1;
(statearr_28629_28649[(1)] = (4));

} else {
var statearr_28630_28650 = state_28620__$1;
(statearr_28630_28650[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (11))){
var inst_28611 = cljs.core.async.close_BANG_(ch);
var state_28620__$1 = state_28620;
var statearr_28631_28651 = state_28620__$1;
(statearr_28631_28651[(2)] = inst_28611);

(statearr_28631_28651[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (9))){
var state_28620__$1 = state_28620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28632_28652 = state_28620__$1;
(statearr_28632_28652[(1)] = (11));

} else {
var statearr_28633_28653 = state_28620__$1;
(statearr_28633_28653[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (5))){
var inst_28597 = (state_28620[(7)]);
var state_28620__$1 = state_28620;
var statearr_28634_28654 = state_28620__$1;
(statearr_28634_28654[(2)] = inst_28597);

(statearr_28634_28654[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (10))){
var inst_28616 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28635_28655 = state_28620__$1;
(statearr_28635_28655[(2)] = inst_28616);

(statearr_28635_28655[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (8))){
var inst_28597 = (state_28620[(7)]);
var inst_28607 = cljs.core.next(inst_28597);
var inst_28597__$1 = inst_28607;
var state_28620__$1 = (function (){var statearr_28636 = state_28620;
(statearr_28636[(7)] = inst_28597__$1);

return statearr_28636;
})();
var statearr_28637_28656 = state_28620__$1;
(statearr_28637_28656[(2)] = null);

(statearr_28637_28656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_28638 = [null,null,null,null,null,null,null,null];
(statearr_28638[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_28638[(1)] = (1));

return statearr_28638;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_28620){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28620);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28639){if((e28639 instanceof Object)){
var ex__27993__auto__ = e28639;
var statearr_28640_28657 = state_28620;
(statearr_28640_28657[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28620);

return cljs.core.cst$kw$recur;
} else {
throw e28639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28658 = state_28620;
state_28620 = G__28658;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_28620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_28620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28641 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28641[(6)] = c__28061__auto__);

return statearr_28641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

return c__28061__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_28659 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_28659(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28660 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_28660(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28661 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_28661(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28662 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_28662(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28663 = (function (ch,cs,meta28664){
this.ch = ch;
this.cs = cs;
this.meta28664 = meta28664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28665,meta28664__$1){
var self__ = this;
var _28665__$1 = this;
return (new cljs.core.async.t_cljs$core$async28663(self__.ch,self__.cs,meta28664__$1));
}));

(cljs.core.async.t_cljs$core$async28663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28665){
var self__ = this;
var _28665__$1 = this;
return self__.meta28664;
}));

(cljs.core.async.t_cljs$core$async28663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28663.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28663.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28663.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28663.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta28664], null);
}));

(cljs.core.async.t_cljs$core$async28663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28663");

(cljs.core.async.t_cljs$core$async28663.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28663.
 */
cljs.core.async.__GT_t_cljs$core$async28663 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28663(ch__$1,cs__$1,meta28664){
return (new cljs.core.async.t_cljs$core$async28663(ch__$1,cs__$1,meta28664));
});

}

return (new cljs.core.async.t_cljs$core$async28663(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28061__auto___28885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_28800){
var state_val_28801 = (state_28800[(1)]);
if((state_val_28801 === (7))){
var inst_28796 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28802_28886 = state_28800__$1;
(statearr_28802_28886[(2)] = inst_28796);

(statearr_28802_28886[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (20))){
var inst_28699 = (state_28800[(7)]);
var inst_28711 = cljs.core.first(inst_28699);
var inst_28712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28711,(0),null);
var inst_28713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28711,(1),null);
var state_28800__$1 = (function (){var statearr_28803 = state_28800;
(statearr_28803[(8)] = inst_28712);

return statearr_28803;
})();
if(cljs.core.truth_(inst_28713)){
var statearr_28804_28887 = state_28800__$1;
(statearr_28804_28887[(1)] = (22));

} else {
var statearr_28805_28888 = state_28800__$1;
(statearr_28805_28888[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (27))){
var inst_28741 = (state_28800[(9)]);
var inst_28668 = (state_28800[(10)]);
var inst_28748 = (state_28800[(11)]);
var inst_28743 = (state_28800[(12)]);
var inst_28748__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28741,inst_28743);
var inst_28749 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28748__$1,inst_28668,done);
var state_28800__$1 = (function (){var statearr_28806 = state_28800;
(statearr_28806[(11)] = inst_28748__$1);

return statearr_28806;
})();
if(cljs.core.truth_(inst_28749)){
var statearr_28807_28889 = state_28800__$1;
(statearr_28807_28889[(1)] = (30));

} else {
var statearr_28808_28890 = state_28800__$1;
(statearr_28808_28890[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (1))){
var state_28800__$1 = state_28800;
var statearr_28809_28891 = state_28800__$1;
(statearr_28809_28891[(2)] = null);

(statearr_28809_28891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (24))){
var inst_28699 = (state_28800[(7)]);
var inst_28718 = (state_28800[(2)]);
var inst_28719 = cljs.core.next(inst_28699);
var inst_28677 = inst_28719;
var inst_28678 = null;
var inst_28679 = (0);
var inst_28680 = (0);
var state_28800__$1 = (function (){var statearr_28810 = state_28800;
(statearr_28810[(13)] = inst_28677);

(statearr_28810[(14)] = inst_28680);

(statearr_28810[(15)] = inst_28718);

(statearr_28810[(16)] = inst_28679);

(statearr_28810[(17)] = inst_28678);

return statearr_28810;
})();
var statearr_28811_28892 = state_28800__$1;
(statearr_28811_28892[(2)] = null);

(statearr_28811_28892[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (39))){
var state_28800__$1 = state_28800;
var statearr_28815_28893 = state_28800__$1;
(statearr_28815_28893[(2)] = null);

(statearr_28815_28893[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (4))){
var inst_28668 = (state_28800[(10)]);
var inst_28668__$1 = (state_28800[(2)]);
var inst_28669 = (inst_28668__$1 == null);
var state_28800__$1 = (function (){var statearr_28816 = state_28800;
(statearr_28816[(10)] = inst_28668__$1);

return statearr_28816;
})();
if(cljs.core.truth_(inst_28669)){
var statearr_28817_28894 = state_28800__$1;
(statearr_28817_28894[(1)] = (5));

} else {
var statearr_28818_28895 = state_28800__$1;
(statearr_28818_28895[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (15))){
var inst_28677 = (state_28800[(13)]);
var inst_28680 = (state_28800[(14)]);
var inst_28679 = (state_28800[(16)]);
var inst_28678 = (state_28800[(17)]);
var inst_28695 = (state_28800[(2)]);
var inst_28696 = (inst_28680 + (1));
var tmp28812 = inst_28677;
var tmp28813 = inst_28679;
var tmp28814 = inst_28678;
var inst_28677__$1 = tmp28812;
var inst_28678__$1 = tmp28814;
var inst_28679__$1 = tmp28813;
var inst_28680__$1 = inst_28696;
var state_28800__$1 = (function (){var statearr_28819 = state_28800;
(statearr_28819[(13)] = inst_28677__$1);

(statearr_28819[(14)] = inst_28680__$1);

(statearr_28819[(16)] = inst_28679__$1);

(statearr_28819[(18)] = inst_28695);

(statearr_28819[(17)] = inst_28678__$1);

return statearr_28819;
})();
var statearr_28820_28896 = state_28800__$1;
(statearr_28820_28896[(2)] = null);

(statearr_28820_28896[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (21))){
var inst_28722 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28824_28897 = state_28800__$1;
(statearr_28824_28897[(2)] = inst_28722);

(statearr_28824_28897[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (31))){
var inst_28748 = (state_28800[(11)]);
var inst_28752 = done(null);
var inst_28753 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28748);
var state_28800__$1 = (function (){var statearr_28825 = state_28800;
(statearr_28825[(19)] = inst_28752);

return statearr_28825;
})();
var statearr_28826_28898 = state_28800__$1;
(statearr_28826_28898[(2)] = inst_28753);

(statearr_28826_28898[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (32))){
var inst_28740 = (state_28800[(20)]);
var inst_28741 = (state_28800[(9)]);
var inst_28742 = (state_28800[(21)]);
var inst_28743 = (state_28800[(12)]);
var inst_28755 = (state_28800[(2)]);
var inst_28756 = (inst_28743 + (1));
var tmp28821 = inst_28740;
var tmp28822 = inst_28741;
var tmp28823 = inst_28742;
var inst_28740__$1 = tmp28821;
var inst_28741__$1 = tmp28822;
var inst_28742__$1 = tmp28823;
var inst_28743__$1 = inst_28756;
var state_28800__$1 = (function (){var statearr_28827 = state_28800;
(statearr_28827[(20)] = inst_28740__$1);

(statearr_28827[(9)] = inst_28741__$1);

(statearr_28827[(21)] = inst_28742__$1);

(statearr_28827[(12)] = inst_28743__$1);

(statearr_28827[(22)] = inst_28755);

return statearr_28827;
})();
var statearr_28828_28899 = state_28800__$1;
(statearr_28828_28899[(2)] = null);

(statearr_28828_28899[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (40))){
var inst_28768 = (state_28800[(23)]);
var inst_28772 = done(null);
var inst_28773 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28768);
var state_28800__$1 = (function (){var statearr_28829 = state_28800;
(statearr_28829[(24)] = inst_28772);

return statearr_28829;
})();
var statearr_28830_28900 = state_28800__$1;
(statearr_28830_28900[(2)] = inst_28773);

(statearr_28830_28900[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (33))){
var inst_28759 = (state_28800[(25)]);
var inst_28761 = cljs.core.chunked_seq_QMARK_(inst_28759);
var state_28800__$1 = state_28800;
if(inst_28761){
var statearr_28831_28901 = state_28800__$1;
(statearr_28831_28901[(1)] = (36));

} else {
var statearr_28832_28902 = state_28800__$1;
(statearr_28832_28902[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (13))){
var inst_28689 = (state_28800[(26)]);
var inst_28692 = cljs.core.async.close_BANG_(inst_28689);
var state_28800__$1 = state_28800;
var statearr_28833_28903 = state_28800__$1;
(statearr_28833_28903[(2)] = inst_28692);

(statearr_28833_28903[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (22))){
var inst_28712 = (state_28800[(8)]);
var inst_28715 = cljs.core.async.close_BANG_(inst_28712);
var state_28800__$1 = state_28800;
var statearr_28834_28904 = state_28800__$1;
(statearr_28834_28904[(2)] = inst_28715);

(statearr_28834_28904[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (36))){
var inst_28759 = (state_28800[(25)]);
var inst_28763 = cljs.core.chunk_first(inst_28759);
var inst_28764 = cljs.core.chunk_rest(inst_28759);
var inst_28765 = cljs.core.count(inst_28763);
var inst_28740 = inst_28764;
var inst_28741 = inst_28763;
var inst_28742 = inst_28765;
var inst_28743 = (0);
var state_28800__$1 = (function (){var statearr_28835 = state_28800;
(statearr_28835[(20)] = inst_28740);

(statearr_28835[(9)] = inst_28741);

(statearr_28835[(21)] = inst_28742);

(statearr_28835[(12)] = inst_28743);

return statearr_28835;
})();
var statearr_28836_28905 = state_28800__$1;
(statearr_28836_28905[(2)] = null);

(statearr_28836_28905[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (41))){
var inst_28759 = (state_28800[(25)]);
var inst_28775 = (state_28800[(2)]);
var inst_28776 = cljs.core.next(inst_28759);
var inst_28740 = inst_28776;
var inst_28741 = null;
var inst_28742 = (0);
var inst_28743 = (0);
var state_28800__$1 = (function (){var statearr_28837 = state_28800;
(statearr_28837[(27)] = inst_28775);

(statearr_28837[(20)] = inst_28740);

(statearr_28837[(9)] = inst_28741);

(statearr_28837[(21)] = inst_28742);

(statearr_28837[(12)] = inst_28743);

return statearr_28837;
})();
var statearr_28838_28906 = state_28800__$1;
(statearr_28838_28906[(2)] = null);

(statearr_28838_28906[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (43))){
var state_28800__$1 = state_28800;
var statearr_28839_28907 = state_28800__$1;
(statearr_28839_28907[(2)] = null);

(statearr_28839_28907[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (29))){
var inst_28784 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28840_28908 = state_28800__$1;
(statearr_28840_28908[(2)] = inst_28784);

(statearr_28840_28908[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (44))){
var inst_28793 = (state_28800[(2)]);
var state_28800__$1 = (function (){var statearr_28841 = state_28800;
(statearr_28841[(28)] = inst_28793);

return statearr_28841;
})();
var statearr_28842_28909 = state_28800__$1;
(statearr_28842_28909[(2)] = null);

(statearr_28842_28909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (6))){
var inst_28732 = (state_28800[(29)]);
var inst_28731 = cljs.core.deref(cs);
var inst_28732__$1 = cljs.core.keys(inst_28731);
var inst_28733 = cljs.core.count(inst_28732__$1);
var inst_28734 = cljs.core.reset_BANG_(dctr,inst_28733);
var inst_28739 = cljs.core.seq(inst_28732__$1);
var inst_28740 = inst_28739;
var inst_28741 = null;
var inst_28742 = (0);
var inst_28743 = (0);
var state_28800__$1 = (function (){var statearr_28843 = state_28800;
(statearr_28843[(20)] = inst_28740);

(statearr_28843[(9)] = inst_28741);

(statearr_28843[(21)] = inst_28742);

(statearr_28843[(29)] = inst_28732__$1);

(statearr_28843[(12)] = inst_28743);

(statearr_28843[(30)] = inst_28734);

return statearr_28843;
})();
var statearr_28844_28910 = state_28800__$1;
(statearr_28844_28910[(2)] = null);

(statearr_28844_28910[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (28))){
var inst_28740 = (state_28800[(20)]);
var inst_28759 = (state_28800[(25)]);
var inst_28759__$1 = cljs.core.seq(inst_28740);
var state_28800__$1 = (function (){var statearr_28845 = state_28800;
(statearr_28845[(25)] = inst_28759__$1);

return statearr_28845;
})();
if(inst_28759__$1){
var statearr_28846_28911 = state_28800__$1;
(statearr_28846_28911[(1)] = (33));

} else {
var statearr_28847_28912 = state_28800__$1;
(statearr_28847_28912[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (25))){
var inst_28742 = (state_28800[(21)]);
var inst_28743 = (state_28800[(12)]);
var inst_28745 = (inst_28743 < inst_28742);
var inst_28746 = inst_28745;
var state_28800__$1 = state_28800;
if(cljs.core.truth_(inst_28746)){
var statearr_28848_28913 = state_28800__$1;
(statearr_28848_28913[(1)] = (27));

} else {
var statearr_28849_28914 = state_28800__$1;
(statearr_28849_28914[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (34))){
var state_28800__$1 = state_28800;
var statearr_28850_28915 = state_28800__$1;
(statearr_28850_28915[(2)] = null);

(statearr_28850_28915[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (17))){
var state_28800__$1 = state_28800;
var statearr_28851_28916 = state_28800__$1;
(statearr_28851_28916[(2)] = null);

(statearr_28851_28916[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (3))){
var inst_28798 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28800__$1,inst_28798);
} else {
if((state_val_28801 === (12))){
var inst_28727 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28852_28917 = state_28800__$1;
(statearr_28852_28917[(2)] = inst_28727);

(statearr_28852_28917[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (2))){
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28800__$1,(4),ch);
} else {
if((state_val_28801 === (23))){
var state_28800__$1 = state_28800;
var statearr_28853_28918 = state_28800__$1;
(statearr_28853_28918[(2)] = null);

(statearr_28853_28918[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (35))){
var inst_28782 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28854_28919 = state_28800__$1;
(statearr_28854_28919[(2)] = inst_28782);

(statearr_28854_28919[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (19))){
var inst_28699 = (state_28800[(7)]);
var inst_28703 = cljs.core.chunk_first(inst_28699);
var inst_28704 = cljs.core.chunk_rest(inst_28699);
var inst_28705 = cljs.core.count(inst_28703);
var inst_28677 = inst_28704;
var inst_28678 = inst_28703;
var inst_28679 = inst_28705;
var inst_28680 = (0);
var state_28800__$1 = (function (){var statearr_28855 = state_28800;
(statearr_28855[(13)] = inst_28677);

(statearr_28855[(14)] = inst_28680);

(statearr_28855[(16)] = inst_28679);

(statearr_28855[(17)] = inst_28678);

return statearr_28855;
})();
var statearr_28856_28920 = state_28800__$1;
(statearr_28856_28920[(2)] = null);

(statearr_28856_28920[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (11))){
var inst_28677 = (state_28800[(13)]);
var inst_28699 = (state_28800[(7)]);
var inst_28699__$1 = cljs.core.seq(inst_28677);
var state_28800__$1 = (function (){var statearr_28857 = state_28800;
(statearr_28857[(7)] = inst_28699__$1);

return statearr_28857;
})();
if(inst_28699__$1){
var statearr_28858_28921 = state_28800__$1;
(statearr_28858_28921[(1)] = (16));

} else {
var statearr_28859_28922 = state_28800__$1;
(statearr_28859_28922[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (9))){
var inst_28729 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28860_28923 = state_28800__$1;
(statearr_28860_28923[(2)] = inst_28729);

(statearr_28860_28923[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (5))){
var inst_28675 = cljs.core.deref(cs);
var inst_28676 = cljs.core.seq(inst_28675);
var inst_28677 = inst_28676;
var inst_28678 = null;
var inst_28679 = (0);
var inst_28680 = (0);
var state_28800__$1 = (function (){var statearr_28861 = state_28800;
(statearr_28861[(13)] = inst_28677);

(statearr_28861[(14)] = inst_28680);

(statearr_28861[(16)] = inst_28679);

(statearr_28861[(17)] = inst_28678);

return statearr_28861;
})();
var statearr_28862_28924 = state_28800__$1;
(statearr_28862_28924[(2)] = null);

(statearr_28862_28924[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (14))){
var state_28800__$1 = state_28800;
var statearr_28863_28925 = state_28800__$1;
(statearr_28863_28925[(2)] = null);

(statearr_28863_28925[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (45))){
var inst_28790 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28864_28926 = state_28800__$1;
(statearr_28864_28926[(2)] = inst_28790);

(statearr_28864_28926[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (26))){
var inst_28732 = (state_28800[(29)]);
var inst_28786 = (state_28800[(2)]);
var inst_28787 = cljs.core.seq(inst_28732);
var state_28800__$1 = (function (){var statearr_28865 = state_28800;
(statearr_28865[(31)] = inst_28786);

return statearr_28865;
})();
if(inst_28787){
var statearr_28866_28927 = state_28800__$1;
(statearr_28866_28927[(1)] = (42));

} else {
var statearr_28867_28928 = state_28800__$1;
(statearr_28867_28928[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (16))){
var inst_28699 = (state_28800[(7)]);
var inst_28701 = cljs.core.chunked_seq_QMARK_(inst_28699);
var state_28800__$1 = state_28800;
if(inst_28701){
var statearr_28868_28929 = state_28800__$1;
(statearr_28868_28929[(1)] = (19));

} else {
var statearr_28869_28930 = state_28800__$1;
(statearr_28869_28930[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (38))){
var inst_28779 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28870_28931 = state_28800__$1;
(statearr_28870_28931[(2)] = inst_28779);

(statearr_28870_28931[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (30))){
var state_28800__$1 = state_28800;
var statearr_28871_28932 = state_28800__$1;
(statearr_28871_28932[(2)] = null);

(statearr_28871_28932[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (10))){
var inst_28680 = (state_28800[(14)]);
var inst_28678 = (state_28800[(17)]);
var inst_28688 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28678,inst_28680);
var inst_28689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28688,(0),null);
var inst_28690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28688,(1),null);
var state_28800__$1 = (function (){var statearr_28872 = state_28800;
(statearr_28872[(26)] = inst_28689);

return statearr_28872;
})();
if(cljs.core.truth_(inst_28690)){
var statearr_28873_28933 = state_28800__$1;
(statearr_28873_28933[(1)] = (13));

} else {
var statearr_28874_28934 = state_28800__$1;
(statearr_28874_28934[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (18))){
var inst_28725 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28875_28935 = state_28800__$1;
(statearr_28875_28935[(2)] = inst_28725);

(statearr_28875_28935[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (42))){
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28800__$1,(45),dchan);
} else {
if((state_val_28801 === (37))){
var inst_28759 = (state_28800[(25)]);
var inst_28768 = (state_28800[(23)]);
var inst_28668 = (state_28800[(10)]);
var inst_28768__$1 = cljs.core.first(inst_28759);
var inst_28769 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28768__$1,inst_28668,done);
var state_28800__$1 = (function (){var statearr_28876 = state_28800;
(statearr_28876[(23)] = inst_28768__$1);

return statearr_28876;
})();
if(cljs.core.truth_(inst_28769)){
var statearr_28877_28936 = state_28800__$1;
(statearr_28877_28936[(1)] = (39));

} else {
var statearr_28878_28937 = state_28800__$1;
(statearr_28878_28937[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28801 === (8))){
var inst_28680 = (state_28800[(14)]);
var inst_28679 = (state_28800[(16)]);
var inst_28682 = (inst_28680 < inst_28679);
var inst_28683 = inst_28682;
var state_28800__$1 = state_28800;
if(cljs.core.truth_(inst_28683)){
var statearr_28879_28938 = state_28800__$1;
(statearr_28879_28938[(1)] = (10));

} else {
var statearr_28880_28939 = state_28800__$1;
(statearr_28880_28939[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27990__auto__ = null;
var cljs$core$async$mult_$_state_machine__27990__auto____0 = (function (){
var statearr_28881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28881[(0)] = cljs$core$async$mult_$_state_machine__27990__auto__);

(statearr_28881[(1)] = (1));

return statearr_28881;
});
var cljs$core$async$mult_$_state_machine__27990__auto____1 = (function (state_28800){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_28800);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e28882){if((e28882 instanceof Object)){
var ex__27993__auto__ = e28882;
var statearr_28883_28940 = state_28800;
(statearr_28883_28940[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28800);

return cljs.core.cst$kw$recur;
} else {
throw e28882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__28941 = state_28800;
state_28800 = G__28941;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27990__auto__ = function(state_28800){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27990__auto____1.call(this,state_28800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27990__auto____0;
cljs$core$async$mult_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27990__auto____1;
return cljs$core$async$mult_$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_28884 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_28884[(6)] = c__28061__auto___28885);

return statearr_28884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28943 = arguments.length;
switch (G__28943) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_28945 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_28945(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28946 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_28946(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28947 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28947(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28948 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_28948(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28949 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28949(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28960 = arguments.length;
var i__4737__auto___28961 = (0);
while(true){
if((i__4737__auto___28961 < len__4736__auto___28960)){
args__4742__auto__.push((arguments[i__4737__auto___28961]));

var G__28962 = (i__4737__auto___28961 + (1));
i__4737__auto___28961 = G__28962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28954){
var map__28955 = p__28954;
var map__28955__$1 = (((((!((map__28955 == null))))?(((((map__28955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28955):map__28955);
var opts = map__28955__$1;
var statearr_28957_28963 = state;
(statearr_28957_28963[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_28958_28964 = state;
(statearr_28958_28964[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28959_28965 = state;
(statearr_28959_28965[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28950){
var G__28951 = cljs.core.first(seq28950);
var seq28950__$1 = cljs.core.next(seq28950);
var G__28952 = cljs.core.first(seq28950__$1);
var seq28950__$2 = cljs.core.next(seq28950__$1);
var G__28953 = cljs.core.first(seq28950__$2);
var seq28950__$3 = cljs.core.next(seq28950__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28951,G__28952,G__28953,seq28950__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28966 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28967){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28967 = meta28967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28968,meta28967__$1){
var self__ = this;
var _28968__$1 = this;
return (new cljs.core.async.t_cljs$core$async28966(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28967__$1));
}));

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28968){
var self__ = this;
var _28968__$1 = this;
return self__.meta28967;
}));

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28966.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta28967], null);
}));

(cljs.core.async.t_cljs$core$async28966.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28966");

(cljs.core.async.t_cljs$core$async28966.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28966");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28966.
 */
cljs.core.async.__GT_t_cljs$core$async28966 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28966(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28967){
return (new cljs.core.async.t_cljs$core$async28966(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28967));
});

}

return (new cljs.core.async.t_cljs$core$async28966(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28061__auto___29130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29070){
var state_val_29071 = (state_29070[(1)]);
if((state_val_29071 === (7))){
var inst_28985 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29072_29131 = state_29070__$1;
(statearr_29072_29131[(2)] = inst_28985);

(statearr_29072_29131[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (20))){
var inst_28997 = (state_29070[(7)]);
var state_29070__$1 = state_29070;
var statearr_29073_29132 = state_29070__$1;
(statearr_29073_29132[(2)] = inst_28997);

(statearr_29073_29132[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (27))){
var state_29070__$1 = state_29070;
var statearr_29074_29133 = state_29070__$1;
(statearr_29074_29133[(2)] = null);

(statearr_29074_29133[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (1))){
var inst_28972 = (state_29070[(8)]);
var inst_28972__$1 = calc_state();
var inst_28974 = (inst_28972__$1 == null);
var inst_28975 = cljs.core.not(inst_28974);
var state_29070__$1 = (function (){var statearr_29075 = state_29070;
(statearr_29075[(8)] = inst_28972__$1);

return statearr_29075;
})();
if(inst_28975){
var statearr_29076_29134 = state_29070__$1;
(statearr_29076_29134[(1)] = (2));

} else {
var statearr_29077_29135 = state_29070__$1;
(statearr_29077_29135[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (24))){
var inst_29021 = (state_29070[(9)]);
var inst_29030 = (state_29070[(10)]);
var inst_29044 = (state_29070[(11)]);
var inst_29044__$1 = (inst_29021.cljs$core$IFn$_invoke$arity$1 ? inst_29021.cljs$core$IFn$_invoke$arity$1(inst_29030) : inst_29021.call(null,inst_29030));
var state_29070__$1 = (function (){var statearr_29078 = state_29070;
(statearr_29078[(11)] = inst_29044__$1);

return statearr_29078;
})();
if(cljs.core.truth_(inst_29044__$1)){
var statearr_29079_29136 = state_29070__$1;
(statearr_29079_29136[(1)] = (29));

} else {
var statearr_29080_29137 = state_29070__$1;
(statearr_29080_29137[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (4))){
var inst_28988 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_28988)){
var statearr_29081_29138 = state_29070__$1;
(statearr_29081_29138[(1)] = (8));

} else {
var statearr_29082_29139 = state_29070__$1;
(statearr_29082_29139[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (15))){
var inst_29015 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_29015)){
var statearr_29083_29140 = state_29070__$1;
(statearr_29083_29140[(1)] = (19));

} else {
var statearr_29084_29141 = state_29070__$1;
(statearr_29084_29141[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (21))){
var inst_29020 = (state_29070[(12)]);
var inst_29020__$1 = (state_29070[(2)]);
var inst_29021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29020__$1,cljs.core.cst$kw$solos);
var inst_29022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29020__$1,cljs.core.cst$kw$mutes);
var inst_29023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29020__$1,cljs.core.cst$kw$reads);
var state_29070__$1 = (function (){var statearr_29085 = state_29070;
(statearr_29085[(9)] = inst_29021);

(statearr_29085[(13)] = inst_29022);

(statearr_29085[(12)] = inst_29020__$1);

return statearr_29085;
})();
return cljs.core.async.ioc_alts_BANG_(state_29070__$1,(22),inst_29023);
} else {
if((state_val_29071 === (31))){
var inst_29052 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_29052)){
var statearr_29086_29142 = state_29070__$1;
(statearr_29086_29142[(1)] = (32));

} else {
var statearr_29087_29143 = state_29070__$1;
(statearr_29087_29143[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (32))){
var inst_29029 = (state_29070[(14)]);
var state_29070__$1 = state_29070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29070__$1,(35),out,inst_29029);
} else {
if((state_val_29071 === (33))){
var inst_29020 = (state_29070[(12)]);
var inst_28997 = inst_29020;
var state_29070__$1 = (function (){var statearr_29088 = state_29070;
(statearr_29088[(7)] = inst_28997);

return statearr_29088;
})();
var statearr_29089_29144 = state_29070__$1;
(statearr_29089_29144[(2)] = null);

(statearr_29089_29144[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (13))){
var inst_28997 = (state_29070[(7)]);
var inst_29004 = inst_28997.cljs$lang$protocol_mask$partition0$;
var inst_29005 = (inst_29004 & (64));
var inst_29006 = inst_28997.cljs$core$ISeq$;
var inst_29007 = (cljs.core.PROTOCOL_SENTINEL === inst_29006);
var inst_29008 = ((inst_29005) || (inst_29007));
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_29008)){
var statearr_29090_29145 = state_29070__$1;
(statearr_29090_29145[(1)] = (16));

} else {
var statearr_29091_29146 = state_29070__$1;
(statearr_29091_29146[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (22))){
var inst_29029 = (state_29070[(14)]);
var inst_29030 = (state_29070[(10)]);
var inst_29028 = (state_29070[(2)]);
var inst_29029__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29028,(0),null);
var inst_29030__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29028,(1),null);
var inst_29031 = (inst_29029__$1 == null);
var inst_29032 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29030__$1,change);
var inst_29033 = ((inst_29031) || (inst_29032));
var state_29070__$1 = (function (){var statearr_29092 = state_29070;
(statearr_29092[(14)] = inst_29029__$1);

(statearr_29092[(10)] = inst_29030__$1);

return statearr_29092;
})();
if(cljs.core.truth_(inst_29033)){
var statearr_29093_29147 = state_29070__$1;
(statearr_29093_29147[(1)] = (23));

} else {
var statearr_29094_29148 = state_29070__$1;
(statearr_29094_29148[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (36))){
var inst_29020 = (state_29070[(12)]);
var inst_28997 = inst_29020;
var state_29070__$1 = (function (){var statearr_29095 = state_29070;
(statearr_29095[(7)] = inst_28997);

return statearr_29095;
})();
var statearr_29096_29149 = state_29070__$1;
(statearr_29096_29149[(2)] = null);

(statearr_29096_29149[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (29))){
var inst_29044 = (state_29070[(11)]);
var state_29070__$1 = state_29070;
var statearr_29097_29150 = state_29070__$1;
(statearr_29097_29150[(2)] = inst_29044);

(statearr_29097_29150[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (6))){
var state_29070__$1 = state_29070;
var statearr_29098_29151 = state_29070__$1;
(statearr_29098_29151[(2)] = false);

(statearr_29098_29151[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (28))){
var inst_29040 = (state_29070[(2)]);
var inst_29041 = calc_state();
var inst_28997 = inst_29041;
var state_29070__$1 = (function (){var statearr_29099 = state_29070;
(statearr_29099[(7)] = inst_28997);

(statearr_29099[(15)] = inst_29040);

return statearr_29099;
})();
var statearr_29100_29152 = state_29070__$1;
(statearr_29100_29152[(2)] = null);

(statearr_29100_29152[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (25))){
var inst_29066 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29101_29153 = state_29070__$1;
(statearr_29101_29153[(2)] = inst_29066);

(statearr_29101_29153[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (34))){
var inst_29064 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29102_29154 = state_29070__$1;
(statearr_29102_29154[(2)] = inst_29064);

(statearr_29102_29154[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (17))){
var state_29070__$1 = state_29070;
var statearr_29103_29155 = state_29070__$1;
(statearr_29103_29155[(2)] = false);

(statearr_29103_29155[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (3))){
var state_29070__$1 = state_29070;
var statearr_29104_29156 = state_29070__$1;
(statearr_29104_29156[(2)] = false);

(statearr_29104_29156[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (12))){
var inst_29068 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29070__$1,inst_29068);
} else {
if((state_val_29071 === (2))){
var inst_28972 = (state_29070[(8)]);
var inst_28977 = inst_28972.cljs$lang$protocol_mask$partition0$;
var inst_28978 = (inst_28977 & (64));
var inst_28979 = inst_28972.cljs$core$ISeq$;
var inst_28980 = (cljs.core.PROTOCOL_SENTINEL === inst_28979);
var inst_28981 = ((inst_28978) || (inst_28980));
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_28981)){
var statearr_29105_29157 = state_29070__$1;
(statearr_29105_29157[(1)] = (5));

} else {
var statearr_29106_29158 = state_29070__$1;
(statearr_29106_29158[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (23))){
var inst_29029 = (state_29070[(14)]);
var inst_29035 = (inst_29029 == null);
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_29035)){
var statearr_29107_29159 = state_29070__$1;
(statearr_29107_29159[(1)] = (26));

} else {
var statearr_29108_29160 = state_29070__$1;
(statearr_29108_29160[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (35))){
var inst_29055 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_29055)){
var statearr_29109_29161 = state_29070__$1;
(statearr_29109_29161[(1)] = (36));

} else {
var statearr_29110_29162 = state_29070__$1;
(statearr_29110_29162[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (19))){
var inst_28997 = (state_29070[(7)]);
var inst_29017 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28997);
var state_29070__$1 = state_29070;
var statearr_29111_29163 = state_29070__$1;
(statearr_29111_29163[(2)] = inst_29017);

(statearr_29111_29163[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (11))){
var inst_28997 = (state_29070[(7)]);
var inst_29001 = (inst_28997 == null);
var inst_29002 = cljs.core.not(inst_29001);
var state_29070__$1 = state_29070;
if(inst_29002){
var statearr_29112_29164 = state_29070__$1;
(statearr_29112_29164[(1)] = (13));

} else {
var statearr_29113_29165 = state_29070__$1;
(statearr_29113_29165[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (9))){
var inst_28972 = (state_29070[(8)]);
var state_29070__$1 = state_29070;
var statearr_29114_29166 = state_29070__$1;
(statearr_29114_29166[(2)] = inst_28972);

(statearr_29114_29166[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (5))){
var state_29070__$1 = state_29070;
var statearr_29115_29167 = state_29070__$1;
(statearr_29115_29167[(2)] = true);

(statearr_29115_29167[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (14))){
var state_29070__$1 = state_29070;
var statearr_29116_29168 = state_29070__$1;
(statearr_29116_29168[(2)] = false);

(statearr_29116_29168[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (26))){
var inst_29030 = (state_29070[(10)]);
var inst_29037 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29030);
var state_29070__$1 = state_29070;
var statearr_29117_29169 = state_29070__$1;
(statearr_29117_29169[(2)] = inst_29037);

(statearr_29117_29169[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (16))){
var state_29070__$1 = state_29070;
var statearr_29118_29170 = state_29070__$1;
(statearr_29118_29170[(2)] = true);

(statearr_29118_29170[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (38))){
var inst_29060 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29119_29171 = state_29070__$1;
(statearr_29119_29171[(2)] = inst_29060);

(statearr_29119_29171[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (30))){
var inst_29021 = (state_29070[(9)]);
var inst_29022 = (state_29070[(13)]);
var inst_29030 = (state_29070[(10)]);
var inst_29047 = cljs.core.empty_QMARK_(inst_29021);
var inst_29048 = (inst_29022.cljs$core$IFn$_invoke$arity$1 ? inst_29022.cljs$core$IFn$_invoke$arity$1(inst_29030) : inst_29022.call(null,inst_29030));
var inst_29049 = cljs.core.not(inst_29048);
var inst_29050 = ((inst_29047) && (inst_29049));
var state_29070__$1 = state_29070;
var statearr_29120_29172 = state_29070__$1;
(statearr_29120_29172[(2)] = inst_29050);

(statearr_29120_29172[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (10))){
var inst_28972 = (state_29070[(8)]);
var inst_28993 = (state_29070[(2)]);
var inst_28994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28993,cljs.core.cst$kw$solos);
var inst_28995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28993,cljs.core.cst$kw$mutes);
var inst_28996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28993,cljs.core.cst$kw$reads);
var inst_28997 = inst_28972;
var state_29070__$1 = (function (){var statearr_29121 = state_29070;
(statearr_29121[(16)] = inst_28996);

(statearr_29121[(17)] = inst_28994);

(statearr_29121[(7)] = inst_28997);

(statearr_29121[(18)] = inst_28995);

return statearr_29121;
})();
var statearr_29122_29173 = state_29070__$1;
(statearr_29122_29173[(2)] = null);

(statearr_29122_29173[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (18))){
var inst_29012 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29123_29174 = state_29070__$1;
(statearr_29123_29174[(2)] = inst_29012);

(statearr_29123_29174[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (37))){
var state_29070__$1 = state_29070;
var statearr_29124_29175 = state_29070__$1;
(statearr_29124_29175[(2)] = null);

(statearr_29124_29175[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29071 === (8))){
var inst_28972 = (state_29070[(8)]);
var inst_28990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28972);
var state_29070__$1 = state_29070;
var statearr_29125_29176 = state_29070__$1;
(statearr_29125_29176[(2)] = inst_28990);

(statearr_29125_29176[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27990__auto__ = null;
var cljs$core$async$mix_$_state_machine__27990__auto____0 = (function (){
var statearr_29126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29126[(0)] = cljs$core$async$mix_$_state_machine__27990__auto__);

(statearr_29126[(1)] = (1));

return statearr_29126;
});
var cljs$core$async$mix_$_state_machine__27990__auto____1 = (function (state_29070){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29070);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29127){if((e29127 instanceof Object)){
var ex__27993__auto__ = e29127;
var statearr_29128_29177 = state_29070;
(statearr_29128_29177[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29070);

return cljs.core.cst$kw$recur;
} else {
throw e29127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29178 = state_29070;
state_29070 = G__29178;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27990__auto__ = function(state_29070){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27990__auto____1.call(this,state_29070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27990__auto____0;
cljs$core$async$mix_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27990__auto____1;
return cljs$core$async$mix_$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29129 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29129[(6)] = c__28061__auto___29130);

return statearr_29129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_29181 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29181(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29182 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29182(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29183 = (function() {
var G__29184 = null;
var G__29184__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__29184__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__29184 = function(p,v){
switch(arguments.length){
case 1:
return G__29184__1.call(this,p);
case 2:
return G__29184__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29184.cljs$core$IFn$_invoke$arity$1 = G__29184__1;
G__29184.cljs$core$IFn$_invoke$arity$2 = G__29184__2;
return G__29184;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29180 = arguments.length;
switch (G__29180) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29183.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29183.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29188 = arguments.length;
switch (G__29188) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29186_SHARP_){
if(cljs.core.truth_((p1__29186_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29186_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29186_SHARP_.call(null,topic)))){
return p1__29186_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29186_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29189 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29190){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29190 = meta29190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29191,meta29190__$1){
var self__ = this;
var _29191__$1 = this;
return (new cljs.core.async.t_cljs$core$async29189(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29190__$1));
}));

(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29191){
var self__ = this;
var _29191__$1 = this;
return self__.meta29190;
}));

(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta29190], null);
}));

(cljs.core.async.t_cljs$core$async29189.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29189");

(cljs.core.async.t_cljs$core$async29189.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29189");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29189.
 */
cljs.core.async.__GT_t_cljs$core$async29189 = (function cljs$core$async$__GT_t_cljs$core$async29189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29190){
return (new cljs.core.async.t_cljs$core$async29189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29190));
});

}

return (new cljs.core.async.t_cljs$core$async29189(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28061__auto___29309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29263){
var state_val_29264 = (state_29263[(1)]);
if((state_val_29264 === (7))){
var inst_29259 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
var statearr_29265_29310 = state_29263__$1;
(statearr_29265_29310[(2)] = inst_29259);

(statearr_29265_29310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (20))){
var state_29263__$1 = state_29263;
var statearr_29266_29311 = state_29263__$1;
(statearr_29266_29311[(2)] = null);

(statearr_29266_29311[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (1))){
var state_29263__$1 = state_29263;
var statearr_29267_29312 = state_29263__$1;
(statearr_29267_29312[(2)] = null);

(statearr_29267_29312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (24))){
var inst_29242 = (state_29263[(7)]);
var inst_29251 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29242);
var state_29263__$1 = state_29263;
var statearr_29268_29313 = state_29263__$1;
(statearr_29268_29313[(2)] = inst_29251);

(statearr_29268_29313[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (4))){
var inst_29194 = (state_29263[(8)]);
var inst_29194__$1 = (state_29263[(2)]);
var inst_29195 = (inst_29194__$1 == null);
var state_29263__$1 = (function (){var statearr_29269 = state_29263;
(statearr_29269[(8)] = inst_29194__$1);

return statearr_29269;
})();
if(cljs.core.truth_(inst_29195)){
var statearr_29270_29314 = state_29263__$1;
(statearr_29270_29314[(1)] = (5));

} else {
var statearr_29271_29315 = state_29263__$1;
(statearr_29271_29315[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (15))){
var inst_29236 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
var statearr_29272_29316 = state_29263__$1;
(statearr_29272_29316[(2)] = inst_29236);

(statearr_29272_29316[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (21))){
var inst_29256 = (state_29263[(2)]);
var state_29263__$1 = (function (){var statearr_29273 = state_29263;
(statearr_29273[(9)] = inst_29256);

return statearr_29273;
})();
var statearr_29274_29317 = state_29263__$1;
(statearr_29274_29317[(2)] = null);

(statearr_29274_29317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (13))){
var inst_29218 = (state_29263[(10)]);
var inst_29220 = cljs.core.chunked_seq_QMARK_(inst_29218);
var state_29263__$1 = state_29263;
if(inst_29220){
var statearr_29275_29318 = state_29263__$1;
(statearr_29275_29318[(1)] = (16));

} else {
var statearr_29276_29319 = state_29263__$1;
(statearr_29276_29319[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (22))){
var inst_29248 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
if(cljs.core.truth_(inst_29248)){
var statearr_29277_29320 = state_29263__$1;
(statearr_29277_29320[(1)] = (23));

} else {
var statearr_29278_29321 = state_29263__$1;
(statearr_29278_29321[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (6))){
var inst_29194 = (state_29263[(8)]);
var inst_29244 = (state_29263[(11)]);
var inst_29242 = (state_29263[(7)]);
var inst_29242__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29194) : topic_fn.call(null,inst_29194));
var inst_29243 = cljs.core.deref(mults);
var inst_29244__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29243,inst_29242__$1);
var state_29263__$1 = (function (){var statearr_29279 = state_29263;
(statearr_29279[(11)] = inst_29244__$1);

(statearr_29279[(7)] = inst_29242__$1);

return statearr_29279;
})();
if(cljs.core.truth_(inst_29244__$1)){
var statearr_29280_29322 = state_29263__$1;
(statearr_29280_29322[(1)] = (19));

} else {
var statearr_29281_29323 = state_29263__$1;
(statearr_29281_29323[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (25))){
var inst_29253 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
var statearr_29282_29324 = state_29263__$1;
(statearr_29282_29324[(2)] = inst_29253);

(statearr_29282_29324[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (17))){
var inst_29218 = (state_29263[(10)]);
var inst_29227 = cljs.core.first(inst_29218);
var inst_29228 = cljs.core.async.muxch_STAR_(inst_29227);
var inst_29229 = cljs.core.async.close_BANG_(inst_29228);
var inst_29230 = cljs.core.next(inst_29218);
var inst_29204 = inst_29230;
var inst_29205 = null;
var inst_29206 = (0);
var inst_29207 = (0);
var state_29263__$1 = (function (){var statearr_29283 = state_29263;
(statearr_29283[(12)] = inst_29207);

(statearr_29283[(13)] = inst_29206);

(statearr_29283[(14)] = inst_29205);

(statearr_29283[(15)] = inst_29204);

(statearr_29283[(16)] = inst_29229);

return statearr_29283;
})();
var statearr_29284_29325 = state_29263__$1;
(statearr_29284_29325[(2)] = null);

(statearr_29284_29325[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (3))){
var inst_29261 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29263__$1,inst_29261);
} else {
if((state_val_29264 === (12))){
var inst_29238 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
var statearr_29285_29326 = state_29263__$1;
(statearr_29285_29326[(2)] = inst_29238);

(statearr_29285_29326[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (2))){
var state_29263__$1 = state_29263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29263__$1,(4),ch);
} else {
if((state_val_29264 === (23))){
var state_29263__$1 = state_29263;
var statearr_29286_29327 = state_29263__$1;
(statearr_29286_29327[(2)] = null);

(statearr_29286_29327[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (19))){
var inst_29194 = (state_29263[(8)]);
var inst_29244 = (state_29263[(11)]);
var inst_29246 = cljs.core.async.muxch_STAR_(inst_29244);
var state_29263__$1 = state_29263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29263__$1,(22),inst_29246,inst_29194);
} else {
if((state_val_29264 === (11))){
var inst_29218 = (state_29263[(10)]);
var inst_29204 = (state_29263[(15)]);
var inst_29218__$1 = cljs.core.seq(inst_29204);
var state_29263__$1 = (function (){var statearr_29287 = state_29263;
(statearr_29287[(10)] = inst_29218__$1);

return statearr_29287;
})();
if(inst_29218__$1){
var statearr_29288_29328 = state_29263__$1;
(statearr_29288_29328[(1)] = (13));

} else {
var statearr_29289_29329 = state_29263__$1;
(statearr_29289_29329[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (9))){
var inst_29240 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
var statearr_29290_29330 = state_29263__$1;
(statearr_29290_29330[(2)] = inst_29240);

(statearr_29290_29330[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (5))){
var inst_29201 = cljs.core.deref(mults);
var inst_29202 = cljs.core.vals(inst_29201);
var inst_29203 = cljs.core.seq(inst_29202);
var inst_29204 = inst_29203;
var inst_29205 = null;
var inst_29206 = (0);
var inst_29207 = (0);
var state_29263__$1 = (function (){var statearr_29291 = state_29263;
(statearr_29291[(12)] = inst_29207);

(statearr_29291[(13)] = inst_29206);

(statearr_29291[(14)] = inst_29205);

(statearr_29291[(15)] = inst_29204);

return statearr_29291;
})();
var statearr_29292_29331 = state_29263__$1;
(statearr_29292_29331[(2)] = null);

(statearr_29292_29331[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (14))){
var state_29263__$1 = state_29263;
var statearr_29296_29332 = state_29263__$1;
(statearr_29296_29332[(2)] = null);

(statearr_29296_29332[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (16))){
var inst_29218 = (state_29263[(10)]);
var inst_29222 = cljs.core.chunk_first(inst_29218);
var inst_29223 = cljs.core.chunk_rest(inst_29218);
var inst_29224 = cljs.core.count(inst_29222);
var inst_29204 = inst_29223;
var inst_29205 = inst_29222;
var inst_29206 = inst_29224;
var inst_29207 = (0);
var state_29263__$1 = (function (){var statearr_29297 = state_29263;
(statearr_29297[(12)] = inst_29207);

(statearr_29297[(13)] = inst_29206);

(statearr_29297[(14)] = inst_29205);

(statearr_29297[(15)] = inst_29204);

return statearr_29297;
})();
var statearr_29298_29333 = state_29263__$1;
(statearr_29298_29333[(2)] = null);

(statearr_29298_29333[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (10))){
var inst_29207 = (state_29263[(12)]);
var inst_29206 = (state_29263[(13)]);
var inst_29205 = (state_29263[(14)]);
var inst_29204 = (state_29263[(15)]);
var inst_29212 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29205,inst_29207);
var inst_29213 = cljs.core.async.muxch_STAR_(inst_29212);
var inst_29214 = cljs.core.async.close_BANG_(inst_29213);
var inst_29215 = (inst_29207 + (1));
var tmp29293 = inst_29206;
var tmp29294 = inst_29205;
var tmp29295 = inst_29204;
var inst_29204__$1 = tmp29295;
var inst_29205__$1 = tmp29294;
var inst_29206__$1 = tmp29293;
var inst_29207__$1 = inst_29215;
var state_29263__$1 = (function (){var statearr_29299 = state_29263;
(statearr_29299[(12)] = inst_29207__$1);

(statearr_29299[(13)] = inst_29206__$1);

(statearr_29299[(14)] = inst_29205__$1);

(statearr_29299[(15)] = inst_29204__$1);

(statearr_29299[(17)] = inst_29214);

return statearr_29299;
})();
var statearr_29300_29334 = state_29263__$1;
(statearr_29300_29334[(2)] = null);

(statearr_29300_29334[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (18))){
var inst_29233 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
var statearr_29301_29335 = state_29263__$1;
(statearr_29301_29335[(2)] = inst_29233);

(statearr_29301_29335[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29264 === (8))){
var inst_29207 = (state_29263[(12)]);
var inst_29206 = (state_29263[(13)]);
var inst_29209 = (inst_29207 < inst_29206);
var inst_29210 = inst_29209;
var state_29263__$1 = state_29263;
if(cljs.core.truth_(inst_29210)){
var statearr_29302_29336 = state_29263__$1;
(statearr_29302_29336[(1)] = (10));

} else {
var statearr_29303_29337 = state_29263__$1;
(statearr_29303_29337[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_29304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29304[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_29304[(1)] = (1));

return statearr_29304;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_29263){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29263);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29305){if((e29305 instanceof Object)){
var ex__27993__auto__ = e29305;
var statearr_29306_29338 = state_29263;
(statearr_29306_29338[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29263);

return cljs.core.cst$kw$recur;
} else {
throw e29305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29339 = state_29263;
state_29263 = G__29339;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_29263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_29263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29307 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29307[(6)] = c__28061__auto___29309);

return statearr_29307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29341 = arguments.length;
switch (G__29341) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29344 = arguments.length;
switch (G__29344) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29347 = arguments.length;
switch (G__29347) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28061__auto___29414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29386){
var state_val_29387 = (state_29386[(1)]);
if((state_val_29387 === (7))){
var state_29386__$1 = state_29386;
var statearr_29388_29415 = state_29386__$1;
(statearr_29388_29415[(2)] = null);

(statearr_29388_29415[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (1))){
var state_29386__$1 = state_29386;
var statearr_29389_29416 = state_29386__$1;
(statearr_29389_29416[(2)] = null);

(statearr_29389_29416[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (4))){
var inst_29350 = (state_29386[(7)]);
var inst_29352 = (inst_29350 < cnt);
var state_29386__$1 = state_29386;
if(cljs.core.truth_(inst_29352)){
var statearr_29390_29417 = state_29386__$1;
(statearr_29390_29417[(1)] = (6));

} else {
var statearr_29391_29418 = state_29386__$1;
(statearr_29391_29418[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (15))){
var inst_29382 = (state_29386[(2)]);
var state_29386__$1 = state_29386;
var statearr_29392_29419 = state_29386__$1;
(statearr_29392_29419[(2)] = inst_29382);

(statearr_29392_29419[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (13))){
var inst_29375 = cljs.core.async.close_BANG_(out);
var state_29386__$1 = state_29386;
var statearr_29393_29420 = state_29386__$1;
(statearr_29393_29420[(2)] = inst_29375);

(statearr_29393_29420[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (6))){
var state_29386__$1 = state_29386;
var statearr_29394_29421 = state_29386__$1;
(statearr_29394_29421[(2)] = null);

(statearr_29394_29421[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (3))){
var inst_29384 = (state_29386[(2)]);
var state_29386__$1 = state_29386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29386__$1,inst_29384);
} else {
if((state_val_29387 === (12))){
var inst_29372 = (state_29386[(8)]);
var inst_29372__$1 = (state_29386[(2)]);
var inst_29373 = cljs.core.some(cljs.core.nil_QMARK_,inst_29372__$1);
var state_29386__$1 = (function (){var statearr_29395 = state_29386;
(statearr_29395[(8)] = inst_29372__$1);

return statearr_29395;
})();
if(cljs.core.truth_(inst_29373)){
var statearr_29396_29422 = state_29386__$1;
(statearr_29396_29422[(1)] = (13));

} else {
var statearr_29397_29423 = state_29386__$1;
(statearr_29397_29423[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (2))){
var inst_29349 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29350 = (0);
var state_29386__$1 = (function (){var statearr_29398 = state_29386;
(statearr_29398[(7)] = inst_29350);

(statearr_29398[(9)] = inst_29349);

return statearr_29398;
})();
var statearr_29399_29424 = state_29386__$1;
(statearr_29399_29424[(2)] = null);

(statearr_29399_29424[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (11))){
var inst_29350 = (state_29386[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_29386,(10),Object,null,(9));
var inst_29359 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29350) : chs__$1.call(null,inst_29350));
var inst_29360 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29350) : done.call(null,inst_29350));
var inst_29361 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29359,inst_29360);
var state_29386__$1 = state_29386;
var statearr_29400_29425 = state_29386__$1;
(statearr_29400_29425[(2)] = inst_29361);


cljs.core.async.impl.ioc_helpers.process_exception(state_29386__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (9))){
var inst_29350 = (state_29386[(7)]);
var inst_29363 = (state_29386[(2)]);
var inst_29364 = (inst_29350 + (1));
var inst_29350__$1 = inst_29364;
var state_29386__$1 = (function (){var statearr_29401 = state_29386;
(statearr_29401[(7)] = inst_29350__$1);

(statearr_29401[(10)] = inst_29363);

return statearr_29401;
})();
var statearr_29402_29426 = state_29386__$1;
(statearr_29402_29426[(2)] = null);

(statearr_29402_29426[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (5))){
var inst_29370 = (state_29386[(2)]);
var state_29386__$1 = (function (){var statearr_29403 = state_29386;
(statearr_29403[(11)] = inst_29370);

return statearr_29403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29386__$1,(12),dchan);
} else {
if((state_val_29387 === (14))){
var inst_29372 = (state_29386[(8)]);
var inst_29377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29372);
var state_29386__$1 = state_29386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29386__$1,(16),out,inst_29377);
} else {
if((state_val_29387 === (16))){
var inst_29379 = (state_29386[(2)]);
var state_29386__$1 = (function (){var statearr_29404 = state_29386;
(statearr_29404[(12)] = inst_29379);

return statearr_29404;
})();
var statearr_29405_29427 = state_29386__$1;
(statearr_29405_29427[(2)] = null);

(statearr_29405_29427[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (10))){
var inst_29354 = (state_29386[(2)]);
var inst_29355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29386__$1 = (function (){var statearr_29406 = state_29386;
(statearr_29406[(13)] = inst_29354);

return statearr_29406;
})();
var statearr_29407_29428 = state_29386__$1;
(statearr_29407_29428[(2)] = inst_29355);


cljs.core.async.impl.ioc_helpers.process_exception(state_29386__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_29387 === (8))){
var inst_29368 = (state_29386[(2)]);
var state_29386__$1 = state_29386;
var statearr_29408_29429 = state_29386__$1;
(statearr_29408_29429[(2)] = inst_29368);

(statearr_29408_29429[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_29409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29409[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_29409[(1)] = (1));

return statearr_29409;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_29386){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29386);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29410){if((e29410 instanceof Object)){
var ex__27993__auto__ = e29410;
var statearr_29411_29430 = state_29386;
(statearr_29411_29430[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29386);

return cljs.core.cst$kw$recur;
} else {
throw e29410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29431 = state_29386;
state_29386 = G__29431;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_29386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_29386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29412 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29412[(6)] = c__28061__auto___29414);

return statearr_29412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29434 = arguments.length;
switch (G__29434) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28061__auto___29488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29466){
var state_val_29467 = (state_29466[(1)]);
if((state_val_29467 === (7))){
var inst_29446 = (state_29466[(7)]);
var inst_29445 = (state_29466[(8)]);
var inst_29445__$1 = (state_29466[(2)]);
var inst_29446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29445__$1,(0),null);
var inst_29447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29445__$1,(1),null);
var inst_29448 = (inst_29446__$1 == null);
var state_29466__$1 = (function (){var statearr_29468 = state_29466;
(statearr_29468[(7)] = inst_29446__$1);

(statearr_29468[(8)] = inst_29445__$1);

(statearr_29468[(9)] = inst_29447);

return statearr_29468;
})();
if(cljs.core.truth_(inst_29448)){
var statearr_29469_29489 = state_29466__$1;
(statearr_29469_29489[(1)] = (8));

} else {
var statearr_29470_29490 = state_29466__$1;
(statearr_29470_29490[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29467 === (1))){
var inst_29435 = cljs.core.vec(chs);
var inst_29436 = inst_29435;
var state_29466__$1 = (function (){var statearr_29471 = state_29466;
(statearr_29471[(10)] = inst_29436);

return statearr_29471;
})();
var statearr_29472_29491 = state_29466__$1;
(statearr_29472_29491[(2)] = null);

(statearr_29472_29491[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29467 === (4))){
var inst_29436 = (state_29466[(10)]);
var state_29466__$1 = state_29466;
return cljs.core.async.ioc_alts_BANG_(state_29466__$1,(7),inst_29436);
} else {
if((state_val_29467 === (6))){
var inst_29462 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29473_29492 = state_29466__$1;
(statearr_29473_29492[(2)] = inst_29462);

(statearr_29473_29492[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29467 === (3))){
var inst_29464 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29466__$1,inst_29464);
} else {
if((state_val_29467 === (2))){
var inst_29436 = (state_29466[(10)]);
var inst_29438 = cljs.core.count(inst_29436);
var inst_29439 = (inst_29438 > (0));
var state_29466__$1 = state_29466;
if(cljs.core.truth_(inst_29439)){
var statearr_29475_29493 = state_29466__$1;
(statearr_29475_29493[(1)] = (4));

} else {
var statearr_29476_29494 = state_29466__$1;
(statearr_29476_29494[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29467 === (11))){
var inst_29436 = (state_29466[(10)]);
var inst_29455 = (state_29466[(2)]);
var tmp29474 = inst_29436;
var inst_29436__$1 = tmp29474;
var state_29466__$1 = (function (){var statearr_29477 = state_29466;
(statearr_29477[(10)] = inst_29436__$1);

(statearr_29477[(11)] = inst_29455);

return statearr_29477;
})();
var statearr_29478_29495 = state_29466__$1;
(statearr_29478_29495[(2)] = null);

(statearr_29478_29495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29467 === (9))){
var inst_29446 = (state_29466[(7)]);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29466__$1,(11),out,inst_29446);
} else {
if((state_val_29467 === (5))){
var inst_29460 = cljs.core.async.close_BANG_(out);
var state_29466__$1 = state_29466;
var statearr_29479_29496 = state_29466__$1;
(statearr_29479_29496[(2)] = inst_29460);

(statearr_29479_29496[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29467 === (10))){
var inst_29458 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29480_29497 = state_29466__$1;
(statearr_29480_29497[(2)] = inst_29458);

(statearr_29480_29497[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29467 === (8))){
var inst_29446 = (state_29466[(7)]);
var inst_29436 = (state_29466[(10)]);
var inst_29445 = (state_29466[(8)]);
var inst_29447 = (state_29466[(9)]);
var inst_29450 = (function (){var cs = inst_29436;
var vec__29441 = inst_29445;
var v = inst_29446;
var c = inst_29447;
return (function (p1__29432_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29432_SHARP_);
});
})();
var inst_29451 = cljs.core.filterv(inst_29450,inst_29436);
var inst_29436__$1 = inst_29451;
var state_29466__$1 = (function (){var statearr_29481 = state_29466;
(statearr_29481[(10)] = inst_29436__$1);

return statearr_29481;
})();
var statearr_29482_29498 = state_29466__$1;
(statearr_29482_29498[(2)] = null);

(statearr_29482_29498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_29483 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29483[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_29483[(1)] = (1));

return statearr_29483;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_29466){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29466);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29484){if((e29484 instanceof Object)){
var ex__27993__auto__ = e29484;
var statearr_29485_29499 = state_29466;
(statearr_29485_29499[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29466);

return cljs.core.cst$kw$recur;
} else {
throw e29484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29500 = state_29466;
state_29466 = G__29500;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_29466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_29466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29486 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29486[(6)] = c__28061__auto___29488);

return statearr_29486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29502 = arguments.length;
switch (G__29502) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28061__auto___29547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29526){
var state_val_29527 = (state_29526[(1)]);
if((state_val_29527 === (7))){
var inst_29508 = (state_29526[(7)]);
var inst_29508__$1 = (state_29526[(2)]);
var inst_29509 = (inst_29508__$1 == null);
var inst_29510 = cljs.core.not(inst_29509);
var state_29526__$1 = (function (){var statearr_29528 = state_29526;
(statearr_29528[(7)] = inst_29508__$1);

return statearr_29528;
})();
if(inst_29510){
var statearr_29529_29548 = state_29526__$1;
(statearr_29529_29548[(1)] = (8));

} else {
var statearr_29530_29549 = state_29526__$1;
(statearr_29530_29549[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29527 === (1))){
var inst_29503 = (0);
var state_29526__$1 = (function (){var statearr_29531 = state_29526;
(statearr_29531[(8)] = inst_29503);

return statearr_29531;
})();
var statearr_29532_29550 = state_29526__$1;
(statearr_29532_29550[(2)] = null);

(statearr_29532_29550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29527 === (4))){
var state_29526__$1 = state_29526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29526__$1,(7),ch);
} else {
if((state_val_29527 === (6))){
var inst_29521 = (state_29526[(2)]);
var state_29526__$1 = state_29526;
var statearr_29533_29551 = state_29526__$1;
(statearr_29533_29551[(2)] = inst_29521);

(statearr_29533_29551[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29527 === (3))){
var inst_29523 = (state_29526[(2)]);
var inst_29524 = cljs.core.async.close_BANG_(out);
var state_29526__$1 = (function (){var statearr_29534 = state_29526;
(statearr_29534[(9)] = inst_29523);

return statearr_29534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29526__$1,inst_29524);
} else {
if((state_val_29527 === (2))){
var inst_29503 = (state_29526[(8)]);
var inst_29505 = (inst_29503 < n);
var state_29526__$1 = state_29526;
if(cljs.core.truth_(inst_29505)){
var statearr_29535_29552 = state_29526__$1;
(statearr_29535_29552[(1)] = (4));

} else {
var statearr_29536_29553 = state_29526__$1;
(statearr_29536_29553[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29527 === (11))){
var inst_29503 = (state_29526[(8)]);
var inst_29513 = (state_29526[(2)]);
var inst_29514 = (inst_29503 + (1));
var inst_29503__$1 = inst_29514;
var state_29526__$1 = (function (){var statearr_29537 = state_29526;
(statearr_29537[(8)] = inst_29503__$1);

(statearr_29537[(10)] = inst_29513);

return statearr_29537;
})();
var statearr_29538_29554 = state_29526__$1;
(statearr_29538_29554[(2)] = null);

(statearr_29538_29554[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29527 === (9))){
var state_29526__$1 = state_29526;
var statearr_29539_29555 = state_29526__$1;
(statearr_29539_29555[(2)] = null);

(statearr_29539_29555[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29527 === (5))){
var state_29526__$1 = state_29526;
var statearr_29540_29556 = state_29526__$1;
(statearr_29540_29556[(2)] = null);

(statearr_29540_29556[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29527 === (10))){
var inst_29518 = (state_29526[(2)]);
var state_29526__$1 = state_29526;
var statearr_29541_29557 = state_29526__$1;
(statearr_29541_29557[(2)] = inst_29518);

(statearr_29541_29557[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29527 === (8))){
var inst_29508 = (state_29526[(7)]);
var state_29526__$1 = state_29526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29526__$1,(11),out,inst_29508);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_29542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29542[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_29542[(1)] = (1));

return statearr_29542;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_29526){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29526);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29543){if((e29543 instanceof Object)){
var ex__27993__auto__ = e29543;
var statearr_29544_29558 = state_29526;
(statearr_29544_29558[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29526);

return cljs.core.cst$kw$recur;
} else {
throw e29543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29559 = state_29526;
state_29526 = G__29559;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_29526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_29526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29545 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29545[(6)] = c__28061__auto___29547);

return statearr_29545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29561 = (function (f,ch,meta29562){
this.f = f;
this.ch = ch;
this.meta29562 = meta29562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29563,meta29562__$1){
var self__ = this;
var _29563__$1 = this;
return (new cljs.core.async.t_cljs$core$async29561(self__.f,self__.ch,meta29562__$1));
}));

(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29563){
var self__ = this;
var _29563__$1 = this;
return self__.meta29562;
}));

(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29564 = (function (f,ch,meta29562,_,fn1,meta29565){
this.f = f;
this.ch = ch;
this.meta29562 = meta29562;
this._ = _;
this.fn1 = fn1;
this.meta29565 = meta29565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29566,meta29565__$1){
var self__ = this;
var _29566__$1 = this;
return (new cljs.core.async.t_cljs$core$async29564(self__.f,self__.ch,self__.meta29562,self__._,self__.fn1,meta29565__$1));
}));

(cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29566){
var self__ = this;
var _29566__$1 = this;
return self__.meta29565;
}));

(cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__29560_SHARP_){
var G__29567 = (((p1__29560_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29560_SHARP_) : self__.f.call(null,p1__29560_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29567) : f1.call(null,G__29567));
});
}));

(cljs.core.async.t_cljs$core$async29564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29562,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async29561], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta29565], null);
}));

(cljs.core.async.t_cljs$core$async29564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29564");

(cljs.core.async.t_cljs$core$async29564.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29564.
 */
cljs.core.async.__GT_t_cljs$core$async29564 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29564(f__$1,ch__$1,meta29562__$1,___$2,fn1__$1,meta29565){
return (new cljs.core.async.t_cljs$core$async29564(f__$1,ch__$1,meta29562__$1,___$2,fn1__$1,meta29565));
});

}

return (new cljs.core.async.t_cljs$core$async29564(self__.f,self__.ch,self__.meta29562,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29568 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29568) : self__.f.call(null,G__29568));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29562], null);
}));

(cljs.core.async.t_cljs$core$async29561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29561");

(cljs.core.async.t_cljs$core$async29561.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29561.
 */
cljs.core.async.__GT_t_cljs$core$async29561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29561(f__$1,ch__$1,meta29562){
return (new cljs.core.async.t_cljs$core$async29561(f__$1,ch__$1,meta29562));
});

}

return (new cljs.core.async.t_cljs$core$async29561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29569 = (function (f,ch,meta29570){
this.f = f;
this.ch = ch;
this.meta29570 = meta29570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29571,meta29570__$1){
var self__ = this;
var _29571__$1 = this;
return (new cljs.core.async.t_cljs$core$async29569(self__.f,self__.ch,meta29570__$1));
}));

(cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29571){
var self__ = this;
var _29571__$1 = this;
return self__.meta29570;
}));

(cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async29569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29570], null);
}));

(cljs.core.async.t_cljs$core$async29569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29569");

(cljs.core.async.t_cljs$core$async29569.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29569.
 */
cljs.core.async.__GT_t_cljs$core$async29569 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29569(f__$1,ch__$1,meta29570){
return (new cljs.core.async.t_cljs$core$async29569(f__$1,ch__$1,meta29570));
});

}

return (new cljs.core.async.t_cljs$core$async29569(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29572 = (function (p,ch,meta29573){
this.p = p;
this.ch = ch;
this.meta29573 = meta29573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29574,meta29573__$1){
var self__ = this;
var _29574__$1 = this;
return (new cljs.core.async.t_cljs$core$async29572(self__.p,self__.ch,meta29573__$1));
}));

(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29574){
var self__ = this;
var _29574__$1 = this;
return self__.meta29573;
}));

(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29573], null);
}));

(cljs.core.async.t_cljs$core$async29572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29572");

(cljs.core.async.t_cljs$core$async29572.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29572.
 */
cljs.core.async.__GT_t_cljs$core$async29572 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29572(p__$1,ch__$1,meta29573){
return (new cljs.core.async.t_cljs$core$async29572(p__$1,ch__$1,meta29573));
});

}

return (new cljs.core.async.t_cljs$core$async29572(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29576 = arguments.length;
switch (G__29576) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28061__auto___29616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29597){
var state_val_29598 = (state_29597[(1)]);
if((state_val_29598 === (7))){
var inst_29593 = (state_29597[(2)]);
var state_29597__$1 = state_29597;
var statearr_29599_29617 = state_29597__$1;
(statearr_29599_29617[(2)] = inst_29593);

(statearr_29599_29617[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29598 === (1))){
var state_29597__$1 = state_29597;
var statearr_29600_29618 = state_29597__$1;
(statearr_29600_29618[(2)] = null);

(statearr_29600_29618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29598 === (4))){
var inst_29579 = (state_29597[(7)]);
var inst_29579__$1 = (state_29597[(2)]);
var inst_29580 = (inst_29579__$1 == null);
var state_29597__$1 = (function (){var statearr_29601 = state_29597;
(statearr_29601[(7)] = inst_29579__$1);

return statearr_29601;
})();
if(cljs.core.truth_(inst_29580)){
var statearr_29602_29619 = state_29597__$1;
(statearr_29602_29619[(1)] = (5));

} else {
var statearr_29603_29620 = state_29597__$1;
(statearr_29603_29620[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29598 === (6))){
var inst_29579 = (state_29597[(7)]);
var inst_29584 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29579) : p.call(null,inst_29579));
var state_29597__$1 = state_29597;
if(cljs.core.truth_(inst_29584)){
var statearr_29604_29621 = state_29597__$1;
(statearr_29604_29621[(1)] = (8));

} else {
var statearr_29605_29622 = state_29597__$1;
(statearr_29605_29622[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29598 === (3))){
var inst_29595 = (state_29597[(2)]);
var state_29597__$1 = state_29597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29597__$1,inst_29595);
} else {
if((state_val_29598 === (2))){
var state_29597__$1 = state_29597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29597__$1,(4),ch);
} else {
if((state_val_29598 === (11))){
var inst_29587 = (state_29597[(2)]);
var state_29597__$1 = state_29597;
var statearr_29606_29623 = state_29597__$1;
(statearr_29606_29623[(2)] = inst_29587);

(statearr_29606_29623[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29598 === (9))){
var state_29597__$1 = state_29597;
var statearr_29607_29624 = state_29597__$1;
(statearr_29607_29624[(2)] = null);

(statearr_29607_29624[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29598 === (5))){
var inst_29582 = cljs.core.async.close_BANG_(out);
var state_29597__$1 = state_29597;
var statearr_29608_29625 = state_29597__$1;
(statearr_29608_29625[(2)] = inst_29582);

(statearr_29608_29625[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29598 === (10))){
var inst_29590 = (state_29597[(2)]);
var state_29597__$1 = (function (){var statearr_29609 = state_29597;
(statearr_29609[(8)] = inst_29590);

return statearr_29609;
})();
var statearr_29610_29626 = state_29597__$1;
(statearr_29610_29626[(2)] = null);

(statearr_29610_29626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29598 === (8))){
var inst_29579 = (state_29597[(7)]);
var state_29597__$1 = state_29597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29597__$1,(11),out,inst_29579);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_29611 = [null,null,null,null,null,null,null,null,null];
(statearr_29611[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_29611[(1)] = (1));

return statearr_29611;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_29597){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29597);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29612){if((e29612 instanceof Object)){
var ex__27993__auto__ = e29612;
var statearr_29613_29627 = state_29597;
(statearr_29613_29627[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29597);

return cljs.core.cst$kw$recur;
} else {
throw e29612;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29628 = state_29597;
state_29597 = G__29628;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_29597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_29597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29614 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29614[(6)] = c__28061__auto___29616);

return statearr_29614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29630 = arguments.length;
switch (G__29630) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29693){
var state_val_29694 = (state_29693[(1)]);
if((state_val_29694 === (7))){
var inst_29689 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
var statearr_29695_29733 = state_29693__$1;
(statearr_29695_29733[(2)] = inst_29689);

(statearr_29695_29733[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (20))){
var inst_29659 = (state_29693[(7)]);
var inst_29670 = (state_29693[(2)]);
var inst_29671 = cljs.core.next(inst_29659);
var inst_29645 = inst_29671;
var inst_29646 = null;
var inst_29647 = (0);
var inst_29648 = (0);
var state_29693__$1 = (function (){var statearr_29696 = state_29693;
(statearr_29696[(8)] = inst_29648);

(statearr_29696[(9)] = inst_29646);

(statearr_29696[(10)] = inst_29645);

(statearr_29696[(11)] = inst_29647);

(statearr_29696[(12)] = inst_29670);

return statearr_29696;
})();
var statearr_29697_29734 = state_29693__$1;
(statearr_29697_29734[(2)] = null);

(statearr_29697_29734[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (1))){
var state_29693__$1 = state_29693;
var statearr_29698_29735 = state_29693__$1;
(statearr_29698_29735[(2)] = null);

(statearr_29698_29735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (4))){
var inst_29634 = (state_29693[(13)]);
var inst_29634__$1 = (state_29693[(2)]);
var inst_29635 = (inst_29634__$1 == null);
var state_29693__$1 = (function (){var statearr_29699 = state_29693;
(statearr_29699[(13)] = inst_29634__$1);

return statearr_29699;
})();
if(cljs.core.truth_(inst_29635)){
var statearr_29700_29736 = state_29693__$1;
(statearr_29700_29736[(1)] = (5));

} else {
var statearr_29701_29737 = state_29693__$1;
(statearr_29701_29737[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (15))){
var state_29693__$1 = state_29693;
var statearr_29705_29738 = state_29693__$1;
(statearr_29705_29738[(2)] = null);

(statearr_29705_29738[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (21))){
var state_29693__$1 = state_29693;
var statearr_29706_29739 = state_29693__$1;
(statearr_29706_29739[(2)] = null);

(statearr_29706_29739[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (13))){
var inst_29648 = (state_29693[(8)]);
var inst_29646 = (state_29693[(9)]);
var inst_29645 = (state_29693[(10)]);
var inst_29647 = (state_29693[(11)]);
var inst_29655 = (state_29693[(2)]);
var inst_29656 = (inst_29648 + (1));
var tmp29702 = inst_29646;
var tmp29703 = inst_29645;
var tmp29704 = inst_29647;
var inst_29645__$1 = tmp29703;
var inst_29646__$1 = tmp29702;
var inst_29647__$1 = tmp29704;
var inst_29648__$1 = inst_29656;
var state_29693__$1 = (function (){var statearr_29707 = state_29693;
(statearr_29707[(8)] = inst_29648__$1);

(statearr_29707[(9)] = inst_29646__$1);

(statearr_29707[(14)] = inst_29655);

(statearr_29707[(10)] = inst_29645__$1);

(statearr_29707[(11)] = inst_29647__$1);

return statearr_29707;
})();
var statearr_29708_29740 = state_29693__$1;
(statearr_29708_29740[(2)] = null);

(statearr_29708_29740[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (22))){
var state_29693__$1 = state_29693;
var statearr_29709_29741 = state_29693__$1;
(statearr_29709_29741[(2)] = null);

(statearr_29709_29741[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (6))){
var inst_29634 = (state_29693[(13)]);
var inst_29643 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29634) : f.call(null,inst_29634));
var inst_29644 = cljs.core.seq(inst_29643);
var inst_29645 = inst_29644;
var inst_29646 = null;
var inst_29647 = (0);
var inst_29648 = (0);
var state_29693__$1 = (function (){var statearr_29710 = state_29693;
(statearr_29710[(8)] = inst_29648);

(statearr_29710[(9)] = inst_29646);

(statearr_29710[(10)] = inst_29645);

(statearr_29710[(11)] = inst_29647);

return statearr_29710;
})();
var statearr_29711_29742 = state_29693__$1;
(statearr_29711_29742[(2)] = null);

(statearr_29711_29742[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (17))){
var inst_29659 = (state_29693[(7)]);
var inst_29663 = cljs.core.chunk_first(inst_29659);
var inst_29664 = cljs.core.chunk_rest(inst_29659);
var inst_29665 = cljs.core.count(inst_29663);
var inst_29645 = inst_29664;
var inst_29646 = inst_29663;
var inst_29647 = inst_29665;
var inst_29648 = (0);
var state_29693__$1 = (function (){var statearr_29712 = state_29693;
(statearr_29712[(8)] = inst_29648);

(statearr_29712[(9)] = inst_29646);

(statearr_29712[(10)] = inst_29645);

(statearr_29712[(11)] = inst_29647);

return statearr_29712;
})();
var statearr_29713_29743 = state_29693__$1;
(statearr_29713_29743[(2)] = null);

(statearr_29713_29743[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (3))){
var inst_29691 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29693__$1,inst_29691);
} else {
if((state_val_29694 === (12))){
var inst_29679 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
var statearr_29714_29744 = state_29693__$1;
(statearr_29714_29744[(2)] = inst_29679);

(statearr_29714_29744[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (2))){
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29693__$1,(4),in$);
} else {
if((state_val_29694 === (23))){
var inst_29687 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
var statearr_29715_29745 = state_29693__$1;
(statearr_29715_29745[(2)] = inst_29687);

(statearr_29715_29745[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (19))){
var inst_29674 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
var statearr_29716_29746 = state_29693__$1;
(statearr_29716_29746[(2)] = inst_29674);

(statearr_29716_29746[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (11))){
var inst_29659 = (state_29693[(7)]);
var inst_29645 = (state_29693[(10)]);
var inst_29659__$1 = cljs.core.seq(inst_29645);
var state_29693__$1 = (function (){var statearr_29717 = state_29693;
(statearr_29717[(7)] = inst_29659__$1);

return statearr_29717;
})();
if(inst_29659__$1){
var statearr_29718_29747 = state_29693__$1;
(statearr_29718_29747[(1)] = (14));

} else {
var statearr_29719_29748 = state_29693__$1;
(statearr_29719_29748[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (9))){
var inst_29681 = (state_29693[(2)]);
var inst_29682 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29693__$1 = (function (){var statearr_29720 = state_29693;
(statearr_29720[(15)] = inst_29681);

return statearr_29720;
})();
if(cljs.core.truth_(inst_29682)){
var statearr_29721_29749 = state_29693__$1;
(statearr_29721_29749[(1)] = (21));

} else {
var statearr_29722_29750 = state_29693__$1;
(statearr_29722_29750[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (5))){
var inst_29637 = cljs.core.async.close_BANG_(out);
var state_29693__$1 = state_29693;
var statearr_29723_29751 = state_29693__$1;
(statearr_29723_29751[(2)] = inst_29637);

(statearr_29723_29751[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (14))){
var inst_29659 = (state_29693[(7)]);
var inst_29661 = cljs.core.chunked_seq_QMARK_(inst_29659);
var state_29693__$1 = state_29693;
if(inst_29661){
var statearr_29724_29752 = state_29693__$1;
(statearr_29724_29752[(1)] = (17));

} else {
var statearr_29725_29753 = state_29693__$1;
(statearr_29725_29753[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (16))){
var inst_29677 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
var statearr_29726_29754 = state_29693__$1;
(statearr_29726_29754[(2)] = inst_29677);

(statearr_29726_29754[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29694 === (10))){
var inst_29648 = (state_29693[(8)]);
var inst_29646 = (state_29693[(9)]);
var inst_29653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29646,inst_29648);
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29693__$1,(13),out,inst_29653);
} else {
if((state_val_29694 === (18))){
var inst_29659 = (state_29693[(7)]);
var inst_29668 = cljs.core.first(inst_29659);
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29693__$1,(20),out,inst_29668);
} else {
if((state_val_29694 === (8))){
var inst_29648 = (state_29693[(8)]);
var inst_29647 = (state_29693[(11)]);
var inst_29650 = (inst_29648 < inst_29647);
var inst_29651 = inst_29650;
var state_29693__$1 = state_29693;
if(cljs.core.truth_(inst_29651)){
var statearr_29727_29755 = state_29693__$1;
(statearr_29727_29755[(1)] = (10));

} else {
var statearr_29728_29756 = state_29693__$1;
(statearr_29728_29756[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27990__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27990__auto____0 = (function (){
var statearr_29729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29729[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27990__auto__);

(statearr_29729[(1)] = (1));

return statearr_29729;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27990__auto____1 = (function (state_29693){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29693);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29730){if((e29730 instanceof Object)){
var ex__27993__auto__ = e29730;
var statearr_29731_29757 = state_29693;
(statearr_29731_29757[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29693);

return cljs.core.cst$kw$recur;
} else {
throw e29730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29758 = state_29693;
state_29693 = G__29758;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27990__auto__ = function(state_29693){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27990__auto____1.call(this,state_29693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27990__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27990__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29732 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29732[(6)] = c__28061__auto__);

return statearr_29732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));

return c__28061__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29760 = arguments.length;
switch (G__29760) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29763 = arguments.length;
switch (G__29763) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29766 = arguments.length;
switch (G__29766) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28061__auto___29813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29790){
var state_val_29791 = (state_29790[(1)]);
if((state_val_29791 === (7))){
var inst_29785 = (state_29790[(2)]);
var state_29790__$1 = state_29790;
var statearr_29792_29814 = state_29790__$1;
(statearr_29792_29814[(2)] = inst_29785);

(statearr_29792_29814[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29791 === (1))){
var inst_29767 = null;
var state_29790__$1 = (function (){var statearr_29793 = state_29790;
(statearr_29793[(7)] = inst_29767);

return statearr_29793;
})();
var statearr_29794_29815 = state_29790__$1;
(statearr_29794_29815[(2)] = null);

(statearr_29794_29815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29791 === (4))){
var inst_29770 = (state_29790[(8)]);
var inst_29770__$1 = (state_29790[(2)]);
var inst_29771 = (inst_29770__$1 == null);
var inst_29772 = cljs.core.not(inst_29771);
var state_29790__$1 = (function (){var statearr_29795 = state_29790;
(statearr_29795[(8)] = inst_29770__$1);

return statearr_29795;
})();
if(inst_29772){
var statearr_29796_29816 = state_29790__$1;
(statearr_29796_29816[(1)] = (5));

} else {
var statearr_29797_29817 = state_29790__$1;
(statearr_29797_29817[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29791 === (6))){
var state_29790__$1 = state_29790;
var statearr_29798_29818 = state_29790__$1;
(statearr_29798_29818[(2)] = null);

(statearr_29798_29818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29791 === (3))){
var inst_29787 = (state_29790[(2)]);
var inst_29788 = cljs.core.async.close_BANG_(out);
var state_29790__$1 = (function (){var statearr_29799 = state_29790;
(statearr_29799[(9)] = inst_29787);

return statearr_29799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29790__$1,inst_29788);
} else {
if((state_val_29791 === (2))){
var state_29790__$1 = state_29790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29790__$1,(4),ch);
} else {
if((state_val_29791 === (11))){
var inst_29770 = (state_29790[(8)]);
var inst_29779 = (state_29790[(2)]);
var inst_29767 = inst_29770;
var state_29790__$1 = (function (){var statearr_29800 = state_29790;
(statearr_29800[(10)] = inst_29779);

(statearr_29800[(7)] = inst_29767);

return statearr_29800;
})();
var statearr_29801_29819 = state_29790__$1;
(statearr_29801_29819[(2)] = null);

(statearr_29801_29819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29791 === (9))){
var inst_29770 = (state_29790[(8)]);
var state_29790__$1 = state_29790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29790__$1,(11),out,inst_29770);
} else {
if((state_val_29791 === (5))){
var inst_29767 = (state_29790[(7)]);
var inst_29770 = (state_29790[(8)]);
var inst_29774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29770,inst_29767);
var state_29790__$1 = state_29790;
if(inst_29774){
var statearr_29803_29820 = state_29790__$1;
(statearr_29803_29820[(1)] = (8));

} else {
var statearr_29804_29821 = state_29790__$1;
(statearr_29804_29821[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29791 === (10))){
var inst_29782 = (state_29790[(2)]);
var state_29790__$1 = state_29790;
var statearr_29805_29822 = state_29790__$1;
(statearr_29805_29822[(2)] = inst_29782);

(statearr_29805_29822[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29791 === (8))){
var inst_29767 = (state_29790[(7)]);
var tmp29802 = inst_29767;
var inst_29767__$1 = tmp29802;
var state_29790__$1 = (function (){var statearr_29806 = state_29790;
(statearr_29806[(7)] = inst_29767__$1);

return statearr_29806;
})();
var statearr_29807_29823 = state_29790__$1;
(statearr_29807_29823[(2)] = null);

(statearr_29807_29823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_29808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29808[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_29808[(1)] = (1));

return statearr_29808;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_29790){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29790);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29809){if((e29809 instanceof Object)){
var ex__27993__auto__ = e29809;
var statearr_29810_29824 = state_29790;
(statearr_29810_29824[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29790);

return cljs.core.cst$kw$recur;
} else {
throw e29809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29825 = state_29790;
state_29790 = G__29825;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_29790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_29790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29811 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29811[(6)] = c__28061__auto___29813);

return statearr_29811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29827 = arguments.length;
switch (G__29827) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28061__auto___29893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29865){
var state_val_29866 = (state_29865[(1)]);
if((state_val_29866 === (7))){
var inst_29861 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29867_29894 = state_29865__$1;
(statearr_29867_29894[(2)] = inst_29861);

(statearr_29867_29894[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (1))){
var inst_29828 = (new Array(n));
var inst_29829 = inst_29828;
var inst_29830 = (0);
var state_29865__$1 = (function (){var statearr_29868 = state_29865;
(statearr_29868[(7)] = inst_29829);

(statearr_29868[(8)] = inst_29830);

return statearr_29868;
})();
var statearr_29869_29895 = state_29865__$1;
(statearr_29869_29895[(2)] = null);

(statearr_29869_29895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (4))){
var inst_29833 = (state_29865[(9)]);
var inst_29833__$1 = (state_29865[(2)]);
var inst_29834 = (inst_29833__$1 == null);
var inst_29835 = cljs.core.not(inst_29834);
var state_29865__$1 = (function (){var statearr_29870 = state_29865;
(statearr_29870[(9)] = inst_29833__$1);

return statearr_29870;
})();
if(inst_29835){
var statearr_29871_29896 = state_29865__$1;
(statearr_29871_29896[(1)] = (5));

} else {
var statearr_29872_29897 = state_29865__$1;
(statearr_29872_29897[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (15))){
var inst_29855 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29873_29898 = state_29865__$1;
(statearr_29873_29898[(2)] = inst_29855);

(statearr_29873_29898[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (13))){
var state_29865__$1 = state_29865;
var statearr_29874_29899 = state_29865__$1;
(statearr_29874_29899[(2)] = null);

(statearr_29874_29899[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (6))){
var inst_29830 = (state_29865[(8)]);
var inst_29851 = (inst_29830 > (0));
var state_29865__$1 = state_29865;
if(cljs.core.truth_(inst_29851)){
var statearr_29875_29900 = state_29865__$1;
(statearr_29875_29900[(1)] = (12));

} else {
var statearr_29876_29901 = state_29865__$1;
(statearr_29876_29901[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (3))){
var inst_29863 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29865__$1,inst_29863);
} else {
if((state_val_29866 === (12))){
var inst_29829 = (state_29865[(7)]);
var inst_29853 = cljs.core.vec(inst_29829);
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29865__$1,(15),out,inst_29853);
} else {
if((state_val_29866 === (2))){
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29865__$1,(4),ch);
} else {
if((state_val_29866 === (11))){
var inst_29845 = (state_29865[(2)]);
var inst_29846 = (new Array(n));
var inst_29829 = inst_29846;
var inst_29830 = (0);
var state_29865__$1 = (function (){var statearr_29877 = state_29865;
(statearr_29877[(7)] = inst_29829);

(statearr_29877[(10)] = inst_29845);

(statearr_29877[(8)] = inst_29830);

return statearr_29877;
})();
var statearr_29878_29902 = state_29865__$1;
(statearr_29878_29902[(2)] = null);

(statearr_29878_29902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (9))){
var inst_29829 = (state_29865[(7)]);
var inst_29843 = cljs.core.vec(inst_29829);
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29865__$1,(11),out,inst_29843);
} else {
if((state_val_29866 === (5))){
var inst_29838 = (state_29865[(11)]);
var inst_29833 = (state_29865[(9)]);
var inst_29829 = (state_29865[(7)]);
var inst_29830 = (state_29865[(8)]);
var inst_29837 = (inst_29829[inst_29830] = inst_29833);
var inst_29838__$1 = (inst_29830 + (1));
var inst_29839 = (inst_29838__$1 < n);
var state_29865__$1 = (function (){var statearr_29879 = state_29865;
(statearr_29879[(11)] = inst_29838__$1);

(statearr_29879[(12)] = inst_29837);

return statearr_29879;
})();
if(cljs.core.truth_(inst_29839)){
var statearr_29880_29903 = state_29865__$1;
(statearr_29880_29903[(1)] = (8));

} else {
var statearr_29881_29904 = state_29865__$1;
(statearr_29881_29904[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (14))){
var inst_29858 = (state_29865[(2)]);
var inst_29859 = cljs.core.async.close_BANG_(out);
var state_29865__$1 = (function (){var statearr_29883 = state_29865;
(statearr_29883[(13)] = inst_29858);

return statearr_29883;
})();
var statearr_29884_29905 = state_29865__$1;
(statearr_29884_29905[(2)] = inst_29859);

(statearr_29884_29905[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (10))){
var inst_29849 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29885_29906 = state_29865__$1;
(statearr_29885_29906[(2)] = inst_29849);

(statearr_29885_29906[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29866 === (8))){
var inst_29838 = (state_29865[(11)]);
var inst_29829 = (state_29865[(7)]);
var tmp29882 = inst_29829;
var inst_29829__$1 = tmp29882;
var inst_29830 = inst_29838;
var state_29865__$1 = (function (){var statearr_29886 = state_29865;
(statearr_29886[(7)] = inst_29829__$1);

(statearr_29886[(8)] = inst_29830);

return statearr_29886;
})();
var statearr_29887_29907 = state_29865__$1;
(statearr_29887_29907[(2)] = null);

(statearr_29887_29907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29888[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_29865){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29865);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29889){if((e29889 instanceof Object)){
var ex__27993__auto__ = e29889;
var statearr_29890_29908 = state_29865;
(statearr_29890_29908[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29865);

return cljs.core.cst$kw$recur;
} else {
throw e29889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29909 = state_29865;
state_29865 = G__29909;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_29865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_29865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29891 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29891[(6)] = c__28061__auto___29893);

return statearr_29891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29911 = arguments.length;
switch (G__29911) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28061__auto___29981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_29953){
var state_val_29954 = (state_29953[(1)]);
if((state_val_29954 === (7))){
var inst_29949 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
var statearr_29955_29982 = state_29953__$1;
(statearr_29955_29982[(2)] = inst_29949);

(statearr_29955_29982[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (1))){
var inst_29912 = [];
var inst_29913 = inst_29912;
var inst_29914 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_29953__$1 = (function (){var statearr_29956 = state_29953;
(statearr_29956[(7)] = inst_29913);

(statearr_29956[(8)] = inst_29914);

return statearr_29956;
})();
var statearr_29957_29983 = state_29953__$1;
(statearr_29957_29983[(2)] = null);

(statearr_29957_29983[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (4))){
var inst_29917 = (state_29953[(9)]);
var inst_29917__$1 = (state_29953[(2)]);
var inst_29918 = (inst_29917__$1 == null);
var inst_29919 = cljs.core.not(inst_29918);
var state_29953__$1 = (function (){var statearr_29958 = state_29953;
(statearr_29958[(9)] = inst_29917__$1);

return statearr_29958;
})();
if(inst_29919){
var statearr_29959_29984 = state_29953__$1;
(statearr_29959_29984[(1)] = (5));

} else {
var statearr_29960_29985 = state_29953__$1;
(statearr_29960_29985[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (15))){
var inst_29943 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
var statearr_29961_29986 = state_29953__$1;
(statearr_29961_29986[(2)] = inst_29943);

(statearr_29961_29986[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (13))){
var state_29953__$1 = state_29953;
var statearr_29962_29987 = state_29953__$1;
(statearr_29962_29987[(2)] = null);

(statearr_29962_29987[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (6))){
var inst_29913 = (state_29953[(7)]);
var inst_29938 = inst_29913.length;
var inst_29939 = (inst_29938 > (0));
var state_29953__$1 = state_29953;
if(cljs.core.truth_(inst_29939)){
var statearr_29963_29988 = state_29953__$1;
(statearr_29963_29988[(1)] = (12));

} else {
var statearr_29964_29989 = state_29953__$1;
(statearr_29964_29989[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (3))){
var inst_29951 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29953__$1,inst_29951);
} else {
if((state_val_29954 === (12))){
var inst_29913 = (state_29953[(7)]);
var inst_29941 = cljs.core.vec(inst_29913);
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29953__$1,(15),out,inst_29941);
} else {
if((state_val_29954 === (2))){
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29953__$1,(4),ch);
} else {
if((state_val_29954 === (11))){
var inst_29917 = (state_29953[(9)]);
var inst_29921 = (state_29953[(10)]);
var inst_29931 = (state_29953[(2)]);
var inst_29932 = [];
var inst_29933 = inst_29932.push(inst_29917);
var inst_29913 = inst_29932;
var inst_29914 = inst_29921;
var state_29953__$1 = (function (){var statearr_29965 = state_29953;
(statearr_29965[(7)] = inst_29913);

(statearr_29965[(8)] = inst_29914);

(statearr_29965[(11)] = inst_29931);

(statearr_29965[(12)] = inst_29933);

return statearr_29965;
})();
var statearr_29966_29990 = state_29953__$1;
(statearr_29966_29990[(2)] = null);

(statearr_29966_29990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (9))){
var inst_29913 = (state_29953[(7)]);
var inst_29929 = cljs.core.vec(inst_29913);
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29953__$1,(11),out,inst_29929);
} else {
if((state_val_29954 === (5))){
var inst_29917 = (state_29953[(9)]);
var inst_29914 = (state_29953[(8)]);
var inst_29921 = (state_29953[(10)]);
var inst_29921__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29917) : f.call(null,inst_29917));
var inst_29922 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29921__$1,inst_29914);
var inst_29923 = cljs.core.keyword_identical_QMARK_(inst_29914,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_29924 = ((inst_29922) || (inst_29923));
var state_29953__$1 = (function (){var statearr_29967 = state_29953;
(statearr_29967[(10)] = inst_29921__$1);

return statearr_29967;
})();
if(cljs.core.truth_(inst_29924)){
var statearr_29968_29991 = state_29953__$1;
(statearr_29968_29991[(1)] = (8));

} else {
var statearr_29969_29992 = state_29953__$1;
(statearr_29969_29992[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (14))){
var inst_29946 = (state_29953[(2)]);
var inst_29947 = cljs.core.async.close_BANG_(out);
var state_29953__$1 = (function (){var statearr_29971 = state_29953;
(statearr_29971[(13)] = inst_29946);

return statearr_29971;
})();
var statearr_29972_29993 = state_29953__$1;
(statearr_29972_29993[(2)] = inst_29947);

(statearr_29972_29993[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (10))){
var inst_29936 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
var statearr_29973_29994 = state_29953__$1;
(statearr_29973_29994[(2)] = inst_29936);

(statearr_29973_29994[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29954 === (8))){
var inst_29917 = (state_29953[(9)]);
var inst_29913 = (state_29953[(7)]);
var inst_29921 = (state_29953[(10)]);
var inst_29926 = inst_29913.push(inst_29917);
var tmp29970 = inst_29913;
var inst_29913__$1 = tmp29970;
var inst_29914 = inst_29921;
var state_29953__$1 = (function (){var statearr_29974 = state_29953;
(statearr_29974[(7)] = inst_29913__$1);

(statearr_29974[(8)] = inst_29914);

(statearr_29974[(14)] = inst_29926);

return statearr_29974;
})();
var statearr_29975_29995 = state_29953__$1;
(statearr_29975_29995[(2)] = null);

(statearr_29975_29995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27990__auto__ = null;
var cljs$core$async$state_machine__27990__auto____0 = (function (){
var statearr_29976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29976[(0)] = cljs$core$async$state_machine__27990__auto__);

(statearr_29976[(1)] = (1));

return statearr_29976;
});
var cljs$core$async$state_machine__27990__auto____1 = (function (state_29953){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_29953);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e29977){if((e29977 instanceof Object)){
var ex__27993__auto__ = e29977;
var statearr_29978_29996 = state_29953;
(statearr_29978_29996[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29953);

return cljs.core.cst$kw$recur;
} else {
throw e29977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__29997 = state_29953;
state_29953 = G__29997;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
cljs$core$async$state_machine__27990__auto__ = function(state_29953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27990__auto____1.call(this,state_29953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27990__auto____0;
cljs$core$async$state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27990__auto____1;
return cljs$core$async$state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_29979 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_29979[(6)] = c__28061__auto___29981);

return statearr_29979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

