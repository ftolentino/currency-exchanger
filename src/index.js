import CurrencyExchange from './js/CurrencyExchange';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getElements(response) {
  if(response) {
    const body = response;
    let countries = body;
    console.log(countries);
    // $("#output").text(countries);
  } else {
    $(".showError").text(`there was an error processing your request; ${response}`);
  }
  // function convertCurrency() {
  //   let userUSD = $('#usdInput').val();
  //   let countryCode = $("#country").val();
  //   let result = parseFloat((userUSD * countryCode).toFixed(2));
  //   return result;
  // }
  
}

$(document).ready(function () {
  $('#form-button').click(function () {
    let country = $("#country").val();
    let amount = $("#usdInput").val();
    makeApiCall(country);
    console.log(amount);
    conversion(country, amount);
  });
});

async function makeApiCall(country) {
  let response = await CurrencyExchange.getCurrencyExchange(country);
  getElements(response);
}

function conversion (country, amount) {
  let countryCode = country;
  let usdAmount = amount;

  return usdAmount * countryCode;
}