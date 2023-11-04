const PickNumber = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const handleError = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="">
      <p className="flex font-semibold text-red-500 text-xl justify-end">
        {error}
      </p>
      <div className="flex gap-6 mt-4">
        {numbers.map((value, index) => (
          <div
            className={`w-[72px] h-[72px] border border-black flex items-center justify-center ${
              value === selectedNumber
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            key={index}
            onClick={() => handleError(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <p className="font-bold text-2xl">Select Number</p>
      </div>
    </div>
  );
};

export default PickNumber;
