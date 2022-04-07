let arr = ["roger", "rafa", "novak"];
// let b = arr.reverse();
// b.forEach(elem => Addon(elem));

// const box = document.getElementById("box");
Addon();
function Addon(name) {
  let val = "";
  if (!arr.includes(name)) {
    name && arr.push(name);
  } else {
    document.getElementById("error").innerHTML = `Player Already Exist`;
  }
  arr.forEach((elem) => {
    val += `<li id="${elem}" class= "listing"> ${elem}  <a onclick= "deleteElem()" href="#"> X </a> </li>`;
  });

  box.innerHTML = val;
}
function addMore() {
  document.getElementById("error").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("error").innerHTML = "Enter the value";
  } else {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    Addon(name);
  }
  document.getElementById("name").value = "";
}

function deleteElem() {
  this.event.target.parentNode.remove();
  arr.splice(arr.indexOf(this.event.target.parentNode.id), 1);
  if (arr.length === 0) {
    document.querySelector(`.noplayer`).innerHTML = `No player in the list.. `;
  }
}

// .........searching.........

let searching = () => {
  let input = document.getElementById("searching").value;
  input = input.toUpperCase();
  let x = document.getElementsByClassName("listing");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toUpperCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
};

let input = document.getElementById("name");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    if (arr.includes(input.value)) {
      document.getElementById("error").innerHTML = `Player Already Exist`;
    } else {
      addMore();
    }
  }
});

let theme = `dark`;
const mode = document.querySelector(`.moon`);
mode.addEventListener(`click`, function () {
  if (theme == `light`) {
    mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="moon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`}

    if (theme == `dark`) {
      mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="moon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`
    }
    if (theme == `dark`) {
      theme = `light`;
    } else if (theme == `light`) {
      theme = `dark`;
    }
  
  var element = document.body;
  element.classList.toggle("dark-mode");
});

input.addEventListener("keydown", function () {
  document.getElementById("error").innerHTML = "";
  document.querySelector(`.noplayer`).innerHTML = ` `;
});
