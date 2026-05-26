// const companies = [
//     {
//         name: "TechNova",
//         category: "Technology",
//         startYear: 2001,
//         endYear: 2018,
//     },
//     {
//         name: "GreenLeaf Foods",
//         category: "Food & Beverage",
//         startYear: 1995,
//         endYear: 2020,
//     },
//     {
//         name: "Skyline Fitness",
//         category: "Health & Fitness",
//         startYear: 2010,
//         endYear: 2024,
//     },
//     {
//         name: "BrightPath Education",
//         category: "Education",
//         startYear: 1998,
//         endYear: 2016,
//     },
//     {
//         name: "UrbanStyle",
//         category: "Fashion",
//         startYear: 2005,
//         endYear: 2021,
//     },
//     {
//         name: "NextWave Media",
//         category: "Entertainment",
//         startYear: 2012,
//         endYear: 2025,
//     },
//     {
//         name: "BlueOcean Logistics",
//         category: "Transportation",
//         startYear: 1990,
//         endYear: 2014,
//     },
//     {
//         name: "SecureNet",
//         category: "Cybersecurity",
//         startYear: 2008,
//         endYear: 2023,
//     },
//     {
//         name: "EcoBuild",
//         category: "Construction",
//         startYear: 1999,
//         endYear: 2019,
//     },
// ];

// const ages = [33, 12, 20, 15, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }


// // forEach
// companies.forEach(function(company) {
//     console.log(company.name)
// });

// // filter
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// const canDrinkTwo = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// const canDrinkThree = ages.filter(age => age >= 21);

// console.log(canDrinkThree);

// //filter retail company
// const cyberCompanies = companies.filter(function(company) {
//     if(company.category === "Cybersecurity") {
//         return true;
//     }
// });

// console.log(cyberCompanies);

// const constructionCompanies = companies.filter(company => company.category === "Construction");
// console.log(constructionCompanies);

// // Get 1900s companies
// const ninteysCompanies = companies.filter(company => company.startYear < 2000);
// console.log(ninteysCompanies);

// // companies that lasted 10 years or more
// const lastedTenYears = companies.filter(company => (company.endYear - company.startYear >= 10));
// console.log(lastedTenYears)

// // map
// // Create array of company names
// const companyNames = companies.map(company => `${company.name} [${company.startYear} - ${company.endYear}]`);
// console.log(companyNames);

// // const testMap = companies.map(function(company) {
// //     return `${company.name} [${company.startYear} - ${company.endYear}]`;
// // });

// // console.log(testMap)

// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// // sort
// // const sortedCompanies = companies.sort(function(c1, c2) {
// //     if (c1.startYear > c2.startYear) {
// //         return 1;
// //     } else {
// //         return -1;
// //     }
// // });



// const sortedCompanies = companies.sort((a, b) => (a.startYear > b.startYear ? 1 : -1));
// console.log(sortedCompanies);

// //sorting ages
// const sortAges = ages.sort((a, b) => a - b);

// //reduce
// // let ageSum = 0;

// // for(let i = 0; i < ages.length; i++) {
// //     ageSum += ages[i];
// // }

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);


// // get total years for all companies
// const totalYears = companies.reduce((total, company) => total + (company.endYear - company.startYear), 0);

// console.log(totalYears)

// //combine methods
// const combined = ages
// .map(age => age * 2)
// .filter(age => age >= 40)
// .sort((a, b) => a - b)
// .reduce((a, b) => a + b, 0);

// console.log(combined)

// const players = [
//     { name: 'LeBron', points: 28 },
//     { name: 'Austin', points: 12 },
//     { name: 'AD', points: 25 },
//     { name: 'Rui', points: 18 }
// ];

// const goodPlayers = players.filter(player => player.points >= 20);

// const numArr = [3, 1, 4, 1, 5, 9];
// const sortNumArr = numArr.sort((a, b) => b - a);

// const player = { name: 'AD', points: 22, team: 'Lakers', rebounds: 12 };
// const { name, points, team, rebounds } = destructurePlayer;

// const topScorers = ['LeBron', 'Curry', 'Durant'];
// const [ firstPosition, secondPosition ] = topScorers;


// JavaScript Classes
class Pizza {
    constructor() {
        this.size = "medium";
        this.crust = "original";
    }

    bake() {
        console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza();
myPizza.bake();