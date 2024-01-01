// Check if elements exist before proceeding
let llink = document.querySelector("#in");
let short = document.querySelector("#inbtn");
let slink = document.querySelector("#out");
let copy = document.querySelector("#outbtn");

if (llink && short && slink && copy) {
    // Event listener for shortening the URL
    short.addEventListener("click", function () {
        slink.style.color = "rgb(170, 170, 170)";
        slink.value = "generating...";

        let link = llink.value;

        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then((resp) => resp.json())
            .then((value) => {
                slink.value = value.result.short_link;
                slink.style.color = "white";
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                slink.value = "Something went wrong :(";
                slink.style.color = "white";
            });
    });

    // Event listener for copying the shortened URL to the clipboard
    copy.addEventListener("click", function () {
        navigator.clipboard.writeText(slink.value);
        copy.innerHTML = "<img src='img/tick.png'>";

        setTimeout(() => {
            copy.innerHTML = "<img src='img/copy.png'>";
        }, 1000);
    });
} else {
    console.error("One or more elements not found.");
}
