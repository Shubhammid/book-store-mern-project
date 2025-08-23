import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 py-20 px-6 md:px-12 ">
      <div className="md:w-1/2 w-full flex justify-center md:justify-end">
        <img 
          src={bannerImg} 
          alt="Books Banner" 
          className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Discover This Week’s <span className="text-indigo-600">New Releases</span>
        </h1>
        
        <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed">
          Refresh your bookshelf with the latest arrivals. From pulse-pounding
          thrillers to inspiring memoirs, explore stories that spark imagination
          and stay with you long after the last page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
          <button className="px-6 py-3 bg-primary text-black font-medium rounded-xl shadow-md hover:bg-yellow-500 transition">
            Subscribe
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition">
            Browse Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
