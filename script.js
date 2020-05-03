$(document).ready(function () {
  $("#night-light").click(function () {
    if ($("#night-light").is(":checked")) {
      $("html").addClass("night");
    } else {
      $("html").removeClass("night");
    }
  });
});

$(function () {
  var night = localStorage.getItem("night");
  if (night !== null) {
    $("#night-light").attr("checked", "checked");
    $("html").addClass("night");
  } else {
    $("html").removeClass("night");
  }
});

$("#night-light").click(function () {
  if ($(this).is(":checked")) {
    localStorage.setItem("night", $(this).val());
  } else {
    localStorage.removeItem("night");
  }
});