import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { userState, walletOpenState } from "../../utils/store";
import { useRecoilState } from "recoil";

export default function Modal() {
  const [open, setOpen] = useRecoilState(walletOpenState);
  const [user, setUser] = useRecoilState(userState);
  if (!open) return null;

  return (
    <div className="absolute z-50 w-full md:inset-0 h-modal md:h-full grid h-screen place-items-center">
      <div id="medium-modal" tabIndex={-1}>
        <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {user.name}'s Wallet
              </h3>
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="medium-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <CurrencyDollarIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">
                    Kontostand
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">
                    0.00211 GoerliETH
                  </p>
                </dd>
                <div className="flex items-center space-x-2">
                  <button
                    data-modal-toggle="medium-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Ich brauche mehr Coins!
                  </button>
                  <button
                    data-modal-toggle="medium-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Coins versenden!
                  </button>
                </div>
                <div
                  className="inset-0 p-12 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {user.name}'s NFTs
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Workcation is a property rental website. Etiam ullamcorper
                    massa viverra consequat, consectetur id nulla tempus.
                    Fringilla egestas justo massa purus sagittis malesuada.
                  </p>
                  <p className="p-6">--</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
