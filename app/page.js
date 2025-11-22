'use client'
import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Phone, Code, Cloud, Server, Shield, GitBranch, Boxes, Terminal, Rocket, CheckCircle, XCircle, Award, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        console.error('Error:', data);
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const skills = [
    { 
      category: 'Operating System',
      items: ['Linux', 'Ubuntu', 'CentOS'],
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      category: 'Scripting Languages',
      items: ['Bash', 'Python', 'Shell'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      category: 'Version Control',
      items: ['Git', 'GitHub', 'GitLab'],
      icon: <GitBranch className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    { 
      category: 'Automation Tools',
      items: ['Jenkins', 'GitHub Actions', 'GitLab CI'],
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      category: 'Security',
      items: ['OWASP', 'Trivy', 'SonarQube'],
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    { 
      category: 'Cloud Services',
      items: ['AWS', 'Azure', 'GCP'],
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500'
    },
    { 
      category: 'Containerization',
      items: ['Docker', 'Kubernetes', 'Helm'],
      icon: <Boxes className="w-6 h-6" />,
      color: 'from-cyan-500 to-teal-500'
    },
    { 
      category: 'IaC & Config Management',
      items: ['Terraform', 'Ansible', 'CloudFormation'],
      icon: <Server className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      category: 'Monitoring & Logging',
      items: ['Prometheus', 'Grafana', 'New Relic'],
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      color: 'from-pink-500 to-rose-500'
    },
  ];

  const experience = [
    {
      title: 'WerkStudent DevOps Engineer',
      company: 'Synapze GmbH',
      period: 'Dec 2024 – Present',
      location: 'Landshut, Germany',
      highlights: [
        'Designed and automated a CI/CD pipeline using GitHub Actions and Docker to build, package, and deploy 10+ applications to Kubernetes clusters, including core services (MongoDB, MinIO, RabbitMQ) and monitoring stacks (Prometheus, Grafana) via Helm charts',
        'Secured 5+ inter-service communication with cert-manager, Let\'s Encrypt TLS certificates, and NGINX ingress controller configurations for end-to-end encryption',
        'Streamlined client deployments by packaging the entire infrastructure into a unified Helm chart, reducing setup time by 60% while ensuring scalability and observability'
      ],
      tech: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'MongoDB', 'MinIO', 'RabbitMQ', 'Prometheus', 'Grafana', 'cert-manager', 'NGINX']
    },
    {
      title: 'Werkstudent Infrastructure and Operation',
      company: 'Giesecke+Devrient advance52 GmbH',
      period: 'May 2024 – Jul 2024',
      location: 'Munich, Germany',
      highlights: [
        'Developed 5+ scripts in Bash and Python for environmental automation, implementing unit tests and mTLS security, reducing manual tasks significantly',
        'Integrated the scripts in the Jenkins environment to reduce the complexity and accessing time by 50%',
        'Implemented automated testing frameworks ensuring 95% code coverage for infrastructure automation scripts'
      ],
      tech: ['Bash', 'Python', 'Jenkins', 'mTLS', 'Unit Testing', 'Automation']
    },
    {
      title: 'DevOps Freelancer',
      company: 'Upwork',
      period: 'Jun 2023 – May 2024',
      location: 'Remote, Worldwide',
      highlights: [
        'Crafted DevOps assessment questions covering Jenkins, Linux, Git, GitHub, Docker, Prometheus, Grafana, Ansible, Kubernetes, and AWS',
        'Composed over 150+ questions, significantly improving test coverage for essential DevOps skills',
        'Assisted 5+ clients with serverless architectures using AWS Lambda and DynamoDB, and administered infrastructure across multiple subnets and VPCs'
      ],
      tech: ['AWS Lambda', 'DynamoDB', 'VPC', 'Serverless', 'Jenkins', 'Docker', 'Kubernetes', 'Ansible']
    },
    {
      title: 'Associate Engineer',
      company: 'ElasticRun',
      period: 'Jul 2022 – Nov 2022',
      location: 'Pune, India',
      highlights: [
        'Directed end-to-end ETL processes with Pentaho, including local, Doha (Beta), and production deployment',
        'Implemented Terraform infrastructure as code for GCP resources, managing compute instances, storage buckets, and networking components',
        'Automated deployment pipelines using Jenkins, integrating with GCP Cloud Build for continuous delivery',
        'Increased job efficiency by 10% through optimizations, directly impacting data processing speed and reliability',
        'Addressed station failures and facilitated implementation of changes at production level through CRs (Change Requests), enhancing system stability by 10%'
      ],
      tech: ['Pentaho', 'GCP', 'Terraform', 'Jenkins', 'Cloud Build', 'ETL', 'Change Management']
    },
    {
      title: 'Associate Engineer Intern',
      company: 'ElasticRun',
      period: 'Jan 2022 – Jul 2022',
      location: 'Pune, India',
      highlights: [
        'Engineered and deployed over 10 ETL jobs with the Pentaho tool, achieving a 30% reduction in data processing time',
        'Enhanced data conversion accuracy for critical project requirements',
        'Conducted 2 in-depth sessions on Cron scheduling, VM machines, and database access at non-production levels, enhancing team knowledge and operational efficiency'
      ],
      tech: ['Pentaho', 'ETL', 'Cron', 'VM Management', 'Database Administration']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-7xl mx-auto z-10 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-16 md:gap-20">
            {/* Profile Image - Left Side */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img 
                  src="/profile.jpeg" 
                  alt="Aditya Joshi"
                  className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-black shadow-2xl"
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 text-center md:text-left max-w-3xl">
              <div className="mb-10">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
                  ADITYA JOSHI
                </h1>
                <div className="h-1.5 w-72 mx-auto md:mx-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-300 leading-relaxed">
                DevOps Engineer <span className="text-cyan-400">|</span> Cloud Architect <span className="text-cyan-400">|</span> SRE
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                Building scalable infrastructure and automating the future. Specialized in Kubernetes, CI/CD, and cloud-native solutions.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-10">
                <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:scale-105">
                  <Rocket className="w-5 h-5 inline mr-2" />
                  Hire Me
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
                
                <a href="mailto:aditya.cloud.expert@gmail.com" className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Me
                </a>
              </div>

              {/* Contact Info & Links */}
              <div className="space-y-5 text-gray-400 text-base">
                <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span>Kaiserslautern, Germany</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span>+49 15730636810</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>+91 8237306494</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 items-center">
                  <a href="https://www.linkedin.com/in/aditya-devops-specialist/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                    <Linkedin className="w-5 h-5 flex-shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://www.upwork.com/freelancers/~015d1f8be999ddeeb2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                    </svg>
                    <span>Upwork</span>
                  </a>
                  <a href="https://www.fiverr.com/s/WEK5E3Q" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors">
                    <img src="/fiver-logo.jpg" alt="Fiverr" className="w-5 h-5 object-contain flex-shrink-0" />
                    <span>Fiverr</span>
                  </a>
                  <a href="mailto:aditya.cloud.expert@gmail.com" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>aditya.cloud.expert@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Tech Stack & Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="group relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, iidx) => (
                      <span key={iidx} className="px-3 py-1.5 bg-gray-800/80 border border-gray-700 rounded-full text-sm text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Professional Experience</span>
          </h2>
          
          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <div key={idx} className="group relative p-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{exp.title}</h3>
                    <p className="text-cyan-400 text-xl font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 lg:text-right">
                    <p className="text-lg font-semibold">{exp.period}</p>
                    <p className="text-base">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="text-gray-300 flex items-start gap-3 text-base leading-relaxed">
                      <span className="text-purple-400 mt-1.5 text-lg flex-shrink-0">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-500 mb-3 font-semibold">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, tidx) => (
                      <span key={tidx} className="px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full text-sm text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">Certifications</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://www.credly.com/badges/ea5b54b7-378f-4664-a525-14f0dbbbc268" target="_blank" rel="noopener noreferrer" className="group p-10 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <Award className="w-12 h-12 text-orange-400" />
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">AWS Solutions Architect</h3>
              <p className="text-gray-300 text-lg">Associate Level (SAA-C03)</p>
              <p className="text-gray-500 text-sm mt-2">Amazon Web Services</p>
            </a>
            
            <a href="https://www.credly.com/badges/6a79cab2-0aa8-4143-a7bb-e52876c3d706/public_url" target="_blank" rel="noopener noreferrer" className="group p-10 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <Award className="w-12 h-12 text-blue-400" />
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">Certified Kubernetes Admin</h3>
              <p className="text-gray-300 text-lg">CKA Certification</p>
              <p className="text-gray-500 text-sm mt-2">Cloud Native Computing Foundation</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">Let's Build Together</span>
            </h2>
            <p className="text-gray-400 text-sm mt-4">
              Fill out the form below and I'll get back to you within 24 hours
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2 font-semibold">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-white resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400">
                <XCircle className="w-5 h-5" />
                <span>Failed to send message. Please try again or email directly.</span>
              </div>
            )}
            
            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-bold text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            
            <p className="text-center text-gray-500 text-sm">
              Your information is safe and will only be used to respond to your inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Aditya Vishal Joshi. Built with Next.js & Deployed on Vercel.</p>
          <p className="mt-2 text-sm">Currently pursuing MS in Computer Science @ TU Kaiserslautern</p>
        </div>
      </footer>
    </div>
  );
}