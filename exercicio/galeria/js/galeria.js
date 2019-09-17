document.addEventListener('DOMContentLoaded', function() {

  const galeria = function(){
  this.stream = document.querySelector('.gallery__stream');
  this.check = document.querySelector("#check");
  this.bNext = document.querySelector("#next");
  this.bPrev = document.querySelector("#prev");
  this.fotoProx = document.querySelector(".gallery__next");
  this.fotoAntes = document.querySelector(".gallery__prev");
  this.items = document.querySelectorAll('.gallery__item');
  let that = this;

  this.anterior = function () {
    that.stream.appendChild(that.items[0]);
    that.items = document.querySelectorAll('.gallery__item');
  };

  this.prox = function() {
    that.stream.insertBefore(that.items[that.items.length - 1], that.items[0]);
    that.items = document.querySelectorAll('.gallery__item');
  };

  this.habilitarHover = function(){
    if (that.check.checked) {
      that.fotoAntes.removeEventListener('mouseover', that.anterior);
      that.fotoProx.removeEventListener('mouseover', that.prox);
    }else{
      that.fotoAntes.addEventListener('mouseover', that.anterior);
      that.fotoProx.addEventListener('mouseover', that.prox);
    }
  }

};

let minhaGaleria = new galeria();
minhaGaleria.bPrev.onclick = minhaGaleria.anterior;

minhaGaleria.bNext.onclick = minhaGaleria.prox;

minhaGaleria.check.onchange = minhaGaleria.habilitarHover;


});