const quote = document.getElementById("quotes");

const getQuote = () => {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => (quote.innerHTML = data.quote));
};