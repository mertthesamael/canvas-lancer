import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import herobg from "@/_assets/herobg.png"
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Link from 'next/link';
interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({  }) => {
  return (
    <section id='hero' className={styles.heroSection}>
        <Image src={herobg} alt='Hero Bg' fill style={{objectFit:'cover'}}/>
        <div className={styles.heroSection__inner}>
        <div className={styles.heroSection__inner__welcomeText}>
            <h4>Welcome To <span> Canvas Lancer</span></h4>
            <h1>Designing the Future with <span>Canvas Lancer</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur. Aliquam quisque cursus proin adipiscing quis diam. Eu fringilla elit commodo nec aliquet. Augue pharetra nibh co</p>
        </div>
        <div className={styles.heroSection__inner__buttons}>
          <Link href={'#contact'}>
            <PrimaryButton text='Hire Us'/>
          </Link>
          <Link href={'#projects'}>
            <PrimaryButton text='View Portfolio' style='white'/>
          </Link>
        </div>
        </div>
    </section>
  )
}

export default HeroSection;