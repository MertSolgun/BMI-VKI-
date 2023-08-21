const btn = document.getElementById("calculate");

btn.addEventListener("click", function (event) {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height === 0 || weight === 0) {
    alert(
      "Please fill out valid non-zero numeric values for height and weight"
    );
    return false;
  }

  // Calculate BMI
  const heightInMeters = height / 100;
  let BMI = weight / (heightInMeters * heightInMeters);
  BMI = BMI.toFixed(2);
  console.log(BMI);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy";
  }

  if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obese";
  }

  document.querySelector(".comment").innerHTML = `Comment:
  You are <span id = "comment"> ${status}</span>`;
});
