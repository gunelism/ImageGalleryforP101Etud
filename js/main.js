var img = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg'];


function Masonry(object)
{


	this.imgar = object.imgarray;
	this.lgcol = object.lgcol;
	this.mdcol = object.mdcol;
	this.smcol = object.smcol;
	this.xscol = object.xscol;

	this.start = function(){
		$('#gallery').empty();
		// console.log($(document).width())
		var ekran = $(document).width();
		if (ekran>1700) {
			create(this.lgcol);
			createImg(this.imgar, this.lgcol);
		}else if (ekran>1200) {
			create(this.mdcol);
			createImg(this.imgar, this.mdcol);
		}else if (ekran>900) {
			create(this.smcol);
			createImg(this.imgar, this.smcol);
		}else{
			create(this.xscol);
			createImg(this.imgar, this.xscol);
		}

	}

	 function create(num){
		for (var i = 0; i <num; i++) {
			var divs = $('<div></div>',{
				class: 'col-galery',
				width: 100/num+'%'
			}).appendTo('#gallery')
		}
	}

	function createImg(arr, say){
		var divler = $('#gallery .col-galery');
		for (var i = 0; i <arr.length ; i++) {
			var imgH = $('<img />',{
				src:'img/'+arr[i],
				class:'img-responsive'
			}).appendTo(divler[i%say]);

		}
	}
}


var galery = new Masonry({
	imgarray:img,
	lgcol:8,
	mdcol:5,
	smcol:4,
	xscol:3
});

$(document).ready(function(){
	galery.start()
})

$( window ).resize(function() {
  	galery.start()
});