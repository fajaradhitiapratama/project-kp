function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W -DOUBLE CABIN/img20201210094331-8b8b6-2856_660-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W -DOUBLE CABIN/img20201210094317-fe3b0-2856_659-t598_26.webp";
  } 
  imgChange.src = newImageSource;
}
