// Danh sách bài viết mẫu
const posts = [
  {
    id: 1,
    title: "Khám phá Hà Giang mùa hoa tam giác mạch",
    img: "https://picsum.photos/id/1018/600/400",
    desc: "Hà Giang mùa hoa tam giác mạch đẹp như tranh vẽ, thu hút nhiều du khách khắp nơi.",
    content: "Hà Giang nổi tiếng với núi non hùng vĩ, những cánh đồng hoa tam giác mạch tím hồng trải dài khắp sườn đồi. Du khách có thể ghé thăm Đồng Văn, Mèo Vạc, Lũng Cú để tận hưởng cảnh sắc tuyệt đẹp..."
  },
  {
    id: 2,
    title: "Du lịch Phú Quốc - Thiên đường biển đảo",
    img: "https://picsum.photos/id/1015/600/400",
    desc: "Phú Quốc nổi tiếng với biển xanh cát trắng, hải sản tươi ngon và nhiều resort sang trọng.",
    content: "Phú Quốc được mệnh danh là đảo ngọc với nhiều bãi biển đẹp như Bãi Sao, Bãi Dài. Du khách có thể tham quan VinWonders, Safari, thưởng thức hải sản tươi ngon..."
  },
  {
    id: 3,
    title: "Sapa - Hành trình săn mây",
    img: "https://picsum.photos/id/1025/600/400",
    desc: "Sapa là điểm đến lý tưởng cho những ai muốn tận hưởng khí hậu mát mẻ và cảnh núi non hùng vĩ.",
    content: "Sapa nổi bật với đỉnh Fansipan, những thửa ruộng bậc thang, và văn hóa đặc sắc của người H'Mông, Dao. Buổi sáng săn mây ở núi Hàm Rồng là trải nghiệm không thể bỏ lỡ..."
  },
  {
    id: 4,
    title: "Hội An - Phố cổ đầy sắc màu",
    img: "https://picsum.photos/id/1035/600/400",
    desc: "Hội An nổi bật với những ngôi nhà cổ kính, đèn lồng lung linh và nền ẩm thực đặc sắc.",
    content: "Hội An là di sản văn hóa thế giới, nổi tiếng với phố cổ, chùa Cầu và những đêm thả hoa đăng trên sông Hoài. Món cao lầu, bánh mì Phượng là đặc sản không thể bỏ qua..."
  }
];

// Hàm hiển thị danh sách bài viết (chỉ dùng ở index.html)
function renderPosts(filter = "") {
  const postList = document.getElementById("postList");
  if (!postList) return; // Nếu không có danh sách thì bỏ qua (detail.html không cần)

  const searchInput = document.getElementById("searchInput");

  postList.innerHTML = "";
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    postList.innerHTML = "<p style='text-align:center; grid-column:1/-1;'>Không tìm thấy bài viết!</p>";
    return;
  }

  filteredPosts.forEach(post => {
    const postItem = document.createElement("div");
    postItem.classList.add("post");
    postItem.innerHTML = `
      <a href="detail.html?id=${post.id}">
        <img src="${post.img}" alt="${post.title}">
        <div class="post-content">
          <h3>${post.title}</h3>
          <p>${post.desc}</p>
        </div>
      </a>
    `;
    postList.appendChild(postItem);
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderPosts(e.target.value);
    });
  }
}

// Tự động render khi đang ở index.html
renderPosts();
