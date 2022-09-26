import { Link } from "react-router-dom";

export default function Chapters() {
  const chapters = [
    { name: "Web3 Basics", path: "/1", url: "/Kachel-1_Web3-basics.jpg" },
    {
      name: "Blockchain und Token",
      path: "/2",
      url: "/Kachel-2_Blockchain.jpg",
    },
    { name: "NFT minten", path: "/3", url: "/kachel-4_mint.jpg" },
    {
      name: "Wallets / Schlüssel-verwahrung",
      path: "/4",
      url: "/kachel-3_wallet.jpg",
    },
    { name: "DAOs", path: "/5", url: "/Kachel-5_Dao.jpg" }
  ];

  return (
    <div className="container mx-auto pb-12">
      <div className="pb-1">
        <h2 className="text-2xl text-center font-bold mb-2 mt-5 leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
          Deine Lernkapitel
        </h2>

        <p className="text-lg font-medium text-center text-gray-600">
          Beginne jetzt deine Reise ins Web3!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-1">
        {chapters.map((chapter: any) => {
          return (
            <div className="col-span-4 md:col-span-2">
              <div className="p-6 border bg-white rounded-lg">
                <Link
                  to={`/chapters${chapter.path}`}
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-font dark:text-white">
                    {chapter.name}
                  </h5>
                </Link>
                <img src={chapter.url} alt="" className="" />
                <Link
                  to={`/chapters${chapter.path}`}
                  className="mt-3 inline-flex items-center text-blue-600 hover:underline w-full"
                >
                  <button className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded-full">
                    Los!
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
