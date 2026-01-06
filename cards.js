let cardsList = document.querySelector(".cards");

let cards = [
  { title: "Project 1", url: "./project_1/" },
  { title: "Project 2", url: "./project_2/" },
  { title: "Project 3", url: "./project_3/" }
];
cards.forEach((card) => {
  cardsList.innerHTML += `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <h2>${card.title}</h2>
        </div>
        <div class="card-back">
          <a href="${card.url}" target="_blank">Project Link</a>
        </div>
      </div>
    </div>
  `;
});