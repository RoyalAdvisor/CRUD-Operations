// CAR LIST

let car = JSON.parse(localStorage.getItem("car"))
  ? JSON.parse(localStorage.getItem("car"))
  : [
      {
        name: "VW Golf GTi ClubSport",
        type: "Hatchback",
        price: 800000,
        img: "https://www.topgear.com/sites/default/files/images/cars-road-test/2021/01/5d416c89f204e661c48d07982480da39/golf_gti_vs_civic_type_r-43.jpg",
      },
      {
        name: "Honda Civic Type R",
        type: "Hatchback",
        price: 750000,
        img: "https://www.carscoops.com/wp-content/uploads/2020/07/Honda-Civic-Type-R-7.jpg",
      },
      {
        name: "Opel Astra OPC",
        type: "Hatchback",
        price: 600000,
        img: "https://cdn.motor1.com/images/mgl/AgOXL/s1/2014-453073-opel-astra-opc-extreme1.jpg",
      },
      {
        name: "Subaru WRX STi",
        type: "Sports",
        price: 750000,
        img: "https://www.carscoops.com/wp-content/uploads/2020/12/2021-subaru-wrx-sti.jpg",
      },
      {
        name: "Toyota GR Supra",
        type: "Sports",
        price: 1100000,
        img: "https://www.motortrend.com/uploads/sites/5/2021/02/2021-Toyota-GR-Supra-3-0-Premium-26.jpg?fit=around%7C875:492",
      },
      {
        name: "Nissan R35 GTR",
        type: "Sports",
        price: 1500000,
        img: "https://cdn.motor1.com/images/mgl/gZQWo/s3/nissan-gt-r-t-spec.jpg",
      },
      {
        name: "Ferrari 488 Pista",
        type: "Super",
        price: 4000000,
        img: "https://www.alainclass.com/wp-content/uploads/2019/06/1170-BH4A0105.jpg",
      },
      {
        name: "Lamborghini Performante",
        type: "Super",
        price: 5500000,
        img: "https://www.alainclass.com/wp-content/uploads/2020/03/2018-Lamborghini-Huracan-Performante-BLUE-a09000-18.jpg",
      },
      {
        name: "McLaren 720S",
        type: "Super",
        price: 7000000,
        img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61a51caadcba3e66b006c334%2F0x0.jpg",
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

console.log(car);
console.log(cart);
readCar = (car) => {
  document.querySelector(".card-container").innerHTML = "";
  car.forEach((item, index) => {
    document.querySelector(".card-container").innerHTML += `
        <div class="card-item mb-3 shadow">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${item.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Name: ${item.name}</h5>
                <p class="card-text">Type: ${item.type}</p>
                <p class="card-text">Price(R): ${item.price}</p>
                <div class="quantity">
                <label for="input-label">Quantity</label>
                <input type="number" class="add-quantity" min=1 value=1>
                </div>
                <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit-modal-${index}">Edit</button>
                <button onclick="deleteCar(${index})" class="btn btn-danger">Delete</button>
                <button onclick="addToCart(${index})" class="btn btn-warning">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="edit-modal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit ${item.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5>Name</h5>
                        <input type="text" id="edit-name-${index}"/>
                        <h5>Price</h5>
                        <input type="text" id="edit-price-${index}"/>
                        <h5>Type</h5>
                        <select name="type" class="edit-type-${index}">
                            <option value="Sedan">Sedan</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Sports">Sports</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Super">Super</option>
                            <option value="Convertible">Convertible</option>
                        </select>
                        <h5>Image URL</h5>
                        <input type="text" id="edit-image-${index}"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit-modal-${index}" onclick="editCar(${index})">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        `;
  });
};

navigation = () => {
  document.querySelector(".navigation").innerHTML = `
    <div class="nav-container">
        <nav class="nav">
          <a href="#home">Home</a>
        </nav>
        <button type="button" class="btn btn-info btn1" id="m-cart" data-bs-toggle="offcanvas" data-bs-target="#cart-item" aria-controls="cart-item">Cart</button>
        <button class="btn btn-warning  btn2" id="m-cart" data-bs-toggle="modal" data-bs-target="#add-modal">Add Car</button>
        <div class="menu-container">
        <button class="menu is-active" type="button">
          <div class="bar"></div>
        </button>
        </div>
      </div>
      <div class="mobile-nav">
        <nav class="m-nav">
          <a href="#home">Home</a>
          <button type="button" class="btn btn-info " id="m-cart" data-bs-toggle="offcanvas" data-bs-target="#cart-item" aria-controls="cart-item">View Cart</button>
        </nav>        
        <button class="btn btn-warning btn3 " id="m-cart" data-bs-toggle="modal" data-bs-target="#add-modal">Add Car</button>
    </div>

    <div class="modal fade" id="add-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add new car</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Name</h5>
        <input type="text" id="add-name"/>
        <h5>Price</h5>
        <input type="text" id="add-price"/>
        <h5>Type</h5>
        <select name="type" class="add-type">
            <option value="Sedan">Sedan</option>
            <option value="Coupe">Coupe</option>
            <option value="Sports">Sports</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Super">Super</option>
            <option value="Convertible">Convertible</option>
        </select>
        <h5>Image URL</h5>
        <input type="text" id="add-image"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#add-modal" onclick="createCar()">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="offcanvas offcanvas-top" tabindex="-1" id="cart-item" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-body">
  </div>
</div>
    `;
  const menu_btn = document.querySelector(".menu");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};

navigation();

readCar(car);

deleteCar = (index) => {
  car.splice(index, 1);
  localStorage.setItem("car", JSON.stringify(car));
  readCar(car);
};

createCar = () => {
  let addName = document.querySelector(`#add-name`).value;
  let addPrice = document.querySelector(`#add-price`).value;
  let addType = document.querySelector(`.add-type`).value;
  let addImage = document.querySelector(`#add-image`).value;

  car.push({
    name: addName,
    price: addPrice,
    type: addType,
    img: addImage,
  });
  localStorage.setItem("car", JSON.stringify(car));
  readCar(car);
};
editCar = (index) => {
  let name = document.querySelector(`#edit-name-${index}`).value;
  let price = document.querySelector(`#edit-price-${index}`).value;
  let type = document.querySelector(`.edit-type-${index}`).value;
  let image = document.querySelector(`#edit-image-${index}`).value;

  car[index] = {
    name,
    price,
    type,
    img: image,
  };
  localStorage.setItem("car", JSON.stringify(car));
  readCar(car);
};

// SHOPPING CART

addToCart = (index) => {
  let quantity = document.querySelector(".add-quantity").value;
  let added = false;
  cart.forEach((item) => {
    if (item.name == car[index].name) {
      item.quantity = parseInt(item.quantity) + parseInt(quantity);
      added = true;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
  if (!added) {
    cart.push({ ...car[index], quantity });
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  readCart(cart);
};

calculateTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total = total + item.price * item.quantity;
  });
  return total;
};

readCart = (cart) => {
  document.querySelector("#cart-item").innerHTML = "";

  document.querySelector("#cart-item").innerHTML = `
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">Your Cart</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="total">
    <h5 class="total-price">Total Price(R): ${calculateTotal()}</h5>
  </div>
  `;

  cart.forEach((item, index) => {
    document.querySelector("#cart-item").innerHTML += `
    <div class="cart-container">
      <div class="cart-card mb-3 shadow-sm" style="max-width: 600px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.img}" class="cart-img rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Name: ${item.name}</h5>
              <p class="card-text">Type: ${item.type}</p>
              <p class="card-text">Price(R): ${item.price}</p>
              <input type="number" min=1 value=${
                item.quantity
              } onchange="updateCart(${index})" class="update-quantity${index}" id="update">
              <p class="card-price">Price(R): ${
                parseInt(item.quantity) * parseInt(item.price)
              }</p>
              <button class="btn btn-danger" onclick="deleteCart(${index})">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  });
};

readCart(cart);

updateCart = (index) => {
  let quantity = document.querySelector(`.update-quantity${index}`).value;
  cart[index] = { ...cart[index], quantity };
  localStorage.setItem("cart", JSON.stringify(cart));
  readCart(cart);
};

deleteCart = (index) => {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  readCart(cart);
};

//CATERGORY SORT

sortCatergory = () => {
  let type = document.querySelector("#sortCatergory").value;

  if (type == "All") {
    readCar(car);
    return;
  }

  let filteredItems = car.filter((item) => {
    return item.type == type;
  });
  readCar(filteredItems);
};

sortPrice = () => {
  let direction = document.querySelector("#sortPrice").value;

  let sortedCar = car.sort((a, b) => a.price - b.price);
  readCar(sortedCar);

  if (direction == "descending") sortedCar.reverse();
  readCar(sortedCar);
};

sortName = () => {
  let direction = document.querySelector("#sortName").value;

  let sortedName = car.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedName.reverse();
  readCar(car);
};
