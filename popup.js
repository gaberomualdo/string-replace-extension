String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}
function replaceWords(w1, w2){
	document.body.innerHTML = document.body.innerHTML.replaceAll(w1, w2);
}
if(document.domain != "mail.google.com"){
	setTimeout(function(){
		// eg. replace the word "the" with the word "test"
		replaceWords("the", "test");
	},1000);
}