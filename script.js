let arr = ["Roger", "Rafa", "Novak"];
let b=arr.reverse();
b.forEach(elem => Addon(elem));

function Addon(name) {
  let box = document.getElementById("box");
  let li = document.createElement("li");

  li.textContent = name[0].toUpperCase() + name.slice(1).toLowerCase();
  li.className = "listing"
  let a = document.createElement("a");
  a.textContent = "x";
  a.href = "javascript:void(0)";
  a.className = "remove";
  li.appendChild(a);
  let pos = box.firstElementChild;
  if (pos == null) {
    box.appendChild(li);
  } 
  else
   {
    box.insertBefore(li, pos);

  }
}


function addMore() {

  document.getElementById("error").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("error").innerHTML = "please enter value";
  } else {
    Addon(name);
  }
  document.getElementById("name").value = "";
}

let btn = document.querySelector("ul");
btn.addEventListener("click", function (e) {
  let box = document.getElementById("box");
  let li = e.target.parentNode;
  box.removeChild(li);
});
function myfunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
let searching = () => {

  let input = document.getElementById('searching').value
  input = input.toUpperCase();
  let x = document.getElementsByClassName('listing');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toUpperCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}

var input = document.getElementById("name");
input.addEventListener("keyup", function (event) {
  if (event.key === 'Enter') {
    addMore();
  }
});

