var tasks = [
	'Розбити строку на слова (слова розділені пустими символами) і записати їх у вихідний файл, кожне слово з нового рядка.																					',
	'Розбити строку на слова (слова розділені пустими символами) і записати їх кількість у вихідний файл.                                                                                                   ',
	'Розбити строку на слова (слова розділені пустими символами) і записати їх довжини у вихідний файл, розділяючи їх однією комою.                                                                         ',
	'Розбити строку на слова (слова розділені пустими символами) і записати довжину максимального зі слів у вихідний файл.                                                                                  ',
	'Розбити строку на слова (слова розділені пустими символами) і записати довжину мінімального зі слів у вихідний файл.                                                                                   ',
	'Розбити строку на слова (слова розділені пустими символами) і записати суму довжин слів у вихідний файл.                                                                                               ',
	'Розбити строку на слова (слова розділені пустими символами) і записати у вихідний файл перше зі слів у якого довжина більша 5.                                                                         ',
	'У строці записана послідовність цілих чисел, розділених комами. У вихідний файл записати суму цих чисел.                                                                                               ',
	'У строці записано число, що означає кількість елементів після нього, пробіл і цілі числа, розділені комами. Знайти індекс першого максимального числа із послідовності.                                ',
	'У строці записано число, що означає кількість елементів після нього, пробіл і цілі числа, розділені комами. Знайти індекс першого мінімального числа із послідовності.                                 ',
	'У строці записане дробове число. У вихідний файл записати округлене ціле значення цього числа.                                                                                                         ',
	'У строці записано два цілих числа через один пробіл. У вихідний файл записати їх добуток.                                                                                                              ',
	'У строці записано два цілих числа через один пробіл. У вихідний файл записати результат цілочисельного ділення і залишок від ділення першого числа на друге через пробіл. Числа більші за 0.           ',
	'У строці записано два цілих числа через символ рівності. У вихідний файл записати чи числа рівні ("true" або "false").                                                                                 ',
	'У строці записано два цілих числа через один із символів: '+', '-', '*'. У вихідний файл записати результат відповідної операції над двома числами.                                                    ',
	'У строці через пробіли записані координати двох точок на декартовій площині (цілочисельно). Записати у вихідний файл координати тієї з точок, яка ближча до точки з координатами (0,0).                ',
	'У строці через пробіли записані координати трьох точок на декартовій площині (цілочисельно). Записати у вихідний файл координати тієї з перших двох точок, яка ближча до третьої точки.                ',
	'У строці через пробіли записані координати двох точок на декартовій площині (цілочисельно). Записати у вихідний файл відстань між точками (округлити до нижнього цілого числа і записати цілочисельно).',
	'У строці через пробіли записано три цілі числа, що відповідають сторонам трикутника. У вихідний файл записати чи можливий трикутник із такими сторонами ("true" або "false").                          ',
	'У строці через пробіли записані координати двох точок на декартовій площині. У вихідний файл записати координати тієї з точок, сума координат якої більша.                                             ',
	'У строці через пробіли записано назву першої спортивної команди і кількість її балів за гру і назву другої команди з кількістю її балів. Записати у вихідний файл назву команди, яка перемогла, якщо перемагає та команда, у якої більше балів. Назви команд задаються одним словом.',
	'У строці записане слово. Записати у вихідний файл це слово без голосних літер.',
	'У строці записане слово. Записати у вихідний файл коди кожного з символів строки, розділяючи їх одним пробілом.',
	'У строці записане слово. Записати у вихідний файл суму кодів кожного з символів строки.',
	'У строці записане слово. Записати у вихідний файл його символи розділені одним пробілом.'
];

[
	tasks[parseInt($var) % tasks.length]
];