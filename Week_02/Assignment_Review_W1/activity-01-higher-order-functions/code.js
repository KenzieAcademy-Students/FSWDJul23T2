const printKata = function (kataNumber, object) {
  // For the usage of the DETAILS and SUMMARY tags
  // in HTML, see: http://mdn.io/details-element
  const detailsElement = document.createElement("details");
  main.append(detailsElement);
  //
  const summaryElement = document.createElement("summary");
  summaryElement.append("KATA " + kataNumber);
  detailsElement.append(summaryElement);
  //
  // http://mdn.io/json.stringify
  const stringifiedObject = JSON.stringify(object);
  detailsElement.append(stringifiedObject);
};

// Append the katas to this element:
const main = document.querySelector("main");

// Kata 1
const activeUsers = users.filter((user) => user.isActive);
printKata(1, activeUsers);

// Kata 2
const userEmails = users.map((user) => user.email);
printKata(2, userEmails);

// Kata 3
const isSomeOvation = users.some((user) => user.company === "OVATION");
printKata(3, isSomeOvation);

// Kata 4
const userOver28 = users.find((user) => user.age >= 28);
printKata(4, userOver28);

// Kata 5
const activeUserOver28 = users
  .filter((user) => user.age >= 28)
  .find((user) => user.isActive);
printKata(5, activeUserOver28);

// Kata 6
const zencoBalances = users
  .filter((user) => user.company === "ZENCO")
  .map((user) => user.balance);
printKata(6, zencoBalances);

// Kata 7
const fugiatAges = users
  .filter((user) => user.tags.includes("fugiat"))
  .map((user) => user.age);
printKata(7, fugiatAges);

// Kata 8
const totalBalance = users.reduce(
  (total, user) => total + Number(user.balance.replace(/[$,]+/g, "")),
  0
);
printKata(8, totalBalance);

// Kata 9
const h2 = document.createElement("h2");
h2.innerText = "Users with Brown Eyes";
main.append(h2);

const ul = document.createElement("ul");

const usersWithBrownEyesElements = users
  .filter((user) => user.eyeColor === "brown")
  .map((user) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = user.name;
    const img = document.createElement("img");
    img.src = user.picture;
    img.alt = user.name;
    li.append(span, img);
    return li;
  });

ul.append(...usersWithBrownEyesElements);

main.append(ul);
