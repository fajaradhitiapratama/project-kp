function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W1/img20200504081000-bc213-2856_650-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W1/img20200505080305-a35a2-2856_651-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W1/img20200505080350-25fa1-2856_649-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 4000W1/img20200505091450-254bc-2856_652-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
