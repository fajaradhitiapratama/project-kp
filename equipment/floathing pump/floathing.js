function changeImage(imageNumber) {
    var imgChange = document.getElementById("img-change");
  
    var newImageSource = "";
    if (imageNumber === 1) {
      newImageSource = "/asset/equipment/floathing pump/2.webp";
    } else if (imageNumber === 2) {
      newImageSource = "/asset/equipment/floathing pump/3.webp"
    } else if (imageNumber === 3) {
      newImageSource = "/asset/equipment/floathing pump/4.webp"
    } else if (imageNumber === 4) {
        newImageSource = "/asset/equipment/floathing pump/1.webp"
      }
    imgChange.src = newImageSource;
  }
  