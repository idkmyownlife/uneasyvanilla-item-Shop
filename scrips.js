document.getElementById("Discord").addEventListener("click", function() {
    window.open("https://discord.gg/9cHcAzfgwa", "_blank");
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("Kits").onclick = function(event) {
    event.preventDefault(); 
    window.location.href = "Kits/kits.html";
  };
});
document.getElementById("Items").onclick = function(event) {
  event.preventDefault();
  window.location.href = "items/items.html";
};


