import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-blue-700">Java Distributed Systems & Big Data Engineer</h1>
        <p className="text-xl text-gray-600">Flow Global Software Technologies, Wilmington, DE</p>
        <p className="text-md text-gray-500 italic">Nov 2024 – Present</p>
        <div className="flex justify-center gap-6 mt-4 text-blue-600 text-2xl">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800"><FaLinkedin /></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800"><FaGithub /></a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-800"><FaEnvelope /></a>
        </div>
      </header>

      <Separator />

      <section>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">💼 Experience</h2>

        <Card className="bg-white shadow-md hover:shadow-xl transition-all mb-6">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Flow Global Software Technologies</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Built distributed crawling pipelines using Apache Nutch and Crawl4AI with AI-driven URL scoring.</li>
              <li>Summarized data using Bitnet LLM for real-time insights and reduced manual effort.</li>
              <li>Implemented bot-like session behavior and delay strategies for ethical crawling.</li>
              <li>Created proxy and geo-IP strategies to handle sensitive domains safely.</li>
              <li>Ensured ethical compliance using robots.txt and crawl delay configs.</li>
              <li>Maintained backend Git processes and clean version histories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">High Radius, Hyderabad</h3>
            <p className="text-md italic text-gray-500">Java Developer | May 2021 – Apr 2022</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Developed REST APIs with Node.js, Express.js and MongoDB backend.</li>
              <li>Used RabbitMQ and WebSockets for high-performance order handling.</li>
              <li>Secured apps with access/refresh tokens and OAuth 2.0 standards.</li>
              <li>Led backend for secure gateway application with tight permission policies.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">📚 Conference</h2>
        <Card className="bg-white shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Crowd Management System Using CNN & LSTM</h3>
            <p className="text-md text-gray-500">NIT Raipur | Dec 2021</p>
            <a href="https://link.springer.com/chapter/10.1007/978-3-031-13150-9_17" className="text-blue-500 underline" target="_blank">Springer Publication</a>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>95% accuracy in detecting violent vs non-violent crowd behavior.</li>
              <li>Used CNN for features, LSTM for temporal modeling with 98% prediction accuracy.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">🚀 Projects</h2>
        <Card className="bg-white shadow-md hover:shadow-xl transition-all mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Volunteer Management System</h3>
            <p className="text-md text-gray-500">UTA | Jan 2024</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Laravel & React-based admin dashboard for volunteer management.</li>
              <li>Included user tracking, messaging, OAuth login, PostgreSQL DB.</li>
              <li>Boosted efficiency and reduced administrative overhead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Privacy-Preserving Biometric Auth System</h3>
            <p className="text-md text-gray-500">SRM University | Mar 2022</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Used Fully Homomorphic Encryption for secure image vector storage.</li>
              <li>Model trained on 4000 grayscale samples for accuracy and privacy.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">🎓 Education</h2>
        <Card className="bg-white shadow-md hover:shadow-xl transition-all mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">University of Texas at Arlington</h3>
            <p className="text-md text-gray-500">Masters in Computer & Information Science | 2022–2024</p>
            <p className="text-gray-700">Relevant Courses: ML, AI, DAA, Data Mining, Web Data Management</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">SRM University, Amaravathi</h3>
            <p className="text-md text-gray-500">B.Tech in Computer Science | 2018–2022</p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">🛠 Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "Java", "React JS", "HTML", "CSS", "JavaScript", "Angular JS", "JSP", "Spring Boot", "OAuth", "Django", "Node JS", "RESTful APIs", "Postman", "Junit", "AWS", "Docker", "CI/CD", "MySQL", "NoSQL", "MongoDB"].map(skill => (
            <Badge key={skill} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium rounded-full shadow">{skill}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
