let products = [
  {
    id: "15215",
    name: "25' Garden Hose",
    price: 9.5,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15123",
    name: "Bag of Garden Soil",
    price: 5.0,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15312",
    name: "Shovel",
    price: 12.0,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15215",
    name: "Screwdriver",
    price: 4.5,
    quantity: 0,
    department: "tool",
  },
  {
    id: "15215",
    name: "Corded Drill",
    price: 124.5,
    quantity: 1,
    department: "tool",
  },
  {
    id: "15215",
    name: "Pack of 50 Screws",
    price: 8.5,
    quantity: 2,
    department: "hardware",
  },
  {
    id: "15215",
    name: '1/8" washers',
    price: 4.5,
    quantity: 1,
    department: "hardware",
  },
];

let chosenDepartment = "";

// For use with the more optimized solution
function filterAndRender(htmlSoFar, item) {
  if (item.quantity === 0 || !item.department.includes(chosenDepartment))
    return htmlSoFar;

  // If JS interpreter is here, we want to render the product in question
  return (
    htmlSoFar +
    `<li>
        <h4>${item.name}</h4>
        <p>Price: $${item.price.toFixed(2)}</p>
    </li>`
  );
}

function renderProducts() {
  let html = ""; // Your code here!

  // const renderedProducts = products
  //   .filter((item) => item.quantity > 0)
  //   .filter((item) => item.department.includes(chosenDepartment))
  //   .map(
  //     (item) => `<li>
  //       <h4>${item.name}</h4>
  //       <p>Price: $${item.price.toFixed(2)}</p>
  //     </li>`
  //   )
  //   .reduce((htmlSoFar, li) => htmlSoFar + li);

  // A more optimized solution:
  const renderedProducts = products.reduce(filterAndRender, "");

  html = renderedProducts;

  let elem = document.getElementById("productList");
  elem.innerHTML = html;
}

window.onload = () => {
  renderProducts(products);
  document.getElementById("showAll").onclick = function () {
    chosenDepartment = "";
    renderProducts();
  };
  document.getElementById("showHardware").onclick = function () {
    chosenDepartment = "hardware";
    renderProducts();
  };
  document.getElementById("showGarden").onclick = function () {
    chosenDepartment = "garden";
    renderProducts();
  };
  document.getElementById("showTools").onclick = function () {
    chosenDepartment = "tool";
    renderProducts();
  };
};
