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

  var messaggi = [];

  document.querySelector(x).onsubmit = function() {

    while (i <= numero_campi) {

      var campo = document.getElementsByClassName("easy_required")[i - 1];

      if (campo.getAttribute("type") == "checkbox") {

        if (campo.checked == false) {

          messaggi.push("The field '" + campo.getAttribute("data-message") + "' is required.\n");

        };

      } else {

        if (campo.value == "") {

          messaggi.push("The field '" + campo.getAttribute("data-message") + "' is required.\n");

        };

      };


      i++;

    };

    if (messaggi.length > 0) {

      alert(messaggi.toString().replace(/,/g, ''));

      messaggi = [];

      i = 1;

      return false;

    } else {

      // TURE CONDITIONS

    };

  };

};
