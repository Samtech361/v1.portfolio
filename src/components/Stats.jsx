function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#e6f7f2] p-8 rounded">
        <h2 className="text-4xl font-bold text-[#1a1a4b] mb-1">1+</h2>
        <p className="text-gray-500 text-sm">YEARS OF EXPERIENCE</p>
      </div>
      <div className="bg-[#fcf0e4] p-8 rounded">
        <h2 className="text-4xl font-bold text-[#1a1a4b] mb-1">5+</h2>
        <p className="text-gray-500 text-sm">PROJECT COMPLETED</p>
      </div>
      <div className="bg-[#e6f0fe] p-8 rounded">
        <h2 className="text-4xl font-bold text-[#1a1a4b] mb-1">10+</h2>
        <p className="text-gray-500 text-sm">HAPPY CLIENTS</p>
      </div>
    </div>
  );
}

export default Stats;
