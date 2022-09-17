import { Link } from "react-router-dom";

export default function Chapters() {
  const chapters = [
    { name: "Web3 Basics", path: "/1", url: "/Kachel-1_Web3-basics.jpg" },
    {
      name: "Blockchain und Token",
      path: "/2",
      url: "/Kachel-2_Blockchain.jpg",
    },
    { name: "NFT", path: "/3", url: "/blockchain-and-token.png" },
    {
      name: "Wallets / Schlüssel-verwahrung",
      path: "/4",
      url: "/blockchain-and-token.png",
    },
    { name: "NFT minten", path: "/5", url: "/blockchain-and-token.png" },
    { name: "DAOs", path: "/6", url: "/blockchain-and-token.png" },
    { name: "DEFI und REFI", path: "/6", url: "/blockchain-and-token.png" },
  ];

  return (
    <div className="container mx-auto pt-12 pb-12">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl text-center font-bold mb-2 mt-4 leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
          Deine Lernkapitel
        </h2>
        <p className="text-lg font-medium text-center text-gray-600">
          Beginne jetzt deine reise ins Web3! Beginne mit den ersten beiden{" "}
          <br />
          Einführungskapiteln und such dir dann dein Lieblingsthema aus.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-12">
        {chapters.map((chapter: any) => {
          return (
            <div className="col-span-2">
              <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
                <img src={chapter.url} alt="" />
                <Link
                  to={`/chapters${chapter.path}`}
                  className="mt-3 inline-flex items-center text-blue-600 hover:underline w-full"
                >
                  Los!
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
