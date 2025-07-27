// Lọc bài thuộc category = "china"
const chinaPosts = posts.filter(p => p.category === "china");
const destinationList = document.getElementById("destinationList");

function renderChina(filter = "") {
  destinationList.innerHTML = "";

  const filtered = chinaPosts.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    destinationList.innerHTML = "<p style='text-align:center;grid-column:1/-1;'>Không tìm thấy điểm đến!</p>";
    return;
  }

  filtered.forEach(p => {
    const item = document.createElement("div");
    item.classList.add("post");
    item.innerHTML = `
      <a href="detail.html?id=${p.id}">
        <img src="${p.img}" alt="${p.title}">
        <div class="post-content">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      </a>
    `;
    destinationList.appendChild(item);
  });
}

// Xử lý tìm kiếm
document.getElementById("searchInput").addEventListener("input", (e) => {
  renderChina(e.target.value);
});

// Hiển thị mặc định khi load trang
renderChina();
