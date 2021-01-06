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
var G__28976 = arguments.length;
switch (G__28976) {
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
var G__28979 = arguments.length;
switch (G__28979) {
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
var c__24641__auto___29012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24642__auto__ = (function (){var switch__24474__auto__ = (function (state_28997){
var state_val_28998 = (state_28997[(1)]);
if((state_val_28998 === (1))){
var state_28997__$1 = state_28997;
var statearr_28999_29013 = state_28997__$1;
(statearr_28999_29013[(2)] = null);

(statearr_28999_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28998 === (2))){
var inst_28983 = (state_28997[(7)]);
var inst_28982 = cljs.core.deref.call(null,firemore.authentication.user_atom);
var inst_28983__$1 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_28982);
var state_28997__$1 = (function (){var statearr_29000 = state_28997;
(statearr_29000[(7)] = inst_28983__$1);

return statearr_29000;
})();
if(cljs.core.truth_(inst_28983__$1)){
var statearr_29001_29014 = state_28997__$1;
(statearr_29001_29014[(1)] = (4));

} else {
var statearr_29002_29015 = state_28997__$1;
(statearr_29002_29015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28998 === (3))){
var inst_28995 = (state_28997[(2)]);
var state_28997__$1 = state_28997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28997__$1,inst_28995);
} else {
if((state_val_28998 === (4))){
var inst_28983 = (state_28997[(7)]);
var inst_28985 = cljs.core.async.put_BANG_.call(null,c,inst_28983);
var state_28997__$1 = state_28997;
var statearr_29003_29016 = state_28997__$1;
(statearr_29003_29016[(2)] = inst_28985);

(statearr_29003_29016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28998 === (5))){
var inst_28987 = firemore.authentication.login_anonymously_BANG_.call(null);
var inst_28988 = cljs.core.async.timeout.call(null,(1000));
var state_28997__$1 = (function (){var statearr_29004 = state_28997;
(statearr_29004[(8)] = inst_28987);

return statearr_29004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28997__$1,(7),inst_28988);
} else {
if((state_val_28998 === (6))){
var inst_28993 = (state_28997[(2)]);
var state_28997__$1 = state_28997;
var statearr_29005_29017 = state_28997__$1;
(statearr_29005_29017[(2)] = inst_28993);

(statearr_29005_29017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28998 === (7))){
var inst_28990 = (state_28997[(2)]);
var state_28997__$1 = (function (){var statearr_29006 = state_28997;
(statearr_29006[(9)] = inst_28990);

return statearr_29006;
})();
var statearr_29007_29018 = state_28997__$1;
(statearr_29007_29018[(2)] = null);

(statearr_29007_29018[(1)] = (2));


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
var firemore$authentication$uid_$_state_machine__24475__auto__ = null;
var firemore$authentication$uid_$_state_machine__24475__auto____0 = (function (){
var statearr_29008 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29008[(0)] = firemore$authentication$uid_$_state_machine__24475__auto__);

(statearr_29008[(1)] = (1));

return statearr_29008;
});
var firemore$authentication$uid_$_state_machine__24475__auto____1 = (function (state_28997){
while(true){
var ret_value__24476__auto__ = (function (){try{while(true){
var result__24477__auto__ = switch__24474__auto__.call(null,state_28997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24477__auto__;
}
break;
}
}catch (e29009){if((e29009 instanceof Object)){
var ex__24478__auto__ = e29009;
var statearr_29010_29019 = state_28997;
(statearr_29010_29019[(5)] = ex__24478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29020 = state_28997;
state_28997 = G__29020;
continue;
} else {
return ret_value__24476__auto__;
}
break;
}
});
firemore$authentication$uid_$_state_machine__24475__auto__ = function(state_28997){
switch(arguments.length){
case 0:
return firemore$authentication$uid_$_state_machine__24475__auto____0.call(this);
case 1:
return firemore$authentication$uid_$_state_machine__24475__auto____1.call(this,state_28997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
firemore$authentication$uid_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$0 = firemore$authentication$uid_$_state_machine__24475__auto____0;
firemore$authentication$uid_$_state_machine__24475__auto__.cljs$core$IFn$_invoke$arity$1 = firemore$authentication$uid_$_state_machine__24475__auto____1;
return firemore$authentication$uid_$_state_machine__24475__auto__;
})()
})();
var state__24643__auto__ = (function (){var statearr_29011 = f__24642__auto__.call(null);
(statearr_29011[(6)] = c__24641__auto___29012);

return statearr_29011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24643__auto__);
}));


return c;
});
cljs.core.add_watch.call(null,firemore.firebase.FB,new cljs.core.Keyword(null,"register-auth-with-firebase-application","register-auth-with-firebase-application",32742562),(function (_,___$1,___$2,new$){
return firemore.firebase.auth.call(null,new$).onAuthStateChanged(firemore.authentication.user_change_handler);
}));

//# sourceMappingURL=authentication.js.map
