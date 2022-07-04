import CurrencyExchange from "./js/CurrencyExchange";

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

function clearFields() {
  $("#output").text("");
  $(".showError").text("");
}

function getElements(response) {
  const body = response;
  let conversionRate = body.conversion_rate;
  let usd = $("#usdInput").val();
  let result = conversion(usd, conversionRate);

  if(!result) {
    $(".showError").text(`Please complete the form. Enter a number and select a country.`);
  }

  if (response) {
    $("#output").text(result);
  } else {
    $(".showError").text(
      `there was an error processing your request; ${response}`
    );
  }
}

$(document).ready(function () {
  $("#form-button").click(function () {
    let country = $("#country").val();
    clearFields();
    makeApiCall(country);
  });
});

async function makeApiCall(country) {
  let response = await CurrencyExchange.getCurrencyExchange(country);
  getElements(response);
}

function conversion(amount, country) {
  let countryCode = country;
  let usdAmount = amount;

  return parseFloat((usdAmount * countryCode).toFixed(2));
}
