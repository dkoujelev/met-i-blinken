import {
  FaRegMap,
  FaUtensils,
  FaTableTennis,
  FaHome,
  FaGraduationCap,
  FaRegClock,
  FaDownload
} from "react-icons/fa";
import React from "react";

export type Resource = {
  title: string;
  link: string;
  icon: React.ReactNode;
};

export const resources: Resource[] = [
  {
    title: "Fadderuke",
    link: "https://student.oslomet.no/fadderuker-ingenior-teknologi-og-data",
    icon: <p>13. Aug</p>
  },
  {
    title: "Studiestart",
    link:
      "https://student.oslomet.no/anvendt-data-og-informasjonsteknologi-acit",
    icon: <p>19. Aug</p>
  },
  {
    title: "Studentslippet",
    link: "https://studentslippet.no/",
    icon: <p>24. Aug</p>
  },
  {
    title: "Grupperom",
    link: "https://student.oslomet.no/grupperom",
    icon: <FaRegClock />
  },
  {
    title: "Programvare",
    link: "https://student.oslomet.no/grupperom",
    icon: <FaDownload />
  },
  {
    title: "Studentweb",
    link: "https://fsweb.no/studentweb/login.jsf?inst=FSHIOA",
    icon: <FaGraduationCap />
  },
  {
    title: "MazeMap",
    link:
      "https://use.mazemap.com/#v=1&zlevel=1&left=10.7153450&right=10.7543490&top=59.9261840&bottom=59.9165320&campusid=53",
    icon: <FaRegMap />
  },
  {
    title: "Middag",
    link: "https://www.sio.no/mat-og-drikke",
    icon: <FaUtensils />
  },
  {
    title: "Book bane",
    link: "https://www.sio.no/trening/haller-og-baner/book-hall-eller-bane#/",
    icon: <FaTableTennis />
  },
  {
    title: "SiO Bolig",
    link: "https://www.sio.no/minside/min-okonomi/boligokonomi",
    icon: <FaHome />
  }
];
