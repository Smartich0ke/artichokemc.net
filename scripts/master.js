function copyIP() {
  var copyIP = "play.atichokemc.net";
  navigator.clipboard.writeText(copyIP);
  var copyText = document.getElementById('copyText');
  copyText.style.opacity = "1.0";
}
