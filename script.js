let key = document.getElementById("key");
window.addEventListener("keydown", (e) => {
  key.innerHTML = `
          <div class="inner-container">
            <div>
              <h3>Key</h3>
              <p>${e.key == " " ? "Space" : e.key}</p>
            </div>
            <div>
              <h3>Code</h3>
              <p>${e.code}</p>
            </div>
            <div>
              <h3>KeyCode</h3>
              <p>${e.keyCode}</p>
            </div>
          </div>
        `;
});
