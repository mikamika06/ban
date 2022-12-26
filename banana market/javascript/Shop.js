const Catalog = [
	{
		id: "el1",
		name: "Ind Banana 1",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: true,
	},
	{
		id: "el2",
		name: "Ind Banana 2",
		img: "../img/tovar.jpg",
		price: 40,
		isIndoor: true,
	},
	{
		id: "el3",
		name: "Ind Banana 3",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: true,
	},
	{
		id: "el4",
		name: "Ind Banana 4",
		img: "../img/tovar.jpg",
		price: 30,
		isIndoor: true,
	},
	{
		id: "el5",
		name: "Ind Banana 5",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: true,
	},
	{
		id: "el6",
		name: "Ind Banana 6",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: true,
	},
	{
		id: "el7",
		name: "Out Banana 1",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: false,
	},
	{
		id: "el8",
		name: "Out Banana 2",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: false,
	},
	{
		id: "el9",
		name: "Out Banana 3",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: false,
	},
	{
		id: "el10",
		name: "Out Banana 4",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: false,
	},
	{
		id: "el11",
		name: "Out Banana 5",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: false,
	},
	{
		id: "el12",
		name: "Out Banana 6",
		img: "../img/tovar.jpg",
		price: 25,
		isIndoor: false,
	},
]

 goToLink = (event, url) =>  {
	let type = event.type;
	console.log( event)
	if ((type === 'click')|| (type === 'keydown' && event.keyCode === 13)) {
		window.location.href = url;
	
	  }
};

class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products };
    }
};

let localStorageUtil = new LocalStorageUtil();

class Products {

	constructor() {
        this.classNameActive = 'products-element__btn_active';
		this.classNamePassive = "products-element__btn_passive";
		this.productsStore = localStorageUtil.getProducts();
    }
	
	handlerSetLocatStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
			element.classList.add(this.classNameActive );
			element.classList.replace(this.classNamePassive, this.classNameActive );
        } else {
            element.classList.replace(this.classNameActive, this.classNamePassive);
        }

        // headerPage.render(products.length);
    }

	getIndItems = () => {
			let htmlCatalog = "";
			Catalog.filter(item => item.isIndoor).forEach(({id, name, img, price}) => {
				let activeClass = '';
				if (this.productsStore.indexOf(id) === -1) {
				} else {
					activeClass = ' ' + this.classNameActive;
				}
				htmlCatalog += `
					<div class="products__container--item" id="${id}">
						<div class="products__container--itemblock1">
							<img src="${img}">
							<button class="card${activeClass}" onclick="products.handlerSetLocatStorage(this, '${id}')"></button>
						</div>
						<div class="products__container--itemblock2">
							<p>${name}</p>
							<span>from ${price}$</span>
						</div>
					</div>
				`;
			})

			let html = `
				<div class="products__container">
					${htmlCatalog}
				</div>
			`;

			let products__html = document.getElementById("products");
			products__html.innerHTML = html;
		}

		 getOutItems()  {
			let htmlCatalog = "";
			Catalog.filter(item => !item.isIndoor).forEach(({id, name, img, price}) => {
				let activeClass = '';
				if (this.productsStore.indexOf(id) === -1) {
				} else {
					activeClass = ' ' + this.classNameActive;
				}
				htmlCatalog += `
					<div class="products__container--item" id="${id}">
						<div class="products__container--itemblock1">
							<img src="${img}">
							<button class="card${activeClass}" onclick="products.handlerSetLocatStorage(this, '${id}')"></button>
						</div>
						<div class="products__container--itemblock2">
							<p>${name}</p>
							<span>from ${price}$</span>
						</div>
					</div>
				`;
			})

			let html = `
				<div class="products__container">
					${htmlCatalog}
				</div>
			`;

			let products__html = document.getElementById("products");
			products__html.innerHTML = html;
		}
		
		 getAllItem() { 
			let htmlCatalog = "";
			Catalog.forEach(({id, name, img, price}) => {
				let activeClass = '';
				if (this.productsStore.indexOf(id) === -1) {
					
				} else {
					activeClass = ' ' + this.classNameActive;
				}
				htmlCatalog += `
					<div class="products__container--item" id="${id}">
						<div class="products__container--itemblock1">
							<img src="${img}">
							<button class="card${activeClass}" onclick="products.handlerSetLocatStorage(this, '${id}')"></button>
						</div>
						<div class="products__container--itemblock2">
							<p>${name}</p>
							<span>from ${price}$</span>
						</div>
					</div>
				`;
			})

			let html = `
				<div class="products__container">
					${htmlCatalog}
				</div>
			`;

			let products__html = document.getElementById("products");
			products__html.innerHTML = html;
		}

}
let products = new Products();

products.getAllItem()

class Shopping {
   constructor() {
		this.shopingBlock = document.getElementById("shopping");
		this.el = "";
   }
	
	handlerClear() {
        this.shopingBlock.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        Catalog.forEach(({ id, name, img, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                    </tr>
                `;
                Math.floor(price)
				sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">Сумма:</td>
                        <td class="shopping-element__price">${Math.floor(sumCatalog.toLocaleString())} USD</td>
						
                    </tr>
					<tr>
						<td class="shopping-element__td">
							<button class="shopping-element__button" onclick="shoppingPage.buy()">Оформити замовлення</button>
						</td>
					</tr>
                </table>
            </div>
        `;
        this.shopingBlock.innerHTML = html;
    }

	buy() {
		// this.shopingBlock.innerHTML = '';
		const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        
		
		
		Catalog.forEach(({ id, name, img, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
					<div class="tovarbuyblock">
						<img src="${img}">
						<div class="tovarbuyblock__tov">
							<div class="tovarbuyblock__tov--name">
								<input type="text" name="${name}" value="${name}" readonly></input>
							</div> 
							<div class="tovarbuyblock__tov--price">
								<input type="text" name="${name}" value="${price} USD" readonly></input>
							</div> 

						</div>
					</div>
					
                `;
                Math.floor(price)
				sumCatalog += price;
				this.el = name;
				
            } 
        });
		
		const htmlmain = `
		<form class="formbuy" action="https://formspree.io/f/mlezqogd" method="POST">	
			<div class="form">
				<div class="outfieldset"> 
					<p class="outfieldset--p">Контактні дані</p>
					<fieldset>
						<label >Телефон<em>*</em></label>
						<input name="telefn"type="text" maxlength="12" value="380" required>
						<label for="fname">Прізвище<em>*</em></label>
						<input name="surname" type="text" maxlength="50" placeholder="Введіть Прізвище" required>
						<label for="firstname">Ім'я<em>*</em></label>
						<input name="name" type="text" maxlength="50" placeholder="Введіть Ім'я " required>
					</fieldset>	
				</div>
				<div class="outfieldset"> 
					<p class="outfieldset--p">Доставка</p>
					<fieldset>
						<label for="newpost">Нова пошта</label>
						<label >
							<input type="radio" name="viddil" required >
							У віддділення
						</label>
						<label >
							Введіть номер відділення: 
							<input type="text" name="viddil"  maxlength="4" required value="№">
							

						</label>
					</fieldset>	
				</div>
				<div class="outfieldset"> 
					<p class="outfieldset--p">Оплата</p>
					<fieldset class="oplata">
						<label >
							<input type="radio" name="pislaplata" class="pislaplata" required >
							Післяплата
						</label>
					</fieldset>	
				</div>
				<button type="submit"class="introbloc__button--white submit-el">Оформити замовлення</button>
			</div>
			<div class="tovarbuy"> 
			<div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
				Ваше замовлення:
				${htmlCatalog}
					<div class="tovarbuy__sum">
						<input type="text" name="sum" value="До оплати: ${Math.floor(sumCatalog.toLocaleString())} USD" readonly>
					</div>
			</div>

		</form>
		`

        const html = `
			${htmlmain}
        `;
        this.shopingBlock.innerHTML = html;
	}
};

const shoppingPage = new Shopping();

// shoppingPage.buy()

