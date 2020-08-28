"use strict";

const target = document.querySelector(".target");
const coordinate = document.querySelector(".coordinate");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;
  function moveElement(e) {
    const x = e.pageX;
    const y = e.pageY;

    coordinate.innerHTML = `${x}px, ${y}px`;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;

    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;

    coordinate.style.transform = `translate(${x}px, ${y}px)`;
  }

  document.addEventListener("mousemove", (e) => moveElement(e));
});
