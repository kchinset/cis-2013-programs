
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);

	alert ("The Rectangle area is " + rectArea(floatRectWidth, floatRectHeight) + " and the perimeter is " + rectPerim(floatRectWidth, floatRectHeight) + "\n\n" +
		"The Triangle area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3) + " and the perimeter is " + triPerim(floatTriSide1, floatTriSide2, floatTriSide3) + "\n\n" +
		"The Circle area is " + circleArea(floatRadius) + " and the circumference is " + circleCircum(floatRadius));

};


//circle circumference
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}

//circle area
var calcCircleArea = function()
{
    var floatRadius = parseFloat($("radius").value);
    alert ("The Circle area is " + circleArea(floatRadius));
};

function circleArea(floatRadius_par)
{
    var floatArea = parseFloat (Math.PI * Math.pow( floatRadius_par, 2));
    return floatArea.toFixed(2);
}

//rectangle area
var calcRectArea = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    alert ("The Rectangle area is " + rectArea(floatRectWidth, floatRectHeight));
};

function rectArea(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectArea = parseFloat (floatRectWidth_par * floatRectHeight_par);
    return floatRectArea.toFixed(2);
}

//rectangle perimeter
var calcRectPerim = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    alert ("The Rectangle perimeter is " + rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectPerim = parseFloat((floatRectWidth_par * 2) + (floatRectHeight_par * 2));
    return floatRectPerim.toFixed(2);
}

//triangle perimeter
var calcTriPerim= function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);
    alert ("The Triangle perimeter is " + triPerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triPerim(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatTriPerim = parseFloat(floatTriSide1_par + floatTriSide2_par + floatTriSide3_par);
    return floatTriPerim.toFixed(2);
}

//triangle area
var calcTriArea = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);
    alert ("The Triangle area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatTriArea = parseFloat(Math.sqrt((floatTriSide1_par + floatTriSide2_par + floatTriSide3_par/2) * floatTriSide1_par * floatTriSide2_par * floatTriSide3_par, 2));
    return floatTriArea.toFixed(2);
}

window.onload = function () 
{
    //clear the DOM values..
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircleArea; // runs the calcCircleArea function when clicked
    $("calc_rect_area").onclick = calcRectArea; //runs the calcRectArea function when clicked
    $("calc_rect_perim").onclick = calcRectPerim //runs the calcRectPerim function when clicked
    $("calc_tri_area").onclick = calcTriArea //runs the calcTriArea function when clicked
    $("calc_tri_perim").onclick = calcTriPerim //runs the calcTriPerim function when clicked
};