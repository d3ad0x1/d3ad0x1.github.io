import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // показываем стрелку, если прокрутили вниз > 50px
      setIsVisible(scrollTop > 50);

      // проверяем, достигнут ли низ страницы
      setIsBottom(scrollTop + windowHeight >= docHeight - 10);
    };

    handleScroll(); // проверка при загрузке
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    if (isBottom) {
      // если внизу — скроллим в начало
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // ищем следующий блок
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      const next = Array.from(sections).find(
        (sec) => sec.offsetTop > scrollY + 50
      );
      if (next) {
        next.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={scrollToNext}
      className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary text-white shadow-lg transition-all duration-300 z-50 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
    >
      {isBottom ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
    </button>
  );
};

export default ScrollArrow;
