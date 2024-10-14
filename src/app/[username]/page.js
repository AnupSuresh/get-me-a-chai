import React from "react";
import Image from "next/image";

const Username = ({ params }) => {
  return (
    <>
      <div className="mb-8">
        <div className="cover relative container mx-auto p-4">
          <Image
            src={"/cover.gif"}
            alt="cover-img"
            height={100}
            width={100}
            className="w-full"
          ></Image>
          <div className="dp absolute sm:-bottom-[16%] sm:left-[44%] -bottom-[15%] left-[43%]">
            <Image
              src={"/cat.avif"}
              alt="profile-img"
              height={180}
              width={180}
              className="rounded-full w-20 sm:w-24 md:w-28 lg:w-36 xl:w-44"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 px-4">
          <h3 className="text-2xl font-bold">@{params.username}</h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Creating Animated art for VTT&apos;s
          </p>
          <ul className=" list-disc list-inside flex flex-col sm:flex-row  justify-center items-center gap-2 text-slate-400 text-sm sm:text-base">
            <li>14,132 members</li>
            <li>91 posts</li>
            <li>$17,050/release</li>
          </ul>
        </div>
      </div>
      <div className="line h-1 bg-white opacity-10"></div>
      <div className="payment container mx-auto p-4 py-14 flex flex-col justify-center lg:flex-row gap-3 w-[80%]">
        <div className="supporters bg-slate-800 p-10 rounded-lg lg:w-1/2">
          <h2 className="text-2xl font-bold mb-5">Supporters</h2>
          <ul className="flex flex-col gap-4 max-h-72 overflow-y-auto">
            <li className="flex gap-2 items-center">
              <Image
                src={"/pf.gif"}
                alt="pf-pic"
                height={30}
                width={30}
              ></Image>
              <p>
                Anup donated <span className="font-bold">$69</span> with the
                message &ldquo;Keep up the great work!&ldquo;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/pf.gif"}
                alt="pf-pic"
                height={30}
                width={30}
              ></Image>
              <p>
                Gadhi donated <span className="font-bold">$150</span> with the
                message &ldquo;This cause means a lot to me!&ldquo;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/pf.gif"}
                alt="pf-pic"
                height={30}
                width={30}
              ></Image>
              <p>
                Ashwin donated <span className="font-bold">$1000</span> with the
                message &ldquo;Happy to contribute!&ldquo;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/pf.gif"}
                alt="pf-pic"
                height={30}
                width={30}
              ></Image>
              <p>
                Gaurav donated <span className="font-bold">$10000</span> with
                the message &ldquo;Best of luck with the project!&ldquo;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/pf.gif"}
                alt="pf-pic"
                height={30}
                width={30}
              ></Image>
              <p>
                Anil donated <span className="font-bold">$10</span> with the
                message &ldquo;Every little bit helps!&ldquo;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/pf.gif"}
                alt="pf-pic"
                height={30}
                width={30}
              ></Image>
              <p>
                Awdhesh donated <span className="font-bold">$500</span> with the
                message &ldquo;Proud to support this!&ldquo;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/pf.gif"}
                alt="pf-pic"
                height={30}
                width={30}
              ></Image>
              <p>
                Ashwin donated <span className="font-bold">$1000</span> with the
                message &ldquo;Keep pushing forward!&ldquo;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/pf.gif"}
                alt="pf-pic"
                height={30}
                width={30}
              ></Image>
              <p>
                Abhilash donated <span className="font-bold">$1000</span> with
                the message &ldquo;Excited to see where this goes!&ldquo;
              </p>
            </li>
          </ul>
        </div>
        <div className="makePayment bg-slate-800 p-10 rounded-lg lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-5">Make a Payment</h2>
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              name="amount"
              id="amount"
              className="p-3 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600"
              placeholder="Enter Name"
            />
            <input
              type="text"
              name="amount"
              id="amount"
              className="p-3 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600"
              placeholder="Enter Message"
            />
            <input
              type="text"
              name="amount"
              id="amount"
              className="p-3 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600"
              placeholder="Enter Amount"
            />
            <button
              type="button"
              className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Pay
            </button>
          </div>
          <div className="flex gap-2 flex-col sm:flex-row mt-4 sm:mt-2">
            <button className="p-3 bg-slate-700 rounded-lg">Pay $10</button>
            <button className="p-3 bg-slate-700 rounded-lg">Pay $50</button>
            <button className="p-3 bg-slate-700 rounded-lg">Pay $100</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
