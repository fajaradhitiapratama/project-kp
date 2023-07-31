function changeImage(imageNumber) {
    var imgChange = document.getElementById("img-change");
  
    var newImageSource = "";
    if (imageNumber === 1) {
      newImageSource ="/asset/equipment/fire blanket/2.webp";
    } else if (imageNumber === 2) {
      newImageSource = "/asset/equipment/fire blanket/1.webp"
    } 
    imgChange.src = newImageSource;
  }
  