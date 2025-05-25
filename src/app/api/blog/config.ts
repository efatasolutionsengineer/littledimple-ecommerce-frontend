// Dummy blog data
function generateDummyContent() {
  const contents = [
    `<h2>Pendahuluan</h2>
    <p>Perawatan kulit yang tepat merupakan investasi jangka panjang untuk kesehatan dan kecantikan Anda. Dalam artikel ini, kita akan membahas berbagai aspek penting dalam skincare routine.</p>
    <h3>Mengapa Skincare Penting?</h3>
    <p>Kulit adalah organ terbesar tubuh yang membutuhkan perawatan khusus. Tanpa perawatan yang tepat, kulit dapat mengalami berbagai masalah seperti:</p>
    <ul>
      <li>Jerawat dan komedo</li>
      <li>Kulit kering dan kusam</li>
      <li>Penuaan dini</li>
      <li>Hiperpigmentasi</li>
    </ul>
    <blockquote>
      <p>"Investasi terbaik adalah investasi untuk kesehatan kulit Anda"</p>
    </blockquote>
    <p>Mari kita bahas lebih detail tentang langkah-langkah perawatan yang tepat untuk mendapatkan kulit sehat dan glowing.</p>`,

    `<h2>Review Produk</h2>
    <p>Setelah menggunakan produk ini selama 4 minggu, saya dapat melihat perubahan signifikan pada kondisi kulit. Berikut adalah detail pengalaman penggunaan produk:</p>
    <h3>Tekstur dan Sensasi</h3>
    <p>Produk ini memiliki tekstur ringan yang mudah menyerap ke dalam kulit. Tidak lengket dan nyaman digunakan sehari-hari.</p>
    <h3>Hasil yang Terlihat</h3>
    <ul>
      <li>Kulit lebih cerah setelah 2 minggu penggunaan</li>
      <li>Tekstur kulit lebih halus</li>
      <li>Jerawat berkurang signifikan</li>
    </ul>
    <p>Overall, produk ini sangat recommended untuk daily skincare routine Anda.</p>`,

    `<h2>Tren Kecantikan 2024</h2>
    <p>Industri kecantikan terus berkembang dengan inovasi-inovasi terbaru. Berikut adalah tren yang akan mendominasi tahun 2024:</p>
    <h3>Skinimalism</h3>
    <p>Fokus pada rutinitas skincare yang simpel namun efektif. Menggunakan produk multi-fungsi dengan kandungan aktif yang tepat.</p>
    <h3>Clean Beauty</h3>
    <p>Produk dengan bahan alami dan ramah lingkungan semakin diminati. Konsumen lebih peduli pada sustainability dan dampak produk terhadap lingkungan.</p>
    <blockquote>
      <p>"Less is more dalam perawatan kulit modern"</p>
    </blockquote>
    <p>Mari ikuti perkembangan tren sambil tetap memperhatikan kebutuhan kulit Anda.</p>`
  ];

  return contents[Math.floor(Math.random() * contents.length)];
}

function generateDummyAuthor() {
  const authors = [
    {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      name: "Michelle Park",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  ];
  return authors[Math.floor(Math.random() * authors.length)];
}

function generateDummyArticles(count: number) {
  const categories = ['tips', 'review', 'trends'];
  const thumbnails = [
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be", 
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    "https://images.unsplash.com/photo-1571875257727-256c39da42af"
  ];

  const articles = [];
  
  for(let i = 1; i <= count; i++) {
    const title = `Sample Article ${i}`;
    const slug = title.toLowerCase().replace(/ /g, '-');
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    articles.push({
      id: i,
      title,
      slug,
      category,
      publishedDate: new Date(2024, 0, i).toISOString().split('T')[0],
      content: generateDummyContent(),
      thumbnail: thumbnails[Math.floor(Math.random() * thumbnails.length)],
      author: generateDummyAuthor()
    });
  }

  return articles;
}

// Generate articles once and cache them to avoid regenerating on every request
const CACHED_ARTICLES = generateDummyArticles(50);
export const blogArticles = CACHED_ARTICLES;

export const categories = Array.from(new Set(blogArticles.map(article => article.category)));