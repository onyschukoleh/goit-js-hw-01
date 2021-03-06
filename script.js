//=============================================================
//  Задание 1  Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится:
//  'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится:
//  'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.
//=============================================================

const name = "Генератор защитного поля";
let price = 1000;
console.log("#1 ", `Выбран ${name}, цена за штуку ${price} кредитов`);
price = 2000;
console.log("#1 ", `Выбран ${name}, цена за штуку ${price} кредитов`);
//=============================================================
// Задание 2
// Напиши скрипт проверки количества товаров на складе.
// Есть переменные total (количество товаров на складе) и
// ordered (единиц товара в заказе).
// Сравни эти значения и по результатам выведи:
// Если в заказе указано число, превышающее количество товаров на складе,
// то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered,
// например 20, 80 и 130.

const total = 100;
let ordered = 20;
// ordered = 80;
// ordered = 130;
total < ordered
  ? console.log("#2 ", "На складе недостаточно твоаров!")
  : console.log("#2 ", "Заказ оформлен, с вами свяжется менеджер");

//=============================================================
// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате.
//  При загрузке страницы у посетителя запрашивается пароль через prompt:
// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы
// ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
// записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
alert("Задание 3");
const ADMIN_PASSWORD = "jqueryismyjam";
let message5;

message5 = prompt("Введите пароль:");
switch (message5) {
  case ADMIN_PASSWORD:
    alert("Добро пожаловать!"); /*Если пароль принят*/
    break;
  case null:
    alert("Отменено пользователем!"); /*Если нажали Cancel*/
    break;
  default:
    alert("Доступ запрещен, неверный пароль!"); /*Если пароль не принят*/
}
//=============================================================
// Задание 4
// На счету пользователя есть 23580 кредитов,
// значение хранится в переменной credits (создай и присвой).
// Пользователь решает купить ремонтных дроидов,
// которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в
// переменной pricePerDroid (создай и присвой).
// При посещении страницы, используя prompt, необходимо спросить количество
//  дроидов которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который:
// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету,
//  выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету
// и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
alert("Задание 4");
let credits = 23580;
const pricePerDroid = 3000;
let N = prompt("Укажите кличество дроидов: ");
const totalPrice = Number(N) * pricePerDroid;
if (N === null) {
  alert("Отменено пользователем!");
} else {
  totalPrice >= credits
    ? alert("Недостаточно средств на счету!")
    : alert(
        `Вы купили ${Number(N)} дроидов,на счету осталось  ${
          credits - totalPrice
        } кредитов`
      );
}

//=============================================================
// Задание 5
// Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра,
// а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch. Формат сообщения:
// 'Доставка в [страна] будет стоить [цена] кредитов'.
// Но доставка есть не везде, если указанной страны нет в списке,
//  то выводи в alert сообщение 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
alert("Задание 5");
let price1;

let country = prompt(" Укажите страну доставки:").toLowerCase();

switch (country) {
  case "китай":
    price1 = 100;
    alert(`Стоимость доставки в ${country} состаляет ${price1} кредитов`);
    break;

  case "чили":
    price1 = 250;
    alert(`Стоимость доставки в ${country} состаляет ${price1} кредитов`);
    break;

  case "австралия":
    price1 = 170;
    alert(`Стоимость доставки в ${country} состаляет ${price1} кредитов`);
    break;
  case "индия":
    price1 = 80;
    alert(`Стоимость доставки в ${country} состаляет ${price1} кредитов`);
    break;

  case "ямайка":
    price1 = 120;
    alert(`Стоимость доставки в ${country} состаляет ${price1} кредитов`);
    break;

  default:
    alert(`В вашей стране ${country} - доставка не доступна'`);
}

//=============================================================
// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
//  пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение
// к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
//  Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
//=============================================================
alert("Задание 6");
let input6 = 0;
let total6 = 0;
while ((input6 = prompt("Введите число:"))) {
  if (Number.isInteger(Number(input6))) {
    total6 += Number(input6);
  } else {
    alert("Было введено не число, попробуйте еще раз...");
  }
}
alert(`Общая сумма чисел равна [сумма] = ${total6}`);
