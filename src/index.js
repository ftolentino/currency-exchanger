import CurrencyExchange from './js/CurrencyExchange';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getElements(response) {
  if(response.conversion_rates) {
    console.log(convertCurrency());
  }
  function convertCurrency() {
    let userUSD = $('#usdInput').val();
    let countryCode = $("#country").val();
    let result = parseFloat((userUSD * countryCode).toFixed(2));
    return result;
  }
  
}

async function makeApiCall() {
  const response = await CurrencyExchange.getCurrencyExchange();
  getElements(response);
}

$(document).ready(function () {
  $('#form-button').click(function () {
    let currencyEx = $("#country").val();
    console.log(currencyEx);
    makeApiCall();
  });
});