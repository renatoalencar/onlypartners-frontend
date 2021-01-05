(ns onlypartners.util
  (:require [clojure.string :as string]))

(defn create-number-formatter [language & options]
  (.NumberFormat js/Intl
                 language
                 (clj->js (apply hash-map options))))

(defn format-currency [x]
  (-> (create-number-formatter js/undefined
                               :style    "currency"
                               :currency "BRL")
      (.format x)))

(defn printrn [x]
  (prn x)
  x)

(defn classes [& args]
  (->> (apply hash-map args)
       (filter #((second %)))
       (map (comp name first))
       (string/join " ")))

(defn attach [f ref]
  (fn [props] [f (merge @ref props)]))