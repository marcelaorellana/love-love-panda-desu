var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
var fotos = document.getElementById("fotosId");
pictures.forEach(function(valor){
	fotos.innerHTML += "<img class='fotitos' src=" + valor + ">";
});