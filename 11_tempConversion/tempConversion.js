const convertToCelsius = function(far) {
  let result = (far - 32) * (5/9);
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  let result = (cel * 9/5) + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
