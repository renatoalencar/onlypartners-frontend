(ns onlypartners.components.mask
  (:require [reagent.core :as r]))

(defn use-mask
  ([valid? format]
   (let [value (r/atom "")]
     [#(deref value)
      #(when (valid? %)
         (reset! value (format %)))]))

  ([valid?]
   (use-mask valid? identity)))