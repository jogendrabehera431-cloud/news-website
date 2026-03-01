async function fetchNews() {
  try {
    const response = await fetch("/.netlify/functions/news");
    const data = await response.json();

    const container = document.getElementById("news-container");
    container.innerHTML = "";

    data.articles.forEach(article => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description || ""}</p>
        <a href="${article.url}" target="_blank">Read more</a>
        <hr/>
      `;
      container.appendChild(div);
    });

  } catch (error) {
    document.getElementById("news-container").innerHTML =
      "<p>⚠ Failed to load news.</p>";
  }
}

fetchNews();