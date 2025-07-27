// Danh sách bài viết (Việt Nam + Trung Quốc)
const posts = [
  // === VIỆT NAM ===
  {
    id: 1,
    title: "Khám phá Hà Giang mùa hoa tam giác mạch",
    img: "https://picsum.photos/id/1018/600/400",
    desc: "Hà Giang mùa hoa tam giác mạch đẹp như tranh vẽ, thu hút nhiều du khách.",
    content: "Hà Giang nổi tiếng với núi non hùng vĩ, những cánh đồng hoa tam giác mạch tím hồng trải dài khắp sườn đồi. Du khách có thể ghé thăm Đồng Văn, Mèo Vạc, Lũng Cú để tận hưởng cảnh sắc tuyệt đẹp...",
    category: "vietnam"
  },
  {
    id: 2,
    title: "Du lịch Phú Quốc - Thiên đường biển đảo",
    img: "https://picsum.photos/id/1015/600/400",
    desc: "Phú Quốc nổi tiếng với biển xanh cát trắng, hải sản tươi ngon và nhiều resort sang trọng.",
    content: "Phú Quốc được mệnh danh là đảo ngọc với nhiều bãi biển đẹp như Bãi Sao, Bãi Dài. Du khách có thể tham quan VinWonders, Safari, thưởng thức hải sản tươi ngon...",
    category: "vietnam"
  },
  {
    id: 3,
    title: "Sapa - Hành trình săn mây",
    img: "https://picsum.photos/id/1025/600/400",
    desc: "Sapa là điểm đến lý tưởng cho những ai muốn tận hưởng khí hậu mát mẻ và cảnh núi non hùng vĩ.",
    content: "Sapa nổi bật với đỉnh Fansipan, những thửa ruộng bậc thang, và văn hóa đặc sắc của người H'Mông, Dao. Buổi sáng săn mây ở núi Hàm Rồng là trải nghiệm không thể bỏ lỡ...",
    category: "vietnam"
  },

  // === TRUNG QUỐC ===
  {
    id: 10,
    title: "Bắc Kinh - Thủ đô ngàn năm lịch sử",
    img: "https://picsum.photos/id/1005/600/400",
    desc: "Khám phá Tử Cấm Thành, Vạn Lý Trường Thành và những món ăn truyền thống Bắc Kinh.",
    content: "Bắc Kinh là trung tâm chính trị và văn hóa của Trung Quốc. Du khách có thể ghé thăm Vạn Lý Trường Thành, Tử Cấm Thành, Thiên An Môn. Đừng quên thưởng thức vịt quay Bắc Kinh trứ danh...",
    category: "china"
  },
  {
    id: 11,
    title: "Thượng Hải - Thành phố hiện đại bậc nhất",
    img: "https://picsum.photos/id/1006/600/400",
    desc: "Thượng Hải nổi tiếng với bến Thượng Hải, tháp truyền hình Đông Phương Minh Châu và phố Nam Kinh.",
    content: "Thượng Hải được xem là trái tim kinh tế của Trung Quốc. Du khách có thể đi dạo trên bến Thượng Hải (The Bund), chiêm ngưỡng kiến trúc cổ xen lẫn hiện đại...",
    category: "china"
  },
  {
    id: 12,
    title: "Trương Gia Giới - Cảnh quan huyền bí",
    img: "https://picsum.photos/id/1008/600/400",
    desc: "Thiên đường của những dãy núi đá vôi kỳ vĩ, bối cảnh phim Avatar nổi tiếng.",
    content: "Trương Gia Giới nổi tiếng với Công viên rừng quốc gia, nơi có những cột đá cao vút như trong phim Avatar. Cầu kính Trương Gia Giới cũng là thử thách đáng nhớ...",
    category: "china"
  },
  {
    id: 13,
    title: "Tây An - Cội nguồn văn hóa Trung Hoa",
    img: "https://picsum.photos/id/1010/600/400",
    desc: "Nổi tiếng với lăng mộ Tần Thủy Hoàng và đội quân đất nung huyền thoại.",
    content: "Tây An từng là kinh đô của nhiều triều đại. Điểm nhấn là lăng mộ Tần Thủy Hoàng với hàng ngàn tượng binh sĩ đất nung...",
    category: "china"
  }
];

// Hàm hiển thị danh sách bài viết (cho index.html)
function renderPosts(filter = "") {
  const postList = document.getElementById("postList");
  if (!postList) return; // Nếu không có danh sách thì bỏ qua

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

// Tự động render khi ở index.html
renderPosts();
