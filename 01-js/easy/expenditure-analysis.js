/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transactions) {

    let output = [];
    let map = new Map();

    transactions.forEach(transaction => {
        if (map.has(transaction.category)) {
            const count = map.get(transaction.category) + transaction.price;

            map.set(transaction.category, count);
        } else {

            map.set(transaction.category, transaction.price)

        }
    });


    map.forEach((value, key) => {

            output.push({"category": key, "totalSpent": map.get(key)});

        }
    )

    return output;
}

module.exports = calculateTotalSpentByCategory;
