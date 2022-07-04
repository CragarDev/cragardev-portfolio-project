import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <>
      <div className='app__navigation'>
        {['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map(
          (item, index) => (
            <a
              className='app__navigation-dot'
              href={`#${item}`}
              key={item + index}
              style={active === item ? { background: '#bf0b3b' } : {}}
            />
          )
        )}
      </div>
    </>
  )
}

export default NavigationDots
