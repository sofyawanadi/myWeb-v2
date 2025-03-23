import { Twitter, YouTube, RssFeed } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
   return (
      <div className="flex flex-col items-center justify-center bg-gray-700 py-10">
         {/* Text */}
         <h2 className="text-white text-2xl font-[cursive] mb-4">
            Follow me on
         </h2>

         {/* Icons */}
         <div className="flex space-x-4">
            <div
               className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl hover:bg-gray-600 transition"
               onClick={() =>
                  window.open(
                     "https://www.linkedin.com/in/sofyan-wanadi/",
                     "_blank"
                  )
               }>
               <LinkedInIcon fontSize="large" />
            </div>
            <div
               className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl hover:bg-gray-600 transition"
               onClick={() =>
                  window.open(
                     "https://www.instagram.com/sofyan_wanadi01/",
                     "_blank"
                  )
               }>
               <InstagramIcon fontSize="large" />
            </div>
            <div
               className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl hover:bg-gray-600 transition"
               onClick={() =>
                  window.open("https://github.com/sofyawanadi", "_blank")
               }>
               <GitHubIcon fontSize="large" />
            </div>
         </div>
      </div>
   );
}
