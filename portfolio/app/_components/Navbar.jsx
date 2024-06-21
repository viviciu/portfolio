import { appleImg } from '../../public/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className='flex justify-between text-lg sticky top-0'>
        <div className='flex space-x-4'>
          {/* Apple logo if you wanted to throw in a logo i guess */}
          {/* <Image src={appleImg} /> */}
          <Link 
          href='/'>STAICU, VIVIANA</Link>
        </div>
        
        <div>
          {['Play', 'MyDeepestDarkestThoughts'].map((item, index, array) => (
            // The React.Fragment is used to group the elements together without adding an extra node to the DOM. The key prop is moved to the React.Fragment because keys should be on the outermost element returned by map.
            <React.Fragment key={item}>
              <Link 
              href={'/' + item} // you can combine strings like this 
              className='hover:text-white hover:underline'>
                {item}
              </Link>
              {index < array.length - 1 && ', '}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar