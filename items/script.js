document.getElementById("Home").onclick = function(event) {
  event.preventDefault();
  window.location.href = "../index.html";
};
document.getElementById("Kits").onclick = function(event) {
  event.preventDefault();
  window.location.href = "../Kits/kits.html";
};
document.getElementById("Discord").addEventListener("click", function() {
    window.open("https://discord.gg/9cHcAzfgwa", "_blank");
});
