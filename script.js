document.getElementById("sim").addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = "mensagem.html";
    });
});

document.getElementById("nao").addEventListener("mouseover", function() {
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let buttonWidth = this.offsetWidth;
    let buttonHeight = this.offsetHeight;

    let maxLeft = viewportWidth - buttonWidth;
    let maxTop = viewportHeight - buttonHeight;

    let newLeft = Math.random() * maxLeft;
    let newTop = Math.random() * maxTop;

    this.style.position = "absolute";
    this.style.top = newTop + "px";
    this.style.left = newLeft + "px";
});
