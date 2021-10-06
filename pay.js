var $ = function (id) 
{
    return document.getElementById(id);
}



 var calculate = function()
 {
    var floatHourlyWage, floatHoursWorked, floatTotalPay;
    floatHourlyWage = parseFloat($("hourly_wage").value);
    floatHoursWorked = parseFloat($("hours_worked").value);
    floatTotalPay = parseFloat(floatHourlyWage * floatHoursWorked);
    $("total_pay").value = floatTotalPay.toFixed(2);
 }
 
 window.onload = function () 
{
    $("hourly_wage").value = "";
    $("hours_worked").value = "";
    $("calc").onclick = calculate;
    $("hourly_wage").focus();
}