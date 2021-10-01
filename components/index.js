/**
 * - Эндпоинт для всех определений web components
 * - Проверка на customElements
 */

if (!('customElements' in window)) throw Error('Браузер не поддерживает customElements! Используйте новые браузеры!');

import './api-key-form.js';
