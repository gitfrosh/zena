import { Disclosure } from "@headlessui/react";
import { BellIcon, WalletIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState, walletOpenState } from "../utils/store";

export default function App({ children }: any) {
  const [user, setUser] = useRecoilState(userState);
  const [isWalletOpen, setWalletOpen] = useRecoilState(walletOpenState);
  return (
    <>
      <div className="min-h-full">
        <div className="bg-indigo-600 pb-32">
          <Disclosure
            as="nav"
            className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none"
          >
            {() => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <div className="flex-shrink-0">
                        <Link to="/">
                          <span className="text-white">zena</span>
                        </Link>
                      </div>
                    </div>
                    <div className="lg:ml-4 lg:block">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-12 w-12" aria-hidden="true" />
                        </button>
                        <button
                          onClick={() => setWalletOpen(!isWalletOpen)}
                          type="button"
                          className="flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="sr-only">View wallet</span>
                          <WalletIcon
                            className="h-12 w-12"
                            aria-hidden="true"
                          />
                        </button>
                        <button className="flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-12 w-12 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="rounded-lg">{children}</div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
