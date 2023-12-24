import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';  // Import useRouter instead of usePathname
import { menuSlide } from '../../app/home/anim';
import Link from './Link/Link';

const navItems = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {  // Rename the component to start with an uppercase letter

  const router = useRouter();  // Use useRouter hook to get the current pathname
  const [selectedIndicator, setSelectedIndicator] = useState(router.pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(router.pathname) }} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <div className={styles.footer}>
          <a href='https://github.com/ANNI69'>GitHub</a>
          <a href='https://www.instagram.com/_exotic.anii/'>Instagram</a>
          <a href='https://twitter.com/AniruddhNagare'>X</a>
          <a href='https://www.linkedin.com/in/aniruddh-nagare-698787208/'>LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}
