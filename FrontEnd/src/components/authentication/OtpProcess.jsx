// import React, { useState } from 'react';
// import OtpInput from 'react-otp-input';
// const OtpProcess= () => {
//    const [otp, setOtp] = useState('');
//    return (
//        <div>
//            <h3>Enter OTP</h3>
//            <OtpInput
//                value={otp}
//                onChange={setOtp}
//                numInputs={6}
//                separator={<span>-</span>}
//                inputStyle={{
//                    width: '40px',
//                    height: '40px',
//                    margin: '5px',
//                    textAlign: 'center',
//                    border: '1px solid #ccc',
//                    borderRadius: '4px',
//                }}
//            />
//        </div>
//    );
// };
// export default OtpProcess;
export default function OtpProcess({ phone }) {

  
  return (
    <div className="w-full h-full flex flex-col justify-center gap-4 text-center">
      <div
        className=" mx-auto
  flex flex-col items-center justify-center
  border-2 border-teal-400 rounded-xl
  w-[360px] h-[360px]
  gap-4"
      >
        <p className="text-white">OTP sent to {phone}</p>

        <section className="flex justify-center">
          <input
            placeholder="Enter OTP"
            className="bg-slate-800 text-white p-2 rounded m-2 h-10 w-3/4  text-center"
          />
        </section>

        <section className="flex flex-row content-center justify-center gap-4">
          <button className="bg-green-500 font-bold rounded p-2 cursor-pointer">
            Verify OTP
          </button>
          <button className="bg-blue-300 font-bold rounded p-2 cursor-pointer">
            Resend OTP
          </button>
        </section>
      </div>
    </div>
  );
}
