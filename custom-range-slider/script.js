const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label = +label_width.substring(0, label_width.length - 2);

  const min = +e.target.min;
  const max = +e.target.max;

  const left =
    value * (num_width / max) - num_label / 2 + scale(value, 0, 100, 10, -10);
  label.style.left = `${left}px`;

  label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
