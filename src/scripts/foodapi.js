console.log("hello");

// fetch("http://localhost:8088/food")
//   .then(foods => foods.json())
//   .then(parsedFoods => {
//     console.table(parsedFoods);
//   });

  fetch("http://localhost:8088/food/1")
  .then(function(foods) {
    return foods.json()
  })
  .then(function(foodsFromTheApi) {
    console.log(foodsFromTheApi);
  });

console.log("goodbye");
