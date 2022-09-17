import { Link } from "react-router-dom";

export default function Chapters() {
  const chapters = [
    { name: "Intro", path: "/1" },
    { name: "Wallet", path: "/2" },
    { name: "NFT", path: "/3" },
    { name: "Security", path: "/4" },
    { name: "DAOs", path: "/5" },
    { name: "DEFI", path: "/6" },
  ];

  return (
    <div className="container mx-auto pt-12 pb-12">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
          Kapitel
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-12">
        {chapters.map((chapter: any) => {
          return (
            <div className="col-span-4">
              <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <svg
                  className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                </svg>
                <Link
                  to={`/chapters${chapter.path}`}
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {chapter.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Go to this step by step guideline process on how to certify
                  for your weekly benefits:
                </p>
                <Link
                  to={`/chapters${chapter.path}`}
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  Jetzt beginnen
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
