// Write your code here!
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Cynthia Mugo is the champion";