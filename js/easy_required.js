/*!-----------------------------------------------------------------------------
 * easy_required
 * v1.0 - built 2017-11-09
 * Licensed under the MIT License.
 * http://www.testersite.it/github/easy_required/v1/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2017 Eugenio Segala
 * --------------------------------------------------------------------------*/

function easy_required(x) {


  var popup = document.getElementsByClassName("popup")[0];

  var errore = document.getElementsByClassName("error")[0];


  var numero_campi = document.getElementsByClassName("easy_required").length;

  document.getElementById(x).onsubmit = function() {

    i = 1;

    messaggi = [];

    while (i <= numero_campi) {

      var campo = document.getElementsByClassName("easy_required")[i - 1];

      if (campo.getAttribute("type") == "checkbox" && campo.checked == false) {

          messaggi.push("The checkbox '" + campo.getAttribute("data-message") + "' is required. <br>");
      } else {

        if (campo.value == "") {

          messaggi.push("The field '" + campo.getAttribute("data-message") + "' is required. <br>");

        };

      };


      i++;

    };

    if (messaggi.length > 0) {

      errore.innerHTML = (messaggi.toString().replace(/,/g, ''));
      popup.style.display = "block";

      return false;

    } else {

      // THIS IS THE SENDING CASE

    };

  };


  document.getElementsByClassName("close")[0].onclick = function() {

    popup.style.display = "none";

  }


};
