import { useState } from "react";
import { useHistory } from "react-router-dom";
import Final from "../components/Onboarding/Final";
import Step1 from "../components/Onboarding/Step1";
import Step2 from "../components/Onboarding/Step2";
import Step3 from "../components/Onboarding/Step3";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const history = useHistory();

  return (
    <div className="grid h-screen place-items-center">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Final />}

      <button
        onClick={() =>
          step === 4 ? history.push("/dashboard") : setStep(step + 1)
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Weiter
      </button>
    </div>
  );
}
