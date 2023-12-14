import React, { useEffect, useRef, useState } from "react";
import "./home.scss";
import NavigationBar from "../../components/layout/header/NavigationBar";
import { IMenuItem } from "../../components/layout/header/IMenuItem";
import { ClassNames } from "@emotion/react";

interface IProps {
  activeSection: any;
}
export function Home({ activeSection }: IProps) {
  const [currentSection, setCurrentSection] = useState<any>(null);
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

  const scrollToSection = (elementRef: any) => {
    const currSection = sections.find((x) => x.id === elementRef)?.section;
    console.log(currSection);
    console.log(elementRef);
    if (!currSection) return;
    window.scrollTo({
      top: currSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCurrentSection(activeSection);
    scrollToSection(activeSection)
  }, [activeSection]);

  return (
    <div className="tours_container">
      {sections.map((section, index) => (
        <>
          <section
            key={index + 1}
            id={section.id}
            ref={section.section}
            onClick={() => scrollToSection(currentSection)}
          >
            {section.header}
          </section>
        </>
      ))}
    </div>
  );
}
