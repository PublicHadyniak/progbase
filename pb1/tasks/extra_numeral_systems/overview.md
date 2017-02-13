### [Extra] Numeral Systems Conversion Function

Реалізувати алгоритм перетворення числа із заданої системи числення  у цільову систему числення. 

Створити функцію `ns_convert` на мові С:
~~~~c
/*
 * @brief converts a number in source string of base sourceBase into number in dest string of base destBase
 * @param dest - an empty string buffer for result string
 * @param source - a number of base sourceBase as a string
 * @param sourceBase - a source number base
 * @param destBase - a destination number base
 * @returns dest string
 */
char * ns_convert(char * buffer, const char * number, unsigned int sourceBase, unsigned int destBase);
~~~~

* `buffer` - виділена пам'ять для запису результуючої строки і повернення її із функції
* `number` - строка із числом, наприклад “`15А.А445`” (максимальна довжина number - `64` символа) 
* `sourceBase` - задана основа числа (значення: `2..36`)
* `destBase` - цільова основа (значення: `2..36`)

Строку `buffer` варто очищувати перед використанням. 

Опрацьовувати лише основи від `2` до `36` (включно). Кодувати двосимвольні цифри у системах з основою, що більше 10 за допомогою латинських букв у верхньому реєстрі (`A-Z`). 

Перевіряти вхідні дані на валідність (напр., чи існує задане число у заданій системі). При виникненні помилки повертати пусту строку "`\0`".

Для предсталення дробових чисел використоувати символ точка (`.`) в якості розділювача цілої та дробової частин.

Під час обрахунку дробової частини обробляти дроби до `12` знаків після крапки. При цьому важлива точність до `6` знаків після крапки.

Після результату, записаного у строці `buffer` обов'язково розміщувати термінальний нуль-символ `\0`.

Приклад вхідних та результуючих даних:
~~~~c
char buf[1000] = "";
char * x = NULL;
x = ns_convert(buf, "1A", 16, 10); /* x = "26" */
x = ns_convert(buf, "1A", 10, 2);  /* x = "\0" */
~~~~

Опублікувати у відповідній папці завдання на репозиторії файл із кодом `main.c`, який міститиме функцію `ns_convert` та може містити інші допоміжні функції. 

__Обмеження на код__:

* Функція не повинна мати операцій вводу чи виводу.
* Заборонено використовувати статичні та глобальні змінні у функціях.
* Можна використовувати версію С99
* Код обов'язково компілювати із опціями `-std=c99 -Werror -pedantic-errors`

Матеріали:

* [Лекція 1. Інформація та інформаційні технології. Дані. Системи числення](https://docs.google.com/document/d/1i1ndEyZ6OrMue4QuV0eppiEcidgmm1u0x56FDx9eN5c/edit?usp=sharing)
* [Wiki - Numeral system](https://en.wikipedia.org/wiki/Numeral_system )