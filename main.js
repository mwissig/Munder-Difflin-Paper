//info about the papers that is all the same
var details = (`Text Weight, 80​g/m² (55lbs)<br>Grain Short<br>4 Cut Edges`);

//sets cart balance
var cartBalance = 0;

//the default text for the paper info section; the smajority of the copy is from Hollanders
var rightBoxText = (`<h3>This Season's Paper</h3><p>Renato Crepaldi has worked in his home studio in Brazil as a full-time marbler since 2002. He produces a wide range of traditional and contemporary marbled papers for use in bookbinding, book arts and various paper crafts. His Tiger Eye marbles are particularly stunning.</p>
<p><p>Renato Crepaldi limited edition hand marbled papers are great for when more than one of a particular hand marbled paper is required. Edition marbles are very similar, but because each is individually hand-marbled, no two are exactly the same.</p><p>
Munder Difflin Paper is proud to be the exclusive distributor for nine limited edition Crepaldi papers as our Summer 2018 collection.</p>`);

//whether or not the cart is currently displayed
var cartShowing = false;

//opens and closes the cart when the "cart" icon is clicked
function showCart() {
  if (!cartShowing) {
    cart.classList.add('cartRoll');
    cartShowing = true;
    console.log('cart');
  } else {
    cart.classList.remove('cartRoll');
    cartShowing = false;
    console.log('uncart');
  }
}
//closes the cart when the "close" button inside the cart is clicked
function closeCart() {
  cart.classList.remove('cartRoll');
  cartShowing = false;
};



//object of all the paper info
paperTypes = {
  one: {
    name: "Renato Crepaldi Tiger Eye 126",
    size: "18 x 26 inches",
    quantity: 0,
    price: 20,
    image: "images/green_tiger_eye.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
  two: {
    name: "Renato Crepaldi Tiger Eye 124",
    size: "18 x 26 inches",
    quantity: 0,
    price: 20,
    image: "images/red_tiger_eye.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
  three: {
    name: "Renato Crepaldi Hand Marble 080",
    size: "18 x 26 inches",
    quantity: 0,
    price: 18,
    image: "images/pink_hand_marble.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
  four: {
    name: "Renato Crepaldi Hand Marble 352",
    size: "18 x 26 inches",
    quantity: 0,
    price: 20,
    image: "images/bright_hand_marble.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
  five: {
    name: "Renato Crepaldi Hand Marble 072",
    size: "18 x 26 inches",
    quantity: 0,
    price: 18,
    image: "images/brown_hand_marble.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
  six: {
    name: "Renato Crepaldi Hand Marble 085",
    size: "18 x 26 inches",
    quantity: 0,
    price: 18,
    image: "images/85.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
  seven: {
    name: "Renato Crepaldi Hand Marble 340",
    size: "18 x 26 inches",
    quantity: 0,
    price: 18,
    image: "images/340.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
  eight: {
    name: "Renato Crepaldi Hand Marble 089",
    size: "18 x 26 inches",
    quantity: 0,
    price: 18,
    image: "images/89.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
  nine: {
    name: "Renato Crepaldi Hand Marble 347",
    size: "18 x 26 inches",
    quantity: 0,
    price: 18,
    image: "images/347.jpg",
    buy: function() {
      this.quantity++;
      cartBalance += this.price;
      generateCartContents();
    },
    displayInfo: function() {
      document.getElementById("rightSidePaperBox").innerHTML = (`<p>${this.name}</p>
        <p>${this.size}<br>
        ${details}</p><p>
        $${this.price}.00</p>
        <p><button onclick="${this.buy()}">Add to cart</button><button class="lighterButton" onclick="closeProduct()">Close</button></p>
        <p><img src="${this.image}" class="larger"></p>`);
    }
  },
}

//the contents of the cart
var cartContents = (`<p>
  ${paperTypes.one.name}: ${paperTypes.one.quantity}<br>
  ${paperTypes.two.name}: ${paperTypes.two.quantity}<br>
  ${paperTypes.three.name}: ${paperTypes.three.quantity}<br>
  ${paperTypes.four.name}: ${paperTypes.four.quantity}<br>
  ${paperTypes.five.name}: ${paperTypes.five.quantity}<br>
  ${paperTypes.six.name}: ${paperTypes.six.quantity}<br>
  ${paperTypes.seven.name}: ${paperTypes.seven.quantity}<br>
  ${paperTypes.eight.name}: ${paperTypes.eight.quantity}<br>
  ${paperTypes.nine.name}: ${paperTypes.nine.quantity}</p>
  <hr>
  <p>Total: ${cartBalance}</p>
  <hr><button onclick="checkOut()">Checkout</button><button class="lighterButton" onclick="checkOut()">Clear</button><button class="lighterButton" onclick="closeCart()">Close Cart</button>`);

  //should update the cart to the current amounts but it doesn't work
  function generateCartContents() {
    if (cartBalance == 0) {
      document.getElementById("cart").innerHTML = (`<p>Your cart is empty.</p><hr><button onclick="closeCart()">Close Cart</button>`);
    } else {
      document.getElementById("cart").innerHTML = (`<p>
        ${paperTypes.one.name}: ${paperTypes.one.quantity}<br>
        ${paperTypes.two.name}: ${paperTypes.two.quantity}<br>
        ${paperTypes.three.name}: ${paperTypes.three.quantity}<br>
        ${paperTypes.four.name}: ${paperTypes.four.quantity}<br>
        ${paperTypes.five.name}: ${paperTypes.five.quantity}<br>
        ${paperTypes.six.name}: ${paperTypes.six.quantity}<br>
        ${paperTypes.seven.name}: ${paperTypes.seven.quantity}<br>
        ${paperTypes.eight.name}: ${paperTypes.eight.quantity}<br>
        ${paperTypes.nine.name}: ${paperTypes.nine.quantity}</p>
        <hr>
        <p>Total: ${cartBalance}</p>
        <hr><button onclick="checkOut()">Checkout</button><button class="lighterButton" onclick="checkOut()">Clear</button><button class="lighterButton" onclick="closeCart()">Close Cart</button>`);
    }
  }

  function buy1() {
    paperTypes.one.quantity++;
    cartBalance += paperTypes.one.price;
    console.log(paperTypes.one.quantity);
    console.log(cartContents);
    generateCartContents();
    console.log(cartContents);
  }

//returns the product info section to the default text
function closeProduct() {
  document.getElementById("rightSidePaperBox").innerHTML = rightBoxText;
};

//scroll animations
var currentScrollHeight = 0;
var animationDone = false;

function section1(scroll_pos) {
  if (currentScrollHeight > 50) {
    introContainer.classList.add('bg2');
    section2(scroll_pos);
  }
}

function section2(scroll_pos) {
  if (currentScrollHeight > 700) {
    rightSidePaperBox.classList.add('animated');
    rightSidePaperBox.classList.add('slideInRight');
    rightSidePaperBox.classList.remove('hide');
    section3(scroll_pos);
  }
}

function section3(scroll_pos) {
  if (currentScrollHeight > 1100) {
    bookdiv.classList.add('animated');
    bookdiv.classList.add('slideInUp');
    bookdiv.classList.remove('hide');
    // section3(scroll_pos);
  }
}


window.addEventListener('scroll', function(e) {

  currentScrollHeight = window.scrollY;

  if (!animationDone) {
    window.requestAnimationFrame(function() {
      section1(currentScrollHeight);
      animationDone = false;
    });
  }
});

//loads the thumbnails of papers
var img1 = document.getElementById('paper1');
img1.src = paperTypes.one.image;
var img2 = document.getElementById('paper2');
img2.src = paperTypes.two.image;
var img3 = document.getElementById('paper3');
img3.src = paperTypes.three.image;
var img4 = document.getElementById('paper4');
img4.src = paperTypes.four.image;
var img5 = document.getElementById('paper5');
img5.src = paperTypes.five.image;
var img6 = document.getElementById('paper6');
img6.src = paperTypes.six.image;
var img7 = document.getElementById('paper7');
img7.src = paperTypes.seven.image;
var img8 = document.getElementById('paper8');
img8.src = paperTypes.eight.image;
var img9 = document.getElementById('paper9');
img9.src = paperTypes.nine.image;


//empties the cart
function checkOut() {
  cartBalance = 0;
  paperTypes.one.quantity = 0;
  paperTypes.two.quantity = 0;
  paperTypes.two.quantity = 0;
  paperTypes.two.quantity = 0;
  paperTypes.two.quantity = 0;
  paperTypes.two.quantity = 0;
  paperTypes.two.quantity = 0;
  paperTypes.two.quantity = 0;
  paperTypes.two.quantity = 0;
  generateCartContents();
}
//sets the cart contents
generateCartContents();
//puts the filler text in the paper info box
document.getElementById("rightSidePaperBox").innerHTML = rightBoxText;
//smooth scrolls to the sections
function scrollToBuy() {
  document.querySelector('#paperColorsContainer').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToContact() {
  document.querySelector('#contactContainer').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToTop() {
  document.querySelector('#introContainer').scrollIntoView({
    behavior: 'smooth'
  });
}
