(ns onlypartners.components.group)

(defn group-profile [{:keys [picture name]}]
  [:div.group-profile
   [:img.group-profile__picture {:src picture}]
   [:h1.group-profile__name name]])