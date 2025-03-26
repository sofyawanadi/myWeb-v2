import StatsSection from "./stats";
import Image from "next/image";
export default function Hero() {
   const handleDownloadCv = () => {
      window.open("/cv.pdf", "_blank");
   };
   return (
      <div
         id="Hero"
         className="flex flex-col items-center justify-center h-[100vh] bg-gray-900 text-white">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl items-center">
            {/* Left Section */}
            <section className="bg-gray-900 text-white w-full">
               <div className="max-w-2xl text-left">
                  <p className="text-lg text-gray-400">Software Developer</p>
                  <h1 className="text-5xl font-bold mt-2">
                     Hello I’m <br />
                     <span className="text-green-400">Sofyan Wanadi</span>
                  </h1>
                  <p className="text-gray-400 mt-4">
                     As a software developer, I specialize in creating and
                     maintaining web applications, ensuring they are efficient,
                     scalable, and user-friendly. My role involves writing
                     clean, maintainable code, debugging issues, and
                     collaborating with cross-functional teams to deliver
                     high-quality software solutions.
                  </p>{" "}
                  <button
                     className="mt-6 px-6 py-2 bg-green-400 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                     onClick={handleDownloadCv}>
                     Download CV
                  </button>
               </div>
            </section>

            {/* Bagian Kanan */}
            <div className="flex justify-center">
               <Image
                  src="/test3.jpg"
                  width={500}
                  height={500}
                  alt="Hero Illustration"
                  className="w-3/5 max-w-sm md:max-w-md lg:max-w-lg rounded-full object-cover border border-dashed bg-white p-2 shadow-lg"
               />
               {/* <img
                  src="/test3.jpg"
                  alt="Hero Illustration"
                  className="w-3/5 max-w-sm md:max-w-md lg:max-w-lg rounded-full object-cover border border-dashed bg-white p-2 shadow-lg"
               /> */}
            </div>
         </div>
         <StatsSection />
      </div>
   );
}
