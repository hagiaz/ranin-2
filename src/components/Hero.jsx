import logo from '../assets/images/ranin-logo.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="flex flex-col lg:flex-row text-white lg:mt-12">
        <div className="flex-grow lg:h-screen text-center font-jost grid place-items-center mx-auto w-full lg:w-1/3 pt-24 lg:pt-0 pb-16 lg:pb-0 bg-gradient-to-b lg:bg-gradient-to-r from-ranin-white to-ranin-main">
          <img className="pt-8 w-1/2 sm:w-1/4 lg:w-3/4 mx-auto drop-shadow-xl" src={logo} alt="Dashboard" />
        </div>

        <div className="flex-grow lg:h-screen text-left mx-auto grid place-items-center lg:w-1/2 pt-12 lg:pt-6 pb-16 lg:pb-0 px-10 lg:px-12 bg-ranin-main">
          <div>
            <h1 className="font-faculty font-bold text-3xl lg:text-4xl drop-shadow-xl">
              RANIN KONSULTAN & OUTSOURCING
            </h1>
            <h3 className="font-jost font-medium text-sm sm:text-lg pt-8">
              PT. Ranin Mandiri Indonesia hadir sebagai mitra terpercaya dalam menyediakan layanan transportasi darat, pengurusan legalitas dokumen, serta pengadaan barang dan jasa. Kami berkomitmen mendukung kelancaran bisnis pelanggan melalui solusi yang efisien, tepat, dan sesuai kebutuhan.
            </h3>
            <h3 className="font-jost font-medium text-sm sm:text-lg pt-8">
              Dengan dukungan tim profesional yang berintegritas dan berpengalaman, kami senantiasa memberikan layanan bernilai tambah. Tujuan kami adalah membangun kepercayaan jangka panjang dan menjadi partner strategis bagi setiap pertumbuhan bisnis.
            </h3>
            <h3 className="font-jost font-medium text-sm sm:text-lg pt-8">
              Tujuan kami sederhana: memberikan solusi yang tepat dan efisien untuk mempermudah bisnis Anda. Rekam jejak kami menjadi bukti bahwa kami selalu berusaha memberikan hasil terbaik dan melampaui harapan klien.
            </h3>
            <div className="pt-8">
              <a
                href="/info#contact"
                className="mt-8 px-5 py-3 rounded-lg font-faculty text-ranin-white bg-ranin-dark hover:bg-sigrax-yellow shadow-xl"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
