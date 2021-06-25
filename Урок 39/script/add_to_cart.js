// Добавление товара в корзину
let class_name = document.getElementsByClassName("add_cart");

let myFunction = function (evt) {
  evt.preventDefault();

  let title =
    this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
  let price =
    this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
  let image =
    this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");

  let creat_li = document.createElement("li");
  creat_li.classList.add("bag__item");

  creat_li.innerHTML =
    '<div class="bag__img">\
										<a href="#">\
											<img src="' +
    image[0].src +
    '" alt="">\
										</a>\
									</div>\
									<div class="bag__info">\
										<p class="info__title"><a href="#">' +
    title[0].innerText +
    '</a></p>\
										<div class="info__price">\
											<span class="currency">$</span>\
                                			<span class="oprice">' +
    price[0].innerText +
    '</span>\
										</div>\
										<div class="trash">\
											<a href="#"><i class="far fa-trash-alt"></i></a>\
										</div>\
									</div>';

  let block_cart = document.querySelector(".bag.shopcard__dropdown ul");
  block_cart.appendChild(creat_li);

  // Удаление товара
  delete_product();

  //Получение суммы денег в корзине
  totalPrice();

  //Получение суммы товаров в корзине
  total_amount();
};

for (var i = 0; i < class_name.length; i++) {
  class_name[i].addEventListener("click", myFunction, false);
  // addEventListener - добовляем событие клика
  // ('click', myFunction, false);
  //  тип события
  //  Что должно выполнятся
  // Обработчик
}

function delete_product() {
  let click_trash = document.querySelectorAll(".trash");

  for (var i = 0; i < click_trash.length; i++) {
    click_trash[i].addEventListener("click", del_func, false);
  }

  function del_func(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove();

    totalPrice();
    total_amount();
  }

}

//Сложение суммы товаров
function totalPrice(){
let countPrice = document.querySelectorAll(".info__price .oprice");

let total_price = 0;

for (var i = 0; i < countPrice.length; i++) {
  total_price = total_price + (+countPrice[i].innerHTML);
}

document.getElementsByClassName("total_cart")[0].innerHTML = `$ ${total_price}`;
document.querySelectorAll(".shopcard__total span")[0].innerHTML = `$ ${total_price}`;
};

//Сумма количества товаров
function total_amount(){
  let totalAmount = document.getElementsByClassName("bag__item").length;
  document.getElementsByClassName("cart_count")[0].innerHTML = totalAmount;
}
	


// function totalAmount(){

// let countAmount = document.getElementsByClassName(".bag__item").length;

// let total_amount = 0;

// for (var i = 0; i < countAmount.length; i++) {
//    total_amount = total_amount + (+countAmount[i].innerHTML);

// document.getElementsByClassName("cart_count")[0].innerHTML = `$ ${total_amount}`;

// console.log(total_amount)
// }
// };

// Подсчет суммы товара в корзине

// 		let modalPrice = document.querySelector('.shopcard__total');
// 		let totalPrice = cart.reduce(function(result, item){
// 		return result + item.cost;

// 		}, 0)

// modalPrice.textContent = totalPrice;

// Закончился подсчет

// function update_count() {
// 	let count_product_in_cart = 0;

//  	let count_product = document.querySelectorAll(".price span");

// 	for (var i = 0; i < count_product.length; i++) {
// 		count_product_in_cart = count_product_in_cart + +count_product[i].textContent;
// 	}

// 	console.log(count_product_in_cart);