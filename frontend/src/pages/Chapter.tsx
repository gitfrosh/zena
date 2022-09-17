import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Title from "../components/Chapter/Title";
import Layout from "../components/Layout";
import tree from "../images/tree.jpg"; // Tell webpack this JS file uses this image
import { mintState, walletOpenState } from "../utils/store";

const NFTStep1 = () => {
  return (
    <p className="p-12">
      Im Gegensatz zu fungiblen Token (z. B. ETH, SOL,..) ist ein NFT ein
      einzigartiger digitaler Vermögenswert, der nicht eins zu eins gegen einen
      anderen getauscht werden kann - nur der Besitznachweis wird auf der
      Blockchain festgeschrieben, das “Medium” dahinter (z. B. die Bilddatei des
      NFT-Kunstwerks), wird meist ganz normal auf einem Server gespeichert und
      kann hunderfach kopiert werden.
    </p>
  );
};

const NFTStep2 = () => {
  return (
    <p className="p-12">
      Minten bedeutet so viel wie Prägung. Digitale Dateien werden in
      verschlüsselte Sammlerstücke umgewandelt. Hochladen des NFTs in die
      jeweilige Blockchain Sobald digitale Objekte auf der Blockchain
      gespeichert sind, ist eine Umwandlung oder Löschung nicht mehr möglich.
    </p>
  );
};

const NFTMint = () => {
  const [shouldMint, setMint] = useRecoilState(mintState);
  const [open, setOpen] = useRecoilState(walletOpenState);

  return (
    <>
      <img style={{ display: "unset", width: 200 }} src={tree} alt="Baum" />
      <p className="p-12">
        Für NFT gibt es verschiedene Anwendungsbeispiele, digitale Kunst,
        Community, Events, Gaming, etc. Hier ist ein Impact NFT als Beispiel Mit
        dem Minten dieses Baum NFTs pflanzt die Community pro NFT einen Baum.
      </p>
      <button
        onClick={() => {
          setOpen(true);
          setMint(true);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Weiter
      </button>
    </>
  );
};

const NFTQuiz = () => {
  return <>Hier Quiz</>;
};

export default function Chapter() {
  const [step, setStep] = useState(1);
  let params = useParams();
  const NFT = () => {
    return (
      <div className="container pt-12">
        <Title title={"Kapitel 3: NFTs"} />
        {step === 1 && <NFTStep1 />}
        {step === 2 && <NFTStep2 />}
        {step === 3 && <NFTMint />}
        {step === 4 && <NFTQuiz />}
      </div>
    );
  };

  return (
    <Layout>
      <div className="mx-auto text-center">
        <div className="mx-auto max-w-3xl">
          {(params as any).chapterId === "3" && <NFT />}

          {(step === 1 || step === 2) && (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Weiter
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
