/*!-----------------------------------------------------------------------------
 * easy_required
 * v1.0 - built 2017-11-09
 * Licensed under the MIT License.
 * http://www.testersite.it/github/easy_required/v1/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2017 Eugenio Segala
 * --------------------------------------------------------------------------*/

function easy_required(x) {

var numero_campi = document.getElementsByClassName("easy_required").length;

var i = 1;

document.querySelector(x).onsubmit = function() {

  var messaggi = [];

  while (i <= numero_campi) {

    if (document.querySelector(".req_" + i + "").value == "") {

      messaggi.push("'" + document.querySelector(".req_" + i + "").getAttribute("data-message") + "' field is required.\n")

    };

    i++;

  }

  if (typeof messaggi !== 'undefined' && messaggi.length > 0) {

    alert(messaggi.toString().replace(',',''));

    messaggi = [];

    i = 1;

    return false;

  }

};

}
