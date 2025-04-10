document.addEventListener("DOMContentLoaded", function () {
  // Обработка всех радио-кнопок в фильтре
  const radioGroups = document.querySelectorAll(
    '.checkbox-wrapper input[type="radio"]'
  );

  radioGroups.forEach((radio) => {
    // Инициализация начального состояния
    updateRadioState(radio);

    // Обработчик клика
    radio.addEventListener("click", function (e) {
      const parentLabel = this.closest("label");
      const wrapper = this.closest(".checkbox-wrapper");

      // Если уже выбран - снимаем выбор
      if (this.checked && parentLabel.classList.contains("active")) {
        this.checked = false;
        updateRadioState(this);
      }
      // Если не выбран - выбираем
      else {
        // Снимаем выбор со всех в группе
        wrapper.querySelectorAll('input[type="radio"]').forEach((r) => {
          r.checked = false;
          updateRadioState(r);
        });

        // Устанавливаем выбор
        this.checked = true;
        updateRadioState(this);
      }
    });
  });

  // Функция для обновления визуального состояния
  function updateRadioState(radio) {
    const parentLabel = radio.closest("label");
    if (!parentLabel) return;

    if (radio.checked) {
      parentLabel.classList.add("active");
    } else {
      parentLabel.classList.remove("active");
    }

    // Обновление SVG элементов
    updateRadioSvg(radio);
  }

  // Функция для обновления SVG
  function updateRadioSvg(radio) {
    const parentLabel = radio.closest("label");
    if (!parentLabel) return;

    const color = radio.checked ? "var(--red-color)" : "#D2D2D2";

    // Для диаметров
    if (parentLabel.querySelector(".diameter-radio svg")) {
      const svg = parentLabel.querySelector(".diameter-radio svg");
      svg.querySelector("circle").setAttribute("stroke", color);
    }

    // Для штуцеров
    if (parentLabel.querySelector(".fitting-radio svg")) {
      const svg = parentLabel.querySelector(".fitting-radio svg");
      svg.querySelectorAll("path, rect").forEach((el) => {
        el.setAttribute("stroke", color);
      });
    }
  }
});
