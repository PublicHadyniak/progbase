#### Тема

Реалізація математичних операцій. Використання умовних конструкцій, конструкцій розгалуження та циклів.

#### Мета

Навчитися на практиці проводити точні обчислення математичних формул за допомогою операторів та функцій мови програмування С. Застосувати теоретичні знання для створення програмного забезпечення для прийняття рішень на основі вхідних даних за допомогою умовних конструкцій та конструкцій розгалуження. Застосувати на практиці різні види циклічних конструкцій для обчислення математичних формул. Навчитися виконувати компіляцію та базове тестування власного коду за допомогою компілятора мови С або спеціалізованої IDE.  

#### Завдання №1. Реалізація математичних операцій

Виконати розрахунки за заданими формулами.

У випадку неіснування відповіді виводити відповідне повідомлення у консоль.

Необхідна точність обчислень $\\large{ {10}^{-10} }$.

`x`, `y`, `z` - довільні дробові числа, які користувач вводить із консолі на початку роботи програми.


#### Завдання №2. Умовні конструкції

Користувач вводить 3 цілочисельні значення `a`, `b` i `c`.

На основі вхідних даних і заданих умовних правил визначити істинність результату і вивести його у консоль.


#### Завдання №3. Конструкції розгалуження

Задано арифметичні операції і відповідні їм коди. Користувач вводить код операції `op` та два цілочисленних значення `a` i `b`. 

Якщо значення коду `op` від’ємне - міняти місцями значення `a` і `b`, а значення `op` міняти на додатнє.

Використовуючи конструкції розгалуження обчислити та вивести результат відповідної операції. 

У таблиці задано код операції `op`, оператор чи функцію, яким відповідає даний код та детальний опис операції. 

Якщо значення обчислити неможливо - виводити про це повідомлення у консоль.
~~~~
<%
	var someCode = 0;
	var t= [
	];
%>
~~~~
_Таблиця 1. Коди операцій_

| op        | operator        | Опис                                                    |
|:---------:|:---------------:|---------------------------------------------------------|
| 0         | `var(a, b)`     | вираз за варіантом						                  |
| 1         | `a + b`         | сума                                      	           |
| 2         | `a - b`         | бінарний мінус                            				 |
| 3         | `-a`            | унарний мінус. `b` ігнорується            		     |
| 4         | `a * b`         | добуток                                                |
| 5         | `a / b`         | цілочисельне ділення                      			   |
| 6         | `abs(a)`        | модуль `a`. `b` ігнорується                  	      |
| 7, 13     | `pow(a, b)`     | `a` в степені `b`           							|
| 8         | `a % b`         | ділення по модулю `b`                        		  |
| 9         | `min(a, b)`     | мінімальне з чисел `a`, `b`                              |
| 10        | `max(a, b)`     | максимальне з чисел `a`, `b`                              |
| ?         | `default(a,b)`  | вираз: `(op % abs(a + 1)) + (op % abs(b + 1))` 			|


#### Завдання №4. Використання циклічних конструкцій

За допомогою ітераційних циклічних конструкцій обчислити значення виразу, відповідно до варіанту.
