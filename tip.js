// Lọc bài thuộc category = "tip"
const tipPosts = posts.filter(p => p.category === "tip");
const tipList = document.getElementById("tipList");

function renderTips(filter = "") {
  tipList.innerHTML = "";

  const filtered = tipPosts.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    tipList.innerHTML = "<p style='text-align:center;grid-column:1/-1;'>Không tìm thấy mẹo du lịch!</p>";
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
    tipList.appendChild(item);
  });
}

// Xử lý tìm kiếm
document.getElementById("searchInput").addEventListener("input", (e) => {
  renderTips(e.target.value);
});

// Hiển thị mặc định khi load trang
renderTips();
