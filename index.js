

const counterEl = document.querySelector(".counter");
const loadingBarEl = document.querySelector(".loading-bar-front");
const btnEl = document.querySelector(".btn-reset");

let idx = 0;
let timeOut;

function updateNum() {
    counterEl.innerText = idx + "%";
    loadingBarEl.style.width = idx + "%";
    idx++;

    
    if (idx < 101) {
        timeOut = setTimeout(updateNum, 40);
    } else {
        idx = 0;
        clearTimeout(timeOut);
    }

}


window.addEventListener("load", updateNum)


btnEl.addEventListener("click", () => {
    idx = 0;
    clearTimeout(timeOut);
    updateNum();
})