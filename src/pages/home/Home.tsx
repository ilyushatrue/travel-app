import React, { useEffect, useRef, useState } from "react";
import "./home.scss";

interface IProps {
  activeSection: any;
  setActiveSection: Function;
  setShouldScroll: Function;
  shouldScroll: boolean;
}
export function Home({
  activeSection,
  setActiveSection,
  setShouldScroll,
  shouldScroll,
}: IProps) {
  const [isMenuInitiated, setIsMenuInitiated] = useState(false);
  const overview = useRef<any>(null);
  const upcomingTours = useRef<any>(null);
  const feedbacks = useRef<any>(null);
  const whyChooseUs = useRef<any>(null);
  const contacts = useRef<any>(null);

  const sections = [
    { section: overview, header: "Добро пожаловать!", id: "overview" },
    {
      section: upcomingTours,
      header: "Ближайшие экскурсии",
      id: "upcomingTours",
    },
    { section: feedbacks, header: "Отзывы", id: "feedbacks" },
    { section: whyChooseUs, header: "Почему мы", id: "whyChooseUs" },
    { section: contacts, header: "Контакты", id: "contacts" },
  ];

  window.onscroll = () => {
    setTimeout(()=>{
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.section.current.offsetTop - 150;
        const height = section.section.current.offsetHeight;
        if (top >= offset && top < offset + height) {
          if (shouldScroll) setActiveSection(section.id);
          if (section.id !== activeSection) {
            setShouldScroll(false);
          }
        }
      });
    }, 200)
  };

  const scrollToSection = (elementRef: any) => {
    if (!shouldScroll) return;
    const currSection = sections.find((x) => x.id === elementRef)?.section;
    if (!currSection) return;
    window.scrollTo({
      top: currSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (shouldScroll) {
      scrollToSection(activeSection);
    }
  }, [activeSection]);

  return (
    <div className="tours_container">
      {sections.map((section, index) => (
        <>
          <section key={index + 1} id={section.id} ref={section.section}>
            {section.header}
          </section>
        </>
      ))}
    </div>
  );
}
