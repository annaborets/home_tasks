//Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
const shoppingList = [
    {
        itemName: 'bananas',
        itemAmount: 5,
        isBought: true,
        pricePerUnit: 10,
        get total() {
            return this.itemAmount * this.pricePerUnit;
        }
    },
    {
        itemName: 'apples',
        itemAmount: 10,
        isBought: false,
        pricePerUnit: 5,
        get total() {
            return this.itemAmount * this.pricePerUnit;
        }
    },
    {
        itemName: 'oranges',
        itemAmount: 2,
        isBought: true,
        pricePerUnit: 12,
        get total() {
            return this.itemAmount * this.pricePerUnit;
        }
    },
]

const ShoppingListManager = {
    //Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
    sortByIsBought() {
        shoppingList.sort((a, b) => {
            return a.isBought - b.isBought;
        });
    },
    //Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
    purchase(shoppingList, itemNameToBuy) {
        const existingProduct = this.findProductByName(shoppingList, itemNameToBuy);

        if (!existingProduct) {
            console.log('Item not found');
            return;
        }

        existingProduct.isBought = true;
    },
    //Створення списку (не) придбаних продуктів.
    filterListByIsBought(array, isBought = true) {
        return array.filter((item) => item.isBought === isBought);
    },
    //Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
    deleteProduct(shoppingList, name) {
        const filterFunction = (item) => item.itemName !== name;

        const newShoppingList = shoppingList.filter(filterFunction);

        return newShoppingList;
    },
    /*Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, 
    а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/
    addNewProduct(
        array,
        itemToAdd,
        itemAmountToAdd,
        isBoughtToAdd = true,
        pricePerUnitToAdd = 2
    ) {
        const existingProduct = this.findProductByName(array, itemToAdd);

        if (existingProduct) {
            existingProduct.itemAmount += itemAmountToAdd;
        } else {
            array.push({
                itemName: itemToAdd,
                itemAmount: itemAmountToAdd,
                isBought: isBoughtToAdd,
                pricePerUnit: pricePerUnitToAdd,
                get total() {
                    return this.itemAmount * this.pricePerUnit;
                }
            });
        }
    },
    //Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
    calculateTotal(array) {
        let total = 0;

        for (let i = 0; i < shoppingList.length; i++) {
            total += array[i].total
        }
        return total
    },
    //Підрахунок суми всіх (не) придбаних продуктів.
    calculateByIsBought(array, isBought = true) {
        let result = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i].isBought === isBought) {
                result += array[i].itemAmount * array[i].pricePerUnit;
            }
        }

        return result;
    },
    //Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
    sortByPrice(shoppingList, order = 'asc') {
        if (order === 'asc') {
            shoppingList.sort((a, b) => a.total - b.total)
        } else {
            shoppingList.sort((a, b) => b.total - a.total)
        }
    },
    findProductByName(shoppingList, name) {
        return shoppingList.find((product) => product.itemName === name);
    },
}

console.log('Initial list:')
console.log(shoppingList);
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
ShoppingListManager.sortByIsBought(shoppingList);
console.log('Sorted by is bought list:')
console.log(shoppingList);
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
ShoppingListManager.purchase(shoppingList, 'apples');
console.log('List with purchased apples:')
console.log(shoppingList);
// Створення списку (не) придбаних продуктів.
const boughtProducts = ShoppingListManager.filterListByIsBought(shoppingList, true);
const unboughtProducts = ShoppingListManager.filterListByIsBought(shoppingList, false);
console.log('List of bought products:')
console.log(boughtProducts);
console.log('List of unbought products:')
console.log(unboughtProducts);
// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
const updatedShoppingList = ShoppingListManager.deleteProduct(shoppingList, 'oranges');
console.log('New list after oranges deletion:')
console.log(updatedShoppingList);
// Додавання покупки в список. 
// Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
ShoppingListManager.addNewProduct(shoppingList, 'oranges', 10);
ShoppingListManager.addNewProduct(shoppingList, 'kiwi', 5);
console.log('List after adding new kiwi and exisitng oranges:')
console.log(shoppingList);
// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
console.log('Total price of all products:')
console.log(ShoppingListManager.calculateTotal(shoppingList));
// Підрахунок суми всіх (не) придбаних продуктів.
console.log('Total price of bought products:')
console.log(ShoppingListManager.calculateByIsBought(shoppingList, true));
console.log('Total price of unbought products:')
console.log(ShoppingListManager.calculateByIsBought(shoppingList, false));
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
ShoppingListManager.sortByPrice(shoppingList, 'asc');
console.log('Sorted by price in ascending order:')
console.log(shoppingList)
ShoppingListManager.sortByPrice(shoppingList, 'desc');
console.log('Sorted by price in descending order:')
console.log(shoppingList);
