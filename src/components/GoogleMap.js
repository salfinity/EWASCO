// components/GoogleMap.js

const GoogleMap = () => {
  return (
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
  );
};

export default GoogleMap;
