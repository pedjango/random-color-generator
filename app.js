function colorChange() {
  let hex = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  document.getElementById("hex").innerHTML = "| " + hex.toUpperCase();
  document.getElementById("hex-c").value = hex;

  let rgb = hexToRgb(hex);
  document.getElementById("rgb").innerHTML = "| " + rgb;
  document.getElementById("rgb-c").value = "rgb(" + rgb + ")";

  document.getElementById("color-box").style.backgroundColor = hex;
  document.getElementById("rgb-c").style.color = hex;
  document.getElementById("hex-c").style.color = hex;
}

function hexToRgb(hexValue) {
  // RRGGBB
  let r = hexValue.substr(1, 2);
  let g = hexValue.substr(3, 2);
  let b = hexValue.substr(5, 2);

  let R, G, B;

  R = hexToDec(r.substr(1, 1)) + hexToDec(r.substr(0, 1)) * 16;
  G = hexToDec(g.substr(1, 1)) + hexToDec(g.substr(0, 1)) * 16;
  B = hexToDec(b.substr(1, 1)) + hexToDec(b.substr(0, 1)) * 16;

  // let RGB = "RGB(" + R + "," + G + "," + B + ")";
  // document.getElementById('color-box').style.border = RGB;

  return R + "," + G + "," + B;
}

function hexToDec(Q) {
  switch (Q) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    case "a":
      return 10;
    case "b":
      return 11;
    case "c":
      return 12;
    case "d":
      return 13;
    case "e":
      return 14;
    case "f":
      return 15;
    default:
      return 0;
  }
}

function copyHexValue() {
  let copiedValue = document.getElementById("hex-c");
  
  copiedValue.select();
  copiedValue.setSelectionRange(0, 99999);

  document.execCommand("copy");
  
  alert("Copied hex color: " + copiedValue.value);
}

function copyRGBValue() {
  let copiedValue = document.getElementById("rgb-c");
  
  copiedValue.select();
  copiedValue.setSelectionRange(0, 99999);

  document.execCommand("copy");
  
  alert("Copied RGB color: " + copiedValue.value);
}