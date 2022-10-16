function readMoreFunc() {
var moreText = document.getElementById("read-more");
var btnText = document.getElementById("myBtn");

    if (moreText.style.display == "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Less";
    } else {
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
}
