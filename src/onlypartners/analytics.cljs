(ns onlypartners.analytics)

(defn track [event & traits]
  (js/plausible (str event)
                (js-obj :props
                        (apply js-obj traits))))
