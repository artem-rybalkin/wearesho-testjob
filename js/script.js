var buy = document.getElementsByClassName('itemPrice-icon');
var order = document.getElementById('order');
for (var i=0; i <buy.length; i++) {
    buy[i].onclick = function () {
        var darkLayer = document.createElement('div'); // слой затемнения
        darkLayer.id = 'shadow'; // id чтобы подхватить стиль
        document.body.appendChild(darkLayer); // включаем затемнение
 
        var modalWin = document.getElementById('modalWin'); // находим наше "окно"
        modalWin.style.display = 'block'; // "включаем" его
        order.onclick = function () {
            darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
            modalWin.style.display = 'none'; // делаем окно невидимым
            return false;
        };
        darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
            darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
            modalWin.style.display = 'none'; // делаем окно невидимым
            return false;
        };
    };    
}
/*corusel*/
    var lis = document.getElementsByClassName('sliderItems');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    /* конфигурация */
    var width = 220; // ширина изображения
    var count = 4; // количество изображений

    var carousel = document.getElementById('carousel');
    var button = document.getElementById('forButtons');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    button.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    button.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };