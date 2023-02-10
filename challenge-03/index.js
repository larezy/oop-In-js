'use strict';
const dishes=[   
    {
        name:'EggPlant Parmason',
        vegetarian: true},
    {   
        name:'Sphagatti & Meat balls',
        vegetarian: false
    }
    
];

const isVegetarian = dishes.filter(item => item.vegetarian !== false)


console.log(dishes);
console.log(isVegetarian);
console.log(dishes);