// Импорт CSS файлов
import './css/reset.css';
import './css/styleA.css';
import './css/style.css';

// Импорт Swiper CSS
import './swiper/swiper-bundle.min.css';

// Импорт Swiper JS
import './swiper/swiper-bundle.min.js';

// Импорт основного скрипта
import './script.js';

// Динамический импорт всех изображений
const imagesContext = require.context('./img', true, /\.(png|jpg|jpeg|gif|webp|svg)$/);
imagesContext.keys().forEach(imagesContext);

// Динамический импорт шрифтов
const fontsContext = require.context('./fonts', true, /\.(woff|woff2|eot|ttf|otf)$/);
fontsContext.keys().forEach(fontsContext);