(ns onlypartners.components.credit-card
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [onlypartners.util :as util]
            [onlypartners.components.mask :as mask]
            [onlypartners.components.validation :as validation]))

(defn- valid-date-format? [date]
  (boolean (re-matches #"\d{0,2}/?\d{0,2}" date)))

(defn- format-date [date]
  (let [[match month year] (re-matches #"(\d{2})/?(\d{2})" date)]
    (if match
      (str month
           (when year "/")
           year)
      date)))

(defn- valid-date? [date]
  (let [[match month year] (re-matches #"(\d{2})/?(\d{0,2})" date)
        month (js/parseInt month)
        year (js/parseInt year)]
    (and match
         (>= month 1)
         (<= month 12)
         (> year 0))))

(defn card-expiration-field []
  (let [[date set-date!] (mask/use-mask valid-date-format? format-date)
        [error validate!] (validation/use-validation "Expiração é obrigatório" empty?
                                                     "Data é inválida" (comp not valid-date?))]
    (fn []
      [:<>
       [:label.label {:for :expiration-date} "Expiração"]
       (when (error)
         [:span.field__error (error)])
       [:input#expiration-date.field {:class       (util/classes :field--invalid error)
                                      :type        :text
                                      :name        :expiration-date
                                      :value       (date)
                                      :on-change   #(set-date! (-> % .-target .-value))
                                      :on-blur     #(validate! (date))
                                      :inputMode   :numeric
                                      :placeholder "DD / AA"}]

       (let [[match month year] (re-matches #"(\d{2})/(\d{2})" (date))]
         (when (some? match)
           [:<>
            [:input {:type          :hidden
                     :data-checkout :cardExpirationMonth
                     :value         month}]
            [:input {:type          :hidden
                     :data-checkout :cardExpirationYear
                     :value         year}]]))])))

(defn card-owner-field []
  [:<>
   [:label.label {:for :name} "Nome do Titular"]
   [:input#name.field {:type          :text
                       :data-checkout :cardholderName
                       :placeholder   "JOAQUIM M M ASSIS"}]])

(def ^:private card-number-pattern
  (let [number "(\\d{0,4})"
        space "\\s?"]
    (re-pattern
      (str "(?:" number space
           "(?:" number space
           "(?:" number space
           "(?:" number ")?" ")?" ")?" ")?"))))

(defn- valid-card-number? [card-number]
  (boolean
    (re-matches #"(\d(\d(\d(\d\s?)?)?)?){0,4}" card-number)))

(defn- format-card-number [card-number]
  (let [[match & parts] (re-matches card-number-pattern card-number)]
    (string/join " " (filter boolean parts))))

(defn card-number-field []
  (let [[card-number set-card-number!] (mask/use-mask valid-card-number? format-card-number)]
    (fn []
      [:<>
       [:label.label {:for :card-number} "Número do cartão"]
       [:input#card-number.field {:type          :text
                                  :data-checkout :cardNumber
                                  :value         (card-number)
                                  :on-change     #(set-card-number! (-> % .-target .-value))
                                  :inputMode     :numeric
                                  :placeholder   "1234 5678 9012 3456"}]])))

(defn card-security-code-field []
  (let [[security-code set-security-code!] (mask/use-mask (partial re-matches #"^\d{0,3}$"))]
    (fn []
      [:<>
       [:label.label {:for :verification-code} "Código de verificação"]
       [:input#verification-code.field {:type          :text
                                        :data-checkout :securityCode
                                        :value         (security-code)
                                        :on-change     #(set-security-code! (-> % .-target .-value))
                                        :inputMode     :numeric
                                        :placeholder   "000"}]])))