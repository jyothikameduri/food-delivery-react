const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-64 h-72 bg-gray-200 rounded-xl animate-pulse">
            <div className="w-full h-40 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
