function changeImage(imageNumber) {
    var imgChange = document.getElementById("img-change");
  
    var newImageSource = "";
    if (imageNumber === 1) {
      newImageSource ="/asset/equipment/hose reel/2.webp";
    } else if (imageNumber === 2) {
      newImageSource = "/asset/equipment/hose reel/1.webp"
    } 
    imgChange.src = newImageSource;
  }
  