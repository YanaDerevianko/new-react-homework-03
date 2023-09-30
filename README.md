Завдання 1: Створи компонент списку

Створи компонент React, який називається List. У цьому компоненті передай масив елементів як властивість і відобрази кожен елемент як окремий HTML-елемент.

Завдання 2: Рендер динамічного списку

У своєму основному файлі App.js створи масив об'єктів, які містять інформацію (наприклад, назву, опис) про різні елементи. Передай цей масив як властивість до компонента List і динамічно відобрази список елементів.

Завдання 3: Управління станом

У файлі App.js імпортуй і використовуй хук useState. Створи змінну стану для управління списком елементів. Реалізуй функцію для додавання нових елементів до списку і переконайся, що компонент перерендерюється при зміні списку.

Завдання 4: Додай унікальні ключі

У компоненті List, під час ітерації по масиву елементів, обов'язково додай унікальний ключ (ключ) кожному відображеному елементу. Поясни, чому це важливо в React.

Завдання 5: Умовне відображення

У компоненті Список впровадь умовне відображення. Якщо список порожній, відобрази повідомлення типу "Немає елементів для відображення". В іншому випадку відобрази список елементів.

Завдання 6: Переробка умовного відображення

Оптимізуй умовне відображення в компоненті List, створивши змінну listContent. Ця змінна повинна містити JSX або список елементів або повідомлення "Немає елементів для відображення". Використовуй listContent у виразі повернення.

Завдання 7: Створи компонент фільтрації

Створи новий компонент React, який називаєтьсяFilter. Передай до цього компонента функцію як властивість, яка буде фільтрувати список елементів на основі певних критеріїв (наприклад, категорія, дата).

Завдання 8: Перемикач форми

У окремому компоненті (наприклад, FormElement) впровадь умовне відображення. Спочатку відображай кнопку з написом "Додати новий елемент". При кліку на кнопку покажи форму для введення даних нового елемента. Після відправки форми або скасування вертайся до відображення кнопки.

Завдання 9: Управління режимом редагування

У компоненті FormElement створи змінні стану для відстеження режиму редагування (наприклад, редагується) та зберігай в них дані елемента під час редагування. Реалізуй функції для початку та завершення редагування.

Завдання 10: Закрий форму при відправці або скасуванні

Розшир компонент FormElement, щоб включити кнопку "Скасувати". Реалізуй функцію для завершення редагування (встановлення редагується в false), коли кнопку "Скасувати" натиснуто. Крім того, коли форму відправляють, заверш редагування та обробляй логіку відправки даних.