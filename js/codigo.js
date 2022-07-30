/*=============================

JavaScript Code
Autor: Juan Francisco López Morales

=============================*/

/*=============================
Variables
=============================*/
var cambiar = 0;
var c = 0;
var menu = 0;
var tarjeta = 0;
var ancho = window.innerWidth;
var car = 0;
var galeria = 0;
var titulo = '50px';
var linea = '100px';
var activeAnterior = '#active';

/*=============================
General
=============================*/
if(ancho < 850){
	$(document).ready(function(){
		if(ancho < 800){
			if(ancho > 470){
				funBloque1();
			}
		}
		if(ancho < 470){
			$("#img-fondo").attr('src', 'img/fondo(movil).jpg');
			titulo = '37px';
			linea = '70px';
		}else{
			titulo = '40px';
			linea = '80px';
		}
	});
}
/*=============================
Functions
=============================*/

function funMostrarTarjeta(dato){
	$(document).ready(function(){
		if(dato == 'do1' || dato == 'do2' || dato == 'do3'){
			var carta = '.la'+dato;
			$(carta).css('transform', 'rotateY(180deg)');
			$(carta).css('boxShadow', '-12px 12px 20px -10px rgb(120, 120, 120)');
			setTimeout(function(){$('.cam-titu-la'+dato).css('transform', 'scaleX(1)');},500)
			setTimeout(function(){
				$('.cam-parra-la'+dato).css('transform', 'scaleX(1)');
				$('.cam-parra-la'+dato).css('opacity', '1');
			},800)
			setTimeout(function(){$('.cam-titu2-la'+dato).css('transform', 'scaleX(1)');},1100)
			setTimeout(function(){$('.cam-info1-la'+dato).css('transform', 'scaleX(1)');},1400)
			setTimeout(function(){$('.cam-info2-la'+dato).css('transform', 'scaleX(1)');},1600)
			setTimeout(function(){$('.cam-info3-la'+dato).css('transform', 'scaleX(1)');},1800)
			setTimeout(function(){$('.cam-info4-la'+dato).css('transform', 'scaleX(1)');},2000)
		}else if(dato == 'o1' || dato == 'o2' || dato == 'o3'){
			var carta = '.lad'+dato;
			$(carta).css('transform', 'rotateY(0deg)')
			$(carta).css('boxShadow', '12px 12px 20px -10px rgb(120, 120, 120)');
			$('.cam-titu-lad'+dato).css('transform', 'scaleX(0)');
			$('.cam-parra-lad'+dato).css('transform', 'scaleX(0)');
			$('.cam-parra-lad'+dato).css('opacity', '1');
			$('.cam-titu2-lad'+dato).css('transform', 'scaleX(0)');
			$('.cam-info1-lad'+dato).css('transform', 'scaleX(0)');
			$('.cam-info2-lad'+dato).css('transform', 'scaleX(0)');
			$('.cam-info3-lad'+dato).css('transform', 'scaleX(0)');
			$('.cam-info4-lad'+dato).css('transform', 'scaleX(0)');
		}
	});
}
function funGaleAparecer(dato){
	var botonDato = document.getElementById(dato).innerHTML;
	var mostrarBloque = '.boton'+dato;
	var show = '.show'+dato;
	$(document).ready(function(){
		if(botonDato == 'Ver mas'){
			//$(mostrarBloque).addClass('derecha2');
			$(mostrarBloque).css('opacity', '1');
			$(show).css('transform', 'scale(1)');
			document.getElementById(dato).innerHTML = 'Ver menos';
		}else if(botonDato == 'Ver menos'){
			$(show).css('transform', 'scale(0)');
			$(mostrarBloque).css('opacity', '0');
			document.getElementById(dato).innerHTML = 'Ver mas';
		}
	})
}
function funActiveNav(dato){
	$(document).ready(function(){
		var id = '#'+dato;
		$(activeAnterior).css('backgroundColor', 'rgba(0,0,0,0)');
		$(activeAnterior).css('color', '#686766');
		$(id).css('backgroundColor', '#1C2833');
		$(id).css('color', '#fff');
		activeAnterior = id;
	});
}
function funMenu(){
	$(document).ready(function(){
		if(menu == 0){
			$(".cont-nav2").css('height', '246px');
			$(".menu2").css('transform', 'translateY(-4%)');
			$("#mostrarM").css('display', 'none');
			$("#cerrarM").css('display', 'block');
			$("#cerrarM").css('marginLeft', '16px');
			menu=1;
		}else if(menu == 1){
			$(".menu2").css('transform', 'translateY(-100%)');
			$(".cont-nav2").css('height', '0');
			$("#mostrarM").css('marginLeft', '14px');
			$("#mostrarM").css('display', 'block');
			$("#cerrarM").css('display', 'none');
			menu=0;
		}
	});
}
function funCerrarM(){
	$(document).ready(function(){
		$(".cont-nav2").css('height', '0');
		$(".menu2").css('transform', 'translateY(-100%)');
		$("#mostrarM").css('marginLeft', '14px');
		$("#mostrarM").css('display', 'block');
		$("#cerrarM").css('display', 'none');
		menu=0;
	});	
}
function funBloque1(){
	$(document).ready(function(){
		setTimeout(function(){$('h1').css('fontSize', titulo);},200)
			setTimeout(function(){$('.cam-linea1').css('width', linea)},600)
			setTimeout(function(){
				$('.cam-parra1').css('transform', 'scaleX(1)');
				$('.cam-parra1').css('opacity', '1')
			},800)
			setTimeout(function(){
				$('.cam-parra2').css('transform', 'scaleX(1)');
				$('.cam-parra2').css('opacity', '1')
		},1100)
	});
}
/*=============================
DOM
=============================*/

//============== SCROLL ==============//
window.addEventListener('scroll', function(){
	var altura = window.innerHeight/1.3;
	$(document).ready(function(){
		//============== bloque somos ==============//
		var somos = document.getElementById('somos');
		var alturaSomos = somos.getBoundingClientRect().top;
		if(alturaSomos <= altura){
			funBloque1();
		}
		//============== bloque tarjetas ==============//
		var imagen = document.getElementById("content-tarjetas");
		var altimg = imagen.getBoundingClientRect().top;
		if(altimg <= altura){
			if(car == 0){
				setTimeout(function(){
					$('.cam-cont-titu1').css('transform', 'scaleX(1)');
					$('.cam-cont-titu1').css('opacity', '1');
				},400)
				setTimeout(function(){$('.cam-linea2').css('width', linea)},800)
				setTimeout(function(){
					$('.lado1').css('transform', 'translateY(0%)');
					$('.lado1').css('opacity', '1');
				},1000)
				setTimeout(function(){
					$('.lado2').css('transform', 'translateY(0%)');
					$('.lado2').css('opacity', '1');
				},1400)
				setTimeout(function(){
					$('.lado3').css('transform', 'translateY(0%)');
					$('.lado3').css('opacity', '1');
				},1800)	
					car=1;	
				}
			}
		//============== bloque ofrecemos ==============//
		var camb2 = document.querySelector(".camb1");
		var camb3 = document.querySelector(".camb2");
		var ofrece = document.getElementById("ofrecemos");
		var altimg2 = ofrece.getBoundingClientRect().top;
		if(altimg2 <= altura){
			//camb2.classList.add('efect-ofrece1');
			setTimeout(function(){
				$('.cam-cont-titu2').css('transform', 'scaleX(1)');
				$('.cam-cont-titu2').css('opacity', '1');
		},400)
			setTimeout(function(){$('.cam-linea3').css('width', linea)},800)
			setTimeout(function(){
				$('#parra').css('transform', 'scaleX(1)');
				$('#parra').css('opacity', '1');
			},1000)	
			setTimeout(function(){camb3.classList.add('efect-ofrece2');},1300)	
		}
		//============== bloque recomendado ==============//
		var galeria = document.getElementById("galeria");
		var altimg3 = galeria.getBoundingClientRect().top;
		if(altimg3 <= altura){
			setTimeout(function(){
					$('.cam-cont-titu3').css('transform', 'scaleX(1)');
					$('.cam-cont-titu3').css('opacity', '1');
			},400)
			setTimeout(function(){$('.cam-linea4').css('width', linea)},800)
			setTimeout(function(){document.querySelector(".ocultGale1").classList.add('apareceGale1');},700)
			setTimeout(function(){document.querySelector(".ocultGale2").classList.add('apareceGale2');},1100)
			setTimeout(function(){document.querySelector(".ocultGale3").classList.add('apareceGale3');},1500)
			setTimeout(function(){document.querySelector(".ocultGale4").classList.add('apareceGale4');},1900)
			setTimeout(function(){document.querySelector(".ocultGale5").classList.add('apareceGale5');},2300)
			setTimeout(function(){document.querySelector(".ocultGale6").classList.add('apareceGale6');},2700)
		}
		//============== Protocolos ==============//
		var proto = document.getElementById('protocolos');
		var altoProto = proto.getBoundingClientRect().top;
		if(altoProto <= altura){
			setTimeout(function(){
				$('.cam-cont-titu4').css('transform', 'scaleX(1)');
				$('.cam-cont-titu4').css('opacity', '1');
			},400)
			setTimeout(function(){$('.cam-linea5').css('width', linea)},800)
			setTimeout(function(){
				$('.cam-contIcon-proto1').css('transform', 'scale(1)');
				setTimeout(function(){$('.cam-parraProto1').css('transform', 'scaleX(1)')},200)
			},1000)
			setTimeout(function(){
				$('.cam-contIcon-proto2').css('transform', 'scale(1)');
				setTimeout(function(){$('.cam-parraProto2').css('transform', 'scaleX(1)')},200)
			},1500)
			setTimeout(function(){
				$('.cam-contIcon-proto3').css('transform', 'scale(1)');
				setTimeout(function(){$('.cam-parraProto3').css('transform', 'scaleX(1)')},200)
			},1800)
			setTimeout(function(){
				$('.cam-contIcon-proto4').css('transform', 'scale(1)');
				setTimeout(function(){$('.cam-parraProto4').css('transform', 'scaleX(1)')},200)
			},2100)
		}
		//============== footer ==============//
		var footer = document.getElementById('foot');
		var altoFoot = footer.getBoundingClientRect().top;
		if(altoFoot <= altura){
			$('footer').css('opacity', '1');
		}
	})//fin ready
});//fin Event

//Cambio al rotar pantalla movil
window.matchMedia('(orientation: portrait)').addListener(function (m) { 
	$(document).ready(function(){
		if(ancho < 470){
	    	if(m.matches) { 
	    		// m.matches = true
	     		$("#img-fondo").attr('src', 'img/fondo(movil).jpg');
	    	} else { 
	    		// m.matches = false
	      		$("#img-fondo").attr('src', 'img/fondo.jpg');
	    	} 
	 	}
 	});
}); 