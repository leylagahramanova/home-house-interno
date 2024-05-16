"use client"
import React, { useEffect, useState } from 'react';
import { TypeProf, profs, SkillInfo, qaInfo } from '@/app/components/profpage/Profs/profs';
import { BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts'; // Import components from recharts library
import Banner from '@/app/components/profsinglepage/Banner/Banner';
import Cards from '@/app/components/aboutpage/Cards/Cards';
import Contacts from '@/app/components/contactpage/Contacts/Contacts';
import Talk from '@/app/components/aboutpage/Talk/Talk';
import '@/app/components/button.css'
import './single.css'
import mail from '@/app/img/mail.png';
import phone from '@/app/img/phone.png';
import earth from '@/app/img/earth.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import '@/app/components/contactpage/Contacts/Contacts.css'
import NotFound from '@/app/not-found';
const ProfPage: React.FC = () => {
  const [profData, setProfData] = useState<TypeProf | undefined>(undefined);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
 useEffect(() => {
    const currentPath = window.location.pathname;
    const professionalsId = currentPath.split('/').pop(); 
 const foundProfData: TypeProf | undefined = profs.find(prof => prof.id.toString() === professionalsId);
    setProfData(foundProfData);
  }, []); 

  const toggleQuestion = (questionId: number) => {
    setActiveQuestion(prevQuestionId => (prevQuestionId === questionId ? null : questionId));
  };

  if (!profData) {
    return <div><NotFound/></div>;
  }

  return (
    <div>
      <Banner />
      <div className="sigle">
        <div className="man">
          <Image src={profData.image} alt="" />
        </div>

        <div className="sigle-card">
          <h3>{profData.name}</h3>
          <p>{profData.profession}</p>
          <div className="text">
            <p>{profData.description}</p>
          </div>
          <div className="vertical">
            <ul>
              <li><Image src={mail} alt="Email Icon" /><a href={`mailto:${profData.mail}`}>{profData.mail}</a></li>
              <li><Image src={phone} alt="Phone Icon" /><a href={`tel:${profData.phone}`}>{profData.phone}</a></li>
              <li><Image src={earth} alt="Website Icon" /><a href={profData.site}>{profData.site}</a></li>
            </ul>
          </div>
          <div className="horisontal">
            <ul>
            {profData.links.facebook && (
                                    <a href={profData.links.facebook.face} target="_blank" rel="noopener noreferrer">
                                        <Image src={profData.links.facebook.icon} alt="Facebook Icon"/>
                                    </a>
                                )}
                                {profData.links.twitter && (
                                    <a href={profData.links.twitter.face} target="_blank" rel="noopener noreferrer">
                                        <Image src={profData.links.twitter.icon} alt="Twitter Icon"/>
                                    </a>
                                )}
                                {profData.links.linkedin && (
                                    <a href={profData.links.linkedin.face} target="_blank" rel="noopener noreferrer">
                                        <Image src={profData.links.linkedin.icon} alt="LinkedIn Icon"/>
                                    </a>
                                )}
            </ul>
          </div>
        </div>
      </div>
      <div className="biography">
        <div className="biography-text">
          <h2>Short Biography​</h2>
          <p>{profData.biography}</p>
        </div>
        <div className="skills-info">
          <div className="chart-container">
            <h3>Simplicity and Functionality</h3>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam
              eu sem vitae turpmaximus.posuere in belief. There are many
              variations of passages of Lorem Ipsum from available, but
              the majority have suffered alteration in some form,
              njecthumour</p>
            <p>There are many variations of passages of Lorem Ipsum from
              available, but the majority have suffered alteration in
              some form, njecthumour</p>
            <div className="chart">
              <BarChart
                layout="vertical" // Set the layout to vertical for horizontal bars
                width={600}
                height={200}
                data={getSkillsData(profData.percentages)}
                margin={{ top: 5, bottom: 5, left:40 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" /> {/* Use number type for horizontal layout */}
                <YAxis dataKey="name" type="category" /> {/* Use category type for vertical layout */}
                <Legend />
                <Bar dataKey="percentage" fill="#CDA274" />
              </BarChart>
            </div>
          </div>
          <div className="skills-qa">
            <h3>Question And Answer</h3>
            <p>Lorem ipsum dolor sit amet, adipiscing
               Aliquam eu sem vitae turpmaximus.posuere in.</p>
            {Object.values(profData.questions).map((question: qaInfo, index: number) => (
              <div key={index} className="qa">
                <div className={`question ${activeQuestion === index ? '  active' : ' plus'}`} onClick={() => toggleQuestion(index)}>
                  <h4>{question.question}</h4>
                </div>
                {activeQuestion === index && (
                  <div className="answer">
                    <p>{question.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cards />
      <Talk />
    </div>
  );
};

export default ProfPage;

// Function to transform skill data for the chart
const getSkillsData = (percentages: { [key: string]: SkillInfo }): SkillInfo[] => {
  return Object.values(percentages);
};
