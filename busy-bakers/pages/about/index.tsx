import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-10 flex flex-col items-center">
      <div className="relative w-full flex flex-col items-center mb-8">
        <div className="w-full h-40 sm:h-56 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-xl flex items-center justify-center shadow-lg relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 rounded-full p-4 flex items-center justify-center shadow-xl">
            <Image
              src="/assets/icons/busy-bakers.svg"
              alt="Busy Bakers Logo"
              width={300}
              height={100}
              className="w-90 h-40"
            />
          </div>
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-amber-700">
        Our Story
      </h1>
      <div className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-2xl">
        <p className="mb-4">
          Busy Bakers began in 2019, right in our mother&#39;s cozy kitchen. What
          started as a weekend hobby—baking cakes and cookies for family and
          friends—quickly blossomed into a passion for sharing joy through
          delicious treats. Our mother’s old oven, the scent of vanilla, and the
          laughter of siblings became the foundation of our journey.
        </p>
        <p className="mb-4">
          As word spread, neighbors and friends started placing orders, and soon
          our kitchen was bustling with activity. We learned, experimented, and
          perfected our recipes, always guided by the warmth and love that
          filled our home. By 2021, we moved into our first small bakery, but we
          never forgot our roots.
        </p>
        <p>
          Today, Busy Bakers is a thriving bakery known for its creative cakes,
          cookies, and pastries. Our mission remains the same: to bring people
          together with every bite, just like we did in our mother’s kitchen.
          Thank you for being part of our story!
        </p>
      </div>
    </div>
  );
};

export default About;
