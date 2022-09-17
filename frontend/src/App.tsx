import { RecoilRoot } from "recoil";
import { useState } from "react";
import Onboarding from "./pages/Onboarding";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chapter from "./pages/Chapter";
import WalletModal from "./components/Wallet/Modal";
// import IpfsRouter from "ipfs-react-router";

export default function App() {
  const [isLoggedIn,] = useState(false);

  const Start = () => {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-indigo-600 xl:inline">Z3na</span>{' '}
                  <span className="block xl:inline">Dein Start ins Web3 </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Hype, Scam, Revolution? 
                Web3, Blockchain, Kryptographie, Token, NFT und vieles mehr
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to={isLoggedIn ? "/home" : "/onboarding"}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      {isLoggedIn ? "Weiter geht's" : "Los geht's"}
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Elternhinweis
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
    );
  };

  return (
    <RecoilRoot>
      <BrowserRouter>
        <WalletModal />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path={`/chapters/:chapterId`} element={<Chapter />} />
          <Route path="*" element={<>Not found.</>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
