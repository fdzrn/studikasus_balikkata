function balikKata(kata) {
	var panjang = kata.length;
	var tampung = "";
	for (var i = panjang-1; i >= 0; i--) {
		tampung += kata.charAt(i);
};
return tampung;
}
console.log(balikKata('Niomic!'));
console.log(balikKata('JavaScript!'));
console.log(balikKata('alohahola!'));
console.log(balikKata('Jawa_Barat!'));