// Change the Backgroud Color of Homepage
function changeBG() {
	// body...
	var body = document.getElementById('body1');
	if (body.style.backgroundColor != 'white') {
		body.style.backgroundColor = 'white';
	}else {
		// alert('else');	
		body.style.backgroundColor = 'lightblue';
	}

}

// Show Current Time
//generation of information (e.g. date) 
function displayDate() {
	// body...
	var myDate = new Date();
	var res = '';
	res += myDate.getYear()+1900+"-"+ (myDate.getMonth()+1)+"-"+myDate.getDate()+"  "+myDate.getHours()+":"+ myDate.getMinutes();+":"+ myDate.getSeconds();
	document.getElementById("demo").innerHTML = res;
}

var flag = 0;
var current_ul = null;

//Change the Background Color when Clicked
//attribute or node value change 
//A reasonable array of JavaScript functionality
function changeRowBG(li,ul){
	//document.write(ul);
	if(current_ul != ul){
		flag = 0;
		//console.log("jesus！");
	}

	if(flag == 0){
		li.style.background = "lightblue";
		flag = 1;
		current_ul = ul; 
	}
}

var satisfaction = ["Crazy Love", "Satisfied", "General", "Dislike"];
var count = 0;
function submit() {
	var i, j;
	for(j=1; j<7; j++){
		for (i = 1; i < 5; i++) {
			if (document.getElementById('li'+j+'.'+i).style.background=='lightblue') {
				// alert(document.getElementById('li'+j+'.'+i).value);
				// break;
				count+=document.getElementById('li'+j+'.'+i).value
			}
		}

	}
	 //alert("Your score is "+count/6 );
		AVG=count/6;

		if ((count/6)==4){
			alert("Your satisfaction score is "+AVG)
			alert("Your satisfaction is "+satisfaction[0]+"." )
		}
		else if(3<=(count/6)&&(count/6)<4){
			alert("Your satisfaction score is "+AVG)
			alert("Your satisfaction is "+satisfaction[1]+"." )
		}
		else if(2<=(count/6)&&(count/6)<3){
			alert("Your satisfaction score is "+AVG)
			alert("Your satisfaction is "+satisfaction[2]+"." )
		}
		else{
			alert("Your satisfaction score is"+AVG)
			alert("Your satisfaction is "+satisfaction[3]+"." )
		}

//Create a node to appreciate the survey taker
//node manipulation (create node, clone node) 
		var element = document.getElementById("div1");
		var para = document.createElement("p");
		var p1txt = document.createTextNode("Thanks for your cooperation.");
		para.appendChild(p1txt);
		element.appendChild(para);
}

// function create(){
//         var element = document.getElementById("div1");
// 		var para = document.createElement("p");
// 		var p1txt = document.createTextNode("Thanks for your cooperation.");
// 		para.appendChild(p1txt);
// 		element.appendChild(para);
// }

