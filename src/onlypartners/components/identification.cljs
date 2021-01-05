(ns onlypartners.components.identification
  (:require [reagent.core :as r]
            [onlypartners.util :as util]
            [onlypartners.components.mask :as mask]
            [onlypartners.components.validation :as validation]))

(def cpf-format
  (let [triad "(\\d{3})"
        digit "(\\d{2})"
        dot "\\.?"
        dash "-?"]
    (re-pattern (str "(?:" triad dot
                     "(?:" triad dot
                     "(?:" triad dash
                     "(?:" digit ")?" ")?" ")?" ")?"))))

(defn- format-cpf [cpf]
  (let [[match p1 p2 p3 digit] (re-matches cpf-format cpf)
        formatted (str
                    p1 (when p2 ".")
                    p2 (when p3 ".")
                    p3 (when digit "-")
                    digit)]
    (if match formatted cpf)))

(defn- valid-cpf-format? [cpf]
  (some? (re-matches #"[\d\.-]{0,14}" cpf)))

(defn valid-cpf? [cpf]
  (let [digits (mapv js/parseInt (re-seq #"\d" cpf))
        get-digit #(- 11 (mod (reduce + (map *
                                             (take % digits)
                                             (reverse (range 2 (+ % 2)))))
                              11))]
    (and (= (get-digit 9)
            (get digits 9))

         (= (get-digit 10)
            (get digits 10)))))

(defn cpf-field []
  (let [[cpf set-cpf!] (mask/use-mask valid-cpf-format? format-cpf)
        [error validate!] (validation/use-validation "CPF é obrigatório" empty?
                                                     "CPF não é válido" (comp not valid-cpf?))]
    (fn []
      [:<>
       [:label.label {:for :identification} "CPF"]

       (when (error)
         [:span.field__error (error)])

       [:input#identification.field {:class         (util/classes :field--invalid
                                                                  #(some? (error)))
                                     :type          :text
                                     :data-checkout :docNumber
                                     :value         (cpf)
                                     :on-change     #(set-cpf! (-> % .-target .-value))
                                     :on-blur       #(validate! (cpf))
                                     :placeholder   "123.456.789-00"
                                     :inputMode     :numeric}]
       [:input {:type          :hidden
                :data-checkout :docType
                :value         :CPF}]])))

(defn email-field []
  (let [email (r/atom "")
        [error validate!] (validation/use-validation "E-mail é obrigatório" empty?)]
    (fn []
      [:<>
       [:label.label {:for :email} "E-mail"]

       (when (error)
         [:span.field__error (error)])

       [:input#email.field {:class       (util/classes :field--invalid #(some? (error)))
                            :type        :email
                            :name        :email
                            :value       @email
                            :on-change   #(reset! email (-> % .-target .-value))
                            :on-blur     #(validate! @email)
                            :placeholder "fulano@exemplo.com.br"}]])))