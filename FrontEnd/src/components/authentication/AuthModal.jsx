import { useState } from "react";
import Signin from "./Signin";
import OtpProcess from "./OtpProcess";
import { useEffect } from "react";
import { auth, googleProvider } from "../index";
import { signInWithPopup } from "firebase/auth";


export default function AuthModal({ onClose }) {
  const [step, setStep] = useState("signin"); // signin | otp
  const [phone, setPhone] = useState("");

  const handleGoogleSignin = async () => {
    try {
      console.log("Opening Google popup...");
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google User:", user.displayName);
      console.log("Popup success");
      onClose(); // close modal on success
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999]
bg-black/60 backdrop-blur-md
flex items-center justify-center"
    >
      <div
        className=" relative
    bg-slate-900/95
    border border-teal-400
    rounded-2xl
    shadow-2xl
    w-full max-w-md h-max
    p-6
    flex flex-col"
      >
        <h1 className="text-2xl font-semibold text-white text-center tracking-wide">
          Plan <span className="text-teal-400 mx-1">•</span>
          Pack <span className="text-teal-400 mx-1">•</span>
          Go
        </h1>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white cursor-pointer"
        >
          ✕
        </button>
        {step === "signin" && (
          <Signin
            onSendOtp={(number) => {
              setPhone(number);
              setStep("otp");
            }}
            onGoogleSignin={() => {
              console.log("Google handler reached AuthModal");
              handleGoogleSignin();
            }}
          />
        )}
        {step === "otp" && <OtpProcess phone={phone} />}
      </div>
    </div>
  );
}
