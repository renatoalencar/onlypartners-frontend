// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('firemore.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('firemore.config');
goog.require('firemore.authentication');
goog.require('firemore.finalizing_buffer');
goog.require('firemore.firestore');
goog.require('firemore.firebase');
goog.require('firemore.hydrator');
cljs.core.enable_console_print_BANG_();
firemore.core.supported_types = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.float_QMARK_,cljs.core.boolean_QMARK_,cljs.core.nil_QMARK_,cljs.core.inst_QMARK_], null);
firemore.core.throw_if_unsupported = (function firemore$core$throw_if_unsupported(m){
var G__30300_30301 = m;
var G__30300_30302__$1 = (((G__30300_30301 == null))?null:cljs.core.vals(G__30300_30301));
var G__30300_30303__$2 = (((G__30300_30302__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.some((function (p1__30299_SHARP_){
return (p1__30299_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30299_SHARP_.cljs$core$IFn$_invoke$arity$1(v) : p1__30299_SHARP_.call(null,v));
}),firemore.core.supported_types);
}),G__30300_30302__$1));
var G__30300_30304__$3 = (((G__30300_30303__$2 == null))?null:cljs.core.first(G__30300_30303__$2));
var G__30300_30305__$4 = (((G__30300_30304__$3 == null))?null:cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported Data",G__30300_30304__$3));
if((G__30300_30305__$4 == null)){
} else {
throw G__30300_30305__$4;
}

return m;
});
/**
 * Returns the clojure form of the `js-object` document from Firestore.
 */
firemore.core.fire__GT_clj = (function firemore$core$fire__GT_clj(js_object){
return firemore.core.throw_if_unsupported(firemore.firestore.clojurify(js_object));
});
/**
 * Returns a javascript object from the firemore `document` (a clojure map).
 */
firemore.core.clj__GT_fire = (function firemore$core$clj__GT_fire(document){
return firemore.firestore.jsonify(firemore.core.throw_if_unsupported(document));
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
var len__4736__auto___30312 = arguments.length;
var i__4737__auto___30313 = (0);
while(true){
if((i__4737__auto___30313 < len__4736__auto___30312)){
args__4742__auto__.push((arguments[i__4737__auto___30313]));

var G__30314 = (i__4737__auto___30313 + (1));
i__4737__auto___30313 = G__30314;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.get.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__30308){
var vec__30309 = p__30308;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30309,(0),null);
return firemore.firestore.get_db.cljs$core$IFn$_invoke$arity$2(reference,options);
}));

(firemore.core.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(firemore.core.get.cljs$lang$applyTo = (function (seq30306){
var G__30307 = cljs.core.first(seq30306);
var seq30306__$1 = cljs.core.next(seq30306);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30307,seq30306__$1);
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
var len__4736__auto___30323 = arguments.length;
var i__4737__auto___30324 = (0);
while(true){
if((i__4737__auto___30324 < len__4736__auto___30323)){
args__4742__auto__.push((arguments[i__4737__auto___30324]));

var G__30325 = (i__4737__auto___30324 + (1));
i__4737__auto___30324 = G__30325;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.watch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.watch.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__30317){
var vec__30318 = p__30317;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30318,(0),null);
var map__30321 = firemore.firestore.listen.cljs$core$IFn$_invoke$arity$2(reference,options);
var map__30321__$1 = (((((!((map__30321 == null))))?(((((map__30321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30321):map__30321);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30321__$1,cljs.core.cst$kw$c);
var unsubscribe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30321__$1,cljs.core.cst$kw$unsubscribe);
var opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_close,(function (){
return (unsubscribe.cljs$core$IFn$_invoke$arity$0 ? unsubscribe.cljs$core$IFn$_invoke$arity$0() : unsubscribe.call(null));
})], null);
var buffer = firemore.finalizing_buffer.create.cljs$core$IFn$_invoke$arity$2((1),opts);
var finalizing_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buffer);
cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(cljs.core.async.mult(c),finalizing_chan);

return finalizing_chan;
}));

(firemore.core.watch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(firemore.core.watch.cljs$lang$applyTo = (function (seq30315){
var G__30316 = cljs.core.first(seq30315);
var seq30315__$1 = cljs.core.next(seq30315);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30316,seq30315__$1);
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
var len__4736__auto___30333 = arguments.length;
var i__4737__auto___30334 = (0);
while(true){
if((i__4737__auto___30334 < len__4736__auto___30333)){
args__4742__auto__.push((arguments[i__4737__auto___30334]));

var G__30335 = (i__4737__auto___30334 + (1));
i__4737__auto___30334 = G__30335;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.push_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.push_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__30329){
var vec__30330 = p__30329;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330,(0),null);
return firemore.firestore.add_db_BANG_.cljs$core$IFn$_invoke$arity$3(reference,document,options);
}));

(firemore.core.push_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.push_BANG_.cljs$lang$applyTo = (function (seq30326){
var G__30327 = cljs.core.first(seq30326);
var seq30326__$1 = cljs.core.next(seq30326);
var G__30328 = cljs.core.first(seq30326__$1);
var seq30326__$2 = cljs.core.next(seq30326__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30327,G__30328,seq30326__$2);
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
var len__4736__auto___30343 = arguments.length;
var i__4737__auto___30344 = (0);
while(true){
if((i__4737__auto___30344 < len__4736__auto___30343)){
args__4742__auto__.push((arguments[i__4737__auto___30344]));

var G__30345 = (i__4737__auto___30344 + (1));
i__4737__auto___30344 = G__30345;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.write_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.write_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__30339){
var vec__30340 = p__30339;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30340,(0),null);
return firemore.firestore.set_db_BANG_.cljs$core$IFn$_invoke$arity$3(reference,document,options);
}));

(firemore.core.write_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.write_BANG_.cljs$lang$applyTo = (function (seq30336){
var G__30337 = cljs.core.first(seq30336);
var seq30336__$1 = cljs.core.next(seq30336);
var G__30338 = cljs.core.first(seq30336__$1);
var seq30336__$2 = cljs.core.next(seq30336__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30337,G__30338,seq30336__$2);
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
var len__4736__auto___30353 = arguments.length;
var i__4737__auto___30354 = (0);
while(true){
if((i__4737__auto___30354 < len__4736__auto___30353)){
args__4742__auto__.push((arguments[i__4737__auto___30354]));

var G__30355 = (i__4737__auto___30354 + (1));
i__4737__auto___30354 = G__30355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__30349){
var vec__30350 = p__30349;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30350,(0),null);
return firemore.firestore.update_db_BANG_.cljs$core$IFn$_invoke$arity$3(reference,document,options);
}));

(firemore.core.merge_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.merge_BANG_.cljs$lang$applyTo = (function (seq30346){
var G__30347 = cljs.core.first(seq30346);
var seq30346__$1 = cljs.core.next(seq30346);
var G__30348 = cljs.core.first(seq30346__$1);
var seq30346__$2 = cljs.core.next(seq30346__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30347,G__30348,seq30346__$2);
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
var len__4736__auto___30362 = arguments.length;
var i__4737__auto___30363 = (0);
while(true){
if((i__4737__auto___30363 < len__4736__auto___30362)){
args__4742__auto__.push((arguments[i__4737__auto___30363]));

var G__30364 = (i__4737__auto___30363 + (1));
i__4737__auto___30363 = G__30364;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__30358){
var vec__30359 = p__30358;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(0),null);
return firemore.firestore.delete_db_BANG_.cljs$core$IFn$_invoke$arity$2(reference,options);
}));

(firemore.core.delete_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(firemore.core.delete_BANG_.cljs$lang$applyTo = (function (seq30356){
var G__30357 = cljs.core.first(seq30356);
var seq30356__$1 = cljs.core.next(seq30356);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30357,seq30356__$1);
}));

firemore.core.transact_BANG_ = (function firemore$core$transact_BANG_(update_fx){
return firemore.firestore.transact_db_BANG_.cljs$core$IFn$_invoke$arity$1(update_fx);
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
return cljs.core.deref(firemore.core.user_atom());
});
firemore.core.login_anonymously_BANG_ = (function firemore$core$login_anonymously_BANG_(){

return firemore.authentication.login_anonymously_BANG_.cljs$core$IFn$_invoke$arity$0();
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
return firemore.authentication.uid();
});
firemore.core.logout_BANG_ = (function firemore$core$logout_BANG_(){

return firemore.authentication.logout_BANG_.cljs$core$IFn$_invoke$arity$0();
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
return firemore.hydrator.watch_BANG_.cljs$core$IFn$_invoke$arity$3(atm,path,reference);
});
/**
 * Remove the `path` from the `atm`
 */
firemore.core.unwatch_BANG_ = (function firemore$core$unwatch_BANG_(atm,path){
return firemore.hydrator.unwatch_BANG_(atm,path);
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
