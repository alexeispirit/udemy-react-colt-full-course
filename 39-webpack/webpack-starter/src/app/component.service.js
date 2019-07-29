class ComponentService {
  constructor() {
    this.numberOneInput = document.getElementById("numberOne");
    this.numberTwoInput = document.getElementById("numberTwo");
    this.addValuesButton = document.getElementById("addValues");
    this.resultDiv = document.getElementById("result");
    this.errorBox = document.getElementById("error");
  }

  getInputs() {
    return [numberOneInput.value, numberTwoInput.value];
  }

  setResult(str) {
    this.resultDiv.innerText = str;
  }

  onClick(callback) {
    this.addValuesButton.addEventListener("click", callback);
  }
}
