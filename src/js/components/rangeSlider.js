import noUiSlider from "nouislider";
const filterPriceRangeSlider = document.getElementById("filter-price-range");
const inputFirstPriceRangeSlider = document.getElementById(
  "filter-price-input-first"
);
const inputSecondPriceRangeSlider = document.getElementById(
  "filter-price-input-second"
);

const inputsPriceRangeSlider = [
  inputFirstPriceRangeSlider,
  inputSecondPriceRangeSlider,
];

if (filterPriceRangeSlider) {
  noUiSlider.create(filterPriceRangeSlider, {
    start: [0, 20000],
    step: 1000,
    connect: true,
    range: {
      min: [100],
      max: [25500],
    },
    format: {
      to: (v) => v | 0,
      from: (v) => v | 0,
    },
  });

  filterPriceRangeSlider.noUiSlider.on("update", function (values, handle) {
    inputsPriceRangeSlider[handle].value = values[handle];
  });

  inputFirstPriceRangeSlider.addEventListener("change", function () {
    filterPriceRangeSlider.noUiSlider.set([this.value, null]);
  });
}
