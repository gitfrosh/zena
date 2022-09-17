import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { useRecoilState } from "recoil";
import { mintState } from "../../utils/store";

export default function Minting() {
  const [shouldMint, setMint] = useRecoilState(mintState);
  if (!shouldMint) return null;

  return (
    <div className="rounded-md bg-yellow-50 p-4 mb-12">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Du bist gerade dabei, einen NFT zu minten.
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Diese Aktion würde 0.001 GoerliETH Gebühren kosten. Bitte gib die
              Transaktion frei.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
