export const useStores = () => {
  const stores = [
    {
      id: 1,
      name: "Pizza Planet",
      evaluation: 4.9,
      category: "Pizza & Fastfood Restaurant",
      coockingTime: "30 min",
      discount: "15% off",
      products: [
        {
          id: 101,
          filter: "Most Selling",
          checked: true,
          foods: [
            {
              id: 10001,
              favorite: true,
              category: "Pizza",
              name: "Greek Pizza",
              cookingTime: "25 min",
              kcal: "150 kcal",
              evaluation: 4.8,
              description: "Tasty and hot",
              ingredients: ["Tomatoes", "Sausage", "Garlic", "Cheese"],
              price: "14.90",
            },
            {
              id: 10002,
              favorite: false,
              category: "Pizza",
              name: "Bacon Pizza",
              cookingTime: "40 min",
              kcal: "172 kcal",
              evaluation: 5.0,
              description: "Hot and tasty",
              ingredients: ["Bacon", "Cheddar", "Onion", "Tomatoes"],
              price: "21.99",
            },
          ],
        },
        {
          id: 102,
          filter: "New Items",
          checked: false,
          foods: [],
        },
        {
          id: 103,
          filter: "Valuable Promotions",
          checked: false,
          foods: [
            {
              id: 10004,
              category: "Pizza",
              favorite: false,
              name: "Mediterranean Pizza",
              cookingTime: "30 min",
              kcal: "135 kcal",
              evaluation: 4.9,
              description: "Tasty",
              ingredients: ["Mushroom", "Sausage", "Cheese", "Onion"],
              price: "24.50",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Dough Master's Pizza",
      evaluation: 4.7,
      category: "Pizza & Fastfood Restaurant",
      coockingTime: "45 min",
      discount: "10% off",
      products: [
        {
          id: 104,
          filter: "Most Selling",
          checked: true,
          foods: [
            {
              id: 10005,
              favorite: true,
              category: "Pizza",
              name: "Margherita pizza",
              cookingTime: "40 min",
              kcal: "119 kcal",
              evaluation: 4.9,
              description: "Tasty and hot",
              ingredients: ["Mozzarella", "Basil", "Olive Oil", "Tomato Sauce"],
              price: "23.49",
            },
            {
              id: 10006,
              favorite: true,
              category: "Pizza",
              name: "Portuguese Pizza",
              cookingTime: "60 min",
              kcal: "276 kcal",
              evaluation: 4.6,
              description: "Hot and tasty",
              ingredients: [
                "Tomatoes",
                "Ham",
                "Olive Oil",
                "Onion",
                "Garlic",
                "Oregano",
                "Peas",
                "Mozzarella",
                "Boiled Eggs",
                "Olives",
              ],
              price: "36.00",
            },
          ],
        },
        {
          id: 105,
          filter: "New Items",
          checked: false,
          foods: [
            {
              id: 10006,
              favorite: true,
              category: "Pizza",
              name: "Mozzarella Pizza",
              cookingTime: "20 min",
              kcal: "162 kcal",
              evaluation: 4.6,
              description: "Hot and tasty",
              ingredients: ["Ham", "Mozzarella", "Olive Oil", "Onion", "Olive"],
              price: "23.00",
            },
          ],
        },
        {
          id: 106,
          filter: "Valuable Promotions",
          checked: false,
          foods: [
            {
              id: 10008,
              favorite: false,
              category: "Pizza",
              name: "Mediterranean Pizza",
              cookingTime: "30 min",
              kcal: "135 kcal",
              evaluation: 4.9,
              description: "Tasty",
              ingredients: ["Mushroom", "Sausage", "Cheese", "Onion"],
              price: "24.50",
            },
          ],
        },
      ],
    },
  ];

  function getOne(id) {
    return stores.filter((store) => store.id == id);
  }

  return { stores, getOne };
};
