import Image from 'next/image'
import Link from 'next/link';
import paper from '/public/assets/icons/paper.png'

const nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-7 relative">
        <Link href="/" className="absolute left-0 top-10">
            <Image 
                src={paper}
                width={50}
                height={50}
            />
        </Link>
    </nav>
  )
}

export default nav