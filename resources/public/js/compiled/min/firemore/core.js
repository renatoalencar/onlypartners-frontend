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
var G__29091_29092 = m;
var G__29091_29093__$1 = (((G__29091_29092 == null))?null:cljs.core.vals.call(null,G__29091_29092));
var G__29091_29094__$2 = (((G__29091_29093__$1 == null))?null:cljs.core.remove.call(null,(function (v){
return cljs.core.some.call(null,(function (p1__29090_SHARP_){
return p1__29090_SHARP_.call(null,v);
}),firemore.core.supported_types);
}),G__29091_29093__$1));
var G__29091_29095__$3 = (((G__29091_29094__$2 == null))?null:cljs.core.first.call(null,G__29091_29094__$2));
var G__29091_29096__$4 = (((G__29091_29095__$3 == null))?null:cljs.core.ex_info.call(null,"Unsupported Data",G__29091_29095__$3));
if((G__29091_29096__$4 == null)){
} else {
throw G__29091_29096__$4;
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
var len__4736__auto___29103 = arguments.length;
var i__4737__auto___29104 = (0);
while(true){
if((i__4737__auto___29104 < len__4736__auto___29103)){
args__4742__auto__.push((arguments[i__4737__auto___29104]));

var G__29105 = (i__4737__auto___29104 + (1));
i__4737__auto___29104 = G__29105;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.get.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__29099){
var vec__29100 = p__29099;
var options = cljs.core.nth.call(null,vec__29100,(0),null);
return firemore.firestore.get_db.call(null,reference,options);
}));

(firemore.core.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(firemore.core.get.cljs$lang$applyTo = (function (seq29097){
var G__29098 = cljs.core.first.call(null,seq29097);
var seq29097__$1 = cljs.core.next.call(null,seq29097);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29098,seq29097__$1);
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
var len__4736__auto___29114 = arguments.length;
var i__4737__auto___29115 = (0);
while(true){
if((i__4737__auto___29115 < len__4736__auto___29114)){
args__4742__auto__.push((arguments[i__4737__auto___29115]));

var G__29116 = (i__4737__auto___29115 + (1));
i__4737__auto___29115 = G__29116;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.watch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.watch.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__29108){
var vec__29109 = p__29108;
var options = cljs.core.nth.call(null,vec__29109,(0),null);
var map__29112 = firemore.firestore.listen.call(null,reference,options);
var map__29112__$1 = (((((!((map__29112 == null))))?(((((map__29112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29112):map__29112);
var c = cljs.core.get.call(null,map__29112__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var unsubscribe = cljs.core.get.call(null,map__29112__$1,new cljs.core.Keyword(null,"unsubscribe","unsubscribe",632650147));
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
(firemore.core.watch.cljs$lang$applyTo = (function (seq29106){
var G__29107 = cljs.core.first.call(null,seq29106);
var seq29106__$1 = cljs.core.next.call(null,seq29106);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29107,seq29106__$1);
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
var len__4736__auto___29124 = arguments.length;
var i__4737__auto___29125 = (0);
while(true){
if((i__4737__auto___29125 < len__4736__auto___29124)){
args__4742__auto__.push((arguments[i__4737__auto___29125]));

var G__29126 = (i__4737__auto___29125 + (1));
i__4737__auto___29125 = G__29126;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.push_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.push_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__29120){
var vec__29121 = p__29120;
var options = cljs.core.nth.call(null,vec__29121,(0),null);
return firemore.firestore.add_db_BANG_.call(null,reference,document,options);
}));

(firemore.core.push_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.push_BANG_.cljs$lang$applyTo = (function (seq29117){
var G__29118 = cljs.core.first.call(null,seq29117);
var seq29117__$1 = cljs.core.next.call(null,seq29117);
var G__29119 = cljs.core.first.call(null,seq29117__$1);
var seq29117__$2 = cljs.core.next.call(null,seq29117__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29118,G__29119,seq29117__$2);
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
var len__4736__auto___29134 = arguments.length;
var i__4737__auto___29135 = (0);
while(true){
if((i__4737__auto___29135 < len__4736__auto___29134)){
args__4742__auto__.push((arguments[i__4737__auto___29135]));

var G__29136 = (i__4737__auto___29135 + (1));
i__4737__auto___29135 = G__29136;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.write_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.write_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__29130){
var vec__29131 = p__29130;
var options = cljs.core.nth.call(null,vec__29131,(0),null);
return firemore.firestore.set_db_BANG_.call(null,reference,document,options);
}));

(firemore.core.write_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.write_BANG_.cljs$lang$applyTo = (function (seq29127){
var G__29128 = cljs.core.first.call(null,seq29127);
var seq29127__$1 = cljs.core.next.call(null,seq29127);
var G__29129 = cljs.core.first.call(null,seq29127__$1);
var seq29127__$2 = cljs.core.next.call(null,seq29127__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29128,G__29129,seq29127__$2);
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
var len__4736__auto___29144 = arguments.length;
var i__4737__auto___29145 = (0);
while(true){
if((i__4737__auto___29145 < len__4736__auto___29144)){
args__4742__auto__.push((arguments[i__4737__auto___29145]));

var G__29146 = (i__4737__auto___29145 + (1));
i__4737__auto___29145 = G__29146;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return firemore.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(firemore.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,document,p__29140){
var vec__29141 = p__29140;
var options = cljs.core.nth.call(null,vec__29141,(0),null);
return firemore.firestore.update_db_BANG_.call(null,reference,document,options);
}));

(firemore.core.merge_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(firemore.core.merge_BANG_.cljs$lang$applyTo = (function (seq29137){
var G__29138 = cljs.core.first.call(null,seq29137);
var seq29137__$1 = cljs.core.next.call(null,seq29137);
var G__29139 = cljs.core.first.call(null,seq29137__$1);
var seq29137__$2 = cljs.core.next.call(null,seq29137__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29138,G__29139,seq29137__$2);
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
var len__4736__auto___29153 = arguments.length;
var i__4737__auto___29154 = (0);
while(true){
if((i__4737__auto___29154 < len__4736__auto___29153)){
args__4742__auto__.push((arguments[i__4737__auto___29154]));

var G__29155 = (i__4737__auto___29154 + (1));
i__4737__auto___29154 = G__29155;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return firemore.core.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(firemore.core.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reference,p__29149){
var vec__29150 = p__29149;
var options = cljs.core.nth.call(null,vec__29150,(0),null);
return firemore.firestore.delete_db_BANG_.call(null,reference,options);
}));

(firemore.core.delete_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(firemore.core.delete_BANG_.cljs$lang$applyTo = (function (seq29147){
var G__29148 = cljs.core.first.call(null,seq29147);
var seq29147__$1 = cljs.core.next.call(null,seq29147);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29148,seq29147__$1);
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
