import OtpProcess from "./OtpProcess";

export default function Signin() {
  return (
    <div className=" border-teal-400 border-2  rounded-2xl flex justify-center">
      <form className=" w-2xl  form-font flex flex-col gap-4 p-2 m-3">
        <section className="flex flex-col gap-1">
          <label htmlFor="fullname" className="font-[Roboto] text-lg  text-slate-300">
            {" "}
            Full Name{" "}
          </label>
          <input
            className="w-full bg-slate-900 text-white placeholder-slate-400 
          border border-slate-700 rounded-lg px-4 py-2.5
          focus:ring-2
          focus:ring-teal-400"
            id="fullname"
            type="text"
            placeholder="Karan Bhatt"
          />
        </section>



        <section className="flex flex-col gap-1">
          <label htmlFor="email" className="font-[Roboto] text-lg  text-slate-300">
            Email
          </label>
          <input className="w-full bg-slate-900 text-white placeholder-slate-400 
          border border-slate-700 rounded-lg px-4 py-2.5
          focus:ring-2
          focus:ring-teal-400" id="email" type="email" placeholder="abc23@gmail.com" />
        </section>



        <section className="flex flex-col gap-1">
          <label htmlFor="Contact" className="font-[Roboto] text-lg text-slate-300">
            Contact
          </label>
          <input className="w-full bg-slate-900 text-white placeholder-slate-400 
          border border-slate-700 rounded-lg px-4 py-2.5
          focus:ring-2
          focus:ring-teal-400" id="Contact" type="tel" placeholder="+91-XXXXX-XXXXX" />
        </section>
        
        {/* <section><OtpProcess/></section> */}

        <section className="flex flex-col justify-center gap-3 p-0 m-0">
          <button
            type="button"
            className="font-[Roboto] p-1 cursor-pointer bg-green-600 border-2 border-green-950 font-bold text-black rounded-xl"
          >
            SEND OTP
          </button>
          <button
            type="button"
            className=" font-[Roboto] p-1 cursor-pointer bg-blue-400 border-2  border-blue-950 text-xl font-bold rounded-xl text-black"
          >
            Signin
          </button>
        </section>
      </form>
    </div>
  );
}
