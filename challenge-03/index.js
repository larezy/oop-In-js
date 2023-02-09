'use strict';
const dishes=[{name:'EggPlant Parmason',
vegetarian: true},{name:'Sphagatti & Meat ball',
vegetarian: false}
];

const filteredItems =dishes.filter(item => item.vegetarian=false)
console.log(dishes)