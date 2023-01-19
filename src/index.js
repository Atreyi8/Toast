import "./styles.css";
import { Toast } from "./Toast";
Toast.init();
let showToastBtn = document.getElementById("show-toast-btn");
console.log(showToastBtn);
showToastBtn.addEventListener("click", () => {
  Toast.show("success toast", "success", "top-center", 5);
});
