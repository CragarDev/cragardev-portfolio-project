<nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.CragarDevLogo6} alt='logo' />
      </div>
      <h3>{windowWidth}</h3>
      <ul className='app__navbar-links'>
        {['home', 'about', 'projects', 'skills', 'testimonials', 'contact'].map(
          item => (
            <li key={`link-${item}`} className='app__flex p-text'>
              <div className='top'></div>
              <a href={`#${item}`}>{item}</a>
              <div className='bottom'></div>
            </li>
          )
        )}
      </ul>
      <div className='app__navbar-sites'>
        <a href='https://github.com/CragarDev' target={'_blank'}>
          <AiOutlineGithub />
        </a>
        <a href='https://www.linkedin.com/in/cragardev/' target={'_blank'}>
          <AiOutlineLinkedin />
        </a>
      </div>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                'home',
                'about',
                'skills',
                'projects',
                'testimonials',
                'contact'
              ].map(item => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href='https://github.com/CragarDev' target={'_blank'}>
                  <AiOutlineGithub />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/cragardev/'
                  target='_blank'
                >
                  <AiOutlineLinkedin />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>