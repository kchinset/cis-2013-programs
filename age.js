/* This program will calculate age in years to 
age in days, weeks, months, and fortnights*/
var floatAge, floatDays, intWeeks, floatMonths, intFortnights
floatAge = parseFloat(prompt("Enter age in years"));
floatDays = parseFloat(floatAge*365.25) //calculate floatAge by multiplying age in years by 365.25 days in a year
intWeeks = parseInt(floatAge*52)//calculate intWeeks by multiplying age in years by 52 weeks in a year
floatMonths = parseFloat(floatAge*12)//calculate floatMonths by multiplying age in years by 12 months in a year
intFortnights = parseInt(floatDays/14)//calculate intFortnights by dividing age in days by 14 days in a fortnight
alert("Your age in years = " + floatAge.toFixed(2) + ". Your age in days = " + floatDays.toFixed(2) + ". Your age in weeks = " + intWeeks + ". Your age in months = " + floatMonths.toFixed(2) + ". Your age in fortnights = " + intFortnights);//display results