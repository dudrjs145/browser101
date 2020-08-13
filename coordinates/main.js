"use strict";

const target = document.querySelector(".target");
const coordinate = document.querySelector(".coordinate");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");

function moveElement(e) {
  const coordinateX = e.pageX;
  const coordinateY = e.pageY;

  coordinate.innerHTML = `${coordinateX}px, ${coordinateY}px`;

  target.style.top = `${coordinateY}px`;
  target.style.left = `${coordinateX}px`;

  coordinate.style.top = `${coordinateY}px`;
  coordinate.style.left = `${coordinateX}px`;

  vertical.style.top = `${coordinateY}px`;
  vertical.style.left = `${coordinateX}px`;

  horizontal.style.top = `${coordinateY}px`;
  horizontal.style.left = `${coordinateX}px`;
}

document.addEventListener("mousemove", (e) => moveElement(e));
