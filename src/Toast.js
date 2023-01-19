export const Toast = {
  counter: 0,
  init() {
    let containerBottom = document.createElement("div");
    containerBottom.className = "container-bottom";
    document.body.append(containerBottom);

    let containerTop = document.createElement("div");
    containerTop.className = "container-Top";
    document.body.append(containerTop);

    // toast css could be added in index.html in the script , but we dont want that initially
    let cssScript = document.createElement("link");
    cssScript.rel = "stylesheet";
    // href path should be in reference to index.html not tost.js
    cssScript.href = "./src/Toast.css";
    document.head.append(cssScript);
  },

  show(message, type, position, seconds) {
    let containerTop = document.querySelector(".container-Top");
    let containerBottom = document.querySelector(".container-bottom");
    let container;
    let toast = document.createElement("div");
    let cross = document.createElement("div");

    toast.className = "toast";
    cross.className = "cross";

    cross.textContent = "X";

    if (position.includes("top")) {
      containerTop.appendChild(toast);
      container = containerTop;
    } else {
      containerBottom.appendChild(toast);
      container = containerBottom;
    }
    toast.style = "";
    toast.textContent = message;
    toast.className = "toast toast--visible";
    toast.id = ++this.counter;

    this.setRemainingTime(toast, seconds);
    toast.appendChild(cross);
    this.setPosition(position, container);
    toast.classList.add(`type--${type}`);
  },

  close() {},

  setRemainingTime() {},

  setPosition(position, container) {
    let toasts = document.querySelectorAll(".toast");

    let topOrBottom = position.substring(0, position.indexOf("-"));
    let placement = position.substring(position.indexOf("-") + 1);

    // adding margins between toasts
    toasts.forEach((toast) => {
      if (topOrBottom === "top") {
        toast.style.marginTop = "20px";
      } else {
        toast.style.marginBottom = "20px";
      }
    });

    container.style[topOrBottom] = "20px";

    switch (placement) {
      case "center":
        container.style.left = "50%";
        container.style.transform = "translate(-50p%)";
        break;
      case "left":
        container.style.left = "20%";
        break;
      case "right":
        container.style.right = "20%";
        break;
      default:
        break;
    }
  }
};
