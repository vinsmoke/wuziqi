(function(){
	var jQuery=function(selector){
		var els= document.querySelectorAll(selector)
		for(var i = 0; i<els.length;i++){
			this[i]=els[i]
		}
		this.length=els.length;
	}
	 jQuery.prototype.addClass=function(str){
		//var str= document.querySelectorAll("")
		for(var i =0;i<this.length;i++){
			this[i].classList.add(str)
		}
	}
	var $ = function(selector){
	return new 	jQuery(selector)
}
window.$=$
})()
