const lightPlaceholder = document.querySelector(".promo-light");
const darkPlaceholder = document.querySelector(".promo-dark");

const lightWrapper = document.querySelector(".promo-custom-light");
const darkWrapper = document.querySelector(".promo-custom-dark");

const template = `<div class="promo-item">
  <img src="%baseUrl%assets/%image%">
  <p>
    <b>Městská knihovna v&nbsp;Praze</b>
    <br>
    %text%
    <a class="promo-cta" href="https://www.mlp.cz" target="_blank" rel="noopener">Zjistit víc</a>
  </p>
</div>`;

const mkpFooter = `<div class="mkp-footer">
  <div class="mkp-footer-logos">
    <img src="%baseUrl%assets/mkp-%theme%-short.svg">
    <img src="%baseUrl%assets/prague.svg">
  </div>
  <div class="mkp-footer-links">
    <a href="https://www.mlp.cz" target="_blank" rel="noopener">www.mlp.cz</a><br>
    <a href="https://www.e-knihovna.cz" target="_blank" rel="noopener">www.e-knihovna.cz</a><br>
    <a href="https://www.facebook.com/knihovna" target="_blank" rel="noopener">www.facebook.com/knihovna</a>
  </div>
</div>`;

const items = [
  {
    image: "pujcuje.svg",
    text: "půjčuje knihy, audioknihy, obrazy, deskové hry…",
  },
  {
    image: "prostory.svg",
    text: "nabízí prostory pro samostatné studium, skupinová setkání, přednášky, konference…",
  },
  {
    image: "porada.svg",
    text: "pořádá autorská čtení, přednášky, koncerty, filmové projekce, akce pro děti…",
  },
  {
    image: "online.svg",
    text: "poskytuje online služby e&#8209;knihy, digitalizované dokumenty, přednášky, kurzy…",
  },
  { image: "podporuje.svg", text: "podporuje tvoření v kreativních dílnách" },
];

function getPromoBaseUrl() {
  const el = document.querySelector("script[src$='promo.js']");
  if (!el) return null;

  return el.getAttribute("src").replace(/promo\.js$/, "");
}

function renderPromo() {
  if (!lightWrapper || !darkWrapper) return;

  const baseUrl = getPromoBaseUrl();
  if (!baseUrl) return;

  const html = items
    .map((item) =>
      template
        .replace("%image%", item.image)
        .replace("%text%", item.text)
        .replace(/%baseUrl%/g, baseUrl)
    )
    .join("\n");

  lightWrapper.innerHTML =
    html + mkpFooter.replace("%theme%", "light").replace(/%baseUrl%/g, baseUrl);
  darkWrapper.innerHTML =
    html + mkpFooter.replace("%theme%", "dark").replace(/%baseUrl%/g, baseUrl);

  document.body.classList.add(`custom-promo-applied`);
  console.log("Custom promo applied.");
}

renderPromo();
