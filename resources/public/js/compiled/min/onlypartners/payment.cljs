(ns onlypartners.payment
  (:require [cljs.core.async :as async])
  (:require-macros [onlypartners.util :refer [mp-callback]]))

(defn mercado-pago
  []
  (.-Mercadopago js/window))

(defn set-public-key
  [key]
  (.setPublishableKey (mercado-pago) key))

(defn create-token
  [form]
  (mp-callback (.createToken (mercado-pago) form)))
