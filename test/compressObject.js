'use strict';

QUnit.module("Тестируем функцию compressObject", function() {
    QUnit.test("Сжатие объекта с null, undefined и пустыми строками", function(assert) {
        const result = compressObject({
            name: "Андрей",
            age: null,
            city: "",
            country: "Россия",
            occupation: undefined
        });

        assert.deepEqual(result, { name: "Андрей", country: "Россия" }, "Должны остаться только ключи с ненулевыми значениями.");
    });

    QUnit.test("Работает с объектом без ненулевых значений", function(assert) {
        const result = compressObject({
            a: null,
            b: undefined,
            c: "",
        });

        assert.deepEqual(result, {}, "Объект без ненулевых значений должен вернуть пустой объект.");
    });

    QUnit.test("Работает с пустым объектом", function(assert) {
        const result = compressObject({});

        assert.deepEqual(result, {}, "Пустой объект должен вернуть пустой объект.");
    });

    QUnit.test("Сохраняет значения 0 и false, не считая их пустыми", function(assert) {
        const result = compressObject({
            count: 0,
            isActive: false,
            name: "Тест",
            empty: ""
        });

        assert.deepEqual(result, { count: 0, isActive: false, name: "Тест" }, "0 и false — не пустые значения, их нужно сохранить.");
    });

    QUnit.test("Работает с объектом, где все значения ненулевые", function(assert) {
        const result = compressObject({
            a: 1,
            b: "hello",
            c: true
        });

        assert.deepEqual(result, { a: 1, b: "hello", c: true }, "Если все значения ненулевые, объект должен остаться без изменений.");
    });

    QUnit.test("Не изменяет исходный объект", function(assert) {
        const original = { a: 1, b: null, c: "test" };
        compressObject(original);

        assert.deepEqual(original, { a: 1, b: null, c: "test" }, "Исходный объект не должен мутировать.");
    });
});
