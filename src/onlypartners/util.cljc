(ns onlypartners.util)

(defmacro mp-callback [form]
  (let [channel-name (gensym "mp-cb-chan")
        status (gensym "mb-cb-status")
        response (gensym "mb-cb-response")]
    `(let [~channel-name (cljs.core.async/chan)]
       (~@form (fn [^js ~status ^js ~response]
                 (cljs.core.async/go
                   (cljs.core.async/>! ~channel-name
                                       [(< ~status 300)
                                        (cljs.core/js->clj ~response :keywordize-keys true)]))))
       ~channel-name)))