import Image from 'next/image'
import Link from 'next/link';
import paper from '/public/assets/icons/paper.png'
import linkedin from '/public/assets/icons/linkedin.png'
import HomePageLogo from './homePageLogo';

const nav = () => {
  return (
    <nav className="flex-between w-full mb-16 relative pl-5 pt-5 pr-5">

      {/* Displays the homepage logo which is a button that links to home and refreshes page */}
      <HomePageLogo />

      {/* Buttons which change page background color (TO BE IMPLEMENTED) */}
      {/* <div>
        <Pink />
      </div> */}

      {/* LinkedIn logo which links to my LinkedIn profile */}
      <Link 
        href="https://www.linkedin.com/in/vivian-lopez-7a4293243/" 
        className="relative flex flex-row items-center justify-center"
      >
        <Image 
            src={linkedin}
            alt="linkedin link image"
            width={40}
            height={40}
            className="pr-1.5"
        />
        {/* <p className="font-inter text-gray-200 invisible md:visible">By Vivian</p> */}
      </Link>
    </nav>
  )
}

export default nav