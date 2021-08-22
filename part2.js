const btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.style.display = "block";
document.body.appendChild(btn);

btn.addEventListener("click", createImgTag);

function createImgTag() {
    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/150"
    document.body.appendChild(img);
}