import React from 'react';
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero heroImage="/assets/images/hero.jpg"/>
      <h1 className={styles.bigRedFont}>Home</h1>
      <p>This is the landing page for out Next.js app.</p>
    </>
  )
}