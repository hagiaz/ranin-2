// src/pages/Legal.jsx
import React from "react";

const Legal = () => {
  return (
    <div className="min-h-[910px] w-full bg-white dark:bg-ranin-white py-12 font-jost">
      <div className="max-w-screen-xl mx-auto p-5">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-faculty text-ranin-main dark:text-ranin-main">
                Legalitas
              </h2>
              <p className="font-jost text-black sm:text-xl dark:text-black">
                Berikut beberapa data legalitas perusahaan. 
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a>
                    NPWP
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a>1000 0000 0089 3679</a>
                    </span>
                  </div>
                </div>
              </article>

              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a>
                    NIB
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a>1704250063128</a>
                    </span>
                  </div>
                </div>
              </article>

              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a>
                    Akta Notaris Pendirian
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a>No. 01 Tanggal 05 Oktober 2020<br></br>Notaris Suparman Hasyim, S.H, SP.N, M.H</a>
                    </span>
                  </div>
                </div>
              </article>

            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a>
                    Akta Notaris Perubahan
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a>No. 20 Tanggal 26 Maret 2025<br></br>Notaris Suparman Hasyim, S.H, SP.N, M.H</a>
                    </span>
                  </div>
                </div>
            </article>

            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a>
                    No. SK Kemenkumham
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a>AHU 0052088.AH.01.01.TAHUN 2020</a>
                    </span>
                  </div>
                </div>
            </article>

            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-main dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a>
                    No. SK Kemenkumham
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a>AHU-AH.01.09-0192342</a>
                    </span>
                  </div>
                </div>
            </article>

            
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;
