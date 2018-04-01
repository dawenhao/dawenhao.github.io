/**
 * ...
 * @author dawenhao
 */
function Location() {
	var geolocation = new qq.maps.Geolocation("Z4UBZ-UHNWF-Q4AJQ-NVQ7P-FURZ7-3AFRT", "majiang");
	geolocation.getLocation(showPosition, null);
};

function showPosition(position) {
	var a = JSON.stringify(position, null, 4);
	alert(a);
};
