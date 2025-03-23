import { Link } from "react-scroll";
export default function Navbar() {
   return (
      <>
         <nav className="bg-my-blue text-white py-4 px-30 md:px-38 lg:px-46">
            {/* <div className="px-8 md:px-16 lg:px-24"> */}
            <div className="container mx-auto flex justify-between items-center">
               {/* Logo */}
               <a href="#" className="text-xl font-bold">
                  MyLogo
               </a>

               {/* Menu Navigasi */}
               <ul className="hidden md:flex space-x-6">
                  <li>
                     <Link
                        to="Hero"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer">
                        Home
                     </Link>
                     {/* <a href="#Hero" className="hover:text-gray-200">
                        Home
                     </a> */}
                  </li>
                  <li>
                     <Link
                        to="Career"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer">
                        Career
                     </Link>
                     {/* <a href="#Career" className="hover:text-gray-200">
                        Career
                     </a> */}
                  </li>
                  <li>
                     <Link
                        to="Portofolio"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer">
                        Portofolio
                     </Link>
                     {/* <a href="#Portofolio" className="hover:text-gray-200">
                        Portofolio
                     </a> */}
                  </li>
                  {/* <li>
                     <a href="#" className="hover:text-gray-200">
                        Contact
                     </a>
                  </li> */}
               </ul>

               {/* Tombol Mobile Menu (Opsional) */}
               {/* <button className="md:hidden p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}
            </div>
         </nav>
      </>
   );
}
