"use client"

import { fetchBlogCard } from '@/services';
import style from './BlogCard.module.css'
import Image from 'next/image';
import EmpiezaAhora from '@/components/button/EmpiezaAhora';
import { useState } from 'react';
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

const BlogCard = () => {
  const cards = fetchBlogCard().slice(-3);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const nextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length); // Ciclo al final
  };

  const prevCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); // Ciclo al principio
  };

  return (
    <div className={style.BlogCardContainer}>
      <div className={style.BlogCard}>
        <Image
          src={cards[activeCardIndex].imagen}
          className={style.BlogCard_Imagen}
          alt={cards[activeCardIndex].title}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,..."
        />
        <h4>{cards[activeCardIndex].date}</h4>
        <h3>{cards[activeCardIndex].title}</h3>
        <EmpiezaAhora type={5} />
      </div>
      <div className={style.BlogCard_Button}>
        <button className={style.Button} onClick={prevCard}><IoArrowBackOutline className={style.Icono} /></button>
        <button className={style.Button} onClick={nextCard}><IoArrowForward className={style.Icono} /></button>
      </div>

    </div>
  )
}

export default BlogCard