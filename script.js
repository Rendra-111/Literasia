
/* =====================================================
   LITERASIA - Sistem Informasi Perpustakaan
   ===================================================== */

/* ---------- 1. DATA BUKU ---------- */
// "isbn" dipakai untuk mengambil cover dari Open Library.
// Jika gagal dimuat, cover otomatis diganti gambar cadangan.
const books = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Fiksi",
    publisher: "Bentang Pustaka",
    year: 2005,
    stock: 5,
    isbn: "9789793062792",
    description: "Kisah sepuluh anak dari keluarga sederhana di Belitung yang bersekolah di sebuah SD Muhammadiyah yang nyaris roboh. Dengan bimbingan guru yang penuh dedikasi, mereka belajar bahwa mimpi layak diperjuangkan."
  },
  {
    id: 2,
    title: "Negeri 5 Menara",
    author: "A. Fuadi",
    category: "Fiksi",
    publisher: "Gramedia Pustaka Utama",
    year: 2009,
    stock: 3,
    isbn: "9789792248616",
    description: "Perjalanan enam santri dari berbagai daerah di sebuah pondok di Jawa Timur. Di bawah semboyan 'man jadda wajada', mereka menggantungkan cita-cita setinggi langit."
  },
  {
    id: 3,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    category: "Sastra",
    publisher: "Hasta Mitra",
    year: 1980,
    stock: 2,
    isbn: "9789799731234",
    description: "Novel pertama Tetralogi Buru yang berlatar masa kolonial Hindia Belanda. Mengikuti Minke, seorang pribumi terpelajar, yang bergulat dengan cinta, ketidakadilan, dan kesadaran bangsa."
  },
  {
    id: 4,
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    category: "Sastra",
    publisher: "Kepustakaan Populer Gramedia",
    year: 2017,
    stock: 0,
    isbn: "9786024241124",
    description: "Novel tentang sekelompok mahasiswa aktivis pada akhir era Orde Baru dan keluarga yang ditinggalkan ketika sebagian dari mereka menghilang. Sebuah kisah tentang persahabatan, kehilangan, dan ingatan."
  },
  {
    id: 5,
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    category: "Pengembangan Diri",
    publisher: "Penerbit Buku Kompas",
    year: 2018,
    stock: 6,
    isbn: "9786024125189",
    description: "Pengantar filsafat Stoa yang dikemas ringan dan dekat dengan keseharian. Buku ini mengajak pembaca membedakan hal yang bisa dan tidak bisa dikendalikan agar hidup lebih tenang."
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Pengembangan Diri",
    publisher: "Gramedia Pustaka Utama",
    year: 2019,
    stock: 4,
    isbn: "9780735211292",
    description: "Panduan praktis membangun kebiasaan baik dan meninggalkan kebiasaan buruk lewat perubahan-perubahan kecil yang konsisten. Disertai kerangka yang mudah diterapkan sehari-hari."
  },
  {
    id: 7,
    title: "Sapiens: Riwayat Singkat Umat Manusia",
    author: "Yuval Noah Harari",
    category: "Sejarah",
    publisher: "Kepustakaan Populer Gramedia",
    year: 2017,
    stock: 3,
    isbn: "9780062316097",
    description: "Menelusuri sejarah manusia sejak zaman batu hingga era modern, dan bagaimana revolusi kognitif, pertanian, serta ilmu pengetahuan membentuk dunia yang kita tinggali."
  },
  {
    id: 8,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Teknologi",
    publisher: "Prentice Hall",
    year: 2008,
    stock: 2,
    isbn: "9780132350884",
    description: "Buku klasik tentang cara menulis kode yang bersih, mudah dibaca, dan mudah dirawat. Berisi prinsip, pola, dan contoh perbaikan kode dari kasus nyata."
  },
  {
    id: 9,
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    category: "Teknologi",
    publisher: "Addison-Wesley",
    year: 2019,
    stock: 0,
    isbn: "9780135957059",
    description: "Kumpulan tips dan pendekatan praktis bagi pengembang perangkat lunak agar bekerja lebih efektif, fleksibel, dan terus berkembang sepanjang karier."
  },
  {
    id: 10,
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Sains",
    publisher: "Random House",
    year: 1980,
    stock: 3,
    isbn: "9780345539434",
    description: "Perjalanan memukau melintasi alam semesta, dari asal-usul bintang hingga tempat manusia di dalamnya, ditulis dengan gaya yang puitis dan memikat."
  },
  {
    id: 11,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Sains",
    publisher: "Bantam Books",
    year: 1988,
    stock: 4,
    isbn: "9780553380163",
    description: "Penjelasan populer tentang lubang hitam, Big Bang, dan hakikat waktu. Cocok bagi pembaca umum yang ingin memahami fisika modern tanpa rumus rumit."
  },
  {
    id: 12,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Ekonomi",
    publisher: "Warner Books",
    year: 1997,
    stock: 5,
    isbn: "9781612680194",
    description: "Membandingkan dua cara pandang tentang uang dari dua sosok ayah. Buku ini memperkenalkan literasi keuangan, aset, dan pentingnya belajar mengelola uang sejak dini."
  }
];

// Ikon untuk tiap kategori (cadangan: 📚)
const categoryIcons = {
  "Fiksi": "📖",
  "Sastra": "✒️",
  "Pengembangan Diri": "🌱",
  "Sejarah": "🏛️",
  "Teknologi": "💻",
  "Sains": "🔬",
  "Ekonomi": "📈"
};

// Warna cover cadangan per kategori
const categoryColors = {
  "Fiksi": "#1f4d3a",
  "Sastra": "#6b4f2a",
  "Pengembangan Diri": "#2f6b52",
  "Sejarah": "#7a5c2e",
  "Teknologi": "#163a2b",
  "Sains": "#2b5a6b",
  "Ekonomi": "#5a4a1f"
};

/* ---------- 2. ELEMEN DOM ---------- */
const $ = (id) => document.getElementById(id);

const bookGrid = $("book-grid");
const emptyState = $("empty-state");
const resultInfo = $("result-info");
const searchInput = $("search");
const categorySelect = $("filter-category");
const sortSelect = $("sort");
const categoryGrid = $("category-grid");
const navToggle = $("nav-toggle");
const navMenu = $("nav-menu");
const modal = $("modal");

/* ---------- 3. FUNGSI BANTU ---------- */
const getCategories = () => [...new Set(books.map((b) => b.category))].sort();
const isAvailable = (book) => book.stock > 0;

// Cover utama dari Open Library; "default=false" membuat gambar kosong
// menghasilkan error sehingga fallback dapat berjalan.
function getCoverUrl(book) {
  return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`;
}

// Cover cadangan berupa SVG yang dibuat otomatis dari judul buku
function getFallbackCover(book) {
  const color = categoryColors[book.category] || "#1f4d3a";
  const words = book.title.split(":")[0].split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    if ((line + " " + word).trim().length > 14) {
      lines.push(line.trim());
      line = word;
    } else {
      line += " " + word;
    }
  });
  lines.push(line.trim());

  const text = lines
    .slice(0, 4)
    .map((l, i) => `<text x="150" y="${150 + i * 32}" text-anchor="middle" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#f5efe0">${l.replace(/&/g, "&amp;")}</text>`)
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450">
    <rect width="300" height="450" fill="${color}"/>
    <rect x="16" y="16" width="268" height="418" fill="none" stroke="#c9b27c" stroke-width="2"/>
    ${text}
    <line x1="90" y1="360" x2="210" y2="360" stroke="#c9b27c" stroke-width="2"/>
    <text x="150" y="395" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#c9b27c">${book.author.split("&")[0].trim().replace(/&/g, "&amp;")}</text>
  </svg>`;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// Jika gambar mana pun gagal dimuat, ganti dengan cover cadangan
document.addEventListener(
  "error",
  (e) => {
    const img = e.target;
    if (img.tagName !== "IMG" || !img.dataset.id || img.dataset.fallback) return;
    const book = books.find((b) => b.id === Number(img.dataset.id));
    if (!book) return;
    img.dataset.fallback = "true"; // cegah perulangan
    img.src = getFallbackCover(book);
  },
  true
);

/* ---------- 4. STATISTIK ---------- */
function animateCount(element, target) {
  const duration = 800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function renderStats() {
  animateCount($("stat-books"), books.length);
  animateCount($("stat-categories"), getCategories().length);
  animateCount($("stat-available"), books.filter(isAvailable).length);
}

/* ---------- 5. KATEGORI & FILTER ---------- */
function renderCategories() {
  categoryGrid.innerHTML = getCategories()
    .map((cat) => {
      const total = books.filter((b) => b.category === cat).length;
      return `
        <button class="category-card" type="button" data-category="${cat}">
          <span class="category-icon" aria-hidden="true">${categoryIcons[cat] || "📚"}</span>
          <strong>${cat}</strong>
          <small>${total} buku</small>
        </button>`;
    })
    .join("");
}

function renderFilterOptions() {
  categorySelect.innerHTML =
    `<option value="all">Semua Kategori</option>` +
    getCategories().map((cat) => `<option value="${cat}">${cat}</option>`).join("");
}

/* ---------- 6. KATALOG ---------- */
function getFilteredBooks() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  const sort = sortSelect.value;

  const result = books.filter((book) => {
    const matchKeyword =
      book.title.toLowerCase().includes(keyword) ||
      book.author.toLowerCase().includes(keyword);
    const matchCategory = category === "all" || book.category === category;
    return matchKeyword && matchCategory;
  });

  result.sort((a, b) => {
    switch (sort) {
      case "title-desc": return b.title.localeCompare(a.title, "id");
      case "year-asc": return a.year - b.year;
      case "year-desc": return b.year - a.year;
      default: return a.title.localeCompare(b.title, "id");
    }
  });

  return result;
}

function renderBooks() {
  const list = getFilteredBooks();

  bookGrid.innerHTML = list
    .map(
      (book, i) => `
      <article class="book-card" data-id="${book.id}" tabindex="0"
               role="button" aria-label="Lihat detail ${book.title}"
               style="animation-delay:${i * 40}ms">
        <div class="book-cover">
          <img src="${getCoverUrl(book)}" data-id="${book.id}"
               alt="Cover buku ${book.title}" loading="lazy">
        </div>
        <div class="book-info">
          <span class="tag">${book.category}</span>
          <h3>${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <div class="book-meta">
            <span>${book.year}</span>
            <span class="status ${isAvailable(book) ? "ok" : "no"}">
              ${isAvailable(book) ? "● Tersedia" : "● Tidak Tersedia"}
            </span>
          </div>
        </div>
      </article>`
    )
    .join("");

  const isEmpty = list.length === 0;
  emptyState.hidden = !isEmpty;
  resultInfo.textContent = isEmpty
    ? ""
    : `Menampilkan ${list.length} dari ${books.length} buku`;
}

function resetFilters() {
  searchInput.value = "";
  categorySelect.value = "all";
  sortSelect.value = "title-asc";
  renderBooks();
}

/* ---------- 7. MODAL DETAIL BUKU ---------- */
let lastFocused = null;

function openModal(id) {
  const book = books.find((b) => b.id === Number(id));
  if (!book) return;

  lastFocused = document.activeElement;

  const cover = $("modal-cover");
  delete cover.dataset.fallback;
  cover.dataset.id = book.id;
  cover.src = getCoverUrl(book);
  cover.alt = `Cover buku ${book.title}`;

  $("modal-category").textContent = book.category;
  $("modal-title").textContent = book.title;
  $("modal-author").textContent = `oleh ${book.author}`;
  $("modal-publisher").textContent = book.publisher;
  $("modal-year").textContent = book.year;
  $("modal-stock").textContent = `${book.stock} eksemplar`;
  $("modal-description").textContent = book.description;

  const status = $("modal-status");
  status.textContent = isAvailable(book) ? "Tersedia" : "Tidak Tersedia";
  status.style.color = isAvailable(book) ? "var(--success)" : "var(--danger)";

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  $("modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

/* ---------- 8. EVENT LISTENER ---------- */
// Pencarian, filter, dan pengurutan
searchInput.addEventListener("input", renderBooks);
categorySelect.addEventListener("change", renderBooks);
sortSelect.addEventListener("change", renderBooks);
$("reset-btn").addEventListener("click", resetFilters);

// Klik kartu buku (event delegation)
bookGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".book-card");
  if (card) openModal(card.dataset.id);
});

// Enter / Spasi pada kartu buku (aksesibilitas keyboard)
bookGrid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".book-card");
  if (card) {
    e.preventDefault();
    openModal(card.dataset.id);
  }
});

// Klik kartu kategori: terapkan filter lalu geser ke katalog
categoryGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".category-card");
  if (!card) return;
  searchInput.value = "";
  categorySelect.value = card.dataset.category;
  renderBooks();
  $("katalog").scrollIntoView({ behavior: "smooth" });
});

// Menutup modal: tombol close, klik area luar, dan tombol Escape
$("modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

// Menu navigasi mobile
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- 9. INISIALISASI ---------- */
function init() {
  $("year").textContent = new Date().getFullYear();
  renderStats();
  renderCategories();
  renderFilterOptions();
  renderBooks();
}

init();