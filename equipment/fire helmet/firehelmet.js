function changeImage(imageNumber) {
    var imgChange = document.getElementById("img-change");
  
    var newImageSource = "";
    if (imageNumber === 1) {
      newImageSource ="/asset/equipment/helmet/1.webp";
    } else if (imageNumber === 2) {
      newImageSource = "/asset/equipment/helmet/3.webp"
    } else if (imageNumber === 3) {
      newImageSource = "/asset/equipment/helmet/4.webp"
    } else if (imageNumber === 4) {
        newImageSource = "/asset/equipment/helmet/2.webp"
      }
    imgChange.src = newImageSource;
  }
  