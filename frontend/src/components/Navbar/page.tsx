'use client'
export default function Navbar() {
    const handleScroll = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="flex flex-col md:flex-row h-1/5 bg-white text-Y shadow-lg gap-4 justify-around items-center text-black">
        <img
          alt="logo"
          className="h-16"
          src="https://1000logos.net/wp-content/uploads/2021/03/Olympics-logo.png"
        />
        <ul className="flex flex-col md:flex-row gap-8 list-none font-bold items-center pb-2 md:pb-0">
          <li>
            <a
              href="/"
              // onClick={() => handleScroll('aboutus')}
              className="hover:text-violet-600 cursor-pointer"
            >
              Home
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              onClick={() => handleScroll('introduction')}
              className="hover:text-violet-600 cursor-pointer"
            >
              Introduction
            </a>
          </li> */}
          <li>
            <a
              href="/predictor"
              className="hover:text-violet-600 cursor-pointer"
            >
              Predictor
            </a>
          </li>
          <li>
            <a
              href="/graphs"
              className="hover:text-violet-600 cursor-pointer"
            >
              Graphs
            </a>
          </li>
        </ul>
      </div>
    );
  }
