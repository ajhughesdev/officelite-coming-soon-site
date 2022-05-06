const url = "./../../public/data/tierData.json";
const itemsContainer = document.querySelector("#items-container");

function useState() {
  let _state = null;

  function getState() {
    return _state;
  }

  function setState(data) {
    _state = [...data];
  }

  return [getState, setState];
}

const [getState, setState] = useState();

function cardTemplate(data) {
  const { name, price, terms, details } = data;

  return `
  <article>
    <h2>${name}</h2>
    <ul>
      <li>${price}</li>
      <li>${terms}</li>
      <li>${details.blurb1}</li>
      <li>${details.storage}</li>
      <li>${details.blurb2}</li>
    </ul>
    <button data-type="try-for-free">Try for Free</button>
  </article>
  `;
}

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function renderProjectsToDom(data) {
  let items = data.map((item) => cardTemplate(item)).join("");
  itemsContainer.innerHTML = items;
}

async function handleInitialLoad() {
  const data = await getData(url);
  setState(data);

  renderProjectsToDom(getState());
}

window.addEventListener("DOMContentLoaded", handleInitialLoad);
