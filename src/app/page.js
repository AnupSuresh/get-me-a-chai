import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="line h-1 bg-white opacity-10"></div>
      <div className="mcon container flex flex-col justify-center items-center text-white h-[40vh] p-8 py-14 pt-2 gap-8 mx-auto">
        <div className="flex justify-center items-end font-bold text-3xl md:text-5xl">
          <span className="text-center">Buy me a Chai!</span>
          {/* <img src="/picmix.com_1819794.gif" width={80} alt="tea-gif" className="" /> */}
          <Image
            src={"/picmix.com_1819794.gif"}
            alt="tea-gif"
            width={120}
            height={120}
          ></Image>
        </div>
        <p className="text-center md:text-lg">
          A Crowdfunding platform for creators. Get funded by your Friends, Fans
          and Followers.
        </p>
        <div className="flex justify-center items-center gap-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Get Started!
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Read More!
          </button>
        </div>
      </div>
      <div className="line h-1 bg-white opacity-10"></div>
      <div className="container mx-auto text-white">
        <h1 className=" text-xl md:text-2xl font-bold text-center my-8 md:my-10 px-4">
          Your Fans can buy you a Chai!
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 pb-8 px-4">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={"/test.gif"}
              alt="group-gif"
              height={180}
              width={180}
              className="rounded-full bg-slate-900 md:w-40"
            ></Image>
            <h5 className="font-bold md:text-2xl">Fans want to help</h5>
            <p className="text-sm md:text-base text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center mt-0 relative">
            {/* <div className="flex justify-center items-center relative md:w-64 md:h-44"> */}
            <Image
              src={"/giphy.webp"}
              height={100}
              width={100}
              alt="fans-gif"
              className="md:w-50 w-44"
            ></Image>
            {/* </div> */}
            <div className="flex flex-col justify-center items-center relative md:bottom-10 bottom-6">
              <h5 className="font-bold md:text-2xl">Fans want to help</h5>
              <p className="text-sm md:text-base text-center">
                Your fans are available for you to help you
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={"/team.png"}
              height={140}
              width={140}
              alt="fans-gif"
              className="md:w-40"
            ></Image>

            <h5 className="font-bold md:text-2xl">Fans want to help</h5>
            <p className="text-sm md:text-base text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>
      <div className="line h-1 bg-white opacity-10"></div>
      <div className="container mx-auto text-white flex flex-col justify-center items-center">
        <h1 className=" text-xl md:text-2xl font-bold text-center my-8 md:my-10 px-4">
          Learn more about us
        </h1>
        <div className="w-full max-w-full lg:w-1/2 aspect-video mb-10 px-5">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/LaLvVc1sS20?si=Qq72vctnOn4MqTcj"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="line h-1 bg-white opacity-10"></div>
    </>
  );
}
