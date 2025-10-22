import logo from '../assets/images/ranin-logo.webp';

export default function Footer() {
  return (
    <footer className="bg-ranin-dark px-0 lg:px-10 font-jost w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="Logo" />
              <span className="self-center text-md md:text-2xl font-semibold font-faculty whitespace-nowrap text-white">
                RANIN MANDIRI INDONESIA
              </span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-2 w-full lg:w-1/3 lg:text-right">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-ranin-white">Alamat</h2>
              <ul className="text-ranin-white font-medium">
                <li className="mb-4">
                  <a>Jl. Bintara 17, Perum. Pondok Nurmaya 2 No. 10, Bintara Jaya, Bekasi Barat, Kota Bekasi</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-ranin-white">Ranin</h2>
              <ul className="text-ranin-white font-medium">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">Tentang Kami</a>
                </li>
                <li>
                  <a href="/info#contact" className="hover:underline">Hubungi Kami</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-black lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-ranin-broken sm:text-center">
            © 2025 <a href="/" className="hover:underline">RANIN MANDIRI INDONESIA</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
