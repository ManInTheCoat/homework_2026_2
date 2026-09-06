/**
 * Функция, создающая новый объект без ключей со значениями null, undefined или пустой строкой
 * @param {Object} obj - исходный объект
 *
 * @example
 * // returns { a: 3, c: 'javascript' }
 * compressObject({ a: 3, b: '', c: 'javascript', d: undefined, e: null });
 *
 * @returns {Object}
 */
const compressObject = (obj) => {
    const result = {};

    for (const key in obj) {
        const value = obj[key];
        const isEmpty = value === null || value === undefined || value === '';

        if (!isEmpty) {
            result[key] = value;
        }
    }

    return result;
};
