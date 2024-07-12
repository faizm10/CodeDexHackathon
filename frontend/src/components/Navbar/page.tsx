'use client'
export default function Navbar() {
    const handleScroll = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="flex h-20 bg-white text-Y shadow-lg gap-4 justify-around items-center text-black">
        <img
          alt="logo"
          className="h-4/5"
          src="https://1000logos.net/wp-content/uploads/2021/03/Olympics-logo.png"
        />
        <ul className="flex gap-8 list-none font-bold">
          <li>
            <a
              href="#"
              onClick={() => handleScroll('aboutus')}
              className="hover:text-violet-600 cursor-pointer"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleScroll('introduction')}
              className="hover:text-violet-600 cursor-pointer"
            >
              Introduction
            </a>
          </li>
          <li>
            <a
              href="/predictor"
              className="hover:text-violet-600 cursor-pointer"
            >
              Predictor
            </a>
          </li>
        </ul>
      </div>
    );
  }
  