$(document).ready(function () {
    $(".e-invoice-btn").click(function(){
        $(".invoice-pagination1").show();
    })
    $(".e-invoice-btn").click(function () {
        $(".invoice-pagination2").hide();
    })
    $(".paper-invoice-btn").click(function () {
        $(".invoice-pagination1").hide();
    })
    $(".paper-invoice-btn").click(function () {
        $(".invoice-pagination2").show();
    })
    $(".paper-invoice-btn").click(function () {
        $(".e-invoice-btn").removeClass("active")
    })
    $(".paper-invoice-btn").click(function () {
        $(".paper-invoice-btn").addClass("active")
    })
    $(".e-invoice-btn").click(function () {
        $(".paper-invoice-btn").removeClass("active")
    })
    $(".e-invoice-btn").click(function () {
        $(".e-invoice-btn").addClass("active")
    })
})