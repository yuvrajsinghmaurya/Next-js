export default function Services() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">
            Web Development
          </h2>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">
            Mobile App Development
          </h2>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">
            Consulting Services
          </h2>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">
            Digital Marketing
          </h2>
        </div>
      </div>
    </div>
  );
}