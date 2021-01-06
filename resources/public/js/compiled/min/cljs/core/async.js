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
var G__26577 = arguments.length;
switch (G__26577) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26578 = (function (f,blockable,meta26579){
this.f = f;
this.blockable = blockable;
this.meta26579 = meta26579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26580,meta26579__$1){
var self__ = this;
var _26580__$1 = this;
return (new cljs.core.async.t_cljs$core$async26578(self__.f,self__.blockable,meta26579__$1));
}));

(cljs.core.async.t_cljs$core$async26578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26580){
var self__ = this;
var _26580__$1 = this;
return self__.meta26579;
}));

(cljs.core.async.t_cljs$core$async26578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26579","meta26579",-929217992,null)], null);
}));

(cljs.core.async.t_cljs$core$async26578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26578");

(cljs.core.async.t_cljs$core$async26578.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26578.
 */
cljs.core.async.__GT_t_cljs$core$async26578 = (function cljs$core$async$__GT_t_cljs$core$async26578(f__$1,blockable__$1,meta26579){
return (new cljs.core.async.t_cljs$core$async26578(f__$1,blockable__$1,meta26579));
});

}

return (new cljs.core.async.t_cljs$core$async26578(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26584 = arguments.length;
switch (G__26584) {
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
var G__26587 = arguments.length;
switch (G__26587) {
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
var G__26590 = arguments.length;
switch (G__26590) {
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
var val_26592 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26592);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26592);
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
var G__26594 = arguments.length;
switch (G__26594) {
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
var n__4613__auto___26596 = n;
var x_26597 = (0);
while(true){
if((x_26597 < n__4613__auto___26596)){
(a[x_26597] = x_26597);

var G__26598 = (x_26597 + (1));
x_26597 = G__26598;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26599 = (function (flag,meta26600){
this.flag = flag;
this.meta26600 = meta26600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26601,meta26600__$1){
var self__ = this;
var _26601__$1 = this;
return (new cljs.core.async.t_cljs$core$async26599(self__.flag,meta26600__$1));
}));

(cljs.core.async.t_cljs$core$async26599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26601){
var self__ = this;
var _26601__$1 = this;
return self__.meta26600;
}));

(cljs.core.async.t_cljs$core$async26599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26600","meta26600",1392224148,null)], null);
}));

(cljs.core.async.t_cljs$core$async26599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26599");

(cljs.core.async.t_cljs$core$async26599.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26599.
 */
cljs.core.async.__GT_t_cljs$core$async26599 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26599(flag__$1,meta26600){
return (new cljs.core.async.t_cljs$core$async26599(flag__$1,meta26600));
});

}

return (new cljs.core.async.t_cljs$core$async26599(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26602 = (function (flag,cb,meta26603){
this.flag = flag;
this.cb = cb;
this.meta26603 = meta26603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26604,meta26603__$1){
var self__ = this;
var _26604__$1 = this;
return (new cljs.core.async.t_cljs$core$async26602(self__.flag,self__.cb,meta26603__$1));
}));

(cljs.core.async.t_cljs$core$async26602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26604){
var self__ = this;
var _26604__$1 = this;
return self__.meta26603;
}));

(cljs.core.async.t_cljs$core$async26602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26603","meta26603",-1418350266,null)], null);
}));

(cljs.core.async.t_cljs$core$async26602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26602");

(cljs.core.async.t_cljs$core$async26602.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26602.
 */
cljs.core.async.__GT_t_cljs$core$async26602 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26602(flag__$1,cb__$1,meta26603){
return (new cljs.core.async.t_cljs$core$async26602(flag__$1,cb__$1,meta26603));
});

}

return (new cljs.core.async.t_cljs$core$async26602(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26605_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26605_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26606_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26606_SHARP_,port], null));
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
var G__26607 = (i + (1));
i = G__26607;
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
var len__4736__auto___26613 = arguments.length;
var i__4737__auto___26614 = (0);
while(true){
if((i__4737__auto___26614 < len__4736__auto___26613)){
args__4742__auto__.push((arguments[i__4737__auto___26614]));

var G__26615 = (i__4737__auto___26614 + (1));
i__4737__auto___26614 = G__26615;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26610){
var map__26611 = p__26610;
var map__26611__$1 = (((((!((map__26611 == null))))?(((((map__26611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26611):map__26611);
var opts = map__26611__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26608){
var G__26609 = cljs.core.first.call(null,seq26608);
var seq26608__$1 = cljs.core.next.call(null,seq26608);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26609,seq26608__$1);
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
var G__26617 = arguments.length;
switch (G__26617) {
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
var c__24641__auto___26663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_26641){
var state_val_26642 = (state_26641[(1)]);
if((state_val_26642 === (7))){
var inst_26637 = (state_26641[(2)]);
var state_26641__$1 = state_26641;
var statearr_26643_26664 = state_26641__$1;
(statearr_26643_26664[(2)] = inst_26637);

(statearr_26643_26664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (1))){
var state_26641__$1 = state_26641;
var statearr_26644_26665 = state_26641__$1;
(statearr_26644_26665[(2)] = null);

(statearr_26644_26665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (4))){
var inst_26620 = (state_26641[(7)]);
var inst_26620__$1 = (state_26641[(2)]);
var inst_26621 = (inst_26620__$1 == null);
var state_26641__$1 = (function (){var statearr_26645 = state_26641;
(statearr_26645[(7)] = inst_26620__$1);

return statearr_26645;
})();
if(cljs.core.truth_(inst_26621)){
var statearr_26646_26666 = state_26641__$1;
(statearr_26646_26666[(1)] = (5));

} else {
var statearr_26647_26667 = state_26641__$1;
(statearr_26647_26667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (13))){
var state_26641__$1 = state_26641;
var statearr_26648_26668 = state_26641__$1;
(statearr_26648_26668[(2)] = null);

(statearr_26648_26668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (6))){
var inst_26620 = (state_26641[(7)]);
var state_26641__$1 = state_26641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26641__$1,(11),to,inst_26620);
} else {
if((state_val_26642 === (3))){
var inst_26639 = (state_26641[(2)]);
var state_26641__$1 = state_26641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26641__$1,inst_26639);
} else {
if((state_val_26642 === (12))){
var state_26641__$1 = state_26641;
var statearr_26649_26669 = state_26641__$1;
(statearr_26649_26669[(2)] = null);

(statearr_26649_26669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (2))){
var state_26641__$1 = state_26641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26641__$1,(4),from);
} else {
if((state_val_26642 === (11))){
var inst_26630 = (state_26641[(2)]);
var state_26641__$1 = state_26641;
if(cljs.core.truth_(inst_26630)){
var statearr_26650_26670 = state_26641__$1;
(statearr_26650_26670[(1)] = (12));

} else {
var statearr_26651_26671 = state_26641__$1;
(statearr_26651_26671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (9))){
var state_26641__$1 = state_26641;
var statearr_26652_26672 = state_26641__$1;
(statearr_26652_26672[(2)] = null);

(statearr_26652_26672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (5))){
var state_26641__$1 = state_26641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26653_26673 = state_26641__$1;
(statearr_26653_26673[(1)] = (8));

} else {
var statearr_26654_26674 = state_26641__$1;
(statearr_26654_26674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (14))){
var inst_26635 = (state_26641[(2)]);
var state_26641__$1 = state_26641;
var statearr_26655_26675 = state_26641__$1;
(statearr_26655_26675[(2)] = inst_26635);

(statearr_26655_26675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (10))){
var inst_26627 = (state_26641[(2)]);
var state_26641__$1 = state_26641;
var statearr_26656_26676 = state_26641__$1;
(statearr_26656_26676[(2)] = inst_26627);

(statearr_26656_26676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (8))){
var inst_26624 = cljs.core.async.close_BANG_.call(null,to);
var state_26641__$1 = state_26641;
var statearr_26657_26677 = state_26641__$1;
(statearr_26657_26677[(2)] = inst_26624);

(statearr_26657_26677[(1)] = (10));


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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_26658 = [null,null,null,null,null,null,null,null];
(statearr_26658[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_26658[(1)] = (1));

return statearr_26658;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_26641){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_26641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e26659){if((e26659 instanceof Object)){
var ex__24478__auto__ = e26659;
var statearr_26660_26678 = state_26641;
(statearr_26660_26678[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26679 = state_26641;
state_26641 = G__26679;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_26641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_26641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_26661 = f__24642__auto__.call(null);
(statearr_26661[(6)] = c__24641__auto___26663);

return statearr_26661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
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
var process = (function (p__26680){
var vec__26681 = p__26680;
var v = cljs.core.nth.call(null,vec__26681,(0),null);
var p = cljs.core.nth.call(null,vec__26681,(1),null);
var job = vec__26681;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24641__auto___26852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_26688){
var state_val_26689 = (state_26688[(1)]);
if((state_val_26689 === (1))){
var state_26688__$1 = state_26688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26688__$1,(2),res,v);
} else {
if((state_val_26689 === (2))){
var inst_26685 = (state_26688[(2)]);
var inst_26686 = cljs.core.async.close_BANG_.call(null,res);
var state_26688__$1 = (function (){var statearr_26690 = state_26688;
(statearr_26690[(7)] = inst_26685);

return statearr_26690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26688__$1,inst_26686);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0 = (function (){
var statearr_26691 = [null,null,null,null,null,null,null,null];
(statearr_26691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__);

(statearr_26691[(1)] = (1));

return statearr_26691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1 = (function (state_26688){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_26688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e26692){if((e26692 instanceof Object)){
var ex__24478__auto__ = e26692;
var statearr_26693_26853 = state_26688;
(statearr_26693_26853[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26854 = state_26688;
state_26688 = G__26854;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = function(state_26688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1.call(this,state_26688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_26694 = f__24642__auto__.call(null);
(statearr_26694[(6)] = c__24641__auto___26852);

return statearr_26694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26695){
var vec__26696 = p__26695;
var v = cljs.core.nth.call(null,vec__26696,(0),null);
var p = cljs.core.nth.call(null,vec__26696,(1),null);
var job = vec__26696;
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
var n__4613__auto___26855 = n;
var __26856 = (0);
while(true){
if((__26856 < n__4613__auto___26855)){
var G__26699_26857 = type;
var G__26699_26858__$1 = (((G__26699_26857 instanceof cljs.core.Keyword))?G__26699_26857.fqn:null);
switch (G__26699_26858__$1) {
case "compute":
var c__24641__auto___26860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26856,c__24641__auto___26860,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async){
return (function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = ((function (__26856,c__24641__auto___26860,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async){
return (function (state_26712){
var state_val_26713 = (state_26712[(1)]);
if((state_val_26713 === (1))){
var state_26712__$1 = state_26712;
var statearr_26714_26861 = state_26712__$1;
(statearr_26714_26861[(2)] = null);

(statearr_26714_26861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (2))){
var state_26712__$1 = state_26712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26712__$1,(4),jobs);
} else {
if((state_val_26713 === (3))){
var inst_26710 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26712__$1,inst_26710);
} else {
if((state_val_26713 === (4))){
var inst_26702 = (state_26712[(2)]);
var inst_26703 = process.call(null,inst_26702);
var state_26712__$1 = state_26712;
if(cljs.core.truth_(inst_26703)){
var statearr_26715_26862 = state_26712__$1;
(statearr_26715_26862[(1)] = (5));

} else {
var statearr_26716_26863 = state_26712__$1;
(statearr_26716_26863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (5))){
var state_26712__$1 = state_26712;
var statearr_26717_26864 = state_26712__$1;
(statearr_26717_26864[(2)] = null);

(statearr_26717_26864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (6))){
var state_26712__$1 = state_26712;
var statearr_26718_26865 = state_26712__$1;
(statearr_26718_26865[(2)] = null);

(statearr_26718_26865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (7))){
var inst_26708 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26719_26866 = state_26712__$1;
(statearr_26719_26866[(2)] = inst_26708);

(statearr_26719_26866[(1)] = (3));


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
});})(__26856,c__24641__auto___26860,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async))
;
return ((function (__26856,switch__24474__auto__,c__24641__auto___26860,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0 = (function (){
var statearr_26720 = [null,null,null,null,null,null,null];
(statearr_26720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__);

(statearr_26720[(1)] = (1));

return statearr_26720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1 = (function (state_26712){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_26712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e26721){if((e26721 instanceof Object)){
var ex__24478__auto__ = e26721;
var statearr_26722_26867 = state_26712;
(statearr_26722_26867[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26868 = state_26712;
state_26712 = G__26868;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = function(state_26712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1.call(this,state_26712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__;
})()
;})(__26856,switch__24474__auto__,c__24641__auto___26860,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async))
})();
var state__24643__auto__ = (function (){var statearr_26723 = f__24642__auto__.call(null);
(statearr_26723[(6)] = c__24641__auto___26860);

return statearr_26723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
});})(__26856,c__24641__auto___26860,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async))
);


break;
case "async":
var c__24641__auto___26869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26856,c__24641__auto___26869,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async){
return (function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = ((function (__26856,c__24641__auto___26869,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async){
return (function (state_26736){
var state_val_26737 = (state_26736[(1)]);
if((state_val_26737 === (1))){
var state_26736__$1 = state_26736;
var statearr_26738_26870 = state_26736__$1;
(statearr_26738_26870[(2)] = null);

(statearr_26738_26870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (2))){
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26736__$1,(4),jobs);
} else {
if((state_val_26737 === (3))){
var inst_26734 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26736__$1,inst_26734);
} else {
if((state_val_26737 === (4))){
var inst_26726 = (state_26736[(2)]);
var inst_26727 = async.call(null,inst_26726);
var state_26736__$1 = state_26736;
if(cljs.core.truth_(inst_26727)){
var statearr_26739_26871 = state_26736__$1;
(statearr_26739_26871[(1)] = (5));

} else {
var statearr_26740_26872 = state_26736__$1;
(statearr_26740_26872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (5))){
var state_26736__$1 = state_26736;
var statearr_26741_26873 = state_26736__$1;
(statearr_26741_26873[(2)] = null);

(statearr_26741_26873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (6))){
var state_26736__$1 = state_26736;
var statearr_26742_26874 = state_26736__$1;
(statearr_26742_26874[(2)] = null);

(statearr_26742_26874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (7))){
var inst_26732 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
var statearr_26743_26875 = state_26736__$1;
(statearr_26743_26875[(2)] = inst_26732);

(statearr_26743_26875[(1)] = (3));


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
});})(__26856,c__24641__auto___26869,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async))
;
return ((function (__26856,switch__24474__auto__,c__24641__auto___26869,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0 = (function (){
var statearr_26744 = [null,null,null,null,null,null,null];
(statearr_26744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__);

(statearr_26744[(1)] = (1));

return statearr_26744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1 = (function (state_26736){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_26736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e26745){if((e26745 instanceof Object)){
var ex__24478__auto__ = e26745;
var statearr_26746_26876 = state_26736;
(statearr_26746_26876[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26877 = state_26736;
state_26736 = G__26877;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = function(state_26736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1.call(this,state_26736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__;
})()
;})(__26856,switch__24474__auto__,c__24641__auto___26869,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async))
})();
var state__24643__auto__ = (function (){var statearr_26747 = f__24642__auto__.call(null);
(statearr_26747[(6)] = c__24641__auto___26869);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
});})(__26856,c__24641__auto___26869,G__26699_26857,G__26699_26858__$1,n__4613__auto___26855,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26699_26858__$1)].join('')));

}

var G__26878 = (__26856 + (1));
__26856 = G__26878;
continue;
} else {
}
break;
}

var c__24641__auto___26879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_26769){
var state_val_26770 = (state_26769[(1)]);
if((state_val_26770 === (7))){
var inst_26765 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26771_26880 = state_26769__$1;
(statearr_26771_26880[(2)] = inst_26765);

(statearr_26771_26880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (1))){
var state_26769__$1 = state_26769;
var statearr_26772_26881 = state_26769__$1;
(statearr_26772_26881[(2)] = null);

(statearr_26772_26881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (4))){
var inst_26750 = (state_26769[(7)]);
var inst_26750__$1 = (state_26769[(2)]);
var inst_26751 = (inst_26750__$1 == null);
var state_26769__$1 = (function (){var statearr_26773 = state_26769;
(statearr_26773[(7)] = inst_26750__$1);

return statearr_26773;
})();
if(cljs.core.truth_(inst_26751)){
var statearr_26774_26882 = state_26769__$1;
(statearr_26774_26882[(1)] = (5));

} else {
var statearr_26775_26883 = state_26769__$1;
(statearr_26775_26883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (6))){
var inst_26750 = (state_26769[(7)]);
var inst_26755 = (state_26769[(8)]);
var inst_26755__$1 = cljs.core.async.chan.call(null,(1));
var inst_26756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26757 = [inst_26750,inst_26755__$1];
var inst_26758 = (new cljs.core.PersistentVector(null,2,(5),inst_26756,inst_26757,null));
var state_26769__$1 = (function (){var statearr_26776 = state_26769;
(statearr_26776[(8)] = inst_26755__$1);

return statearr_26776;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26769__$1,(8),jobs,inst_26758);
} else {
if((state_val_26770 === (3))){
var inst_26767 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26769__$1,inst_26767);
} else {
if((state_val_26770 === (2))){
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26769__$1,(4),from);
} else {
if((state_val_26770 === (9))){
var inst_26762 = (state_26769[(2)]);
var state_26769__$1 = (function (){var statearr_26777 = state_26769;
(statearr_26777[(9)] = inst_26762);

return statearr_26777;
})();
var statearr_26778_26884 = state_26769__$1;
(statearr_26778_26884[(2)] = null);

(statearr_26778_26884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (5))){
var inst_26753 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26769__$1 = state_26769;
var statearr_26779_26885 = state_26769__$1;
(statearr_26779_26885[(2)] = inst_26753);

(statearr_26779_26885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (8))){
var inst_26755 = (state_26769[(8)]);
var inst_26760 = (state_26769[(2)]);
var state_26769__$1 = (function (){var statearr_26780 = state_26769;
(statearr_26780[(10)] = inst_26760);

return statearr_26780;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26769__$1,(9),results,inst_26755);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0 = (function (){
var statearr_26781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__);

(statearr_26781[(1)] = (1));

return statearr_26781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1 = (function (state_26769){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_26769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e26782){if((e26782 instanceof Object)){
var ex__24478__auto__ = e26782;
var statearr_26783_26886 = state_26769;
(statearr_26783_26886[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26887 = state_26769;
state_26769 = G__26887;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = function(state_26769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1.call(this,state_26769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_26784 = f__24642__auto__.call(null);
(statearr_26784[(6)] = c__24641__auto___26879);

return statearr_26784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));


var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_26822){
var state_val_26823 = (state_26822[(1)]);
if((state_val_26823 === (7))){
var inst_26818 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
var statearr_26824_26888 = state_26822__$1;
(statearr_26824_26888[(2)] = inst_26818);

(statearr_26824_26888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (20))){
var state_26822__$1 = state_26822;
var statearr_26825_26889 = state_26822__$1;
(statearr_26825_26889[(2)] = null);

(statearr_26825_26889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (1))){
var state_26822__$1 = state_26822;
var statearr_26826_26890 = state_26822__$1;
(statearr_26826_26890[(2)] = null);

(statearr_26826_26890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (4))){
var inst_26787 = (state_26822[(7)]);
var inst_26787__$1 = (state_26822[(2)]);
var inst_26788 = (inst_26787__$1 == null);
var state_26822__$1 = (function (){var statearr_26827 = state_26822;
(statearr_26827[(7)] = inst_26787__$1);

return statearr_26827;
})();
if(cljs.core.truth_(inst_26788)){
var statearr_26828_26891 = state_26822__$1;
(statearr_26828_26891[(1)] = (5));

} else {
var statearr_26829_26892 = state_26822__$1;
(statearr_26829_26892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (15))){
var inst_26800 = (state_26822[(8)]);
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26822__$1,(18),to,inst_26800);
} else {
if((state_val_26823 === (21))){
var inst_26813 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
var statearr_26830_26893 = state_26822__$1;
(statearr_26830_26893[(2)] = inst_26813);

(statearr_26830_26893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (13))){
var inst_26815 = (state_26822[(2)]);
var state_26822__$1 = (function (){var statearr_26831 = state_26822;
(statearr_26831[(9)] = inst_26815);

return statearr_26831;
})();
var statearr_26832_26894 = state_26822__$1;
(statearr_26832_26894[(2)] = null);

(statearr_26832_26894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (6))){
var inst_26787 = (state_26822[(7)]);
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26822__$1,(11),inst_26787);
} else {
if((state_val_26823 === (17))){
var inst_26808 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
if(cljs.core.truth_(inst_26808)){
var statearr_26833_26895 = state_26822__$1;
(statearr_26833_26895[(1)] = (19));

} else {
var statearr_26834_26896 = state_26822__$1;
(statearr_26834_26896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (3))){
var inst_26820 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26822__$1,inst_26820);
} else {
if((state_val_26823 === (12))){
var inst_26797 = (state_26822[(10)]);
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26822__$1,(14),inst_26797);
} else {
if((state_val_26823 === (2))){
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26822__$1,(4),results);
} else {
if((state_val_26823 === (19))){
var state_26822__$1 = state_26822;
var statearr_26835_26897 = state_26822__$1;
(statearr_26835_26897[(2)] = null);

(statearr_26835_26897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (11))){
var inst_26797 = (state_26822[(2)]);
var state_26822__$1 = (function (){var statearr_26836 = state_26822;
(statearr_26836[(10)] = inst_26797);

return statearr_26836;
})();
var statearr_26837_26898 = state_26822__$1;
(statearr_26837_26898[(2)] = null);

(statearr_26837_26898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (9))){
var state_26822__$1 = state_26822;
var statearr_26838_26899 = state_26822__$1;
(statearr_26838_26899[(2)] = null);

(statearr_26838_26899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (5))){
var state_26822__$1 = state_26822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26839_26900 = state_26822__$1;
(statearr_26839_26900[(1)] = (8));

} else {
var statearr_26840_26901 = state_26822__$1;
(statearr_26840_26901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (14))){
var inst_26800 = (state_26822[(8)]);
var inst_26800__$1 = (state_26822[(2)]);
var inst_26801 = (inst_26800__$1 == null);
var inst_26802 = cljs.core.not.call(null,inst_26801);
var state_26822__$1 = (function (){var statearr_26841 = state_26822;
(statearr_26841[(8)] = inst_26800__$1);

return statearr_26841;
})();
if(inst_26802){
var statearr_26842_26902 = state_26822__$1;
(statearr_26842_26902[(1)] = (15));

} else {
var statearr_26843_26903 = state_26822__$1;
(statearr_26843_26903[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (16))){
var state_26822__$1 = state_26822;
var statearr_26844_26904 = state_26822__$1;
(statearr_26844_26904[(2)] = false);

(statearr_26844_26904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (10))){
var inst_26794 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
var statearr_26845_26905 = state_26822__$1;
(statearr_26845_26905[(2)] = inst_26794);

(statearr_26845_26905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (18))){
var inst_26805 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
var statearr_26846_26906 = state_26822__$1;
(statearr_26846_26906[(2)] = inst_26805);

(statearr_26846_26906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (8))){
var inst_26791 = cljs.core.async.close_BANG_.call(null,to);
var state_26822__$1 = state_26822;
var statearr_26847_26907 = state_26822__$1;
(statearr_26847_26907[(2)] = inst_26791);

(statearr_26847_26907[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0 = (function (){
var statearr_26848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__);

(statearr_26848[(1)] = (1));

return statearr_26848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1 = (function (state_26822){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_26822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e26849){if((e26849 instanceof Object)){
var ex__24478__auto__ = e26849;
var statearr_26850_26908 = state_26822;
(statearr_26850_26908[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26909 = state_26822;
state_26822 = G__26909;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__ = function(state_26822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1.call(this,state_26822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_26851 = f__24642__auto__.call(null);
(statearr_26851[(6)] = c__24641__auto__);

return statearr_26851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
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
var G__26911 = arguments.length;
switch (G__26911) {
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
var G__26914 = arguments.length;
switch (G__26914) {
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
var G__26917 = arguments.length;
switch (G__26917) {
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
var c__24641__auto___26966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_26943){
var state_val_26944 = (state_26943[(1)]);
if((state_val_26944 === (7))){
var inst_26939 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26945_26967 = state_26943__$1;
(statearr_26945_26967[(2)] = inst_26939);

(statearr_26945_26967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (1))){
var state_26943__$1 = state_26943;
var statearr_26946_26968 = state_26943__$1;
(statearr_26946_26968[(2)] = null);

(statearr_26946_26968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (4))){
var inst_26920 = (state_26943[(7)]);
var inst_26920__$1 = (state_26943[(2)]);
var inst_26921 = (inst_26920__$1 == null);
var state_26943__$1 = (function (){var statearr_26947 = state_26943;
(statearr_26947[(7)] = inst_26920__$1);

return statearr_26947;
})();
if(cljs.core.truth_(inst_26921)){
var statearr_26948_26969 = state_26943__$1;
(statearr_26948_26969[(1)] = (5));

} else {
var statearr_26949_26970 = state_26943__$1;
(statearr_26949_26970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (13))){
var state_26943__$1 = state_26943;
var statearr_26950_26971 = state_26943__$1;
(statearr_26950_26971[(2)] = null);

(statearr_26950_26971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (6))){
var inst_26920 = (state_26943[(7)]);
var inst_26926 = p.call(null,inst_26920);
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26926)){
var statearr_26951_26972 = state_26943__$1;
(statearr_26951_26972[(1)] = (9));

} else {
var statearr_26952_26973 = state_26943__$1;
(statearr_26952_26973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (3))){
var inst_26941 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26943__$1,inst_26941);
} else {
if((state_val_26944 === (12))){
var state_26943__$1 = state_26943;
var statearr_26953_26974 = state_26943__$1;
(statearr_26953_26974[(2)] = null);

(statearr_26953_26974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (2))){
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26943__$1,(4),ch);
} else {
if((state_val_26944 === (11))){
var inst_26920 = (state_26943[(7)]);
var inst_26930 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26943__$1,(8),inst_26930,inst_26920);
} else {
if((state_val_26944 === (9))){
var state_26943__$1 = state_26943;
var statearr_26954_26975 = state_26943__$1;
(statearr_26954_26975[(2)] = tc);

(statearr_26954_26975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (5))){
var inst_26923 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26924 = cljs.core.async.close_BANG_.call(null,fc);
var state_26943__$1 = (function (){var statearr_26955 = state_26943;
(statearr_26955[(8)] = inst_26923);

return statearr_26955;
})();
var statearr_26956_26976 = state_26943__$1;
(statearr_26956_26976[(2)] = inst_26924);

(statearr_26956_26976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (14))){
var inst_26937 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26957_26977 = state_26943__$1;
(statearr_26957_26977[(2)] = inst_26937);

(statearr_26957_26977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (10))){
var state_26943__$1 = state_26943;
var statearr_26958_26978 = state_26943__$1;
(statearr_26958_26978[(2)] = fc);

(statearr_26958_26978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (8))){
var inst_26932 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26932)){
var statearr_26959_26979 = state_26943__$1;
(statearr_26959_26979[(1)] = (12));

} else {
var statearr_26960_26980 = state_26943__$1;
(statearr_26960_26980[(1)] = (13));

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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_26961 = [null,null,null,null,null,null,null,null,null];
(statearr_26961[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_26961[(1)] = (1));

return statearr_26961;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_26943){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_26943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e26962){if((e26962 instanceof Object)){
var ex__24478__auto__ = e26962;
var statearr_26963_26981 = state_26943;
(statearr_26963_26981[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26982 = state_26943;
state_26943 = G__26982;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_26943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_26943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_26964 = f__24642__auto__.call(null);
(statearr_26964[(6)] = c__24641__auto___26966);

return statearr_26964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
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
var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27003){
var state_val_27004 = (state_27003[(1)]);
if((state_val_27004 === (7))){
var inst_26999 = (state_27003[(2)]);
var state_27003__$1 = state_27003;
var statearr_27005_27023 = state_27003__$1;
(statearr_27005_27023[(2)] = inst_26999);

(statearr_27005_27023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27004 === (1))){
var inst_26983 = init;
var state_27003__$1 = (function (){var statearr_27006 = state_27003;
(statearr_27006[(7)] = inst_26983);

return statearr_27006;
})();
var statearr_27007_27024 = state_27003__$1;
(statearr_27007_27024[(2)] = null);

(statearr_27007_27024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27004 === (4))){
var inst_26986 = (state_27003[(8)]);
var inst_26986__$1 = (state_27003[(2)]);
var inst_26987 = (inst_26986__$1 == null);
var state_27003__$1 = (function (){var statearr_27008 = state_27003;
(statearr_27008[(8)] = inst_26986__$1);

return statearr_27008;
})();
if(cljs.core.truth_(inst_26987)){
var statearr_27009_27025 = state_27003__$1;
(statearr_27009_27025[(1)] = (5));

} else {
var statearr_27010_27026 = state_27003__$1;
(statearr_27010_27026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27004 === (6))){
var inst_26983 = (state_27003[(7)]);
var inst_26990 = (state_27003[(9)]);
var inst_26986 = (state_27003[(8)]);
var inst_26990__$1 = f.call(null,inst_26983,inst_26986);
var inst_26991 = cljs.core.reduced_QMARK_.call(null,inst_26990__$1);
var state_27003__$1 = (function (){var statearr_27011 = state_27003;
(statearr_27011[(9)] = inst_26990__$1);

return statearr_27011;
})();
if(inst_26991){
var statearr_27012_27027 = state_27003__$1;
(statearr_27012_27027[(1)] = (8));

} else {
var statearr_27013_27028 = state_27003__$1;
(statearr_27013_27028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27004 === (3))){
var inst_27001 = (state_27003[(2)]);
var state_27003__$1 = state_27003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27003__$1,inst_27001);
} else {
if((state_val_27004 === (2))){
var state_27003__$1 = state_27003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27003__$1,(4),ch);
} else {
if((state_val_27004 === (9))){
var inst_26990 = (state_27003[(9)]);
var inst_26983 = inst_26990;
var state_27003__$1 = (function (){var statearr_27014 = state_27003;
(statearr_27014[(7)] = inst_26983);

return statearr_27014;
})();
var statearr_27015_27029 = state_27003__$1;
(statearr_27015_27029[(2)] = null);

(statearr_27015_27029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27004 === (5))){
var inst_26983 = (state_27003[(7)]);
var state_27003__$1 = state_27003;
var statearr_27016_27030 = state_27003__$1;
(statearr_27016_27030[(2)] = inst_26983);

(statearr_27016_27030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27004 === (10))){
var inst_26997 = (state_27003[(2)]);
var state_27003__$1 = state_27003;
var statearr_27017_27031 = state_27003__$1;
(statearr_27017_27031[(2)] = inst_26997);

(statearr_27017_27031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27004 === (8))){
var inst_26990 = (state_27003[(9)]);
var inst_26993 = cljs.core.deref.call(null,inst_26990);
var state_27003__$1 = state_27003;
var statearr_27018_27032 = state_27003__$1;
(statearr_27018_27032[(2)] = inst_26993);

(statearr_27018_27032[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__24475__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24475__auto____0 = (function (){
var statearr_27019 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27019[(0)] = cljs$core$async$reduce_$_state_machine__24475__auto__);

(statearr_27019[(1)] = (1));

return statearr_27019;
});
var cljs$core$async$reduce_$_state_machine__24475__auto____1 = (function (state_27003){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27020){if((e27020 instanceof Object)){
var ex__24478__auto__ = e27020;
var statearr_27021_27033 = state_27003;
(statearr_27021_27033[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27034 = state_27003;
state_27003 = G__27034;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24475__auto__ = function(state_27003){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24475__auto____1.call(this,state_27003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24475__auto____0;
cljs$core$async$reduce_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24475__auto____1;
return cljs$core$async$reduce_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27022 = f__24642__auto__.call(null);
(statearr_27022[(6)] = c__24641__auto__);

return statearr_27022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27040){
var state_val_27041 = (state_27040[(1)]);
if((state_val_27041 === (1))){
var inst_27035 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27040__$1 = state_27040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27040__$1,(2),inst_27035);
} else {
if((state_val_27041 === (2))){
var inst_27037 = (state_27040[(2)]);
var inst_27038 = f__$1.call(null,inst_27037);
var state_27040__$1 = state_27040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27040__$1,inst_27038);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24475__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24475__auto____0 = (function (){
var statearr_27042 = [null,null,null,null,null,null,null];
(statearr_27042[(0)] = cljs$core$async$transduce_$_state_machine__24475__auto__);

(statearr_27042[(1)] = (1));

return statearr_27042;
});
var cljs$core$async$transduce_$_state_machine__24475__auto____1 = (function (state_27040){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27043){if((e27043 instanceof Object)){
var ex__24478__auto__ = e27043;
var statearr_27044_27046 = state_27040;
(statearr_27044_27046[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27047 = state_27040;
state_27040 = G__27047;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24475__auto__ = function(state_27040){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24475__auto____1.call(this,state_27040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24475__auto____0;
cljs$core$async$transduce_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24475__auto____1;
return cljs$core$async$transduce_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27045 = f__24642__auto__.call(null);
(statearr_27045[(6)] = c__24641__auto__);

return statearr_27045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
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
var G__27049 = arguments.length;
switch (G__27049) {
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
var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27074){
var state_val_27075 = (state_27074[(1)]);
if((state_val_27075 === (7))){
var inst_27056 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
var statearr_27076_27097 = state_27074__$1;
(statearr_27076_27097[(2)] = inst_27056);

(statearr_27076_27097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (1))){
var inst_27050 = cljs.core.seq.call(null,coll);
var inst_27051 = inst_27050;
var state_27074__$1 = (function (){var statearr_27077 = state_27074;
(statearr_27077[(7)] = inst_27051);

return statearr_27077;
})();
var statearr_27078_27098 = state_27074__$1;
(statearr_27078_27098[(2)] = null);

(statearr_27078_27098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (4))){
var inst_27051 = (state_27074[(7)]);
var inst_27054 = cljs.core.first.call(null,inst_27051);
var state_27074__$1 = state_27074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27074__$1,(7),ch,inst_27054);
} else {
if((state_val_27075 === (13))){
var inst_27068 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
var statearr_27079_27099 = state_27074__$1;
(statearr_27079_27099[(2)] = inst_27068);

(statearr_27079_27099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (6))){
var inst_27059 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
if(cljs.core.truth_(inst_27059)){
var statearr_27080_27100 = state_27074__$1;
(statearr_27080_27100[(1)] = (8));

} else {
var statearr_27081_27101 = state_27074__$1;
(statearr_27081_27101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (3))){
var inst_27072 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27074__$1,inst_27072);
} else {
if((state_val_27075 === (12))){
var state_27074__$1 = state_27074;
var statearr_27082_27102 = state_27074__$1;
(statearr_27082_27102[(2)] = null);

(statearr_27082_27102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (2))){
var inst_27051 = (state_27074[(7)]);
var state_27074__$1 = state_27074;
if(cljs.core.truth_(inst_27051)){
var statearr_27083_27103 = state_27074__$1;
(statearr_27083_27103[(1)] = (4));

} else {
var statearr_27084_27104 = state_27074__$1;
(statearr_27084_27104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (11))){
var inst_27065 = cljs.core.async.close_BANG_.call(null,ch);
var state_27074__$1 = state_27074;
var statearr_27085_27105 = state_27074__$1;
(statearr_27085_27105[(2)] = inst_27065);

(statearr_27085_27105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (9))){
var state_27074__$1 = state_27074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27086_27106 = state_27074__$1;
(statearr_27086_27106[(1)] = (11));

} else {
var statearr_27087_27107 = state_27074__$1;
(statearr_27087_27107[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (5))){
var inst_27051 = (state_27074[(7)]);
var state_27074__$1 = state_27074;
var statearr_27088_27108 = state_27074__$1;
(statearr_27088_27108[(2)] = inst_27051);

(statearr_27088_27108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (10))){
var inst_27070 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
var statearr_27089_27109 = state_27074__$1;
(statearr_27089_27109[(2)] = inst_27070);

(statearr_27089_27109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (8))){
var inst_27051 = (state_27074[(7)]);
var inst_27061 = cljs.core.next.call(null,inst_27051);
var inst_27051__$1 = inst_27061;
var state_27074__$1 = (function (){var statearr_27090 = state_27074;
(statearr_27090[(7)] = inst_27051__$1);

return statearr_27090;
})();
var statearr_27091_27110 = state_27074__$1;
(statearr_27091_27110[(2)] = null);

(statearr_27091_27110[(1)] = (2));


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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_27092 = [null,null,null,null,null,null,null,null];
(statearr_27092[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_27092[(1)] = (1));

return statearr_27092;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_27074){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27093){if((e27093 instanceof Object)){
var ex__24478__auto__ = e27093;
var statearr_27094_27111 = state_27074;
(statearr_27094_27111[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27112 = state_27074;
state_27074 = G__27112;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_27074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_27074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27095 = f__24642__auto__.call(null);
(statearr_27095[(6)] = c__24641__auto__);

return statearr_27095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_27113 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_27113.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27114 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_27114.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27115 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_27115.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27116 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_27116.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27117 = (function (ch,cs,meta27118){
this.ch = ch;
this.cs = cs;
this.meta27118 = meta27118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27119,meta27118__$1){
var self__ = this;
var _27119__$1 = this;
return (new cljs.core.async.t_cljs$core$async27117(self__.ch,self__.cs,meta27118__$1));
}));

(cljs.core.async.t_cljs$core$async27117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27119){
var self__ = this;
var _27119__$1 = this;
return self__.meta27118;
}));

(cljs.core.async.t_cljs$core$async27117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27117.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27117.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27117.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27117.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27118","meta27118",165088767,null)], null);
}));

(cljs.core.async.t_cljs$core$async27117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27117");

(cljs.core.async.t_cljs$core$async27117.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27117.
 */
cljs.core.async.__GT_t_cljs$core$async27117 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27117(ch__$1,cs__$1,meta27118){
return (new cljs.core.async.t_cljs$core$async27117(ch__$1,cs__$1,meta27118));
});

}

return (new cljs.core.async.t_cljs$core$async27117(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24641__auto___27339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27254){
var state_val_27255 = (state_27254[(1)]);
if((state_val_27255 === (7))){
var inst_27250 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27256_27340 = state_27254__$1;
(statearr_27256_27340[(2)] = inst_27250);

(statearr_27256_27340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (20))){
var inst_27153 = (state_27254[(7)]);
var inst_27165 = cljs.core.first.call(null,inst_27153);
var inst_27166 = cljs.core.nth.call(null,inst_27165,(0),null);
var inst_27167 = cljs.core.nth.call(null,inst_27165,(1),null);
var state_27254__$1 = (function (){var statearr_27257 = state_27254;
(statearr_27257[(8)] = inst_27166);

return statearr_27257;
})();
if(cljs.core.truth_(inst_27167)){
var statearr_27258_27341 = state_27254__$1;
(statearr_27258_27341[(1)] = (22));

} else {
var statearr_27259_27342 = state_27254__$1;
(statearr_27259_27342[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (27))){
var inst_27195 = (state_27254[(9)]);
var inst_27197 = (state_27254[(10)]);
var inst_27202 = (state_27254[(11)]);
var inst_27122 = (state_27254[(12)]);
var inst_27202__$1 = cljs.core._nth.call(null,inst_27195,inst_27197);
var inst_27203 = cljs.core.async.put_BANG_.call(null,inst_27202__$1,inst_27122,done);
var state_27254__$1 = (function (){var statearr_27260 = state_27254;
(statearr_27260[(11)] = inst_27202__$1);

return statearr_27260;
})();
if(cljs.core.truth_(inst_27203)){
var statearr_27261_27343 = state_27254__$1;
(statearr_27261_27343[(1)] = (30));

} else {
var statearr_27262_27344 = state_27254__$1;
(statearr_27262_27344[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (1))){
var state_27254__$1 = state_27254;
var statearr_27263_27345 = state_27254__$1;
(statearr_27263_27345[(2)] = null);

(statearr_27263_27345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (24))){
var inst_27153 = (state_27254[(7)]);
var inst_27172 = (state_27254[(2)]);
var inst_27173 = cljs.core.next.call(null,inst_27153);
var inst_27131 = inst_27173;
var inst_27132 = null;
var inst_27133 = (0);
var inst_27134 = (0);
var state_27254__$1 = (function (){var statearr_27264 = state_27254;
(statearr_27264[(13)] = inst_27132);

(statearr_27264[(14)] = inst_27133);

(statearr_27264[(15)] = inst_27131);

(statearr_27264[(16)] = inst_27172);

(statearr_27264[(17)] = inst_27134);

return statearr_27264;
})();
var statearr_27265_27346 = state_27254__$1;
(statearr_27265_27346[(2)] = null);

(statearr_27265_27346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (39))){
var state_27254__$1 = state_27254;
var statearr_27269_27347 = state_27254__$1;
(statearr_27269_27347[(2)] = null);

(statearr_27269_27347[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (4))){
var inst_27122 = (state_27254[(12)]);
var inst_27122__$1 = (state_27254[(2)]);
var inst_27123 = (inst_27122__$1 == null);
var state_27254__$1 = (function (){var statearr_27270 = state_27254;
(statearr_27270[(12)] = inst_27122__$1);

return statearr_27270;
})();
if(cljs.core.truth_(inst_27123)){
var statearr_27271_27348 = state_27254__$1;
(statearr_27271_27348[(1)] = (5));

} else {
var statearr_27272_27349 = state_27254__$1;
(statearr_27272_27349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (15))){
var inst_27132 = (state_27254[(13)]);
var inst_27133 = (state_27254[(14)]);
var inst_27131 = (state_27254[(15)]);
var inst_27134 = (state_27254[(17)]);
var inst_27149 = (state_27254[(2)]);
var inst_27150 = (inst_27134 + (1));
var tmp27266 = inst_27132;
var tmp27267 = inst_27133;
var tmp27268 = inst_27131;
var inst_27131__$1 = tmp27268;
var inst_27132__$1 = tmp27266;
var inst_27133__$1 = tmp27267;
var inst_27134__$1 = inst_27150;
var state_27254__$1 = (function (){var statearr_27273 = state_27254;
(statearr_27273[(18)] = inst_27149);

(statearr_27273[(13)] = inst_27132__$1);

(statearr_27273[(14)] = inst_27133__$1);

(statearr_27273[(15)] = inst_27131__$1);

(statearr_27273[(17)] = inst_27134__$1);

return statearr_27273;
})();
var statearr_27274_27350 = state_27254__$1;
(statearr_27274_27350[(2)] = null);

(statearr_27274_27350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (21))){
var inst_27176 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27278_27351 = state_27254__$1;
(statearr_27278_27351[(2)] = inst_27176);

(statearr_27278_27351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (31))){
var inst_27202 = (state_27254[(11)]);
var inst_27206 = done.call(null,null);
var inst_27207 = cljs.core.async.untap_STAR_.call(null,m,inst_27202);
var state_27254__$1 = (function (){var statearr_27279 = state_27254;
(statearr_27279[(19)] = inst_27206);

return statearr_27279;
})();
var statearr_27280_27352 = state_27254__$1;
(statearr_27280_27352[(2)] = inst_27207);

(statearr_27280_27352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (32))){
var inst_27195 = (state_27254[(9)]);
var inst_27196 = (state_27254[(20)]);
var inst_27197 = (state_27254[(10)]);
var inst_27194 = (state_27254[(21)]);
var inst_27209 = (state_27254[(2)]);
var inst_27210 = (inst_27197 + (1));
var tmp27275 = inst_27195;
var tmp27276 = inst_27196;
var tmp27277 = inst_27194;
var inst_27194__$1 = tmp27277;
var inst_27195__$1 = tmp27275;
var inst_27196__$1 = tmp27276;
var inst_27197__$1 = inst_27210;
var state_27254__$1 = (function (){var statearr_27281 = state_27254;
(statearr_27281[(9)] = inst_27195__$1);

(statearr_27281[(20)] = inst_27196__$1);

(statearr_27281[(10)] = inst_27197__$1);

(statearr_27281[(22)] = inst_27209);

(statearr_27281[(21)] = inst_27194__$1);

return statearr_27281;
})();
var statearr_27282_27353 = state_27254__$1;
(statearr_27282_27353[(2)] = null);

(statearr_27282_27353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (40))){
var inst_27222 = (state_27254[(23)]);
var inst_27226 = done.call(null,null);
var inst_27227 = cljs.core.async.untap_STAR_.call(null,m,inst_27222);
var state_27254__$1 = (function (){var statearr_27283 = state_27254;
(statearr_27283[(24)] = inst_27226);

return statearr_27283;
})();
var statearr_27284_27354 = state_27254__$1;
(statearr_27284_27354[(2)] = inst_27227);

(statearr_27284_27354[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (33))){
var inst_27213 = (state_27254[(25)]);
var inst_27215 = cljs.core.chunked_seq_QMARK_.call(null,inst_27213);
var state_27254__$1 = state_27254;
if(inst_27215){
var statearr_27285_27355 = state_27254__$1;
(statearr_27285_27355[(1)] = (36));

} else {
var statearr_27286_27356 = state_27254__$1;
(statearr_27286_27356[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (13))){
var inst_27143 = (state_27254[(26)]);
var inst_27146 = cljs.core.async.close_BANG_.call(null,inst_27143);
var state_27254__$1 = state_27254;
var statearr_27287_27357 = state_27254__$1;
(statearr_27287_27357[(2)] = inst_27146);

(statearr_27287_27357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (22))){
var inst_27166 = (state_27254[(8)]);
var inst_27169 = cljs.core.async.close_BANG_.call(null,inst_27166);
var state_27254__$1 = state_27254;
var statearr_27288_27358 = state_27254__$1;
(statearr_27288_27358[(2)] = inst_27169);

(statearr_27288_27358[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (36))){
var inst_27213 = (state_27254[(25)]);
var inst_27217 = cljs.core.chunk_first.call(null,inst_27213);
var inst_27218 = cljs.core.chunk_rest.call(null,inst_27213);
var inst_27219 = cljs.core.count.call(null,inst_27217);
var inst_27194 = inst_27218;
var inst_27195 = inst_27217;
var inst_27196 = inst_27219;
var inst_27197 = (0);
var state_27254__$1 = (function (){var statearr_27289 = state_27254;
(statearr_27289[(9)] = inst_27195);

(statearr_27289[(20)] = inst_27196);

(statearr_27289[(10)] = inst_27197);

(statearr_27289[(21)] = inst_27194);

return statearr_27289;
})();
var statearr_27290_27359 = state_27254__$1;
(statearr_27290_27359[(2)] = null);

(statearr_27290_27359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (41))){
var inst_27213 = (state_27254[(25)]);
var inst_27229 = (state_27254[(2)]);
var inst_27230 = cljs.core.next.call(null,inst_27213);
var inst_27194 = inst_27230;
var inst_27195 = null;
var inst_27196 = (0);
var inst_27197 = (0);
var state_27254__$1 = (function (){var statearr_27291 = state_27254;
(statearr_27291[(9)] = inst_27195);

(statearr_27291[(20)] = inst_27196);

(statearr_27291[(10)] = inst_27197);

(statearr_27291[(27)] = inst_27229);

(statearr_27291[(21)] = inst_27194);

return statearr_27291;
})();
var statearr_27292_27360 = state_27254__$1;
(statearr_27292_27360[(2)] = null);

(statearr_27292_27360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (43))){
var state_27254__$1 = state_27254;
var statearr_27293_27361 = state_27254__$1;
(statearr_27293_27361[(2)] = null);

(statearr_27293_27361[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (29))){
var inst_27238 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27294_27362 = state_27254__$1;
(statearr_27294_27362[(2)] = inst_27238);

(statearr_27294_27362[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (44))){
var inst_27247 = (state_27254[(2)]);
var state_27254__$1 = (function (){var statearr_27295 = state_27254;
(statearr_27295[(28)] = inst_27247);

return statearr_27295;
})();
var statearr_27296_27363 = state_27254__$1;
(statearr_27296_27363[(2)] = null);

(statearr_27296_27363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (6))){
var inst_27186 = (state_27254[(29)]);
var inst_27185 = cljs.core.deref.call(null,cs);
var inst_27186__$1 = cljs.core.keys.call(null,inst_27185);
var inst_27187 = cljs.core.count.call(null,inst_27186__$1);
var inst_27188 = cljs.core.reset_BANG_.call(null,dctr,inst_27187);
var inst_27193 = cljs.core.seq.call(null,inst_27186__$1);
var inst_27194 = inst_27193;
var inst_27195 = null;
var inst_27196 = (0);
var inst_27197 = (0);
var state_27254__$1 = (function (){var statearr_27297 = state_27254;
(statearr_27297[(9)] = inst_27195);

(statearr_27297[(20)] = inst_27196);

(statearr_27297[(10)] = inst_27197);

(statearr_27297[(30)] = inst_27188);

(statearr_27297[(21)] = inst_27194);

(statearr_27297[(29)] = inst_27186__$1);

return statearr_27297;
})();
var statearr_27298_27364 = state_27254__$1;
(statearr_27298_27364[(2)] = null);

(statearr_27298_27364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (28))){
var inst_27213 = (state_27254[(25)]);
var inst_27194 = (state_27254[(21)]);
var inst_27213__$1 = cljs.core.seq.call(null,inst_27194);
var state_27254__$1 = (function (){var statearr_27299 = state_27254;
(statearr_27299[(25)] = inst_27213__$1);

return statearr_27299;
})();
if(inst_27213__$1){
var statearr_27300_27365 = state_27254__$1;
(statearr_27300_27365[(1)] = (33));

} else {
var statearr_27301_27366 = state_27254__$1;
(statearr_27301_27366[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (25))){
var inst_27196 = (state_27254[(20)]);
var inst_27197 = (state_27254[(10)]);
var inst_27199 = (inst_27197 < inst_27196);
var inst_27200 = inst_27199;
var state_27254__$1 = state_27254;
if(cljs.core.truth_(inst_27200)){
var statearr_27302_27367 = state_27254__$1;
(statearr_27302_27367[(1)] = (27));

} else {
var statearr_27303_27368 = state_27254__$1;
(statearr_27303_27368[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (34))){
var state_27254__$1 = state_27254;
var statearr_27304_27369 = state_27254__$1;
(statearr_27304_27369[(2)] = null);

(statearr_27304_27369[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (17))){
var state_27254__$1 = state_27254;
var statearr_27305_27370 = state_27254__$1;
(statearr_27305_27370[(2)] = null);

(statearr_27305_27370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (3))){
var inst_27252 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27254__$1,inst_27252);
} else {
if((state_val_27255 === (12))){
var inst_27181 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27306_27371 = state_27254__$1;
(statearr_27306_27371[(2)] = inst_27181);

(statearr_27306_27371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (2))){
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27254__$1,(4),ch);
} else {
if((state_val_27255 === (23))){
var state_27254__$1 = state_27254;
var statearr_27307_27372 = state_27254__$1;
(statearr_27307_27372[(2)] = null);

(statearr_27307_27372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (35))){
var inst_27236 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27308_27373 = state_27254__$1;
(statearr_27308_27373[(2)] = inst_27236);

(statearr_27308_27373[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (19))){
var inst_27153 = (state_27254[(7)]);
var inst_27157 = cljs.core.chunk_first.call(null,inst_27153);
var inst_27158 = cljs.core.chunk_rest.call(null,inst_27153);
var inst_27159 = cljs.core.count.call(null,inst_27157);
var inst_27131 = inst_27158;
var inst_27132 = inst_27157;
var inst_27133 = inst_27159;
var inst_27134 = (0);
var state_27254__$1 = (function (){var statearr_27309 = state_27254;
(statearr_27309[(13)] = inst_27132);

(statearr_27309[(14)] = inst_27133);

(statearr_27309[(15)] = inst_27131);

(statearr_27309[(17)] = inst_27134);

return statearr_27309;
})();
var statearr_27310_27374 = state_27254__$1;
(statearr_27310_27374[(2)] = null);

(statearr_27310_27374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (11))){
var inst_27131 = (state_27254[(15)]);
var inst_27153 = (state_27254[(7)]);
var inst_27153__$1 = cljs.core.seq.call(null,inst_27131);
var state_27254__$1 = (function (){var statearr_27311 = state_27254;
(statearr_27311[(7)] = inst_27153__$1);

return statearr_27311;
})();
if(inst_27153__$1){
var statearr_27312_27375 = state_27254__$1;
(statearr_27312_27375[(1)] = (16));

} else {
var statearr_27313_27376 = state_27254__$1;
(statearr_27313_27376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (9))){
var inst_27183 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27314_27377 = state_27254__$1;
(statearr_27314_27377[(2)] = inst_27183);

(statearr_27314_27377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (5))){
var inst_27129 = cljs.core.deref.call(null,cs);
var inst_27130 = cljs.core.seq.call(null,inst_27129);
var inst_27131 = inst_27130;
var inst_27132 = null;
var inst_27133 = (0);
var inst_27134 = (0);
var state_27254__$1 = (function (){var statearr_27315 = state_27254;
(statearr_27315[(13)] = inst_27132);

(statearr_27315[(14)] = inst_27133);

(statearr_27315[(15)] = inst_27131);

(statearr_27315[(17)] = inst_27134);

return statearr_27315;
})();
var statearr_27316_27378 = state_27254__$1;
(statearr_27316_27378[(2)] = null);

(statearr_27316_27378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (14))){
var state_27254__$1 = state_27254;
var statearr_27317_27379 = state_27254__$1;
(statearr_27317_27379[(2)] = null);

(statearr_27317_27379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (45))){
var inst_27244 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27318_27380 = state_27254__$1;
(statearr_27318_27380[(2)] = inst_27244);

(statearr_27318_27380[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (26))){
var inst_27186 = (state_27254[(29)]);
var inst_27240 = (state_27254[(2)]);
var inst_27241 = cljs.core.seq.call(null,inst_27186);
var state_27254__$1 = (function (){var statearr_27319 = state_27254;
(statearr_27319[(31)] = inst_27240);

return statearr_27319;
})();
if(inst_27241){
var statearr_27320_27381 = state_27254__$1;
(statearr_27320_27381[(1)] = (42));

} else {
var statearr_27321_27382 = state_27254__$1;
(statearr_27321_27382[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (16))){
var inst_27153 = (state_27254[(7)]);
var inst_27155 = cljs.core.chunked_seq_QMARK_.call(null,inst_27153);
var state_27254__$1 = state_27254;
if(inst_27155){
var statearr_27322_27383 = state_27254__$1;
(statearr_27322_27383[(1)] = (19));

} else {
var statearr_27323_27384 = state_27254__$1;
(statearr_27323_27384[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (38))){
var inst_27233 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27324_27385 = state_27254__$1;
(statearr_27324_27385[(2)] = inst_27233);

(statearr_27324_27385[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (30))){
var state_27254__$1 = state_27254;
var statearr_27325_27386 = state_27254__$1;
(statearr_27325_27386[(2)] = null);

(statearr_27325_27386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (10))){
var inst_27132 = (state_27254[(13)]);
var inst_27134 = (state_27254[(17)]);
var inst_27142 = cljs.core._nth.call(null,inst_27132,inst_27134);
var inst_27143 = cljs.core.nth.call(null,inst_27142,(0),null);
var inst_27144 = cljs.core.nth.call(null,inst_27142,(1),null);
var state_27254__$1 = (function (){var statearr_27326 = state_27254;
(statearr_27326[(26)] = inst_27143);

return statearr_27326;
})();
if(cljs.core.truth_(inst_27144)){
var statearr_27327_27387 = state_27254__$1;
(statearr_27327_27387[(1)] = (13));

} else {
var statearr_27328_27388 = state_27254__$1;
(statearr_27328_27388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (18))){
var inst_27179 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27329_27389 = state_27254__$1;
(statearr_27329_27389[(2)] = inst_27179);

(statearr_27329_27389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (42))){
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27254__$1,(45),dchan);
} else {
if((state_val_27255 === (37))){
var inst_27213 = (state_27254[(25)]);
var inst_27222 = (state_27254[(23)]);
var inst_27122 = (state_27254[(12)]);
var inst_27222__$1 = cljs.core.first.call(null,inst_27213);
var inst_27223 = cljs.core.async.put_BANG_.call(null,inst_27222__$1,inst_27122,done);
var state_27254__$1 = (function (){var statearr_27330 = state_27254;
(statearr_27330[(23)] = inst_27222__$1);

return statearr_27330;
})();
if(cljs.core.truth_(inst_27223)){
var statearr_27331_27390 = state_27254__$1;
(statearr_27331_27390[(1)] = (39));

} else {
var statearr_27332_27391 = state_27254__$1;
(statearr_27332_27391[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (8))){
var inst_27133 = (state_27254[(14)]);
var inst_27134 = (state_27254[(17)]);
var inst_27136 = (inst_27134 < inst_27133);
var inst_27137 = inst_27136;
var state_27254__$1 = state_27254;
if(cljs.core.truth_(inst_27137)){
var statearr_27333_27392 = state_27254__$1;
(statearr_27333_27392[(1)] = (10));

} else {
var statearr_27334_27393 = state_27254__$1;
(statearr_27334_27393[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24475__auto__ = null;
var cljs$core$async$mult_$_state_machine__24475__auto____0 = (function (){
var statearr_27335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27335[(0)] = cljs$core$async$mult_$_state_machine__24475__auto__);

(statearr_27335[(1)] = (1));

return statearr_27335;
});
var cljs$core$async$mult_$_state_machine__24475__auto____1 = (function (state_27254){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27336){if((e27336 instanceof Object)){
var ex__24478__auto__ = e27336;
var statearr_27337_27394 = state_27254;
(statearr_27337_27394[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27395 = state_27254;
state_27254 = G__27395;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24475__auto__ = function(state_27254){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24475__auto____1.call(this,state_27254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24475__auto____0;
cljs$core$async$mult_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24475__auto____1;
return cljs$core$async$mult_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27338 = f__24642__auto__.call(null);
(statearr_27338[(6)] = c__24641__auto___27339);

return statearr_27338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
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
var G__27397 = arguments.length;
switch (G__27397) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_27399 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_27399.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27400 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_27400.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27401 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27401.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27402 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_27402.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27403 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27403.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27414 = arguments.length;
var i__4737__auto___27415 = (0);
while(true){
if((i__4737__auto___27415 < len__4736__auto___27414)){
args__4742__auto__.push((arguments[i__4737__auto___27415]));

var G__27416 = (i__4737__auto___27415 + (1));
i__4737__auto___27415 = G__27416;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27408){
var map__27409 = p__27408;
var map__27409__$1 = (((((!((map__27409 == null))))?(((((map__27409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27409):map__27409);
var opts = map__27409__$1;
var statearr_27411_27417 = state;
(statearr_27411_27417[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27412_27418 = state;
(statearr_27412_27418[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27413_27419 = state;
(statearr_27413_27419[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27404){
var G__27405 = cljs.core.first.call(null,seq27404);
var seq27404__$1 = cljs.core.next.call(null,seq27404);
var G__27406 = cljs.core.first.call(null,seq27404__$1);
var seq27404__$2 = cljs.core.next.call(null,seq27404__$1);
var G__27407 = cljs.core.first.call(null,seq27404__$2);
var seq27404__$3 = cljs.core.next.call(null,seq27404__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27405,G__27406,G__27407,seq27404__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27420 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27421){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27421 = meta27421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27422,meta27421__$1){
var self__ = this;
var _27422__$1 = this;
return (new cljs.core.async.t_cljs$core$async27420(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27421__$1));
}));

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27422){
var self__ = this;
var _27422__$1 = this;
return self__.meta27421;
}));

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27420.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27421","meta27421",1925877832,null)], null);
}));

(cljs.core.async.t_cljs$core$async27420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27420");

(cljs.core.async.t_cljs$core$async27420.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27420.
 */
cljs.core.async.__GT_t_cljs$core$async27420 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27420(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27421){
return (new cljs.core.async.t_cljs$core$async27420(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27421));
});

}

return (new cljs.core.async.t_cljs$core$async27420(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24641__auto___27584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27524){
var state_val_27525 = (state_27524[(1)]);
if((state_val_27525 === (7))){
var inst_27439 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27526_27585 = state_27524__$1;
(statearr_27526_27585[(2)] = inst_27439);

(statearr_27526_27585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (20))){
var inst_27451 = (state_27524[(7)]);
var state_27524__$1 = state_27524;
var statearr_27527_27586 = state_27524__$1;
(statearr_27527_27586[(2)] = inst_27451);

(statearr_27527_27586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (27))){
var state_27524__$1 = state_27524;
var statearr_27528_27587 = state_27524__$1;
(statearr_27528_27587[(2)] = null);

(statearr_27528_27587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (1))){
var inst_27426 = (state_27524[(8)]);
var inst_27426__$1 = calc_state.call(null);
var inst_27428 = (inst_27426__$1 == null);
var inst_27429 = cljs.core.not.call(null,inst_27428);
var state_27524__$1 = (function (){var statearr_27529 = state_27524;
(statearr_27529[(8)] = inst_27426__$1);

return statearr_27529;
})();
if(inst_27429){
var statearr_27530_27588 = state_27524__$1;
(statearr_27530_27588[(1)] = (2));

} else {
var statearr_27531_27589 = state_27524__$1;
(statearr_27531_27589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (24))){
var inst_27498 = (state_27524[(9)]);
var inst_27475 = (state_27524[(10)]);
var inst_27484 = (state_27524[(11)]);
var inst_27498__$1 = inst_27475.call(null,inst_27484);
var state_27524__$1 = (function (){var statearr_27532 = state_27524;
(statearr_27532[(9)] = inst_27498__$1);

return statearr_27532;
})();
if(cljs.core.truth_(inst_27498__$1)){
var statearr_27533_27590 = state_27524__$1;
(statearr_27533_27590[(1)] = (29));

} else {
var statearr_27534_27591 = state_27524__$1;
(statearr_27534_27591[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (4))){
var inst_27442 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
if(cljs.core.truth_(inst_27442)){
var statearr_27535_27592 = state_27524__$1;
(statearr_27535_27592[(1)] = (8));

} else {
var statearr_27536_27593 = state_27524__$1;
(statearr_27536_27593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (15))){
var inst_27469 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
if(cljs.core.truth_(inst_27469)){
var statearr_27537_27594 = state_27524__$1;
(statearr_27537_27594[(1)] = (19));

} else {
var statearr_27538_27595 = state_27524__$1;
(statearr_27538_27595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (21))){
var inst_27474 = (state_27524[(12)]);
var inst_27474__$1 = (state_27524[(2)]);
var inst_27475 = cljs.core.get.call(null,inst_27474__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27476 = cljs.core.get.call(null,inst_27474__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27477 = cljs.core.get.call(null,inst_27474__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27524__$1 = (function (){var statearr_27539 = state_27524;
(statearr_27539[(12)] = inst_27474__$1);

(statearr_27539[(10)] = inst_27475);

(statearr_27539[(13)] = inst_27476);

return statearr_27539;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27524__$1,(22),inst_27477);
} else {
if((state_val_27525 === (31))){
var inst_27506 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
if(cljs.core.truth_(inst_27506)){
var statearr_27540_27596 = state_27524__$1;
(statearr_27540_27596[(1)] = (32));

} else {
var statearr_27541_27597 = state_27524__$1;
(statearr_27541_27597[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (32))){
var inst_27483 = (state_27524[(14)]);
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27524__$1,(35),out,inst_27483);
} else {
if((state_val_27525 === (33))){
var inst_27474 = (state_27524[(12)]);
var inst_27451 = inst_27474;
var state_27524__$1 = (function (){var statearr_27542 = state_27524;
(statearr_27542[(7)] = inst_27451);

return statearr_27542;
})();
var statearr_27543_27598 = state_27524__$1;
(statearr_27543_27598[(2)] = null);

(statearr_27543_27598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (13))){
var inst_27451 = (state_27524[(7)]);
var inst_27458 = inst_27451.cljs$lang$protocol_mask$partition0$;
var inst_27459 = (inst_27458 & (64));
var inst_27460 = inst_27451.cljs$core$ISeq$;
var inst_27461 = (cljs.core.PROTOCOL_SENTINEL === inst_27460);
var inst_27462 = ((inst_27459) || (inst_27461));
var state_27524__$1 = state_27524;
if(cljs.core.truth_(inst_27462)){
var statearr_27544_27599 = state_27524__$1;
(statearr_27544_27599[(1)] = (16));

} else {
var statearr_27545_27600 = state_27524__$1;
(statearr_27545_27600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (22))){
var inst_27484 = (state_27524[(11)]);
var inst_27483 = (state_27524[(14)]);
var inst_27482 = (state_27524[(2)]);
var inst_27483__$1 = cljs.core.nth.call(null,inst_27482,(0),null);
var inst_27484__$1 = cljs.core.nth.call(null,inst_27482,(1),null);
var inst_27485 = (inst_27483__$1 == null);
var inst_27486 = cljs.core._EQ_.call(null,inst_27484__$1,change);
var inst_27487 = ((inst_27485) || (inst_27486));
var state_27524__$1 = (function (){var statearr_27546 = state_27524;
(statearr_27546[(11)] = inst_27484__$1);

(statearr_27546[(14)] = inst_27483__$1);

return statearr_27546;
})();
if(cljs.core.truth_(inst_27487)){
var statearr_27547_27601 = state_27524__$1;
(statearr_27547_27601[(1)] = (23));

} else {
var statearr_27548_27602 = state_27524__$1;
(statearr_27548_27602[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (36))){
var inst_27474 = (state_27524[(12)]);
var inst_27451 = inst_27474;
var state_27524__$1 = (function (){var statearr_27549 = state_27524;
(statearr_27549[(7)] = inst_27451);

return statearr_27549;
})();
var statearr_27550_27603 = state_27524__$1;
(statearr_27550_27603[(2)] = null);

(statearr_27550_27603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (29))){
var inst_27498 = (state_27524[(9)]);
var state_27524__$1 = state_27524;
var statearr_27551_27604 = state_27524__$1;
(statearr_27551_27604[(2)] = inst_27498);

(statearr_27551_27604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (6))){
var state_27524__$1 = state_27524;
var statearr_27552_27605 = state_27524__$1;
(statearr_27552_27605[(2)] = false);

(statearr_27552_27605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (28))){
var inst_27494 = (state_27524[(2)]);
var inst_27495 = calc_state.call(null);
var inst_27451 = inst_27495;
var state_27524__$1 = (function (){var statearr_27553 = state_27524;
(statearr_27553[(15)] = inst_27494);

(statearr_27553[(7)] = inst_27451);

return statearr_27553;
})();
var statearr_27554_27606 = state_27524__$1;
(statearr_27554_27606[(2)] = null);

(statearr_27554_27606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (25))){
var inst_27520 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27555_27607 = state_27524__$1;
(statearr_27555_27607[(2)] = inst_27520);

(statearr_27555_27607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (34))){
var inst_27518 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27556_27608 = state_27524__$1;
(statearr_27556_27608[(2)] = inst_27518);

(statearr_27556_27608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (17))){
var state_27524__$1 = state_27524;
var statearr_27557_27609 = state_27524__$1;
(statearr_27557_27609[(2)] = false);

(statearr_27557_27609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (3))){
var state_27524__$1 = state_27524;
var statearr_27558_27610 = state_27524__$1;
(statearr_27558_27610[(2)] = false);

(statearr_27558_27610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (12))){
var inst_27522 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27524__$1,inst_27522);
} else {
if((state_val_27525 === (2))){
var inst_27426 = (state_27524[(8)]);
var inst_27431 = inst_27426.cljs$lang$protocol_mask$partition0$;
var inst_27432 = (inst_27431 & (64));
var inst_27433 = inst_27426.cljs$core$ISeq$;
var inst_27434 = (cljs.core.PROTOCOL_SENTINEL === inst_27433);
var inst_27435 = ((inst_27432) || (inst_27434));
var state_27524__$1 = state_27524;
if(cljs.core.truth_(inst_27435)){
var statearr_27559_27611 = state_27524__$1;
(statearr_27559_27611[(1)] = (5));

} else {
var statearr_27560_27612 = state_27524__$1;
(statearr_27560_27612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (23))){
var inst_27483 = (state_27524[(14)]);
var inst_27489 = (inst_27483 == null);
var state_27524__$1 = state_27524;
if(cljs.core.truth_(inst_27489)){
var statearr_27561_27613 = state_27524__$1;
(statearr_27561_27613[(1)] = (26));

} else {
var statearr_27562_27614 = state_27524__$1;
(statearr_27562_27614[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (35))){
var inst_27509 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
if(cljs.core.truth_(inst_27509)){
var statearr_27563_27615 = state_27524__$1;
(statearr_27563_27615[(1)] = (36));

} else {
var statearr_27564_27616 = state_27524__$1;
(statearr_27564_27616[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (19))){
var inst_27451 = (state_27524[(7)]);
var inst_27471 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27451);
var state_27524__$1 = state_27524;
var statearr_27565_27617 = state_27524__$1;
(statearr_27565_27617[(2)] = inst_27471);

(statearr_27565_27617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (11))){
var inst_27451 = (state_27524[(7)]);
var inst_27455 = (inst_27451 == null);
var inst_27456 = cljs.core.not.call(null,inst_27455);
var state_27524__$1 = state_27524;
if(inst_27456){
var statearr_27566_27618 = state_27524__$1;
(statearr_27566_27618[(1)] = (13));

} else {
var statearr_27567_27619 = state_27524__$1;
(statearr_27567_27619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (9))){
var inst_27426 = (state_27524[(8)]);
var state_27524__$1 = state_27524;
var statearr_27568_27620 = state_27524__$1;
(statearr_27568_27620[(2)] = inst_27426);

(statearr_27568_27620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (5))){
var state_27524__$1 = state_27524;
var statearr_27569_27621 = state_27524__$1;
(statearr_27569_27621[(2)] = true);

(statearr_27569_27621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (14))){
var state_27524__$1 = state_27524;
var statearr_27570_27622 = state_27524__$1;
(statearr_27570_27622[(2)] = false);

(statearr_27570_27622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (26))){
var inst_27484 = (state_27524[(11)]);
var inst_27491 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27484);
var state_27524__$1 = state_27524;
var statearr_27571_27623 = state_27524__$1;
(statearr_27571_27623[(2)] = inst_27491);

(statearr_27571_27623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (16))){
var state_27524__$1 = state_27524;
var statearr_27572_27624 = state_27524__$1;
(statearr_27572_27624[(2)] = true);

(statearr_27572_27624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (38))){
var inst_27514 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27573_27625 = state_27524__$1;
(statearr_27573_27625[(2)] = inst_27514);

(statearr_27573_27625[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (30))){
var inst_27475 = (state_27524[(10)]);
var inst_27476 = (state_27524[(13)]);
var inst_27484 = (state_27524[(11)]);
var inst_27501 = cljs.core.empty_QMARK_.call(null,inst_27475);
var inst_27502 = inst_27476.call(null,inst_27484);
var inst_27503 = cljs.core.not.call(null,inst_27502);
var inst_27504 = ((inst_27501) && (inst_27503));
var state_27524__$1 = state_27524;
var statearr_27574_27626 = state_27524__$1;
(statearr_27574_27626[(2)] = inst_27504);

(statearr_27574_27626[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (10))){
var inst_27426 = (state_27524[(8)]);
var inst_27447 = (state_27524[(2)]);
var inst_27448 = cljs.core.get.call(null,inst_27447,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27449 = cljs.core.get.call(null,inst_27447,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27450 = cljs.core.get.call(null,inst_27447,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27451 = inst_27426;
var state_27524__$1 = (function (){var statearr_27575 = state_27524;
(statearr_27575[(16)] = inst_27449);

(statearr_27575[(17)] = inst_27450);

(statearr_27575[(7)] = inst_27451);

(statearr_27575[(18)] = inst_27448);

return statearr_27575;
})();
var statearr_27576_27627 = state_27524__$1;
(statearr_27576_27627[(2)] = null);

(statearr_27576_27627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (18))){
var inst_27466 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27577_27628 = state_27524__$1;
(statearr_27577_27628[(2)] = inst_27466);

(statearr_27577_27628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (37))){
var state_27524__$1 = state_27524;
var statearr_27578_27629 = state_27524__$1;
(statearr_27578_27629[(2)] = null);

(statearr_27578_27629[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (8))){
var inst_27426 = (state_27524[(8)]);
var inst_27444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27426);
var state_27524__$1 = state_27524;
var statearr_27579_27630 = state_27524__$1;
(statearr_27579_27630[(2)] = inst_27444);

(statearr_27579_27630[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__24475__auto__ = null;
var cljs$core$async$mix_$_state_machine__24475__auto____0 = (function (){
var statearr_27580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27580[(0)] = cljs$core$async$mix_$_state_machine__24475__auto__);

(statearr_27580[(1)] = (1));

return statearr_27580;
});
var cljs$core$async$mix_$_state_machine__24475__auto____1 = (function (state_27524){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27581){if((e27581 instanceof Object)){
var ex__24478__auto__ = e27581;
var statearr_27582_27631 = state_27524;
(statearr_27582_27631[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27632 = state_27524;
state_27524 = G__27632;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24475__auto__ = function(state_27524){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24475__auto____1.call(this,state_27524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24475__auto____0;
cljs$core$async$mix_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24475__auto____1;
return cljs$core$async$mix_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27583 = f__24642__auto__.call(null);
(statearr_27583[(6)] = c__24641__auto___27584);

return statearr_27583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_27635 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_27635.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27636 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_27636.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27637 = (function() {
var G__27638 = null;
var G__27638__1 = (function (p){
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
var G__27638__2 = (function (p,v){
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
G__27638 = function(p,v){
switch(arguments.length){
case 1:
return G__27638__1.call(this,p);
case 2:
return G__27638__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27638.cljs$core$IFn$_invoke$arity$1 = G__27638__1;
G__27638.cljs$core$IFn$_invoke$arity$2 = G__27638__2;
return G__27638;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27634 = arguments.length;
switch (G__27634) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27637.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27637.call(null,p,v);
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
var G__27642 = arguments.length;
switch (G__27642) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27640_SHARP_){
if(cljs.core.truth_(p1__27640_SHARP_.call(null,topic))){
return p1__27640_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27640_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27643 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27644){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27644 = meta27644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27645,meta27644__$1){
var self__ = this;
var _27645__$1 = this;
return (new cljs.core.async.t_cljs$core$async27643(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27644__$1));
}));

(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27645){
var self__ = this;
var _27645__$1 = this;
return self__.meta27644;
}));

(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27644","meta27644",953176272,null)], null);
}));

(cljs.core.async.t_cljs$core$async27643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27643");

(cljs.core.async.t_cljs$core$async27643.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27643.
 */
cljs.core.async.__GT_t_cljs$core$async27643 = (function cljs$core$async$__GT_t_cljs$core$async27643(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27644){
return (new cljs.core.async.t_cljs$core$async27643(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27644));
});

}

return (new cljs.core.async.t_cljs$core$async27643(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24641__auto___27763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27717){
var state_val_27718 = (state_27717[(1)]);
if((state_val_27718 === (7))){
var inst_27713 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27719_27764 = state_27717__$1;
(statearr_27719_27764[(2)] = inst_27713);

(statearr_27719_27764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (20))){
var state_27717__$1 = state_27717;
var statearr_27720_27765 = state_27717__$1;
(statearr_27720_27765[(2)] = null);

(statearr_27720_27765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (1))){
var state_27717__$1 = state_27717;
var statearr_27721_27766 = state_27717__$1;
(statearr_27721_27766[(2)] = null);

(statearr_27721_27766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (24))){
var inst_27696 = (state_27717[(7)]);
var inst_27705 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27696);
var state_27717__$1 = state_27717;
var statearr_27722_27767 = state_27717__$1;
(statearr_27722_27767[(2)] = inst_27705);

(statearr_27722_27767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (4))){
var inst_27648 = (state_27717[(8)]);
var inst_27648__$1 = (state_27717[(2)]);
var inst_27649 = (inst_27648__$1 == null);
var state_27717__$1 = (function (){var statearr_27723 = state_27717;
(statearr_27723[(8)] = inst_27648__$1);

return statearr_27723;
})();
if(cljs.core.truth_(inst_27649)){
var statearr_27724_27768 = state_27717__$1;
(statearr_27724_27768[(1)] = (5));

} else {
var statearr_27725_27769 = state_27717__$1;
(statearr_27725_27769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (15))){
var inst_27690 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27726_27770 = state_27717__$1;
(statearr_27726_27770[(2)] = inst_27690);

(statearr_27726_27770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (21))){
var inst_27710 = (state_27717[(2)]);
var state_27717__$1 = (function (){var statearr_27727 = state_27717;
(statearr_27727[(9)] = inst_27710);

return statearr_27727;
})();
var statearr_27728_27771 = state_27717__$1;
(statearr_27728_27771[(2)] = null);

(statearr_27728_27771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (13))){
var inst_27672 = (state_27717[(10)]);
var inst_27674 = cljs.core.chunked_seq_QMARK_.call(null,inst_27672);
var state_27717__$1 = state_27717;
if(inst_27674){
var statearr_27729_27772 = state_27717__$1;
(statearr_27729_27772[(1)] = (16));

} else {
var statearr_27730_27773 = state_27717__$1;
(statearr_27730_27773[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (22))){
var inst_27702 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
if(cljs.core.truth_(inst_27702)){
var statearr_27731_27774 = state_27717__$1;
(statearr_27731_27774[(1)] = (23));

} else {
var statearr_27732_27775 = state_27717__$1;
(statearr_27732_27775[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (6))){
var inst_27648 = (state_27717[(8)]);
var inst_27698 = (state_27717[(11)]);
var inst_27696 = (state_27717[(7)]);
var inst_27696__$1 = topic_fn.call(null,inst_27648);
var inst_27697 = cljs.core.deref.call(null,mults);
var inst_27698__$1 = cljs.core.get.call(null,inst_27697,inst_27696__$1);
var state_27717__$1 = (function (){var statearr_27733 = state_27717;
(statearr_27733[(11)] = inst_27698__$1);

(statearr_27733[(7)] = inst_27696__$1);

return statearr_27733;
})();
if(cljs.core.truth_(inst_27698__$1)){
var statearr_27734_27776 = state_27717__$1;
(statearr_27734_27776[(1)] = (19));

} else {
var statearr_27735_27777 = state_27717__$1;
(statearr_27735_27777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (25))){
var inst_27707 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27736_27778 = state_27717__$1;
(statearr_27736_27778[(2)] = inst_27707);

(statearr_27736_27778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (17))){
var inst_27672 = (state_27717[(10)]);
var inst_27681 = cljs.core.first.call(null,inst_27672);
var inst_27682 = cljs.core.async.muxch_STAR_.call(null,inst_27681);
var inst_27683 = cljs.core.async.close_BANG_.call(null,inst_27682);
var inst_27684 = cljs.core.next.call(null,inst_27672);
var inst_27658 = inst_27684;
var inst_27659 = null;
var inst_27660 = (0);
var inst_27661 = (0);
var state_27717__$1 = (function (){var statearr_27737 = state_27717;
(statearr_27737[(12)] = inst_27683);

(statearr_27737[(13)] = inst_27658);

(statearr_27737[(14)] = inst_27659);

(statearr_27737[(15)] = inst_27661);

(statearr_27737[(16)] = inst_27660);

return statearr_27737;
})();
var statearr_27738_27779 = state_27717__$1;
(statearr_27738_27779[(2)] = null);

(statearr_27738_27779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (3))){
var inst_27715 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27717__$1,inst_27715);
} else {
if((state_val_27718 === (12))){
var inst_27692 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27739_27780 = state_27717__$1;
(statearr_27739_27780[(2)] = inst_27692);

(statearr_27739_27780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (2))){
var state_27717__$1 = state_27717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27717__$1,(4),ch);
} else {
if((state_val_27718 === (23))){
var state_27717__$1 = state_27717;
var statearr_27740_27781 = state_27717__$1;
(statearr_27740_27781[(2)] = null);

(statearr_27740_27781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (19))){
var inst_27648 = (state_27717[(8)]);
var inst_27698 = (state_27717[(11)]);
var inst_27700 = cljs.core.async.muxch_STAR_.call(null,inst_27698);
var state_27717__$1 = state_27717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27717__$1,(22),inst_27700,inst_27648);
} else {
if((state_val_27718 === (11))){
var inst_27658 = (state_27717[(13)]);
var inst_27672 = (state_27717[(10)]);
var inst_27672__$1 = cljs.core.seq.call(null,inst_27658);
var state_27717__$1 = (function (){var statearr_27741 = state_27717;
(statearr_27741[(10)] = inst_27672__$1);

return statearr_27741;
})();
if(inst_27672__$1){
var statearr_27742_27782 = state_27717__$1;
(statearr_27742_27782[(1)] = (13));

} else {
var statearr_27743_27783 = state_27717__$1;
(statearr_27743_27783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (9))){
var inst_27694 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27744_27784 = state_27717__$1;
(statearr_27744_27784[(2)] = inst_27694);

(statearr_27744_27784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (5))){
var inst_27655 = cljs.core.deref.call(null,mults);
var inst_27656 = cljs.core.vals.call(null,inst_27655);
var inst_27657 = cljs.core.seq.call(null,inst_27656);
var inst_27658 = inst_27657;
var inst_27659 = null;
var inst_27660 = (0);
var inst_27661 = (0);
var state_27717__$1 = (function (){var statearr_27745 = state_27717;
(statearr_27745[(13)] = inst_27658);

(statearr_27745[(14)] = inst_27659);

(statearr_27745[(15)] = inst_27661);

(statearr_27745[(16)] = inst_27660);

return statearr_27745;
})();
var statearr_27746_27785 = state_27717__$1;
(statearr_27746_27785[(2)] = null);

(statearr_27746_27785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (14))){
var state_27717__$1 = state_27717;
var statearr_27750_27786 = state_27717__$1;
(statearr_27750_27786[(2)] = null);

(statearr_27750_27786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (16))){
var inst_27672 = (state_27717[(10)]);
var inst_27676 = cljs.core.chunk_first.call(null,inst_27672);
var inst_27677 = cljs.core.chunk_rest.call(null,inst_27672);
var inst_27678 = cljs.core.count.call(null,inst_27676);
var inst_27658 = inst_27677;
var inst_27659 = inst_27676;
var inst_27660 = inst_27678;
var inst_27661 = (0);
var state_27717__$1 = (function (){var statearr_27751 = state_27717;
(statearr_27751[(13)] = inst_27658);

(statearr_27751[(14)] = inst_27659);

(statearr_27751[(15)] = inst_27661);

(statearr_27751[(16)] = inst_27660);

return statearr_27751;
})();
var statearr_27752_27787 = state_27717__$1;
(statearr_27752_27787[(2)] = null);

(statearr_27752_27787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (10))){
var inst_27658 = (state_27717[(13)]);
var inst_27659 = (state_27717[(14)]);
var inst_27661 = (state_27717[(15)]);
var inst_27660 = (state_27717[(16)]);
var inst_27666 = cljs.core._nth.call(null,inst_27659,inst_27661);
var inst_27667 = cljs.core.async.muxch_STAR_.call(null,inst_27666);
var inst_27668 = cljs.core.async.close_BANG_.call(null,inst_27667);
var inst_27669 = (inst_27661 + (1));
var tmp27747 = inst_27658;
var tmp27748 = inst_27659;
var tmp27749 = inst_27660;
var inst_27658__$1 = tmp27747;
var inst_27659__$1 = tmp27748;
var inst_27660__$1 = tmp27749;
var inst_27661__$1 = inst_27669;
var state_27717__$1 = (function (){var statearr_27753 = state_27717;
(statearr_27753[(13)] = inst_27658__$1);

(statearr_27753[(14)] = inst_27659__$1);

(statearr_27753[(17)] = inst_27668);

(statearr_27753[(15)] = inst_27661__$1);

(statearr_27753[(16)] = inst_27660__$1);

return statearr_27753;
})();
var statearr_27754_27788 = state_27717__$1;
(statearr_27754_27788[(2)] = null);

(statearr_27754_27788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (18))){
var inst_27687 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27755_27789 = state_27717__$1;
(statearr_27755_27789[(2)] = inst_27687);

(statearr_27755_27789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (8))){
var inst_27661 = (state_27717[(15)]);
var inst_27660 = (state_27717[(16)]);
var inst_27663 = (inst_27661 < inst_27660);
var inst_27664 = inst_27663;
var state_27717__$1 = state_27717;
if(cljs.core.truth_(inst_27664)){
var statearr_27756_27790 = state_27717__$1;
(statearr_27756_27790[(1)] = (10));

} else {
var statearr_27757_27791 = state_27717__$1;
(statearr_27757_27791[(1)] = (11));

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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_27758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27758[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_27758[(1)] = (1));

return statearr_27758;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_27717){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27759){if((e27759 instanceof Object)){
var ex__24478__auto__ = e27759;
var statearr_27760_27792 = state_27717;
(statearr_27760_27792[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27793 = state_27717;
state_27717 = G__27793;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_27717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_27717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27761 = f__24642__auto__.call(null);
(statearr_27761[(6)] = c__24641__auto___27763);

return statearr_27761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
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
var G__27795 = arguments.length;
switch (G__27795) {
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
var G__27798 = arguments.length;
switch (G__27798) {
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
var G__27801 = arguments.length;
switch (G__27801) {
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
var c__24641__auto___27868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27840){
var state_val_27841 = (state_27840[(1)]);
if((state_val_27841 === (7))){
var state_27840__$1 = state_27840;
var statearr_27842_27869 = state_27840__$1;
(statearr_27842_27869[(2)] = null);

(statearr_27842_27869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (1))){
var state_27840__$1 = state_27840;
var statearr_27843_27870 = state_27840__$1;
(statearr_27843_27870[(2)] = null);

(statearr_27843_27870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (4))){
var inst_27804 = (state_27840[(7)]);
var inst_27806 = (inst_27804 < cnt);
var state_27840__$1 = state_27840;
if(cljs.core.truth_(inst_27806)){
var statearr_27844_27871 = state_27840__$1;
(statearr_27844_27871[(1)] = (6));

} else {
var statearr_27845_27872 = state_27840__$1;
(statearr_27845_27872[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (15))){
var inst_27836 = (state_27840[(2)]);
var state_27840__$1 = state_27840;
var statearr_27846_27873 = state_27840__$1;
(statearr_27846_27873[(2)] = inst_27836);

(statearr_27846_27873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (13))){
var inst_27829 = cljs.core.async.close_BANG_.call(null,out);
var state_27840__$1 = state_27840;
var statearr_27847_27874 = state_27840__$1;
(statearr_27847_27874[(2)] = inst_27829);

(statearr_27847_27874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (6))){
var state_27840__$1 = state_27840;
var statearr_27848_27875 = state_27840__$1;
(statearr_27848_27875[(2)] = null);

(statearr_27848_27875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (3))){
var inst_27838 = (state_27840[(2)]);
var state_27840__$1 = state_27840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27840__$1,inst_27838);
} else {
if((state_val_27841 === (12))){
var inst_27826 = (state_27840[(8)]);
var inst_27826__$1 = (state_27840[(2)]);
var inst_27827 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27826__$1);
var state_27840__$1 = (function (){var statearr_27849 = state_27840;
(statearr_27849[(8)] = inst_27826__$1);

return statearr_27849;
})();
if(cljs.core.truth_(inst_27827)){
var statearr_27850_27876 = state_27840__$1;
(statearr_27850_27876[(1)] = (13));

} else {
var statearr_27851_27877 = state_27840__$1;
(statearr_27851_27877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (2))){
var inst_27803 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27804 = (0);
var state_27840__$1 = (function (){var statearr_27852 = state_27840;
(statearr_27852[(7)] = inst_27804);

(statearr_27852[(9)] = inst_27803);

return statearr_27852;
})();
var statearr_27853_27878 = state_27840__$1;
(statearr_27853_27878[(2)] = null);

(statearr_27853_27878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (11))){
var inst_27804 = (state_27840[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27840,(10),Object,null,(9));
var inst_27813 = chs__$1.call(null,inst_27804);
var inst_27814 = done.call(null,inst_27804);
var inst_27815 = cljs.core.async.take_BANG_.call(null,inst_27813,inst_27814);
var state_27840__$1 = state_27840;
var statearr_27854_27879 = state_27840__$1;
(statearr_27854_27879[(2)] = inst_27815);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (9))){
var inst_27804 = (state_27840[(7)]);
var inst_27817 = (state_27840[(2)]);
var inst_27818 = (inst_27804 + (1));
var inst_27804__$1 = inst_27818;
var state_27840__$1 = (function (){var statearr_27855 = state_27840;
(statearr_27855[(7)] = inst_27804__$1);

(statearr_27855[(10)] = inst_27817);

return statearr_27855;
})();
var statearr_27856_27880 = state_27840__$1;
(statearr_27856_27880[(2)] = null);

(statearr_27856_27880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (5))){
var inst_27824 = (state_27840[(2)]);
var state_27840__$1 = (function (){var statearr_27857 = state_27840;
(statearr_27857[(11)] = inst_27824);

return statearr_27857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27840__$1,(12),dchan);
} else {
if((state_val_27841 === (14))){
var inst_27826 = (state_27840[(8)]);
var inst_27831 = cljs.core.apply.call(null,f,inst_27826);
var state_27840__$1 = state_27840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27840__$1,(16),out,inst_27831);
} else {
if((state_val_27841 === (16))){
var inst_27833 = (state_27840[(2)]);
var state_27840__$1 = (function (){var statearr_27858 = state_27840;
(statearr_27858[(12)] = inst_27833);

return statearr_27858;
})();
var statearr_27859_27881 = state_27840__$1;
(statearr_27859_27881[(2)] = null);

(statearr_27859_27881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (10))){
var inst_27808 = (state_27840[(2)]);
var inst_27809 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27840__$1 = (function (){var statearr_27860 = state_27840;
(statearr_27860[(13)] = inst_27808);

return statearr_27860;
})();
var statearr_27861_27882 = state_27840__$1;
(statearr_27861_27882[(2)] = inst_27809);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (8))){
var inst_27822 = (state_27840[(2)]);
var state_27840__$1 = state_27840;
var statearr_27862_27883 = state_27840__$1;
(statearr_27862_27883[(2)] = inst_27822);

(statearr_27862_27883[(1)] = (5));


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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_27863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27863[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_27863[(1)] = (1));

return statearr_27863;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_27840){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27864){if((e27864 instanceof Object)){
var ex__24478__auto__ = e27864;
var statearr_27865_27884 = state_27840;
(statearr_27865_27884[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27885 = state_27840;
state_27840 = G__27885;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_27840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_27840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27866 = f__24642__auto__.call(null);
(statearr_27866[(6)] = c__24641__auto___27868);

return statearr_27866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
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
var G__27888 = arguments.length;
switch (G__27888) {
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
var c__24641__auto___27942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27920){
var state_val_27921 = (state_27920[(1)]);
if((state_val_27921 === (7))){
var inst_27900 = (state_27920[(7)]);
var inst_27899 = (state_27920[(8)]);
var inst_27899__$1 = (state_27920[(2)]);
var inst_27900__$1 = cljs.core.nth.call(null,inst_27899__$1,(0),null);
var inst_27901 = cljs.core.nth.call(null,inst_27899__$1,(1),null);
var inst_27902 = (inst_27900__$1 == null);
var state_27920__$1 = (function (){var statearr_27922 = state_27920;
(statearr_27922[(7)] = inst_27900__$1);

(statearr_27922[(9)] = inst_27901);

(statearr_27922[(8)] = inst_27899__$1);

return statearr_27922;
})();
if(cljs.core.truth_(inst_27902)){
var statearr_27923_27943 = state_27920__$1;
(statearr_27923_27943[(1)] = (8));

} else {
var statearr_27924_27944 = state_27920__$1;
(statearr_27924_27944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (1))){
var inst_27889 = cljs.core.vec.call(null,chs);
var inst_27890 = inst_27889;
var state_27920__$1 = (function (){var statearr_27925 = state_27920;
(statearr_27925[(10)] = inst_27890);

return statearr_27925;
})();
var statearr_27926_27945 = state_27920__$1;
(statearr_27926_27945[(2)] = null);

(statearr_27926_27945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (4))){
var inst_27890 = (state_27920[(10)]);
var state_27920__$1 = state_27920;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27920__$1,(7),inst_27890);
} else {
if((state_val_27921 === (6))){
var inst_27916 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27927_27946 = state_27920__$1;
(statearr_27927_27946[(2)] = inst_27916);

(statearr_27927_27946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (3))){
var inst_27918 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27920__$1,inst_27918);
} else {
if((state_val_27921 === (2))){
var inst_27890 = (state_27920[(10)]);
var inst_27892 = cljs.core.count.call(null,inst_27890);
var inst_27893 = (inst_27892 > (0));
var state_27920__$1 = state_27920;
if(cljs.core.truth_(inst_27893)){
var statearr_27929_27947 = state_27920__$1;
(statearr_27929_27947[(1)] = (4));

} else {
var statearr_27930_27948 = state_27920__$1;
(statearr_27930_27948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (11))){
var inst_27890 = (state_27920[(10)]);
var inst_27909 = (state_27920[(2)]);
var tmp27928 = inst_27890;
var inst_27890__$1 = tmp27928;
var state_27920__$1 = (function (){var statearr_27931 = state_27920;
(statearr_27931[(11)] = inst_27909);

(statearr_27931[(10)] = inst_27890__$1);

return statearr_27931;
})();
var statearr_27932_27949 = state_27920__$1;
(statearr_27932_27949[(2)] = null);

(statearr_27932_27949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (9))){
var inst_27900 = (state_27920[(7)]);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27920__$1,(11),out,inst_27900);
} else {
if((state_val_27921 === (5))){
var inst_27914 = cljs.core.async.close_BANG_.call(null,out);
var state_27920__$1 = state_27920;
var statearr_27933_27950 = state_27920__$1;
(statearr_27933_27950[(2)] = inst_27914);

(statearr_27933_27950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (10))){
var inst_27912 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27934_27951 = state_27920__$1;
(statearr_27934_27951[(2)] = inst_27912);

(statearr_27934_27951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (8))){
var inst_27900 = (state_27920[(7)]);
var inst_27890 = (state_27920[(10)]);
var inst_27901 = (state_27920[(9)]);
var inst_27899 = (state_27920[(8)]);
var inst_27904 = (function (){var cs = inst_27890;
var vec__27895 = inst_27899;
var v = inst_27900;
var c = inst_27901;
return (function (p1__27886_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27886_SHARP_);
});
})();
var inst_27905 = cljs.core.filterv.call(null,inst_27904,inst_27890);
var inst_27890__$1 = inst_27905;
var state_27920__$1 = (function (){var statearr_27935 = state_27920;
(statearr_27935[(10)] = inst_27890__$1);

return statearr_27935;
})();
var statearr_27936_27952 = state_27920__$1;
(statearr_27936_27952[(2)] = null);

(statearr_27936_27952[(1)] = (2));


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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_27937 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27937[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_27937[(1)] = (1));

return statearr_27937;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_27920){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27938){if((e27938 instanceof Object)){
var ex__24478__auto__ = e27938;
var statearr_27939_27953 = state_27920;
(statearr_27939_27953[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27954 = state_27920;
state_27920 = G__27954;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_27920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_27920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27940 = f__24642__auto__.call(null);
(statearr_27940[(6)] = c__24641__auto___27942);

return statearr_27940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
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
var G__27956 = arguments.length;
switch (G__27956) {
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
var c__24641__auto___28001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_27980){
var state_val_27981 = (state_27980[(1)]);
if((state_val_27981 === (7))){
var inst_27962 = (state_27980[(7)]);
var inst_27962__$1 = (state_27980[(2)]);
var inst_27963 = (inst_27962__$1 == null);
var inst_27964 = cljs.core.not.call(null,inst_27963);
var state_27980__$1 = (function (){var statearr_27982 = state_27980;
(statearr_27982[(7)] = inst_27962__$1);

return statearr_27982;
})();
if(inst_27964){
var statearr_27983_28002 = state_27980__$1;
(statearr_27983_28002[(1)] = (8));

} else {
var statearr_27984_28003 = state_27980__$1;
(statearr_27984_28003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (1))){
var inst_27957 = (0);
var state_27980__$1 = (function (){var statearr_27985 = state_27980;
(statearr_27985[(8)] = inst_27957);

return statearr_27985;
})();
var statearr_27986_28004 = state_27980__$1;
(statearr_27986_28004[(2)] = null);

(statearr_27986_28004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (4))){
var state_27980__$1 = state_27980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27980__$1,(7),ch);
} else {
if((state_val_27981 === (6))){
var inst_27975 = (state_27980[(2)]);
var state_27980__$1 = state_27980;
var statearr_27987_28005 = state_27980__$1;
(statearr_27987_28005[(2)] = inst_27975);

(statearr_27987_28005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (3))){
var inst_27977 = (state_27980[(2)]);
var inst_27978 = cljs.core.async.close_BANG_.call(null,out);
var state_27980__$1 = (function (){var statearr_27988 = state_27980;
(statearr_27988[(9)] = inst_27977);

return statearr_27988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27980__$1,inst_27978);
} else {
if((state_val_27981 === (2))){
var inst_27957 = (state_27980[(8)]);
var inst_27959 = (inst_27957 < n);
var state_27980__$1 = state_27980;
if(cljs.core.truth_(inst_27959)){
var statearr_27989_28006 = state_27980__$1;
(statearr_27989_28006[(1)] = (4));

} else {
var statearr_27990_28007 = state_27980__$1;
(statearr_27990_28007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (11))){
var inst_27957 = (state_27980[(8)]);
var inst_27967 = (state_27980[(2)]);
var inst_27968 = (inst_27957 + (1));
var inst_27957__$1 = inst_27968;
var state_27980__$1 = (function (){var statearr_27991 = state_27980;
(statearr_27991[(8)] = inst_27957__$1);

(statearr_27991[(10)] = inst_27967);

return statearr_27991;
})();
var statearr_27992_28008 = state_27980__$1;
(statearr_27992_28008[(2)] = null);

(statearr_27992_28008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (9))){
var state_27980__$1 = state_27980;
var statearr_27993_28009 = state_27980__$1;
(statearr_27993_28009[(2)] = null);

(statearr_27993_28009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (5))){
var state_27980__$1 = state_27980;
var statearr_27994_28010 = state_27980__$1;
(statearr_27994_28010[(2)] = null);

(statearr_27994_28010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (10))){
var inst_27972 = (state_27980[(2)]);
var state_27980__$1 = state_27980;
var statearr_27995_28011 = state_27980__$1;
(statearr_27995_28011[(2)] = inst_27972);

(statearr_27995_28011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (8))){
var inst_27962 = (state_27980[(7)]);
var state_27980__$1 = state_27980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27980__$1,(11),out,inst_27962);
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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_27996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27996[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_27996[(1)] = (1));

return statearr_27996;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_27980){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_27980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e27997){if((e27997 instanceof Object)){
var ex__24478__auto__ = e27997;
var statearr_27998_28012 = state_27980;
(statearr_27998_28012[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28013 = state_27980;
state_27980 = G__28013;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_27980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_27980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_27999 = f__24642__auto__.call(null);
(statearr_27999[(6)] = c__24641__auto___28001);

return statearr_27999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28015 = (function (f,ch,meta28016){
this.f = f;
this.ch = ch;
this.meta28016 = meta28016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28017,meta28016__$1){
var self__ = this;
var _28017__$1 = this;
return (new cljs.core.async.t_cljs$core$async28015(self__.f,self__.ch,meta28016__$1));
}));

(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28017){
var self__ = this;
var _28017__$1 = this;
return self__.meta28016;
}));

(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28018 = (function (f,ch,meta28016,_,fn1,meta28019){
this.f = f;
this.ch = ch;
this.meta28016 = meta28016;
this._ = _;
this.fn1 = fn1;
this.meta28019 = meta28019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28020,meta28019__$1){
var self__ = this;
var _28020__$1 = this;
return (new cljs.core.async.t_cljs$core$async28018(self__.f,self__.ch,self__.meta28016,self__._,self__.fn1,meta28019__$1));
}));

(cljs.core.async.t_cljs$core$async28018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28020){
var self__ = this;
var _28020__$1 = this;
return self__.meta28019;
}));

(cljs.core.async.t_cljs$core$async28018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28014_SHARP_){
return f1.call(null,(((p1__28014_SHARP_ == null))?null:self__.f.call(null,p1__28014_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28016","meta28016",544631156,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28015","cljs.core.async/t_cljs$core$async28015",1797454121,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28019","meta28019",2108227040,null)], null);
}));

(cljs.core.async.t_cljs$core$async28018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28018");

(cljs.core.async.t_cljs$core$async28018.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28018.
 */
cljs.core.async.__GT_t_cljs$core$async28018 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28018(f__$1,ch__$1,meta28016__$1,___$2,fn1__$1,meta28019){
return (new cljs.core.async.t_cljs$core$async28018(f__$1,ch__$1,meta28016__$1,___$2,fn1__$1,meta28019));
});

}

return (new cljs.core.async.t_cljs$core$async28018(self__.f,self__.ch,self__.meta28016,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28016","meta28016",544631156,null)], null);
}));

(cljs.core.async.t_cljs$core$async28015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28015");

(cljs.core.async.t_cljs$core$async28015.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28015.
 */
cljs.core.async.__GT_t_cljs$core$async28015 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28015(f__$1,ch__$1,meta28016){
return (new cljs.core.async.t_cljs$core$async28015(f__$1,ch__$1,meta28016));
});

}

return (new cljs.core.async.t_cljs$core$async28015(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28021 = (function (f,ch,meta28022){
this.f = f;
this.ch = ch;
this.meta28022 = meta28022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28023,meta28022__$1){
var self__ = this;
var _28023__$1 = this;
return (new cljs.core.async.t_cljs$core$async28021(self__.f,self__.ch,meta28022__$1));
}));

(cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28023){
var self__ = this;
var _28023__$1 = this;
return self__.meta28022;
}));

(cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28022","meta28022",1277356855,null)], null);
}));

(cljs.core.async.t_cljs$core$async28021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28021");

(cljs.core.async.t_cljs$core$async28021.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28021.
 */
cljs.core.async.__GT_t_cljs$core$async28021 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28021(f__$1,ch__$1,meta28022){
return (new cljs.core.async.t_cljs$core$async28021(f__$1,ch__$1,meta28022));
});

}

return (new cljs.core.async.t_cljs$core$async28021(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28024 = (function (p,ch,meta28025){
this.p = p;
this.ch = ch;
this.meta28025 = meta28025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28026,meta28025__$1){
var self__ = this;
var _28026__$1 = this;
return (new cljs.core.async.t_cljs$core$async28024(self__.p,self__.ch,meta28025__$1));
}));

(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28026){
var self__ = this;
var _28026__$1 = this;
return self__.meta28025;
}));

(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28025","meta28025",-1877997968,null)], null);
}));

(cljs.core.async.t_cljs$core$async28024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28024");

(cljs.core.async.t_cljs$core$async28024.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28024.
 */
cljs.core.async.__GT_t_cljs$core$async28024 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28024(p__$1,ch__$1,meta28025){
return (new cljs.core.async.t_cljs$core$async28024(p__$1,ch__$1,meta28025));
});

}

return (new cljs.core.async.t_cljs$core$async28024(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28028 = arguments.length;
switch (G__28028) {
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
var c__24641__auto___28068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_28049){
var state_val_28050 = (state_28049[(1)]);
if((state_val_28050 === (7))){
var inst_28045 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28051_28069 = state_28049__$1;
(statearr_28051_28069[(2)] = inst_28045);

(statearr_28051_28069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (1))){
var state_28049__$1 = state_28049;
var statearr_28052_28070 = state_28049__$1;
(statearr_28052_28070[(2)] = null);

(statearr_28052_28070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (4))){
var inst_28031 = (state_28049[(7)]);
var inst_28031__$1 = (state_28049[(2)]);
var inst_28032 = (inst_28031__$1 == null);
var state_28049__$1 = (function (){var statearr_28053 = state_28049;
(statearr_28053[(7)] = inst_28031__$1);

return statearr_28053;
})();
if(cljs.core.truth_(inst_28032)){
var statearr_28054_28071 = state_28049__$1;
(statearr_28054_28071[(1)] = (5));

} else {
var statearr_28055_28072 = state_28049__$1;
(statearr_28055_28072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (6))){
var inst_28031 = (state_28049[(7)]);
var inst_28036 = p.call(null,inst_28031);
var state_28049__$1 = state_28049;
if(cljs.core.truth_(inst_28036)){
var statearr_28056_28073 = state_28049__$1;
(statearr_28056_28073[(1)] = (8));

} else {
var statearr_28057_28074 = state_28049__$1;
(statearr_28057_28074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (3))){
var inst_28047 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28049__$1,inst_28047);
} else {
if((state_val_28050 === (2))){
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28049__$1,(4),ch);
} else {
if((state_val_28050 === (11))){
var inst_28039 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28058_28075 = state_28049__$1;
(statearr_28058_28075[(2)] = inst_28039);

(statearr_28058_28075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (9))){
var state_28049__$1 = state_28049;
var statearr_28059_28076 = state_28049__$1;
(statearr_28059_28076[(2)] = null);

(statearr_28059_28076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (5))){
var inst_28034 = cljs.core.async.close_BANG_.call(null,out);
var state_28049__$1 = state_28049;
var statearr_28060_28077 = state_28049__$1;
(statearr_28060_28077[(2)] = inst_28034);

(statearr_28060_28077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (10))){
var inst_28042 = (state_28049[(2)]);
var state_28049__$1 = (function (){var statearr_28061 = state_28049;
(statearr_28061[(8)] = inst_28042);

return statearr_28061;
})();
var statearr_28062_28078 = state_28049__$1;
(statearr_28062_28078[(2)] = null);

(statearr_28062_28078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (8))){
var inst_28031 = (state_28049[(7)]);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28049__$1,(11),out,inst_28031);
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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_28063 = [null,null,null,null,null,null,null,null,null];
(statearr_28063[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_28063[(1)] = (1));

return statearr_28063;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_28049){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_28049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e28064){if((e28064 instanceof Object)){
var ex__24478__auto__ = e28064;
var statearr_28065_28079 = state_28049;
(statearr_28065_28079[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28080 = state_28049;
state_28049 = G__28080;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_28049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_28049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_28066 = f__24642__auto__.call(null);
(statearr_28066[(6)] = c__24641__auto___28068);

return statearr_28066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28082 = arguments.length;
switch (G__28082) {
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
var c__24641__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_28145){
var state_val_28146 = (state_28145[(1)]);
if((state_val_28146 === (7))){
var inst_28141 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28147_28185 = state_28145__$1;
(statearr_28147_28185[(2)] = inst_28141);

(statearr_28147_28185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (20))){
var inst_28111 = (state_28145[(7)]);
var inst_28122 = (state_28145[(2)]);
var inst_28123 = cljs.core.next.call(null,inst_28111);
var inst_28097 = inst_28123;
var inst_28098 = null;
var inst_28099 = (0);
var inst_28100 = (0);
var state_28145__$1 = (function (){var statearr_28148 = state_28145;
(statearr_28148[(8)] = inst_28099);

(statearr_28148[(9)] = inst_28097);

(statearr_28148[(10)] = inst_28098);

(statearr_28148[(11)] = inst_28100);

(statearr_28148[(12)] = inst_28122);

return statearr_28148;
})();
var statearr_28149_28186 = state_28145__$1;
(statearr_28149_28186[(2)] = null);

(statearr_28149_28186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (1))){
var state_28145__$1 = state_28145;
var statearr_28150_28187 = state_28145__$1;
(statearr_28150_28187[(2)] = null);

(statearr_28150_28187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (4))){
var inst_28086 = (state_28145[(13)]);
var inst_28086__$1 = (state_28145[(2)]);
var inst_28087 = (inst_28086__$1 == null);
var state_28145__$1 = (function (){var statearr_28151 = state_28145;
(statearr_28151[(13)] = inst_28086__$1);

return statearr_28151;
})();
if(cljs.core.truth_(inst_28087)){
var statearr_28152_28188 = state_28145__$1;
(statearr_28152_28188[(1)] = (5));

} else {
var statearr_28153_28189 = state_28145__$1;
(statearr_28153_28189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (15))){
var state_28145__$1 = state_28145;
var statearr_28157_28190 = state_28145__$1;
(statearr_28157_28190[(2)] = null);

(statearr_28157_28190[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (21))){
var state_28145__$1 = state_28145;
var statearr_28158_28191 = state_28145__$1;
(statearr_28158_28191[(2)] = null);

(statearr_28158_28191[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (13))){
var inst_28099 = (state_28145[(8)]);
var inst_28097 = (state_28145[(9)]);
var inst_28098 = (state_28145[(10)]);
var inst_28100 = (state_28145[(11)]);
var inst_28107 = (state_28145[(2)]);
var inst_28108 = (inst_28100 + (1));
var tmp28154 = inst_28099;
var tmp28155 = inst_28097;
var tmp28156 = inst_28098;
var inst_28097__$1 = tmp28155;
var inst_28098__$1 = tmp28156;
var inst_28099__$1 = tmp28154;
var inst_28100__$1 = inst_28108;
var state_28145__$1 = (function (){var statearr_28159 = state_28145;
(statearr_28159[(8)] = inst_28099__$1);

(statearr_28159[(9)] = inst_28097__$1);

(statearr_28159[(14)] = inst_28107);

(statearr_28159[(10)] = inst_28098__$1);

(statearr_28159[(11)] = inst_28100__$1);

return statearr_28159;
})();
var statearr_28160_28192 = state_28145__$1;
(statearr_28160_28192[(2)] = null);

(statearr_28160_28192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (22))){
var state_28145__$1 = state_28145;
var statearr_28161_28193 = state_28145__$1;
(statearr_28161_28193[(2)] = null);

(statearr_28161_28193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (6))){
var inst_28086 = (state_28145[(13)]);
var inst_28095 = f.call(null,inst_28086);
var inst_28096 = cljs.core.seq.call(null,inst_28095);
var inst_28097 = inst_28096;
var inst_28098 = null;
var inst_28099 = (0);
var inst_28100 = (0);
var state_28145__$1 = (function (){var statearr_28162 = state_28145;
(statearr_28162[(8)] = inst_28099);

(statearr_28162[(9)] = inst_28097);

(statearr_28162[(10)] = inst_28098);

(statearr_28162[(11)] = inst_28100);

return statearr_28162;
})();
var statearr_28163_28194 = state_28145__$1;
(statearr_28163_28194[(2)] = null);

(statearr_28163_28194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (17))){
var inst_28111 = (state_28145[(7)]);
var inst_28115 = cljs.core.chunk_first.call(null,inst_28111);
var inst_28116 = cljs.core.chunk_rest.call(null,inst_28111);
var inst_28117 = cljs.core.count.call(null,inst_28115);
var inst_28097 = inst_28116;
var inst_28098 = inst_28115;
var inst_28099 = inst_28117;
var inst_28100 = (0);
var state_28145__$1 = (function (){var statearr_28164 = state_28145;
(statearr_28164[(8)] = inst_28099);

(statearr_28164[(9)] = inst_28097);

(statearr_28164[(10)] = inst_28098);

(statearr_28164[(11)] = inst_28100);

return statearr_28164;
})();
var statearr_28165_28195 = state_28145__$1;
(statearr_28165_28195[(2)] = null);

(statearr_28165_28195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (3))){
var inst_28143 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28145__$1,inst_28143);
} else {
if((state_val_28146 === (12))){
var inst_28131 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28166_28196 = state_28145__$1;
(statearr_28166_28196[(2)] = inst_28131);

(statearr_28166_28196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (2))){
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(4),in$);
} else {
if((state_val_28146 === (23))){
var inst_28139 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28167_28197 = state_28145__$1;
(statearr_28167_28197[(2)] = inst_28139);

(statearr_28167_28197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (19))){
var inst_28126 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28168_28198 = state_28145__$1;
(statearr_28168_28198[(2)] = inst_28126);

(statearr_28168_28198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (11))){
var inst_28111 = (state_28145[(7)]);
var inst_28097 = (state_28145[(9)]);
var inst_28111__$1 = cljs.core.seq.call(null,inst_28097);
var state_28145__$1 = (function (){var statearr_28169 = state_28145;
(statearr_28169[(7)] = inst_28111__$1);

return statearr_28169;
})();
if(inst_28111__$1){
var statearr_28170_28199 = state_28145__$1;
(statearr_28170_28199[(1)] = (14));

} else {
var statearr_28171_28200 = state_28145__$1;
(statearr_28171_28200[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (9))){
var inst_28133 = (state_28145[(2)]);
var inst_28134 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28145__$1 = (function (){var statearr_28172 = state_28145;
(statearr_28172[(15)] = inst_28133);

return statearr_28172;
})();
if(cljs.core.truth_(inst_28134)){
var statearr_28173_28201 = state_28145__$1;
(statearr_28173_28201[(1)] = (21));

} else {
var statearr_28174_28202 = state_28145__$1;
(statearr_28174_28202[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (5))){
var inst_28089 = cljs.core.async.close_BANG_.call(null,out);
var state_28145__$1 = state_28145;
var statearr_28175_28203 = state_28145__$1;
(statearr_28175_28203[(2)] = inst_28089);

(statearr_28175_28203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (14))){
var inst_28111 = (state_28145[(7)]);
var inst_28113 = cljs.core.chunked_seq_QMARK_.call(null,inst_28111);
var state_28145__$1 = state_28145;
if(inst_28113){
var statearr_28176_28204 = state_28145__$1;
(statearr_28176_28204[(1)] = (17));

} else {
var statearr_28177_28205 = state_28145__$1;
(statearr_28177_28205[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (16))){
var inst_28129 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28178_28206 = state_28145__$1;
(statearr_28178_28206[(2)] = inst_28129);

(statearr_28178_28206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (10))){
var inst_28098 = (state_28145[(10)]);
var inst_28100 = (state_28145[(11)]);
var inst_28105 = cljs.core._nth.call(null,inst_28098,inst_28100);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28145__$1,(13),out,inst_28105);
} else {
if((state_val_28146 === (18))){
var inst_28111 = (state_28145[(7)]);
var inst_28120 = cljs.core.first.call(null,inst_28111);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28145__$1,(20),out,inst_28120);
} else {
if((state_val_28146 === (8))){
var inst_28099 = (state_28145[(8)]);
var inst_28100 = (state_28145[(11)]);
var inst_28102 = (inst_28100 < inst_28099);
var inst_28103 = inst_28102;
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28103)){
var statearr_28179_28207 = state_28145__$1;
(statearr_28179_28207[(1)] = (10));

} else {
var statearr_28180_28208 = state_28145__$1;
(statearr_28180_28208[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__24475__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24475__auto____0 = (function (){
var statearr_28181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28181[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24475__auto__);

(statearr_28181[(1)] = (1));

return statearr_28181;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24475__auto____1 = (function (state_28145){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_28145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e28182){if((e28182 instanceof Object)){
var ex__24478__auto__ = e28182;
var statearr_28183_28209 = state_28145;
(statearr_28183_28209[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28210 = state_28145;
state_28145 = G__28210;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24475__auto__ = function(state_28145){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24475__auto____1.call(this,state_28145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24475__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24475__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_28184 = f__24642__auto__.call(null);
(statearr_28184[(6)] = c__24641__auto__);

return statearr_28184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));

return c__24641__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28212 = arguments.length;
switch (G__28212) {
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
var G__28215 = arguments.length;
switch (G__28215) {
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
var G__28218 = arguments.length;
switch (G__28218) {
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
var c__24641__auto___28265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_28242){
var state_val_28243 = (state_28242[(1)]);
if((state_val_28243 === (7))){
var inst_28237 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28244_28266 = state_28242__$1;
(statearr_28244_28266[(2)] = inst_28237);

(statearr_28244_28266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (1))){
var inst_28219 = null;
var state_28242__$1 = (function (){var statearr_28245 = state_28242;
(statearr_28245[(7)] = inst_28219);

return statearr_28245;
})();
var statearr_28246_28267 = state_28242__$1;
(statearr_28246_28267[(2)] = null);

(statearr_28246_28267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (4))){
var inst_28222 = (state_28242[(8)]);
var inst_28222__$1 = (state_28242[(2)]);
var inst_28223 = (inst_28222__$1 == null);
var inst_28224 = cljs.core.not.call(null,inst_28223);
var state_28242__$1 = (function (){var statearr_28247 = state_28242;
(statearr_28247[(8)] = inst_28222__$1);

return statearr_28247;
})();
if(inst_28224){
var statearr_28248_28268 = state_28242__$1;
(statearr_28248_28268[(1)] = (5));

} else {
var statearr_28249_28269 = state_28242__$1;
(statearr_28249_28269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (6))){
var state_28242__$1 = state_28242;
var statearr_28250_28270 = state_28242__$1;
(statearr_28250_28270[(2)] = null);

(statearr_28250_28270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (3))){
var inst_28239 = (state_28242[(2)]);
var inst_28240 = cljs.core.async.close_BANG_.call(null,out);
var state_28242__$1 = (function (){var statearr_28251 = state_28242;
(statearr_28251[(9)] = inst_28239);

return statearr_28251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28242__$1,inst_28240);
} else {
if((state_val_28243 === (2))){
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(4),ch);
} else {
if((state_val_28243 === (11))){
var inst_28222 = (state_28242[(8)]);
var inst_28231 = (state_28242[(2)]);
var inst_28219 = inst_28222;
var state_28242__$1 = (function (){var statearr_28252 = state_28242;
(statearr_28252[(7)] = inst_28219);

(statearr_28252[(10)] = inst_28231);

return statearr_28252;
})();
var statearr_28253_28271 = state_28242__$1;
(statearr_28253_28271[(2)] = null);

(statearr_28253_28271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (9))){
var inst_28222 = (state_28242[(8)]);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28242__$1,(11),out,inst_28222);
} else {
if((state_val_28243 === (5))){
var inst_28219 = (state_28242[(7)]);
var inst_28222 = (state_28242[(8)]);
var inst_28226 = cljs.core._EQ_.call(null,inst_28222,inst_28219);
var state_28242__$1 = state_28242;
if(inst_28226){
var statearr_28255_28272 = state_28242__$1;
(statearr_28255_28272[(1)] = (8));

} else {
var statearr_28256_28273 = state_28242__$1;
(statearr_28256_28273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (10))){
var inst_28234 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28257_28274 = state_28242__$1;
(statearr_28257_28274[(2)] = inst_28234);

(statearr_28257_28274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (8))){
var inst_28219 = (state_28242[(7)]);
var tmp28254 = inst_28219;
var inst_28219__$1 = tmp28254;
var state_28242__$1 = (function (){var statearr_28258 = state_28242;
(statearr_28258[(7)] = inst_28219__$1);

return statearr_28258;
})();
var statearr_28259_28275 = state_28242__$1;
(statearr_28259_28275[(2)] = null);

(statearr_28259_28275[(1)] = (2));


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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_28260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28260[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_28260[(1)] = (1));

return statearr_28260;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_28242){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_28242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e28261){if((e28261 instanceof Object)){
var ex__24478__auto__ = e28261;
var statearr_28262_28276 = state_28242;
(statearr_28262_28276[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28277 = state_28242;
state_28242 = G__28277;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_28242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_28242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_28263 = f__24642__auto__.call(null);
(statearr_28263[(6)] = c__24641__auto___28265);

return statearr_28263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28279 = arguments.length;
switch (G__28279) {
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
var c__24641__auto___28345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_28317){
var state_val_28318 = (state_28317[(1)]);
if((state_val_28318 === (7))){
var inst_28313 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28319_28346 = state_28317__$1;
(statearr_28319_28346[(2)] = inst_28313);

(statearr_28319_28346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (1))){
var inst_28280 = (new Array(n));
var inst_28281 = inst_28280;
var inst_28282 = (0);
var state_28317__$1 = (function (){var statearr_28320 = state_28317;
(statearr_28320[(7)] = inst_28281);

(statearr_28320[(8)] = inst_28282);

return statearr_28320;
})();
var statearr_28321_28347 = state_28317__$1;
(statearr_28321_28347[(2)] = null);

(statearr_28321_28347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (4))){
var inst_28285 = (state_28317[(9)]);
var inst_28285__$1 = (state_28317[(2)]);
var inst_28286 = (inst_28285__$1 == null);
var inst_28287 = cljs.core.not.call(null,inst_28286);
var state_28317__$1 = (function (){var statearr_28322 = state_28317;
(statearr_28322[(9)] = inst_28285__$1);

return statearr_28322;
})();
if(inst_28287){
var statearr_28323_28348 = state_28317__$1;
(statearr_28323_28348[(1)] = (5));

} else {
var statearr_28324_28349 = state_28317__$1;
(statearr_28324_28349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (15))){
var inst_28307 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28325_28350 = state_28317__$1;
(statearr_28325_28350[(2)] = inst_28307);

(statearr_28325_28350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (13))){
var state_28317__$1 = state_28317;
var statearr_28326_28351 = state_28317__$1;
(statearr_28326_28351[(2)] = null);

(statearr_28326_28351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (6))){
var inst_28282 = (state_28317[(8)]);
var inst_28303 = (inst_28282 > (0));
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28303)){
var statearr_28327_28352 = state_28317__$1;
(statearr_28327_28352[(1)] = (12));

} else {
var statearr_28328_28353 = state_28317__$1;
(statearr_28328_28353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (3))){
var inst_28315 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28317__$1,inst_28315);
} else {
if((state_val_28318 === (12))){
var inst_28281 = (state_28317[(7)]);
var inst_28305 = cljs.core.vec.call(null,inst_28281);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28317__$1,(15),out,inst_28305);
} else {
if((state_val_28318 === (2))){
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(4),ch);
} else {
if((state_val_28318 === (11))){
var inst_28297 = (state_28317[(2)]);
var inst_28298 = (new Array(n));
var inst_28281 = inst_28298;
var inst_28282 = (0);
var state_28317__$1 = (function (){var statearr_28329 = state_28317;
(statearr_28329[(10)] = inst_28297);

(statearr_28329[(7)] = inst_28281);

(statearr_28329[(8)] = inst_28282);

return statearr_28329;
})();
var statearr_28330_28354 = state_28317__$1;
(statearr_28330_28354[(2)] = null);

(statearr_28330_28354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (9))){
var inst_28281 = (state_28317[(7)]);
var inst_28295 = cljs.core.vec.call(null,inst_28281);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28317__$1,(11),out,inst_28295);
} else {
if((state_val_28318 === (5))){
var inst_28285 = (state_28317[(9)]);
var inst_28281 = (state_28317[(7)]);
var inst_28282 = (state_28317[(8)]);
var inst_28290 = (state_28317[(11)]);
var inst_28289 = (inst_28281[inst_28282] = inst_28285);
var inst_28290__$1 = (inst_28282 + (1));
var inst_28291 = (inst_28290__$1 < n);
var state_28317__$1 = (function (){var statearr_28331 = state_28317;
(statearr_28331[(12)] = inst_28289);

(statearr_28331[(11)] = inst_28290__$1);

return statearr_28331;
})();
if(cljs.core.truth_(inst_28291)){
var statearr_28332_28355 = state_28317__$1;
(statearr_28332_28355[(1)] = (8));

} else {
var statearr_28333_28356 = state_28317__$1;
(statearr_28333_28356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (14))){
var inst_28310 = (state_28317[(2)]);
var inst_28311 = cljs.core.async.close_BANG_.call(null,out);
var state_28317__$1 = (function (){var statearr_28335 = state_28317;
(statearr_28335[(13)] = inst_28310);

return statearr_28335;
})();
var statearr_28336_28357 = state_28317__$1;
(statearr_28336_28357[(2)] = inst_28311);

(statearr_28336_28357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (10))){
var inst_28301 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28337_28358 = state_28317__$1;
(statearr_28337_28358[(2)] = inst_28301);

(statearr_28337_28358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (8))){
var inst_28281 = (state_28317[(7)]);
var inst_28290 = (state_28317[(11)]);
var tmp28334 = inst_28281;
var inst_28281__$1 = tmp28334;
var inst_28282 = inst_28290;
var state_28317__$1 = (function (){var statearr_28338 = state_28317;
(statearr_28338[(7)] = inst_28281__$1);

(statearr_28338[(8)] = inst_28282);

return statearr_28338;
})();
var statearr_28339_28359 = state_28317__$1;
(statearr_28339_28359[(2)] = null);

(statearr_28339_28359[(1)] = (2));


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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_28340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28340[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_28340[(1)] = (1));

return statearr_28340;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_28317){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_28317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e28341){if((e28341 instanceof Object)){
var ex__24478__auto__ = e28341;
var statearr_28342_28360 = state_28317;
(statearr_28342_28360[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28361 = state_28317;
state_28317 = G__28361;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_28317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_28317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_28343 = f__24642__auto__.call(null);
(statearr_28343[(6)] = c__24641__auto___28345);

return statearr_28343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28363 = arguments.length;
switch (G__28363) {
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
var c__24641__auto___28433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_28405){
var state_val_28406 = (state_28405[(1)]);
if((state_val_28406 === (7))){
var inst_28401 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28407_28434 = state_28405__$1;
(statearr_28407_28434[(2)] = inst_28401);

(statearr_28407_28434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (1))){
var inst_28364 = [];
var inst_28365 = inst_28364;
var inst_28366 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28405__$1 = (function (){var statearr_28408 = state_28405;
(statearr_28408[(7)] = inst_28366);

(statearr_28408[(8)] = inst_28365);

return statearr_28408;
})();
var statearr_28409_28435 = state_28405__$1;
(statearr_28409_28435[(2)] = null);

(statearr_28409_28435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (4))){
var inst_28369 = (state_28405[(9)]);
var inst_28369__$1 = (state_28405[(2)]);
var inst_28370 = (inst_28369__$1 == null);
var inst_28371 = cljs.core.not.call(null,inst_28370);
var state_28405__$1 = (function (){var statearr_28410 = state_28405;
(statearr_28410[(9)] = inst_28369__$1);

return statearr_28410;
})();
if(inst_28371){
var statearr_28411_28436 = state_28405__$1;
(statearr_28411_28436[(1)] = (5));

} else {
var statearr_28412_28437 = state_28405__$1;
(statearr_28412_28437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (15))){
var inst_28395 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28413_28438 = state_28405__$1;
(statearr_28413_28438[(2)] = inst_28395);

(statearr_28413_28438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (13))){
var state_28405__$1 = state_28405;
var statearr_28414_28439 = state_28405__$1;
(statearr_28414_28439[(2)] = null);

(statearr_28414_28439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (6))){
var inst_28365 = (state_28405[(8)]);
var inst_28390 = inst_28365.length;
var inst_28391 = (inst_28390 > (0));
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28391)){
var statearr_28415_28440 = state_28405__$1;
(statearr_28415_28440[(1)] = (12));

} else {
var statearr_28416_28441 = state_28405__$1;
(statearr_28416_28441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (3))){
var inst_28403 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28405__$1,inst_28403);
} else {
if((state_val_28406 === (12))){
var inst_28365 = (state_28405[(8)]);
var inst_28393 = cljs.core.vec.call(null,inst_28365);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28405__$1,(15),out,inst_28393);
} else {
if((state_val_28406 === (2))){
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28405__$1,(4),ch);
} else {
if((state_val_28406 === (11))){
var inst_28373 = (state_28405[(10)]);
var inst_28369 = (state_28405[(9)]);
var inst_28383 = (state_28405[(2)]);
var inst_28384 = [];
var inst_28385 = inst_28384.push(inst_28369);
var inst_28365 = inst_28384;
var inst_28366 = inst_28373;
var state_28405__$1 = (function (){var statearr_28417 = state_28405;
(statearr_28417[(11)] = inst_28385);

(statearr_28417[(7)] = inst_28366);

(statearr_28417[(8)] = inst_28365);

(statearr_28417[(12)] = inst_28383);

return statearr_28417;
})();
var statearr_28418_28442 = state_28405__$1;
(statearr_28418_28442[(2)] = null);

(statearr_28418_28442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (9))){
var inst_28365 = (state_28405[(8)]);
var inst_28381 = cljs.core.vec.call(null,inst_28365);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28405__$1,(11),out,inst_28381);
} else {
if((state_val_28406 === (5))){
var inst_28366 = (state_28405[(7)]);
var inst_28373 = (state_28405[(10)]);
var inst_28369 = (state_28405[(9)]);
var inst_28373__$1 = f.call(null,inst_28369);
var inst_28374 = cljs.core._EQ_.call(null,inst_28373__$1,inst_28366);
var inst_28375 = cljs.core.keyword_identical_QMARK_.call(null,inst_28366,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28376 = ((inst_28374) || (inst_28375));
var state_28405__$1 = (function (){var statearr_28419 = state_28405;
(statearr_28419[(10)] = inst_28373__$1);

return statearr_28419;
})();
if(cljs.core.truth_(inst_28376)){
var statearr_28420_28443 = state_28405__$1;
(statearr_28420_28443[(1)] = (8));

} else {
var statearr_28421_28444 = state_28405__$1;
(statearr_28421_28444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (14))){
var inst_28398 = (state_28405[(2)]);
var inst_28399 = cljs.core.async.close_BANG_.call(null,out);
var state_28405__$1 = (function (){var statearr_28423 = state_28405;
(statearr_28423[(13)] = inst_28398);

return statearr_28423;
})();
var statearr_28424_28445 = state_28405__$1;
(statearr_28424_28445[(2)] = inst_28399);

(statearr_28424_28445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (10))){
var inst_28388 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28425_28446 = state_28405__$1;
(statearr_28425_28446[(2)] = inst_28388);

(statearr_28425_28446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (8))){
var inst_28373 = (state_28405[(10)]);
var inst_28365 = (state_28405[(8)]);
var inst_28369 = (state_28405[(9)]);
var inst_28378 = inst_28365.push(inst_28369);
var tmp28422 = inst_28365;
var inst_28365__$1 = tmp28422;
var inst_28366 = inst_28373;
var state_28405__$1 = (function (){var statearr_28426 = state_28405;
(statearr_28426[(7)] = inst_28366);

(statearr_28426[(8)] = inst_28365__$1);

(statearr_28426[(14)] = inst_28378);

return statearr_28426;
})();
var statearr_28427_28447 = state_28405__$1;
(statearr_28427_28447[(2)] = null);

(statearr_28427_28447[(1)] = (2));


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
var cljs$core$async$state_machine__24475__auto__ = null;
var cljs$core$async$state_machine__24475__auto____0 = (function (){
var statearr_28428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28428[(0)] = cljs$core$async$state_machine__24475__auto__);

(statearr_28428[(1)] = (1));

return statearr_28428;
});
var cljs$core$async$state_machine__24475__auto____1 = (function (state_28405){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_28405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e28429){if((e28429 instanceof Object)){
var ex__24478__auto__ = e28429;
var statearr_28430_28448 = state_28405;
(statearr_28430_28448[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28449 = state_28405;
state_28405 = G__28449;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
cljs$core$async$state_machine__24475__auto__ = function(state_28405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24475__auto____1.call(this,state_28405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24475__auto____0;
cljs$core$async$state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24475__auto____1;
return cljs$core$async$state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_28431 = f__24642__auto__.call(null);
(statearr_28431[(6)] = c__24641__auto___28433);

return statearr_28431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
