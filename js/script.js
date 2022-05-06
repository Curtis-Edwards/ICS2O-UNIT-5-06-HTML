/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-06-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-06-HTML/",
  })
}

/**
 * Input.
 */

function buttonClicked() {

  const integer1 = parseInt(document.getElementById('integer1').value)
  var integer2 = parseInt(document.getElementById('integer2').value)
  var counter = 0
  var answer = 0

  while (counter != integer2 || counter < integer2) {
    answer + integer1
    counter++
  }
  document.getElementById("output").innerHTML = answer
}

