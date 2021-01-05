// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('firemore.authentication');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('firemore.firebase');
goog.require('firemore.config');
cljs.core.enable_console_print_BANG_();
firemore.authentication.signing_in_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
firemore.authentication.user_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
firemore.authentication.user_change_handler = (function firemore$authentication$user_change_handler(js_user){
if(cljs.core.truth_(js_user)){
return cljs.core.reset_BANG_(firemore.authentication.user_atom,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$anonymous_QMARK_,js_user.isAnonymous,cljs.core.cst$kw$uid,js_user.uid], null));
} else {
return null;
}
});
firemore.authentication.login_anonymously_BANG_ = (function firemore$authentication$login_anonymously_BANG_(var_args){
var G__30252 = arguments.length;
switch (G__30252) {
case 0:
return firemore.authentication.login_anonymously_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firemore.authentication.login_anonymously_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.authentication.login_anonymously_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return firemore.authentication.login_anonymously_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(firemore.firebase.FB));
}));

(firemore.authentication.login_anonymously_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (fb){
if(cljs.core.truth_(cljs.core.deref(firemore.authentication.signing_in_QMARK_))){
return null;
} else {
firemore.firebase.auth(fb).signInAnonymously();

return cljs.core.reset_BANG_(firemore.authentication.signing_in_QMARK_,true);
}
}));

(firemore.authentication.login_anonymously_BANG_.cljs$lang$maxFixedArity = 1);

firemore.authentication.logout_BANG_ = (function firemore$authentication$logout_BANG_(var_args){
var G__30255 = arguments.length;
switch (G__30255) {
case 0:
return firemore.authentication.logout_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firemore.authentication.logout_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(firemore.authentication.logout_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return firemore.authentication.logout_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(firemore.firebase.FB));
}));

(firemore.authentication.logout_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (fb){
return firemore.firebase.auth(fb).signOut();
}));

(firemore.authentication.logout_BANG_.cljs$lang$maxFixedArity = 1);

firemore.authentication.uid = (function firemore$authentication$uid(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__28061__auto___30288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28062__auto__ = (function (){var switch__27989__auto__ = (function (state_30273){
var state_val_30274 = (state_30273[(1)]);
if((state_val_30274 === (1))){
var state_30273__$1 = state_30273;
var statearr_30275_30289 = state_30273__$1;
(statearr_30275_30289[(2)] = null);

(statearr_30275_30289[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30274 === (2))){
var inst_30259 = (state_30273[(7)]);
var inst_30258 = cljs.core.deref(firemore.authentication.user_atom);
var inst_30259__$1 = cljs.core.cst$kw$uid.cljs$core$IFn$_invoke$arity$1(inst_30258);
var state_30273__$1 = (function (){var statearr_30276 = state_30273;
(statearr_30276[(7)] = inst_30259__$1);

return statearr_30276;
})();
if(cljs.core.truth_(inst_30259__$1)){
var statearr_30277_30290 = state_30273__$1;
(statearr_30277_30290[(1)] = (4));

} else {
var statearr_30278_30291 = state_30273__$1;
(statearr_30278_30291[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30274 === (3))){
var inst_30271 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30273__$1,inst_30271);
} else {
if((state_val_30274 === (4))){
var inst_30259 = (state_30273[(7)]);
var inst_30261 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,inst_30259);
var state_30273__$1 = state_30273;
var statearr_30279_30292 = state_30273__$1;
(statearr_30279_30292[(2)] = inst_30261);

(statearr_30279_30292[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30274 === (5))){
var inst_30263 = firemore.authentication.login_anonymously_BANG_.cljs$core$IFn$_invoke$arity$0();
var inst_30264 = cljs.core.async.timeout((1000));
var state_30273__$1 = (function (){var statearr_30280 = state_30273;
(statearr_30280[(8)] = inst_30263);

return statearr_30280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30273__$1,(7),inst_30264);
} else {
if((state_val_30274 === (6))){
var inst_30269 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30281_30293 = state_30273__$1;
(statearr_30281_30293[(2)] = inst_30269);

(statearr_30281_30293[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30274 === (7))){
var inst_30266 = (state_30273[(2)]);
var state_30273__$1 = (function (){var statearr_30282 = state_30273;
(statearr_30282[(9)] = inst_30266);

return statearr_30282;
})();
var statearr_30283_30294 = state_30273__$1;
(statearr_30283_30294[(2)] = null);

(statearr_30283_30294[(1)] = (2));


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
});
return (function() {
var firemore$authentication$uid_$_state_machine__27990__auto__ = null;
var firemore$authentication$uid_$_state_machine__27990__auto____0 = (function (){
var statearr_30284 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30284[(0)] = firemore$authentication$uid_$_state_machine__27990__auto__);

(statearr_30284[(1)] = (1));

return statearr_30284;
});
var firemore$authentication$uid_$_state_machine__27990__auto____1 = (function (state_30273){
while(true){
var ret_value__27991__auto__ = (function (){try{while(true){
var result__27992__auto__ = switch__27989__auto__(state_30273);
if(cljs.core.keyword_identical_QMARK_(result__27992__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27992__auto__;
}
break;
}
}catch (e30285){if((e30285 instanceof Object)){
var ex__27993__auto__ = e30285;
var statearr_30286_30295 = state_30273;
(statearr_30286_30295[(5)] = ex__27993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30273);

return cljs.core.cst$kw$recur;
} else {
throw e30285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27991__auto__,cljs.core.cst$kw$recur)){
var G__30296 = state_30273;
state_30273 = G__30296;
continue;
} else {
return ret_value__27991__auto__;
}
break;
}
});
firemore$authentication$uid_$_state_machine__27990__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return firemore$authentication$uid_$_state_machine__27990__auto____0.call(this);
case 1:
return firemore$authentication$uid_$_state_machine__27990__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
firemore$authentication$uid_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$0 = firemore$authentication$uid_$_state_machine__27990__auto____0;
firemore$authentication$uid_$_state_machine__27990__auto__.cljs$core$IFn$_invoke$arity$1 = firemore$authentication$uid_$_state_machine__27990__auto____1;
return firemore$authentication$uid_$_state_machine__27990__auto__;
})()
})();
var state__28063__auto__ = (function (){var statearr_30287 = (f__28062__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28062__auto__.cljs$core$IFn$_invoke$arity$0() : f__28062__auto__.call(null));
(statearr_30287[(6)] = c__28061__auto___30288);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28063__auto__);
}));


return c;
});
cljs.core.add_watch(firemore.firebase.FB,cljs.core.cst$kw$register_DASH_auth_DASH_with_DASH_firebase_DASH_application,(function (_,___$1,___$2,new$){
return firemore.firebase.auth(new$).onAuthStateChanged(firemore.authentication.user_change_handler);
}));
