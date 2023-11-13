/* INTRO TO JSON */

let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
  "food" : "Pasta",
  "picture_url" : "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1615916524567.jpeg",
  "color" : "#FF0072",
  "toppings" : ["meatballs", "bacon", "cheese"]
}

var randomIndex = Math.floor(Math.random() * myJSON["toppings"].length);

printToPage( myJSON['food'] + " with " + myJSON['toppings'][2]);

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "food" : "Pasta",
    "picture_url" : "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1615916524567.jpeg",
    "color" : "#ff0000",
    "toppings" : ["meatballs", "bacon", "cheese"]
  },
  {
    "food" : "Soup",
    "picture_url" : "https://www.cookingclassy.com/wp-content/uploads/2022/09/cream-of-mushroom-soup-2-500x500.jpg",
    "color" : "#0000FF",
    "toppings" : ["beef", "chicken", "mushroom"]
  },
  {
    "food" : "Burger",
    "picture_url" : "https://hips.hearstapps.com/hmg-prod/images/best-ever-burger-index-646e5ae887b2b.jpg?crop=0.566xw:1.00xh;0.210xw,0&resize=1200:*",
    "color" : "#c1a411",
    "toppings" : ["tomato", "lettuce", "cheese"]
  },
  {
    "food" : "Bread",
    "picture_url" : "https://assets.bonappetit.com/photos/5c5c982108be415aeb84b657/16:9/w_1280,c_limit/BA030119milkbread01.png",
    "color" : "#008000",
    "toppings" : ["butter", "sausage", "cheese"]
  }
];

// createElementMessy(myJSON);

// createElementProper(jsonDatabase[0]);

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {

  /// Start our HTML chunk
  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['color'] + "\"> <h3 class=\"contentFood\">" + incomingJSON['food'] + "</h3><h4>Toppings:</h4><ul class=\"petList\">";

  /// Append toppings to the list
  for (var i = 0; i < incomingJSON['toppings'].length; i++) {
    var toppingString = "<li>" + incomingJSON['toppings'][i] + "</li>";
    incompleteHTML += toppingString;
  }

  /// Complete our HTML chunk
  incompleteHTML += "</ul></div>";
  contentGridElement.innerHTML = incompleteHTML;
  console.log(incompleteHTML);
}

function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentFood');
  newContentHeading.innerText = incomingJSON['food'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Toppings:";
  newContentElement.appendChild(newContentSubhead);

  /// Create & add PET LIST to the item
  let newContentPetList = document.createElement("UL");
  newContentElement.appendChild(newContentPetList);

  /// Create & add all the pet LIST ITEMS to the PET LIST
  for (var i = 0; i < incomingJSON['toppings'].length; i++) {
    var currToppingString = incomingJSON['toppings'][i];
    var newPetItem = document.createElement("LI");
    newPetItem.innerText = currToppingString;
    newContentPetList.appendChild(newPetItem);
  }

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}