const name = 'world';
console.log(`Hello ${name}`);

function popUp() {
    console.log("popUp");
    window.alert("Sitio en construcción");
};

var items = document.getElementsByClassName("construccion");
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", popUp, false);
  }

