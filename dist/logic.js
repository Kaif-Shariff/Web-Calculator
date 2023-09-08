const buttons = document.querySelectorAll("input[type=button]");
const now = document.getElementById("now");
const prev = document.getElementById("prev");

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const odds = ["C", "=", "."];
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.cursor = "pointer";

    if (num.includes(parseInt(button.value))) {
      button.style.opacity = "70%";
    } else if (!odds.includes(button.value)) {
      button.style.backgroundColor = "#FF6607";
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", () => {
    button.style.cursor = "pointer";

    if (num.includes(parseInt(button.value))) {
      button.style.opacity = "100%";
    } else if (!odds.includes(button.value)) {
      button.style.backgroundColor = "#FD7A29";
    }
  });
});

let accumulatedValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value != "=") {
      accumulatedValue += button.value;
      now.value = accumulatedValue;
    }

    if (button.value == "C") {
      now.value = "";
      prev.value = "";
      accumulatedValue = "";
    }

    if (button.value === "=") {
      const operators = ["+", "-", "*", "/", ".", "%"];

      const val = now.value.split(" ");

      if (val.length === 3) {
        const firstValue = parseInt(val[0].trim());
        const operator = val[1].trim();
        const secondValue = parseInt(val[2].trim());
        let result = "";
        //  using switch to check the operator and then applying that
        switch (operator) {
          case "+":
            result = firstValue + secondValue;
            prev.value = now.value;
            now.value = result;
            break;
          case "-":
            result = firstValue - secondValue;
            prev.value = now.value;
            now.value = result;
            break;
          case "/":
            result = firstValue / secondValue;
            prev.value = now.value;
            now.value = result;
            break;
          case "%":
            result = firstValue % secondValue;
            prev.value = now.value;
            now.value = result;
            break;
          case "x":
            result = firstValue * secondValue;
            prev.value = now.value;
            now.value = result;
            break;
        }
      } else {
        alert("Invalid expression. Please provide a valid expression");
      }
    }
  });
});