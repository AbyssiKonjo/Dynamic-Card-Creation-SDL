const clothingProducts = [
  {
      id: 1,
      name: "Men's Classic T-Shirt",
      description: "A timeless classic t-shirt for men, made from 100% cotton for comfort and durability.",
      price: "$15.99",
      colours: ["White", "Black", "Grey", "Navy"],
      sizes: ["S", "M", "L", "XL"],
      images: ["https://source.unsplash.com/300x300/?white+tshirt",
              "https://source.unsplash.com/300x300/?black+tshirt",
              "https://source.unsplash.com/300x300/?gray+tshirt"]
      
  },
  {
      id: 2,
      name: "Women's V-Neck Sweater",
      description: "A timeless classic t-shirt for men, made from 100% cotton for comfort and durability.",
      price: "$29.99",
      colours: ["Burgundy", "Navy", "Charcoal", "Cream"],
      sizes: ["XS", "S", "M", "L", "XL"],
      images: ["https://source.unsplash.com/300x300/?burgundy+sweater",
              "https://source.unsplash.com/300x300/?navy+sweater",
              "https://source.unsplash.com/300x300/?charcoal+sweater"]

  },
  {
      id: 3,
      name: "Men's Slim-Fit Jeans",
      description: "Stylish slim-fit jeans for men, crafted from premium denim for a comfortable fit.",
      price: "$39.99",
      colours: ["Dark Wash", "Light Wash", "Black", "Grey"],
      sizes: ["28W x 30L", "30W x 32", "32W x 32L", "34W x 34L"],
      images: ["https://source.unsplash.com/300x300/?jeans",
              "https://source.unsplash.com/300x300/?jeans",
              "https://source.unsplash.com/300x300/?jeans"],
  },
  {
      id: 4,
      name: "Women's High-Waisted Leggings",
      description: "Stretchy and comfortable high-waisted leggings for women, suitable for workouts or casual wear.",
      price: "$19.99",
      colours: ["Black", "Navy", "Charcoal", "Burgundy"],
      sizes: ["XS", "S", "M", "L"],
      images: ["https://source.unsplash.com/300x300/?leggings",
              "https://source.unsplash.com/300x300/?leggings",
              "https://source.unsplash.com/300x300/?leggings"],    
  },
  {
      id: 5,
      name: "Men's Hooded Sweatshirt",
      description: "A cozy hooded sweatshirt for men, perfect for staying warm in colder climates.",
      price: "$49.99",
      colours: ["Heather Gray", "Black", "Navy", "Burgundy"],
      sizes: ["S", "M", "L", "XL"],
      images: ["https://source.unsplash.com/300x300/?hoodie",
              "https://source.unsplash.com/300x300/?hoodie",
              "https://source.unsplash.com/300x300/?hoodie"],    
  },
  {
      id: 6,
      name: "Women's Denim Jacket",
      description: "A stylish denim jacket for women, featuring a classic design with button closures.",
      price: "$59.99",
      colours: ["Light Blue", "Medium Blue", "Dark Blue", "Black"],
      sizes: ["XS", "S", "M", "L"],
      images: ["https://source.unsplash.com/300x300/?denim+jacket",
              "https://source.unsplash.com/300x300/?denim+jacket",
              "https://source.unsplash.com/300x300/?denim+jacket"],    
  },
  {
      id: 7,
      name: "Men's Polo Shirt",
      description: "A classic polo shirt for men, perfect for both casual and semi-formal occasions.",
      price: "$24.99",
      colours: ["White", "Black", "Navy", "Gray"],
      sizes: ["S", "M", "L", "XL"],
      images: ["https://source.unsplash.com/300x300/?polo+shirt",
              "https://source.unsplash.com/300x300/?polo+shirt",
              "https://source.unsplash.com/300x300/?polo+shirt"],    
  },
  {
      id: 8,
      name: "Women's Midi Dress",
      description: "A versatile midi dress for women, suitable for both casual and formal events.",
      price: "$34.99",
      colours: ["Black", "Navy", "Burgundy", "Forest Green"],
      sizes: ["XS", "S", "M", "L"],
      images: ["https://source.unsplash.com/300x300/?midi+dress",
              "https://source.unsplash.com/300x300/?midi+dress",
              "https://source.unsplash.com/300x300/?midi+dress"],    
  },
  {
      id: 9,
      name: "Men's Chino Pants",
      description: "Classic chino pants for men, featuring a straight-leg fit and comfortable cotton fabric.",
      price: "$44.99",
      colours: ["Khaki", "Navy", "Gray", "Black"],
      sizes: ["30W x 30L", "32W x 32L", "34W x 34L", "36W x 34L"],
      images: ["https://source.unsplash.com/300x300/?chino+pants",
              "https://source.unsplash.com/300x300/?chino+pants",
              "https://source.unsplash.com/300x300/?chino+pants"],    
  },
  {
      id: 10,
      name: "Women's Ankle Boots",
      description: "Stylish ankle boots for women, featuring a chunky heel and faux leather material.",
      price: "$54.99",
      colours: ["Black", "Brown", "Tan", "Gray"],
      sizes: ["5", "6", "7", "8"],
      images: ["https://source.unsplash.com/300x300/?ankle+boots",
              "https://source.unsplash.com/300x300/?ankle+boots",
              "https://source.unsplash.com/300x300/?ankle+boots"],    
  },
  {
      id: 11,
      name: "Men's Button-Up Shirt",
      description: "A versatile button-up shirt for men, perfect for both casual and formal occasions.",
      price: "$34.99",
      colours: ["Blue", "White", "Plaid", "Gray"],
      sizes: ["S", "M", "L", "XL"],
      images: ["https://source.unsplash.com/300x300/?button+up+shirt",
              "https://source.unsplash.com/300x300/?button+up+shirt",
              "https://source.unsplash.com/300x300/?button+up+shirt"]
      
  },
  {
      id: 12,
      name: "Women's V-Neck Sweater",
      description: "A timeless classic t-shirt for men, made from 100% cotton for comfort and durability.",
      price: "$39.99",
      colours: ["Beige", "Gray", "Navy", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      images: ["https://source.unsplash.com/300x300/?cardigan+sweater",
              "https://source.unsplash.com/300x300/?cardigan+sweater",
              "https://source.unsplash.com/300x300/?cardigan+sweater"]

  },
  {
      id: 13,
      name: "Men's Cargo Shorts",
      description: "Casual cargo shorts for men, featuring multiple pockets for convenience.",
      price: "$24.99",
      colours: ["Khaki", "Black", "Navy", "Green"],
      sizes: ["30", "32", "34", "36"],
      images: ["https://source.unsplash.com/300x300/?cargo+shorts",
              "https://source.unsplash.com/300x300/?cargo+shorts",
              "https://source.unsplash.com/300x300/?cargo+shorts"],
  },
  {
      id: 14,
      name: "Women's Peacoat",
      description: "A stylish peacoat for women, featuring a double-breasted design and warm wool material.",
      price: "$77.99",
      colours: ["Navy", "Black", "Gray", "Camel"],
      sizes: ["XS", "S", "M", "L"],
      images: ["https://source.unsplash.com/300x300/?peacoat",
              "https://source.unsplash.com/300x300/?peacoat",
              "https://source.unsplash.com/300x300/?peacoat"],    
  },
  {
      id: 15,
      name: "Men's Crewneck Sweater",
      description: "A classic crewneck sweater for men, perfect for layering or wearing on its own.",
      price: "$29.99",
      colours: ["Navy", "Gray", "Burgundy", "Charcoal"],
      sizes: ["S", "M", "L", "XL"],
      images: ["https://source.unsplash.com/300x300/?crewneck+sweater",
              "https://source.unsplash.com/300x300/?crewneck+sweater",
              "https://source.unsplash.com/300x300/?crewneck+sweater"],    
  },
  {
      id: 16,
      name: "Women's Blouset",
      description: "A chic blouse for women, featuring a flowy fit and stylish print.",
      price: "$24.99",
      colours: ["White", "Black", "Red", "Navy"],
      sizes: ["XS", "S", "M", "L"],
      images: ["https://source.unsplash.com/300x300/?blouse",
              "https://source.unsplash.com/300x300/?blouse",
              "https://source.unsplash.com/300x300/?blouse"],    
  },
  {
      id: 17,
      name: "Men's Bomber Jacket",
      description: "A trendy bomber jacket for men, featuring a zip-up front and ribbed cuffs.",
      price: "$59.99",
      colours: ["Black", "Green", "Navy", "Burgundy"],
      sizes: ["S", "M", "L", "XL"],
      images: ["https://source.unsplash.com/300x300/?bomber+jacket",
              "https://source.unsplash.com/300x300/?bomber+jacket",
              "https://source.unsplash.com/300x300/?bomber+jacket"],    
  },
  {
      id: 18,
      name: "Women's Maxi Skirt",
      description: "A flowy maxi skirt for women, perfect for warm weather or beach outings.",
      price: "$34.99",
      colours: ["Black", "Navy", "Gray", "Burgundy"],
      sizes: ["XS", "S", "M", "L"],
      images: ["https://source.unsplash.com/300x300/?maxi+skirt",
              "https://source.unsplash.com/300x300/?maxi+skirt",
              "https://source.unsplash.com/300x300/?maxi+skirt"],    
  },
  {
      id: 19,
      name: "Men's Dress Shoes",
      description: "Classic dress shoes for men, perfect for formal occasions or professional settings.",
      price: "$79.99",
      colours: ["Black", "Brown", "Tan", "Oxblood"],
      sizes: ["7", "8", "9", "10"],
      images: ["https://source.unsplash.com/300x300/?dress+shoes",
              "https://source.unsplash.com/300x300/?dress+shoes",
              "https://source.unsplash.com/300x300/?dress+shoes"],    
  },
  {
      id: 20,
      name: "Women's Crossbody Bag",
      description: "A stylish crossbody bag for women, perfect for carrying essentials on the go.",
      price: "$49.99",
      colours: ["Black", "Brown", "Tan", "Gray"],
      sizes: ["One Size"],
      images: ["https://source.unsplash.com/300x300/?crossbody+bag",
              "https://source.unsplash.com/300x300/?crossbody+bag",
              "https://source.unsplash.com/300x300/?crossbody+bag"],    
  },
];

const results = document.getElementById('results');

function populateCards(array) {
  results.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const cardDetails = `
          <img src="${array[i].images[0]}" alt="">
          <div class="card-details">
              <h2>${array[i].name}</h2>
              <p>${array[i].description}</p>
              <p>${array[i].price}</p>
              <div class="option-selection">
                  <label for="colours">Colours:</label>
                  <select name="colours" id="colours">
                      ${array[i].colours.map(colour => `<option value="${colour}">${colour}</option>`).join("")}
                  </select>
              </div>
              <div class="option-selection">
                  <label for="sizes">Size:</label>
                  <select name="sizes" id="sizes">
                      ${array[i].sizes.map(size => `<option value="${size}">${size}</option>`).join("")}
                  </select>
              </div>
          </div>
      `;

      cardElement.innerHTML = cardDetails;
      results.appendChild(cardElement);
  }
  // Add event listener to each color select dropdown
  const colorDropdowns = document.querySelectorAll('.colours');
  for (let j = 0; j < colorDropdowns.length; j++) {
      colorDropdowns[j].addEventListener('change', function() {
          const index = this.getAttribute('data-index');
          const selectedColor = this.value;
          const imageIndex = array[index].colours.indexOf(selectedColor);
          const imageUrl = array[index].images[imageIndex];
          const cardImage = this.parentNode.parentNode.querySelector('img');
          cardImage.src = imageUrl;
      });
  }
}

// Call the function to populate the cards
populateCards(clothingProducts);