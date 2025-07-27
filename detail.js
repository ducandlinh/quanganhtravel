// Lấy ID bài viết từ URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// DOM phần tử
const detailContainer = document.getElementById("detailContent");
const postList = document.getElementById("postList");

// Tìm bài viết theo ID
const post = posts.find(p => p.id === id);

// Hiển thị bài chi tiết
if (post) {
  detailContainer.innerHTML = `
    <img src="${post.img}" alt="${post.title}">
    <h1>${post.title}</h1>
    <p>${post.content}</p>
    <a class="back-link" href="index.html">← Quay lại trang chủ</a>
  `;
} else {
  detailContainer.innerHTML = `
    <p>❌ Không tìm thấy bài viết!</p>
    <a class="back-link" href="index.html">← Quay lại trang chủ</a>
  `;
}

// Xử lý tìm kiếm
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase().trim();
  postList.innerHTML = "";

  if (keyword === "") {
    postList.style.display = "none"; // không gõ thì ẩn kết quả
    return;
  }

  // Lọc bài viết (loại trừ bài đang xem)
  const filtered = posts.filter(
    p => p.id !== id && p.title.toLowerCase().includes(keyword)
  );

  postList.style.display = "grid"; // Hiện kết quả khi có tìm kiếm

  if (filtered.length === 0) {
    postList.innerHTML = "<p style='text-align:center;grid-column:1/-1;'>Không tìm thấy bài viết!</p>";
    return;
  }

  // Render danh sách bài tìm thấy
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
    postList.appendChild(item);
  });
});
