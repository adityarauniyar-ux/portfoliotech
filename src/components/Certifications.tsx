import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Web Development",
    issuer: "coursera",
    date: "Nov 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/DDY48SQKTZ3B?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    image: "https://i.postimg.cc/N98H3Ysx/WD-Coursera-Certificate-page-0001.jpg",
  },
  {
    title: "Cyber Security Internship",
    issuer: "Cisco",
    date: "May 2024",
    link: "https://drive.google.com/file/d/15xJFIWbQWmUhu5QzqB_IDBg6tGoNixRu/view",
    image: "https://i.postimg.cc/xqYHKk5p/Cyber-Security-Internship-page-0001.jpg",
  },
  {
    title: "Artificial intelligence Internship",
    issuer: "Edunet Foundation",
    date: "May 2025",
    link: "https://drive.google.com/file/d/1-59jSgeLgMqiqSebf9beAtpb8m6qNDoX/view",
    image: "https://i.postimg.cc/r024Zzkm/edunet-internship-certificate.jpg",
  },
  {
    title: "Web Development Internship",
    issuer: "Pregrad",
    date: "Feb 2024",
    link: "https://drive.google.com/file/d/1-wSEsObOjhofQc2-KCqIF22IBwLbxj4k/view",
    image: "https://i.postimg.cc/5j3zpxk4/Pregrad-certificate-of-Internship-page-0001.jpg",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (<SectionBackground>
    <section id="certifications">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="Credentials that back up the skills I apply in real-world scenarios.">Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  </SectionBackground>
  );
}
