### Mathematical operations and functions

Написати програму мовою С, у якій, для дробових значень `x` у інтервалі `[-10..10]` із кроком `0.5`, обчислити пари значень `F1(x)` та `F2(x)` для двох функцій, заданих за варіантом.

У консоль вивести:

* суми відповідних пар значень функцій
* добуток відповідних пар значень функцій
* результати ділення значення першої функції на значення другої функції
* результати ділення значення другої функції на значення першої функції

Наприклад:
~~~~
x = -2
F1(x) = 100.0
F2(x) = 25.23
F1(x) + F2(x) = 125.23
F1(x) * F2(x) = 4567.2
F1(x) / F2(x) = 1.5
F2(x) / F1(x) = 3.0
x = -1.5
...
x = -1
...
~~~~

Перевіряти знаменник при діленні і виводити строку `Division by zero` замість результату у відповідному рядку.
~~~~
...
x = 0
F1(x) = 34
F2(x) = 0
F1(x) + F2(x) = 34.0
F1(x) * F2(x) = 0
F1(x) / F2(x) Division by zero
F2(x) / F1(x) = 0
x = 0.5
...
~~~~

Якщо значення функції у поточній точці не може бути обчисленим, виводити про це повідомлення, наприклад:
~~~~
...
x = 0
F1(x) = 34
F2(x) Can't be computed
x = 0.5
...
~~~~

Результатом виконання завдання має бути файл `main.c` із кодом мовою С. 

Шаблон коду:

~~~~c
#include <math.h>
#include <stdio.h>

int main(void) 
{
	/* your code here */
	return 0;
}
~~~~

Код повинен успішно компілюватися у програму для запуску у Linux за допомогою команди:

~~~~bash
gcc main.c -lm -std=c89 -Werror -pedantic-errors
~~~~

Програма повинна вивести всі результати у консоль та успішно завершитись.