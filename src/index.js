import './public-path.js';

// Импорт CSS файлов
import './css/reset.css';
import './css/styleA.css';
import './swiper/swiper-bundle.min.css';
import './css/style.css';

// Импорт Swiper JS
import './swiper/swiper-bundle.min.js';

// Импорт основного скрипта
import './script.js';

// Импорт изображений для бургер-меню и header
import './img/burgerOff.svg';
import './img/Group.svg';
import './img/search.svg';
import './img/burgerOff2.svg';
import './img/burgerOff3.svg';
import './img/burger.svg';
import './img/logo.svg';
import './img/call.svg';
import './img/chat.svg';
import './img/profile.svg';
import './img/repair.svg';
import './img/checkstatus.svg';
import './img/expand.svg';
import './img/scr.svg';
import './img/submit.svg';
import './img/zakaz.svg';

// Импорт стрелки
import './img/strelka.svg';

// Импорт основного изображения
import './img/cps.png';

// Импорт логотипов брендов
import './img/logoPartn/Lenovo.svg';
import './img/logoPartn/samsung.svg';
import './img/logoPartn/apple.svg';
import './img/logoPartn/viewsonic.svg';
import './img/logoPartn/bosch.svg';
import './img/logoPartn/hp.svg';
import './img/logoPartn/acer.svg';
import './img/logoPartn/sony.svg';
import './img/logoPartn/go.svg';


// Динамический импорт всех изображений
const imagesContext = require.context('./img', true, /\.(png|jpg|jpeg|gif|webp|svg)$/);
imagesContext.keys().forEach(imagesContext);

// Динамический импорт шрифтов
const fontsContext = require.context('./fonts', true, /\.(woff|woff2|eot|ttf|otf)$/);
fontsContext.keys().forEach(fontsContext);