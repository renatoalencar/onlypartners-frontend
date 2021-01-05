(ns onlypartners.components.order
  (:require [onlypartners.components.group :as group]
            [onlypartners.db :as db]
            [onlypartners.util :as util]))

(defn order-description [group on-change-order]
  [:section.card.order-description
   [group/group-profile group]
   [:hr.divider]

   (let [{:keys [title price]} (db/selected-plan)]
     [:ul.order-description__items
      [:li
       [:span.order-description__items__item "Plano"]
       [:span.order-description__items__name title]]

      [:li
       [:span.order-description__items__item "Preço"]
       [:span.order-description__items__name (util/format-currency price)]]])

   [:a.link {:href "#" :on-click on-change-order} "Trocar"]])