function GetCanvas(id,ctx) {
	if (arguments.length == 2 && arguments[1] == true){
		return document.getElementById(id).getContext("2d");
	}
	return document.getElementById(id);
}

function CreateCanvas(id,w,h,p) {
	let c = document.createElement("canvas");
	c.id = id;
	c.width = w;
	c.height = h;

	if(p){
		let po = document.getElementById(p);
		if(po){
			po.append(c);
		}
	}

	return c;
}