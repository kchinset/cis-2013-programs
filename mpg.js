var floatMiles, floatGallons, floatMpg;
floatMiles = parseFloat(prompt("Enter miles driven")); //ask number of miles driven
floatGallons = parseFloat(prompt("Enter gallons of gas used")); //ask number of gallons used
floatMpg = parseFloat(floatMiles/floatGallons); //divides number of miles by gallons
alert("Miles per gallon = " + floatMpg.toFixed(2));