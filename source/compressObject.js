'use strict';

/**
 * Функция, создающая новый объект без ключей со значениями null, undefined или пустой строкой.
 * Копирование поверхностное, то есть вложенные объекты и массивы копируются по ссылке, а не клонируются полностью.
 * Изменение вложенного объекта результата повлияет на вложенный объект входного объекта.
 * @param {Object} obj - исходный объект
 *
 * @throws {TypeError} если передан не объект
 *
 * @example
 * // returns { a: 3, c: 'javascript' }
 * compressObject({ a: 3, b: '', c: 'javascript', d: undefined, e: null });
 *
 * @returns {Object}
 */
const compressObject = (obj) => {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new TypeError('compressObject: ожидается объект');
    }

    return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => value !== null && value !== undefined && value !== '')
    );
};
