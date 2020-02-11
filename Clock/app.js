function clock() {
    const hours = document.querySelector("#hour");
    const minute = document.querySelector("#minute");
    const second = document.querySelector("#second");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hours.innerText = h;
    minute.innerText = m;
    second.innerText = s;
}

let interval = setInterval(clock, 1000);