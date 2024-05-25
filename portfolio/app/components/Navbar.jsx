import { appleImg } from '../../public/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className='flex justify-between'>
        <div className='flex space-x-4'>
          <Image src={appleImg} />
          <h2>staicu,viviana</h2>
        </div>
        
        <div>
          {['work', 'play', 'archive'].map((item, index, array) => (
            // The React.Fragment is used to group the elements together without adding an extra node to the DOM. The key prop is moved to the React.Fragment because keys should be on the outermost element returned by map.
            <React.Fragment key={item}>
              <Link 
              href={'/' + item} // you can combine strings like this 
              className='hover:text-gray-500 hover:underline'>
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