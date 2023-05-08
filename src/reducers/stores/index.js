export const useStores = () => {
  const stores = [
    {
      id: 1,
      name: "Pizza Planet",
      evaluation: 4.9,
      category: "Pizza & Fastfood Restaurant",
      coockingTime: "30 min",
      discount: "15% off",
    },
    {
      id: 2,
      name: "Dough Master's Pizza",
      evaluation: 4.9,
      category: "Pizza & Fastfood Restaurant",
      coockingTime: "45 min",
      discount: "10% off",
    },
  ];

  function getOne(id) {
    return stores.filter((store) => store.id == id);
  }

  return { stores, getOne };
};
