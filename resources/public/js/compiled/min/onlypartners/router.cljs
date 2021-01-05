(ns onlypartners.router
  (:require [reagent.core :as r]))

(def state (r/atom {:group-id "subscribe"
                    :step :plans}))

(def go (partial swap! state assoc))
