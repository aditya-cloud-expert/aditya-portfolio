"use client";

import React, { useState } from 'react';
import { useReCaptcha } from "next-recaptcha-v3";
import { 
  Mail, Linkedin, MapPin, Phone, 
  Cloud, Server, Shield, GitBranch, 
  Boxes, Terminal, Rocket 
} from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const recaptchaToken = await executeRecaptcha("contact_form");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 4000);
  };


  const skills = [
    { icon: <Terminal className="w-5 h-5" />, name: 'Linux & Bash', color: 'from-cyan-500 to-blue-500' },
    { icon: <Cloud className="w-5 h-5" />, name: 'AWS & Azure', color: 'from-purple-500 to-pink-500' },
    { icon: <Boxes className="w-5 h-5" />, name: 'Docker & K8s', color: 'from-green-500 to-emerald-500' },
    { icon: <GitBranch className="w-5 h-5" />, name: 'CI/CD Pipelines', color: 'from-orange-500 to-red-500' },
    { icon: <Server className="w-5 h-5" />, name: 'Infrastructure', color: 'from-yellow-500 to-orange-500' },
    { icon: <Shield className="w-5 h-5" />, name: 'DevSecOps', color: 'from-red-500 to-pink-500' },
  ];

  const experience = [
    {
      title: 'DevOps Engineer',
      company: 'Synapze GmbH',
      period: 'Dec 2024 – Present',
      location: 'Landshut, Germany',
      highlights: [
        'Automated CI/CD for 10+ apps using GitHub Actions, Docker & Kubernetes',
        'Reduced deployment time by 60% with unified Helm charts',
        'Secured services with cert-manager & Let\'s Encrypt TLS'
      ]
    },
    {
      title: 'Infrastructure Engineer',
      company: 'Giesecke+Devrient',
      period: 'May 2024 – Jul 2024',
      location: 'Munich, Germany',
      highlights: [
        'Developed 5+ automation scripts (Bash/Python) with mTLS security',
        'Reduced complexity by 50% via Jenkins integration'
      ]
    },
    {
      title: 'DevOps Freelancer',
      company: 'Upwork',
      period: 'Jun 2023 – May 2024',
      location: 'Remote',
      highlights: [
        'Created 150+ DevOps assessment questions',
        'Assisted 5+ clients with AWS Lambda & serverless architectures'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center z-10">

          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
            ADITYA JOSHI
          </h1>

          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-cyan-500/50 mb-10"></div>

          <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-300">
            DevOps Engineer <span className="text-cyan-400">|</span> Cloud Architect
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Building scalable infrastructure and automating the future. Specialized in Kubernetes, CI/CD, and cloud-native solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-all">
              <Rocket className="w-5 h-5 inline mr-2" />
              Hire Me
            </a>

            <a href="mailto:aditya.cloud.expert@gmail.com" className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all">
              <Mail className="w-5 h-5 inline mr-2" /> Email Me
            </a>
          </div>

          <div className="flex justify-center gap-6 text-gray-400">
            <a href="https://www.linkedin.com/in/adityajoshi" target="_blank" className="hover:text-cyan-400">
              <Linkedin className="w-6 h-6" />
            </a>

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>Kaiserslautern, Germany</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-pink-400" />
              <span>+49 15730636810</span>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Tech Arsenal</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:scale-105 transition-all">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                  {skill.icon}
                </div>
                <p className="mt-3 font-semibold text-gray-200">{skill.name}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:scale-[1.01] transition-all">
                
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-cyan-400">{exp.company}</p>
                  </div>

                  <div className="text-gray-400 text-right">
                    <p>{exp.period}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2 ml-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-gray-300 flex gap-2">
                      <span className="text-purple-400">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">
              Certifications
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-8 bg-orange-500/10 border border-orange-600/30 rounded-xl hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-orange-400">AWS Solutions Architect</h3>
              <p className="text-gray-300">Associate Level (SAA-C03)</p>
            </div>

            <div className="p-8 bg-blue-500/10 border border-blue-600/30 rounded-xl hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-blue-400">Certified Kubernetes Admin</h3>
              <p className="text-gray-300">CKA – CNCF</p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT (unchanged) */}
      <section id="contact" className="relative py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
              Let's Build Together
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 font-semibold">Name</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold">Email</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 font-semibold">Message</label>
              <textarea
                required
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-bold text-white shadow-lg hover:scale-105 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." :
               status === "success" ? "✓ Message Sent!" :
               status === "error" ? "Error! Try again" :
               "Send Message"}
            </button>

          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-8 px-4 border-t border-gray-800 text-center text-gray-400">
        <p>© 2024 Aditya Vishal Joshi. Built with Next.js & Deployed on Vercel.</p>
      </footer>

    </div>
  );
}
