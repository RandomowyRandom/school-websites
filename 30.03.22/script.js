let photos = document.querySelectorAll(".photo");
let main = document.getElementById("main");

console.log(photos);

photos.forEach((p) => {
  p.addEventListener("click", (photo) => {
    p.getAttribute("src");

    let src = p.getAttribute("src");
    let filename = src.split("/").pop();

    main.setAttribute("src", `photos/hq/${filename}`);
  });
});
