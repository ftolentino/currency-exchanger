import CurrencyExchange from './js/CurrencyExchange';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getElements(response) {
  if(response) {
    const body = response;
    let conversionRate = body.conversion_rate;
    let usd = $("#usdInput").val();
    console.log(conversionRate);
    let result = conversion(usd, conversionRate);
    console.log(result);
  } else {
    $(".showError").text(`there was an error processing your request; ${response}`);
  }
}

$(document).ready(function () {
  $('#form-button').click(function () {
    let country = $("#country").val();
    let amount = $("#usdInput").val();
    
    console.log(amount);
    makeApiCall(country);
  });
});

async function makeApiCall(country) {
  let response = await CurrencyExchange.getCurrencyExchange(country);
  getElements(response);
}

function conversion (amount, country) {
  let countryCode = country;
  let usdAmount = amount;

  return parseFloat((usdAmount * countryCode).toFixed(2));
}