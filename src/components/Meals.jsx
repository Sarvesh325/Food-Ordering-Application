import React, { useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([
    {
      id: "m1",
      name: "Mac & Cheese",
      price: "8.99",
      description:
        "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
      // image: "./images/mac-and-cheese.jpg",
      image: "../../backend/public/images/mac-and-cheese.jpg",
    },
    {
      id: "m2",
      name: "Margherita Pizza",
      price: "12.99",
      description:
        "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
      image: "../../backend/public/images/margherita-pizza.jpg",
    },
    {
      id: "m3",
      name: "Caesar Salad",
      price: "7.99",
      description:
        "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",
      image: "../../backend/public/images/caesar-salad.jpg",
    },
    {
      id: "m4",
      name: "Spaghetti Carbonara",
      price: "10.99",
      description:
        "Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.",
      image: "../../backend/public/images/spaghetti-carbonara.jpg",
    },
    {
      id: "m5",
      name: "Veggie Burger",
      price: "9.99",
      description:
        "A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.",
      image: "../../backend/public/images/veggie-burger.jpg",
    },
    {
      id: "m6",
      name: "Grilled Chicken Sandwich",
      price: "10.99",
      description:
        "Tender grilled chicken breast with avocado, bacon, lettuce, and honey mustard on a toasted bun.",
      image: "../../backend/public/images/grilled-chicken-sandwich.jpg",
    },
    {
      id: "m7",
      name: "Steak Frites",
      price: "17.99",
      description:
        "Succulent steak cooked to your preference, served with crispy golden fries and herb butter.",
      image: "../../backend/public/images/steak-frites.jpg",
    },
    {
      id: "m8",
      name: "Sushi Roll Platter",
      price: "15.99",
      description:
        "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",
      image: "../../backend/public/images/sushi-roll-platter.jpg",
    },
    {
      id: "m9",
      name: "Chicken Curry",
      price: "13.99",
      description:
        "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with basmati rice.",
      image: "../../backend/public/images/chicken-curry.jpg",
    },
    {
      id: "m10",
      name: "Vegan Buddha Bowl",
      price: "11.99",
      description:
        "A hearty bowl filled with quinoa, roasted veggies, avocado, and a tahini dressing.",
      image: "../../backend/public/images/vegan-buddha-bowl.jpg",
    },
    {
      id: "m11",
      name: "Seafood Paella",
      price: "19.99",
      description:
        "A Spanish delicacy filled with saffron-infused rice, shrimp, mussels, and chorizo.",
      image: "../../backend/public/images/seafood-paella.jpg",
    },
    {
      id: "m12",
      name: "Pancake Stack",
      price: "8.99",
      description:
        "Fluffy pancakes stacked high, drizzled with maple syrup and topped with fresh berries.",
      image: "../../backend/public/images/pancake-stack.jpg",
    },
    {
      id: "m13",
      name: "Miso Ramen",
      price: "12.99",
      description:
        "A warming bowl of ramen with miso broth, tender pork, soft-boiled egg, and green onions.",
      image: "../../backend/public/images/miso-ramen.jpg",
    },
    {
      id: "m14",
      name: "Beef Tacos",
      price: "9.99",
      description:
        "Three soft tortillas filled with seasoned beef, fresh salsa, cheese, and sour cream.",
      image: "../../backend/public/images/beef-tacos.jpg",
    },
    {
      id: "m15",
      name: "Chocolate Brownie",
      price: "5.99",
      description:
        "A rich and fudgy brownie, topped with a scoop of vanilla ice cream and chocolate sauce.",
      image: "../../backend/public/images/chocolate-brownie.jpg",
    },
    {
      id: "m16",
      name: "Lobster Bisque",
      price: "14.99",
      description:
        "A creamy soup made from lobster stock, aromatic vegetables, and a touch of brandy.",
      image: "../../backend/public/images/lobster-bisque.jpg",
    },
    {
      id: "m17",
      name: "Mushroom Risotto",
      price: "13.99",
      description:
        "Creamy Arborio rice cooked with a medley of wild mushrooms and finished with parmesan.",
      image: "../../backend/public/images/mushroom-risotto.jpg",
    },
    {
      id: "m18",
      name: "Eggplant Parmesan",
      price: "11.99",
      description:
        "Layers of breaded eggplant, marinara sauce, and melted mozzarella and parmesan cheeses.",
      image: "../../backend/public/images/eggplant-parmesan.jpg",
    },
    {
      id: "m19",
      name: "Lemon Cheesecake",
      price: "6.99",
      description:
        "A creamy cheesecake with a tangy lemon flavor, served on a crumbly biscuit base.",
      image: "../../backend/public/images/lemon-cheesecake.jpg",
    },
    {
      id: "m20",
      name: "Falafel Wrap",
      price: "8.99",
      description:
        "Crispy falafels wrapped in a warm pita with lettuce, tomatoes, and a tahini sauce.",
      image: "../../backend/public/images/falafel-wrap.jpg",
    },
  ]);

  return (
    <>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
}
