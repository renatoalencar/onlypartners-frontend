// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26576 = arguments.length;
switch (G__26576) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26577 = (function (f,blockable,meta26578){
this.f = f;
this.blockable = blockable;
this.meta26578 = meta26578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26579,meta26578__$1){
var self__ = this;
var _26579__$1 = this;
return (new cljs.core.async.t_cljs$core$async26577(self__.f,self__.blockable,meta26578__$1));
}));

(cljs.core.async.t_cljs$core$async26577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26579){
var self__ = this;
var _26579__$1 = this;
return self__.meta26578;
}));

(cljs.core.async.t_cljs$core$async26577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26578","meta26578",-992630841,null)], null);
}));

(cljs.core.async.t_cljs$core$async26577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26577");

(cljs.core.async.t_cljs$core$async26577.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26577.
 */
cljs.core.async.__GT_t_cljs$core$async26577 = (function cljs$core$async$__GT_t_cljs$core$async26577(f__$1,blockable__$1,meta26578){
return (new cljs.core.async.t_cljs$core$async26577(f__$1,blockable__$1,meta26578));
});

}

return (new cljs.core.async.t_cljs$core$async26577(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__26583 = arguments.length;
switch (G__26583) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__26586 = arguments.length;
switch (G__26586) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__26589 = arguments.length;
switch (G__26589) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26591 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26591);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26591);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__26593 = arguments.length;
switch (G__26593) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___26595 = n;
var x_26596 = (0);
while(true){
if((x_26596 < n__4613__auto___26595)){
(a[x_26596] = x_26596);

var G__26597 = (x_26596 + (1));
x_26596 = G__26597;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26598 = (function (flag,meta26599){
this.flag = flag;
this.meta26599 = meta26599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26600,meta26599__$1){
var self__ = this;
var _26600__$1 = this;
return (new cljs.core.async.t_cljs$core$async26598(self__.flag,meta26599__$1));
}));

(cljs.core.async.t_cljs$core$async26598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26600){
var self__ = this;
var _26600__$1 = this;
return self__.meta26599;
}));

(cljs.core.async.t_cljs$core$async26598.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26598.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26599","meta26599",236686159,null)], null);
}));

(cljs.core.async.t_cljs$core$async26598.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26598");

(cljs.core.async.t_cljs$core$async26598.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26598");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26598.
 */
cljs.core.async.__GT_t_cljs$core$async26598 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26598(flag__$1,meta26599){
return (new cljs.core.async.t_cljs$core$async26598(flag__$1,meta26599));
});

}

return (new cljs.core.async.t_cljs$core$async26598(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26601 = (function (flag,cb,meta26602){
this.flag = flag;
this.cb = cb;
this.meta26602 = meta26602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26603,meta26602__$1){
var self__ = this;
var _26603__$1 = this;
return (new cljs.core.async.t_cljs$core$async26601(self__.flag,self__.cb,meta26602__$1));
}));

(cljs.core.async.t_cljs$core$async26601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26603){
var self__ = this;
var _26603__$1 = this;
return self__.meta26602;
}));

(cljs.core.async.t_cljs$core$async26601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26602","meta26602",1842387467,null)], null);
}));

(cljs.core.async.t_cljs$core$async26601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26601");

(cljs.core.async.t_cljs$core$async26601.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26601.
 */
cljs.core.async.__GT_t_cljs$core$async26601 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26601(flag__$1,cb__$1,meta26602){
return (new cljs.core.async.t_cljs$core$async26601(flag__$1,cb__$1,meta26602));
});

}

return (new cljs.core.async.t_cljs$core$async26601(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26604_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26604_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26605_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26605_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26606 = (i + (1));
i = G__26606;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4736__auto___26612 = arguments.length;
var i__4737__auto___26613 = (0);
while(true){
if((i__4737__auto___26613 < len__4736__auto___26612)){
args__4742__auto__.push((arguments[i__4737__auto___26613]));

var G__26614 = (i__4737__auto___26613 + (1));
i__4737__auto___26613 = G__26614;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26609){
var map__26610 = p__26609;
var map__26610__$1 = (((((!((map__26610 == null))))?(((((map__26610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26610):map__26610);
var opts = map__26610__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26607){
var G__26608 = cljs.core.first.call(null,seq26607);
var seq26607__$1 = cljs.core.next.call(null,seq26607);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26608,seq26607__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__26616 = arguments.length;
switch (G__26616) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24640__auto___26662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_26640){
var state_val_26641 = (state_26640[(1)]);
if((state_val_26641 === (7))){
var inst_26636 = (state_26640[(2)]);
var state_26640__$1 = state_26640;
var statearr_26642_26663 = state_26640__$1;
(statearr_26642_26663[(2)] = inst_26636);

(statearr_26642_26663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (1))){
var state_26640__$1 = state_26640;
var statearr_26643_26664 = state_26640__$1;
(statearr_26643_26664[(2)] = null);

(statearr_26643_26664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (4))){
var inst_26619 = (state_26640[(7)]);
var inst_26619__$1 = (state_26640[(2)]);
var inst_26620 = (inst_26619__$1 == null);
var state_26640__$1 = (function (){var statearr_26644 = state_26640;
(statearr_26644[(7)] = inst_26619__$1);

return statearr_26644;
})();
if(cljs.core.truth_(inst_26620)){
var statearr_26645_26665 = state_26640__$1;
(statearr_26645_26665[(1)] = (5));

} else {
var statearr_26646_26666 = state_26640__$1;
(statearr_26646_26666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (13))){
var state_26640__$1 = state_26640;
var statearr_26647_26667 = state_26640__$1;
(statearr_26647_26667[(2)] = null);

(statearr_26647_26667[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (6))){
var inst_26619 = (state_26640[(7)]);
var state_26640__$1 = state_26640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26640__$1,(11),to,inst_26619);
} else {
if((state_val_26641 === (3))){
var inst_26638 = (state_26640[(2)]);
var state_26640__$1 = state_26640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26640__$1,inst_26638);
} else {
if((state_val_26641 === (12))){
var state_26640__$1 = state_26640;
var statearr_26648_26668 = state_26640__$1;
(statearr_26648_26668[(2)] = null);

(statearr_26648_26668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (2))){
var state_26640__$1 = state_26640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26640__$1,(4),from);
} else {
if((state_val_26641 === (11))){
var inst_26629 = (state_26640[(2)]);
var state_26640__$1 = state_26640;
if(cljs.core.truth_(inst_26629)){
var statearr_26649_26669 = state_26640__$1;
(statearr_26649_26669[(1)] = (12));

} else {
var statearr_26650_26670 = state_26640__$1;
(statearr_26650_26670[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (9))){
var state_26640__$1 = state_26640;
var statearr_26651_26671 = state_26640__$1;
(statearr_26651_26671[(2)] = null);

(statearr_26651_26671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (5))){
var state_26640__$1 = state_26640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26652_26672 = state_26640__$1;
(statearr_26652_26672[(1)] = (8));

} else {
var statearr_26653_26673 = state_26640__$1;
(statearr_26653_26673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (14))){
var inst_26634 = (state_26640[(2)]);
var state_26640__$1 = state_26640;
var statearr_26654_26674 = state_26640__$1;
(statearr_26654_26674[(2)] = inst_26634);

(statearr_26654_26674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (10))){
var inst_26626 = (state_26640[(2)]);
var state_26640__$1 = state_26640;
var statearr_26655_26675 = state_26640__$1;
(statearr_26655_26675[(2)] = inst_26626);

(statearr_26655_26675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (8))){
var inst_26623 = cljs.core.async.close_BANG_.call(null,to);
var state_26640__$1 = state_26640;
var statearr_26656_26676 = state_26640__$1;
(statearr_26656_26676[(2)] = inst_26623);

(statearr_26656_26676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_26657 = [null,null,null,null,null,null,null,null];
(statearr_26657[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_26657[(1)] = (1));

return statearr_26657;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_26640){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_26640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e26658){if((e26658 instanceof Object)){
var ex__24477__auto__ = e26658;
var statearr_26659_26677 = state_26640;
(statearr_26659_26677[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26678 = state_26640;
state_26640 = G__26678;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_26640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_26640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_26660 = f__24641__auto__.call(null);
(statearr_26660[(6)] = c__24640__auto___26662);

return statearr_26660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__26679){
var vec__26680 = p__26679;
var v = cljs.core.nth.call(null,vec__26680,(0),null);
var p = cljs.core.nth.call(null,vec__26680,(1),null);
var job = vec__26680;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24640__auto___26851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_26687){
var state_val_26688 = (state_26687[(1)]);
if((state_val_26688 === (1))){
var state_26687__$1 = state_26687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26687__$1,(2),res,v);
} else {
if((state_val_26688 === (2))){
var inst_26684 = (state_26687[(2)]);
var inst_26685 = cljs.core.async.close_BANG_.call(null,res);
var state_26687__$1 = (function (){var statearr_26689 = state_26687;
(statearr_26689[(7)] = inst_26684);

return statearr_26689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26687__$1,inst_26685);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0 = (function (){
var statearr_26690 = [null,null,null,null,null,null,null,null];
(statearr_26690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__);

(statearr_26690[(1)] = (1));

return statearr_26690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1 = (function (state_26687){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_26687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e26691){if((e26691 instanceof Object)){
var ex__24477__auto__ = e26691;
var statearr_26692_26852 = state_26687;
(statearr_26692_26852[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26853 = state_26687;
state_26687 = G__26853;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = function(state_26687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1.call(this,state_26687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_26693 = f__24641__auto__.call(null);
(statearr_26693[(6)] = c__24640__auto___26851);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26694){
var vec__26695 = p__26694;
var v = cljs.core.nth.call(null,vec__26695,(0),null);
var p = cljs.core.nth.call(null,vec__26695,(1),null);
var job = vec__26695;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___26854 = n;
var __26855 = (0);
while(true){
if((__26855 < n__4613__auto___26854)){
var G__26698_26856 = type;
var G__26698_26857__$1 = (((G__26698_26856 instanceof cljs.core.Keyword))?G__26698_26856.fqn:null);
switch (G__26698_26857__$1) {
case "compute":
var c__24640__auto___26859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26855,c__24640__auto___26859,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async){
return (function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = ((function (__26855,c__24640__auto___26859,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async){
return (function (state_26711){
var state_val_26712 = (state_26711[(1)]);
if((state_val_26712 === (1))){
var state_26711__$1 = state_26711;
var statearr_26713_26860 = state_26711__$1;
(statearr_26713_26860[(2)] = null);

(statearr_26713_26860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (2))){
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26711__$1,(4),jobs);
} else {
if((state_val_26712 === (3))){
var inst_26709 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26711__$1,inst_26709);
} else {
if((state_val_26712 === (4))){
var inst_26701 = (state_26711[(2)]);
var inst_26702 = process.call(null,inst_26701);
var state_26711__$1 = state_26711;
if(cljs.core.truth_(inst_26702)){
var statearr_26714_26861 = state_26711__$1;
(statearr_26714_26861[(1)] = (5));

} else {
var statearr_26715_26862 = state_26711__$1;
(statearr_26715_26862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (5))){
var state_26711__$1 = state_26711;
var statearr_26716_26863 = state_26711__$1;
(statearr_26716_26863[(2)] = null);

(statearr_26716_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (6))){
var state_26711__$1 = state_26711;
var statearr_26717_26864 = state_26711__$1;
(statearr_26717_26864[(2)] = null);

(statearr_26717_26864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (7))){
var inst_26707 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26718_26865 = state_26711__$1;
(statearr_26718_26865[(2)] = inst_26707);

(statearr_26718_26865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26855,c__24640__auto___26859,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async))
;
return ((function (__26855,switch__24473__auto__,c__24640__auto___26859,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0 = (function (){
var statearr_26719 = [null,null,null,null,null,null,null];
(statearr_26719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__);

(statearr_26719[(1)] = (1));

return statearr_26719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1 = (function (state_26711){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_26711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e26720){if((e26720 instanceof Object)){
var ex__24477__auto__ = e26720;
var statearr_26721_26866 = state_26711;
(statearr_26721_26866[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26867 = state_26711;
state_26711 = G__26867;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = function(state_26711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1.call(this,state_26711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__;
})()
;})(__26855,switch__24473__auto__,c__24640__auto___26859,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async))
})();
var state__24642__auto__ = (function (){var statearr_26722 = f__24641__auto__.call(null);
(statearr_26722[(6)] = c__24640__auto___26859);

return statearr_26722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(__26855,c__24640__auto___26859,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async))
);


break;
case "async":
var c__24640__auto___26868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26855,c__24640__auto___26868,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async){
return (function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = ((function (__26855,c__24640__auto___26868,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async){
return (function (state_26735){
var state_val_26736 = (state_26735[(1)]);
if((state_val_26736 === (1))){
var state_26735__$1 = state_26735;
var statearr_26737_26869 = state_26735__$1;
(statearr_26737_26869[(2)] = null);

(statearr_26737_26869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (2))){
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26735__$1,(4),jobs);
} else {
if((state_val_26736 === (3))){
var inst_26733 = (state_26735[(2)]);
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26735__$1,inst_26733);
} else {
if((state_val_26736 === (4))){
var inst_26725 = (state_26735[(2)]);
var inst_26726 = async.call(null,inst_26725);
var state_26735__$1 = state_26735;
if(cljs.core.truth_(inst_26726)){
var statearr_26738_26870 = state_26735__$1;
(statearr_26738_26870[(1)] = (5));

} else {
var statearr_26739_26871 = state_26735__$1;
(statearr_26739_26871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (5))){
var state_26735__$1 = state_26735;
var statearr_26740_26872 = state_26735__$1;
(statearr_26740_26872[(2)] = null);

(statearr_26740_26872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (6))){
var state_26735__$1 = state_26735;
var statearr_26741_26873 = state_26735__$1;
(statearr_26741_26873[(2)] = null);

(statearr_26741_26873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (7))){
var inst_26731 = (state_26735[(2)]);
var state_26735__$1 = state_26735;
var statearr_26742_26874 = state_26735__$1;
(statearr_26742_26874[(2)] = inst_26731);

(statearr_26742_26874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26855,c__24640__auto___26868,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async))
;
return ((function (__26855,switch__24473__auto__,c__24640__auto___26868,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0 = (function (){
var statearr_26743 = [null,null,null,null,null,null,null];
(statearr_26743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__);

(statearr_26743[(1)] = (1));

return statearr_26743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1 = (function (state_26735){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_26735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e26744){if((e26744 instanceof Object)){
var ex__24477__auto__ = e26744;
var statearr_26745_26875 = state_26735;
(statearr_26745_26875[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26876 = state_26735;
state_26735 = G__26876;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = function(state_26735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1.call(this,state_26735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__;
})()
;})(__26855,switch__24473__auto__,c__24640__auto___26868,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async))
})();
var state__24642__auto__ = (function (){var statearr_26746 = f__24641__auto__.call(null);
(statearr_26746[(6)] = c__24640__auto___26868);

return statearr_26746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(__26855,c__24640__auto___26868,G__26698_26856,G__26698_26857__$1,n__4613__auto___26854,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26698_26857__$1)].join('')));

}

var G__26877 = (__26855 + (1));
__26855 = G__26877;
continue;
} else {
}
break;
}

var c__24640__auto___26878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_26768){
var state_val_26769 = (state_26768[(1)]);
if((state_val_26769 === (7))){
var inst_26764 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26770_26879 = state_26768__$1;
(statearr_26770_26879[(2)] = inst_26764);

(statearr_26770_26879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (1))){
var state_26768__$1 = state_26768;
var statearr_26771_26880 = state_26768__$1;
(statearr_26771_26880[(2)] = null);

(statearr_26771_26880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (4))){
var inst_26749 = (state_26768[(7)]);
var inst_26749__$1 = (state_26768[(2)]);
var inst_26750 = (inst_26749__$1 == null);
var state_26768__$1 = (function (){var statearr_26772 = state_26768;
(statearr_26772[(7)] = inst_26749__$1);

return statearr_26772;
})();
if(cljs.core.truth_(inst_26750)){
var statearr_26773_26881 = state_26768__$1;
(statearr_26773_26881[(1)] = (5));

} else {
var statearr_26774_26882 = state_26768__$1;
(statearr_26774_26882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (6))){
var inst_26754 = (state_26768[(8)]);
var inst_26749 = (state_26768[(7)]);
var inst_26754__$1 = cljs.core.async.chan.call(null,(1));
var inst_26755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26756 = [inst_26749,inst_26754__$1];
var inst_26757 = (new cljs.core.PersistentVector(null,2,(5),inst_26755,inst_26756,null));
var state_26768__$1 = (function (){var statearr_26775 = state_26768;
(statearr_26775[(8)] = inst_26754__$1);

return statearr_26775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26768__$1,(8),jobs,inst_26757);
} else {
if((state_val_26769 === (3))){
var inst_26766 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26768__$1,inst_26766);
} else {
if((state_val_26769 === (2))){
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26768__$1,(4),from);
} else {
if((state_val_26769 === (9))){
var inst_26761 = (state_26768[(2)]);
var state_26768__$1 = (function (){var statearr_26776 = state_26768;
(statearr_26776[(9)] = inst_26761);

return statearr_26776;
})();
var statearr_26777_26883 = state_26768__$1;
(statearr_26777_26883[(2)] = null);

(statearr_26777_26883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (5))){
var inst_26752 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26768__$1 = state_26768;
var statearr_26778_26884 = state_26768__$1;
(statearr_26778_26884[(2)] = inst_26752);

(statearr_26778_26884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (8))){
var inst_26754 = (state_26768[(8)]);
var inst_26759 = (state_26768[(2)]);
var state_26768__$1 = (function (){var statearr_26779 = state_26768;
(statearr_26779[(10)] = inst_26759);

return statearr_26779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26768__$1,(9),results,inst_26754);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0 = (function (){
var statearr_26780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__);

(statearr_26780[(1)] = (1));

return statearr_26780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1 = (function (state_26768){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_26768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e26781){if((e26781 instanceof Object)){
var ex__24477__auto__ = e26781;
var statearr_26782_26885 = state_26768;
(statearr_26782_26885[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26886 = state_26768;
state_26768 = G__26886;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = function(state_26768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1.call(this,state_26768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_26783 = f__24641__auto__.call(null);
(statearr_26783[(6)] = c__24640__auto___26878);

return statearr_26783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_26821){
var state_val_26822 = (state_26821[(1)]);
if((state_val_26822 === (7))){
var inst_26817 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26823_26887 = state_26821__$1;
(statearr_26823_26887[(2)] = inst_26817);

(statearr_26823_26887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (20))){
var state_26821__$1 = state_26821;
var statearr_26824_26888 = state_26821__$1;
(statearr_26824_26888[(2)] = null);

(statearr_26824_26888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (1))){
var state_26821__$1 = state_26821;
var statearr_26825_26889 = state_26821__$1;
(statearr_26825_26889[(2)] = null);

(statearr_26825_26889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (4))){
var inst_26786 = (state_26821[(7)]);
var inst_26786__$1 = (state_26821[(2)]);
var inst_26787 = (inst_26786__$1 == null);
var state_26821__$1 = (function (){var statearr_26826 = state_26821;
(statearr_26826[(7)] = inst_26786__$1);

return statearr_26826;
})();
if(cljs.core.truth_(inst_26787)){
var statearr_26827_26890 = state_26821__$1;
(statearr_26827_26890[(1)] = (5));

} else {
var statearr_26828_26891 = state_26821__$1;
(statearr_26828_26891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (15))){
var inst_26799 = (state_26821[(8)]);
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26821__$1,(18),to,inst_26799);
} else {
if((state_val_26822 === (21))){
var inst_26812 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26829_26892 = state_26821__$1;
(statearr_26829_26892[(2)] = inst_26812);

(statearr_26829_26892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (13))){
var inst_26814 = (state_26821[(2)]);
var state_26821__$1 = (function (){var statearr_26830 = state_26821;
(statearr_26830[(9)] = inst_26814);

return statearr_26830;
})();
var statearr_26831_26893 = state_26821__$1;
(statearr_26831_26893[(2)] = null);

(statearr_26831_26893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (6))){
var inst_26786 = (state_26821[(7)]);
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26821__$1,(11),inst_26786);
} else {
if((state_val_26822 === (17))){
var inst_26807 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
if(cljs.core.truth_(inst_26807)){
var statearr_26832_26894 = state_26821__$1;
(statearr_26832_26894[(1)] = (19));

} else {
var statearr_26833_26895 = state_26821__$1;
(statearr_26833_26895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (3))){
var inst_26819 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26821__$1,inst_26819);
} else {
if((state_val_26822 === (12))){
var inst_26796 = (state_26821[(10)]);
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26821__$1,(14),inst_26796);
} else {
if((state_val_26822 === (2))){
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26821__$1,(4),results);
} else {
if((state_val_26822 === (19))){
var state_26821__$1 = state_26821;
var statearr_26834_26896 = state_26821__$1;
(statearr_26834_26896[(2)] = null);

(statearr_26834_26896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (11))){
var inst_26796 = (state_26821[(2)]);
var state_26821__$1 = (function (){var statearr_26835 = state_26821;
(statearr_26835[(10)] = inst_26796);

return statearr_26835;
})();
var statearr_26836_26897 = state_26821__$1;
(statearr_26836_26897[(2)] = null);

(statearr_26836_26897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (9))){
var state_26821__$1 = state_26821;
var statearr_26837_26898 = state_26821__$1;
(statearr_26837_26898[(2)] = null);

(statearr_26837_26898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (5))){
var state_26821__$1 = state_26821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26838_26899 = state_26821__$1;
(statearr_26838_26899[(1)] = (8));

} else {
var statearr_26839_26900 = state_26821__$1;
(statearr_26839_26900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (14))){
var inst_26799 = (state_26821[(8)]);
var inst_26799__$1 = (state_26821[(2)]);
var inst_26800 = (inst_26799__$1 == null);
var inst_26801 = cljs.core.not.call(null,inst_26800);
var state_26821__$1 = (function (){var statearr_26840 = state_26821;
(statearr_26840[(8)] = inst_26799__$1);

return statearr_26840;
})();
if(inst_26801){
var statearr_26841_26901 = state_26821__$1;
(statearr_26841_26901[(1)] = (15));

} else {
var statearr_26842_26902 = state_26821__$1;
(statearr_26842_26902[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (16))){
var state_26821__$1 = state_26821;
var statearr_26843_26903 = state_26821__$1;
(statearr_26843_26903[(2)] = false);

(statearr_26843_26903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (10))){
var inst_26793 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26844_26904 = state_26821__$1;
(statearr_26844_26904[(2)] = inst_26793);

(statearr_26844_26904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (18))){
var inst_26804 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26845_26905 = state_26821__$1;
(statearr_26845_26905[(2)] = inst_26804);

(statearr_26845_26905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (8))){
var inst_26790 = cljs.core.async.close_BANG_.call(null,to);
var state_26821__$1 = state_26821;
var statearr_26846_26906 = state_26821__$1;
(statearr_26846_26906[(2)] = inst_26790);

(statearr_26846_26906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0 = (function (){
var statearr_26847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__);

(statearr_26847[(1)] = (1));

return statearr_26847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1 = (function (state_26821){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_26821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e26848){if((e26848 instanceof Object)){
var ex__24477__auto__ = e26848;
var statearr_26849_26907 = state_26821;
(statearr_26849_26907[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26908 = state_26821;
state_26821 = G__26908;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__ = function(state_26821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1.call(this,state_26821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_26850 = f__24641__auto__.call(null);
(statearr_26850[(6)] = c__24640__auto__);

return statearr_26850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));

return c__24640__auto__;
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
var G__26910 = arguments.length;
switch (G__26910) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__26913 = arguments.length;
switch (G__26913) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__26916 = arguments.length;
switch (G__26916) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24640__auto___26965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_26942){
var state_val_26943 = (state_26942[(1)]);
if((state_val_26943 === (7))){
var inst_26938 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
var statearr_26944_26966 = state_26942__$1;
(statearr_26944_26966[(2)] = inst_26938);

(statearr_26944_26966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (1))){
var state_26942__$1 = state_26942;
var statearr_26945_26967 = state_26942__$1;
(statearr_26945_26967[(2)] = null);

(statearr_26945_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (4))){
var inst_26919 = (state_26942[(7)]);
var inst_26919__$1 = (state_26942[(2)]);
var inst_26920 = (inst_26919__$1 == null);
var state_26942__$1 = (function (){var statearr_26946 = state_26942;
(statearr_26946[(7)] = inst_26919__$1);

return statearr_26946;
})();
if(cljs.core.truth_(inst_26920)){
var statearr_26947_26968 = state_26942__$1;
(statearr_26947_26968[(1)] = (5));

} else {
var statearr_26948_26969 = state_26942__$1;
(statearr_26948_26969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (13))){
var state_26942__$1 = state_26942;
var statearr_26949_26970 = state_26942__$1;
(statearr_26949_26970[(2)] = null);

(statearr_26949_26970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (6))){
var inst_26919 = (state_26942[(7)]);
var inst_26925 = p.call(null,inst_26919);
var state_26942__$1 = state_26942;
if(cljs.core.truth_(inst_26925)){
var statearr_26950_26971 = state_26942__$1;
(statearr_26950_26971[(1)] = (9));

} else {
var statearr_26951_26972 = state_26942__$1;
(statearr_26951_26972[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (3))){
var inst_26940 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26942__$1,inst_26940);
} else {
if((state_val_26943 === (12))){
var state_26942__$1 = state_26942;
var statearr_26952_26973 = state_26942__$1;
(statearr_26952_26973[(2)] = null);

(statearr_26952_26973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (2))){
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26942__$1,(4),ch);
} else {
if((state_val_26943 === (11))){
var inst_26919 = (state_26942[(7)]);
var inst_26929 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26942__$1,(8),inst_26929,inst_26919);
} else {
if((state_val_26943 === (9))){
var state_26942__$1 = state_26942;
var statearr_26953_26974 = state_26942__$1;
(statearr_26953_26974[(2)] = tc);

(statearr_26953_26974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (5))){
var inst_26922 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26923 = cljs.core.async.close_BANG_.call(null,fc);
var state_26942__$1 = (function (){var statearr_26954 = state_26942;
(statearr_26954[(8)] = inst_26922);

return statearr_26954;
})();
var statearr_26955_26975 = state_26942__$1;
(statearr_26955_26975[(2)] = inst_26923);

(statearr_26955_26975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (14))){
var inst_26936 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
var statearr_26956_26976 = state_26942__$1;
(statearr_26956_26976[(2)] = inst_26936);

(statearr_26956_26976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (10))){
var state_26942__$1 = state_26942;
var statearr_26957_26977 = state_26942__$1;
(statearr_26957_26977[(2)] = fc);

(statearr_26957_26977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (8))){
var inst_26931 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
if(cljs.core.truth_(inst_26931)){
var statearr_26958_26978 = state_26942__$1;
(statearr_26958_26978[(1)] = (12));

} else {
var statearr_26959_26979 = state_26942__$1;
(statearr_26959_26979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_26960 = [null,null,null,null,null,null,null,null,null];
(statearr_26960[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_26960[(1)] = (1));

return statearr_26960;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_26942){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_26942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e26961){if((e26961 instanceof Object)){
var ex__24477__auto__ = e26961;
var statearr_26962_26980 = state_26942;
(statearr_26962_26980[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26981 = state_26942;
state_26942 = G__26981;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_26942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_26942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_26963 = f__24641__auto__.call(null);
(statearr_26963[(6)] = c__24640__auto___26965);

return statearr_26963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
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
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27002){
var state_val_27003 = (state_27002[(1)]);
if((state_val_27003 === (7))){
var inst_26998 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27004_27022 = state_27002__$1;
(statearr_27004_27022[(2)] = inst_26998);

(statearr_27004_27022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (1))){
var inst_26982 = init;
var state_27002__$1 = (function (){var statearr_27005 = state_27002;
(statearr_27005[(7)] = inst_26982);

return statearr_27005;
})();
var statearr_27006_27023 = state_27002__$1;
(statearr_27006_27023[(2)] = null);

(statearr_27006_27023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (4))){
var inst_26985 = (state_27002[(8)]);
var inst_26985__$1 = (state_27002[(2)]);
var inst_26986 = (inst_26985__$1 == null);
var state_27002__$1 = (function (){var statearr_27007 = state_27002;
(statearr_27007[(8)] = inst_26985__$1);

return statearr_27007;
})();
if(cljs.core.truth_(inst_26986)){
var statearr_27008_27024 = state_27002__$1;
(statearr_27008_27024[(1)] = (5));

} else {
var statearr_27009_27025 = state_27002__$1;
(statearr_27009_27025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (6))){
var inst_26982 = (state_27002[(7)]);
var inst_26989 = (state_27002[(9)]);
var inst_26985 = (state_27002[(8)]);
var inst_26989__$1 = f.call(null,inst_26982,inst_26985);
var inst_26990 = cljs.core.reduced_QMARK_.call(null,inst_26989__$1);
var state_27002__$1 = (function (){var statearr_27010 = state_27002;
(statearr_27010[(9)] = inst_26989__$1);

return statearr_27010;
})();
if(inst_26990){
var statearr_27011_27026 = state_27002__$1;
(statearr_27011_27026[(1)] = (8));

} else {
var statearr_27012_27027 = state_27002__$1;
(statearr_27012_27027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (3))){
var inst_27000 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27002__$1,inst_27000);
} else {
if((state_val_27003 === (2))){
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27002__$1,(4),ch);
} else {
if((state_val_27003 === (9))){
var inst_26989 = (state_27002[(9)]);
var inst_26982 = inst_26989;
var state_27002__$1 = (function (){var statearr_27013 = state_27002;
(statearr_27013[(7)] = inst_26982);

return statearr_27013;
})();
var statearr_27014_27028 = state_27002__$1;
(statearr_27014_27028[(2)] = null);

(statearr_27014_27028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (5))){
var inst_26982 = (state_27002[(7)]);
var state_27002__$1 = state_27002;
var statearr_27015_27029 = state_27002__$1;
(statearr_27015_27029[(2)] = inst_26982);

(statearr_27015_27029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (10))){
var inst_26996 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27016_27030 = state_27002__$1;
(statearr_27016_27030[(2)] = inst_26996);

(statearr_27016_27030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (8))){
var inst_26989 = (state_27002[(9)]);
var inst_26992 = cljs.core.deref.call(null,inst_26989);
var state_27002__$1 = state_27002;
var statearr_27017_27031 = state_27002__$1;
(statearr_27017_27031[(2)] = inst_26992);

(statearr_27017_27031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$reduce_$_state_machine__24474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24474__auto____0 = (function (){
var statearr_27018 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27018[(0)] = cljs$core$async$reduce_$_state_machine__24474__auto__);

(statearr_27018[(1)] = (1));

return statearr_27018;
});
var cljs$core$async$reduce_$_state_machine__24474__auto____1 = (function (state_27002){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27019){if((e27019 instanceof Object)){
var ex__24477__auto__ = e27019;
var statearr_27020_27032 = state_27002;
(statearr_27020_27032[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27033 = state_27002;
state_27002 = G__27033;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24474__auto__ = function(state_27002){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24474__auto____1.call(this,state_27002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24474__auto____0;
cljs$core$async$reduce_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24474__auto____1;
return cljs$core$async$reduce_$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27021 = f__24641__auto__.call(null);
(statearr_27021[(6)] = c__24640__auto__);

return statearr_27021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));

return c__24640__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27039){
var state_val_27040 = (state_27039[(1)]);
if((state_val_27040 === (1))){
var inst_27034 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27039__$1 = state_27039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27039__$1,(2),inst_27034);
} else {
if((state_val_27040 === (2))){
var inst_27036 = (state_27039[(2)]);
var inst_27037 = f__$1.call(null,inst_27036);
var state_27039__$1 = state_27039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27039__$1,inst_27037);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24474__auto____0 = (function (){
var statearr_27041 = [null,null,null,null,null,null,null];
(statearr_27041[(0)] = cljs$core$async$transduce_$_state_machine__24474__auto__);

(statearr_27041[(1)] = (1));

return statearr_27041;
});
var cljs$core$async$transduce_$_state_machine__24474__auto____1 = (function (state_27039){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27042){if((e27042 instanceof Object)){
var ex__24477__auto__ = e27042;
var statearr_27043_27045 = state_27039;
(statearr_27043_27045[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27046 = state_27039;
state_27039 = G__27046;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24474__auto__ = function(state_27039){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24474__auto____1.call(this,state_27039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24474__auto____0;
cljs$core$async$transduce_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24474__auto____1;
return cljs$core$async$transduce_$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27044 = f__24641__auto__.call(null);
(statearr_27044[(6)] = c__24640__auto__);

return statearr_27044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));

return c__24640__auto__;
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
var G__27048 = arguments.length;
switch (G__27048) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27073){
var state_val_27074 = (state_27073[(1)]);
if((state_val_27074 === (7))){
var inst_27055 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27075_27096 = state_27073__$1;
(statearr_27075_27096[(2)] = inst_27055);

(statearr_27075_27096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (1))){
var inst_27049 = cljs.core.seq.call(null,coll);
var inst_27050 = inst_27049;
var state_27073__$1 = (function (){var statearr_27076 = state_27073;
(statearr_27076[(7)] = inst_27050);

return statearr_27076;
})();
var statearr_27077_27097 = state_27073__$1;
(statearr_27077_27097[(2)] = null);

(statearr_27077_27097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (4))){
var inst_27050 = (state_27073[(7)]);
var inst_27053 = cljs.core.first.call(null,inst_27050);
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27073__$1,(7),ch,inst_27053);
} else {
if((state_val_27074 === (13))){
var inst_27067 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27078_27098 = state_27073__$1;
(statearr_27078_27098[(2)] = inst_27067);

(statearr_27078_27098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (6))){
var inst_27058 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
if(cljs.core.truth_(inst_27058)){
var statearr_27079_27099 = state_27073__$1;
(statearr_27079_27099[(1)] = (8));

} else {
var statearr_27080_27100 = state_27073__$1;
(statearr_27080_27100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (3))){
var inst_27071 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27073__$1,inst_27071);
} else {
if((state_val_27074 === (12))){
var state_27073__$1 = state_27073;
var statearr_27081_27101 = state_27073__$1;
(statearr_27081_27101[(2)] = null);

(statearr_27081_27101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (2))){
var inst_27050 = (state_27073[(7)]);
var state_27073__$1 = state_27073;
if(cljs.core.truth_(inst_27050)){
var statearr_27082_27102 = state_27073__$1;
(statearr_27082_27102[(1)] = (4));

} else {
var statearr_27083_27103 = state_27073__$1;
(statearr_27083_27103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (11))){
var inst_27064 = cljs.core.async.close_BANG_.call(null,ch);
var state_27073__$1 = state_27073;
var statearr_27084_27104 = state_27073__$1;
(statearr_27084_27104[(2)] = inst_27064);

(statearr_27084_27104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (9))){
var state_27073__$1 = state_27073;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27085_27105 = state_27073__$1;
(statearr_27085_27105[(1)] = (11));

} else {
var statearr_27086_27106 = state_27073__$1;
(statearr_27086_27106[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (5))){
var inst_27050 = (state_27073[(7)]);
var state_27073__$1 = state_27073;
var statearr_27087_27107 = state_27073__$1;
(statearr_27087_27107[(2)] = inst_27050);

(statearr_27087_27107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (10))){
var inst_27069 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27088_27108 = state_27073__$1;
(statearr_27088_27108[(2)] = inst_27069);

(statearr_27088_27108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (8))){
var inst_27050 = (state_27073[(7)]);
var inst_27060 = cljs.core.next.call(null,inst_27050);
var inst_27050__$1 = inst_27060;
var state_27073__$1 = (function (){var statearr_27089 = state_27073;
(statearr_27089[(7)] = inst_27050__$1);

return statearr_27089;
})();
var statearr_27090_27109 = state_27073__$1;
(statearr_27090_27109[(2)] = null);

(statearr_27090_27109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_27091 = [null,null,null,null,null,null,null,null];
(statearr_27091[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_27091[(1)] = (1));

return statearr_27091;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_27073){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27092){if((e27092 instanceof Object)){
var ex__24477__auto__ = e27092;
var statearr_27093_27110 = state_27073;
(statearr_27093_27110[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27111 = state_27073;
state_27073 = G__27111;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_27073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_27073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27094 = f__24641__auto__.call(null);
(statearr_27094[(6)] = c__24640__auto__);

return statearr_27094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));

return c__24640__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27112 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27112.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27113 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27113.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27114 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27114.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27115 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27115.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27116 = (function (ch,cs,meta27117){
this.ch = ch;
this.cs = cs;
this.meta27117 = meta27117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27118,meta27117__$1){
var self__ = this;
var _27118__$1 = this;
return (new cljs.core.async.t_cljs$core$async27116(self__.ch,self__.cs,meta27117__$1));
}));

(cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27118){
var self__ = this;
var _27118__$1 = this;
return self__.meta27117;
}));

(cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27117","meta27117",727684567,null)], null);
}));

(cljs.core.async.t_cljs$core$async27116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27116");

(cljs.core.async.t_cljs$core$async27116.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27116.
 */
cljs.core.async.__GT_t_cljs$core$async27116 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27116(ch__$1,cs__$1,meta27117){
return (new cljs.core.async.t_cljs$core$async27116(ch__$1,cs__$1,meta27117));
});

}

return (new cljs.core.async.t_cljs$core$async27116(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__24640__auto___27338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27253){
var state_val_27254 = (state_27253[(1)]);
if((state_val_27254 === (7))){
var inst_27249 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27255_27339 = state_27253__$1;
(statearr_27255_27339[(2)] = inst_27249);

(statearr_27255_27339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (20))){
var inst_27152 = (state_27253[(7)]);
var inst_27164 = cljs.core.first.call(null,inst_27152);
var inst_27165 = cljs.core.nth.call(null,inst_27164,(0),null);
var inst_27166 = cljs.core.nth.call(null,inst_27164,(1),null);
var state_27253__$1 = (function (){var statearr_27256 = state_27253;
(statearr_27256[(8)] = inst_27165);

return statearr_27256;
})();
if(cljs.core.truth_(inst_27166)){
var statearr_27257_27340 = state_27253__$1;
(statearr_27257_27340[(1)] = (22));

} else {
var statearr_27258_27341 = state_27253__$1;
(statearr_27258_27341[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (27))){
var inst_27196 = (state_27253[(9)]);
var inst_27121 = (state_27253[(10)]);
var inst_27194 = (state_27253[(11)]);
var inst_27201 = (state_27253[(12)]);
var inst_27201__$1 = cljs.core._nth.call(null,inst_27194,inst_27196);
var inst_27202 = cljs.core.async.put_BANG_.call(null,inst_27201__$1,inst_27121,done);
var state_27253__$1 = (function (){var statearr_27259 = state_27253;
(statearr_27259[(12)] = inst_27201__$1);

return statearr_27259;
})();
if(cljs.core.truth_(inst_27202)){
var statearr_27260_27342 = state_27253__$1;
(statearr_27260_27342[(1)] = (30));

} else {
var statearr_27261_27343 = state_27253__$1;
(statearr_27261_27343[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (1))){
var state_27253__$1 = state_27253;
var statearr_27262_27344 = state_27253__$1;
(statearr_27262_27344[(2)] = null);

(statearr_27262_27344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (24))){
var inst_27152 = (state_27253[(7)]);
var inst_27171 = (state_27253[(2)]);
var inst_27172 = cljs.core.next.call(null,inst_27152);
var inst_27130 = inst_27172;
var inst_27131 = null;
var inst_27132 = (0);
var inst_27133 = (0);
var state_27253__$1 = (function (){var statearr_27263 = state_27253;
(statearr_27263[(13)] = inst_27130);

(statearr_27263[(14)] = inst_27132);

(statearr_27263[(15)] = inst_27133);

(statearr_27263[(16)] = inst_27171);

(statearr_27263[(17)] = inst_27131);

return statearr_27263;
})();
var statearr_27264_27345 = state_27253__$1;
(statearr_27264_27345[(2)] = null);

(statearr_27264_27345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (39))){
var state_27253__$1 = state_27253;
var statearr_27268_27346 = state_27253__$1;
(statearr_27268_27346[(2)] = null);

(statearr_27268_27346[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (4))){
var inst_27121 = (state_27253[(10)]);
var inst_27121__$1 = (state_27253[(2)]);
var inst_27122 = (inst_27121__$1 == null);
var state_27253__$1 = (function (){var statearr_27269 = state_27253;
(statearr_27269[(10)] = inst_27121__$1);

return statearr_27269;
})();
if(cljs.core.truth_(inst_27122)){
var statearr_27270_27347 = state_27253__$1;
(statearr_27270_27347[(1)] = (5));

} else {
var statearr_27271_27348 = state_27253__$1;
(statearr_27271_27348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (15))){
var inst_27130 = (state_27253[(13)]);
var inst_27132 = (state_27253[(14)]);
var inst_27133 = (state_27253[(15)]);
var inst_27131 = (state_27253[(17)]);
var inst_27148 = (state_27253[(2)]);
var inst_27149 = (inst_27133 + (1));
var tmp27265 = inst_27130;
var tmp27266 = inst_27132;
var tmp27267 = inst_27131;
var inst_27130__$1 = tmp27265;
var inst_27131__$1 = tmp27267;
var inst_27132__$1 = tmp27266;
var inst_27133__$1 = inst_27149;
var state_27253__$1 = (function (){var statearr_27272 = state_27253;
(statearr_27272[(18)] = inst_27148);

(statearr_27272[(13)] = inst_27130__$1);

(statearr_27272[(14)] = inst_27132__$1);

(statearr_27272[(15)] = inst_27133__$1);

(statearr_27272[(17)] = inst_27131__$1);

return statearr_27272;
})();
var statearr_27273_27349 = state_27253__$1;
(statearr_27273_27349[(2)] = null);

(statearr_27273_27349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (21))){
var inst_27175 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27277_27350 = state_27253__$1;
(statearr_27277_27350[(2)] = inst_27175);

(statearr_27277_27350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (31))){
var inst_27201 = (state_27253[(12)]);
var inst_27205 = done.call(null,null);
var inst_27206 = cljs.core.async.untap_STAR_.call(null,m,inst_27201);
var state_27253__$1 = (function (){var statearr_27278 = state_27253;
(statearr_27278[(19)] = inst_27205);

return statearr_27278;
})();
var statearr_27279_27351 = state_27253__$1;
(statearr_27279_27351[(2)] = inst_27206);

(statearr_27279_27351[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (32))){
var inst_27195 = (state_27253[(20)]);
var inst_27196 = (state_27253[(9)]);
var inst_27193 = (state_27253[(21)]);
var inst_27194 = (state_27253[(11)]);
var inst_27208 = (state_27253[(2)]);
var inst_27209 = (inst_27196 + (1));
var tmp27274 = inst_27195;
var tmp27275 = inst_27193;
var tmp27276 = inst_27194;
var inst_27193__$1 = tmp27275;
var inst_27194__$1 = tmp27276;
var inst_27195__$1 = tmp27274;
var inst_27196__$1 = inst_27209;
var state_27253__$1 = (function (){var statearr_27280 = state_27253;
(statearr_27280[(20)] = inst_27195__$1);

(statearr_27280[(9)] = inst_27196__$1);

(statearr_27280[(21)] = inst_27193__$1);

(statearr_27280[(11)] = inst_27194__$1);

(statearr_27280[(22)] = inst_27208);

return statearr_27280;
})();
var statearr_27281_27352 = state_27253__$1;
(statearr_27281_27352[(2)] = null);

(statearr_27281_27352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (40))){
var inst_27221 = (state_27253[(23)]);
var inst_27225 = done.call(null,null);
var inst_27226 = cljs.core.async.untap_STAR_.call(null,m,inst_27221);
var state_27253__$1 = (function (){var statearr_27282 = state_27253;
(statearr_27282[(24)] = inst_27225);

return statearr_27282;
})();
var statearr_27283_27353 = state_27253__$1;
(statearr_27283_27353[(2)] = inst_27226);

(statearr_27283_27353[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (33))){
var inst_27212 = (state_27253[(25)]);
var inst_27214 = cljs.core.chunked_seq_QMARK_.call(null,inst_27212);
var state_27253__$1 = state_27253;
if(inst_27214){
var statearr_27284_27354 = state_27253__$1;
(statearr_27284_27354[(1)] = (36));

} else {
var statearr_27285_27355 = state_27253__$1;
(statearr_27285_27355[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (13))){
var inst_27142 = (state_27253[(26)]);
var inst_27145 = cljs.core.async.close_BANG_.call(null,inst_27142);
var state_27253__$1 = state_27253;
var statearr_27286_27356 = state_27253__$1;
(statearr_27286_27356[(2)] = inst_27145);

(statearr_27286_27356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (22))){
var inst_27165 = (state_27253[(8)]);
var inst_27168 = cljs.core.async.close_BANG_.call(null,inst_27165);
var state_27253__$1 = state_27253;
var statearr_27287_27357 = state_27253__$1;
(statearr_27287_27357[(2)] = inst_27168);

(statearr_27287_27357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (36))){
var inst_27212 = (state_27253[(25)]);
var inst_27216 = cljs.core.chunk_first.call(null,inst_27212);
var inst_27217 = cljs.core.chunk_rest.call(null,inst_27212);
var inst_27218 = cljs.core.count.call(null,inst_27216);
var inst_27193 = inst_27217;
var inst_27194 = inst_27216;
var inst_27195 = inst_27218;
var inst_27196 = (0);
var state_27253__$1 = (function (){var statearr_27288 = state_27253;
(statearr_27288[(20)] = inst_27195);

(statearr_27288[(9)] = inst_27196);

(statearr_27288[(21)] = inst_27193);

(statearr_27288[(11)] = inst_27194);

return statearr_27288;
})();
var statearr_27289_27358 = state_27253__$1;
(statearr_27289_27358[(2)] = null);

(statearr_27289_27358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (41))){
var inst_27212 = (state_27253[(25)]);
var inst_27228 = (state_27253[(2)]);
var inst_27229 = cljs.core.next.call(null,inst_27212);
var inst_27193 = inst_27229;
var inst_27194 = null;
var inst_27195 = (0);
var inst_27196 = (0);
var state_27253__$1 = (function (){var statearr_27290 = state_27253;
(statearr_27290[(20)] = inst_27195);

(statearr_27290[(9)] = inst_27196);

(statearr_27290[(21)] = inst_27193);

(statearr_27290[(27)] = inst_27228);

(statearr_27290[(11)] = inst_27194);

return statearr_27290;
})();
var statearr_27291_27359 = state_27253__$1;
(statearr_27291_27359[(2)] = null);

(statearr_27291_27359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (43))){
var state_27253__$1 = state_27253;
var statearr_27292_27360 = state_27253__$1;
(statearr_27292_27360[(2)] = null);

(statearr_27292_27360[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (29))){
var inst_27237 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27293_27361 = state_27253__$1;
(statearr_27293_27361[(2)] = inst_27237);

(statearr_27293_27361[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (44))){
var inst_27246 = (state_27253[(2)]);
var state_27253__$1 = (function (){var statearr_27294 = state_27253;
(statearr_27294[(28)] = inst_27246);

return statearr_27294;
})();
var statearr_27295_27362 = state_27253__$1;
(statearr_27295_27362[(2)] = null);

(statearr_27295_27362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (6))){
var inst_27185 = (state_27253[(29)]);
var inst_27184 = cljs.core.deref.call(null,cs);
var inst_27185__$1 = cljs.core.keys.call(null,inst_27184);
var inst_27186 = cljs.core.count.call(null,inst_27185__$1);
var inst_27187 = cljs.core.reset_BANG_.call(null,dctr,inst_27186);
var inst_27192 = cljs.core.seq.call(null,inst_27185__$1);
var inst_27193 = inst_27192;
var inst_27194 = null;
var inst_27195 = (0);
var inst_27196 = (0);
var state_27253__$1 = (function (){var statearr_27296 = state_27253;
(statearr_27296[(20)] = inst_27195);

(statearr_27296[(9)] = inst_27196);

(statearr_27296[(21)] = inst_27193);

(statearr_27296[(29)] = inst_27185__$1);

(statearr_27296[(30)] = inst_27187);

(statearr_27296[(11)] = inst_27194);

return statearr_27296;
})();
var statearr_27297_27363 = state_27253__$1;
(statearr_27297_27363[(2)] = null);

(statearr_27297_27363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (28))){
var inst_27193 = (state_27253[(21)]);
var inst_27212 = (state_27253[(25)]);
var inst_27212__$1 = cljs.core.seq.call(null,inst_27193);
var state_27253__$1 = (function (){var statearr_27298 = state_27253;
(statearr_27298[(25)] = inst_27212__$1);

return statearr_27298;
})();
if(inst_27212__$1){
var statearr_27299_27364 = state_27253__$1;
(statearr_27299_27364[(1)] = (33));

} else {
var statearr_27300_27365 = state_27253__$1;
(statearr_27300_27365[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (25))){
var inst_27195 = (state_27253[(20)]);
var inst_27196 = (state_27253[(9)]);
var inst_27198 = (inst_27196 < inst_27195);
var inst_27199 = inst_27198;
var state_27253__$1 = state_27253;
if(cljs.core.truth_(inst_27199)){
var statearr_27301_27366 = state_27253__$1;
(statearr_27301_27366[(1)] = (27));

} else {
var statearr_27302_27367 = state_27253__$1;
(statearr_27302_27367[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (34))){
var state_27253__$1 = state_27253;
var statearr_27303_27368 = state_27253__$1;
(statearr_27303_27368[(2)] = null);

(statearr_27303_27368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (17))){
var state_27253__$1 = state_27253;
var statearr_27304_27369 = state_27253__$1;
(statearr_27304_27369[(2)] = null);

(statearr_27304_27369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (3))){
var inst_27251 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27253__$1,inst_27251);
} else {
if((state_val_27254 === (12))){
var inst_27180 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27305_27370 = state_27253__$1;
(statearr_27305_27370[(2)] = inst_27180);

(statearr_27305_27370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (2))){
var state_27253__$1 = state_27253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27253__$1,(4),ch);
} else {
if((state_val_27254 === (23))){
var state_27253__$1 = state_27253;
var statearr_27306_27371 = state_27253__$1;
(statearr_27306_27371[(2)] = null);

(statearr_27306_27371[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (35))){
var inst_27235 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27307_27372 = state_27253__$1;
(statearr_27307_27372[(2)] = inst_27235);

(statearr_27307_27372[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (19))){
var inst_27152 = (state_27253[(7)]);
var inst_27156 = cljs.core.chunk_first.call(null,inst_27152);
var inst_27157 = cljs.core.chunk_rest.call(null,inst_27152);
var inst_27158 = cljs.core.count.call(null,inst_27156);
var inst_27130 = inst_27157;
var inst_27131 = inst_27156;
var inst_27132 = inst_27158;
var inst_27133 = (0);
var state_27253__$1 = (function (){var statearr_27308 = state_27253;
(statearr_27308[(13)] = inst_27130);

(statearr_27308[(14)] = inst_27132);

(statearr_27308[(15)] = inst_27133);

(statearr_27308[(17)] = inst_27131);

return statearr_27308;
})();
var statearr_27309_27373 = state_27253__$1;
(statearr_27309_27373[(2)] = null);

(statearr_27309_27373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (11))){
var inst_27130 = (state_27253[(13)]);
var inst_27152 = (state_27253[(7)]);
var inst_27152__$1 = cljs.core.seq.call(null,inst_27130);
var state_27253__$1 = (function (){var statearr_27310 = state_27253;
(statearr_27310[(7)] = inst_27152__$1);

return statearr_27310;
})();
if(inst_27152__$1){
var statearr_27311_27374 = state_27253__$1;
(statearr_27311_27374[(1)] = (16));

} else {
var statearr_27312_27375 = state_27253__$1;
(statearr_27312_27375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (9))){
var inst_27182 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27313_27376 = state_27253__$1;
(statearr_27313_27376[(2)] = inst_27182);

(statearr_27313_27376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (5))){
var inst_27128 = cljs.core.deref.call(null,cs);
var inst_27129 = cljs.core.seq.call(null,inst_27128);
var inst_27130 = inst_27129;
var inst_27131 = null;
var inst_27132 = (0);
var inst_27133 = (0);
var state_27253__$1 = (function (){var statearr_27314 = state_27253;
(statearr_27314[(13)] = inst_27130);

(statearr_27314[(14)] = inst_27132);

(statearr_27314[(15)] = inst_27133);

(statearr_27314[(17)] = inst_27131);

return statearr_27314;
})();
var statearr_27315_27377 = state_27253__$1;
(statearr_27315_27377[(2)] = null);

(statearr_27315_27377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (14))){
var state_27253__$1 = state_27253;
var statearr_27316_27378 = state_27253__$1;
(statearr_27316_27378[(2)] = null);

(statearr_27316_27378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (45))){
var inst_27243 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27317_27379 = state_27253__$1;
(statearr_27317_27379[(2)] = inst_27243);

(statearr_27317_27379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (26))){
var inst_27185 = (state_27253[(29)]);
var inst_27239 = (state_27253[(2)]);
var inst_27240 = cljs.core.seq.call(null,inst_27185);
var state_27253__$1 = (function (){var statearr_27318 = state_27253;
(statearr_27318[(31)] = inst_27239);

return statearr_27318;
})();
if(inst_27240){
var statearr_27319_27380 = state_27253__$1;
(statearr_27319_27380[(1)] = (42));

} else {
var statearr_27320_27381 = state_27253__$1;
(statearr_27320_27381[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (16))){
var inst_27152 = (state_27253[(7)]);
var inst_27154 = cljs.core.chunked_seq_QMARK_.call(null,inst_27152);
var state_27253__$1 = state_27253;
if(inst_27154){
var statearr_27321_27382 = state_27253__$1;
(statearr_27321_27382[(1)] = (19));

} else {
var statearr_27322_27383 = state_27253__$1;
(statearr_27322_27383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (38))){
var inst_27232 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27323_27384 = state_27253__$1;
(statearr_27323_27384[(2)] = inst_27232);

(statearr_27323_27384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (30))){
var state_27253__$1 = state_27253;
var statearr_27324_27385 = state_27253__$1;
(statearr_27324_27385[(2)] = null);

(statearr_27324_27385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (10))){
var inst_27133 = (state_27253[(15)]);
var inst_27131 = (state_27253[(17)]);
var inst_27141 = cljs.core._nth.call(null,inst_27131,inst_27133);
var inst_27142 = cljs.core.nth.call(null,inst_27141,(0),null);
var inst_27143 = cljs.core.nth.call(null,inst_27141,(1),null);
var state_27253__$1 = (function (){var statearr_27325 = state_27253;
(statearr_27325[(26)] = inst_27142);

return statearr_27325;
})();
if(cljs.core.truth_(inst_27143)){
var statearr_27326_27386 = state_27253__$1;
(statearr_27326_27386[(1)] = (13));

} else {
var statearr_27327_27387 = state_27253__$1;
(statearr_27327_27387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (18))){
var inst_27178 = (state_27253[(2)]);
var state_27253__$1 = state_27253;
var statearr_27328_27388 = state_27253__$1;
(statearr_27328_27388[(2)] = inst_27178);

(statearr_27328_27388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (42))){
var state_27253__$1 = state_27253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27253__$1,(45),dchan);
} else {
if((state_val_27254 === (37))){
var inst_27221 = (state_27253[(23)]);
var inst_27121 = (state_27253[(10)]);
var inst_27212 = (state_27253[(25)]);
var inst_27221__$1 = cljs.core.first.call(null,inst_27212);
var inst_27222 = cljs.core.async.put_BANG_.call(null,inst_27221__$1,inst_27121,done);
var state_27253__$1 = (function (){var statearr_27329 = state_27253;
(statearr_27329[(23)] = inst_27221__$1);

return statearr_27329;
})();
if(cljs.core.truth_(inst_27222)){
var statearr_27330_27389 = state_27253__$1;
(statearr_27330_27389[(1)] = (39));

} else {
var statearr_27331_27390 = state_27253__$1;
(statearr_27331_27390[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27254 === (8))){
var inst_27132 = (state_27253[(14)]);
var inst_27133 = (state_27253[(15)]);
var inst_27135 = (inst_27133 < inst_27132);
var inst_27136 = inst_27135;
var state_27253__$1 = state_27253;
if(cljs.core.truth_(inst_27136)){
var statearr_27332_27391 = state_27253__$1;
(statearr_27332_27391[(1)] = (10));

} else {
var statearr_27333_27392 = state_27253__$1;
(statearr_27333_27392[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$mult_$_state_machine__24474__auto__ = null;
var cljs$core$async$mult_$_state_machine__24474__auto____0 = (function (){
var statearr_27334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27334[(0)] = cljs$core$async$mult_$_state_machine__24474__auto__);

(statearr_27334[(1)] = (1));

return statearr_27334;
});
var cljs$core$async$mult_$_state_machine__24474__auto____1 = (function (state_27253){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27335){if((e27335 instanceof Object)){
var ex__24477__auto__ = e27335;
var statearr_27336_27393 = state_27253;
(statearr_27336_27393[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27394 = state_27253;
state_27253 = G__27394;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24474__auto__ = function(state_27253){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24474__auto____1.call(this,state_27253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24474__auto____0;
cljs$core$async$mult_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24474__auto____1;
return cljs$core$async$mult_$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27337 = f__24641__auto__.call(null);
(statearr_27337[(6)] = c__24640__auto___27338);

return statearr_27337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
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
var G__27396 = arguments.length;
switch (G__27396) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27398 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27398.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27399 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27399.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27400 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27400.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27401 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27401.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27402 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27402.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27413 = arguments.length;
var i__4737__auto___27414 = (0);
while(true){
if((i__4737__auto___27414 < len__4736__auto___27413)){
args__4742__auto__.push((arguments[i__4737__auto___27414]));

var G__27415 = (i__4737__auto___27414 + (1));
i__4737__auto___27414 = G__27415;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27407){
var map__27408 = p__27407;
var map__27408__$1 = (((((!((map__27408 == null))))?(((((map__27408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408):map__27408);
var opts = map__27408__$1;
var statearr_27410_27416 = state;
(statearr_27410_27416[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27411_27417 = state;
(statearr_27411_27417[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27412_27418 = state;
(statearr_27412_27418[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27403){
var G__27404 = cljs.core.first.call(null,seq27403);
var seq27403__$1 = cljs.core.next.call(null,seq27403);
var G__27405 = cljs.core.first.call(null,seq27403__$1);
var seq27403__$2 = cljs.core.next.call(null,seq27403__$1);
var G__27406 = cljs.core.first.call(null,seq27403__$2);
var seq27403__$3 = cljs.core.next.call(null,seq27403__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27404,G__27405,G__27406,seq27403__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27419 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27420){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27420 = meta27420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27421,meta27420__$1){
var self__ = this;
var _27421__$1 = this;
return (new cljs.core.async.t_cljs$core$async27419(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27420__$1));
}));

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27421){
var self__ = this;
var _27421__$1 = this;
return self__.meta27420;
}));

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27419.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27420","meta27420",3048649,null)], null);
}));

(cljs.core.async.t_cljs$core$async27419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27419");

(cljs.core.async.t_cljs$core$async27419.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27419.
 */
cljs.core.async.__GT_t_cljs$core$async27419 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27419(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27420){
return (new cljs.core.async.t_cljs$core$async27419(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27420));
});

}

return (new cljs.core.async.t_cljs$core$async27419(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24640__auto___27583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27523){
var state_val_27524 = (state_27523[(1)]);
if((state_val_27524 === (7))){
var inst_27438 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27525_27584 = state_27523__$1;
(statearr_27525_27584[(2)] = inst_27438);

(statearr_27525_27584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (20))){
var inst_27450 = (state_27523[(7)]);
var state_27523__$1 = state_27523;
var statearr_27526_27585 = state_27523__$1;
(statearr_27526_27585[(2)] = inst_27450);

(statearr_27526_27585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (27))){
var state_27523__$1 = state_27523;
var statearr_27527_27586 = state_27523__$1;
(statearr_27527_27586[(2)] = null);

(statearr_27527_27586[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (1))){
var inst_27425 = (state_27523[(8)]);
var inst_27425__$1 = calc_state.call(null);
var inst_27427 = (inst_27425__$1 == null);
var inst_27428 = cljs.core.not.call(null,inst_27427);
var state_27523__$1 = (function (){var statearr_27528 = state_27523;
(statearr_27528[(8)] = inst_27425__$1);

return statearr_27528;
})();
if(inst_27428){
var statearr_27529_27587 = state_27523__$1;
(statearr_27529_27587[(1)] = (2));

} else {
var statearr_27530_27588 = state_27523__$1;
(statearr_27530_27588[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (24))){
var inst_27474 = (state_27523[(9)]);
var inst_27497 = (state_27523[(10)]);
var inst_27483 = (state_27523[(11)]);
var inst_27497__$1 = inst_27474.call(null,inst_27483);
var state_27523__$1 = (function (){var statearr_27531 = state_27523;
(statearr_27531[(10)] = inst_27497__$1);

return statearr_27531;
})();
if(cljs.core.truth_(inst_27497__$1)){
var statearr_27532_27589 = state_27523__$1;
(statearr_27532_27589[(1)] = (29));

} else {
var statearr_27533_27590 = state_27523__$1;
(statearr_27533_27590[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (4))){
var inst_27441 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27441)){
var statearr_27534_27591 = state_27523__$1;
(statearr_27534_27591[(1)] = (8));

} else {
var statearr_27535_27592 = state_27523__$1;
(statearr_27535_27592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (15))){
var inst_27468 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27468)){
var statearr_27536_27593 = state_27523__$1;
(statearr_27536_27593[(1)] = (19));

} else {
var statearr_27537_27594 = state_27523__$1;
(statearr_27537_27594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (21))){
var inst_27473 = (state_27523[(12)]);
var inst_27473__$1 = (state_27523[(2)]);
var inst_27474 = cljs.core.get.call(null,inst_27473__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27475 = cljs.core.get.call(null,inst_27473__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27476 = cljs.core.get.call(null,inst_27473__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27523__$1 = (function (){var statearr_27538 = state_27523;
(statearr_27538[(9)] = inst_27474);

(statearr_27538[(13)] = inst_27475);

(statearr_27538[(12)] = inst_27473__$1);

return statearr_27538;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27523__$1,(22),inst_27476);
} else {
if((state_val_27524 === (31))){
var inst_27505 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27505)){
var statearr_27539_27595 = state_27523__$1;
(statearr_27539_27595[(1)] = (32));

} else {
var statearr_27540_27596 = state_27523__$1;
(statearr_27540_27596[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (32))){
var inst_27482 = (state_27523[(14)]);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27523__$1,(35),out,inst_27482);
} else {
if((state_val_27524 === (33))){
var inst_27473 = (state_27523[(12)]);
var inst_27450 = inst_27473;
var state_27523__$1 = (function (){var statearr_27541 = state_27523;
(statearr_27541[(7)] = inst_27450);

return statearr_27541;
})();
var statearr_27542_27597 = state_27523__$1;
(statearr_27542_27597[(2)] = null);

(statearr_27542_27597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (13))){
var inst_27450 = (state_27523[(7)]);
var inst_27457 = inst_27450.cljs$lang$protocol_mask$partition0$;
var inst_27458 = (inst_27457 & (64));
var inst_27459 = inst_27450.cljs$core$ISeq$;
var inst_27460 = (cljs.core.PROTOCOL_SENTINEL === inst_27459);
var inst_27461 = ((inst_27458) || (inst_27460));
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27461)){
var statearr_27543_27598 = state_27523__$1;
(statearr_27543_27598[(1)] = (16));

} else {
var statearr_27544_27599 = state_27523__$1;
(statearr_27544_27599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (22))){
var inst_27482 = (state_27523[(14)]);
var inst_27483 = (state_27523[(11)]);
var inst_27481 = (state_27523[(2)]);
var inst_27482__$1 = cljs.core.nth.call(null,inst_27481,(0),null);
var inst_27483__$1 = cljs.core.nth.call(null,inst_27481,(1),null);
var inst_27484 = (inst_27482__$1 == null);
var inst_27485 = cljs.core._EQ_.call(null,inst_27483__$1,change);
var inst_27486 = ((inst_27484) || (inst_27485));
var state_27523__$1 = (function (){var statearr_27545 = state_27523;
(statearr_27545[(14)] = inst_27482__$1);

(statearr_27545[(11)] = inst_27483__$1);

return statearr_27545;
})();
if(cljs.core.truth_(inst_27486)){
var statearr_27546_27600 = state_27523__$1;
(statearr_27546_27600[(1)] = (23));

} else {
var statearr_27547_27601 = state_27523__$1;
(statearr_27547_27601[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (36))){
var inst_27473 = (state_27523[(12)]);
var inst_27450 = inst_27473;
var state_27523__$1 = (function (){var statearr_27548 = state_27523;
(statearr_27548[(7)] = inst_27450);

return statearr_27548;
})();
var statearr_27549_27602 = state_27523__$1;
(statearr_27549_27602[(2)] = null);

(statearr_27549_27602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (29))){
var inst_27497 = (state_27523[(10)]);
var state_27523__$1 = state_27523;
var statearr_27550_27603 = state_27523__$1;
(statearr_27550_27603[(2)] = inst_27497);

(statearr_27550_27603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (6))){
var state_27523__$1 = state_27523;
var statearr_27551_27604 = state_27523__$1;
(statearr_27551_27604[(2)] = false);

(statearr_27551_27604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (28))){
var inst_27493 = (state_27523[(2)]);
var inst_27494 = calc_state.call(null);
var inst_27450 = inst_27494;
var state_27523__$1 = (function (){var statearr_27552 = state_27523;
(statearr_27552[(7)] = inst_27450);

(statearr_27552[(15)] = inst_27493);

return statearr_27552;
})();
var statearr_27553_27605 = state_27523__$1;
(statearr_27553_27605[(2)] = null);

(statearr_27553_27605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (25))){
var inst_27519 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27554_27606 = state_27523__$1;
(statearr_27554_27606[(2)] = inst_27519);

(statearr_27554_27606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (34))){
var inst_27517 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27555_27607 = state_27523__$1;
(statearr_27555_27607[(2)] = inst_27517);

(statearr_27555_27607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (17))){
var state_27523__$1 = state_27523;
var statearr_27556_27608 = state_27523__$1;
(statearr_27556_27608[(2)] = false);

(statearr_27556_27608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (3))){
var state_27523__$1 = state_27523;
var statearr_27557_27609 = state_27523__$1;
(statearr_27557_27609[(2)] = false);

(statearr_27557_27609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (12))){
var inst_27521 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27523__$1,inst_27521);
} else {
if((state_val_27524 === (2))){
var inst_27425 = (state_27523[(8)]);
var inst_27430 = inst_27425.cljs$lang$protocol_mask$partition0$;
var inst_27431 = (inst_27430 & (64));
var inst_27432 = inst_27425.cljs$core$ISeq$;
var inst_27433 = (cljs.core.PROTOCOL_SENTINEL === inst_27432);
var inst_27434 = ((inst_27431) || (inst_27433));
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27434)){
var statearr_27558_27610 = state_27523__$1;
(statearr_27558_27610[(1)] = (5));

} else {
var statearr_27559_27611 = state_27523__$1;
(statearr_27559_27611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (23))){
var inst_27482 = (state_27523[(14)]);
var inst_27488 = (inst_27482 == null);
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27488)){
var statearr_27560_27612 = state_27523__$1;
(statearr_27560_27612[(1)] = (26));

} else {
var statearr_27561_27613 = state_27523__$1;
(statearr_27561_27613[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (35))){
var inst_27508 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27508)){
var statearr_27562_27614 = state_27523__$1;
(statearr_27562_27614[(1)] = (36));

} else {
var statearr_27563_27615 = state_27523__$1;
(statearr_27563_27615[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (19))){
var inst_27450 = (state_27523[(7)]);
var inst_27470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27450);
var state_27523__$1 = state_27523;
var statearr_27564_27616 = state_27523__$1;
(statearr_27564_27616[(2)] = inst_27470);

(statearr_27564_27616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (11))){
var inst_27450 = (state_27523[(7)]);
var inst_27454 = (inst_27450 == null);
var inst_27455 = cljs.core.not.call(null,inst_27454);
var state_27523__$1 = state_27523;
if(inst_27455){
var statearr_27565_27617 = state_27523__$1;
(statearr_27565_27617[(1)] = (13));

} else {
var statearr_27566_27618 = state_27523__$1;
(statearr_27566_27618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (9))){
var inst_27425 = (state_27523[(8)]);
var state_27523__$1 = state_27523;
var statearr_27567_27619 = state_27523__$1;
(statearr_27567_27619[(2)] = inst_27425);

(statearr_27567_27619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (5))){
var state_27523__$1 = state_27523;
var statearr_27568_27620 = state_27523__$1;
(statearr_27568_27620[(2)] = true);

(statearr_27568_27620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (14))){
var state_27523__$1 = state_27523;
var statearr_27569_27621 = state_27523__$1;
(statearr_27569_27621[(2)] = false);

(statearr_27569_27621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (26))){
var inst_27483 = (state_27523[(11)]);
var inst_27490 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27483);
var state_27523__$1 = state_27523;
var statearr_27570_27622 = state_27523__$1;
(statearr_27570_27622[(2)] = inst_27490);

(statearr_27570_27622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (16))){
var state_27523__$1 = state_27523;
var statearr_27571_27623 = state_27523__$1;
(statearr_27571_27623[(2)] = true);

(statearr_27571_27623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (38))){
var inst_27513 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27572_27624 = state_27523__$1;
(statearr_27572_27624[(2)] = inst_27513);

(statearr_27572_27624[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (30))){
var inst_27474 = (state_27523[(9)]);
var inst_27475 = (state_27523[(13)]);
var inst_27483 = (state_27523[(11)]);
var inst_27500 = cljs.core.empty_QMARK_.call(null,inst_27474);
var inst_27501 = inst_27475.call(null,inst_27483);
var inst_27502 = cljs.core.not.call(null,inst_27501);
var inst_27503 = ((inst_27500) && (inst_27502));
var state_27523__$1 = state_27523;
var statearr_27573_27625 = state_27523__$1;
(statearr_27573_27625[(2)] = inst_27503);

(statearr_27573_27625[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (10))){
var inst_27425 = (state_27523[(8)]);
var inst_27446 = (state_27523[(2)]);
var inst_27447 = cljs.core.get.call(null,inst_27446,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27448 = cljs.core.get.call(null,inst_27446,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27449 = cljs.core.get.call(null,inst_27446,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27450 = inst_27425;
var state_27523__$1 = (function (){var statearr_27574 = state_27523;
(statearr_27574[(16)] = inst_27449);

(statearr_27574[(7)] = inst_27450);

(statearr_27574[(17)] = inst_27448);

(statearr_27574[(18)] = inst_27447);

return statearr_27574;
})();
var statearr_27575_27626 = state_27523__$1;
(statearr_27575_27626[(2)] = null);

(statearr_27575_27626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (18))){
var inst_27465 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27576_27627 = state_27523__$1;
(statearr_27576_27627[(2)] = inst_27465);

(statearr_27576_27627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (37))){
var state_27523__$1 = state_27523;
var statearr_27577_27628 = state_27523__$1;
(statearr_27577_27628[(2)] = null);

(statearr_27577_27628[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (8))){
var inst_27425 = (state_27523[(8)]);
var inst_27443 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27425);
var state_27523__$1 = state_27523;
var statearr_27578_27629 = state_27523__$1;
(statearr_27578_27629[(2)] = inst_27443);

(statearr_27578_27629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$mix_$_state_machine__24474__auto__ = null;
var cljs$core$async$mix_$_state_machine__24474__auto____0 = (function (){
var statearr_27579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27579[(0)] = cljs$core$async$mix_$_state_machine__24474__auto__);

(statearr_27579[(1)] = (1));

return statearr_27579;
});
var cljs$core$async$mix_$_state_machine__24474__auto____1 = (function (state_27523){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27580){if((e27580 instanceof Object)){
var ex__24477__auto__ = e27580;
var statearr_27581_27630 = state_27523;
(statearr_27581_27630[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27631 = state_27523;
state_27523 = G__27631;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24474__auto__ = function(state_27523){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24474__auto____1.call(this,state_27523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24474__auto____0;
cljs$core$async$mix_$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24474__auto____1;
return cljs$core$async$mix_$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27582 = f__24641__auto__.call(null);
(statearr_27582[(6)] = c__24640__auto___27583);

return statearr_27582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27634 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27634.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27635 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27635.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27636 = (function() {
var G__27637 = null;
var G__27637__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__27637__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__27637 = function(p,v){
switch(arguments.length){
case 1:
return G__27637__1.call(this,p);
case 2:
return G__27637__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27637.cljs$core$IFn$_invoke$arity$1 = G__27637__1;
G__27637.cljs$core$IFn$_invoke$arity$2 = G__27637__2;
return G__27637;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27633 = arguments.length;
switch (G__27633) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27636.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27636.call(null,p,v);
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
var G__27641 = arguments.length;
switch (G__27641) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27639_SHARP_){
if(cljs.core.truth_(p1__27639_SHARP_.call(null,topic))){
return p1__27639_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27639_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27642 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27643){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27643 = meta27643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27644,meta27643__$1){
var self__ = this;
var _27644__$1 = this;
return (new cljs.core.async.t_cljs$core$async27642(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27643__$1));
}));

(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27644){
var self__ = this;
var _27644__$1 = this;
return self__.meta27643;
}));

(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27643","meta27643",444548297,null)], null);
}));

(cljs.core.async.t_cljs$core$async27642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27642");

(cljs.core.async.t_cljs$core$async27642.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27642.
 */
cljs.core.async.__GT_t_cljs$core$async27642 = (function cljs$core$async$__GT_t_cljs$core$async27642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27643){
return (new cljs.core.async.t_cljs$core$async27642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27643));
});

}

return (new cljs.core.async.t_cljs$core$async27642(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24640__auto___27762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27716){
var state_val_27717 = (state_27716[(1)]);
if((state_val_27717 === (7))){
var inst_27712 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27718_27763 = state_27716__$1;
(statearr_27718_27763[(2)] = inst_27712);

(statearr_27718_27763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (20))){
var state_27716__$1 = state_27716;
var statearr_27719_27764 = state_27716__$1;
(statearr_27719_27764[(2)] = null);

(statearr_27719_27764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (1))){
var state_27716__$1 = state_27716;
var statearr_27720_27765 = state_27716__$1;
(statearr_27720_27765[(2)] = null);

(statearr_27720_27765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (24))){
var inst_27695 = (state_27716[(7)]);
var inst_27704 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27695);
var state_27716__$1 = state_27716;
var statearr_27721_27766 = state_27716__$1;
(statearr_27721_27766[(2)] = inst_27704);

(statearr_27721_27766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (4))){
var inst_27647 = (state_27716[(8)]);
var inst_27647__$1 = (state_27716[(2)]);
var inst_27648 = (inst_27647__$1 == null);
var state_27716__$1 = (function (){var statearr_27722 = state_27716;
(statearr_27722[(8)] = inst_27647__$1);

return statearr_27722;
})();
if(cljs.core.truth_(inst_27648)){
var statearr_27723_27767 = state_27716__$1;
(statearr_27723_27767[(1)] = (5));

} else {
var statearr_27724_27768 = state_27716__$1;
(statearr_27724_27768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (15))){
var inst_27689 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27725_27769 = state_27716__$1;
(statearr_27725_27769[(2)] = inst_27689);

(statearr_27725_27769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (21))){
var inst_27709 = (state_27716[(2)]);
var state_27716__$1 = (function (){var statearr_27726 = state_27716;
(statearr_27726[(9)] = inst_27709);

return statearr_27726;
})();
var statearr_27727_27770 = state_27716__$1;
(statearr_27727_27770[(2)] = null);

(statearr_27727_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (13))){
var inst_27671 = (state_27716[(10)]);
var inst_27673 = cljs.core.chunked_seq_QMARK_.call(null,inst_27671);
var state_27716__$1 = state_27716;
if(inst_27673){
var statearr_27728_27771 = state_27716__$1;
(statearr_27728_27771[(1)] = (16));

} else {
var statearr_27729_27772 = state_27716__$1;
(statearr_27729_27772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (22))){
var inst_27701 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27701)){
var statearr_27730_27773 = state_27716__$1;
(statearr_27730_27773[(1)] = (23));

} else {
var statearr_27731_27774 = state_27716__$1;
(statearr_27731_27774[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (6))){
var inst_27647 = (state_27716[(8)]);
var inst_27697 = (state_27716[(11)]);
var inst_27695 = (state_27716[(7)]);
var inst_27695__$1 = topic_fn.call(null,inst_27647);
var inst_27696 = cljs.core.deref.call(null,mults);
var inst_27697__$1 = cljs.core.get.call(null,inst_27696,inst_27695__$1);
var state_27716__$1 = (function (){var statearr_27732 = state_27716;
(statearr_27732[(11)] = inst_27697__$1);

(statearr_27732[(7)] = inst_27695__$1);

return statearr_27732;
})();
if(cljs.core.truth_(inst_27697__$1)){
var statearr_27733_27775 = state_27716__$1;
(statearr_27733_27775[(1)] = (19));

} else {
var statearr_27734_27776 = state_27716__$1;
(statearr_27734_27776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (25))){
var inst_27706 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27735_27777 = state_27716__$1;
(statearr_27735_27777[(2)] = inst_27706);

(statearr_27735_27777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (17))){
var inst_27671 = (state_27716[(10)]);
var inst_27680 = cljs.core.first.call(null,inst_27671);
var inst_27681 = cljs.core.async.muxch_STAR_.call(null,inst_27680);
var inst_27682 = cljs.core.async.close_BANG_.call(null,inst_27681);
var inst_27683 = cljs.core.next.call(null,inst_27671);
var inst_27657 = inst_27683;
var inst_27658 = null;
var inst_27659 = (0);
var inst_27660 = (0);
var state_27716__$1 = (function (){var statearr_27736 = state_27716;
(statearr_27736[(12)] = inst_27658);

(statearr_27736[(13)] = inst_27682);

(statearr_27736[(14)] = inst_27657);

(statearr_27736[(15)] = inst_27659);

(statearr_27736[(16)] = inst_27660);

return statearr_27736;
})();
var statearr_27737_27778 = state_27716__$1;
(statearr_27737_27778[(2)] = null);

(statearr_27737_27778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (3))){
var inst_27714 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27716__$1,inst_27714);
} else {
if((state_val_27717 === (12))){
var inst_27691 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27738_27779 = state_27716__$1;
(statearr_27738_27779[(2)] = inst_27691);

(statearr_27738_27779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (2))){
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(4),ch);
} else {
if((state_val_27717 === (23))){
var state_27716__$1 = state_27716;
var statearr_27739_27780 = state_27716__$1;
(statearr_27739_27780[(2)] = null);

(statearr_27739_27780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (19))){
var inst_27647 = (state_27716[(8)]);
var inst_27697 = (state_27716[(11)]);
var inst_27699 = cljs.core.async.muxch_STAR_.call(null,inst_27697);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27716__$1,(22),inst_27699,inst_27647);
} else {
if((state_val_27717 === (11))){
var inst_27657 = (state_27716[(14)]);
var inst_27671 = (state_27716[(10)]);
var inst_27671__$1 = cljs.core.seq.call(null,inst_27657);
var state_27716__$1 = (function (){var statearr_27740 = state_27716;
(statearr_27740[(10)] = inst_27671__$1);

return statearr_27740;
})();
if(inst_27671__$1){
var statearr_27741_27781 = state_27716__$1;
(statearr_27741_27781[(1)] = (13));

} else {
var statearr_27742_27782 = state_27716__$1;
(statearr_27742_27782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (9))){
var inst_27693 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27743_27783 = state_27716__$1;
(statearr_27743_27783[(2)] = inst_27693);

(statearr_27743_27783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (5))){
var inst_27654 = cljs.core.deref.call(null,mults);
var inst_27655 = cljs.core.vals.call(null,inst_27654);
var inst_27656 = cljs.core.seq.call(null,inst_27655);
var inst_27657 = inst_27656;
var inst_27658 = null;
var inst_27659 = (0);
var inst_27660 = (0);
var state_27716__$1 = (function (){var statearr_27744 = state_27716;
(statearr_27744[(12)] = inst_27658);

(statearr_27744[(14)] = inst_27657);

(statearr_27744[(15)] = inst_27659);

(statearr_27744[(16)] = inst_27660);

return statearr_27744;
})();
var statearr_27745_27784 = state_27716__$1;
(statearr_27745_27784[(2)] = null);

(statearr_27745_27784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (14))){
var state_27716__$1 = state_27716;
var statearr_27749_27785 = state_27716__$1;
(statearr_27749_27785[(2)] = null);

(statearr_27749_27785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (16))){
var inst_27671 = (state_27716[(10)]);
var inst_27675 = cljs.core.chunk_first.call(null,inst_27671);
var inst_27676 = cljs.core.chunk_rest.call(null,inst_27671);
var inst_27677 = cljs.core.count.call(null,inst_27675);
var inst_27657 = inst_27676;
var inst_27658 = inst_27675;
var inst_27659 = inst_27677;
var inst_27660 = (0);
var state_27716__$1 = (function (){var statearr_27750 = state_27716;
(statearr_27750[(12)] = inst_27658);

(statearr_27750[(14)] = inst_27657);

(statearr_27750[(15)] = inst_27659);

(statearr_27750[(16)] = inst_27660);

return statearr_27750;
})();
var statearr_27751_27786 = state_27716__$1;
(statearr_27751_27786[(2)] = null);

(statearr_27751_27786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (10))){
var inst_27658 = (state_27716[(12)]);
var inst_27657 = (state_27716[(14)]);
var inst_27659 = (state_27716[(15)]);
var inst_27660 = (state_27716[(16)]);
var inst_27665 = cljs.core._nth.call(null,inst_27658,inst_27660);
var inst_27666 = cljs.core.async.muxch_STAR_.call(null,inst_27665);
var inst_27667 = cljs.core.async.close_BANG_.call(null,inst_27666);
var inst_27668 = (inst_27660 + (1));
var tmp27746 = inst_27658;
var tmp27747 = inst_27657;
var tmp27748 = inst_27659;
var inst_27657__$1 = tmp27747;
var inst_27658__$1 = tmp27746;
var inst_27659__$1 = tmp27748;
var inst_27660__$1 = inst_27668;
var state_27716__$1 = (function (){var statearr_27752 = state_27716;
(statearr_27752[(12)] = inst_27658__$1);

(statearr_27752[(17)] = inst_27667);

(statearr_27752[(14)] = inst_27657__$1);

(statearr_27752[(15)] = inst_27659__$1);

(statearr_27752[(16)] = inst_27660__$1);

return statearr_27752;
})();
var statearr_27753_27787 = state_27716__$1;
(statearr_27753_27787[(2)] = null);

(statearr_27753_27787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (18))){
var inst_27686 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27754_27788 = state_27716__$1;
(statearr_27754_27788[(2)] = inst_27686);

(statearr_27754_27788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (8))){
var inst_27659 = (state_27716[(15)]);
var inst_27660 = (state_27716[(16)]);
var inst_27662 = (inst_27660 < inst_27659);
var inst_27663 = inst_27662;
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27663)){
var statearr_27755_27789 = state_27716__$1;
(statearr_27755_27789[(1)] = (10));

} else {
var statearr_27756_27790 = state_27716__$1;
(statearr_27756_27790[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_27757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27757[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_27757[(1)] = (1));

return statearr_27757;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_27716){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27758){if((e27758 instanceof Object)){
var ex__24477__auto__ = e27758;
var statearr_27759_27791 = state_27716;
(statearr_27759_27791[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27792 = state_27716;
state_27716 = G__27792;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_27716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_27716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27760 = f__24641__auto__.call(null);
(statearr_27760[(6)] = c__24640__auto___27762);

return statearr_27760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
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
var G__27794 = arguments.length;
switch (G__27794) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27797 = arguments.length;
switch (G__27797) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__27800 = arguments.length;
switch (G__27800) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__24640__auto___27867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27839){
var state_val_27840 = (state_27839[(1)]);
if((state_val_27840 === (7))){
var state_27839__$1 = state_27839;
var statearr_27841_27868 = state_27839__$1;
(statearr_27841_27868[(2)] = null);

(statearr_27841_27868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (1))){
var state_27839__$1 = state_27839;
var statearr_27842_27869 = state_27839__$1;
(statearr_27842_27869[(2)] = null);

(statearr_27842_27869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (4))){
var inst_27803 = (state_27839[(7)]);
var inst_27805 = (inst_27803 < cnt);
var state_27839__$1 = state_27839;
if(cljs.core.truth_(inst_27805)){
var statearr_27843_27870 = state_27839__$1;
(statearr_27843_27870[(1)] = (6));

} else {
var statearr_27844_27871 = state_27839__$1;
(statearr_27844_27871[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (15))){
var inst_27835 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27845_27872 = state_27839__$1;
(statearr_27845_27872[(2)] = inst_27835);

(statearr_27845_27872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (13))){
var inst_27828 = cljs.core.async.close_BANG_.call(null,out);
var state_27839__$1 = state_27839;
var statearr_27846_27873 = state_27839__$1;
(statearr_27846_27873[(2)] = inst_27828);

(statearr_27846_27873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (6))){
var state_27839__$1 = state_27839;
var statearr_27847_27874 = state_27839__$1;
(statearr_27847_27874[(2)] = null);

(statearr_27847_27874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (3))){
var inst_27837 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27839__$1,inst_27837);
} else {
if((state_val_27840 === (12))){
var inst_27825 = (state_27839[(8)]);
var inst_27825__$1 = (state_27839[(2)]);
var inst_27826 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27825__$1);
var state_27839__$1 = (function (){var statearr_27848 = state_27839;
(statearr_27848[(8)] = inst_27825__$1);

return statearr_27848;
})();
if(cljs.core.truth_(inst_27826)){
var statearr_27849_27875 = state_27839__$1;
(statearr_27849_27875[(1)] = (13));

} else {
var statearr_27850_27876 = state_27839__$1;
(statearr_27850_27876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (2))){
var inst_27802 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27803 = (0);
var state_27839__$1 = (function (){var statearr_27851 = state_27839;
(statearr_27851[(9)] = inst_27802);

(statearr_27851[(7)] = inst_27803);

return statearr_27851;
})();
var statearr_27852_27877 = state_27839__$1;
(statearr_27852_27877[(2)] = null);

(statearr_27852_27877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (11))){
var inst_27803 = (state_27839[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27839,(10),Object,null,(9));
var inst_27812 = chs__$1.call(null,inst_27803);
var inst_27813 = done.call(null,inst_27803);
var inst_27814 = cljs.core.async.take_BANG_.call(null,inst_27812,inst_27813);
var state_27839__$1 = state_27839;
var statearr_27853_27878 = state_27839__$1;
(statearr_27853_27878[(2)] = inst_27814);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (9))){
var inst_27803 = (state_27839[(7)]);
var inst_27816 = (state_27839[(2)]);
var inst_27817 = (inst_27803 + (1));
var inst_27803__$1 = inst_27817;
var state_27839__$1 = (function (){var statearr_27854 = state_27839;
(statearr_27854[(7)] = inst_27803__$1);

(statearr_27854[(10)] = inst_27816);

return statearr_27854;
})();
var statearr_27855_27879 = state_27839__$1;
(statearr_27855_27879[(2)] = null);

(statearr_27855_27879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (5))){
var inst_27823 = (state_27839[(2)]);
var state_27839__$1 = (function (){var statearr_27856 = state_27839;
(statearr_27856[(11)] = inst_27823);

return statearr_27856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27839__$1,(12),dchan);
} else {
if((state_val_27840 === (14))){
var inst_27825 = (state_27839[(8)]);
var inst_27830 = cljs.core.apply.call(null,f,inst_27825);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27839__$1,(16),out,inst_27830);
} else {
if((state_val_27840 === (16))){
var inst_27832 = (state_27839[(2)]);
var state_27839__$1 = (function (){var statearr_27857 = state_27839;
(statearr_27857[(12)] = inst_27832);

return statearr_27857;
})();
var statearr_27858_27880 = state_27839__$1;
(statearr_27858_27880[(2)] = null);

(statearr_27858_27880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (10))){
var inst_27807 = (state_27839[(2)]);
var inst_27808 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27839__$1 = (function (){var statearr_27859 = state_27839;
(statearr_27859[(13)] = inst_27807);

return statearr_27859;
})();
var statearr_27860_27881 = state_27839__$1;
(statearr_27860_27881[(2)] = inst_27808);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (8))){
var inst_27821 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27861_27882 = state_27839__$1;
(statearr_27861_27882[(2)] = inst_27821);

(statearr_27861_27882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_27862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27862[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_27862[(1)] = (1));

return statearr_27862;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_27839){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27863){if((e27863 instanceof Object)){
var ex__24477__auto__ = e27863;
var statearr_27864_27883 = state_27839;
(statearr_27864_27883[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27884 = state_27839;
state_27839 = G__27884;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_27839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_27839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27865 = f__24641__auto__.call(null);
(statearr_27865[(6)] = c__24640__auto___27867);

return statearr_27865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
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
var G__27887 = arguments.length;
switch (G__27887) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___27941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27919){
var state_val_27920 = (state_27919[(1)]);
if((state_val_27920 === (7))){
var inst_27898 = (state_27919[(7)]);
var inst_27899 = (state_27919[(8)]);
var inst_27898__$1 = (state_27919[(2)]);
var inst_27899__$1 = cljs.core.nth.call(null,inst_27898__$1,(0),null);
var inst_27900 = cljs.core.nth.call(null,inst_27898__$1,(1),null);
var inst_27901 = (inst_27899__$1 == null);
var state_27919__$1 = (function (){var statearr_27921 = state_27919;
(statearr_27921[(7)] = inst_27898__$1);

(statearr_27921[(9)] = inst_27900);

(statearr_27921[(8)] = inst_27899__$1);

return statearr_27921;
})();
if(cljs.core.truth_(inst_27901)){
var statearr_27922_27942 = state_27919__$1;
(statearr_27922_27942[(1)] = (8));

} else {
var statearr_27923_27943 = state_27919__$1;
(statearr_27923_27943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (1))){
var inst_27888 = cljs.core.vec.call(null,chs);
var inst_27889 = inst_27888;
var state_27919__$1 = (function (){var statearr_27924 = state_27919;
(statearr_27924[(10)] = inst_27889);

return statearr_27924;
})();
var statearr_27925_27944 = state_27919__$1;
(statearr_27925_27944[(2)] = null);

(statearr_27925_27944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (4))){
var inst_27889 = (state_27919[(10)]);
var state_27919__$1 = state_27919;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27919__$1,(7),inst_27889);
} else {
if((state_val_27920 === (6))){
var inst_27915 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27926_27945 = state_27919__$1;
(statearr_27926_27945[(2)] = inst_27915);

(statearr_27926_27945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (3))){
var inst_27917 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27919__$1,inst_27917);
} else {
if((state_val_27920 === (2))){
var inst_27889 = (state_27919[(10)]);
var inst_27891 = cljs.core.count.call(null,inst_27889);
var inst_27892 = (inst_27891 > (0));
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27892)){
var statearr_27928_27946 = state_27919__$1;
(statearr_27928_27946[(1)] = (4));

} else {
var statearr_27929_27947 = state_27919__$1;
(statearr_27929_27947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (11))){
var inst_27889 = (state_27919[(10)]);
var inst_27908 = (state_27919[(2)]);
var tmp27927 = inst_27889;
var inst_27889__$1 = tmp27927;
var state_27919__$1 = (function (){var statearr_27930 = state_27919;
(statearr_27930[(10)] = inst_27889__$1);

(statearr_27930[(11)] = inst_27908);

return statearr_27930;
})();
var statearr_27931_27948 = state_27919__$1;
(statearr_27931_27948[(2)] = null);

(statearr_27931_27948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (9))){
var inst_27899 = (state_27919[(8)]);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27919__$1,(11),out,inst_27899);
} else {
if((state_val_27920 === (5))){
var inst_27913 = cljs.core.async.close_BANG_.call(null,out);
var state_27919__$1 = state_27919;
var statearr_27932_27949 = state_27919__$1;
(statearr_27932_27949[(2)] = inst_27913);

(statearr_27932_27949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (10))){
var inst_27911 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27933_27950 = state_27919__$1;
(statearr_27933_27950[(2)] = inst_27911);

(statearr_27933_27950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (8))){
var inst_27889 = (state_27919[(10)]);
var inst_27898 = (state_27919[(7)]);
var inst_27900 = (state_27919[(9)]);
var inst_27899 = (state_27919[(8)]);
var inst_27903 = (function (){var cs = inst_27889;
var vec__27894 = inst_27898;
var v = inst_27899;
var c = inst_27900;
return (function (p1__27885_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27885_SHARP_);
});
})();
var inst_27904 = cljs.core.filterv.call(null,inst_27903,inst_27889);
var inst_27889__$1 = inst_27904;
var state_27919__$1 = (function (){var statearr_27934 = state_27919;
(statearr_27934[(10)] = inst_27889__$1);

return statearr_27934;
})();
var statearr_27935_27951 = state_27919__$1;
(statearr_27935_27951[(2)] = null);

(statearr_27935_27951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_27936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27936[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_27936[(1)] = (1));

return statearr_27936;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_27919){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27937){if((e27937 instanceof Object)){
var ex__24477__auto__ = e27937;
var statearr_27938_27952 = state_27919;
(statearr_27938_27952[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27953 = state_27919;
state_27919 = G__27953;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_27919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_27919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27939 = f__24641__auto__.call(null);
(statearr_27939[(6)] = c__24640__auto___27941);

return statearr_27939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27955 = arguments.length;
switch (G__27955) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___28000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_27979){
var state_val_27980 = (state_27979[(1)]);
if((state_val_27980 === (7))){
var inst_27961 = (state_27979[(7)]);
var inst_27961__$1 = (state_27979[(2)]);
var inst_27962 = (inst_27961__$1 == null);
var inst_27963 = cljs.core.not.call(null,inst_27962);
var state_27979__$1 = (function (){var statearr_27981 = state_27979;
(statearr_27981[(7)] = inst_27961__$1);

return statearr_27981;
})();
if(inst_27963){
var statearr_27982_28001 = state_27979__$1;
(statearr_27982_28001[(1)] = (8));

} else {
var statearr_27983_28002 = state_27979__$1;
(statearr_27983_28002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (1))){
var inst_27956 = (0);
var state_27979__$1 = (function (){var statearr_27984 = state_27979;
(statearr_27984[(8)] = inst_27956);

return statearr_27984;
})();
var statearr_27985_28003 = state_27979__$1;
(statearr_27985_28003[(2)] = null);

(statearr_27985_28003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (4))){
var state_27979__$1 = state_27979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27979__$1,(7),ch);
} else {
if((state_val_27980 === (6))){
var inst_27974 = (state_27979[(2)]);
var state_27979__$1 = state_27979;
var statearr_27986_28004 = state_27979__$1;
(statearr_27986_28004[(2)] = inst_27974);

(statearr_27986_28004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (3))){
var inst_27976 = (state_27979[(2)]);
var inst_27977 = cljs.core.async.close_BANG_.call(null,out);
var state_27979__$1 = (function (){var statearr_27987 = state_27979;
(statearr_27987[(9)] = inst_27976);

return statearr_27987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27979__$1,inst_27977);
} else {
if((state_val_27980 === (2))){
var inst_27956 = (state_27979[(8)]);
var inst_27958 = (inst_27956 < n);
var state_27979__$1 = state_27979;
if(cljs.core.truth_(inst_27958)){
var statearr_27988_28005 = state_27979__$1;
(statearr_27988_28005[(1)] = (4));

} else {
var statearr_27989_28006 = state_27979__$1;
(statearr_27989_28006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (11))){
var inst_27956 = (state_27979[(8)]);
var inst_27966 = (state_27979[(2)]);
var inst_27967 = (inst_27956 + (1));
var inst_27956__$1 = inst_27967;
var state_27979__$1 = (function (){var statearr_27990 = state_27979;
(statearr_27990[(8)] = inst_27956__$1);

(statearr_27990[(10)] = inst_27966);

return statearr_27990;
})();
var statearr_27991_28007 = state_27979__$1;
(statearr_27991_28007[(2)] = null);

(statearr_27991_28007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (9))){
var state_27979__$1 = state_27979;
var statearr_27992_28008 = state_27979__$1;
(statearr_27992_28008[(2)] = null);

(statearr_27992_28008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (5))){
var state_27979__$1 = state_27979;
var statearr_27993_28009 = state_27979__$1;
(statearr_27993_28009[(2)] = null);

(statearr_27993_28009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (10))){
var inst_27971 = (state_27979[(2)]);
var state_27979__$1 = state_27979;
var statearr_27994_28010 = state_27979__$1;
(statearr_27994_28010[(2)] = inst_27971);

(statearr_27994_28010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (8))){
var inst_27961 = (state_27979[(7)]);
var state_27979__$1 = state_27979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27979__$1,(11),out,inst_27961);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_27995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27995[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_27995[(1)] = (1));

return statearr_27995;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_27979){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_27979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e27996){if((e27996 instanceof Object)){
var ex__24477__auto__ = e27996;
var statearr_27997_28011 = state_27979;
(statearr_27997_28011[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28012 = state_27979;
state_27979 = G__28012;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_27979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_27979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_27998 = f__24641__auto__.call(null);
(statearr_27998[(6)] = c__24640__auto___28000);

return statearr_27998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28014 = (function (f,ch,meta28015){
this.f = f;
this.ch = ch;
this.meta28015 = meta28015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28016,meta28015__$1){
var self__ = this;
var _28016__$1 = this;
return (new cljs.core.async.t_cljs$core$async28014(self__.f,self__.ch,meta28015__$1));
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28016){
var self__ = this;
var _28016__$1 = this;
return self__.meta28015;
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28017 = (function (f,ch,meta28015,_,fn1,meta28018){
this.f = f;
this.ch = ch;
this.meta28015 = meta28015;
this._ = _;
this.fn1 = fn1;
this.meta28018 = meta28018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28019,meta28018__$1){
var self__ = this;
var _28019__$1 = this;
return (new cljs.core.async.t_cljs$core$async28017(self__.f,self__.ch,self__.meta28015,self__._,self__.fn1,meta28018__$1));
}));

(cljs.core.async.t_cljs$core$async28017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28019){
var self__ = this;
var _28019__$1 = this;
return self__.meta28018;
}));

(cljs.core.async.t_cljs$core$async28017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28013_SHARP_){
return f1.call(null,(((p1__28013_SHARP_ == null))?null:self__.f.call(null,p1__28013_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28015","meta28015",-336145953,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28014","cljs.core.async/t_cljs$core$async28014",-1714276036,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28018","meta28018",1378080911,null)], null);
}));

(cljs.core.async.t_cljs$core$async28017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28017");

(cljs.core.async.t_cljs$core$async28017.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28017.
 */
cljs.core.async.__GT_t_cljs$core$async28017 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28017(f__$1,ch__$1,meta28015__$1,___$2,fn1__$1,meta28018){
return (new cljs.core.async.t_cljs$core$async28017(f__$1,ch__$1,meta28015__$1,___$2,fn1__$1,meta28018));
});

}

return (new cljs.core.async.t_cljs$core$async28017(self__.f,self__.ch,self__.meta28015,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28015","meta28015",-336145953,null)], null);
}));

(cljs.core.async.t_cljs$core$async28014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28014");

(cljs.core.async.t_cljs$core$async28014.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28014.
 */
cljs.core.async.__GT_t_cljs$core$async28014 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28014(f__$1,ch__$1,meta28015){
return (new cljs.core.async.t_cljs$core$async28014(f__$1,ch__$1,meta28015));
});

}

return (new cljs.core.async.t_cljs$core$async28014(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28020 = (function (f,ch,meta28021){
this.f = f;
this.ch = ch;
this.meta28021 = meta28021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28022,meta28021__$1){
var self__ = this;
var _28022__$1 = this;
return (new cljs.core.async.t_cljs$core$async28020(self__.f,self__.ch,meta28021__$1));
}));

(cljs.core.async.t_cljs$core$async28020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28022){
var self__ = this;
var _28022__$1 = this;
return self__.meta28021;
}));

(cljs.core.async.t_cljs$core$async28020.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28020.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28020.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28021","meta28021",-53254237,null)], null);
}));

(cljs.core.async.t_cljs$core$async28020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28020");

(cljs.core.async.t_cljs$core$async28020.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28020.
 */
cljs.core.async.__GT_t_cljs$core$async28020 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28020(f__$1,ch__$1,meta28021){
return (new cljs.core.async.t_cljs$core$async28020(f__$1,ch__$1,meta28021));
});

}

return (new cljs.core.async.t_cljs$core$async28020(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28023 = (function (p,ch,meta28024){
this.p = p;
this.ch = ch;
this.meta28024 = meta28024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28025,meta28024__$1){
var self__ = this;
var _28025__$1 = this;
return (new cljs.core.async.t_cljs$core$async28023(self__.p,self__.ch,meta28024__$1));
}));

(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28025){
var self__ = this;
var _28025__$1 = this;
return self__.meta28024;
}));

(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28024","meta28024",-313560293,null)], null);
}));

(cljs.core.async.t_cljs$core$async28023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28023");

(cljs.core.async.t_cljs$core$async28023.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28023.
 */
cljs.core.async.__GT_t_cljs$core$async28023 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28023(p__$1,ch__$1,meta28024){
return (new cljs.core.async.t_cljs$core$async28023(p__$1,ch__$1,meta28024));
});

}

return (new cljs.core.async.t_cljs$core$async28023(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28027 = arguments.length;
switch (G__28027) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___28067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_28048){
var state_val_28049 = (state_28048[(1)]);
if((state_val_28049 === (7))){
var inst_28044 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28050_28068 = state_28048__$1;
(statearr_28050_28068[(2)] = inst_28044);

(statearr_28050_28068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (1))){
var state_28048__$1 = state_28048;
var statearr_28051_28069 = state_28048__$1;
(statearr_28051_28069[(2)] = null);

(statearr_28051_28069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (4))){
var inst_28030 = (state_28048[(7)]);
var inst_28030__$1 = (state_28048[(2)]);
var inst_28031 = (inst_28030__$1 == null);
var state_28048__$1 = (function (){var statearr_28052 = state_28048;
(statearr_28052[(7)] = inst_28030__$1);

return statearr_28052;
})();
if(cljs.core.truth_(inst_28031)){
var statearr_28053_28070 = state_28048__$1;
(statearr_28053_28070[(1)] = (5));

} else {
var statearr_28054_28071 = state_28048__$1;
(statearr_28054_28071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (6))){
var inst_28030 = (state_28048[(7)]);
var inst_28035 = p.call(null,inst_28030);
var state_28048__$1 = state_28048;
if(cljs.core.truth_(inst_28035)){
var statearr_28055_28072 = state_28048__$1;
(statearr_28055_28072[(1)] = (8));

} else {
var statearr_28056_28073 = state_28048__$1;
(statearr_28056_28073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (3))){
var inst_28046 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28048__$1,inst_28046);
} else {
if((state_val_28049 === (2))){
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28048__$1,(4),ch);
} else {
if((state_val_28049 === (11))){
var inst_28038 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28057_28074 = state_28048__$1;
(statearr_28057_28074[(2)] = inst_28038);

(statearr_28057_28074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (9))){
var state_28048__$1 = state_28048;
var statearr_28058_28075 = state_28048__$1;
(statearr_28058_28075[(2)] = null);

(statearr_28058_28075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (5))){
var inst_28033 = cljs.core.async.close_BANG_.call(null,out);
var state_28048__$1 = state_28048;
var statearr_28059_28076 = state_28048__$1;
(statearr_28059_28076[(2)] = inst_28033);

(statearr_28059_28076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (10))){
var inst_28041 = (state_28048[(2)]);
var state_28048__$1 = (function (){var statearr_28060 = state_28048;
(statearr_28060[(8)] = inst_28041);

return statearr_28060;
})();
var statearr_28061_28077 = state_28048__$1;
(statearr_28061_28077[(2)] = null);

(statearr_28061_28077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (8))){
var inst_28030 = (state_28048[(7)]);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28048__$1,(11),out,inst_28030);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_28062 = [null,null,null,null,null,null,null,null,null];
(statearr_28062[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_28062[(1)] = (1));

return statearr_28062;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_28048){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_28048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e28063){if((e28063 instanceof Object)){
var ex__24477__auto__ = e28063;
var statearr_28064_28078 = state_28048;
(statearr_28064_28078[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28079 = state_28048;
state_28048 = G__28079;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_28048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_28048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_28065 = f__24641__auto__.call(null);
(statearr_28065[(6)] = c__24640__auto___28067);

return statearr_28065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28081 = arguments.length;
switch (G__28081) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_28144){
var state_val_28145 = (state_28144[(1)]);
if((state_val_28145 === (7))){
var inst_28140 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28146_28184 = state_28144__$1;
(statearr_28146_28184[(2)] = inst_28140);

(statearr_28146_28184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (20))){
var inst_28110 = (state_28144[(7)]);
var inst_28121 = (state_28144[(2)]);
var inst_28122 = cljs.core.next.call(null,inst_28110);
var inst_28096 = inst_28122;
var inst_28097 = null;
var inst_28098 = (0);
var inst_28099 = (0);
var state_28144__$1 = (function (){var statearr_28147 = state_28144;
(statearr_28147[(8)] = inst_28099);

(statearr_28147[(9)] = inst_28121);

(statearr_28147[(10)] = inst_28097);

(statearr_28147[(11)] = inst_28098);

(statearr_28147[(12)] = inst_28096);

return statearr_28147;
})();
var statearr_28148_28185 = state_28144__$1;
(statearr_28148_28185[(2)] = null);

(statearr_28148_28185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (1))){
var state_28144__$1 = state_28144;
var statearr_28149_28186 = state_28144__$1;
(statearr_28149_28186[(2)] = null);

(statearr_28149_28186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (4))){
var inst_28085 = (state_28144[(13)]);
var inst_28085__$1 = (state_28144[(2)]);
var inst_28086 = (inst_28085__$1 == null);
var state_28144__$1 = (function (){var statearr_28150 = state_28144;
(statearr_28150[(13)] = inst_28085__$1);

return statearr_28150;
})();
if(cljs.core.truth_(inst_28086)){
var statearr_28151_28187 = state_28144__$1;
(statearr_28151_28187[(1)] = (5));

} else {
var statearr_28152_28188 = state_28144__$1;
(statearr_28152_28188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (15))){
var state_28144__$1 = state_28144;
var statearr_28156_28189 = state_28144__$1;
(statearr_28156_28189[(2)] = null);

(statearr_28156_28189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (21))){
var state_28144__$1 = state_28144;
var statearr_28157_28190 = state_28144__$1;
(statearr_28157_28190[(2)] = null);

(statearr_28157_28190[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (13))){
var inst_28099 = (state_28144[(8)]);
var inst_28097 = (state_28144[(10)]);
var inst_28098 = (state_28144[(11)]);
var inst_28096 = (state_28144[(12)]);
var inst_28106 = (state_28144[(2)]);
var inst_28107 = (inst_28099 + (1));
var tmp28153 = inst_28097;
var tmp28154 = inst_28098;
var tmp28155 = inst_28096;
var inst_28096__$1 = tmp28155;
var inst_28097__$1 = tmp28153;
var inst_28098__$1 = tmp28154;
var inst_28099__$1 = inst_28107;
var state_28144__$1 = (function (){var statearr_28158 = state_28144;
(statearr_28158[(8)] = inst_28099__$1);

(statearr_28158[(10)] = inst_28097__$1);

(statearr_28158[(14)] = inst_28106);

(statearr_28158[(11)] = inst_28098__$1);

(statearr_28158[(12)] = inst_28096__$1);

return statearr_28158;
})();
var statearr_28159_28191 = state_28144__$1;
(statearr_28159_28191[(2)] = null);

(statearr_28159_28191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (22))){
var state_28144__$1 = state_28144;
var statearr_28160_28192 = state_28144__$1;
(statearr_28160_28192[(2)] = null);

(statearr_28160_28192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (6))){
var inst_28085 = (state_28144[(13)]);
var inst_28094 = f.call(null,inst_28085);
var inst_28095 = cljs.core.seq.call(null,inst_28094);
var inst_28096 = inst_28095;
var inst_28097 = null;
var inst_28098 = (0);
var inst_28099 = (0);
var state_28144__$1 = (function (){var statearr_28161 = state_28144;
(statearr_28161[(8)] = inst_28099);

(statearr_28161[(10)] = inst_28097);

(statearr_28161[(11)] = inst_28098);

(statearr_28161[(12)] = inst_28096);

return statearr_28161;
})();
var statearr_28162_28193 = state_28144__$1;
(statearr_28162_28193[(2)] = null);

(statearr_28162_28193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (17))){
var inst_28110 = (state_28144[(7)]);
var inst_28114 = cljs.core.chunk_first.call(null,inst_28110);
var inst_28115 = cljs.core.chunk_rest.call(null,inst_28110);
var inst_28116 = cljs.core.count.call(null,inst_28114);
var inst_28096 = inst_28115;
var inst_28097 = inst_28114;
var inst_28098 = inst_28116;
var inst_28099 = (0);
var state_28144__$1 = (function (){var statearr_28163 = state_28144;
(statearr_28163[(8)] = inst_28099);

(statearr_28163[(10)] = inst_28097);

(statearr_28163[(11)] = inst_28098);

(statearr_28163[(12)] = inst_28096);

return statearr_28163;
})();
var statearr_28164_28194 = state_28144__$1;
(statearr_28164_28194[(2)] = null);

(statearr_28164_28194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (3))){
var inst_28142 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28144__$1,inst_28142);
} else {
if((state_val_28145 === (12))){
var inst_28130 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28165_28195 = state_28144__$1;
(statearr_28165_28195[(2)] = inst_28130);

(statearr_28165_28195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (2))){
var state_28144__$1 = state_28144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28144__$1,(4),in$);
} else {
if((state_val_28145 === (23))){
var inst_28138 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28166_28196 = state_28144__$1;
(statearr_28166_28196[(2)] = inst_28138);

(statearr_28166_28196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (19))){
var inst_28125 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28167_28197 = state_28144__$1;
(statearr_28167_28197[(2)] = inst_28125);

(statearr_28167_28197[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (11))){
var inst_28110 = (state_28144[(7)]);
var inst_28096 = (state_28144[(12)]);
var inst_28110__$1 = cljs.core.seq.call(null,inst_28096);
var state_28144__$1 = (function (){var statearr_28168 = state_28144;
(statearr_28168[(7)] = inst_28110__$1);

return statearr_28168;
})();
if(inst_28110__$1){
var statearr_28169_28198 = state_28144__$1;
(statearr_28169_28198[(1)] = (14));

} else {
var statearr_28170_28199 = state_28144__$1;
(statearr_28170_28199[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (9))){
var inst_28132 = (state_28144[(2)]);
var inst_28133 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28144__$1 = (function (){var statearr_28171 = state_28144;
(statearr_28171[(15)] = inst_28132);

return statearr_28171;
})();
if(cljs.core.truth_(inst_28133)){
var statearr_28172_28200 = state_28144__$1;
(statearr_28172_28200[(1)] = (21));

} else {
var statearr_28173_28201 = state_28144__$1;
(statearr_28173_28201[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (5))){
var inst_28088 = cljs.core.async.close_BANG_.call(null,out);
var state_28144__$1 = state_28144;
var statearr_28174_28202 = state_28144__$1;
(statearr_28174_28202[(2)] = inst_28088);

(statearr_28174_28202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (14))){
var inst_28110 = (state_28144[(7)]);
var inst_28112 = cljs.core.chunked_seq_QMARK_.call(null,inst_28110);
var state_28144__$1 = state_28144;
if(inst_28112){
var statearr_28175_28203 = state_28144__$1;
(statearr_28175_28203[(1)] = (17));

} else {
var statearr_28176_28204 = state_28144__$1;
(statearr_28176_28204[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (16))){
var inst_28128 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28177_28205 = state_28144__$1;
(statearr_28177_28205[(2)] = inst_28128);

(statearr_28177_28205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (10))){
var inst_28099 = (state_28144[(8)]);
var inst_28097 = (state_28144[(10)]);
var inst_28104 = cljs.core._nth.call(null,inst_28097,inst_28099);
var state_28144__$1 = state_28144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28144__$1,(13),out,inst_28104);
} else {
if((state_val_28145 === (18))){
var inst_28110 = (state_28144[(7)]);
var inst_28119 = cljs.core.first.call(null,inst_28110);
var state_28144__$1 = state_28144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28144__$1,(20),out,inst_28119);
} else {
if((state_val_28145 === (8))){
var inst_28099 = (state_28144[(8)]);
var inst_28098 = (state_28144[(11)]);
var inst_28101 = (inst_28099 < inst_28098);
var inst_28102 = inst_28101;
var state_28144__$1 = state_28144;
if(cljs.core.truth_(inst_28102)){
var statearr_28178_28206 = state_28144__$1;
(statearr_28178_28206[(1)] = (10));

} else {
var statearr_28179_28207 = state_28144__$1;
(statearr_28179_28207[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$mapcat_STAR__$_state_machine__24474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24474__auto____0 = (function (){
var statearr_28180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28180[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24474__auto__);

(statearr_28180[(1)] = (1));

return statearr_28180;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24474__auto____1 = (function (state_28144){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_28144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e28181){if((e28181 instanceof Object)){
var ex__24477__auto__ = e28181;
var statearr_28182_28208 = state_28144;
(statearr_28182_28208[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28209 = state_28144;
state_28144 = G__28209;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24474__auto__ = function(state_28144){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24474__auto____1.call(this,state_28144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_28183 = f__24641__auto__.call(null);
(statearr_28183[(6)] = c__24640__auto__);

return statearr_28183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));

return c__24640__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28211 = arguments.length;
switch (G__28211) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28214 = arguments.length;
switch (G__28214) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28217 = arguments.length;
switch (G__28217) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___28264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_28241){
var state_val_28242 = (state_28241[(1)]);
if((state_val_28242 === (7))){
var inst_28236 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28243_28265 = state_28241__$1;
(statearr_28243_28265[(2)] = inst_28236);

(statearr_28243_28265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (1))){
var inst_28218 = null;
var state_28241__$1 = (function (){var statearr_28244 = state_28241;
(statearr_28244[(7)] = inst_28218);

return statearr_28244;
})();
var statearr_28245_28266 = state_28241__$1;
(statearr_28245_28266[(2)] = null);

(statearr_28245_28266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (4))){
var inst_28221 = (state_28241[(8)]);
var inst_28221__$1 = (state_28241[(2)]);
var inst_28222 = (inst_28221__$1 == null);
var inst_28223 = cljs.core.not.call(null,inst_28222);
var state_28241__$1 = (function (){var statearr_28246 = state_28241;
(statearr_28246[(8)] = inst_28221__$1);

return statearr_28246;
})();
if(inst_28223){
var statearr_28247_28267 = state_28241__$1;
(statearr_28247_28267[(1)] = (5));

} else {
var statearr_28248_28268 = state_28241__$1;
(statearr_28248_28268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (6))){
var state_28241__$1 = state_28241;
var statearr_28249_28269 = state_28241__$1;
(statearr_28249_28269[(2)] = null);

(statearr_28249_28269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (3))){
var inst_28238 = (state_28241[(2)]);
var inst_28239 = cljs.core.async.close_BANG_.call(null,out);
var state_28241__$1 = (function (){var statearr_28250 = state_28241;
(statearr_28250[(9)] = inst_28238);

return statearr_28250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28241__$1,inst_28239);
} else {
if((state_val_28242 === (2))){
var state_28241__$1 = state_28241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28241__$1,(4),ch);
} else {
if((state_val_28242 === (11))){
var inst_28221 = (state_28241[(8)]);
var inst_28230 = (state_28241[(2)]);
var inst_28218 = inst_28221;
var state_28241__$1 = (function (){var statearr_28251 = state_28241;
(statearr_28251[(7)] = inst_28218);

(statearr_28251[(10)] = inst_28230);

return statearr_28251;
})();
var statearr_28252_28270 = state_28241__$1;
(statearr_28252_28270[(2)] = null);

(statearr_28252_28270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (9))){
var inst_28221 = (state_28241[(8)]);
var state_28241__$1 = state_28241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28241__$1,(11),out,inst_28221);
} else {
if((state_val_28242 === (5))){
var inst_28218 = (state_28241[(7)]);
var inst_28221 = (state_28241[(8)]);
var inst_28225 = cljs.core._EQ_.call(null,inst_28221,inst_28218);
var state_28241__$1 = state_28241;
if(inst_28225){
var statearr_28254_28271 = state_28241__$1;
(statearr_28254_28271[(1)] = (8));

} else {
var statearr_28255_28272 = state_28241__$1;
(statearr_28255_28272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (10))){
var inst_28233 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28256_28273 = state_28241__$1;
(statearr_28256_28273[(2)] = inst_28233);

(statearr_28256_28273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (8))){
var inst_28218 = (state_28241[(7)]);
var tmp28253 = inst_28218;
var inst_28218__$1 = tmp28253;
var state_28241__$1 = (function (){var statearr_28257 = state_28241;
(statearr_28257[(7)] = inst_28218__$1);

return statearr_28257;
})();
var statearr_28258_28274 = state_28241__$1;
(statearr_28258_28274[(2)] = null);

(statearr_28258_28274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_28259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28259[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_28259[(1)] = (1));

return statearr_28259;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_28241){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_28241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e28260){if((e28260 instanceof Object)){
var ex__24477__auto__ = e28260;
var statearr_28261_28275 = state_28241;
(statearr_28261_28275[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28276 = state_28241;
state_28241 = G__28276;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_28241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_28241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_28262 = f__24641__auto__.call(null);
(statearr_28262[(6)] = c__24640__auto___28264);

return statearr_28262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28278 = arguments.length;
switch (G__28278) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___28344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_28316){
var state_val_28317 = (state_28316[(1)]);
if((state_val_28317 === (7))){
var inst_28312 = (state_28316[(2)]);
var state_28316__$1 = state_28316;
var statearr_28318_28345 = state_28316__$1;
(statearr_28318_28345[(2)] = inst_28312);

(statearr_28318_28345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (1))){
var inst_28279 = (new Array(n));
var inst_28280 = inst_28279;
var inst_28281 = (0);
var state_28316__$1 = (function (){var statearr_28319 = state_28316;
(statearr_28319[(7)] = inst_28280);

(statearr_28319[(8)] = inst_28281);

return statearr_28319;
})();
var statearr_28320_28346 = state_28316__$1;
(statearr_28320_28346[(2)] = null);

(statearr_28320_28346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (4))){
var inst_28284 = (state_28316[(9)]);
var inst_28284__$1 = (state_28316[(2)]);
var inst_28285 = (inst_28284__$1 == null);
var inst_28286 = cljs.core.not.call(null,inst_28285);
var state_28316__$1 = (function (){var statearr_28321 = state_28316;
(statearr_28321[(9)] = inst_28284__$1);

return statearr_28321;
})();
if(inst_28286){
var statearr_28322_28347 = state_28316__$1;
(statearr_28322_28347[(1)] = (5));

} else {
var statearr_28323_28348 = state_28316__$1;
(statearr_28323_28348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (15))){
var inst_28306 = (state_28316[(2)]);
var state_28316__$1 = state_28316;
var statearr_28324_28349 = state_28316__$1;
(statearr_28324_28349[(2)] = inst_28306);

(statearr_28324_28349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (13))){
var state_28316__$1 = state_28316;
var statearr_28325_28350 = state_28316__$1;
(statearr_28325_28350[(2)] = null);

(statearr_28325_28350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (6))){
var inst_28281 = (state_28316[(8)]);
var inst_28302 = (inst_28281 > (0));
var state_28316__$1 = state_28316;
if(cljs.core.truth_(inst_28302)){
var statearr_28326_28351 = state_28316__$1;
(statearr_28326_28351[(1)] = (12));

} else {
var statearr_28327_28352 = state_28316__$1;
(statearr_28327_28352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (3))){
var inst_28314 = (state_28316[(2)]);
var state_28316__$1 = state_28316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28316__$1,inst_28314);
} else {
if((state_val_28317 === (12))){
var inst_28280 = (state_28316[(7)]);
var inst_28304 = cljs.core.vec.call(null,inst_28280);
var state_28316__$1 = state_28316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28316__$1,(15),out,inst_28304);
} else {
if((state_val_28317 === (2))){
var state_28316__$1 = state_28316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28316__$1,(4),ch);
} else {
if((state_val_28317 === (11))){
var inst_28296 = (state_28316[(2)]);
var inst_28297 = (new Array(n));
var inst_28280 = inst_28297;
var inst_28281 = (0);
var state_28316__$1 = (function (){var statearr_28328 = state_28316;
(statearr_28328[(7)] = inst_28280);

(statearr_28328[(10)] = inst_28296);

(statearr_28328[(8)] = inst_28281);

return statearr_28328;
})();
var statearr_28329_28353 = state_28316__$1;
(statearr_28329_28353[(2)] = null);

(statearr_28329_28353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (9))){
var inst_28280 = (state_28316[(7)]);
var inst_28294 = cljs.core.vec.call(null,inst_28280);
var state_28316__$1 = state_28316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28316__$1,(11),out,inst_28294);
} else {
if((state_val_28317 === (5))){
var inst_28280 = (state_28316[(7)]);
var inst_28289 = (state_28316[(11)]);
var inst_28284 = (state_28316[(9)]);
var inst_28281 = (state_28316[(8)]);
var inst_28288 = (inst_28280[inst_28281] = inst_28284);
var inst_28289__$1 = (inst_28281 + (1));
var inst_28290 = (inst_28289__$1 < n);
var state_28316__$1 = (function (){var statearr_28330 = state_28316;
(statearr_28330[(11)] = inst_28289__$1);

(statearr_28330[(12)] = inst_28288);

return statearr_28330;
})();
if(cljs.core.truth_(inst_28290)){
var statearr_28331_28354 = state_28316__$1;
(statearr_28331_28354[(1)] = (8));

} else {
var statearr_28332_28355 = state_28316__$1;
(statearr_28332_28355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (14))){
var inst_28309 = (state_28316[(2)]);
var inst_28310 = cljs.core.async.close_BANG_.call(null,out);
var state_28316__$1 = (function (){var statearr_28334 = state_28316;
(statearr_28334[(13)] = inst_28309);

return statearr_28334;
})();
var statearr_28335_28356 = state_28316__$1;
(statearr_28335_28356[(2)] = inst_28310);

(statearr_28335_28356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (10))){
var inst_28300 = (state_28316[(2)]);
var state_28316__$1 = state_28316;
var statearr_28336_28357 = state_28316__$1;
(statearr_28336_28357[(2)] = inst_28300);

(statearr_28336_28357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (8))){
var inst_28280 = (state_28316[(7)]);
var inst_28289 = (state_28316[(11)]);
var tmp28333 = inst_28280;
var inst_28280__$1 = tmp28333;
var inst_28281 = inst_28289;
var state_28316__$1 = (function (){var statearr_28337 = state_28316;
(statearr_28337[(7)] = inst_28280__$1);

(statearr_28337[(8)] = inst_28281);

return statearr_28337;
})();
var statearr_28338_28358 = state_28316__$1;
(statearr_28338_28358[(2)] = null);

(statearr_28338_28358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_28339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28339[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_28339[(1)] = (1));

return statearr_28339;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_28316){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_28316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e28340){if((e28340 instanceof Object)){
var ex__24477__auto__ = e28340;
var statearr_28341_28359 = state_28316;
(statearr_28341_28359[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28360 = state_28316;
state_28316 = G__28360;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_28316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_28316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_28342 = f__24641__auto__.call(null);
(statearr_28342[(6)] = c__24640__auto___28344);

return statearr_28342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28362 = arguments.length;
switch (G__28362) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___28432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24641__auto__ = (function (){var switch__24473__auto__ = (function (state_28404){
var state_val_28405 = (state_28404[(1)]);
if((state_val_28405 === (7))){
var inst_28400 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28406_28433 = state_28404__$1;
(statearr_28406_28433[(2)] = inst_28400);

(statearr_28406_28433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (1))){
var inst_28363 = [];
var inst_28364 = inst_28363;
var inst_28365 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28404__$1 = (function (){var statearr_28407 = state_28404;
(statearr_28407[(7)] = inst_28365);

(statearr_28407[(8)] = inst_28364);

return statearr_28407;
})();
var statearr_28408_28434 = state_28404__$1;
(statearr_28408_28434[(2)] = null);

(statearr_28408_28434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (4))){
var inst_28368 = (state_28404[(9)]);
var inst_28368__$1 = (state_28404[(2)]);
var inst_28369 = (inst_28368__$1 == null);
var inst_28370 = cljs.core.not.call(null,inst_28369);
var state_28404__$1 = (function (){var statearr_28409 = state_28404;
(statearr_28409[(9)] = inst_28368__$1);

return statearr_28409;
})();
if(inst_28370){
var statearr_28410_28435 = state_28404__$1;
(statearr_28410_28435[(1)] = (5));

} else {
var statearr_28411_28436 = state_28404__$1;
(statearr_28411_28436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (15))){
var inst_28394 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28412_28437 = state_28404__$1;
(statearr_28412_28437[(2)] = inst_28394);

(statearr_28412_28437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (13))){
var state_28404__$1 = state_28404;
var statearr_28413_28438 = state_28404__$1;
(statearr_28413_28438[(2)] = null);

(statearr_28413_28438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (6))){
var inst_28364 = (state_28404[(8)]);
var inst_28389 = inst_28364.length;
var inst_28390 = (inst_28389 > (0));
var state_28404__$1 = state_28404;
if(cljs.core.truth_(inst_28390)){
var statearr_28414_28439 = state_28404__$1;
(statearr_28414_28439[(1)] = (12));

} else {
var statearr_28415_28440 = state_28404__$1;
(statearr_28415_28440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (3))){
var inst_28402 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28404__$1,inst_28402);
} else {
if((state_val_28405 === (12))){
var inst_28364 = (state_28404[(8)]);
var inst_28392 = cljs.core.vec.call(null,inst_28364);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28404__$1,(15),out,inst_28392);
} else {
if((state_val_28405 === (2))){
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28404__$1,(4),ch);
} else {
if((state_val_28405 === (11))){
var inst_28372 = (state_28404[(10)]);
var inst_28368 = (state_28404[(9)]);
var inst_28382 = (state_28404[(2)]);
var inst_28383 = [];
var inst_28384 = inst_28383.push(inst_28368);
var inst_28364 = inst_28383;
var inst_28365 = inst_28372;
var state_28404__$1 = (function (){var statearr_28416 = state_28404;
(statearr_28416[(11)] = inst_28384);

(statearr_28416[(12)] = inst_28382);

(statearr_28416[(7)] = inst_28365);

(statearr_28416[(8)] = inst_28364);

return statearr_28416;
})();
var statearr_28417_28441 = state_28404__$1;
(statearr_28417_28441[(2)] = null);

(statearr_28417_28441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (9))){
var inst_28364 = (state_28404[(8)]);
var inst_28380 = cljs.core.vec.call(null,inst_28364);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28404__$1,(11),out,inst_28380);
} else {
if((state_val_28405 === (5))){
var inst_28372 = (state_28404[(10)]);
var inst_28365 = (state_28404[(7)]);
var inst_28368 = (state_28404[(9)]);
var inst_28372__$1 = f.call(null,inst_28368);
var inst_28373 = cljs.core._EQ_.call(null,inst_28372__$1,inst_28365);
var inst_28374 = cljs.core.keyword_identical_QMARK_.call(null,inst_28365,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28375 = ((inst_28373) || (inst_28374));
var state_28404__$1 = (function (){var statearr_28418 = state_28404;
(statearr_28418[(10)] = inst_28372__$1);

return statearr_28418;
})();
if(cljs.core.truth_(inst_28375)){
var statearr_28419_28442 = state_28404__$1;
(statearr_28419_28442[(1)] = (8));

} else {
var statearr_28420_28443 = state_28404__$1;
(statearr_28420_28443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (14))){
var inst_28397 = (state_28404[(2)]);
var inst_28398 = cljs.core.async.close_BANG_.call(null,out);
var state_28404__$1 = (function (){var statearr_28422 = state_28404;
(statearr_28422[(13)] = inst_28397);

return statearr_28422;
})();
var statearr_28423_28444 = state_28404__$1;
(statearr_28423_28444[(2)] = inst_28398);

(statearr_28423_28444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (10))){
var inst_28387 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28424_28445 = state_28404__$1;
(statearr_28424_28445[(2)] = inst_28387);

(statearr_28424_28445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (8))){
var inst_28372 = (state_28404[(10)]);
var inst_28368 = (state_28404[(9)]);
var inst_28364 = (state_28404[(8)]);
var inst_28377 = inst_28364.push(inst_28368);
var tmp28421 = inst_28364;
var inst_28364__$1 = tmp28421;
var inst_28365 = inst_28372;
var state_28404__$1 = (function (){var statearr_28425 = state_28404;
(statearr_28425[(7)] = inst_28365);

(statearr_28425[(14)] = inst_28377);

(statearr_28425[(8)] = inst_28364__$1);

return statearr_28425;
})();
var statearr_28426_28446 = state_28404__$1;
(statearr_28426_28446[(2)] = null);

(statearr_28426_28446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__24474__auto__ = null;
var cljs$core$async$state_machine__24474__auto____0 = (function (){
var statearr_28427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28427[(0)] = cljs$core$async$state_machine__24474__auto__);

(statearr_28427[(1)] = (1));

return statearr_28427;
});
var cljs$core$async$state_machine__24474__auto____1 = (function (state_28404){
while(true){
var ret_value__24475__auto__ = (function (){try{while(true){
var result__24476__auto__ = switch__24473__auto__.call(null,state_28404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24476__auto__;
}
break;
}
}catch (e28428){if((e28428 instanceof Object)){
var ex__24477__auto__ = e28428;
var statearr_28429_28447 = state_28404;
(statearr_28429_28447[(5)] = ex__24477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28448 = state_28404;
state_28404 = G__28448;
continue;
} else {
return ret_value__24475__auto__;
}
break;
}
});
cljs$core$async$state_machine__24474__auto__ = function(state_28404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24474__auto____1.call(this,state_28404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24474__auto____0;
cljs$core$async$state_machine__24474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24474__auto____1;
return cljs$core$async$state_machine__24474__auto__;
})()
})();
var state__24642__auto__ = (function (){var statearr_28430 = f__24641__auto__.call(null);
(statearr_28430[(6)] = c__24640__auto___28432);

return statearr_28430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
