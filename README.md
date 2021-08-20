# onlypartners frontend

Only Partners was an attempt of building a small side business while I was unemployed,
the idea was to provide a tool for people building communities on Telegram groups to
charge for the participants to join the group.

## Overview

This is a ClojureScript project with Reagent, I was learning Clojure and ClojureScript at
the time and would like to apply to something cool I'd build. Unfortunately, after finally
finding a new job I could't dedicate time this small project and ended up being forgotten.

## Setup

To get an interactive development environment run:

    npm install
    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright @ 2021 Renato Alencar

Licensed under the terms of the MIT license.
