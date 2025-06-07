document.getElementById("Home").onclick = function(event) {
  event.preventDefault();
  window.location.href = "../visual.html";
};
document.getElementById("Items").onclick = function(event) {
  event.preventDefault();
  window.location.href = "../items/items.html";
};
document.getElementById("Discord").addEventListener("click", function() {
    window.open("https://discord.gg/9cHcAzfgwa", "_blank");
});
