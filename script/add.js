import arrFood from './arr.js';
/*Выбор данных из массива объектов*/

const textMan = document.querySelector('.text');
const Btn = document.querySelector('button');
const loading = document.getElementById('loading');
    
  Btn.addEventListener('click', function random(){
    loading.style.display = 'block';

    let interval = setInterval(() => {
       //генерация выбора
      let randomArr=arrFood[Math.floor(Math.random()*arrFood.length)];

      //вывод на экран текста
      textMan.textContent=randomArr.name;

      //Вывод на экран изображения
      const img = document.createElement('img');
      img.src = randomArr.src;
      textMan.append(img);

      //Убираем загрузку
      loading.style.display = 'none';

      //остановка интервала
      clearInterval(interval);
    }, 5000);
    Btn.removeEventListener('click', random);
  }); 