// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('firemore.authentication');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('firemore.firebase');
goog.require('firemore.config');
cljs.core.enable_console_print_BANG_.call(null);
firemore.authentication.signing_in_QMARK_ = cljs.core.atom.call(null,false);
firemore.authentication.user_atom = cljs.core.atom.call(null,null);
firemore.authentication.user_change_handler = (function firemore$authentication$user_change_handler(js_user){
if(cljs.core.truth_(js_user)){
return cljs.core.reset_BANG_.call(null,firemore.authentication.user_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),js_user.isAnonymous,new cljs.core.Keyword(null,"uid","uid",-1447769400),js_user.uid], null));
} else {
return null;
}
});
firemore.authentication.login_anonymously_BANG_ = (function firemore$authentication$login_anonymously_BANG_(var_args){
var G__28961 = arguments.length;
switch (G__28961) {
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
return firemore.authentication.login_anonymously_BANG_.call(null,cljs.core.deref.call(null,firemore.firebase.FB));
}));

(firemore.authentication.login_anonymously_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (fb){
if(cljs.core.truth_(cljs.core.deref.call(null,firemore.authentication.signing_in_QMARK_))){
return null;
} else {
firemore.firebase.auth.call(null,fb).signInAnonymously();

return cljs.core.reset_BANG_.call(null,firemore.authentication.signing_in_QMARK_,true);
}
}));

(firemore.authentication.login_anonymously_BANG_.cljs$lang$maxFixedArity = 1);

firemore.authentication.logout_BANG_ = (function firemore$authentication$logout_BANG_(var_args){
var G__28964 = arguments.length;
switch (G__28964) {
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
return firemore.authentication.logout_BANG_.call(null,cljs.core.deref.call(null,firemore.firebase.FB));
}));

(firemore.authentication.logout_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (fb){
return firemore.firebase.auth.call(null,fb).signOut();
}));

(firemore.authentication.logout_BANG_.cljs$lang$maxFixedArity = 1);

firemore.authentication.uid = (function firemore$authentication$uid(){
var c = cljs.core.async.chan.call(null);
var c__24626__auto___28997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24627__auto__ = (function (){var switch__24459__auto__ = (function (state_28982){
var state_val_28983 = (state_28982[(1)]);
if((state_val_28983 === (1))){
var state_28982__$1 = state_28982;
var statearr_28984_28998 = state_28982__$1;
(statearr_28984_28998[(2)] = null);

(statearr_28984_28998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (2))){
var inst_28968 = (state_28982[(7)]);
var inst_28967 = cljs.core.deref.call(null,firemore.authentication.user_atom);
var inst_28968__$1 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_28967);
var state_28982__$1 = (function (){var statearr_28985 = state_28982;
(statearr_28985[(7)] = inst_28968__$1);

return statearr_28985;
})();
if(cljs.core.truth_(inst_28968__$1)){
var statearr_28986_28999 = state_28982__$1;
(statearr_28986_28999[(1)] = (4));

} else {
var statearr_28987_29000 = state_28982__$1;
(statearr_28987_29000[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (3))){
var inst_28980 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28982__$1,inst_28980);
} else {
if((state_val_28983 === (4))){
var inst_28968 = (state_28982[(7)]);
var inst_28970 = cljs.core.async.put_BANG_.call(null,c,inst_28968);
var state_28982__$1 = state_28982;
var statearr_28988_29001 = state_28982__$1;
(statearr_28988_29001[(2)] = inst_28970);

(statearr_28988_29001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (5))){
var inst_28972 = firemore.authentication.login_anonymously_BANG_.call(null);
var inst_28973 = cljs.core.async.timeout.call(null,(1000));
var state_28982__$1 = (function (){var statearr_28989 = state_28982;
(statearr_28989[(8)] = inst_28972);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28982__$1,(7),inst_28973);
} else {
if((state_val_28983 === (6))){
var inst_28978 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_28990_29002 = state_28982__$1;
(statearr_28990_29002[(2)] = inst_28978);

(statearr_28990_29002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (7))){
var inst_28975 = (state_28982[(2)]);
var state_28982__$1 = (function (){var statearr_28991 = state_28982;
(statearr_28991[(9)] = inst_28975);

return statearr_28991;
})();
var statearr_28992_29003 = state_28982__$1;
(statearr_28992_29003[(2)] = null);

(statearr_28992_29003[(1)] = (2));


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
});
return (function() {
var firemore$authentication$uid_$_state_machine__24460__auto__ = null;
var firemore$authentication$uid_$_state_machine__24460__auto____0 = (function (){
var statearr_28993 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28993[(0)] = firemore$authentication$uid_$_state_machine__24460__auto__);

(statearr_28993[(1)] = (1));

return statearr_28993;
});
var firemore$authentication$uid_$_state_machine__24460__auto____1 = (function (state_28982){
while(true){
var ret_value__24461__auto__ = (function (){try{while(true){
var result__24462__auto__ = switch__24459__auto__.call(null,state_28982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24462__auto__;
}
break;
}
}catch (e28994){if((e28994 instanceof Object)){
var ex__24463__auto__ = e28994;
var statearr_28995_29004 = state_28982;
(statearr_28995_29004[(5)] = ex__24463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29005 = state_28982;
state_28982 = G__29005;
continue;
} else {
return ret_value__24461__auto__;
}
break;
}
});
firemore$authentication$uid_$_state_machine__24460__auto__ = function(state_28982){
switch(arguments.length){
case 0:
return firemore$authentication$uid_$_state_machine__24460__auto____0.call(this);
case 1:
return firemore$authentication$uid_$_state_machine__24460__auto____1.call(this,state_28982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
firemore$authentication$uid_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$0 = firemore$authentication$uid_$_state_machine__24460__auto____0;
firemore$authentication$uid_$_state_machine__24460__auto__.cljs$core$IFn$_invoke$arity$1 = firemore$authentication$uid_$_state_machine__24460__auto____1;
return firemore$authentication$uid_$_state_machine__24460__auto__;
})()
})();
var state__24628__auto__ = (function (){var statearr_28996 = f__24627__auto__.call(null);
(statearr_28996[(6)] = c__24626__auto___28997);

return statearr_28996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24628__auto__);
}));


return c;
});
cljs.core.add_watch.call(null,firemore.firebase.FB,new cljs.core.Keyword(null,"register-auth-with-firebase-application","register-auth-with-firebase-application",32742562),(function (_,___$1,___$2,new$){
return firemore.firebase.auth.call(null,new$).onAuthStateChanged(firemore.authentication.user_change_handler);
}));

//# sourceMappingURL=authentication.js.map
