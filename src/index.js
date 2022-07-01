import CurrencyExchange from './js/CurrencyExchange';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getElements(response) {
  if(response) {
    console.log(response);
  }
}

async function makeApiCall(currency) {
  const response = await CurrencyExchange.getCurrencyExchange(currency);
  getElements(response);
}

$(document).ready(function () {
  $('#form-button').click(function () {
    let currencyEx = $("#country").val();
    makeApiCall(currencyEx);
  });
});