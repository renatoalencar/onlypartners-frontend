(ns onlypartners.components.validation
  (:require [reagent.core :as r]))

(defn use-validation [& validations]
  (let [error (r/atom nil)
        validations-map (apply hash-map validations)
        validate (fn [value]
                   (reset! error
                           (some (fn [[msg f]]
                                   (when (f value) msg))
                                 validations-map)))]
    [#(deref error)
     validate]))