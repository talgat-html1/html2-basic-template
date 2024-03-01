const rangeSlider = document.getElementById('price-range');
const inputMin = document.getElementById('input-min');
const inputMax = document.getElementById('input-max');

noUiSlider.create(rangeSlider, {
  start: [0, 900],
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  }
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];

  if (handle === 0) {
    inputMin.value = Math.round(value);
  } else {
    inputMax.value = Math.round(value);
  }
});

inputMin.addEventListener('change', function () {
  rangeSlider.noUiSlider.set([this.value, null]);
});

inputMax.addEventListener('change', function () {
  rangeSlider.noUiSlider.set([null, this.value]);
});
