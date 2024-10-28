document.addEventListener("DOMContentLoaded", function() {
    // Ensure the buttons are available in the DOM
    const exploreRecipesBtn = document.getElementById("explore-recipes");
    const joinNewsBtn = document.getElementById("join-news");
    const chocoRecipeBtn = document.getElementById("chocoRecipe");
    const jollofRecipeBtn = document.getElementById("jollofRecipe");
    const chickenRecipeBtn = document.getElementById("chickenRecipe");
    const lasagnaRecipeBtn = document.getElementById("lasagnaRecipe");
    const egusiRecipeBtn = document.getElementById("egusiRecipe");
    const burgerRecipeBtn = document.getElementById("burgerRecipe");
    const backHomeBtn = document.getElementById("backHomeBtn");
    const exploreDishesBtn = document.getElementById("exploreDishesBtn");

    if (exploreRecipesBtn) {
        exploreRecipesBtn.addEventListener("click", function() {
            window.location.href = "/landingpage/hamburger.html"; 
        });
    }

    if (joinNewsBtn) {
        joinNewsBtn.addEventListener("click", function() {
            window.location.href = "/landingpage/404.html"; 
        });
    }

    if (chocoRecipeBtn) {
        chocoRecipeBtn.addEventListener("click", function() {
            window.location.href = "/landingpage/recipe-choco.html";
        });
    }

    if (jollofRecipeBtn) {
        jollofRecipeBtn.addEventListener("click", function() {
            window.location.href = "/landingpage/recipe-jollof.html"; 
        });
    }

    if (chickenRecipeBtn) {
        chickenRecipeBtn.addEventListener("click", function() {
            window.location.href = "/landingpage/recipe-chicken.html"; 
        });
    }

    if (lasagnaRecipeBtn) {
        lasagnaRecipeBtn.addEventListener("click", function() {
            window.location.href = "/landingpage/recipe-lasagna.html"; 
        });
    }

    if (egusiRecipeBtn) {
        egusiRecipeBtn.addEventListener("click", function() {
            window.location.href = "/landingpage/recipe-egusi.html"; 
        });
    }

    if (burgerRecipeBtn) {
       burgerRecipeBtn.addEventListener("click", function() {
            window.location.href = "/landingpage/recipe-burger.html"; 
        });
    }

    if (backHomeBtn) {
      backHomeBtn.addEventListener("click", function() {
           window.location.href = "/landingpage/index.html"; 
       });
   }

   if (exploreDishesBtn) {
    exploreDishesBtn.addEventListener("click", function() {
         window.location.href = "/landingpage/lasagna.html"; 
     });
 }
    
});

  









let pages = [
  {
    url: "/landingpage/index.html#popular-sec",
    title: "Home",
    content: "Welcome to our website. Learn about our recipes",
  },

  {
    url: "/landingpage/index.html#hero",
    title: "Home",
    content: "Cook Like a Pro With Our Easy And Tasty Recipes",
  },

  {
    url: "/landingpage/index.html#hero",
    title: "Home",
    content:
      "From quick and easy meals to gourment delights, we have something for every taste and occasions.",
  },

  {
    url: "/landingpage/index.html#popular-sec",
    title: "Home",
    content: `"Popular Recipes You Can't Miss. From comfort food classics to exoctic flavors, our featured recipes are sure to impress. 
        Egusi Soup
Made with ground melon seeds that add a unique nutty flavor, this traditional West African delicacy is not only delicious but also packed with nutrients, including protein, fiber, and vitamins.

Hamburger
HamBurger
Featuring rich, dry-aged beef, caramelized mushrooms, and a tangy slice of cheddar, this gourmet burger is a culinary masterpiece, blending rich flavors with a boost of antioxidants.

lasagna
Lasgana
Layered with tender pasta, rich meat sauce, and a blend of creamy ricotta and melted mozzarella cheese, this classic Italian dish is packed with nutrients, a nourishing treat for any occasion.

chocolate cake
Chocolate cake
Indulge in the rich, velvety goodness of our decadent chocolate cake, crafted with high-quality dark cocoa that adds profound depth, antioxidant benefits, and leaves you craving for more!
        "`,
  },

  {
    url: "/landingpage/index.html#cuisine-type",
    title: "Home",
    content: `
Explore by Cuisine Type. From comfort food classics to exoctic flavors, our featured recipes are sure to impress. Chips Salad Learn how to make this type of cold salad that belongs to American cuisine. It's a savory and crunchy dish typically made with potato chips, mayonnaise...

Ewa riro
Ewa riro
Get ready to put a twist on the classic Nigerian dish, Ewa Riro! Learn how to transform this beloved combo, beans and plantain...

picture of a dish
Masrowi Spaghetti
Quick and easy Speedy Spaghetti recipe featuring pan-fried anchovies, garlic, and sliced chili, tossed with pasta and finished with parsley...

picture of a dish
Diced Beef
Slice beef like a pro! Master the art of precision cutting, just like world record holders. Impress family and friends with your newfound skill and elevate your culinary game.`,
  },

  {
    url: "/landingpage/index.html#news",
    title: "Home",
    content: `Join Our Newsletter. Discover new flavors and cooking techniques when you subscribe to our weekly newsletter.`,
  },

  //  ABOUT US
  {
    url: "/landingpage/about-us.html#specialty-txt",
    title: "About Us",
    content: `We are specialized in Spicy Modern Fusion Food
Welcome to Your Virtual Kitchen
Indulge in the bold flavors of our innovative dishes, where East meets West and spices ignite. Our chefs craft unique fusion cuisine that will take your taste buds on a thrilling adventure. From savory local Nigerian dishes to Korean BBQ tacos to spicy Indian-Italian curries, every bite is a harmonious blend of global flavors.

Step into Your Virtual Kitchen, explore our menu, featuring mouth-watering signatures and discover the art of Spicy Modern Fusion Food. Let's spice up your mealtime!

- Team 5 Master Chef`,
  },
  {
    url: "/landingpage/about-us.html#choose-us",
    title: "Why Choose Us",
    content: `FREE COOKING GUIDE
Whether you're a beginner or an experienced chef, this guide will help you master the art of cooking and impress your family and friends.

expert chef
EXPERT CHEFS
With years of rigorous training and dedication, these skilled professionals possess an unwavering passion for crafting exquisite dishes that delight the senses.

awesome recipe
AWESOME RECIPES
Each dish is carefully crafted with love and packed with flavor. From classic comfort foods to innovative twists, our recipes are sure to delight your taste buds.`,
  },
  {
    url: "/landingpage/about-us.html#gallery",
    title: "Our Expert Chefs",
    content: `Our Expert Chefs blending traditional flavors and ingredients in awesome cuisines`,
  },
  
  {
    url: "/landingpage/hamburger.html",
    title: "Hamburger info",
    content: `Tasty Hamburger
A staple of American cuisine
Hamburg Germany | 19th Century
Preparation time: 30 - 37 minutes

Origin: The hamburger, a staple of American cuisine, has its roots in Hamburg, Germany, where a similar dish called "Hamburg steak" was served in the 18th and 19th centuries. German immigrants brought this concept to the United States, where it evolved into the modern hamburger.

Nutritional Value: Calories: 350 Protein: 30g | Fat: 20g | Saturated Fat: 8g | Cholesterol: 60mg | Sodium: 400mg | Carbohydrates: 25g | Fiber: 2g | Sugar: 5g`,
  },

  {
    url: "/landingpage/crispy-chicken.html",
    title: "crispy chicken info",
    content: `Crispy Chicken
Chicken Palooza
Southern | American
Preparation time: 45 - 50 minutes

Origin: Crispy chicken, a popular variation of fried chicken, has its roots in Southern American cuisine. The dish gained widespread popularity in the 1950s and 60s with the rise of fast food chains.

Nutritional Value: Calories: 320 | Protein: 25g | Fat: 18g | Saturated Fat: 4g | Cholesterol: 60mg | Sodium: 400mg | Carbohydrates: 15g | Fiber: 1g | Sugar: 0g`,
  },

  {
    url: "/landingpage/choco.html",
    title: "Chocolate cake info",
    content: `Chocolate
Choco Choco
Ancient Mesoamerican | 2500BC
Preparation time: 1 hour

Origin: Chocolate originates from the ancient Mesoamerican civilizations of the Olmec, Maya, and Aztecs, dating back to 2500 BCE. Cacao beans, the main ingredient in chocolate, were considered sacred and used as currency.

Nutritional Value: Calories: 120 | Fat: 9g | Saturated Fat: 5g | Cholesterol: 10mg | Sodium: 5mg | Carbohydrates: 12g | Fiber: 2g | Sugar: 8g | Protein: 2g`,
  },

  {
    url: "/landingpage/egusi.html",
    title: "Egusi soup info",
    content: `Egusi Soup
Mama's Soup - traditional Nigerian cuisine
West Africa, Nigeria | 14th Century
Preparation time: 50 minutes

Origin: - Egusi seeds (Colocynthis citrullus) are native to West Africa, specifically the Sahel region. Archaeological evidence suggests that egusi seeds were cultivated and consumed in West Africa over 5,000 years ago.

Nutritional Value: Calories: 450 | Protein: 35g | Fat: 25g | Carbohydrates: 20g | Fiber: 5g`,
  },

  {
    url: "/landingpage/lasagna.html",
    title: "Lasagna info",
    content: `Lasagna
The Italian Layered Love
Naples, Italy | 14th Century
Preparation time: 1 hour

Origin: - Lasagna-like dishes emerged in medieval Italy, particularly in Naples and Sicily. The first written recipe for a lasagna-like dish, "Lasanum," was found in a 14th-century Italian cookbook, "Liber de Coquina" (The Book of Cooking).

Nutritional Value: Calories: 350 | Protein: 25g | Fat: 15g | Carbohydrates: 25g | Fiber: 2g`,
  },

  {
    url: "/landingpage/lasagna.html",
    title: "Lasagna info",
    content: `Lasagna
The Italian Layered Love
Naples, Italy | 14th Century
Preparation time: 1 hour

Origin: - Lasagna-like dishes emerged in medieval Italy, particularly in Naples and Sicily. The first written recipe for a lasagna-like dish, "Lasanum," was found in a 14th-century Italian cookbook, "Liber de Coquina" (The Book of Cooking).

Nutritional Value: Calories: 350 | Protein: 25g | Fat: 15g | Carbohydrates: 25g | Fiber: 2g`,
  },

  {
    url: "/landingpage/jollof.html",
    title: "Jollof Rice info",
    content: `Party Jollof Rice + Chicken
For Healthy Life
Native West Africa | 14th Century
Preparation time: 1 hour 30 minutes

Origin: Jollof Rice originated from West Africa, specifically from the Wolof Empire (present-day Senegal and Gambia) in the 14th century.

Nutritional Value: Calories | Carbs |Protein`,
  },

  {
    url: "/landingpage/recipe-burger.html",
    title: "Hamburger reciper",
    content: `INGREDIENTS
1 pound ground beef 80/20 or 70/30 lean to fat ratio, 1 medium onion, finely chopped.
2 cloves garlic minced
1 tbspoon Worcestershire sauce
1/4 paprika
1 tspoon salt
1/2 tspoon black pepper
4 hamburger buns, lettuce, Tomatoes,
Cheese (American, Cheddar, or Mozarella)
Onions (raw or caramelized)
pickles, ketchup, mayonnaise, Mustard
Fresh pepper`,
  },

  {
    url: "/landingpage/recipe-chicken.html",
    title: "Crispy chicken recipe",
    content: `INGREDIENTS
2 cups uncooked long-grain rice
2 cups tomato puree or crushed tomatoes
1 large onion, chopped
2-3 Scotch bonnet peppers or habanero peppers, chopped (optional)
2 cloves garlic, minced
1 teaspoon grated ginger
1 teaspoon ground cumin
1 teaspoon ground coriander
11/2 teaspoon salt
1/4 teaspoon black pepper
2 tablespoons vegetable oil
2 cups beef or chicken broth
2 bay leaves (optional)
2 sprigs fresh thyme (optional)`,
  },

  {
    url: "/landingpage/recipe-choco.html",
    title: "Chocolate cake recipe",
    content: `INGREDIENTS
2 1/ 4 cups all purpose flour
1 1/ 2 cups granulated sugar
2 tbspoons baking powder, 1 tspoon salt
1/ 2 cup unsweetened cocoa powder
1 cup whole milk, at room temperature
2 large eggs, at room temperature
1 tspoon vanilla extract
1 cup unsalted butter, softened
2 cups confectioners' sugar
1/ 2 cup unsweetened cocoa powder
2 tbspoon milk or heavy cream`,
  },

  {
    url: "/landingpage/recipe-egusi.html",
    title: "Egusi soup recipe",
    content: `INGREDIENTS
1 cup ground melon seed
2 tbspoons vegetable oil
1 diced onion
2 cloves garlic minced
1 tspoon ginger
1 tbspoon salt
1 pound beef or fish
2 cups water
1/2 teaspoon black pepper
2 tbspoons parsley
Fresh pepper`,
  },

  {
    url: "/landingpage/recipe-jollof.html",
    title: "Jollof rice recipe",
    content: `INGREDIENTS
2 cups uncooked long-grain rice
2 cups tomato puree or crushed tomatoes
1 large onion, chopped
2 - 3 Scotch bonnet peppers or habanero peppers, chopped (optional)
2 cloves garlic, minced
1 teaspoon grated ginger
1 teaspoon ground cumin
1 teaspoon ground coriander
1/2 teaspoon salt
1/4 teaspoon black pepper
2 tablespoons vegetable oil
2 cups beef or chicken broth
2 bay leaves (optional)
2 sprigs fresh thyme (optional)`,
  },


  {
    url: "/landingpage/recipe-lasagna.html",
    title: "Lasagna recipe",
    content: `INGREDIENTS
1 pound ground beef
1 onion, chopped
2 cloves garlic, minced
2 cups marinara sauce
1 cup beef broth, 1 tbspoon tomato paste
1 tspoon dried basil and oregano
Salt and pepper to taste
16 ounces ricotta cheese, 1 egg beaten
4 cups shredded Mozarella and 1 1/2 cup grated Parmesan Cheese
1/2 tspoon salt, 1/4 tspoon black pepper
8 - 10 lasagna noddles
Spinach, Mushrooms, Bell pepper, sausage, Bacon (optional)`,
  },

];


// BUTTON FUNCTION
function search() {
  let searchTerm = document
    .getElementById("search-box")
    .value.trim()
    .toLowerCase();
  let searchResults = document.getElementById("search-results");

   searchResults.innerHTML = "";

  
  if (searchTerm === "") {
    searchResults.innerHTML = "";
    return;
  }

  
  let matchingPages = pages.filter((page) =>
    page.content.toLowerCase().includes(searchTerm)
  );

  if (matchingPages.length > 0) {
    matchingPages.forEach((page) => {
      let resultHtml = `
          <div class="search-result">
            
            <p>${page.content.substring(0, 50)}... <a href="${
        page.url
      }">Read more</a></p>
          </div>
        `;
      searchResults.innerHTML += resultHtml;
    });
  } else {
    searchResults.innerHTML = `
      <div class="search-result">
      <p>No results found for "${searchTerm}".</p>
      </div>
      `;
  }
}
document.getElementById("search-box").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    search();
  }
});