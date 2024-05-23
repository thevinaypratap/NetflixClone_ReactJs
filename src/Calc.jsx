import React from "react";

function Add(a, b) {
  let Sum = a + b;
  return Sum;
}

function Sub(a, b) {
  let Substract = a - b;
  return Substract;
}

function Mul(a, b) {
  let Multiply = a * b;
  return Multiply;
}

function Div(a, b) {
  let Division = a / b;
  Division = Division.toFixed(2);
  return Division;
}

export { Add, Sub, Mul, Div };
