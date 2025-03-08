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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6440493235395!2d37.44766450979522!3d-0.535519435262581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18262de1107837db%3A0x78002a1d0de2acdd!2sEmbu%20Water%20and%20Sanitation%20Company%20Limited!5e0!3m2!1sen!2ske!4v1741094293289!5m2!1sen!2ske"
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
            Next to Embu Libraruy, Opp. Kindaruma building.
            <span className="font-bold text-red-600 ml-6 text-2xl">
              Phone :
            </span>
            <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
              +254 791 610239
            </span>
          </span>
        </p>
      </div>

      <div className="max-w-7xl my-4 p-3">
        <p className="capitalize gap-4 mt-4 items-center">
          <span className="font-bold text-red-600 text-2xl">
            Kiritiri satelite:-
          </span>
          <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
            <span className="font-bold text-red-600 ml-6 text-2xl">
              Phone :
            </span>
            <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
              +254 729 127437
            </span>
          </span>
        </p>
      </div>

      <div className="max-w-7xl my-4 p-3">
        <p className="capitalize gap-4 mt-4 items-center">
          <span className="font-bold text-red-600 text-2xl">
            Ena satelite:-
          </span>
          <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
            <span className="font-bold text-red-600 ml-6 text-2xl">
              Phone :
            </span>
            <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
              +254 706 865257
            </span>
          </span>
        </p>
      </div>

      <div className="max-w-7xl my-4 p-3">
        <p className="capitalize gap-4 mt-4 items-center">
          <span className="font-bold text-red-600 text-2xl">
            Kanyuambora satelite:-
          </span>
          <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
            <span className="font-bold text-red-600 ml-6 text-2xl">
              Phone :
            </span>
            <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
              +254 729 127434
            </span>
          </span>
        </p>
      </div>

      <div className="max-w-7xl mt-4 mb-10 p-3">
        <p className="capitalize  gap-4 mt-4 items-center">
          <span className="font-bold text-red-600 text-2xl">
            Gachoka satelite:
          </span>
          <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
            <span className="font-bold ml-6 text-red-600 text-2xl">
              Phone :
            </span>
            <span className="font-medium text-purple-500 dark:text-purple-400 text-2xl">
              +254 791 610239
            </span>
          </span>
        </p>
      </div>
    </>
  );
};

export default GoogleMap;
