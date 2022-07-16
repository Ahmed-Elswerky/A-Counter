setTimeout(()=>{setInterval(()=>{

	function mr(n){
	return Math.floor(n)
	}

	var future = new Date('2/14/2021').getTime();

/*	var now = Date.now(),
	mille = (future-now)/1000/60/60/24,
	days = mr(mille),days_m = mille - days,
	hours = mr(days_m*24),
	minutes = mr(((days_m*24)-hours)*60),
	seconds = mr(((((days_m*24)-hours)*60)-minutes)*60);
*/

	var now = Date.now(),
	mille = (future-now)/1000/60/60/24,
	days = mr(mille),days_m = (mille - mr(days)),
	hours = mr(days_m*24),
	minutes = ((days_m*24)-hours)*60,
	seconds = mr((minutes-mr(minutes))*60);


	document.getElementById('div').innerHTML ='<small style=\'font-size:2rem;\'>Days : Hours : Minutes : Seconds</small><br>'+ days + ' : ' + Math.hypot(hours) + ' : ' + Math.hypot(mr(minutes)) + ' : ' + Math.hypot(seconds	)+'<br><small style=\'font-size:0.9rem;font-weight:normal;font-style:italic;float:right\'>Ahmed Elswerky</small>';

},1000)},5000)