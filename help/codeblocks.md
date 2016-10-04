### Встановлення IDE Code::Blocks

~~~~
sudo apt-get install codeblocks
~~~~

Запустіть програму:
~~~~
sudo codeblocks
~~~~

#### Компіляція і запуск програм

Створіть новий проект і запустіть скомпільовану програму за допомогою кнопки `Build & Run`.

Якщо у `Build log` знизу з'явилось повідомлення про помилку `g++ not found`, необхідно встановити:
~~~~
sudo apt-get install build-essential
~~~~

#### Дебагер

Кнопки дебагера працюватимуть тільки якщо код розміщений у відкритому і активованому C::B проекті.

Встановіть на певний рядок коду `Breakpoint` і запустіть дебагер за допомогою кнопки `Debug / Continue`.

Якщо після запуску дебагера він не зупинився на брейкпоінті, а завершився (у логах вивід із `Debugger finished with status 0`), потрібно перевірити чи у шляху до програми немає не-ASCII символів (наприклад, кириличні літери) або пробілів.