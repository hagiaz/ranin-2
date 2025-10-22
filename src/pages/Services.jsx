// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-[910px] w-full bg-ranin-white dark:bg-ranin-white py-12 font-jost">
      <div className="max-w-screen-xl mx-auto p-5">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-faculty text-gray-900 dark:text-ranin-main">
                Layanan Kami
              </h2>
              <p className="text-black sm:text-xl dark:text-black">
                Berikut adalah beberapa jasa layanan yang kami tawarkan.
              </p>
            </div>

            <div>
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700 mb-5">
                <h2 className="mb-2 text-2xl font-faculty bold tracking-tight text-gray-900 dark:text-white">
                  <Link to="/features/jasa-transportasi">Jasa Transportasi</Link>
                </h2>
                <p className="my-5 text-justify dark:text-gray-200">
                  Kami dapat menangani transportasi darat yang aman, cepat, dan tepat waktu. Dengan armada beragam & terawat sesuai kebutuhan, kami melayani solusi pengiriman skala kecil maupun besar dengan jaminan keamanan.
                </p>
              </article>

              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700 mb-5">
                <h2 className="mb-2 text-2xl font-faculty bold tracking-tight text-gray-900 dark:text-white">
                  <Link to="/features/pengurusan-legalitas">Jasa Pengurusan Legalitas Dokumen</Link>
                </h2>
                <p className="my-5 text-justify dark:text-gray-200">
                  Kami juga melayani pengurusan perizinan usaha & dokumen legal perusahaan, layanan konsultasi & pendampingan regulasi/administrasi. Proses cepat, akurat, dan sesuai hukum.
                </p>
              </article>

              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700 mb-5">
                <h2 className="mb-2 text-2xl font-faculty bold tracking-tight text-gray-900 dark:text-white">
                  <Link to="/features/pengadaan">Pengadaan Barang dan Jasa</Link>
                </h2>
                <p className="my-5 text-justify dark:text-gray-200">
                  Kami melayani dan memfasilitasi penyediaan kebutuhan barang & jasa untuk perusahaan/instansi. Dengan proses pengadaan yang transparan, efisien dan sesuai standar kualitas, kami menjadi solusi tepat guna untuk mendukung bisnis & proyek Anda.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
