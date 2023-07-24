function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 3000W -DOUBLE CABIN 4X4/img_20201017_170607180_hdr-b18e9-2856_643-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 3000W -DOUBLE CABIN 4X4/img_20201017_170657002-5dff7-2856_647-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 3000W -DOUBLE CABIN 4X4/img_20201017_170805561-f564c-2856_648-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 3000W -DOUBLE CABIN 4X4/img20200925143038-670b7-2856_646-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
