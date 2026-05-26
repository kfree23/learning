const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n");
console.log(evenDivs);

for(let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>
`;
navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);

// const playerCard = document.querySelector('.player-card');
// playerCard.classList.add('active');

// const addPlayerBtn = document.querySelector('.add-player');
// addPlayerBtn.addEventListener('click', (e) => {
//     console.log("Player added.")
// })

// const div = document.createElement('div');
// div.classList.add('player-card');
// div.textContent = "Curry - 32pts";

// document.querySelector('.player-list').appendChild(div);