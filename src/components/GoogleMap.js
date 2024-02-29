// components/GoogleMap.js

const GoogleMap = () => {
  return (
    <>
      <div className="itents-center max-w-6xl justify-center mx-auto">
        <h1 className="font-bold mb-10 text-2xl max-w-4xl sm:text-3xl md:text-4xl text-cyan-950 dark:text-cyan-500 text-center">
          In maroon, is the location of our offices. Don’t panic- we’ve got you
          covered!
        </h1>
        <iframe
          className="itents-center justify-center mx-auto mb-10"
          src="https://www.google.com/maps/d/u/0/embed?mid=1qCo5Ak-xnqp6DyyenyIhM1hpNU46CCw&ehbc=2E312F"
          width="100%"
          height="480"
        ></iframe>
      </div>
      <div className="max-w-7xl p-3">
        <p className="capitalize mt-4 items-center">
          <span className="font-bold text-red-600 text-2xl">
            Embu Town Head Office:-
          </span>
          <span className="font-medium text-purple-500 dark:text-purple-400  text-2xl">
            Kamutungi House, Kamuketha off Daya Road.
            <span className="font-bold text-red-600 ml-6 text-2xl">
              Phone :
            </span>
            <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
              0792920 900 / 0704 491 657
            </span>
          </span>
        </p>
      </div>

      <div className="max-w-7xl my-4 p-3">
        <p className="capitalize gap-4 mt-4 items-center">
          <span className="font-bold text-red-600 text-2xl">
            Ishiara Branch:-
          </span>
          <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
            Opposite Daima Sacco, Ishiara Town
            <span className="font-bold text-red-600 ml-6 text-2xl">
              Phone :
            </span>
            <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
              0792 920 900 / 0704 491 657
            </span>
          </span>
        </p>
      </div>

      <div className="max-w-7xl mt-4 mb-10 p-3">
        <p className="capitalize  gap-4 mt-4 items-center">
          <span className="font-bold text-red-600 text-2xl">
            Nairobi Branch:
          </span>
          <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
            Park Road next to Park Road Mosque
            <span className="font-bold ml-6 text-red-600 text-2xl">
              Phone :
            </span>
            <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
              0792 920 900 / 0704 491 657
            </span>
          </span>
        </p>
      </div>
    </>
  );
};

export default GoogleMap;
