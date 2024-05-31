/*=============== Data ===============*/
const repositories = [
  {
    id: 1,
    title: "Website_wisata_360_view",
    show: "Public",
    techStack: "PHP",
    star: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea harum in repudiandae itaque perspiciatis quo sapiente expedita, error dolorem doloremque porro, maxime voluptatibus fugiat debitis ab aliquam? Fugit, voluptatem?",
  },
  {
    id: 2,
    title: "website_pemetaan_kost_purwokerto_utara",
    show: "Public",
    techStack: "PHP",
    star: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea harum in repudiandae itaque perspiciatis quo sapiente expedita, error dolorem doloremque porro, maxime voluptatibus fugiat debitis ab aliquam? Fugit, voluptatem?",
  },
  {
    id: 3,
    title: "frontend-mentor-product-preview-card-component",
    show: "Public",
    techStack: "HTML",
    star: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea harum in repudiandae itaque perspiciatis quo sapiente expedita, error dolorem doloremque porro, maxime voluptatibus fugiat debitis ab aliquam? Fugit, voluptatem?",
  },
  {
    id: 4,
    title: "website_pemesanan_furnitur",
    show: "Public",
    techStack: "PHP",
    star: 6,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea harum in repudiandae itaque perspiciatis quo sapiente expedita, error dolorem doloremque porro, maxime voluptatibus fugiat debitis ab aliquam? Fugit, voluptatem?",
  },
  {
    id: 5,
    title: "website_pemesanan_tiket_wisata",
    show: "Public",
    techStack: "PHP",
    star: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea harum in repudiandae itaque perspiciatis quo sapiente expedita, error dolorem doloremque porro, maxime voluptatibus fugiat debitis ab aliquam? Fugit, voluptatem?",
  },
  {
    id: 6,
    title: "risangabdurrahmang.github.io",
    show: "Public",
    techStack: "HTML",
    star: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea harum in repudiandae itaque perspiciatis quo sapiente expedita, error dolorem doloremque porro, maxime voluptatibus fugiat debitis ab aliquam? Fugit, voluptatem?",
  },
];

/*=============== Looping Card From Object ===============*/
const repoCards = document.querySelector(".repo-cards");
repositories.forEach((repo) => {
  const repoItem = document.createElement("article");
  repoItem.className = "repo-item";
  repoItem.innerHTML = `
      <div class="repo-head">
        <h5 class="title">${repo.title}</h5>
        <p class="type">${repo.show}</p>
      </div>
      <p class="repo-desc">
      ${repo.desc}
      </p>
      <div class="repo-foot">
        <p class="tech-stack">
          <i class="fa-solid fa-circle"></i>
          ${repo.techStack}
        </p>
        <p class="stars">
          <i class="fa-regular fa-star"></i>
          ${repo.star}
        </p>
      </div>
  `;
  repoCards.appendChild(repoItem);
});

/*=============== Sidebar ===============*/
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const sideBar = document.querySelector(".sidebar");
sideMenu.addEventListener("click", () => (sideBar.style.display = "block"));
closeMenu.addEventListener("click", () => (sideBar.style.display = "none"));

/*=============== Tab Links Active ===============*/
const tabItems = document.querySelectorAll(".tab-item");
tabItems.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    tab.classList.add("active");
  });
});
