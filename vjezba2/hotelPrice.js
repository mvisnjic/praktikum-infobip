const priceList = [
  { from: "2020-01-01", to: "2020-02-01", price: 34.5 },
  { from: "2020-02-02", to: "2020-03-01", price: 37.0 },
  { from: "2020-03-02", to: "2020-05-15", price: 39.0 },
  { from: "2020-05-16", to: "2020-06-15", price: 37.0 },
];

get_date_string = (items) => {
  return items.from + " do " + items.to;
};

get_all_dates = (items) => {
  return items.map((el) => get_date_string(el)).join(", ");
};

let result = priceList.reduce((prev, curr) => {
  prev[curr.price] = prev[curr.price] || [];
  prev[curr.price].push(curr);
  return prev;
}, {});

for (const [key, value] of Object.entries(result)) {
  console.log(`${key}: ${get_all_dates(value)}`);
}
