export default function Stats() {
  return (
    <div className="container mx-auto pt-12">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <p>Kapitel</p>
          <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              style={{ width: "45%" }}
              className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
            ></div>
          </div>
        </div>

        <div className="col-span-3">
          <p>Punkte</p>
          <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              style={{ width: "45%" }}
              className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
