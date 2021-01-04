(ns onlypartners.db
  (:require [reagent.core :as r]))

(def default-db {:group {}
                 :plans []
                 :selected-plan nil}
              #_{:group         {:picture  "https://placekitten.com/640/640"
                                 :name "Lorem Ipsum"}
                 :plans         [{:id          1
                                  :title       "Plano anual"
                                  :description "Lorem ipsum dolor"
                                  :price       180}

                                 {:id          2
                                  :title       "Plano mensal"
                                  :description "Lorem ipsum dolor sit"
                                  :price       18}]

                 :selected-plan 1})

(def db (r/atom default-db))

(add-watch db :debug
           (fn [key atom old-state new-state]
             (prn {:key key
                   :atom atom
                   :old-state old-state
                   :new-state new-state})))

(defn selected? [id]
  (= (:selected-plan @db) id))

(defn select-plan [id]
  (swap! db assoc :selected-plan id))

(defn selected-plan []
  (let [{:keys [selected-plan plans]} @db]
    (first (filter #(= selected-plan (:id %)) plans))))

(defn report-error [error]
  (swap! db assoc :error error))

(defn step-to [step]
  (swap! db assoc :step step))
