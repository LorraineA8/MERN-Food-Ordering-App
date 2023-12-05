import chickenMeal from '../assets/chickenMeal3.jpeg'
import chickenMeal1 from '../assets/chickenMeal4.jpeg'
import chickenMeal2 from '../assets/chickenMeal5.jpeg'
import chickenMeal3 from '../assets/chickenMeal6.jpeg'
import chickenMeal4 from '../assets/chickenMeal7.jpeg'
import chickenMeal5 from '../assets/chickenMeal8.jpeg'


import BurgerMeal1 from '../assets/BurgerMeal1.jpeg'
import BurgerMeal2 from '../assets/BurgerMeal2.jpeg'
import BurgerMeal3 from '../assets/BurgerMeal3.jpeg'
import BurgerMeal4 from '../assets/BurgerMeal4.jpeg'
import BurgerMeal5 from '../assets/BurgerMeal5.jpeg'

import dessert1 from '../assets/dessert0.jpeg'
import dessert2 from '../assets/dessert1.jpeg'
import dessert3 from '../assets/dessert3.jpeg'
import dessert4 from '../assets/dessert4.jpeg'
import dessert5 from '../assets/dessert5.jpeg'

import drink1 from '../assets/drink1.jpeg'
import drink2 from '../assets/drink2.jpeg'
import drink3 from '../assets/drink3.jpeg'
import drink4 from '../assets/drink4.jpeg'


export const foodTypes = [
    {
        name: 'Chicken',
        img: chickenMeal,
        id: crypto.randomUUID()
    },
    {
        name: 'Burgers',
        img: BurgerMeal1,
        id: crypto.randomUUID()
    },
    {
        name: 'Dessert',
        img: dessert1,
        id: crypto.randomUUID()
    },
    {
        name: 'Refreshments',
        img: drink1,
        id: crypto.randomUUID()
    },
]


// 24 foods (6 burger, 6 gyros, 6 pizza, 6 pasta)
export const foods = [
    {
        name: 'Chicken 1',
        category: 'Chicken',
        img: chickenMeal1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chicken 2',
        category: 'Chicken',
        img: chickenMeal2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chicken 3',
        category: 'Chicken',
        img: chickenMeal3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chicken 4',
        category: 'Chicken',
        img: chickenMeal5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chicken 5',
        category: 'Chicken',
        img: chickenMeal4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 1',
        category: 'Burgers',
        img: BurgerMeal1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 2',
        category: 'Burgers',
        img: BurgerMeal3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 3',
        category: 'Burgers',
        img: BurgerMeal4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 4',
        category: 'Burgers',
        img: BurgerMeal2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 5',
        category: 'Burgers',
        img: BurgerMeal5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Dessert 1',
        category: 'Dessert',
        img: dessert1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Dessert 2',
        category: 'Dessert',
        img: dessert2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Dessert 3',
        category: 'Dessert',
        img: dessert3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Dessert 4',
        category: 'Dessert',
        img: dessert4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Dessert 5',
        category: 'Dessert',
        img: dessert5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Drink 1',
        category: 'Refreshments',
        img: drink1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Drink 2',
        category: 'Refreshments',
        img: drink2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Drink 3',
        category: 'Refreshments',
        img: drink3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Drink 4',
        category: 'Refreshments',
        img: drink4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
]