const params = new URLSearchParams(window.location.search);
const calcType = params.get("type");

const config = CALCULATORS[calcType];

if (!config) {
  window.location.href = "/";
} else {
  document.title = `${config.title} — Forward Price Calculator`;
  document.getElementById("page-title").textContent = config.title;

  const fieldsEl = document.getElementById("fields");
  config.fields.forEach(([name, label]) => {
    const labelEl = document.createElement("label");
    labelEl.htmlFor = name;
    labelEl.textContent = label;

    const input = document.createElement("input");
    input.type = "number";
    input.step = "any";
    input.id = name;
    input.name = name;
    input.required = true;

    fieldsEl.appendChild(labelEl);
    fieldsEl.appendChild(input);
  });
}

const form = document.getElementById("calc-form");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
const resultValueEl = document.getElementById("result-value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorEl.classList.add("hidden");
  resultEl.classList.add("hidden");

  const values = {};
  for (const [name] of config.fields) {
    const raw = document.getElementById(name).value.trim();
    const num = Number(raw);
    if (raw === "" || Number.isNaN(num)) {
      errorEl.textContent = "Please enter valid numbers in all fields.";
      errorEl.classList.remove("hidden");
      return;
    }
    values[name] = num;
  }

  const args = config.fields.map(([name]) => values[name]);
  const result = ForwardPrice[config.method](...args);

  resultValueEl.textContent = result.toFixed(4);
  resultEl.classList.remove("hidden");
});
