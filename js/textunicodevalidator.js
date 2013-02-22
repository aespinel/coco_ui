function validateUniCodeChars(value) {
	if(value) {
		var alphabetCharset = /^[a-zA-Z ]+$/;
		var strictUniCodeChars = /.*[^\\x20-\\x7E].*/;
		if(alphabetCharset.test(value)) {
			return true;
		} 
		if(strictUniCodeChars.test(value)) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
}

function validateDate(value) {
	var check = false;
	var re = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
	if( re.test(value)) {
		var adata = value.split('-');
		console.log(adata);
		var year = parseInt(adata[0],10);
		var month = parseInt(adata[1],10);
		var day = parseInt(adata[2],10);
		console.log(year,month,day);
		var xdata = new Date(year,month-1,day);
		console.log(xdata);
		if ( ( xdata.getFullYear() === year ) && ( xdata.getMonth() === month - 1 ) && ( xdata.getDate() === day ) ){
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return check;
}