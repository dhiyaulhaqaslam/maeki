import { motion } from "framer-motion";

export default function GIS() {
  const newsData = [
    {
      id: 1,
      title: "Tradisi Maulid di Sulawesi",
      author: "Ilham Furqan",
      views: 245,
      description:
        "Perayaan Maulid Nabi di Sulawesi dikenal dengan tradisi unik seperti makan bersama dan parade hias telur.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Kain Tenun Toraja Mendunia",
      author: "Siti Rahma",
      views: 180,
      description:
        "Kain tenun khas Toraja kini mulai diminati pasar internasional karena motifnya yang kaya makna budaya.",
      image:
        "https://images.unsplash.com/photo-1602526218679-3b19b6b8b80b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Seni Ukir Jepara Kembali Diminati",
      author: "Ahmad Fauzi",
      views: 392,
      description:
        "Kerajinan ukir kayu Jepara kini mengalami kebangkitan seiring meningkatnya minat terhadap produk lokal.",
      image:
        "https://images.unsplash.com/photo-1578301978018-3005759f48d4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Wayang Kulit Modern",
      author: "Dewi Kartika",
      views: 312,
      description:
        "Para seniman kini memadukan teknologi digital dengan wayang kulit, menciptakan pertunjukan yang menarik generasi muda.",
      image:
        "https://images.unsplash.com/photo-1597055181241-fb7d2b27c2b8?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-[40vh] overflow-hidden text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-30"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative z-10 text-center px-6 py-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            BUDAYA HARI INI
          </h1>
        </motion.div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsData.map((news) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {news.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {news.description}
                  </p>

                  {/* <a
                    href="#"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Lihat selengkapnya →
                  </a> */}
                  <p className="text-sm text-gray-500 mb-2">
                    Oleh {news.author} · {news.views}x dilihat
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
