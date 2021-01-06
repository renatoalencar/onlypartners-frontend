(ns onlypartners.core
  (:require [cljs.core.async :as async]
            [reagent.core :as r]
            [reagent.dom :as dom]
            [firemore.core :as firemore]
            [onlypartners.components.group :as group]
            [onlypartners.components.order :as order]
            [onlypartners.components.identification :as identification]
            [onlypartners.components.credit-card :as credit-card]
            [onlypartners.db :as db]
            [onlypartners.router :as router]
            [onlypartners.util :as util]
            [onlypartners.payment :as payment])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defn plan-card [{:keys [id title description price] :as plan}]
  [:li.card.plan-card {:key      id
                       :class    (util/classes :plan-card--selected #(db/selected? id))
                       :on-click #(do
                                    (analytics/track :click-plan :plan plan)
                                    (db/select-plan id))}
   [:b.plan-card__price (util/format-currency price)]
   [:h3.plan-card__title title]
   [:p.plan-card__description description]])

(defn plan-selection [{:keys [group plans]}]
  [:main.plan-selection
   [:div.plan-selection__content
    [group/group-profile group]
    [:ul.plan-list (doall (map plan-card plans))]]
   [:button.button.plan-selection__subscribe-button
    {:disabled (nil? (:selected-plan @db/db))
     :on-click #(do
                  (analytics/track :select-plan :plan (db/selected-plan))
                  (router/go :step :payment))}
    "Assinar"]])

(payment/set-public-key "TEST-21ee96e7-5cab-40a3-959c-7da1a0adbd2a")

(defn submit [event]
  (.preventDefault event)
  (.persist event)

  (analytics/track :pay :plan (db/selected-plan))

  (async/go
    (let [[success? response] (async/<! (payment/create-token (.-target event)))]
      (if success?
        (do
          (db/register-payment response)
          (router/go :step :confirmation))
        (db/report-error "Verifique os dados do cartão.")))))

(defn payment-information [{:keys [group error]}]
  [:main.payment-information
   [order/order-description group #(do
                                     (.preventDefault %)
                                     (analytics/track :change-plan :plan (db/selected-plan))
                                     (router/go :step :plans))]

   [:form.card.payment-information__form {:on-submit submit}
    [:h2.payment-information__form__title "Pagamento"]

    (when error
      [:p.payment-information__error error])

    [identification/cpf-field]

    [identification/email-field]

    [credit-card/card-owner-field]
    [credit-card/card-number-field]
    [credit-card/card-expiration-field]
    [credit-card/card-security-code-field]

    [:button.button {:type :submit} "Pagar"]]])

(defn create-subscription [user-object]
  (analytics/track :subscribe :plan (db/selected-plan))
  (go
    (let [{:keys [payment group]} @db/db
          user (js->clj user-object)]
      (prn user (js/JSON.stringify user-object))
      (async/<!
        (firemore/write! [:subscriptions (str (get user "id"))]
                         {:payment           payment
                          :status            :pending
                          :telegram-user     user
                          :telegram-user-id  (get user "id")
                          :telegram-group-id (:telegram group)})))))

(defn append-telegram-widget [target]
  (let [script (.createElement js/document "script")]
    (set! (.-src script) "https://telegram.org/js/telegram-widget.js?14")
    (set! (.-async script) true)
    (set! (-> script .-dataset .-telegramLogin) "new_agent_773_bot")
    (set! (-> script .-dataset .-size) "large")
    (set! (-> script .-dataset .-onauth) "onlypartners.core.create_subscription(user)")
    (set! (-> script .-dataset .-requestAccess) "write")

    (.appendChild target script)))

(defn telegram-login []
  (let [ref (r/atom nil)]
    (fn []
      [:div {:ref #(reset! ref %)}
       (when @ref
         (append-telegram-widget @ref)
         nil)])))

(defn telegram-login-dev []
  [:button {:on-click #(let [username (js/prompt "Telegram username")]
                         (create-subscription (js-obj :id username)))}
   "Finalizar"])

(defn payment-confirmation [{:keys [group]}]
  [:main.payment-confirmation
   [:img {:src "/img/success.svg"}]
   [:p "Agora basta você acessar com seu Telegram clicando no botão abaixo que te adicionaremos no grupo."]
   [group/group-profile group]
   [telegram-login]])

(defn app [{:keys [step] :as state}]
  (case step
    :plans [plan-selection state]
    :payment [payment-information state]
    :confirmation [payment-confirmation state]
    nil))

(def app-wrapper (-> app
                     (util/attach router/state)
                     (util/attach db/db)))

(go
  (firemore.firebase/initialize {:api-key    "AIzaSyDdGlT3chqZXptsT82H6jSvLKhvs0FqiME"
                                 :project-id "only-partners"})

  (let [[_ group-id] (re-matches #"/subscribe/(?<groupid>[a-zA-Z]+)" js/location.pathname)
        group (async/<! (firemore/get [:groups group-id]))
        plans (async/<! (firemore/get [:groups group-id :plans]))]
    (swap! db/db assoc :group group
           :plans (map #(assoc % :id (-> % meta :id)) plans)))

  (dom/render [app-wrapper]
              (. js/document (getElementById "app"))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
