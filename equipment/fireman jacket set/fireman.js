function changeImage(imageNumber) {
    var imgChange = document.getElementById("img-change");
  
    var newImageSource = "";
    if (imageNumber === 1) {
      newImageSource = "/asset/equipment/fireman jacket/2.webp";
    } else if (imageNumber === 2) {
      newImageSource = "/asset/equipment/fireman jacket/3.webp"
    } else if (imageNumber === 3) {
      newImageSource = "/asset/equipment/fireman jacket/4.webp"
    } else if (imageNumber === 4) {
        newImageSource = "/asset/equipment/fireman jacket/1.webp"
      }
    imgChange.src = newImageSource;
  }
  