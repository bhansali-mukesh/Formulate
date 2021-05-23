//FORMULATING FORMULA FOR A GIVEN SEQUENCE.
//@ AUTHOR MUKESH KUMAR BHANSALI

var heading_open = "<H4>";
var heading_close = "</H4>";

function Formulation()
{
	document.getElementById("NOTE").style.display = "none";
	document.getElementById("FORMULA_ONE").innerHTML = "";
	
	var first, second, third;
	var x2, x, constant, delta_of_delta, delta_one, delta_two, first_x, total_variants, next, next_x;
	var x2 = x = constant = 0;
	
	var first = document.getElementById("FIRST").value;
	var second = document.getElementById("SECOND").value;
	var third = document.getElementById("THIRD").value;

	//cout << "ENTER 3 CONSECUTIVE NUMBERS IN YOUR SEQUENCE." <<endl;

	delta_one = second - first;
	delta_two = third - second;
	delta_of_delta = delta_two - delta_one;

	var output;
	
	if( delta_of_delta % 2 == 0 )
	{
		x2 = (delta_of_delta/2);
		if(delta_of_delta != 0)
		{
			total_variants = delta_one % delta_of_delta;
			x = total_variants - x2;
			first_x = delta_one / delta_of_delta;
		}
		else
		{
			x = delta_one;
			first_x = 0;
		}
		constant  = first - ( x2 * first_x * first_x + x * first_x ) ;
		next_x = first_x + 3;		
		next = x2 * next_x * next_x + x * next_x + constant;

		var formula = x2 + "x&sup2; + (" + x + "x) + (" + constant + ")";
		
		output = '<table border="1" style="float:left;"><tr><th colspan="2"><center>' + formula + '</center></th></tr>';
		output += '<tr><th><center> X </center></th> <th><center> SERIES </center></th> </tr>';

		var value;
		for(var i=first_x; i<first_x + 10; i++)
		{
			value = x2 * i * i + x * i + constant;
			output += "<tr>";
			output += '<td width="250"><center>' + i + "</center></td>";
			output += '<td width="250"><center>' + value + "</center></td>";
			output += "</tr>";
		}
		output += '</table>';
		document.getElementById("FORMULA_ONE").innerHTML = heading_open + output + heading_open;
		
		output = "";
		output += '<table border="1"><tr><th colspan="2"><center>' + formula + '</center></th></tr>';
		output += '<tr><th><center> X </center></th> <th><center> SERIES </center></th> </tr>';

		for(var i=1; i<=10; i++)
		{
			value = x2 * i * i + x * i + constant;
			output += "<tr>";constant
			output += '<td width="250"><center>' + i + "</center></td>";
			output += '<td width="250"><center>' + value + "</center></td>";
			output += "</tr>";
		}
		output += '</table>';
		
		document.getElementById("NOTE").style.display = "";
	}
	else
	{
		output = heading_open + "I WAS NOT PROGRAMMED TO FIND FORMULA FOR SUCH TYPE OF SERIES. PLEASE TRY WITH DIFFERENT SERIES."  + heading_close;
	}

	document.getElementById("FORMULA").innerHTML = heading_open + output + heading_open;
}