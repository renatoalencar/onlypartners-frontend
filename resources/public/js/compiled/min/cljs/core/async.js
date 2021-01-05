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
var G__26562 = arguments.length;
switch (G__26562) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26563 = (function (f,blockable,meta26564){
this.f = f;
this.blockable = blockable;
this.meta26564 = meta26564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26565,meta26564__$1){
var self__ = this;
var _26565__$1 = this;
return (new cljs.core.async.t_cljs$core$async26563(self__.f,self__.blockable,meta26564__$1));
}));

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26565){
var self__ = this;
var _26565__$1 = this;
return self__.meta26564;
}));

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26564","meta26564",-914886241,null)], null);
}));

(cljs.core.async.t_cljs$core$async26563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26563");

(cljs.core.async.t_cljs$core$async26563.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26563.
 */
cljs.core.async.__GT_t_cljs$core$async26563 = (function cljs$core$async$__GT_t_cljs$core$async26563(f__$1,blockable__$1,meta26564){
return (new cljs.core.async.t_cljs$core$async26563(f__$1,blockable__$1,meta26564));
});

}

return (new cljs.core.async.t_cljs$core$async26563(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26569 = arguments.length;
switch (G__26569) {
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
var G__26572 = arguments.length;
switch (G__26572) {
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
var G__26575 = arguments.length;
switch (G__26575) {
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
var val_26577 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26577);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26577);
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
var G__26579 = arguments.length;
switch (G__26579) {
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
var n__4613__auto___26581 = n;
var x_26582 = (0);
while(true){
if((x_26582 < n__4613__auto___26581)){
(a[x_26582] = x_26582);

var G__26583 = (x_26582 + (1));
x_26582 = G__26583;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26584 = (function (flag,meta26585){
this.flag = flag;
this.meta26585 = meta26585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26586,meta26585__$1){
var self__ = this;
var _26586__$1 = this;
return (new cljs.core.async.t_cljs$core$async26584(self__.flag,meta26585__$1));
}));

(cljs.core.async.t_cljs$core$async26584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26586){
var self__ = this;
var _26586__$1 = this;
return self__.meta26585;
}));

(cljs.core.async.t_cljs$core$async26584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26585","meta26585",1972144503,null)], null);
}));

(cljs.core.async.t_cljs$core$async26584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26584");

(cljs.core.async.t_cljs$core$async26584.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26584.
 */
cljs.core.async.__GT_t_cljs$core$async26584 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26584(flag__$1,meta26585){
return (new cljs.core.async.t_cljs$core$async26584(flag__$1,meta26585));
});

}

return (new cljs.core.async.t_cljs$core$async26584(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26587 = (function (flag,cb,meta26588){
this.flag = flag;
this.cb = cb;
this.meta26588 = meta26588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26589,meta26588__$1){
var self__ = this;
var _26589__$1 = this;
return (new cljs.core.async.t_cljs$core$async26587(self__.flag,self__.cb,meta26588__$1));
}));

(cljs.core.async.t_cljs$core$async26587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26589){
var self__ = this;
var _26589__$1 = this;
return self__.meta26588;
}));

(cljs.core.async.t_cljs$core$async26587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26588","meta26588",-1767506832,null)], null);
}));

(cljs.core.async.t_cljs$core$async26587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26587");

(cljs.core.async.t_cljs$core$async26587.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26587.
 */
cljs.core.async.__GT_t_cljs$core$async26587 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26587(flag__$1,cb__$1,meta26588){
return (new cljs.core.async.t_cljs$core$async26587(flag__$1,cb__$1,meta26588));
});

}

return (new cljs.core.async.t_cljs$core$async26587(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26590_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26590_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26591_SHARP_,port], null));
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
var G__26592 = (i + (1));
i = G__26592;
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
var len__4736__auto___26598 = arguments.length;
var i__4737__auto___26599 = (0);
while(true){
if((i__4737__auto___26599 < len__4736__auto___26598)){
args__4742__auto__.push((arguments[i__4737__auto___26599]));

var G__26600 = (i__4737__auto___26599 + (1));
i__4737__auto___26599 = G__26600;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26595){
var map__26596 = p__26595;
var map__26596__$1 = (((((!((map__26596 == null))))?(((((map__26596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26596):map__26596);
var opts = map__26596__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26593){
var G__26594 = cljs.core.first.call(null,seq26593);
var seq26593__$1 = cljs.core.next.call(null,seq26593);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26594,seq26593__$1);
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
var G__26602 = arguments.length;
switch (G__26602) {
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
var c__24626__auto___26648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_26626){
var state_val_26627 = (state_26626[(1)]);
if((state_val_26627 === (7))){
var inst_26622 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26628_26649 = state_26626__$1;
(statearr_26628_26649[(2)] = inst_26622);

(statearr_26628_26649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (1))){
var state_26626__$1 = state_26626;
var statearr_26629_26650 = state_26626__$1;
(statearr_26629_26650[(2)] = null);

(statearr_26629_26650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (4))){
var inst_26605 = (state_26626[(7)]);
var inst_26605__$1 = (state_26626[(2)]);
var inst_26606 = (inst_26605__$1 == null);
var state_26626__$1 = (function (){var statearr_26630 = state_26626;
(statearr_26630[(7)] = inst_26605__$1);

return statearr_26630;
})();
if(cljs.core.truth_(inst_26606)){
var statearr_26631_26651 = state_26626__$1;
(statearr_26631_26651[(1)] = (5));

} else {
var statearr_26632_26652 = state_26626__$1;
(statearr_26632_26652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (13))){
var state_26626__$1 = state_26626;
var statearr_26633_26653 = state_26626__$1;
(statearr_26633_26653[(2)] = null);

(statearr_26633_26653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (6))){
var inst_26605 = (state_26626[(7)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26626__$1,(11),to,inst_26605);
} else {
if((state_val_26627 === (3))){
var inst_26624 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26626__$1,inst_26624);
} else {
if((state_val_26627 === (12))){
var state_26626__$1 = state_26626;
var statearr_26634_26654 = state_26626__$1;
(statearr_26634_26654[(2)] = null);

(statearr_26634_26654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (2))){
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(4),from);
} else {
if((state_val_26627 === (11))){
var inst_26615 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26615)){
var statearr_26635_26655 = state_26626__$1;
(statearr_26635_26655[(1)] = (12));

} else {
var statearr_26636_26656 = state_26626__$1;
(statearr_26636_26656[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (9))){
var state_26626__$1 = state_26626;
var statearr_26637_26657 = state_26626__$1;
(statearr_26637_26657[(2)] = null);

(statearr_26637_26657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (5))){
var state_26626__$1 = state_26626;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26638_26658 = state_26626__$1;
(statearr_26638_26658[(1)] = (8));

} else {
var statearr_26639_26659 = state_26626__$1;
(statearr_26639_26659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (14))){
var inst_26620 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26640_26660 = state_26626__$1;
(statearr_26640_26660[(2)] = inst_26620);

(statearr_26640_26660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (10))){
var inst_26612 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26641_26661 = state_26626__$1;
(statearr_26641_26661[(2)] = inst_26612);

(statearr_26641_26661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (8))){
var inst_26609 = cljs.core.async.close_BANG_.call(null,to);
var state_26626__$1 = state_26626;
var statearr_26642_26662 = state_26626__$1;
(statearr_26642_26662[(2)] = inst_26609);

(statearr_26642_26662[(1)] = (10));


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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_26643 = [null,null,null,null,null,null,null,null];
(statearr_26643[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_26643[(1)] = (1));

return statearr_26643;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_26626){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_26626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e26644){if((e26644 instanceof Object)){
var ex__24463__auto__ = e26644;
var statearr_26645_26663 = state_26626;
(statearr_26645_26663[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26664 = state_26626;
state_26626 = G__26664;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_26626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_26626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_26646 = f__24627__auto__.call(null);
(statearr_26646[(6)] = c__24626__auto___26648);

return statearr_26646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
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
var process = (function (p__26665){
var vec__26666 = p__26665;
var v = cljs.core.nth.call(null,vec__26666,(0),null);
var p = cljs.core.nth.call(null,vec__26666,(1),null);
var job = vec__26666;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24626__auto___26837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_26673){
var state_val_26674 = (state_26673[(1)]);
if((state_val_26674 === (1))){
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26673__$1,(2),res,v);
} else {
if((state_val_26674 === (2))){
var inst_26670 = (state_26673[(2)]);
var inst_26671 = cljs.core.async.close_BANG_.call(null,res);
var state_26673__$1 = (function (){var statearr_26675 = state_26673;
(statearr_26675[(7)] = inst_26670);

return statearr_26675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26673__$1,inst_26671);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0 = (function (){
var statearr_26676 = [null,null,null,null,null,null,null,null];
(statearr_26676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__);

(statearr_26676[(1)] = (1));

return statearr_26676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1 = (function (state_26673){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_26673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e26677){if((e26677 instanceof Object)){
var ex__24463__auto__ = e26677;
var statearr_26678_26838 = state_26673;
(statearr_26678_26838[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26839 = state_26673;
state_26673 = G__26839;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = function(state_26673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1.call(this,state_26673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_26679 = f__24627__auto__.call(null);
(statearr_26679[(6)] = c__24626__auto___26837);

return statearr_26679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26680){
var vec__26681 = p__26680;
var v = cljs.core.nth.call(null,vec__26681,(0),null);
var p = cljs.core.nth.call(null,vec__26681,(1),null);
var job = vec__26681;
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
var n__4613__auto___26840 = n;
var __26841 = (0);
while(true){
if((__26841 < n__4613__auto___26840)){
var G__26684_26842 = type;
var G__26684_26843__$1 = (((G__26684_26842 instanceof cljs.core.Keyword))?G__26684_26842.fqn:null);
switch (G__26684_26843__$1) {
case "compute":
var c__24626__auto___26845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26841,c__24626__auto___26845,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async){
return (function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = ((function (__26841,c__24626__auto___26845,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async){
return (function (state_26697){
var state_val_26698 = (state_26697[(1)]);
if((state_val_26698 === (1))){
var state_26697__$1 = state_26697;
var statearr_26699_26846 = state_26697__$1;
(statearr_26699_26846[(2)] = null);

(statearr_26699_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (2))){
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26697__$1,(4),jobs);
} else {
if((state_val_26698 === (3))){
var inst_26695 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26697__$1,inst_26695);
} else {
if((state_val_26698 === (4))){
var inst_26687 = (state_26697[(2)]);
var inst_26688 = process.call(null,inst_26687);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26688)){
var statearr_26700_26847 = state_26697__$1;
(statearr_26700_26847[(1)] = (5));

} else {
var statearr_26701_26848 = state_26697__$1;
(statearr_26701_26848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (5))){
var state_26697__$1 = state_26697;
var statearr_26702_26849 = state_26697__$1;
(statearr_26702_26849[(2)] = null);

(statearr_26702_26849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (6))){
var state_26697__$1 = state_26697;
var statearr_26703_26850 = state_26697__$1;
(statearr_26703_26850[(2)] = null);

(statearr_26703_26850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (7))){
var inst_26693 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26704_26851 = state_26697__$1;
(statearr_26704_26851[(2)] = inst_26693);

(statearr_26704_26851[(1)] = (3));


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
});})(__26841,c__24626__auto___26845,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async))
;
return ((function (__26841,switch__24459__auto__,c__24626__auto___26845,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0 = (function (){
var statearr_26705 = [null,null,null,null,null,null,null];
(statearr_26705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__);

(statearr_26705[(1)] = (1));

return statearr_26705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1 = (function (state_26697){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_26697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e26706){if((e26706 instanceof Object)){
var ex__24463__auto__ = e26706;
var statearr_26707_26852 = state_26697;
(statearr_26707_26852[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26853 = state_26697;
state_26697 = G__26853;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = function(state_26697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1.call(this,state_26697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__;
})()
;})(__26841,switch__24459__auto__,c__24626__auto___26845,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async))
})();
var state__24628__auto__ = (function (){var statearr_26708 = f__24627__auto__.call(null);
(statearr_26708[(6)] = c__24626__auto___26845);

return statearr_26708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
});})(__26841,c__24626__auto___26845,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async))
);


break;
case "async":
var c__24626__auto___26854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26841,c__24626__auto___26854,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async){
return (function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = ((function (__26841,c__24626__auto___26854,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async){
return (function (state_26721){
var state_val_26722 = (state_26721[(1)]);
if((state_val_26722 === (1))){
var state_26721__$1 = state_26721;
var statearr_26723_26855 = state_26721__$1;
(statearr_26723_26855[(2)] = null);

(statearr_26723_26855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (2))){
var state_26721__$1 = state_26721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26721__$1,(4),jobs);
} else {
if((state_val_26722 === (3))){
var inst_26719 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26721__$1,inst_26719);
} else {
if((state_val_26722 === (4))){
var inst_26711 = (state_26721[(2)]);
var inst_26712 = async.call(null,inst_26711);
var state_26721__$1 = state_26721;
if(cljs.core.truth_(inst_26712)){
var statearr_26724_26856 = state_26721__$1;
(statearr_26724_26856[(1)] = (5));

} else {
var statearr_26725_26857 = state_26721__$1;
(statearr_26725_26857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (5))){
var state_26721__$1 = state_26721;
var statearr_26726_26858 = state_26721__$1;
(statearr_26726_26858[(2)] = null);

(statearr_26726_26858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (6))){
var state_26721__$1 = state_26721;
var statearr_26727_26859 = state_26721__$1;
(statearr_26727_26859[(2)] = null);

(statearr_26727_26859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (7))){
var inst_26717 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
var statearr_26728_26860 = state_26721__$1;
(statearr_26728_26860[(2)] = inst_26717);

(statearr_26728_26860[(1)] = (3));


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
});})(__26841,c__24626__auto___26854,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async))
;
return ((function (__26841,switch__24459__auto__,c__24626__auto___26854,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0 = (function (){
var statearr_26729 = [null,null,null,null,null,null,null];
(statearr_26729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__);

(statearr_26729[(1)] = (1));

return statearr_26729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1 = (function (state_26721){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_26721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e26730){if((e26730 instanceof Object)){
var ex__24463__auto__ = e26730;
var statearr_26731_26861 = state_26721;
(statearr_26731_26861[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26862 = state_26721;
state_26721 = G__26862;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = function(state_26721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1.call(this,state_26721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__;
})()
;})(__26841,switch__24459__auto__,c__24626__auto___26854,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async))
})();
var state__24628__auto__ = (function (){var statearr_26732 = f__24627__auto__.call(null);
(statearr_26732[(6)] = c__24626__auto___26854);

return statearr_26732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
});})(__26841,c__24626__auto___26854,G__26684_26842,G__26684_26843__$1,n__4613__auto___26840,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26684_26843__$1)].join('')));

}

var G__26863 = (__26841 + (1));
__26841 = G__26863;
continue;
} else {
}
break;
}

var c__24626__auto___26864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_26754){
var state_val_26755 = (state_26754[(1)]);
if((state_val_26755 === (7))){
var inst_26750 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26756_26865 = state_26754__$1;
(statearr_26756_26865[(2)] = inst_26750);

(statearr_26756_26865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (1))){
var state_26754__$1 = state_26754;
var statearr_26757_26866 = state_26754__$1;
(statearr_26757_26866[(2)] = null);

(statearr_26757_26866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (4))){
var inst_26735 = (state_26754[(7)]);
var inst_26735__$1 = (state_26754[(2)]);
var inst_26736 = (inst_26735__$1 == null);
var state_26754__$1 = (function (){var statearr_26758 = state_26754;
(statearr_26758[(7)] = inst_26735__$1);

return statearr_26758;
})();
if(cljs.core.truth_(inst_26736)){
var statearr_26759_26867 = state_26754__$1;
(statearr_26759_26867[(1)] = (5));

} else {
var statearr_26760_26868 = state_26754__$1;
(statearr_26760_26868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (6))){
var inst_26735 = (state_26754[(7)]);
var inst_26740 = (state_26754[(8)]);
var inst_26740__$1 = cljs.core.async.chan.call(null,(1));
var inst_26741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26742 = [inst_26735,inst_26740__$1];
var inst_26743 = (new cljs.core.PersistentVector(null,2,(5),inst_26741,inst_26742,null));
var state_26754__$1 = (function (){var statearr_26761 = state_26754;
(statearr_26761[(8)] = inst_26740__$1);

return statearr_26761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26754__$1,(8),jobs,inst_26743);
} else {
if((state_val_26755 === (3))){
var inst_26752 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26754__$1,inst_26752);
} else {
if((state_val_26755 === (2))){
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(4),from);
} else {
if((state_val_26755 === (9))){
var inst_26747 = (state_26754[(2)]);
var state_26754__$1 = (function (){var statearr_26762 = state_26754;
(statearr_26762[(9)] = inst_26747);

return statearr_26762;
})();
var statearr_26763_26869 = state_26754__$1;
(statearr_26763_26869[(2)] = null);

(statearr_26763_26869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (5))){
var inst_26738 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26754__$1 = state_26754;
var statearr_26764_26870 = state_26754__$1;
(statearr_26764_26870[(2)] = inst_26738);

(statearr_26764_26870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (8))){
var inst_26740 = (state_26754[(8)]);
var inst_26745 = (state_26754[(2)]);
var state_26754__$1 = (function (){var statearr_26765 = state_26754;
(statearr_26765[(10)] = inst_26745);

return statearr_26765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26754__$1,(9),results,inst_26740);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0 = (function (){
var statearr_26766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__);

(statearr_26766[(1)] = (1));

return statearr_26766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1 = (function (state_26754){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_26754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e26767){if((e26767 instanceof Object)){
var ex__24463__auto__ = e26767;
var statearr_26768_26871 = state_26754;
(statearr_26768_26871[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26872 = state_26754;
state_26754 = G__26872;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = function(state_26754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1.call(this,state_26754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_26769 = f__24627__auto__.call(null);
(statearr_26769[(6)] = c__24626__auto___26864);

return statearr_26769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));


var c__24626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_26807){
var state_val_26808 = (state_26807[(1)]);
if((state_val_26808 === (7))){
var inst_26803 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26809_26873 = state_26807__$1;
(statearr_26809_26873[(2)] = inst_26803);

(statearr_26809_26873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (20))){
var state_26807__$1 = state_26807;
var statearr_26810_26874 = state_26807__$1;
(statearr_26810_26874[(2)] = null);

(statearr_26810_26874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (1))){
var state_26807__$1 = state_26807;
var statearr_26811_26875 = state_26807__$1;
(statearr_26811_26875[(2)] = null);

(statearr_26811_26875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (4))){
var inst_26772 = (state_26807[(7)]);
var inst_26772__$1 = (state_26807[(2)]);
var inst_26773 = (inst_26772__$1 == null);
var state_26807__$1 = (function (){var statearr_26812 = state_26807;
(statearr_26812[(7)] = inst_26772__$1);

return statearr_26812;
})();
if(cljs.core.truth_(inst_26773)){
var statearr_26813_26876 = state_26807__$1;
(statearr_26813_26876[(1)] = (5));

} else {
var statearr_26814_26877 = state_26807__$1;
(statearr_26814_26877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (15))){
var inst_26785 = (state_26807[(8)]);
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26807__$1,(18),to,inst_26785);
} else {
if((state_val_26808 === (21))){
var inst_26798 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26815_26878 = state_26807__$1;
(statearr_26815_26878[(2)] = inst_26798);

(statearr_26815_26878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (13))){
var inst_26800 = (state_26807[(2)]);
var state_26807__$1 = (function (){var statearr_26816 = state_26807;
(statearr_26816[(9)] = inst_26800);

return statearr_26816;
})();
var statearr_26817_26879 = state_26807__$1;
(statearr_26817_26879[(2)] = null);

(statearr_26817_26879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (6))){
var inst_26772 = (state_26807[(7)]);
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26807__$1,(11),inst_26772);
} else {
if((state_val_26808 === (17))){
var inst_26793 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
if(cljs.core.truth_(inst_26793)){
var statearr_26818_26880 = state_26807__$1;
(statearr_26818_26880[(1)] = (19));

} else {
var statearr_26819_26881 = state_26807__$1;
(statearr_26819_26881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (3))){
var inst_26805 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26807__$1,inst_26805);
} else {
if((state_val_26808 === (12))){
var inst_26782 = (state_26807[(10)]);
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26807__$1,(14),inst_26782);
} else {
if((state_val_26808 === (2))){
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26807__$1,(4),results);
} else {
if((state_val_26808 === (19))){
var state_26807__$1 = state_26807;
var statearr_26820_26882 = state_26807__$1;
(statearr_26820_26882[(2)] = null);

(statearr_26820_26882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (11))){
var inst_26782 = (state_26807[(2)]);
var state_26807__$1 = (function (){var statearr_26821 = state_26807;
(statearr_26821[(10)] = inst_26782);

return statearr_26821;
})();
var statearr_26822_26883 = state_26807__$1;
(statearr_26822_26883[(2)] = null);

(statearr_26822_26883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (9))){
var state_26807__$1 = state_26807;
var statearr_26823_26884 = state_26807__$1;
(statearr_26823_26884[(2)] = null);

(statearr_26823_26884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (5))){
var state_26807__$1 = state_26807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26824_26885 = state_26807__$1;
(statearr_26824_26885[(1)] = (8));

} else {
var statearr_26825_26886 = state_26807__$1;
(statearr_26825_26886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (14))){
var inst_26785 = (state_26807[(8)]);
var inst_26785__$1 = (state_26807[(2)]);
var inst_26786 = (inst_26785__$1 == null);
var inst_26787 = cljs.core.not.call(null,inst_26786);
var state_26807__$1 = (function (){var statearr_26826 = state_26807;
(statearr_26826[(8)] = inst_26785__$1);

return statearr_26826;
})();
if(inst_26787){
var statearr_26827_26887 = state_26807__$1;
(statearr_26827_26887[(1)] = (15));

} else {
var statearr_26828_26888 = state_26807__$1;
(statearr_26828_26888[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (16))){
var state_26807__$1 = state_26807;
var statearr_26829_26889 = state_26807__$1;
(statearr_26829_26889[(2)] = false);

(statearr_26829_26889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (10))){
var inst_26779 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26830_26890 = state_26807__$1;
(statearr_26830_26890[(2)] = inst_26779);

(statearr_26830_26890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (18))){
var inst_26790 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26831_26891 = state_26807__$1;
(statearr_26831_26891[(2)] = inst_26790);

(statearr_26831_26891[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (8))){
var inst_26776 = cljs.core.async.close_BANG_.call(null,to);
var state_26807__$1 = state_26807;
var statearr_26832_26892 = state_26807__$1;
(statearr_26832_26892[(2)] = inst_26776);

(statearr_26832_26892[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0 = (function (){
var statearr_26833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__);

(statearr_26833[(1)] = (1));

return statearr_26833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1 = (function (state_26807){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_26807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e26834){if((e26834 instanceof Object)){
var ex__24463__auto__ = e26834;
var statearr_26835_26893 = state_26807;
(statearr_26835_26893[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26894 = state_26807;
state_26807 = G__26894;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__ = function(state_26807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1.call(this,state_26807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_26836 = f__24627__auto__.call(null);
(statearr_26836[(6)] = c__24626__auto__);

return statearr_26836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));

return c__24626__auto__;
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
var G__26896 = arguments.length;
switch (G__26896) {
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
var G__26899 = arguments.length;
switch (G__26899) {
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
var G__26902 = arguments.length;
switch (G__26902) {
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
var c__24626__auto___26951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_26928){
var state_val_26929 = (state_26928[(1)]);
if((state_val_26929 === (7))){
var inst_26924 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
var statearr_26930_26952 = state_26928__$1;
(statearr_26930_26952[(2)] = inst_26924);

(statearr_26930_26952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (1))){
var state_26928__$1 = state_26928;
var statearr_26931_26953 = state_26928__$1;
(statearr_26931_26953[(2)] = null);

(statearr_26931_26953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (4))){
var inst_26905 = (state_26928[(7)]);
var inst_26905__$1 = (state_26928[(2)]);
var inst_26906 = (inst_26905__$1 == null);
var state_26928__$1 = (function (){var statearr_26932 = state_26928;
(statearr_26932[(7)] = inst_26905__$1);

return statearr_26932;
})();
if(cljs.core.truth_(inst_26906)){
var statearr_26933_26954 = state_26928__$1;
(statearr_26933_26954[(1)] = (5));

} else {
var statearr_26934_26955 = state_26928__$1;
(statearr_26934_26955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (13))){
var state_26928__$1 = state_26928;
var statearr_26935_26956 = state_26928__$1;
(statearr_26935_26956[(2)] = null);

(statearr_26935_26956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (6))){
var inst_26905 = (state_26928[(7)]);
var inst_26911 = p.call(null,inst_26905);
var state_26928__$1 = state_26928;
if(cljs.core.truth_(inst_26911)){
var statearr_26936_26957 = state_26928__$1;
(statearr_26936_26957[(1)] = (9));

} else {
var statearr_26937_26958 = state_26928__$1;
(statearr_26937_26958[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (3))){
var inst_26926 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26928__$1,inst_26926);
} else {
if((state_val_26929 === (12))){
var state_26928__$1 = state_26928;
var statearr_26938_26959 = state_26928__$1;
(statearr_26938_26959[(2)] = null);

(statearr_26938_26959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (2))){
var state_26928__$1 = state_26928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26928__$1,(4),ch);
} else {
if((state_val_26929 === (11))){
var inst_26905 = (state_26928[(7)]);
var inst_26915 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26928__$1,(8),inst_26915,inst_26905);
} else {
if((state_val_26929 === (9))){
var state_26928__$1 = state_26928;
var statearr_26939_26960 = state_26928__$1;
(statearr_26939_26960[(2)] = tc);

(statearr_26939_26960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (5))){
var inst_26908 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26909 = cljs.core.async.close_BANG_.call(null,fc);
var state_26928__$1 = (function (){var statearr_26940 = state_26928;
(statearr_26940[(8)] = inst_26908);

return statearr_26940;
})();
var statearr_26941_26961 = state_26928__$1;
(statearr_26941_26961[(2)] = inst_26909);

(statearr_26941_26961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (14))){
var inst_26922 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
var statearr_26942_26962 = state_26928__$1;
(statearr_26942_26962[(2)] = inst_26922);

(statearr_26942_26962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (10))){
var state_26928__$1 = state_26928;
var statearr_26943_26963 = state_26928__$1;
(statearr_26943_26963[(2)] = fc);

(statearr_26943_26963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (8))){
var inst_26917 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
if(cljs.core.truth_(inst_26917)){
var statearr_26944_26964 = state_26928__$1;
(statearr_26944_26964[(1)] = (12));

} else {
var statearr_26945_26965 = state_26928__$1;
(statearr_26945_26965[(1)] = (13));

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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_26946 = [null,null,null,null,null,null,null,null,null];
(statearr_26946[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_26946[(1)] = (1));

return statearr_26946;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_26928){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_26928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e26947){if((e26947 instanceof Object)){
var ex__24463__auto__ = e26947;
var statearr_26948_26966 = state_26928;
(statearr_26948_26966[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26967 = state_26928;
state_26928 = G__26967;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_26928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_26928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_26949 = f__24627__auto__.call(null);
(statearr_26949[(6)] = c__24626__auto___26951);

return statearr_26949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
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
var c__24626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_26988){
var state_val_26989 = (state_26988[(1)]);
if((state_val_26989 === (7))){
var inst_26984 = (state_26988[(2)]);
var state_26988__$1 = state_26988;
var statearr_26990_27008 = state_26988__$1;
(statearr_26990_27008[(2)] = inst_26984);

(statearr_26990_27008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26989 === (1))){
var inst_26968 = init;
var state_26988__$1 = (function (){var statearr_26991 = state_26988;
(statearr_26991[(7)] = inst_26968);

return statearr_26991;
})();
var statearr_26992_27009 = state_26988__$1;
(statearr_26992_27009[(2)] = null);

(statearr_26992_27009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26989 === (4))){
var inst_26971 = (state_26988[(8)]);
var inst_26971__$1 = (state_26988[(2)]);
var inst_26972 = (inst_26971__$1 == null);
var state_26988__$1 = (function (){var statearr_26993 = state_26988;
(statearr_26993[(8)] = inst_26971__$1);

return statearr_26993;
})();
if(cljs.core.truth_(inst_26972)){
var statearr_26994_27010 = state_26988__$1;
(statearr_26994_27010[(1)] = (5));

} else {
var statearr_26995_27011 = state_26988__$1;
(statearr_26995_27011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26989 === (6))){
var inst_26968 = (state_26988[(7)]);
var inst_26975 = (state_26988[(9)]);
var inst_26971 = (state_26988[(8)]);
var inst_26975__$1 = f.call(null,inst_26968,inst_26971);
var inst_26976 = cljs.core.reduced_QMARK_.call(null,inst_26975__$1);
var state_26988__$1 = (function (){var statearr_26996 = state_26988;
(statearr_26996[(9)] = inst_26975__$1);

return statearr_26996;
})();
if(inst_26976){
var statearr_26997_27012 = state_26988__$1;
(statearr_26997_27012[(1)] = (8));

} else {
var statearr_26998_27013 = state_26988__$1;
(statearr_26998_27013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26989 === (3))){
var inst_26986 = (state_26988[(2)]);
var state_26988__$1 = state_26988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26988__$1,inst_26986);
} else {
if((state_val_26989 === (2))){
var state_26988__$1 = state_26988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26988__$1,(4),ch);
} else {
if((state_val_26989 === (9))){
var inst_26975 = (state_26988[(9)]);
var inst_26968 = inst_26975;
var state_26988__$1 = (function (){var statearr_26999 = state_26988;
(statearr_26999[(7)] = inst_26968);

return statearr_26999;
})();
var statearr_27000_27014 = state_26988__$1;
(statearr_27000_27014[(2)] = null);

(statearr_27000_27014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26989 === (5))){
var inst_26968 = (state_26988[(7)]);
var state_26988__$1 = state_26988;
var statearr_27001_27015 = state_26988__$1;
(statearr_27001_27015[(2)] = inst_26968);

(statearr_27001_27015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26989 === (10))){
var inst_26982 = (state_26988[(2)]);
var state_26988__$1 = state_26988;
var statearr_27002_27016 = state_26988__$1;
(statearr_27002_27016[(2)] = inst_26982);

(statearr_27002_27016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26989 === (8))){
var inst_26975 = (state_26988[(9)]);
var inst_26978 = cljs.core.deref.call(null,inst_26975);
var state_26988__$1 = state_26988;
var statearr_27003_27017 = state_26988__$1;
(statearr_27003_27017[(2)] = inst_26978);

(statearr_27003_27017[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__24460__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24460__auto____0 = (function (){
var statearr_27004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27004[(0)] = cljs$core$async$reduce_$_state_machine__24460__auto__);

(statearr_27004[(1)] = (1));

return statearr_27004;
});
var cljs$core$async$reduce_$_state_machine__24460__auto____1 = (function (state_26988){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_26988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27005){if((e27005 instanceof Object)){
var ex__24463__auto__ = e27005;
var statearr_27006_27018 = state_26988;
(statearr_27006_27018[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27019 = state_26988;
state_26988 = G__27019;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24460__auto__ = function(state_26988){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24460__auto____1.call(this,state_26988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24460__auto____0;
cljs$core$async$reduce_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24460__auto____1;
return cljs$core$async$reduce_$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27007 = f__24627__auto__.call(null);
(statearr_27007[(6)] = c__24626__auto__);

return statearr_27007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));

return c__24626__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_27025){
var state_val_27026 = (state_27025[(1)]);
if((state_val_27026 === (1))){
var inst_27020 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27025__$1 = state_27025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27025__$1,(2),inst_27020);
} else {
if((state_val_27026 === (2))){
var inst_27022 = (state_27025[(2)]);
var inst_27023 = f__$1.call(null,inst_27022);
var state_27025__$1 = state_27025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27025__$1,inst_27023);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24460__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24460__auto____0 = (function (){
var statearr_27027 = [null,null,null,null,null,null,null];
(statearr_27027[(0)] = cljs$core$async$transduce_$_state_machine__24460__auto__);

(statearr_27027[(1)] = (1));

return statearr_27027;
});
var cljs$core$async$transduce_$_state_machine__24460__auto____1 = (function (state_27025){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_27025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27028){if((e27028 instanceof Object)){
var ex__24463__auto__ = e27028;
var statearr_27029_27031 = state_27025;
(statearr_27029_27031[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27032 = state_27025;
state_27025 = G__27032;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24460__auto__ = function(state_27025){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24460__auto____1.call(this,state_27025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24460__auto____0;
cljs$core$async$transduce_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24460__auto____1;
return cljs$core$async$transduce_$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27030 = f__24627__auto__.call(null);
(statearr_27030[(6)] = c__24626__auto__);

return statearr_27030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));

return c__24626__auto__;
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
var G__27034 = arguments.length;
switch (G__27034) {
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
var c__24626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_27059){
var state_val_27060 = (state_27059[(1)]);
if((state_val_27060 === (7))){
var inst_27041 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27061_27082 = state_27059__$1;
(statearr_27061_27082[(2)] = inst_27041);

(statearr_27061_27082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (1))){
var inst_27035 = cljs.core.seq.call(null,coll);
var inst_27036 = inst_27035;
var state_27059__$1 = (function (){var statearr_27062 = state_27059;
(statearr_27062[(7)] = inst_27036);

return statearr_27062;
})();
var statearr_27063_27083 = state_27059__$1;
(statearr_27063_27083[(2)] = null);

(statearr_27063_27083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (4))){
var inst_27036 = (state_27059[(7)]);
var inst_27039 = cljs.core.first.call(null,inst_27036);
var state_27059__$1 = state_27059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27059__$1,(7),ch,inst_27039);
} else {
if((state_val_27060 === (13))){
var inst_27053 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27064_27084 = state_27059__$1;
(statearr_27064_27084[(2)] = inst_27053);

(statearr_27064_27084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (6))){
var inst_27044 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
if(cljs.core.truth_(inst_27044)){
var statearr_27065_27085 = state_27059__$1;
(statearr_27065_27085[(1)] = (8));

} else {
var statearr_27066_27086 = state_27059__$1;
(statearr_27066_27086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (3))){
var inst_27057 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27059__$1,inst_27057);
} else {
if((state_val_27060 === (12))){
var state_27059__$1 = state_27059;
var statearr_27067_27087 = state_27059__$1;
(statearr_27067_27087[(2)] = null);

(statearr_27067_27087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (2))){
var inst_27036 = (state_27059[(7)]);
var state_27059__$1 = state_27059;
if(cljs.core.truth_(inst_27036)){
var statearr_27068_27088 = state_27059__$1;
(statearr_27068_27088[(1)] = (4));

} else {
var statearr_27069_27089 = state_27059__$1;
(statearr_27069_27089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (11))){
var inst_27050 = cljs.core.async.close_BANG_.call(null,ch);
var state_27059__$1 = state_27059;
var statearr_27070_27090 = state_27059__$1;
(statearr_27070_27090[(2)] = inst_27050);

(statearr_27070_27090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (9))){
var state_27059__$1 = state_27059;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27071_27091 = state_27059__$1;
(statearr_27071_27091[(1)] = (11));

} else {
var statearr_27072_27092 = state_27059__$1;
(statearr_27072_27092[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (5))){
var inst_27036 = (state_27059[(7)]);
var state_27059__$1 = state_27059;
var statearr_27073_27093 = state_27059__$1;
(statearr_27073_27093[(2)] = inst_27036);

(statearr_27073_27093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (10))){
var inst_27055 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27074_27094 = state_27059__$1;
(statearr_27074_27094[(2)] = inst_27055);

(statearr_27074_27094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (8))){
var inst_27036 = (state_27059[(7)]);
var inst_27046 = cljs.core.next.call(null,inst_27036);
var inst_27036__$1 = inst_27046;
var state_27059__$1 = (function (){var statearr_27075 = state_27059;
(statearr_27075[(7)] = inst_27036__$1);

return statearr_27075;
})();
var statearr_27076_27095 = state_27059__$1;
(statearr_27076_27095[(2)] = null);

(statearr_27076_27095[(1)] = (2));


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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_27077 = [null,null,null,null,null,null,null,null];
(statearr_27077[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_27077[(1)] = (1));

return statearr_27077;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_27059){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_27059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27078){if((e27078 instanceof Object)){
var ex__24463__auto__ = e27078;
var statearr_27079_27096 = state_27059;
(statearr_27079_27096[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27097 = state_27059;
state_27059 = G__27097;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_27059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_27059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27080 = f__24627__auto__.call(null);
(statearr_27080[(6)] = c__24626__auto__);

return statearr_27080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));

return c__24626__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_27098 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_27098.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27099 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_27099.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27100 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_27100.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27101 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_27101.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27102 = (function (ch,cs,meta27103){
this.ch = ch;
this.cs = cs;
this.meta27103 = meta27103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27104,meta27103__$1){
var self__ = this;
var _27104__$1 = this;
return (new cljs.core.async.t_cljs$core$async27102(self__.ch,self__.cs,meta27103__$1));
}));

(cljs.core.async.t_cljs$core$async27102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27104){
var self__ = this;
var _27104__$1 = this;
return self__.meta27103;
}));

(cljs.core.async.t_cljs$core$async27102.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27102.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27102.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27102.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27102.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27103","meta27103",959451345,null)], null);
}));

(cljs.core.async.t_cljs$core$async27102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27102");

(cljs.core.async.t_cljs$core$async27102.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27102.
 */
cljs.core.async.__GT_t_cljs$core$async27102 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27102(ch__$1,cs__$1,meta27103){
return (new cljs.core.async.t_cljs$core$async27102(ch__$1,cs__$1,meta27103));
});

}

return (new cljs.core.async.t_cljs$core$async27102(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24626__auto___27324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_27239){
var state_val_27240 = (state_27239[(1)]);
if((state_val_27240 === (7))){
var inst_27235 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27241_27325 = state_27239__$1;
(statearr_27241_27325[(2)] = inst_27235);

(statearr_27241_27325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (20))){
var inst_27138 = (state_27239[(7)]);
var inst_27150 = cljs.core.first.call(null,inst_27138);
var inst_27151 = cljs.core.nth.call(null,inst_27150,(0),null);
var inst_27152 = cljs.core.nth.call(null,inst_27150,(1),null);
var state_27239__$1 = (function (){var statearr_27242 = state_27239;
(statearr_27242[(8)] = inst_27151);

return statearr_27242;
})();
if(cljs.core.truth_(inst_27152)){
var statearr_27243_27326 = state_27239__$1;
(statearr_27243_27326[(1)] = (22));

} else {
var statearr_27244_27327 = state_27239__$1;
(statearr_27244_27327[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (27))){
var inst_27182 = (state_27239[(9)]);
var inst_27180 = (state_27239[(10)]);
var inst_27107 = (state_27239[(11)]);
var inst_27187 = (state_27239[(12)]);
var inst_27187__$1 = cljs.core._nth.call(null,inst_27180,inst_27182);
var inst_27188 = cljs.core.async.put_BANG_.call(null,inst_27187__$1,inst_27107,done);
var state_27239__$1 = (function (){var statearr_27245 = state_27239;
(statearr_27245[(12)] = inst_27187__$1);

return statearr_27245;
})();
if(cljs.core.truth_(inst_27188)){
var statearr_27246_27328 = state_27239__$1;
(statearr_27246_27328[(1)] = (30));

} else {
var statearr_27247_27329 = state_27239__$1;
(statearr_27247_27329[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (1))){
var state_27239__$1 = state_27239;
var statearr_27248_27330 = state_27239__$1;
(statearr_27248_27330[(2)] = null);

(statearr_27248_27330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (24))){
var inst_27138 = (state_27239[(7)]);
var inst_27157 = (state_27239[(2)]);
var inst_27158 = cljs.core.next.call(null,inst_27138);
var inst_27116 = inst_27158;
var inst_27117 = null;
var inst_27118 = (0);
var inst_27119 = (0);
var state_27239__$1 = (function (){var statearr_27249 = state_27239;
(statearr_27249[(13)] = inst_27119);

(statearr_27249[(14)] = inst_27116);

(statearr_27249[(15)] = inst_27118);

(statearr_27249[(16)] = inst_27117);

(statearr_27249[(17)] = inst_27157);

return statearr_27249;
})();
var statearr_27250_27331 = state_27239__$1;
(statearr_27250_27331[(2)] = null);

(statearr_27250_27331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (39))){
var state_27239__$1 = state_27239;
var statearr_27254_27332 = state_27239__$1;
(statearr_27254_27332[(2)] = null);

(statearr_27254_27332[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (4))){
var inst_27107 = (state_27239[(11)]);
var inst_27107__$1 = (state_27239[(2)]);
var inst_27108 = (inst_27107__$1 == null);
var state_27239__$1 = (function (){var statearr_27255 = state_27239;
(statearr_27255[(11)] = inst_27107__$1);

return statearr_27255;
})();
if(cljs.core.truth_(inst_27108)){
var statearr_27256_27333 = state_27239__$1;
(statearr_27256_27333[(1)] = (5));

} else {
var statearr_27257_27334 = state_27239__$1;
(statearr_27257_27334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (15))){
var inst_27119 = (state_27239[(13)]);
var inst_27116 = (state_27239[(14)]);
var inst_27118 = (state_27239[(15)]);
var inst_27117 = (state_27239[(16)]);
var inst_27134 = (state_27239[(2)]);
var inst_27135 = (inst_27119 + (1));
var tmp27251 = inst_27116;
var tmp27252 = inst_27118;
var tmp27253 = inst_27117;
var inst_27116__$1 = tmp27251;
var inst_27117__$1 = tmp27253;
var inst_27118__$1 = tmp27252;
var inst_27119__$1 = inst_27135;
var state_27239__$1 = (function (){var statearr_27258 = state_27239;
(statearr_27258[(13)] = inst_27119__$1);

(statearr_27258[(14)] = inst_27116__$1);

(statearr_27258[(15)] = inst_27118__$1);

(statearr_27258[(16)] = inst_27117__$1);

(statearr_27258[(18)] = inst_27134);

return statearr_27258;
})();
var statearr_27259_27335 = state_27239__$1;
(statearr_27259_27335[(2)] = null);

(statearr_27259_27335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (21))){
var inst_27161 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27263_27336 = state_27239__$1;
(statearr_27263_27336[(2)] = inst_27161);

(statearr_27263_27336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (31))){
var inst_27187 = (state_27239[(12)]);
var inst_27191 = done.call(null,null);
var inst_27192 = cljs.core.async.untap_STAR_.call(null,m,inst_27187);
var state_27239__$1 = (function (){var statearr_27264 = state_27239;
(statearr_27264[(19)] = inst_27191);

return statearr_27264;
})();
var statearr_27265_27337 = state_27239__$1;
(statearr_27265_27337[(2)] = inst_27192);

(statearr_27265_27337[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (32))){
var inst_27179 = (state_27239[(20)]);
var inst_27182 = (state_27239[(9)]);
var inst_27180 = (state_27239[(10)]);
var inst_27181 = (state_27239[(21)]);
var inst_27194 = (state_27239[(2)]);
var inst_27195 = (inst_27182 + (1));
var tmp27260 = inst_27179;
var tmp27261 = inst_27180;
var tmp27262 = inst_27181;
var inst_27179__$1 = tmp27260;
var inst_27180__$1 = tmp27261;
var inst_27181__$1 = tmp27262;
var inst_27182__$1 = inst_27195;
var state_27239__$1 = (function (){var statearr_27266 = state_27239;
(statearr_27266[(20)] = inst_27179__$1);

(statearr_27266[(9)] = inst_27182__$1);

(statearr_27266[(10)] = inst_27180__$1);

(statearr_27266[(22)] = inst_27194);

(statearr_27266[(21)] = inst_27181__$1);

return statearr_27266;
})();
var statearr_27267_27338 = state_27239__$1;
(statearr_27267_27338[(2)] = null);

(statearr_27267_27338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (40))){
var inst_27207 = (state_27239[(23)]);
var inst_27211 = done.call(null,null);
var inst_27212 = cljs.core.async.untap_STAR_.call(null,m,inst_27207);
var state_27239__$1 = (function (){var statearr_27268 = state_27239;
(statearr_27268[(24)] = inst_27211);

return statearr_27268;
})();
var statearr_27269_27339 = state_27239__$1;
(statearr_27269_27339[(2)] = inst_27212);

(statearr_27269_27339[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (33))){
var inst_27198 = (state_27239[(25)]);
var inst_27200 = cljs.core.chunked_seq_QMARK_.call(null,inst_27198);
var state_27239__$1 = state_27239;
if(inst_27200){
var statearr_27270_27340 = state_27239__$1;
(statearr_27270_27340[(1)] = (36));

} else {
var statearr_27271_27341 = state_27239__$1;
(statearr_27271_27341[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (13))){
var inst_27128 = (state_27239[(26)]);
var inst_27131 = cljs.core.async.close_BANG_.call(null,inst_27128);
var state_27239__$1 = state_27239;
var statearr_27272_27342 = state_27239__$1;
(statearr_27272_27342[(2)] = inst_27131);

(statearr_27272_27342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (22))){
var inst_27151 = (state_27239[(8)]);
var inst_27154 = cljs.core.async.close_BANG_.call(null,inst_27151);
var state_27239__$1 = state_27239;
var statearr_27273_27343 = state_27239__$1;
(statearr_27273_27343[(2)] = inst_27154);

(statearr_27273_27343[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (36))){
var inst_27198 = (state_27239[(25)]);
var inst_27202 = cljs.core.chunk_first.call(null,inst_27198);
var inst_27203 = cljs.core.chunk_rest.call(null,inst_27198);
var inst_27204 = cljs.core.count.call(null,inst_27202);
var inst_27179 = inst_27203;
var inst_27180 = inst_27202;
var inst_27181 = inst_27204;
var inst_27182 = (0);
var state_27239__$1 = (function (){var statearr_27274 = state_27239;
(statearr_27274[(20)] = inst_27179);

(statearr_27274[(9)] = inst_27182);

(statearr_27274[(10)] = inst_27180);

(statearr_27274[(21)] = inst_27181);

return statearr_27274;
})();
var statearr_27275_27344 = state_27239__$1;
(statearr_27275_27344[(2)] = null);

(statearr_27275_27344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (41))){
var inst_27198 = (state_27239[(25)]);
var inst_27214 = (state_27239[(2)]);
var inst_27215 = cljs.core.next.call(null,inst_27198);
var inst_27179 = inst_27215;
var inst_27180 = null;
var inst_27181 = (0);
var inst_27182 = (0);
var state_27239__$1 = (function (){var statearr_27276 = state_27239;
(statearr_27276[(20)] = inst_27179);

(statearr_27276[(9)] = inst_27182);

(statearr_27276[(10)] = inst_27180);

(statearr_27276[(27)] = inst_27214);

(statearr_27276[(21)] = inst_27181);

return statearr_27276;
})();
var statearr_27277_27345 = state_27239__$1;
(statearr_27277_27345[(2)] = null);

(statearr_27277_27345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (43))){
var state_27239__$1 = state_27239;
var statearr_27278_27346 = state_27239__$1;
(statearr_27278_27346[(2)] = null);

(statearr_27278_27346[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (29))){
var inst_27223 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27279_27347 = state_27239__$1;
(statearr_27279_27347[(2)] = inst_27223);

(statearr_27279_27347[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (44))){
var inst_27232 = (state_27239[(2)]);
var state_27239__$1 = (function (){var statearr_27280 = state_27239;
(statearr_27280[(28)] = inst_27232);

return statearr_27280;
})();
var statearr_27281_27348 = state_27239__$1;
(statearr_27281_27348[(2)] = null);

(statearr_27281_27348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (6))){
var inst_27171 = (state_27239[(29)]);
var inst_27170 = cljs.core.deref.call(null,cs);
var inst_27171__$1 = cljs.core.keys.call(null,inst_27170);
var inst_27172 = cljs.core.count.call(null,inst_27171__$1);
var inst_27173 = cljs.core.reset_BANG_.call(null,dctr,inst_27172);
var inst_27178 = cljs.core.seq.call(null,inst_27171__$1);
var inst_27179 = inst_27178;
var inst_27180 = null;
var inst_27181 = (0);
var inst_27182 = (0);
var state_27239__$1 = (function (){var statearr_27282 = state_27239;
(statearr_27282[(20)] = inst_27179);

(statearr_27282[(9)] = inst_27182);

(statearr_27282[(30)] = inst_27173);

(statearr_27282[(10)] = inst_27180);

(statearr_27282[(29)] = inst_27171__$1);

(statearr_27282[(21)] = inst_27181);

return statearr_27282;
})();
var statearr_27283_27349 = state_27239__$1;
(statearr_27283_27349[(2)] = null);

(statearr_27283_27349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (28))){
var inst_27179 = (state_27239[(20)]);
var inst_27198 = (state_27239[(25)]);
var inst_27198__$1 = cljs.core.seq.call(null,inst_27179);
var state_27239__$1 = (function (){var statearr_27284 = state_27239;
(statearr_27284[(25)] = inst_27198__$1);

return statearr_27284;
})();
if(inst_27198__$1){
var statearr_27285_27350 = state_27239__$1;
(statearr_27285_27350[(1)] = (33));

} else {
var statearr_27286_27351 = state_27239__$1;
(statearr_27286_27351[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (25))){
var inst_27182 = (state_27239[(9)]);
var inst_27181 = (state_27239[(21)]);
var inst_27184 = (inst_27182 < inst_27181);
var inst_27185 = inst_27184;
var state_27239__$1 = state_27239;
if(cljs.core.truth_(inst_27185)){
var statearr_27287_27352 = state_27239__$1;
(statearr_27287_27352[(1)] = (27));

} else {
var statearr_27288_27353 = state_27239__$1;
(statearr_27288_27353[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (34))){
var state_27239__$1 = state_27239;
var statearr_27289_27354 = state_27239__$1;
(statearr_27289_27354[(2)] = null);

(statearr_27289_27354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (17))){
var state_27239__$1 = state_27239;
var statearr_27290_27355 = state_27239__$1;
(statearr_27290_27355[(2)] = null);

(statearr_27290_27355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (3))){
var inst_27237 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27239__$1,inst_27237);
} else {
if((state_val_27240 === (12))){
var inst_27166 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27291_27356 = state_27239__$1;
(statearr_27291_27356[(2)] = inst_27166);

(statearr_27291_27356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (2))){
var state_27239__$1 = state_27239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27239__$1,(4),ch);
} else {
if((state_val_27240 === (23))){
var state_27239__$1 = state_27239;
var statearr_27292_27357 = state_27239__$1;
(statearr_27292_27357[(2)] = null);

(statearr_27292_27357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (35))){
var inst_27221 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27293_27358 = state_27239__$1;
(statearr_27293_27358[(2)] = inst_27221);

(statearr_27293_27358[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (19))){
var inst_27138 = (state_27239[(7)]);
var inst_27142 = cljs.core.chunk_first.call(null,inst_27138);
var inst_27143 = cljs.core.chunk_rest.call(null,inst_27138);
var inst_27144 = cljs.core.count.call(null,inst_27142);
var inst_27116 = inst_27143;
var inst_27117 = inst_27142;
var inst_27118 = inst_27144;
var inst_27119 = (0);
var state_27239__$1 = (function (){var statearr_27294 = state_27239;
(statearr_27294[(13)] = inst_27119);

(statearr_27294[(14)] = inst_27116);

(statearr_27294[(15)] = inst_27118);

(statearr_27294[(16)] = inst_27117);

return statearr_27294;
})();
var statearr_27295_27359 = state_27239__$1;
(statearr_27295_27359[(2)] = null);

(statearr_27295_27359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (11))){
var inst_27116 = (state_27239[(14)]);
var inst_27138 = (state_27239[(7)]);
var inst_27138__$1 = cljs.core.seq.call(null,inst_27116);
var state_27239__$1 = (function (){var statearr_27296 = state_27239;
(statearr_27296[(7)] = inst_27138__$1);

return statearr_27296;
})();
if(inst_27138__$1){
var statearr_27297_27360 = state_27239__$1;
(statearr_27297_27360[(1)] = (16));

} else {
var statearr_27298_27361 = state_27239__$1;
(statearr_27298_27361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (9))){
var inst_27168 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27299_27362 = state_27239__$1;
(statearr_27299_27362[(2)] = inst_27168);

(statearr_27299_27362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (5))){
var inst_27114 = cljs.core.deref.call(null,cs);
var inst_27115 = cljs.core.seq.call(null,inst_27114);
var inst_27116 = inst_27115;
var inst_27117 = null;
var inst_27118 = (0);
var inst_27119 = (0);
var state_27239__$1 = (function (){var statearr_27300 = state_27239;
(statearr_27300[(13)] = inst_27119);

(statearr_27300[(14)] = inst_27116);

(statearr_27300[(15)] = inst_27118);

(statearr_27300[(16)] = inst_27117);

return statearr_27300;
})();
var statearr_27301_27363 = state_27239__$1;
(statearr_27301_27363[(2)] = null);

(statearr_27301_27363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (14))){
var state_27239__$1 = state_27239;
var statearr_27302_27364 = state_27239__$1;
(statearr_27302_27364[(2)] = null);

(statearr_27302_27364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (45))){
var inst_27229 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27303_27365 = state_27239__$1;
(statearr_27303_27365[(2)] = inst_27229);

(statearr_27303_27365[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (26))){
var inst_27171 = (state_27239[(29)]);
var inst_27225 = (state_27239[(2)]);
var inst_27226 = cljs.core.seq.call(null,inst_27171);
var state_27239__$1 = (function (){var statearr_27304 = state_27239;
(statearr_27304[(31)] = inst_27225);

return statearr_27304;
})();
if(inst_27226){
var statearr_27305_27366 = state_27239__$1;
(statearr_27305_27366[(1)] = (42));

} else {
var statearr_27306_27367 = state_27239__$1;
(statearr_27306_27367[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (16))){
var inst_27138 = (state_27239[(7)]);
var inst_27140 = cljs.core.chunked_seq_QMARK_.call(null,inst_27138);
var state_27239__$1 = state_27239;
if(inst_27140){
var statearr_27307_27368 = state_27239__$1;
(statearr_27307_27368[(1)] = (19));

} else {
var statearr_27308_27369 = state_27239__$1;
(statearr_27308_27369[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (38))){
var inst_27218 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27309_27370 = state_27239__$1;
(statearr_27309_27370[(2)] = inst_27218);

(statearr_27309_27370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (30))){
var state_27239__$1 = state_27239;
var statearr_27310_27371 = state_27239__$1;
(statearr_27310_27371[(2)] = null);

(statearr_27310_27371[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (10))){
var inst_27119 = (state_27239[(13)]);
var inst_27117 = (state_27239[(16)]);
var inst_27127 = cljs.core._nth.call(null,inst_27117,inst_27119);
var inst_27128 = cljs.core.nth.call(null,inst_27127,(0),null);
var inst_27129 = cljs.core.nth.call(null,inst_27127,(1),null);
var state_27239__$1 = (function (){var statearr_27311 = state_27239;
(statearr_27311[(26)] = inst_27128);

return statearr_27311;
})();
if(cljs.core.truth_(inst_27129)){
var statearr_27312_27372 = state_27239__$1;
(statearr_27312_27372[(1)] = (13));

} else {
var statearr_27313_27373 = state_27239__$1;
(statearr_27313_27373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (18))){
var inst_27164 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27314_27374 = state_27239__$1;
(statearr_27314_27374[(2)] = inst_27164);

(statearr_27314_27374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (42))){
var state_27239__$1 = state_27239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27239__$1,(45),dchan);
} else {
if((state_val_27240 === (37))){
var inst_27107 = (state_27239[(11)]);
var inst_27207 = (state_27239[(23)]);
var inst_27198 = (state_27239[(25)]);
var inst_27207__$1 = cljs.core.first.call(null,inst_27198);
var inst_27208 = cljs.core.async.put_BANG_.call(null,inst_27207__$1,inst_27107,done);
var state_27239__$1 = (function (){var statearr_27315 = state_27239;
(statearr_27315[(23)] = inst_27207__$1);

return statearr_27315;
})();
if(cljs.core.truth_(inst_27208)){
var statearr_27316_27375 = state_27239__$1;
(statearr_27316_27375[(1)] = (39));

} else {
var statearr_27317_27376 = state_27239__$1;
(statearr_27317_27376[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (8))){
var inst_27119 = (state_27239[(13)]);
var inst_27118 = (state_27239[(15)]);
var inst_27121 = (inst_27119 < inst_27118);
var inst_27122 = inst_27121;
var state_27239__$1 = state_27239;
if(cljs.core.truth_(inst_27122)){
var statearr_27318_27377 = state_27239__$1;
(statearr_27318_27377[(1)] = (10));

} else {
var statearr_27319_27378 = state_27239__$1;
(statearr_27319_27378[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24460__auto__ = null;
var cljs$core$async$mult_$_state_machine__24460__auto____0 = (function (){
var statearr_27320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27320[(0)] = cljs$core$async$mult_$_state_machine__24460__auto__);

(statearr_27320[(1)] = (1));

return statearr_27320;
});
var cljs$core$async$mult_$_state_machine__24460__auto____1 = (function (state_27239){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_27239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27321){if((e27321 instanceof Object)){
var ex__24463__auto__ = e27321;
var statearr_27322_27379 = state_27239;
(statearr_27322_27379[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27380 = state_27239;
state_27239 = G__27380;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24460__auto__ = function(state_27239){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24460__auto____1.call(this,state_27239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24460__auto____0;
cljs$core$async$mult_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24460__auto____1;
return cljs$core$async$mult_$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27323 = f__24627__auto__.call(null);
(statearr_27323[(6)] = c__24626__auto___27324);

return statearr_27323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
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
var G__27382 = arguments.length;
switch (G__27382) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_27384 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_27384.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27385 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_27385.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27386 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27386.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27387 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_27387.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27388 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27388.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27399 = arguments.length;
var i__4737__auto___27400 = (0);
while(true){
if((i__4737__auto___27400 < len__4736__auto___27399)){
args__4742__auto__.push((arguments[i__4737__auto___27400]));

var G__27401 = (i__4737__auto___27400 + (1));
i__4737__auto___27400 = G__27401;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27393){
var map__27394 = p__27393;
var map__27394__$1 = (((((!((map__27394 == null))))?(((((map__27394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27394):map__27394);
var opts = map__27394__$1;
var statearr_27396_27402 = state;
(statearr_27396_27402[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27397_27403 = state;
(statearr_27397_27403[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27398_27404 = state;
(statearr_27398_27404[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27389){
var G__27390 = cljs.core.first.call(null,seq27389);
var seq27389__$1 = cljs.core.next.call(null,seq27389);
var G__27391 = cljs.core.first.call(null,seq27389__$1);
var seq27389__$2 = cljs.core.next.call(null,seq27389__$1);
var G__27392 = cljs.core.first.call(null,seq27389__$2);
var seq27389__$3 = cljs.core.next.call(null,seq27389__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27390,G__27391,G__27392,seq27389__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27405 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27406){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27406 = meta27406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27407,meta27406__$1){
var self__ = this;
var _27407__$1 = this;
return (new cljs.core.async.t_cljs$core$async27405(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27406__$1));
}));

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27407){
var self__ = this;
var _27407__$1 = this;
return self__.meta27406;
}));

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27405.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27406","meta27406",-696029414,null)], null);
}));

(cljs.core.async.t_cljs$core$async27405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27405");

(cljs.core.async.t_cljs$core$async27405.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27405.
 */
cljs.core.async.__GT_t_cljs$core$async27405 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27405(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27406){
return (new cljs.core.async.t_cljs$core$async27405(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27406));
});

}

return (new cljs.core.async.t_cljs$core$async27405(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24626__auto___27569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_27509){
var state_val_27510 = (state_27509[(1)]);
if((state_val_27510 === (7))){
var inst_27424 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
var statearr_27511_27570 = state_27509__$1;
(statearr_27511_27570[(2)] = inst_27424);

(statearr_27511_27570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (20))){
var inst_27436 = (state_27509[(7)]);
var state_27509__$1 = state_27509;
var statearr_27512_27571 = state_27509__$1;
(statearr_27512_27571[(2)] = inst_27436);

(statearr_27512_27571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (27))){
var state_27509__$1 = state_27509;
var statearr_27513_27572 = state_27509__$1;
(statearr_27513_27572[(2)] = null);

(statearr_27513_27572[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (1))){
var inst_27411 = (state_27509[(8)]);
var inst_27411__$1 = calc_state.call(null);
var inst_27413 = (inst_27411__$1 == null);
var inst_27414 = cljs.core.not.call(null,inst_27413);
var state_27509__$1 = (function (){var statearr_27514 = state_27509;
(statearr_27514[(8)] = inst_27411__$1);

return statearr_27514;
})();
if(inst_27414){
var statearr_27515_27573 = state_27509__$1;
(statearr_27515_27573[(1)] = (2));

} else {
var statearr_27516_27574 = state_27509__$1;
(statearr_27516_27574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (24))){
var inst_27460 = (state_27509[(9)]);
var inst_27469 = (state_27509[(10)]);
var inst_27483 = (state_27509[(11)]);
var inst_27483__$1 = inst_27460.call(null,inst_27469);
var state_27509__$1 = (function (){var statearr_27517 = state_27509;
(statearr_27517[(11)] = inst_27483__$1);

return statearr_27517;
})();
if(cljs.core.truth_(inst_27483__$1)){
var statearr_27518_27575 = state_27509__$1;
(statearr_27518_27575[(1)] = (29));

} else {
var statearr_27519_27576 = state_27509__$1;
(statearr_27519_27576[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (4))){
var inst_27427 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
if(cljs.core.truth_(inst_27427)){
var statearr_27520_27577 = state_27509__$1;
(statearr_27520_27577[(1)] = (8));

} else {
var statearr_27521_27578 = state_27509__$1;
(statearr_27521_27578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (15))){
var inst_27454 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
if(cljs.core.truth_(inst_27454)){
var statearr_27522_27579 = state_27509__$1;
(statearr_27522_27579[(1)] = (19));

} else {
var statearr_27523_27580 = state_27509__$1;
(statearr_27523_27580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (21))){
var inst_27459 = (state_27509[(12)]);
var inst_27459__$1 = (state_27509[(2)]);
var inst_27460 = cljs.core.get.call(null,inst_27459__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27461 = cljs.core.get.call(null,inst_27459__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27462 = cljs.core.get.call(null,inst_27459__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27509__$1 = (function (){var statearr_27524 = state_27509;
(statearr_27524[(12)] = inst_27459__$1);

(statearr_27524[(9)] = inst_27460);

(statearr_27524[(13)] = inst_27461);

return statearr_27524;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27509__$1,(22),inst_27462);
} else {
if((state_val_27510 === (31))){
var inst_27491 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
if(cljs.core.truth_(inst_27491)){
var statearr_27525_27581 = state_27509__$1;
(statearr_27525_27581[(1)] = (32));

} else {
var statearr_27526_27582 = state_27509__$1;
(statearr_27526_27582[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (32))){
var inst_27468 = (state_27509[(14)]);
var state_27509__$1 = state_27509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27509__$1,(35),out,inst_27468);
} else {
if((state_val_27510 === (33))){
var inst_27459 = (state_27509[(12)]);
var inst_27436 = inst_27459;
var state_27509__$1 = (function (){var statearr_27527 = state_27509;
(statearr_27527[(7)] = inst_27436);

return statearr_27527;
})();
var statearr_27528_27583 = state_27509__$1;
(statearr_27528_27583[(2)] = null);

(statearr_27528_27583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (13))){
var inst_27436 = (state_27509[(7)]);
var inst_27443 = inst_27436.cljs$lang$protocol_mask$partition0$;
var inst_27444 = (inst_27443 & (64));
var inst_27445 = inst_27436.cljs$core$ISeq$;
var inst_27446 = (cljs.core.PROTOCOL_SENTINEL === inst_27445);
var inst_27447 = ((inst_27444) || (inst_27446));
var state_27509__$1 = state_27509;
if(cljs.core.truth_(inst_27447)){
var statearr_27529_27584 = state_27509__$1;
(statearr_27529_27584[(1)] = (16));

} else {
var statearr_27530_27585 = state_27509__$1;
(statearr_27530_27585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (22))){
var inst_27468 = (state_27509[(14)]);
var inst_27469 = (state_27509[(10)]);
var inst_27467 = (state_27509[(2)]);
var inst_27468__$1 = cljs.core.nth.call(null,inst_27467,(0),null);
var inst_27469__$1 = cljs.core.nth.call(null,inst_27467,(1),null);
var inst_27470 = (inst_27468__$1 == null);
var inst_27471 = cljs.core._EQ_.call(null,inst_27469__$1,change);
var inst_27472 = ((inst_27470) || (inst_27471));
var state_27509__$1 = (function (){var statearr_27531 = state_27509;
(statearr_27531[(14)] = inst_27468__$1);

(statearr_27531[(10)] = inst_27469__$1);

return statearr_27531;
})();
if(cljs.core.truth_(inst_27472)){
var statearr_27532_27586 = state_27509__$1;
(statearr_27532_27586[(1)] = (23));

} else {
var statearr_27533_27587 = state_27509__$1;
(statearr_27533_27587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (36))){
var inst_27459 = (state_27509[(12)]);
var inst_27436 = inst_27459;
var state_27509__$1 = (function (){var statearr_27534 = state_27509;
(statearr_27534[(7)] = inst_27436);

return statearr_27534;
})();
var statearr_27535_27588 = state_27509__$1;
(statearr_27535_27588[(2)] = null);

(statearr_27535_27588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (29))){
var inst_27483 = (state_27509[(11)]);
var state_27509__$1 = state_27509;
var statearr_27536_27589 = state_27509__$1;
(statearr_27536_27589[(2)] = inst_27483);

(statearr_27536_27589[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (6))){
var state_27509__$1 = state_27509;
var statearr_27537_27590 = state_27509__$1;
(statearr_27537_27590[(2)] = false);

(statearr_27537_27590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (28))){
var inst_27479 = (state_27509[(2)]);
var inst_27480 = calc_state.call(null);
var inst_27436 = inst_27480;
var state_27509__$1 = (function (){var statearr_27538 = state_27509;
(statearr_27538[(7)] = inst_27436);

(statearr_27538[(15)] = inst_27479);

return statearr_27538;
})();
var statearr_27539_27591 = state_27509__$1;
(statearr_27539_27591[(2)] = null);

(statearr_27539_27591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (25))){
var inst_27505 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
var statearr_27540_27592 = state_27509__$1;
(statearr_27540_27592[(2)] = inst_27505);

(statearr_27540_27592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (34))){
var inst_27503 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
var statearr_27541_27593 = state_27509__$1;
(statearr_27541_27593[(2)] = inst_27503);

(statearr_27541_27593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (17))){
var state_27509__$1 = state_27509;
var statearr_27542_27594 = state_27509__$1;
(statearr_27542_27594[(2)] = false);

(statearr_27542_27594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (3))){
var state_27509__$1 = state_27509;
var statearr_27543_27595 = state_27509__$1;
(statearr_27543_27595[(2)] = false);

(statearr_27543_27595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (12))){
var inst_27507 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27509__$1,inst_27507);
} else {
if((state_val_27510 === (2))){
var inst_27411 = (state_27509[(8)]);
var inst_27416 = inst_27411.cljs$lang$protocol_mask$partition0$;
var inst_27417 = (inst_27416 & (64));
var inst_27418 = inst_27411.cljs$core$ISeq$;
var inst_27419 = (cljs.core.PROTOCOL_SENTINEL === inst_27418);
var inst_27420 = ((inst_27417) || (inst_27419));
var state_27509__$1 = state_27509;
if(cljs.core.truth_(inst_27420)){
var statearr_27544_27596 = state_27509__$1;
(statearr_27544_27596[(1)] = (5));

} else {
var statearr_27545_27597 = state_27509__$1;
(statearr_27545_27597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (23))){
var inst_27468 = (state_27509[(14)]);
var inst_27474 = (inst_27468 == null);
var state_27509__$1 = state_27509;
if(cljs.core.truth_(inst_27474)){
var statearr_27546_27598 = state_27509__$1;
(statearr_27546_27598[(1)] = (26));

} else {
var statearr_27547_27599 = state_27509__$1;
(statearr_27547_27599[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (35))){
var inst_27494 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
if(cljs.core.truth_(inst_27494)){
var statearr_27548_27600 = state_27509__$1;
(statearr_27548_27600[(1)] = (36));

} else {
var statearr_27549_27601 = state_27509__$1;
(statearr_27549_27601[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (19))){
var inst_27436 = (state_27509[(7)]);
var inst_27456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27436);
var state_27509__$1 = state_27509;
var statearr_27550_27602 = state_27509__$1;
(statearr_27550_27602[(2)] = inst_27456);

(statearr_27550_27602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (11))){
var inst_27436 = (state_27509[(7)]);
var inst_27440 = (inst_27436 == null);
var inst_27441 = cljs.core.not.call(null,inst_27440);
var state_27509__$1 = state_27509;
if(inst_27441){
var statearr_27551_27603 = state_27509__$1;
(statearr_27551_27603[(1)] = (13));

} else {
var statearr_27552_27604 = state_27509__$1;
(statearr_27552_27604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (9))){
var inst_27411 = (state_27509[(8)]);
var state_27509__$1 = state_27509;
var statearr_27553_27605 = state_27509__$1;
(statearr_27553_27605[(2)] = inst_27411);

(statearr_27553_27605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (5))){
var state_27509__$1 = state_27509;
var statearr_27554_27606 = state_27509__$1;
(statearr_27554_27606[(2)] = true);

(statearr_27554_27606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (14))){
var state_27509__$1 = state_27509;
var statearr_27555_27607 = state_27509__$1;
(statearr_27555_27607[(2)] = false);

(statearr_27555_27607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (26))){
var inst_27469 = (state_27509[(10)]);
var inst_27476 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27469);
var state_27509__$1 = state_27509;
var statearr_27556_27608 = state_27509__$1;
(statearr_27556_27608[(2)] = inst_27476);

(statearr_27556_27608[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (16))){
var state_27509__$1 = state_27509;
var statearr_27557_27609 = state_27509__$1;
(statearr_27557_27609[(2)] = true);

(statearr_27557_27609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (38))){
var inst_27499 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
var statearr_27558_27610 = state_27509__$1;
(statearr_27558_27610[(2)] = inst_27499);

(statearr_27558_27610[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (30))){
var inst_27460 = (state_27509[(9)]);
var inst_27469 = (state_27509[(10)]);
var inst_27461 = (state_27509[(13)]);
var inst_27486 = cljs.core.empty_QMARK_.call(null,inst_27460);
var inst_27487 = inst_27461.call(null,inst_27469);
var inst_27488 = cljs.core.not.call(null,inst_27487);
var inst_27489 = ((inst_27486) && (inst_27488));
var state_27509__$1 = state_27509;
var statearr_27559_27611 = state_27509__$1;
(statearr_27559_27611[(2)] = inst_27489);

(statearr_27559_27611[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (10))){
var inst_27411 = (state_27509[(8)]);
var inst_27432 = (state_27509[(2)]);
var inst_27433 = cljs.core.get.call(null,inst_27432,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27434 = cljs.core.get.call(null,inst_27432,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27435 = cljs.core.get.call(null,inst_27432,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27436 = inst_27411;
var state_27509__$1 = (function (){var statearr_27560 = state_27509;
(statearr_27560[(7)] = inst_27436);

(statearr_27560[(16)] = inst_27433);

(statearr_27560[(17)] = inst_27434);

(statearr_27560[(18)] = inst_27435);

return statearr_27560;
})();
var statearr_27561_27612 = state_27509__$1;
(statearr_27561_27612[(2)] = null);

(statearr_27561_27612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (18))){
var inst_27451 = (state_27509[(2)]);
var state_27509__$1 = state_27509;
var statearr_27562_27613 = state_27509__$1;
(statearr_27562_27613[(2)] = inst_27451);

(statearr_27562_27613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (37))){
var state_27509__$1 = state_27509;
var statearr_27563_27614 = state_27509__$1;
(statearr_27563_27614[(2)] = null);

(statearr_27563_27614[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27510 === (8))){
var inst_27411 = (state_27509[(8)]);
var inst_27429 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27411);
var state_27509__$1 = state_27509;
var statearr_27564_27615 = state_27509__$1;
(statearr_27564_27615[(2)] = inst_27429);

(statearr_27564_27615[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__24460__auto__ = null;
var cljs$core$async$mix_$_state_machine__24460__auto____0 = (function (){
var statearr_27565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27565[(0)] = cljs$core$async$mix_$_state_machine__24460__auto__);

(statearr_27565[(1)] = (1));

return statearr_27565;
});
var cljs$core$async$mix_$_state_machine__24460__auto____1 = (function (state_27509){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_27509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27566){if((e27566 instanceof Object)){
var ex__24463__auto__ = e27566;
var statearr_27567_27616 = state_27509;
(statearr_27567_27616[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27617 = state_27509;
state_27509 = G__27617;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24460__auto__ = function(state_27509){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24460__auto____1.call(this,state_27509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24460__auto____0;
cljs$core$async$mix_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24460__auto____1;
return cljs$core$async$mix_$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27568 = f__24627__auto__.call(null);
(statearr_27568[(6)] = c__24626__auto___27569);

return statearr_27568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_27620 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_27620.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27621 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_27621.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27622 = (function() {
var G__27623 = null;
var G__27623__1 = (function (p){
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
var G__27623__2 = (function (p,v){
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
G__27623 = function(p,v){
switch(arguments.length){
case 1:
return G__27623__1.call(this,p);
case 2:
return G__27623__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27623.cljs$core$IFn$_invoke$arity$1 = G__27623__1;
G__27623.cljs$core$IFn$_invoke$arity$2 = G__27623__2;
return G__27623;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27619 = arguments.length;
switch (G__27619) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27622.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27622.call(null,p,v);
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
var G__27627 = arguments.length;
switch (G__27627) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27625_SHARP_){
if(cljs.core.truth_(p1__27625_SHARP_.call(null,topic))){
return p1__27625_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27625_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27628 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27629){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27629 = meta27629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27630,meta27629__$1){
var self__ = this;
var _27630__$1 = this;
return (new cljs.core.async.t_cljs$core$async27628(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27629__$1));
}));

(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27630){
var self__ = this;
var _27630__$1 = this;
return self__.meta27629;
}));

(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27628.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27629","meta27629",-1506138386,null)], null);
}));

(cljs.core.async.t_cljs$core$async27628.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27628");

(cljs.core.async.t_cljs$core$async27628.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27628");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27628.
 */
cljs.core.async.__GT_t_cljs$core$async27628 = (function cljs$core$async$__GT_t_cljs$core$async27628(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27629){
return (new cljs.core.async.t_cljs$core$async27628(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27629));
});

}

return (new cljs.core.async.t_cljs$core$async27628(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24626__auto___27748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_27702){
var state_val_27703 = (state_27702[(1)]);
if((state_val_27703 === (7))){
var inst_27698 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27704_27749 = state_27702__$1;
(statearr_27704_27749[(2)] = inst_27698);

(statearr_27704_27749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (20))){
var state_27702__$1 = state_27702;
var statearr_27705_27750 = state_27702__$1;
(statearr_27705_27750[(2)] = null);

(statearr_27705_27750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (1))){
var state_27702__$1 = state_27702;
var statearr_27706_27751 = state_27702__$1;
(statearr_27706_27751[(2)] = null);

(statearr_27706_27751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (24))){
var inst_27681 = (state_27702[(7)]);
var inst_27690 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27681);
var state_27702__$1 = state_27702;
var statearr_27707_27752 = state_27702__$1;
(statearr_27707_27752[(2)] = inst_27690);

(statearr_27707_27752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (4))){
var inst_27633 = (state_27702[(8)]);
var inst_27633__$1 = (state_27702[(2)]);
var inst_27634 = (inst_27633__$1 == null);
var state_27702__$1 = (function (){var statearr_27708 = state_27702;
(statearr_27708[(8)] = inst_27633__$1);

return statearr_27708;
})();
if(cljs.core.truth_(inst_27634)){
var statearr_27709_27753 = state_27702__$1;
(statearr_27709_27753[(1)] = (5));

} else {
var statearr_27710_27754 = state_27702__$1;
(statearr_27710_27754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (15))){
var inst_27675 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27711_27755 = state_27702__$1;
(statearr_27711_27755[(2)] = inst_27675);

(statearr_27711_27755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (21))){
var inst_27695 = (state_27702[(2)]);
var state_27702__$1 = (function (){var statearr_27712 = state_27702;
(statearr_27712[(9)] = inst_27695);

return statearr_27712;
})();
var statearr_27713_27756 = state_27702__$1;
(statearr_27713_27756[(2)] = null);

(statearr_27713_27756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (13))){
var inst_27657 = (state_27702[(10)]);
var inst_27659 = cljs.core.chunked_seq_QMARK_.call(null,inst_27657);
var state_27702__$1 = state_27702;
if(inst_27659){
var statearr_27714_27757 = state_27702__$1;
(statearr_27714_27757[(1)] = (16));

} else {
var statearr_27715_27758 = state_27702__$1;
(statearr_27715_27758[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (22))){
var inst_27687 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
if(cljs.core.truth_(inst_27687)){
var statearr_27716_27759 = state_27702__$1;
(statearr_27716_27759[(1)] = (23));

} else {
var statearr_27717_27760 = state_27702__$1;
(statearr_27717_27760[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (6))){
var inst_27633 = (state_27702[(8)]);
var inst_27683 = (state_27702[(11)]);
var inst_27681 = (state_27702[(7)]);
var inst_27681__$1 = topic_fn.call(null,inst_27633);
var inst_27682 = cljs.core.deref.call(null,mults);
var inst_27683__$1 = cljs.core.get.call(null,inst_27682,inst_27681__$1);
var state_27702__$1 = (function (){var statearr_27718 = state_27702;
(statearr_27718[(11)] = inst_27683__$1);

(statearr_27718[(7)] = inst_27681__$1);

return statearr_27718;
})();
if(cljs.core.truth_(inst_27683__$1)){
var statearr_27719_27761 = state_27702__$1;
(statearr_27719_27761[(1)] = (19));

} else {
var statearr_27720_27762 = state_27702__$1;
(statearr_27720_27762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (25))){
var inst_27692 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27721_27763 = state_27702__$1;
(statearr_27721_27763[(2)] = inst_27692);

(statearr_27721_27763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (17))){
var inst_27657 = (state_27702[(10)]);
var inst_27666 = cljs.core.first.call(null,inst_27657);
var inst_27667 = cljs.core.async.muxch_STAR_.call(null,inst_27666);
var inst_27668 = cljs.core.async.close_BANG_.call(null,inst_27667);
var inst_27669 = cljs.core.next.call(null,inst_27657);
var inst_27643 = inst_27669;
var inst_27644 = null;
var inst_27645 = (0);
var inst_27646 = (0);
var state_27702__$1 = (function (){var statearr_27722 = state_27702;
(statearr_27722[(12)] = inst_27646);

(statearr_27722[(13)] = inst_27644);

(statearr_27722[(14)] = inst_27668);

(statearr_27722[(15)] = inst_27643);

(statearr_27722[(16)] = inst_27645);

return statearr_27722;
})();
var statearr_27723_27764 = state_27702__$1;
(statearr_27723_27764[(2)] = null);

(statearr_27723_27764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (3))){
var inst_27700 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27702__$1,inst_27700);
} else {
if((state_val_27703 === (12))){
var inst_27677 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27724_27765 = state_27702__$1;
(statearr_27724_27765[(2)] = inst_27677);

(statearr_27724_27765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (2))){
var state_27702__$1 = state_27702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27702__$1,(4),ch);
} else {
if((state_val_27703 === (23))){
var state_27702__$1 = state_27702;
var statearr_27725_27766 = state_27702__$1;
(statearr_27725_27766[(2)] = null);

(statearr_27725_27766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (19))){
var inst_27633 = (state_27702[(8)]);
var inst_27683 = (state_27702[(11)]);
var inst_27685 = cljs.core.async.muxch_STAR_.call(null,inst_27683);
var state_27702__$1 = state_27702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27702__$1,(22),inst_27685,inst_27633);
} else {
if((state_val_27703 === (11))){
var inst_27657 = (state_27702[(10)]);
var inst_27643 = (state_27702[(15)]);
var inst_27657__$1 = cljs.core.seq.call(null,inst_27643);
var state_27702__$1 = (function (){var statearr_27726 = state_27702;
(statearr_27726[(10)] = inst_27657__$1);

return statearr_27726;
})();
if(inst_27657__$1){
var statearr_27727_27767 = state_27702__$1;
(statearr_27727_27767[(1)] = (13));

} else {
var statearr_27728_27768 = state_27702__$1;
(statearr_27728_27768[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (9))){
var inst_27679 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27729_27769 = state_27702__$1;
(statearr_27729_27769[(2)] = inst_27679);

(statearr_27729_27769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (5))){
var inst_27640 = cljs.core.deref.call(null,mults);
var inst_27641 = cljs.core.vals.call(null,inst_27640);
var inst_27642 = cljs.core.seq.call(null,inst_27641);
var inst_27643 = inst_27642;
var inst_27644 = null;
var inst_27645 = (0);
var inst_27646 = (0);
var state_27702__$1 = (function (){var statearr_27730 = state_27702;
(statearr_27730[(12)] = inst_27646);

(statearr_27730[(13)] = inst_27644);

(statearr_27730[(15)] = inst_27643);

(statearr_27730[(16)] = inst_27645);

return statearr_27730;
})();
var statearr_27731_27770 = state_27702__$1;
(statearr_27731_27770[(2)] = null);

(statearr_27731_27770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (14))){
var state_27702__$1 = state_27702;
var statearr_27735_27771 = state_27702__$1;
(statearr_27735_27771[(2)] = null);

(statearr_27735_27771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (16))){
var inst_27657 = (state_27702[(10)]);
var inst_27661 = cljs.core.chunk_first.call(null,inst_27657);
var inst_27662 = cljs.core.chunk_rest.call(null,inst_27657);
var inst_27663 = cljs.core.count.call(null,inst_27661);
var inst_27643 = inst_27662;
var inst_27644 = inst_27661;
var inst_27645 = inst_27663;
var inst_27646 = (0);
var state_27702__$1 = (function (){var statearr_27736 = state_27702;
(statearr_27736[(12)] = inst_27646);

(statearr_27736[(13)] = inst_27644);

(statearr_27736[(15)] = inst_27643);

(statearr_27736[(16)] = inst_27645);

return statearr_27736;
})();
var statearr_27737_27772 = state_27702__$1;
(statearr_27737_27772[(2)] = null);

(statearr_27737_27772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (10))){
var inst_27646 = (state_27702[(12)]);
var inst_27644 = (state_27702[(13)]);
var inst_27643 = (state_27702[(15)]);
var inst_27645 = (state_27702[(16)]);
var inst_27651 = cljs.core._nth.call(null,inst_27644,inst_27646);
var inst_27652 = cljs.core.async.muxch_STAR_.call(null,inst_27651);
var inst_27653 = cljs.core.async.close_BANG_.call(null,inst_27652);
var inst_27654 = (inst_27646 + (1));
var tmp27732 = inst_27644;
var tmp27733 = inst_27643;
var tmp27734 = inst_27645;
var inst_27643__$1 = tmp27733;
var inst_27644__$1 = tmp27732;
var inst_27645__$1 = tmp27734;
var inst_27646__$1 = inst_27654;
var state_27702__$1 = (function (){var statearr_27738 = state_27702;
(statearr_27738[(12)] = inst_27646__$1);

(statearr_27738[(13)] = inst_27644__$1);

(statearr_27738[(17)] = inst_27653);

(statearr_27738[(15)] = inst_27643__$1);

(statearr_27738[(16)] = inst_27645__$1);

return statearr_27738;
})();
var statearr_27739_27773 = state_27702__$1;
(statearr_27739_27773[(2)] = null);

(statearr_27739_27773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (18))){
var inst_27672 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27740_27774 = state_27702__$1;
(statearr_27740_27774[(2)] = inst_27672);

(statearr_27740_27774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (8))){
var inst_27646 = (state_27702[(12)]);
var inst_27645 = (state_27702[(16)]);
var inst_27648 = (inst_27646 < inst_27645);
var inst_27649 = inst_27648;
var state_27702__$1 = state_27702;
if(cljs.core.truth_(inst_27649)){
var statearr_27741_27775 = state_27702__$1;
(statearr_27741_27775[(1)] = (10));

} else {
var statearr_27742_27776 = state_27702__$1;
(statearr_27742_27776[(1)] = (11));

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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_27743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27743[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_27743[(1)] = (1));

return statearr_27743;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_27702){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_27702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27744){if((e27744 instanceof Object)){
var ex__24463__auto__ = e27744;
var statearr_27745_27777 = state_27702;
(statearr_27745_27777[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27778 = state_27702;
state_27702 = G__27778;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_27702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_27702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27746 = f__24627__auto__.call(null);
(statearr_27746[(6)] = c__24626__auto___27748);

return statearr_27746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
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
var G__27780 = arguments.length;
switch (G__27780) {
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
var G__27783 = arguments.length;
switch (G__27783) {
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
var G__27786 = arguments.length;
switch (G__27786) {
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
var c__24626__auto___27853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_27825){
var state_val_27826 = (state_27825[(1)]);
if((state_val_27826 === (7))){
var state_27825__$1 = state_27825;
var statearr_27827_27854 = state_27825__$1;
(statearr_27827_27854[(2)] = null);

(statearr_27827_27854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (1))){
var state_27825__$1 = state_27825;
var statearr_27828_27855 = state_27825__$1;
(statearr_27828_27855[(2)] = null);

(statearr_27828_27855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (4))){
var inst_27789 = (state_27825[(7)]);
var inst_27791 = (inst_27789 < cnt);
var state_27825__$1 = state_27825;
if(cljs.core.truth_(inst_27791)){
var statearr_27829_27856 = state_27825__$1;
(statearr_27829_27856[(1)] = (6));

} else {
var statearr_27830_27857 = state_27825__$1;
(statearr_27830_27857[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (15))){
var inst_27821 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27831_27858 = state_27825__$1;
(statearr_27831_27858[(2)] = inst_27821);

(statearr_27831_27858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (13))){
var inst_27814 = cljs.core.async.close_BANG_.call(null,out);
var state_27825__$1 = state_27825;
var statearr_27832_27859 = state_27825__$1;
(statearr_27832_27859[(2)] = inst_27814);

(statearr_27832_27859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (6))){
var state_27825__$1 = state_27825;
var statearr_27833_27860 = state_27825__$1;
(statearr_27833_27860[(2)] = null);

(statearr_27833_27860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (3))){
var inst_27823 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27825__$1,inst_27823);
} else {
if((state_val_27826 === (12))){
var inst_27811 = (state_27825[(8)]);
var inst_27811__$1 = (state_27825[(2)]);
var inst_27812 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27811__$1);
var state_27825__$1 = (function (){var statearr_27834 = state_27825;
(statearr_27834[(8)] = inst_27811__$1);

return statearr_27834;
})();
if(cljs.core.truth_(inst_27812)){
var statearr_27835_27861 = state_27825__$1;
(statearr_27835_27861[(1)] = (13));

} else {
var statearr_27836_27862 = state_27825__$1;
(statearr_27836_27862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (2))){
var inst_27788 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27789 = (0);
var state_27825__$1 = (function (){var statearr_27837 = state_27825;
(statearr_27837[(9)] = inst_27788);

(statearr_27837[(7)] = inst_27789);

return statearr_27837;
})();
var statearr_27838_27863 = state_27825__$1;
(statearr_27838_27863[(2)] = null);

(statearr_27838_27863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (11))){
var inst_27789 = (state_27825[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27825,(10),Object,null,(9));
var inst_27798 = chs__$1.call(null,inst_27789);
var inst_27799 = done.call(null,inst_27789);
var inst_27800 = cljs.core.async.take_BANG_.call(null,inst_27798,inst_27799);
var state_27825__$1 = state_27825;
var statearr_27839_27864 = state_27825__$1;
(statearr_27839_27864[(2)] = inst_27800);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27825__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (9))){
var inst_27789 = (state_27825[(7)]);
var inst_27802 = (state_27825[(2)]);
var inst_27803 = (inst_27789 + (1));
var inst_27789__$1 = inst_27803;
var state_27825__$1 = (function (){var statearr_27840 = state_27825;
(statearr_27840[(10)] = inst_27802);

(statearr_27840[(7)] = inst_27789__$1);

return statearr_27840;
})();
var statearr_27841_27865 = state_27825__$1;
(statearr_27841_27865[(2)] = null);

(statearr_27841_27865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (5))){
var inst_27809 = (state_27825[(2)]);
var state_27825__$1 = (function (){var statearr_27842 = state_27825;
(statearr_27842[(11)] = inst_27809);

return statearr_27842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27825__$1,(12),dchan);
} else {
if((state_val_27826 === (14))){
var inst_27811 = (state_27825[(8)]);
var inst_27816 = cljs.core.apply.call(null,f,inst_27811);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27825__$1,(16),out,inst_27816);
} else {
if((state_val_27826 === (16))){
var inst_27818 = (state_27825[(2)]);
var state_27825__$1 = (function (){var statearr_27843 = state_27825;
(statearr_27843[(12)] = inst_27818);

return statearr_27843;
})();
var statearr_27844_27866 = state_27825__$1;
(statearr_27844_27866[(2)] = null);

(statearr_27844_27866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (10))){
var inst_27793 = (state_27825[(2)]);
var inst_27794 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27825__$1 = (function (){var statearr_27845 = state_27825;
(statearr_27845[(13)] = inst_27793);

return statearr_27845;
})();
var statearr_27846_27867 = state_27825__$1;
(statearr_27846_27867[(2)] = inst_27794);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27825__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (8))){
var inst_27807 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27847_27868 = state_27825__$1;
(statearr_27847_27868[(2)] = inst_27807);

(statearr_27847_27868[(1)] = (5));


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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_27848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27848[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_27848[(1)] = (1));

return statearr_27848;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_27825){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_27825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27849){if((e27849 instanceof Object)){
var ex__24463__auto__ = e27849;
var statearr_27850_27869 = state_27825;
(statearr_27850_27869[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27870 = state_27825;
state_27825 = G__27870;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_27825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_27825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27851 = f__24627__auto__.call(null);
(statearr_27851[(6)] = c__24626__auto___27853);

return statearr_27851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
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
var G__27873 = arguments.length;
switch (G__27873) {
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
var c__24626__auto___27927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_27905){
var state_val_27906 = (state_27905[(1)]);
if((state_val_27906 === (7))){
var inst_27884 = (state_27905[(7)]);
var inst_27885 = (state_27905[(8)]);
var inst_27884__$1 = (state_27905[(2)]);
var inst_27885__$1 = cljs.core.nth.call(null,inst_27884__$1,(0),null);
var inst_27886 = cljs.core.nth.call(null,inst_27884__$1,(1),null);
var inst_27887 = (inst_27885__$1 == null);
var state_27905__$1 = (function (){var statearr_27907 = state_27905;
(statearr_27907[(9)] = inst_27886);

(statearr_27907[(7)] = inst_27884__$1);

(statearr_27907[(8)] = inst_27885__$1);

return statearr_27907;
})();
if(cljs.core.truth_(inst_27887)){
var statearr_27908_27928 = state_27905__$1;
(statearr_27908_27928[(1)] = (8));

} else {
var statearr_27909_27929 = state_27905__$1;
(statearr_27909_27929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27906 === (1))){
var inst_27874 = cljs.core.vec.call(null,chs);
var inst_27875 = inst_27874;
var state_27905__$1 = (function (){var statearr_27910 = state_27905;
(statearr_27910[(10)] = inst_27875);

return statearr_27910;
})();
var statearr_27911_27930 = state_27905__$1;
(statearr_27911_27930[(2)] = null);

(statearr_27911_27930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27906 === (4))){
var inst_27875 = (state_27905[(10)]);
var state_27905__$1 = state_27905;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27905__$1,(7),inst_27875);
} else {
if((state_val_27906 === (6))){
var inst_27901 = (state_27905[(2)]);
var state_27905__$1 = state_27905;
var statearr_27912_27931 = state_27905__$1;
(statearr_27912_27931[(2)] = inst_27901);

(statearr_27912_27931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27906 === (3))){
var inst_27903 = (state_27905[(2)]);
var state_27905__$1 = state_27905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27905__$1,inst_27903);
} else {
if((state_val_27906 === (2))){
var inst_27875 = (state_27905[(10)]);
var inst_27877 = cljs.core.count.call(null,inst_27875);
var inst_27878 = (inst_27877 > (0));
var state_27905__$1 = state_27905;
if(cljs.core.truth_(inst_27878)){
var statearr_27914_27932 = state_27905__$1;
(statearr_27914_27932[(1)] = (4));

} else {
var statearr_27915_27933 = state_27905__$1;
(statearr_27915_27933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27906 === (11))){
var inst_27875 = (state_27905[(10)]);
var inst_27894 = (state_27905[(2)]);
var tmp27913 = inst_27875;
var inst_27875__$1 = tmp27913;
var state_27905__$1 = (function (){var statearr_27916 = state_27905;
(statearr_27916[(10)] = inst_27875__$1);

(statearr_27916[(11)] = inst_27894);

return statearr_27916;
})();
var statearr_27917_27934 = state_27905__$1;
(statearr_27917_27934[(2)] = null);

(statearr_27917_27934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27906 === (9))){
var inst_27885 = (state_27905[(8)]);
var state_27905__$1 = state_27905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27905__$1,(11),out,inst_27885);
} else {
if((state_val_27906 === (5))){
var inst_27899 = cljs.core.async.close_BANG_.call(null,out);
var state_27905__$1 = state_27905;
var statearr_27918_27935 = state_27905__$1;
(statearr_27918_27935[(2)] = inst_27899);

(statearr_27918_27935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27906 === (10))){
var inst_27897 = (state_27905[(2)]);
var state_27905__$1 = state_27905;
var statearr_27919_27936 = state_27905__$1;
(statearr_27919_27936[(2)] = inst_27897);

(statearr_27919_27936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27906 === (8))){
var inst_27886 = (state_27905[(9)]);
var inst_27884 = (state_27905[(7)]);
var inst_27875 = (state_27905[(10)]);
var inst_27885 = (state_27905[(8)]);
var inst_27889 = (function (){var cs = inst_27875;
var vec__27880 = inst_27884;
var v = inst_27885;
var c = inst_27886;
return (function (p1__27871_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27871_SHARP_);
});
})();
var inst_27890 = cljs.core.filterv.call(null,inst_27889,inst_27875);
var inst_27875__$1 = inst_27890;
var state_27905__$1 = (function (){var statearr_27920 = state_27905;
(statearr_27920[(10)] = inst_27875__$1);

return statearr_27920;
})();
var statearr_27921_27937 = state_27905__$1;
(statearr_27921_27937[(2)] = null);

(statearr_27921_27937[(1)] = (2));


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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_27922 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27922[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_27922[(1)] = (1));

return statearr_27922;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_27905){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_27905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27923){if((e27923 instanceof Object)){
var ex__24463__auto__ = e27923;
var statearr_27924_27938 = state_27905;
(statearr_27924_27938[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27939 = state_27905;
state_27905 = G__27939;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_27905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_27905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27925 = f__24627__auto__.call(null);
(statearr_27925[(6)] = c__24626__auto___27927);

return statearr_27925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
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
var G__27941 = arguments.length;
switch (G__27941) {
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
var c__24626__auto___27986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_27965){
var state_val_27966 = (state_27965[(1)]);
if((state_val_27966 === (7))){
var inst_27947 = (state_27965[(7)]);
var inst_27947__$1 = (state_27965[(2)]);
var inst_27948 = (inst_27947__$1 == null);
var inst_27949 = cljs.core.not.call(null,inst_27948);
var state_27965__$1 = (function (){var statearr_27967 = state_27965;
(statearr_27967[(7)] = inst_27947__$1);

return statearr_27967;
})();
if(inst_27949){
var statearr_27968_27987 = state_27965__$1;
(statearr_27968_27987[(1)] = (8));

} else {
var statearr_27969_27988 = state_27965__$1;
(statearr_27969_27988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27966 === (1))){
var inst_27942 = (0);
var state_27965__$1 = (function (){var statearr_27970 = state_27965;
(statearr_27970[(8)] = inst_27942);

return statearr_27970;
})();
var statearr_27971_27989 = state_27965__$1;
(statearr_27971_27989[(2)] = null);

(statearr_27971_27989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27966 === (4))){
var state_27965__$1 = state_27965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27965__$1,(7),ch);
} else {
if((state_val_27966 === (6))){
var inst_27960 = (state_27965[(2)]);
var state_27965__$1 = state_27965;
var statearr_27972_27990 = state_27965__$1;
(statearr_27972_27990[(2)] = inst_27960);

(statearr_27972_27990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27966 === (3))){
var inst_27962 = (state_27965[(2)]);
var inst_27963 = cljs.core.async.close_BANG_.call(null,out);
var state_27965__$1 = (function (){var statearr_27973 = state_27965;
(statearr_27973[(9)] = inst_27962);

return statearr_27973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27965__$1,inst_27963);
} else {
if((state_val_27966 === (2))){
var inst_27942 = (state_27965[(8)]);
var inst_27944 = (inst_27942 < n);
var state_27965__$1 = state_27965;
if(cljs.core.truth_(inst_27944)){
var statearr_27974_27991 = state_27965__$1;
(statearr_27974_27991[(1)] = (4));

} else {
var statearr_27975_27992 = state_27965__$1;
(statearr_27975_27992[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27966 === (11))){
var inst_27942 = (state_27965[(8)]);
var inst_27952 = (state_27965[(2)]);
var inst_27953 = (inst_27942 + (1));
var inst_27942__$1 = inst_27953;
var state_27965__$1 = (function (){var statearr_27976 = state_27965;
(statearr_27976[(10)] = inst_27952);

(statearr_27976[(8)] = inst_27942__$1);

return statearr_27976;
})();
var statearr_27977_27993 = state_27965__$1;
(statearr_27977_27993[(2)] = null);

(statearr_27977_27993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27966 === (9))){
var state_27965__$1 = state_27965;
var statearr_27978_27994 = state_27965__$1;
(statearr_27978_27994[(2)] = null);

(statearr_27978_27994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27966 === (5))){
var state_27965__$1 = state_27965;
var statearr_27979_27995 = state_27965__$1;
(statearr_27979_27995[(2)] = null);

(statearr_27979_27995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27966 === (10))){
var inst_27957 = (state_27965[(2)]);
var state_27965__$1 = state_27965;
var statearr_27980_27996 = state_27965__$1;
(statearr_27980_27996[(2)] = inst_27957);

(statearr_27980_27996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27966 === (8))){
var inst_27947 = (state_27965[(7)]);
var state_27965__$1 = state_27965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27965__$1,(11),out,inst_27947);
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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_27981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27981[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_27981[(1)] = (1));

return statearr_27981;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_27965){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_27965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e27982){if((e27982 instanceof Object)){
var ex__24463__auto__ = e27982;
var statearr_27983_27997 = state_27965;
(statearr_27983_27997[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27998 = state_27965;
state_27965 = G__27998;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_27965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_27965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_27984 = f__24627__auto__.call(null);
(statearr_27984[(6)] = c__24626__auto___27986);

return statearr_27984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28000 = (function (f,ch,meta28001){
this.f = f;
this.ch = ch;
this.meta28001 = meta28001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28002,meta28001__$1){
var self__ = this;
var _28002__$1 = this;
return (new cljs.core.async.t_cljs$core$async28000(self__.f,self__.ch,meta28001__$1));
}));

(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28002){
var self__ = this;
var _28002__$1 = this;
return self__.meta28001;
}));

(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28003 = (function (f,ch,meta28001,_,fn1,meta28004){
this.f = f;
this.ch = ch;
this.meta28001 = meta28001;
this._ = _;
this.fn1 = fn1;
this.meta28004 = meta28004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28005,meta28004__$1){
var self__ = this;
var _28005__$1 = this;
return (new cljs.core.async.t_cljs$core$async28003(self__.f,self__.ch,self__.meta28001,self__._,self__.fn1,meta28004__$1));
}));

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28005){
var self__ = this;
var _28005__$1 = this;
return self__.meta28004;
}));

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27999_SHARP_){
return f1.call(null,(((p1__27999_SHARP_ == null))?null:self__.f.call(null,p1__27999_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28001","meta28001",-1778862633,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28000","cljs.core.async/t_cljs$core$async28000",1243007137,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28004","meta28004",-818816852,null)], null);
}));

(cljs.core.async.t_cljs$core$async28003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28003");

(cljs.core.async.t_cljs$core$async28003.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28003.
 */
cljs.core.async.__GT_t_cljs$core$async28003 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28003(f__$1,ch__$1,meta28001__$1,___$2,fn1__$1,meta28004){
return (new cljs.core.async.t_cljs$core$async28003(f__$1,ch__$1,meta28001__$1,___$2,fn1__$1,meta28004));
});

}

return (new cljs.core.async.t_cljs$core$async28003(self__.f,self__.ch,self__.meta28001,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28001","meta28001",-1778862633,null)], null);
}));

(cljs.core.async.t_cljs$core$async28000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28000");

(cljs.core.async.t_cljs$core$async28000.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28000.
 */
cljs.core.async.__GT_t_cljs$core$async28000 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28000(f__$1,ch__$1,meta28001){
return (new cljs.core.async.t_cljs$core$async28000(f__$1,ch__$1,meta28001));
});

}

return (new cljs.core.async.t_cljs$core$async28000(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28006 = (function (f,ch,meta28007){
this.f = f;
this.ch = ch;
this.meta28007 = meta28007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28008,meta28007__$1){
var self__ = this;
var _28008__$1 = this;
return (new cljs.core.async.t_cljs$core$async28006(self__.f,self__.ch,meta28007__$1));
}));

(cljs.core.async.t_cljs$core$async28006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28008){
var self__ = this;
var _28008__$1 = this;
return self__.meta28007;
}));

(cljs.core.async.t_cljs$core$async28006.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28006.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28006.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28007","meta28007",-1083680557,null)], null);
}));

(cljs.core.async.t_cljs$core$async28006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28006");

(cljs.core.async.t_cljs$core$async28006.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28006.
 */
cljs.core.async.__GT_t_cljs$core$async28006 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28006(f__$1,ch__$1,meta28007){
return (new cljs.core.async.t_cljs$core$async28006(f__$1,ch__$1,meta28007));
});

}

return (new cljs.core.async.t_cljs$core$async28006(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28009 = (function (p,ch,meta28010){
this.p = p;
this.ch = ch;
this.meta28010 = meta28010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28011,meta28010__$1){
var self__ = this;
var _28011__$1 = this;
return (new cljs.core.async.t_cljs$core$async28009(self__.p,self__.ch,meta28010__$1));
}));

(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28011){
var self__ = this;
var _28011__$1 = this;
return self__.meta28010;
}));

(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28010","meta28010",-1144733384,null)], null);
}));

(cljs.core.async.t_cljs$core$async28009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28009");

(cljs.core.async.t_cljs$core$async28009.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28009.
 */
cljs.core.async.__GT_t_cljs$core$async28009 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28009(p__$1,ch__$1,meta28010){
return (new cljs.core.async.t_cljs$core$async28009(p__$1,ch__$1,meta28010));
});

}

return (new cljs.core.async.t_cljs$core$async28009(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28013 = arguments.length;
switch (G__28013) {
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
var c__24626__auto___28053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_28034){
var state_val_28035 = (state_28034[(1)]);
if((state_val_28035 === (7))){
var inst_28030 = (state_28034[(2)]);
var state_28034__$1 = state_28034;
var statearr_28036_28054 = state_28034__$1;
(statearr_28036_28054[(2)] = inst_28030);

(statearr_28036_28054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28035 === (1))){
var state_28034__$1 = state_28034;
var statearr_28037_28055 = state_28034__$1;
(statearr_28037_28055[(2)] = null);

(statearr_28037_28055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28035 === (4))){
var inst_28016 = (state_28034[(7)]);
var inst_28016__$1 = (state_28034[(2)]);
var inst_28017 = (inst_28016__$1 == null);
var state_28034__$1 = (function (){var statearr_28038 = state_28034;
(statearr_28038[(7)] = inst_28016__$1);

return statearr_28038;
})();
if(cljs.core.truth_(inst_28017)){
var statearr_28039_28056 = state_28034__$1;
(statearr_28039_28056[(1)] = (5));

} else {
var statearr_28040_28057 = state_28034__$1;
(statearr_28040_28057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28035 === (6))){
var inst_28016 = (state_28034[(7)]);
var inst_28021 = p.call(null,inst_28016);
var state_28034__$1 = state_28034;
if(cljs.core.truth_(inst_28021)){
var statearr_28041_28058 = state_28034__$1;
(statearr_28041_28058[(1)] = (8));

} else {
var statearr_28042_28059 = state_28034__$1;
(statearr_28042_28059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28035 === (3))){
var inst_28032 = (state_28034[(2)]);
var state_28034__$1 = state_28034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28034__$1,inst_28032);
} else {
if((state_val_28035 === (2))){
var state_28034__$1 = state_28034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28034__$1,(4),ch);
} else {
if((state_val_28035 === (11))){
var inst_28024 = (state_28034[(2)]);
var state_28034__$1 = state_28034;
var statearr_28043_28060 = state_28034__$1;
(statearr_28043_28060[(2)] = inst_28024);

(statearr_28043_28060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28035 === (9))){
var state_28034__$1 = state_28034;
var statearr_28044_28061 = state_28034__$1;
(statearr_28044_28061[(2)] = null);

(statearr_28044_28061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28035 === (5))){
var inst_28019 = cljs.core.async.close_BANG_.call(null,out);
var state_28034__$1 = state_28034;
var statearr_28045_28062 = state_28034__$1;
(statearr_28045_28062[(2)] = inst_28019);

(statearr_28045_28062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28035 === (10))){
var inst_28027 = (state_28034[(2)]);
var state_28034__$1 = (function (){var statearr_28046 = state_28034;
(statearr_28046[(8)] = inst_28027);

return statearr_28046;
})();
var statearr_28047_28063 = state_28034__$1;
(statearr_28047_28063[(2)] = null);

(statearr_28047_28063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28035 === (8))){
var inst_28016 = (state_28034[(7)]);
var state_28034__$1 = state_28034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28034__$1,(11),out,inst_28016);
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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_28048 = [null,null,null,null,null,null,null,null,null];
(statearr_28048[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_28048[(1)] = (1));

return statearr_28048;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_28034){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_28034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e28049){if((e28049 instanceof Object)){
var ex__24463__auto__ = e28049;
var statearr_28050_28064 = state_28034;
(statearr_28050_28064[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28065 = state_28034;
state_28034 = G__28065;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_28034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_28034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_28051 = f__24627__auto__.call(null);
(statearr_28051[(6)] = c__24626__auto___28053);

return statearr_28051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28067 = arguments.length;
switch (G__28067) {
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
var c__24626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_28130){
var state_val_28131 = (state_28130[(1)]);
if((state_val_28131 === (7))){
var inst_28126 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
var statearr_28132_28170 = state_28130__$1;
(statearr_28132_28170[(2)] = inst_28126);

(statearr_28132_28170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (20))){
var inst_28096 = (state_28130[(7)]);
var inst_28107 = (state_28130[(2)]);
var inst_28108 = cljs.core.next.call(null,inst_28096);
var inst_28082 = inst_28108;
var inst_28083 = null;
var inst_28084 = (0);
var inst_28085 = (0);
var state_28130__$1 = (function (){var statearr_28133 = state_28130;
(statearr_28133[(8)] = inst_28084);

(statearr_28133[(9)] = inst_28085);

(statearr_28133[(10)] = inst_28107);

(statearr_28133[(11)] = inst_28083);

(statearr_28133[(12)] = inst_28082);

return statearr_28133;
})();
var statearr_28134_28171 = state_28130__$1;
(statearr_28134_28171[(2)] = null);

(statearr_28134_28171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (1))){
var state_28130__$1 = state_28130;
var statearr_28135_28172 = state_28130__$1;
(statearr_28135_28172[(2)] = null);

(statearr_28135_28172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (4))){
var inst_28071 = (state_28130[(13)]);
var inst_28071__$1 = (state_28130[(2)]);
var inst_28072 = (inst_28071__$1 == null);
var state_28130__$1 = (function (){var statearr_28136 = state_28130;
(statearr_28136[(13)] = inst_28071__$1);

return statearr_28136;
})();
if(cljs.core.truth_(inst_28072)){
var statearr_28137_28173 = state_28130__$1;
(statearr_28137_28173[(1)] = (5));

} else {
var statearr_28138_28174 = state_28130__$1;
(statearr_28138_28174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (15))){
var state_28130__$1 = state_28130;
var statearr_28142_28175 = state_28130__$1;
(statearr_28142_28175[(2)] = null);

(statearr_28142_28175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (21))){
var state_28130__$1 = state_28130;
var statearr_28143_28176 = state_28130__$1;
(statearr_28143_28176[(2)] = null);

(statearr_28143_28176[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (13))){
var inst_28084 = (state_28130[(8)]);
var inst_28085 = (state_28130[(9)]);
var inst_28083 = (state_28130[(11)]);
var inst_28082 = (state_28130[(12)]);
var inst_28092 = (state_28130[(2)]);
var inst_28093 = (inst_28085 + (1));
var tmp28139 = inst_28084;
var tmp28140 = inst_28083;
var tmp28141 = inst_28082;
var inst_28082__$1 = tmp28141;
var inst_28083__$1 = tmp28140;
var inst_28084__$1 = tmp28139;
var inst_28085__$1 = inst_28093;
var state_28130__$1 = (function (){var statearr_28144 = state_28130;
(statearr_28144[(8)] = inst_28084__$1);

(statearr_28144[(14)] = inst_28092);

(statearr_28144[(9)] = inst_28085__$1);

(statearr_28144[(11)] = inst_28083__$1);

(statearr_28144[(12)] = inst_28082__$1);

return statearr_28144;
})();
var statearr_28145_28177 = state_28130__$1;
(statearr_28145_28177[(2)] = null);

(statearr_28145_28177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (22))){
var state_28130__$1 = state_28130;
var statearr_28146_28178 = state_28130__$1;
(statearr_28146_28178[(2)] = null);

(statearr_28146_28178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (6))){
var inst_28071 = (state_28130[(13)]);
var inst_28080 = f.call(null,inst_28071);
var inst_28081 = cljs.core.seq.call(null,inst_28080);
var inst_28082 = inst_28081;
var inst_28083 = null;
var inst_28084 = (0);
var inst_28085 = (0);
var state_28130__$1 = (function (){var statearr_28147 = state_28130;
(statearr_28147[(8)] = inst_28084);

(statearr_28147[(9)] = inst_28085);

(statearr_28147[(11)] = inst_28083);

(statearr_28147[(12)] = inst_28082);

return statearr_28147;
})();
var statearr_28148_28179 = state_28130__$1;
(statearr_28148_28179[(2)] = null);

(statearr_28148_28179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (17))){
var inst_28096 = (state_28130[(7)]);
var inst_28100 = cljs.core.chunk_first.call(null,inst_28096);
var inst_28101 = cljs.core.chunk_rest.call(null,inst_28096);
var inst_28102 = cljs.core.count.call(null,inst_28100);
var inst_28082 = inst_28101;
var inst_28083 = inst_28100;
var inst_28084 = inst_28102;
var inst_28085 = (0);
var state_28130__$1 = (function (){var statearr_28149 = state_28130;
(statearr_28149[(8)] = inst_28084);

(statearr_28149[(9)] = inst_28085);

(statearr_28149[(11)] = inst_28083);

(statearr_28149[(12)] = inst_28082);

return statearr_28149;
})();
var statearr_28150_28180 = state_28130__$1;
(statearr_28150_28180[(2)] = null);

(statearr_28150_28180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (3))){
var inst_28128 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28130__$1,inst_28128);
} else {
if((state_val_28131 === (12))){
var inst_28116 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
var statearr_28151_28181 = state_28130__$1;
(statearr_28151_28181[(2)] = inst_28116);

(statearr_28151_28181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (2))){
var state_28130__$1 = state_28130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28130__$1,(4),in$);
} else {
if((state_val_28131 === (23))){
var inst_28124 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
var statearr_28152_28182 = state_28130__$1;
(statearr_28152_28182[(2)] = inst_28124);

(statearr_28152_28182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (19))){
var inst_28111 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
var statearr_28153_28183 = state_28130__$1;
(statearr_28153_28183[(2)] = inst_28111);

(statearr_28153_28183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (11))){
var inst_28082 = (state_28130[(12)]);
var inst_28096 = (state_28130[(7)]);
var inst_28096__$1 = cljs.core.seq.call(null,inst_28082);
var state_28130__$1 = (function (){var statearr_28154 = state_28130;
(statearr_28154[(7)] = inst_28096__$1);

return statearr_28154;
})();
if(inst_28096__$1){
var statearr_28155_28184 = state_28130__$1;
(statearr_28155_28184[(1)] = (14));

} else {
var statearr_28156_28185 = state_28130__$1;
(statearr_28156_28185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (9))){
var inst_28118 = (state_28130[(2)]);
var inst_28119 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28130__$1 = (function (){var statearr_28157 = state_28130;
(statearr_28157[(15)] = inst_28118);

return statearr_28157;
})();
if(cljs.core.truth_(inst_28119)){
var statearr_28158_28186 = state_28130__$1;
(statearr_28158_28186[(1)] = (21));

} else {
var statearr_28159_28187 = state_28130__$1;
(statearr_28159_28187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (5))){
var inst_28074 = cljs.core.async.close_BANG_.call(null,out);
var state_28130__$1 = state_28130;
var statearr_28160_28188 = state_28130__$1;
(statearr_28160_28188[(2)] = inst_28074);

(statearr_28160_28188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (14))){
var inst_28096 = (state_28130[(7)]);
var inst_28098 = cljs.core.chunked_seq_QMARK_.call(null,inst_28096);
var state_28130__$1 = state_28130;
if(inst_28098){
var statearr_28161_28189 = state_28130__$1;
(statearr_28161_28189[(1)] = (17));

} else {
var statearr_28162_28190 = state_28130__$1;
(statearr_28162_28190[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (16))){
var inst_28114 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
var statearr_28163_28191 = state_28130__$1;
(statearr_28163_28191[(2)] = inst_28114);

(statearr_28163_28191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (10))){
var inst_28085 = (state_28130[(9)]);
var inst_28083 = (state_28130[(11)]);
var inst_28090 = cljs.core._nth.call(null,inst_28083,inst_28085);
var state_28130__$1 = state_28130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28130__$1,(13),out,inst_28090);
} else {
if((state_val_28131 === (18))){
var inst_28096 = (state_28130[(7)]);
var inst_28105 = cljs.core.first.call(null,inst_28096);
var state_28130__$1 = state_28130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28130__$1,(20),out,inst_28105);
} else {
if((state_val_28131 === (8))){
var inst_28084 = (state_28130[(8)]);
var inst_28085 = (state_28130[(9)]);
var inst_28087 = (inst_28085 < inst_28084);
var inst_28088 = inst_28087;
var state_28130__$1 = state_28130;
if(cljs.core.truth_(inst_28088)){
var statearr_28164_28192 = state_28130__$1;
(statearr_28164_28192[(1)] = (10));

} else {
var statearr_28165_28193 = state_28130__$1;
(statearr_28165_28193[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__24460__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24460__auto____0 = (function (){
var statearr_28166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28166[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24460__auto__);

(statearr_28166[(1)] = (1));

return statearr_28166;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24460__auto____1 = (function (state_28130){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_28130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e28167){if((e28167 instanceof Object)){
var ex__24463__auto__ = e28167;
var statearr_28168_28194 = state_28130;
(statearr_28168_28194[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28195 = state_28130;
state_28130 = G__28195;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24460__auto__ = function(state_28130){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24460__auto____1.call(this,state_28130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24460__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24460__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_28169 = f__24627__auto__.call(null);
(statearr_28169[(6)] = c__24626__auto__);

return statearr_28169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));

return c__24626__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28197 = arguments.length;
switch (G__28197) {
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
var G__28200 = arguments.length;
switch (G__28200) {
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
var G__28203 = arguments.length;
switch (G__28203) {
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
var c__24626__auto___28250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_28227){
var state_val_28228 = (state_28227[(1)]);
if((state_val_28228 === (7))){
var inst_28222 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28229_28251 = state_28227__$1;
(statearr_28229_28251[(2)] = inst_28222);

(statearr_28229_28251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (1))){
var inst_28204 = null;
var state_28227__$1 = (function (){var statearr_28230 = state_28227;
(statearr_28230[(7)] = inst_28204);

return statearr_28230;
})();
var statearr_28231_28252 = state_28227__$1;
(statearr_28231_28252[(2)] = null);

(statearr_28231_28252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (4))){
var inst_28207 = (state_28227[(8)]);
var inst_28207__$1 = (state_28227[(2)]);
var inst_28208 = (inst_28207__$1 == null);
var inst_28209 = cljs.core.not.call(null,inst_28208);
var state_28227__$1 = (function (){var statearr_28232 = state_28227;
(statearr_28232[(8)] = inst_28207__$1);

return statearr_28232;
})();
if(inst_28209){
var statearr_28233_28253 = state_28227__$1;
(statearr_28233_28253[(1)] = (5));

} else {
var statearr_28234_28254 = state_28227__$1;
(statearr_28234_28254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (6))){
var state_28227__$1 = state_28227;
var statearr_28235_28255 = state_28227__$1;
(statearr_28235_28255[(2)] = null);

(statearr_28235_28255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (3))){
var inst_28224 = (state_28227[(2)]);
var inst_28225 = cljs.core.async.close_BANG_.call(null,out);
var state_28227__$1 = (function (){var statearr_28236 = state_28227;
(statearr_28236[(9)] = inst_28224);

return statearr_28236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28227__$1,inst_28225);
} else {
if((state_val_28228 === (2))){
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28227__$1,(4),ch);
} else {
if((state_val_28228 === (11))){
var inst_28207 = (state_28227[(8)]);
var inst_28216 = (state_28227[(2)]);
var inst_28204 = inst_28207;
var state_28227__$1 = (function (){var statearr_28237 = state_28227;
(statearr_28237[(10)] = inst_28216);

(statearr_28237[(7)] = inst_28204);

return statearr_28237;
})();
var statearr_28238_28256 = state_28227__$1;
(statearr_28238_28256[(2)] = null);

(statearr_28238_28256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (9))){
var inst_28207 = (state_28227[(8)]);
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28227__$1,(11),out,inst_28207);
} else {
if((state_val_28228 === (5))){
var inst_28207 = (state_28227[(8)]);
var inst_28204 = (state_28227[(7)]);
var inst_28211 = cljs.core._EQ_.call(null,inst_28207,inst_28204);
var state_28227__$1 = state_28227;
if(inst_28211){
var statearr_28240_28257 = state_28227__$1;
(statearr_28240_28257[(1)] = (8));

} else {
var statearr_28241_28258 = state_28227__$1;
(statearr_28241_28258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (10))){
var inst_28219 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28242_28259 = state_28227__$1;
(statearr_28242_28259[(2)] = inst_28219);

(statearr_28242_28259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (8))){
var inst_28204 = (state_28227[(7)]);
var tmp28239 = inst_28204;
var inst_28204__$1 = tmp28239;
var state_28227__$1 = (function (){var statearr_28243 = state_28227;
(statearr_28243[(7)] = inst_28204__$1);

return statearr_28243;
})();
var statearr_28244_28260 = state_28227__$1;
(statearr_28244_28260[(2)] = null);

(statearr_28244_28260[(1)] = (2));


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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_28245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28245[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_28245[(1)] = (1));

return statearr_28245;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_28227){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_28227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e28246){if((e28246 instanceof Object)){
var ex__24463__auto__ = e28246;
var statearr_28247_28261 = state_28227;
(statearr_28247_28261[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28262 = state_28227;
state_28227 = G__28262;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_28227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_28227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_28248 = f__24627__auto__.call(null);
(statearr_28248[(6)] = c__24626__auto___28250);

return statearr_28248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28264 = arguments.length;
switch (G__28264) {
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
var c__24626__auto___28330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_28302){
var state_val_28303 = (state_28302[(1)]);
if((state_val_28303 === (7))){
var inst_28298 = (state_28302[(2)]);
var state_28302__$1 = state_28302;
var statearr_28304_28331 = state_28302__$1;
(statearr_28304_28331[(2)] = inst_28298);

(statearr_28304_28331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (1))){
var inst_28265 = (new Array(n));
var inst_28266 = inst_28265;
var inst_28267 = (0);
var state_28302__$1 = (function (){var statearr_28305 = state_28302;
(statearr_28305[(7)] = inst_28267);

(statearr_28305[(8)] = inst_28266);

return statearr_28305;
})();
var statearr_28306_28332 = state_28302__$1;
(statearr_28306_28332[(2)] = null);

(statearr_28306_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (4))){
var inst_28270 = (state_28302[(9)]);
var inst_28270__$1 = (state_28302[(2)]);
var inst_28271 = (inst_28270__$1 == null);
var inst_28272 = cljs.core.not.call(null,inst_28271);
var state_28302__$1 = (function (){var statearr_28307 = state_28302;
(statearr_28307[(9)] = inst_28270__$1);

return statearr_28307;
})();
if(inst_28272){
var statearr_28308_28333 = state_28302__$1;
(statearr_28308_28333[(1)] = (5));

} else {
var statearr_28309_28334 = state_28302__$1;
(statearr_28309_28334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (15))){
var inst_28292 = (state_28302[(2)]);
var state_28302__$1 = state_28302;
var statearr_28310_28335 = state_28302__$1;
(statearr_28310_28335[(2)] = inst_28292);

(statearr_28310_28335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (13))){
var state_28302__$1 = state_28302;
var statearr_28311_28336 = state_28302__$1;
(statearr_28311_28336[(2)] = null);

(statearr_28311_28336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (6))){
var inst_28267 = (state_28302[(7)]);
var inst_28288 = (inst_28267 > (0));
var state_28302__$1 = state_28302;
if(cljs.core.truth_(inst_28288)){
var statearr_28312_28337 = state_28302__$1;
(statearr_28312_28337[(1)] = (12));

} else {
var statearr_28313_28338 = state_28302__$1;
(statearr_28313_28338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (3))){
var inst_28300 = (state_28302[(2)]);
var state_28302__$1 = state_28302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28302__$1,inst_28300);
} else {
if((state_val_28303 === (12))){
var inst_28266 = (state_28302[(8)]);
var inst_28290 = cljs.core.vec.call(null,inst_28266);
var state_28302__$1 = state_28302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28302__$1,(15),out,inst_28290);
} else {
if((state_val_28303 === (2))){
var state_28302__$1 = state_28302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28302__$1,(4),ch);
} else {
if((state_val_28303 === (11))){
var inst_28282 = (state_28302[(2)]);
var inst_28283 = (new Array(n));
var inst_28266 = inst_28283;
var inst_28267 = (0);
var state_28302__$1 = (function (){var statearr_28314 = state_28302;
(statearr_28314[(7)] = inst_28267);

(statearr_28314[(8)] = inst_28266);

(statearr_28314[(10)] = inst_28282);

return statearr_28314;
})();
var statearr_28315_28339 = state_28302__$1;
(statearr_28315_28339[(2)] = null);

(statearr_28315_28339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (9))){
var inst_28266 = (state_28302[(8)]);
var inst_28280 = cljs.core.vec.call(null,inst_28266);
var state_28302__$1 = state_28302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28302__$1,(11),out,inst_28280);
} else {
if((state_val_28303 === (5))){
var inst_28267 = (state_28302[(7)]);
var inst_28275 = (state_28302[(11)]);
var inst_28270 = (state_28302[(9)]);
var inst_28266 = (state_28302[(8)]);
var inst_28274 = (inst_28266[inst_28267] = inst_28270);
var inst_28275__$1 = (inst_28267 + (1));
var inst_28276 = (inst_28275__$1 < n);
var state_28302__$1 = (function (){var statearr_28316 = state_28302;
(statearr_28316[(11)] = inst_28275__$1);

(statearr_28316[(12)] = inst_28274);

return statearr_28316;
})();
if(cljs.core.truth_(inst_28276)){
var statearr_28317_28340 = state_28302__$1;
(statearr_28317_28340[(1)] = (8));

} else {
var statearr_28318_28341 = state_28302__$1;
(statearr_28318_28341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (14))){
var inst_28295 = (state_28302[(2)]);
var inst_28296 = cljs.core.async.close_BANG_.call(null,out);
var state_28302__$1 = (function (){var statearr_28320 = state_28302;
(statearr_28320[(13)] = inst_28295);

return statearr_28320;
})();
var statearr_28321_28342 = state_28302__$1;
(statearr_28321_28342[(2)] = inst_28296);

(statearr_28321_28342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (10))){
var inst_28286 = (state_28302[(2)]);
var state_28302__$1 = state_28302;
var statearr_28322_28343 = state_28302__$1;
(statearr_28322_28343[(2)] = inst_28286);

(statearr_28322_28343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (8))){
var inst_28275 = (state_28302[(11)]);
var inst_28266 = (state_28302[(8)]);
var tmp28319 = inst_28266;
var inst_28266__$1 = tmp28319;
var inst_28267 = inst_28275;
var state_28302__$1 = (function (){var statearr_28323 = state_28302;
(statearr_28323[(7)] = inst_28267);

(statearr_28323[(8)] = inst_28266__$1);

return statearr_28323;
})();
var statearr_28324_28344 = state_28302__$1;
(statearr_28324_28344[(2)] = null);

(statearr_28324_28344[(1)] = (2));


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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_28325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28325[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_28302){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_28302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e28326){if((e28326 instanceof Object)){
var ex__24463__auto__ = e28326;
var statearr_28327_28345 = state_28302;
(statearr_28327_28345[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28346 = state_28302;
state_28302 = G__28346;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_28302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_28302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_28328 = f__24627__auto__.call(null);
(statearr_28328[(6)] = c__24626__auto___28330);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28348 = arguments.length;
switch (G__28348) {
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
var c__24626__auto___28418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_28390){
var state_val_28391 = (state_28390[(1)]);
if((state_val_28391 === (7))){
var inst_28386 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
var statearr_28392_28419 = state_28390__$1;
(statearr_28392_28419[(2)] = inst_28386);

(statearr_28392_28419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (1))){
var inst_28349 = [];
var inst_28350 = inst_28349;
var inst_28351 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28390__$1 = (function (){var statearr_28393 = state_28390;
(statearr_28393[(7)] = inst_28350);

(statearr_28393[(8)] = inst_28351);

return statearr_28393;
})();
var statearr_28394_28420 = state_28390__$1;
(statearr_28394_28420[(2)] = null);

(statearr_28394_28420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (4))){
var inst_28354 = (state_28390[(9)]);
var inst_28354__$1 = (state_28390[(2)]);
var inst_28355 = (inst_28354__$1 == null);
var inst_28356 = cljs.core.not.call(null,inst_28355);
var state_28390__$1 = (function (){var statearr_28395 = state_28390;
(statearr_28395[(9)] = inst_28354__$1);

return statearr_28395;
})();
if(inst_28356){
var statearr_28396_28421 = state_28390__$1;
(statearr_28396_28421[(1)] = (5));

} else {
var statearr_28397_28422 = state_28390__$1;
(statearr_28397_28422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (15))){
var inst_28380 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
var statearr_28398_28423 = state_28390__$1;
(statearr_28398_28423[(2)] = inst_28380);

(statearr_28398_28423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (13))){
var state_28390__$1 = state_28390;
var statearr_28399_28424 = state_28390__$1;
(statearr_28399_28424[(2)] = null);

(statearr_28399_28424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (6))){
var inst_28350 = (state_28390[(7)]);
var inst_28375 = inst_28350.length;
var inst_28376 = (inst_28375 > (0));
var state_28390__$1 = state_28390;
if(cljs.core.truth_(inst_28376)){
var statearr_28400_28425 = state_28390__$1;
(statearr_28400_28425[(1)] = (12));

} else {
var statearr_28401_28426 = state_28390__$1;
(statearr_28401_28426[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (3))){
var inst_28388 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28390__$1,inst_28388);
} else {
if((state_val_28391 === (12))){
var inst_28350 = (state_28390[(7)]);
var inst_28378 = cljs.core.vec.call(null,inst_28350);
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28390__$1,(15),out,inst_28378);
} else {
if((state_val_28391 === (2))){
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28390__$1,(4),ch);
} else {
if((state_val_28391 === (11))){
var inst_28354 = (state_28390[(9)]);
var inst_28358 = (state_28390[(10)]);
var inst_28368 = (state_28390[(2)]);
var inst_28369 = [];
var inst_28370 = inst_28369.push(inst_28354);
var inst_28350 = inst_28369;
var inst_28351 = inst_28358;
var state_28390__$1 = (function (){var statearr_28402 = state_28390;
(statearr_28402[(7)] = inst_28350);

(statearr_28402[(8)] = inst_28351);

(statearr_28402[(11)] = inst_28370);

(statearr_28402[(12)] = inst_28368);

return statearr_28402;
})();
var statearr_28403_28427 = state_28390__$1;
(statearr_28403_28427[(2)] = null);

(statearr_28403_28427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (9))){
var inst_28350 = (state_28390[(7)]);
var inst_28366 = cljs.core.vec.call(null,inst_28350);
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28390__$1,(11),out,inst_28366);
} else {
if((state_val_28391 === (5))){
var inst_28351 = (state_28390[(8)]);
var inst_28354 = (state_28390[(9)]);
var inst_28358 = (state_28390[(10)]);
var inst_28358__$1 = f.call(null,inst_28354);
var inst_28359 = cljs.core._EQ_.call(null,inst_28358__$1,inst_28351);
var inst_28360 = cljs.core.keyword_identical_QMARK_.call(null,inst_28351,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28361 = ((inst_28359) || (inst_28360));
var state_28390__$1 = (function (){var statearr_28404 = state_28390;
(statearr_28404[(10)] = inst_28358__$1);

return statearr_28404;
})();
if(cljs.core.truth_(inst_28361)){
var statearr_28405_28428 = state_28390__$1;
(statearr_28405_28428[(1)] = (8));

} else {
var statearr_28406_28429 = state_28390__$1;
(statearr_28406_28429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (14))){
var inst_28383 = (state_28390[(2)]);
var inst_28384 = cljs.core.async.close_BANG_.call(null,out);
var state_28390__$1 = (function (){var statearr_28408 = state_28390;
(statearr_28408[(13)] = inst_28383);

return statearr_28408;
})();
var statearr_28409_28430 = state_28390__$1;
(statearr_28409_28430[(2)] = inst_28384);

(statearr_28409_28430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (10))){
var inst_28373 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
var statearr_28410_28431 = state_28390__$1;
(statearr_28410_28431[(2)] = inst_28373);

(statearr_28410_28431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (8))){
var inst_28350 = (state_28390[(7)]);
var inst_28354 = (state_28390[(9)]);
var inst_28358 = (state_28390[(10)]);
var inst_28363 = inst_28350.push(inst_28354);
var tmp28407 = inst_28350;
var inst_28350__$1 = tmp28407;
var inst_28351 = inst_28358;
var state_28390__$1 = (function (){var statearr_28411 = state_28390;
(statearr_28411[(7)] = inst_28350__$1);

(statearr_28411[(14)] = inst_28363);

(statearr_28411[(8)] = inst_28351);

return statearr_28411;
})();
var statearr_28412_28432 = state_28390__$1;
(statearr_28412_28432[(2)] = null);

(statearr_28412_28432[(1)] = (2));


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
var cljs$core$async$state_machine__24460__auto__ = null;
var cljs$core$async$state_machine__24460__auto____0 = (function (){
var statearr_28413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28413[(0)] = cljs$core$async$state_machine__24460__auto__);

(statearr_28413[(1)] = (1));

return statearr_28413;
});
var cljs$core$async$state_machine__24460__auto____1 = (function (state_28390){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_28390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e28414){if((e28414 instanceof Object)){
var ex__24463__auto__ = e28414;
var statearr_28415_28433 = state_28390;
(statearr_28415_28433[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28434 = state_28390;
state_28390 = G__28434;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
cljs$core$async$state_machine__24460__auto__ = function(state_28390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24460__auto____1.call(this,state_28390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24460__auto____0;
cljs$core$async$state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24460__auto____1;
return cljs$core$async$state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_28416 = f__24627__auto__.call(null);
(statearr_28416[(6)] = c__24626__auto___28418);

return statearr_28416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
