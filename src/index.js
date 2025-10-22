// Импорт CSS
import './css/reset.css';
import './css/styleA.css';
import './css/style.css';

// Импорт Swiper CSS как модуль
import './swiper/swiper-bundle.min.css';

// Импорт Swiper JS
import './swiper/swiper-bundle.min.js';

// Импорт основного скрипта
import './script.js';

// Импорт всех изображений через контекст
function importAll(r) {
  r.keys().forEach(r);
}

// Изображения
importAll(require.context('./img/', true, /\.(png|jpg|jpeg|gif|webp|svg)$/));

// Шрифты
importAll(require.context('./fonts/', true, /\.(woff|woff2|eot|ttf|otf)$/));