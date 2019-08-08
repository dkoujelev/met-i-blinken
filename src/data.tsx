import {
  FaRegMap,
  FaUtensils,
  FaTableTennis,
  FaHome,
  FaGraduationCap,
  FaRegClock,
  FaDownload,
  FaEnvelope,
  FaMicrosoft,
  FaClipboardList
} from "react-icons/fa";
import React from "react";

export type Resource = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

export const resources: Resource[] = [
  {
    title: "Fadderuke",
    url: "https://student.oslomet.no/fadderuker-ingenior-teknologi-og-data",
    icon: <p>13. Aug</p>
  },
  {
    title: "Studiestart",
    url:
      "https://student.oslomet.no/anvendt-data-og-informasjonsteknologi-acit",
    icon: <p>19. Aug</p>
  },
  {
    title: "Studentslippet",
    url: "https://studentslippet.no/",
    icon: <p>24. Aug</p>
  },
  {
    title: "Canvas",
    url: "https://oslomet.instructure.com",
    icon: <FaClipboardList />
  },
  {
    title: "Epost",
    url: "https://outlook.office365.com/owa/?realm=hioa.no",
    icon: <FaEnvelope />
  },
  {
    title: "Office 365",
    url: "https://login.microsoftonline.com",
    icon: <FaMicrosoft />
  },
  {
    title: "Grupperom",
    url: "https://tp.uio.no/oslomet/rombestilling/",
    icon: <FaRegClock />
  },
  {
    title: "Programvare",
    url:
      "https://portal.azure.com/?Microsoft_Azure_Education_correlationId=dbfec94a-07b1-481c-90eb-b2545a05d280#blade/Microsoft_Azure_Education/EducationMenuBlade/software",
    icon: <FaDownload />
  },
  {
    title: "Studentweb",
    url: "https://fsweb.no/studentweb/login.jsf?inst=FSHIOA",
    icon: <FaGraduationCap />
  },
  {
    title: "MazeMap",
    url:
      "https://use.mazemap.com/#v=1&zlevel=1&left=10.7153450&right=10.7543490&top=59.9261840&bottom=59.9165320&campusid=53",
    icon: <FaRegMap />
  },
  {
    title: "Middag",
    url: "https://www.sio.no/mat-og-drikke",
    icon: <FaUtensils />
  },
  {
    title: "Book bane",
    url: "https://www.sio.no/trening/haller-og-baner/book-hall-eller-bane#/",
    icon: <FaTableTennis />
  },
  {
    title: "SiO Bolig",
    url: "https://www.sio.no/minside/min-okonomi/boligokonomi",
    icon: <FaHome />
  }
];
