export default function Signin(){
    return (
        <div className=" border-teal-500 border-2 flex justify-center">
            <form className=" w-2xl border-4 border-amber-500 rounded-b-lg flex flex-col gap-4 p-0 m-0">
                <section className="flex flex-col gap-2">
                    <label htmlFor="fullname"> Full Name </label>
                    <input  id="fullname" type="text" placeholder="Karan Bhatt"/>
                </section>

                <section className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input  id="email" type="email" placeholder="abc23@gmail.com"/>
                </section>
                <section className="flex flex-col gap-2">
                    <label htmlFor="Contact">Contact</label>
                    <input  id= "Contact" type="tel" placeholder="+91-XXXXX-XXXXX" />
                </section>
                <button type="button" className="cursor-pointer bg-blue-400 border-blue-950 text-2xl text-black rounded-b-3xl">Send Otp</button>
            </form>
        </div>
    )
}