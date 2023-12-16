import React, { useEffect, useRef, useState } from "react";
import "./home.scss";

interface IProps {
  activeSection: any;
  assignActiveSection: Function;
  assignShouldScroll: Function;
  shouldScroll: boolean;
}
export function Home({
  activeSection,
  assignActiveSection,
  assignShouldScroll,
  shouldScroll,
}: IProps) {
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
    const activateSection = (section: any, disableScroll: boolean = false) => {
      const top = window.scrollY;
      const offsetTop = section.section.current.offsetTop - 200;
      const offsetHeight = section.section.current.offsetHeight;
      if (top >= offsetTop && top < offsetTop + offsetHeight) {
        assignActiveSection(section.id);
        if (disableScroll) {
          assignShouldScroll(false);
        }
      }
    };
    sections.forEach((section) => {
      if (shouldScroll) {
        if (section.id === activeSection) {
          activateSection(section, true);
        }
      } else {
        activateSection(section);
      }
    });
  };

  const scrollToSection = (elementRef: any) => {
    const currSection = sections.find((x) => x.id === elementRef)!.section;
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
