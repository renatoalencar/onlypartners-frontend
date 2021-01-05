// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('firemore.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('firemore.config');
goog.require('firemore.authentication');
goog.require('firemore.finalizing_buffer');
goog.require('firemore.firestore');
goog.require('firemore.firebase');
goog.require('firemore.hydrator');
cljs.core.enable_console_print_BANG_.call(null);
firemore.core.supported_types = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.float_QMARK_,cljs.core.boolean_QMARK_,cljs.core.nil_QMARK_,cljs.core.inst_QMARK_], null);
firemore.core.throw_if_unsupported = (function firemore$core$throw_if_unsupported(m){
var G__29077_29078 = m;
var G__29077_29079__$1 = (((G__29077_29078 == null))?null:cljs.core.vals.call(null,G__29077_29078));
var G__29077_29080__$2 = (((G__29077_29079__$1 == null))?null:cljs.core.remove.call(null,(function (v){
return cljs.core.some.call(null,(function (p1__29076_SHARP_){
return p1__29076_SHARP_.call(null,v);
}),firemore.core.supported_types);
}),G__29077_29079__$1));
var G__29077_29081__$3 = (((G__29077_29080__$2 == null))?null:cljs.core.first.call(null,G__29077_29080__$2));
var G__29077_29082__$4 = (((G__29077_29081__$3 == null))?null:cljs.core.ex_info.call(null,"Unsupported Data",G__29077_29081__$3));
if((G__29077_29082__$4 == null)){
} else {
throw G__29077_29082__$4;
}

return m;
});
/**
 * Returns the clojure form of the `js-object` document from Firestore.
 */
firemore.core.fire__GT_clj = (function firemore$core$fire__GT_clj(js_object){
return firemore.core.throw_if_unsupported.call(null,firemore.firestore.clojurify.call(null,js_object));
});
/**
 * Returns a javascript object from the firemore `document` (a clojure map).
 */
firemore.core.clj__GT_fire = (function firemore$core$clj__GT_fire(document){
return firemore.firestore.jsonify.call(null,firemore.core.throw_if_unsupported.call(null,document));
});
/**
 * Get the document at `reference` in the Firestore database.
 * 
 *   Returns a channel. A map representing the data at this location will be put
 *   on this channel. The channel will then be closed.
 * 
 *   Note:
 *   channel -> `clojure.core.async/chan`
 *   put    -> `clojure.core.async/put!`
 *   closed  -> `clojure.core.async/close!`
 */
firemore.core.get = (function firemore$core$get(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29089 = arguments.length;
var i__4737__auto___29090 = (0);
while(true){
if((i__4737__auto___29090 < len__4736__auto___29089)){
args__4742__auto__.push((arguments[i__4737__auto___29090]));

var G__29091 = (i__4737__auto___29090 + (1));
i__4737__auto___29090 = G__29091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.get.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__29085){
var vec__29086 = p__29085;
var options = cljs.core.nth.call(null,vec__29086,(0),null);
return firemore.firestore.get_db.call(null,reference,options);
}));

(firemore.core.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(firemore.core.get.cljs$lang$applyTo = (function (seq29083){
var G__29084 = cljs.core.first.call(null,seq29083);
var seq29083__$1 = cljs.core.next.call(null,seq29083);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29084,seq29083__$1);
}));

/**
 * Watch the document at `reference` in the Firestore database.
 * 
 *   Returns a channel. A map representing the data at this location will be put
 *   on this channel. As the document at reference is updated through time, the
 *   channel will put! the newest value of the document upon the channel.
 * 
 *   Important: close! the channel to clean up the state machine feeding this
 *   channel. Failure to close the channel will result in a memory leak.
 * 
 *   Note:
 *   channel -> `clojure.core.async/chan`
 *   put     -> `clojure.core.async/put!`
 *   closed  -> `clojure.core.async/close!`
 */
firemore.core.watch = (function firemore$core$watch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29100 = arguments.length;
var i__4737__auto___29101 = (0);
while(true){
if((i__4737__auto___29101 < len__4736__auto___29100)){
args__4742__auto__.push((arguments[i__4737__auto___29101]));

var G__29102 = (i__4737__auto___29101 + (1));
i__4737__auto___29101 = G__29102;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.watch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.watch.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__29094){
var vec__29095 = p__29094;
var options = cljs.core.nth.call(null,vec__29095,(0),null);
var map__29098 = firemore.firestore.listen.call(null,reference,options);
var map__29098__$1 = (((((!((map__29098 == null))))?(((((map__29098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29098):map__29098);
var c = cljs.core.get.call(null,map__29098__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var unsubscribe = cljs.core.get.call(null,map__29098__$1,new cljs.core.Keyword(null,"unsubscribe","unsubscribe",632650147));
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return unsubscribe.call(null);
})], null);
var buffer = firemore.finalizing_buffer.create.call(null,(1),opts);
var finalizing_chan = cljs.core.async.chan.call(null,buffer);
cljs.core.async.tap.call(null,cljs.core.async.mult.call(null,c),finalizing_chan);

return finalizing_chan;
}));

(firemore.core.watch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(firemore.core.watch.cljs$lang$applyTo = (function (seq29092){
var G__29093 = cljs.core.first.call(null,seq29092);
var seq29092__$1 = cljs.core.next.call(null,seq29092);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29093,seq29092__$1);
}));

/**
 * Adds the `document` to collection `reference` within the Firestore database.
 * 
 *   Returns a channel. Creates a new id for `document`. Either
 *   {:id <document-id>} or {:error <error-msg>} will then be placed upon the
 *   channel. The channel will then be closed.
 */
firemore.core.push_BANG_ = (function firemore$core$push_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29110 = arguments.length;
var i__4737__auto___29111 = (0);
while(true){
if((i__4737__auto___29111 < len__4736__auto___29110)){
args__4742__auto__.push((arguments[i__4737__auto___29111]));

var G__29112 = (i__4737__auto___29111 + (1));
i__4737__auto___29111 = G__29112;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.push_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.push_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__29106){
var vec__29107 = p__29106;
var options = cljs.core.nth.call(null,vec__29107,(0),null);
return firemore.firestore.add_db_BANG_.call(null,reference,document,options);
}));

(firemore.core.push_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.push_BANG_.cljs$lang$applyTo = (function (seq29103){
var G__29104 = cljs.core.first.call(null,seq29103);
var seq29103__$1 = cljs.core.next.call(null,seq29103);
var G__29105 = cljs.core.first.call(null,seq29103__$1);
var seq29103__$2 = cljs.core.next.call(null,seq29103__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29104,G__29105,seq29103__$2);
}));

/**
 * Writes the `document` to `reference` within the Firestore database.
 * 
 *   Returns a channel. Overwrites the document at `reference` with `document`.
 *   Iff an error occurs when writing document to Firestore, then the error will
 *   be put upon the channel. The channel will then be closed.
 * 
 *   Note:
 *   channel -> `clojure.core.async/chan`
 *   put     -> `clojure.core.async/put!`
 *   closed  -> `clojure.core.async/close!`
 */
firemore.core.write_BANG_ = (function firemore$core$write_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29120 = arguments.length;
var i__4737__auto___29121 = (0);
while(true){
if((i__4737__auto___29121 < len__4736__auto___29120)){
args__4742__auto__.push((arguments[i__4737__auto___29121]));

var G__29122 = (i__4737__auto___29121 + (1));
i__4737__auto___29121 = G__29122;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.write_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.write_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__29116){
var vec__29117 = p__29116;
var options = cljs.core.nth.call(null,vec__29117,(0),null);
return firemore.firestore.set_db_BANG_.call(null,reference,document,options);
}));

(firemore.core.write_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.write_BANG_.cljs$lang$applyTo = (function (seq29113){
var G__29114 = cljs.core.first.call(null,seq29113);
var seq29113__$1 = cljs.core.next.call(null,seq29113);
var G__29115 = cljs.core.first.call(null,seq29113__$1);
var seq29113__$2 = cljs.core.next.call(null,seq29113__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29114,G__29115,seq29113__$2);
}));

/**
 * Merges `document` into the document at `reference` within the Firestore database.
 * 
 *   Returns a channel. Updates (merges) the document at `reference` with `document`.
 *   Iff an error occurs when writing `document` to Firestore, then the error will be put
 *   upon the channel. The channel will then be closed.
 * 
 *   Note:
 *   channel -> `clojure.core.async/chan`
 *   put     -> `clojure.core.async/put!`
 *   closed  -> `clojure.core.async/close!`
 */
firemore.core.merge_BANG_ = (function firemore$core$merge_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29130 = arguments.length;
var i__4737__auto___29131 = (0);
while(true){
if((i__4737__auto___29131 < len__4736__auto___29130)){
args__4742__auto__.push((arguments[i__4737__auto___29131]));

var G__29132 = (i__4737__auto___29131 + (1));
i__4737__auto___29131 = G__29132;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__29126){
var vec__29127 = p__29126;
var options = cljs.core.nth.call(null,vec__29127,(0),null);
return firemore.firestore.update_db_BANG_.call(null,reference,document,options);
}));

(firemore.core.merge_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.merge_BANG_.cljs$lang$applyTo = (function (seq29123){
var G__29124 = cljs.core.first.call(null,seq29123);
var seq29123__$1 = cljs.core.next.call(null,seq29123);
var G__29125 = cljs.core.first.call(null,seq29123__$1);
var seq29123__$2 = cljs.core.next.call(null,seq29123__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29124,G__29125,seq29123__$2);
}));

/**
 * Deletes the document at `reference` within the Firestore database.
 * 
 *   Returns a channel. Iff an error occurs when deleting reference from Firestore,
 *   then the error will be put upon the channel. The channel will then be closed.
 * 
 *   Note:
 *   channel -> `clojure.core.async/chan`
 *   put     -> `clojure.core.async/put!`
 *   closed  -> `clojure.core.async/close!`
 */
firemore.core.delete_BANG_ = (function firemore$core$delete_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29139 = arguments.length;
var i__4737__auto___29140 = (0);
while(true){
if((i__4737__auto___29140 < len__4736__auto___29139)){
args__4742__auto__.push((arguments[i__4737__auto___29140]));

var G__29141 = (i__4737__auto___29140 + (1));
i__4737__auto___29140 = G__29141;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__29135){
var vec__29136 = p__29135;
var options = cljs.core.nth.call(null,vec__29136,(0),null);
return firemore.firestore.delete_db_BANG_.call(null,reference,options);
}));

(firemore.core.delete_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(firemore.core.delete_BANG_.cljs$lang$applyTo = (function (seq29133){
var G__29134 = cljs.core.first.call(null,seq29133);
var seq29133__$1 = cljs.core.next.call(null,seq29133);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29134,seq29133__$1);
}));

firemore.core.transact_BANG_ = (function firemore$core$transact_BANG_(update_fx){
return firemore.firestore.transact_db_BANG_.call(null,update_fx);
});
firemore.core.create_batch = firemore.firestore.create_batch;
firemore.core.commit_batch_BANG_ = firemore.firestore.commit_batch_BANG_;
/**
 * Returns a channel. Will put! user map or :firemore/no-user as user state changes..
 * 
 *  {:uid <application_unique_id>
 *   :email <user_email_address>
 *   :name <user_identifier>
 *   :photo <url_to_a_photo_for_this_user>}
 * 
 *   Note: :uid will always be present. :email, :name, :photo may be present depending
 *   on sign-in provider and/or whether you have set their values.
 */
firemore.core.user_chan = (function firemore$core$user_chan(){
return null;
});
/**
 * Return the atom that reflects the state of currently logged in user
 */
firemore.core.user_atom = (function firemore$core$user_atom(){
return firemore.authentication.user_atom;
});
/**
 * Returns the last value returned from user-chan.
 */
firemore.core.user = (function firemore$core$user(){
return cljs.core.deref.call(null,firemore.core.user_atom.call(null));
});
firemore.core.login_anonymously_BANG_ = (function firemore$core$login_anonymously_BANG_(){

return firemore.authentication.login_anonymously_BANG_.call(null);
});
/**
 * Returns a channel that will have a uid put! upon it'
 * 
 *   If you are currently logged in, uid will be the uid of the currently logged
 *   in user. If you are not currently logged in, client will login with the
 *   anonymous user, and then the uid will be the uid of the anonymous user.
 * 
 *   Note:
 *   channel -> `clojure.core.async/chan`
 *   put!    -> `clojure.core.async/put!`
 */
firemore.core.uid = (function firemore$core$uid(){
return firemore.authentication.uid.call(null);
});
firemore.core.logout_BANG_ = (function firemore$core$logout_BANG_(){

return firemore.authentication.logout_BANG_.call(null);
});
/**
 * Deletes the currently logged in user from Firestore.
 * 
 *   This removes all sign-in providers for this user, as well as deleting the data in the
 *   user information map returned by (get-user-atom). Note that this does NOT delete
 *   information relating to the user from the actual Firestore database.
 */
firemore.core.delete_user_BANG_ = (function firemore$core$delete_user_BANG_(){
return null;
});
/**
 * Sync the current value of `reference` at `path` within the `atm`
 * 
 *   atm - A clojure atom.
 *   path - a vector location within the `atm` where the Firestore `reference` will be written.
 *   reference - a reference to a location in Firestore.
 * 
 *   Note that the the {path reference} will show up under the :firemore key, and the
 *   {path reference-value} will show up under the :firemore key in `atm`.
 */
firemore.core.watch_BANG_ = (function firemore$core$watch_BANG_(atm,reference,path){
return firemore.hydrator.watch_BANG_.call(null,atm,path,reference);
});
/**
 * Remove the `path` from the `atm`
 */
firemore.core.unwatch_BANG_ = (function firemore$core$unwatch_BANG_(atm,path){
return firemore.hydrator.unwatch_BANG_.call(null,atm,path);
});
/**
 * Add functionality to atom `atm` so that `:user` reflects latest value from `get-user`
 */
firemore.core.watch_user = (function firemore$core$watch_user(atm){
return null;
});
/**
 * Removes functionality on `atm` that may have been added by `watch-user`
 */
firemore.core.unwatch_user = (function firemore$core$unwatch_user(atm){
return null;
});
firemore.core.initialize = firemore.firebase.initialize;

//# sourceMappingURL=core.js.map
