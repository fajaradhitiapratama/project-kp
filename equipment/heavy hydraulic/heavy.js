function changeImage(imageNumber) {
    var imgChange = document.getElementById("img-change");
  
    var newImageSource = "";
    if (imageNumber === 1) {
      newImageSource = "/asset/equipment/heavyhydraulic/1.webp";
    } else if (imageNumber === 2) {
      newImageSource = "/asset/equipment/heavyhydraulic/1.webp"
    } 
    imgChange.src = newImageSource;
  }
  