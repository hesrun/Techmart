"use strict";

window.addEventListener('load', function () {
  $('.loader').fadeOut();
});
document.addEventListener('DOMContentLoaded', function (e) {
  $('#toWrite').click(function () {
    $('#feedback').modal({
      showClose: false
    });
  });
});