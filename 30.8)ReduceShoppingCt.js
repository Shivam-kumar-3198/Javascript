const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999

    },

    {
        itemName: "Mobile Dev Course",
        price: 999
    },

    {
        itemName: "Web Dev",
        price: 499
    }

]

const priceToPay = shoppingCart.reduce((jodo, item) => (jodo + item.price), 0)
console.log(priceToPay);