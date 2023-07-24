function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W/img20200505080232-64940-2856_654-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W/img20200505080253-f0341-2856_655-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W/img20200505151816-5dda4-2856_656-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W/img_20200512_wa0006-da504-2856_653-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
