import { dataInfo } from "./index.js";

const div = document.querySelector('.content');
const data = JSON.parse(dataInfo);

// console.log(data);





// data.forEach(({ shoppingСart, fruits, price, photo }) => {
// 	const divCard = document.createElement('div');
// 	divCard.classList.add('card');
// 	div.appendChild(divCard);
// 	divCard.style.border = '1px solid green';
// 	divCard.style.padding = '20px';
// 	divCard.style.margin = '30px';
// 	divCard.style.borderRadius = '10px';



// 	const img = document.createElement('img');
// 	img.classList.add('img-profile');
// 	img.width = 300;
// 	img.height = 200;
// 	img.src = photo;
// 	divCard.appendChild(img);

// 	const cardBody = document.createElement('div');
// 	cardBody.classList.add('card-body');
// 	divCard.appendChild(cardBody);

// 	const title = document.createElement('h2');
// 	title.classList.add('card-title');
// 	title.textContent = `${fruits} `;
// 	cardBody.appendChild(title);

// 	const subtitle = document.createElement('p');
// 	subtitle.classList.add('card-subtitle');
// 	subtitle.textContent = price;
// 	cardBody.appendChild(subtitle);

// 	const btnPara = document.createElement('button');
// 	btnPara.classList.add('card-btn');
// 	btnPara.textContent = `Корзина ${shoppingСart}`;
// 	btnPara.style.color = 'black';
// 	btnPara.style.cursor = 'pointer';
// 	btnPara.style.backgroundColor = 'orange';
// 	btnPara.style.border = 'none';
// 	btnPara.style.borderRadius = '10px';
// 	btnPara.style.padding = '15px';
// 	cardBody.appendChild(btnPara);

// });
// async function fetchData() {
// 	try {
// 		const responce = await fetch('index.json');
// 		if (!responce.ok) {
// 			throw new Error('Ну удалось получить сведения из index.json')
// 		}
// 		const data = await responce.json();
// 		console.log(data);

// 		const productBox = document.querySelector('.section__box');

// 		data.forEach(({ name, subname, image, price, color }) => {
// 			const productEl = `

// 			<div class="section__product-box">
// 			<div class="section">
// 			  <img
// 				class="section__img"
// 				src="${image}"
// 				alt="${name}"
// 			  />

// 			  <div class="section__content">
// 				<a href="#" class="section__name">ELLERY X M'O CAPSULE</a>
// 				<p class="section__text">
// 				  ${subname}
// 				</p>
// 				<p class="section__price">$${price}</p>
// 			  </div>
// 			</div>
// 			</div>

// 			`;
// 			productBox.insertAdjacentHTML('beforeend', productEl)
// 		})

// 	} catch (error) {
// 		console.error(error);
// 	}
// }


// fetchData()


// async function fetchData() {
// 	try {
// 		const responce = await fetch('index.json');
// 		if (!responce.ok) {
// 			throw new Error('Ну удалось получить сведения из index.json')
// 		}
// 		const data = await responce.json();
// 		console.log(data);

// 		const productBox = document.querySelector('.product__box');

// 		data.forEach(({ name, image, price, color, size, quantity, max }) => {
// 			const productEl = `
// 		<div class="product">


// 		<button class="btn__del" type="button">Удалить</button>
// 		<div class="product__content">
// 		  <img class="product__img" src="/product__img/product1.jpg" alt="${name}" />
// 		  <div class="product__desc">
// 			<h2 class="product__name">MANGO PEOPLE T-SHIRT</h2>
// 			<p class="product__price-label">
// 		  Price:
// 		  <span class="product__price">$300</span>
// 			</p>
// 			<p class="product__color">Color: Red</p>
// 			<p class="product__size">Size: XL</p>
// 			<div class="product__qty">
// 			  <label class="input__label">Quantity:</label>
// 			  <input
// 			class="input__quantity"
// 			type="number"
// 			min="0"
// 			max="5"
// 			value="2"
// 		  />
// 		</div>
// 	  </div>


//   </div>
// </div>
// 			`;
// 			productBox.insertAdjacentHTML('beforeend', productEl)
// 		})

// 	} catch (error) {
// 		console.error(error);
// 	}
// }


// fetchData()





















// Находим все кнопки "Добавить в корзину"
let addToCartBtns = document.getElementsByClassName("add-to-cart");

// Находим раздел "Cart items"
let cartItems = document.getElementById("product");

// Добавляем обработчик события для каждой кнопки "Добавить в корзину"
for (let i = 0; i < addToCartBtns.length; i++) {
	addToCartBtns[i].addEventListener("click", addToCart);
}

// Функция для добавления товара в корзину
function addToCart(e) {
	const product = e.target.parentNode;

	// Создаем новый элемент в разделе "Cart items"
	let cartItem = document.createElement("div");
	cartItem.innerHTML = "<div>" + product.querySelector(".product__content").innerHTML + "</div>";
	cartItem.innerHTML += "<p>" + product.querySelector("p").innerHTML + "</p>";
	cartItem.innerHTML += "<button class='btn__del'>Удалить</button>";

	// Добавляем обработчик события для кнопки "Удалить"
	cartItem.querySelector(".btn__del").addEventListener("click", removeFromCart);

	// Добавляем товар в корзину
	cartItems.appendChild(cartItem);

	// Показываем раздел "Cart items"
	cartItems.style.display = "block";
}

// Функция для удаления товара из корзины
function removeFromCart(e) {
	let cartItem = e.target.parentNode;

	// Удаляем товар из корзины
	cartItems.removeChild(cartItem);

	// Если все товары удалены, скрываем раздел "Cart items"
	if (cartItems.children.length === 0) {
		cartItems.style.display = "none";
	}
}


const deleteButton = document.querySelector('.btn__del');
deleteButton.addEventListener('click', function () {
	const product = this.closest('.product');
	product.remove();
});












