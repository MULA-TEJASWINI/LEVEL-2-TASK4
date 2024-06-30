document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("colorButton");
    button.addEventListener("click", () => {
      document.body.style.backgroundColor = getRandomColor();
    });
  });
  
  function getRandomColor() {
    var x = '0123456789ABCDEF';
    var y = '#';
    for (var i = 0; i < 6; i++) {
      y += x[Math.floor(Math.random() * 16)];
    }
    return y;
  }

