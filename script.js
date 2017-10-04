function Random(id) {
	var display = parseInt(document.getElementById(id).value);
	if(display === Math.floor(Math.random() *9) + 1) {
		document.getElementById('numbers').innerHTML = "Equal";
		document.getElementById('getvalue').innerHTML = display;
	}
	else
	{
		document.getElementById('numbers').innerHTML = "not Eual";
	}
}