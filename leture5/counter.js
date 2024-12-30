function hello() {
    alert('Hello, world!');
}
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter',0);
}

function count() {
    let counter = localStorage.getItem('counter');
    counter ++;
    document.querySelector("h2").innerHTML = counter;
    localStorage.setItem('counter',counter);

    if (counter % 10 === 0) {
        document.querySelector("div").innerHTML = `The counter is now ${counter}`
    }
}


function change() {
    const heading = document.querySelector("h1");
    if (heading.innerHTML === "Hello pee!") {
        heading.innerHTML = "Goodbye poop";
    } else {
        heading.innerHTML = "Hello pee!";
    }

}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").onclick = count;

    setInterval(count, 1000);
    document.querySelector("h2").innerHTML = localStorage.getItem("counter");
    document.querySelector("form").onsubmit = function () {
        const name = document.querySelector("#name").value;
        alert(`Hello, ${name}!`)
    }
})