import { useState } from 'react';

const Info = () => {
  // State for expanded FAQ items (can expand multiple)
  const [expanded, setExpanded] = useState([]);

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // collapse if open
        : [...prev, index] // expand otherwise
    );
  };

  const faqList = [
    {
      question: 'Apa layanan utama yang ditawarkan?',
      answer:
        'Kami menyediakan layanan pengurusan transportasi darat, pengadaan barang dan jasa, serta berbagai bantuan legalitas dokumen usaha, termasuk paket izin usaha, PB-UMKU, Sertifikat Laik Higiene Sanitasi (SLHS), serta berbagai dokumen lainnya sesuai kebutuhan klien.',
    },
    {
      question: 'Siapa yang dapat menggunakan layanan ini?',
      answer:
        'Layanan kami terbuka untuk semua kalangan — mulai dari pelaku usaha mikro, kecil, dan menengah (UMKM), hingga perusahaan yang membutuhkan bantuan profesional.',
    },
    {
      question: 'Apa keuntungan menggunakan jasa konsultan legalitas seperti kami?',
      answer:
        'Dengan pengalaman dan pemahaman mendalam terhadap prosedur administrasi, kami membantu Anda menghemat waktu, menghindari kesalahan dokumen, dan memastikan seluruh proses berjalan sesuai dengan peraturan yang berlaku.',
    },
    {
      question: 'Berapa lama proses pengurusan dokumen biasanya berlangsung?',
      answer:
        'Waktu penyelesaian tergantung pada jenis dokumen dan kelengkapan persyaratan. Namun, kami selalu berkomitmen untuk menyelesaikan setiap pengurusan dengan cepat dan efisien, sambil menjaga akurasi dan legalitasnya.',
    },
    {
      question: 'Apakah saya harus datang langsung ke kantor untuk mengurus dokumen?',
      answer:
        'Tidak selalu. Kami menyediakan layanan konsultasi dan pengurusan secara daring (online) untuk memudahkan Anda, terutama bagi klien yang berada di luar daerah. Namun, beberapa dokumen mungkin memerlukan tanda tangan atau verifikasi langsung sesuai ketentuan.',
    },
    {
      question: 'Apakah layanan ini sudah mencakup biaya resmi dari instansi terkait?',
      answer:
        'Setiap paket layanan memiliki rincian biaya yang berbeda. Kami akan menjelaskan secara transparan mengenai biaya jasa dan biaya resmi (jika ada) sebelum proses dimulai, agar tidak ada biaya tersembunyi.',
    },
  ];

  return (
    <div className="min-h-[910px] w-full bg-ranin-white py-12 font-jost">
      {/* FAQ Section */}
      <div id="faq" className="w-10/12 mx-auto">
        <h1 className="font-faculty text-3xl lg:text-4xl text-ranin-main text-center mt-16 mb-10">
          Pertanyaan <span className="text-black">Sering Diajukan (FAQ)</span>
        </h1>

        <div className="flex flex-col md:flex-row flex-wrap">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="expandable-div p-6 rounded-lg border border-gray-200 shadow-md bg-ranin-main border-gray-700 p-6 mt-3 w-full md:w-[48%] mx-0 md:mx-1"
            >
              <h4 className="mb-5 font-faculty text-ranin-white">{faq.question}</h4>
              <p
                className="reveal cursor-pointer text-blue-400 hover:text-ranin-dark"
                onClick={() => toggleExpand(index)}
              >
                {expanded.includes(index) ? 'Tutup Jawaban' : 'Buka Jawaban'}
              </p>
              <div
                className={`answer mt-3 transition-all duration-300 ${
                  expanded.includes(index) ? 'block' : 'hidden'
                }`}
              >
                <p className="pb-6 text-ranin-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-5" id="contact">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-faculty text-ranin-main dark:text-ranin-main">
                Let's connect!
              </h2>
              <p className="font-jost text-black sm:text-xl dark:text-black">
                Anda bisa terhubung dan menemukan kami pada tautan berikut:
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* EMAIL */}
              <article className="p-6 rounded-lg border border-gray-200 shadow-md bg-ranin-main border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-white hover:underline">
                  <a href="mailto:raninmandiriindonesia@gmail.com" target="_blank" rel="noreferrer">
                    EMAIL
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-white">
                      <a href="mailto:raninmandiriindonesia@gmail.com">raninmandiriindonesia@gmail.com</a>
                    </span>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:raninmandiriindonesia@gmail.com"
                    className="inline-flex items-center font-medium text-white hover:underline"
                  >
                    Visit
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>

              {/* WHATSAPP */}
              <article className="p-6 rounded-lg border border-gray-200 shadow-md bg-ranin-main border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-white hover:underline">
                  <a href="https://wa.me/6281297551225" target="_blank" rel="noreferrer">
                    WHATSAPP
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-white">
                      <a href="https://wa.me/6281297551225">6281297551225</a>
                    </span>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/6281297551225"
                    className="inline-flex items-center font-medium text-white hover:underline"
                  >
                    Visit
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>

              {/* INSTAGRAM */}
              <article className="p-6 rounded-lg border border-gray-200 shadow-md bg-ranin-main border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-white hover:underline">
                  <a href="https://www.instagram.com/ranin_konsultan" target="_blank" rel="noreferrer">
                    INSTAGRAM
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-white">
                      <a href="https://www.instagram.com/ranin_konsultan">ranin_konsultan</a>
                    </span>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/ranin_konsultan"
                    className="inline-flex items-center font-medium text-white hover:underline"
                  >
                    Visit
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
