import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs.sendForm(
      'service_6wiucz3',
      'template_d1b5m97',
      formRef.current,
      'fT-ZfRSCrqXgLMud4'
    )
    .then(() => {
      toast.success('Message sent successfully! ✅');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(() => {
      toast.error('Failed to send message, please try again.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: 'Email',
      value: 'pdmahindrakar@gmail.com',
      link: 'mailto:pdmahindrakar@gmail.com',
      color: 'blue'
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: 'Phone',
      value: '+91 8830800945',
      link: 'tel:+918830800945',
      color: 'green'
    },
    {
      icon: <MessageCircle className="text-green-600" size={24} />,
      title: 'WhatsApp',
      value: '+91 8956333692',
      link: 'https://wa.me/918956333692',
      color: 'green'
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: 'Location',
      value: 'India',
      link: '#',
      color: 'red'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/PavanMahindrakar',
      color: 'gray'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pavanmahindrakar',
      color: 'blue'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      name: 'X',
      url: 'https://twitter.com/Pavan_2712',
      color: 'gray'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to turn your data into actionable insights? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`group flex items-center p-6 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 ${
                      darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-white'
                    }`}
                  >
                    <div className={`p-4 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      info.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                      info.color === 'green' ? 'bg-green-100 group-hover:bg-green-200' :
                      'bg-red-100 group-hover:bg-red-200'
                    } ${darkMode ? 'bg-opacity-20' : ''}`}>
                      {info.icon}
                    </div>
                    <div className="ml-6 flex-1">
                      <h4 className={`font-semibold text-lg ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.title}
                      </h4>
                      <p className={`text-sm mt-1 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className={`text-2xl font-semibold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:scale-110 ${
                      darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-50 hover:bg-white text-gray-900'
                    }`}
                    title={social.name}
                  >
                    <div className="transition-transform duration-300 group-hover:rotate-12">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className={`p-8 rounded-2xl shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <h3 className={`text-2xl font-semibold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send a Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-3 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 rounded-xl border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:bg-gray-600' 
                          : 'bg-white border-gray-200 text-gray-900 focus:bg-gray-50'
                      }`}
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-3 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 rounded-xl border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:bg-gray-600' 
                          : 'bg-white border-gray-200 text-gray-900 focus:bg-gray-50'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-4 rounded-xl border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:bg-gray-600' 
                        : 'bg-white border-gray-200 text-gray-900 focus:bg-gray-50'
                    }`}
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-4 rounded-xl border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:bg-gray-600' 
                        : 'bg-white border-gray-200 text-gray-900 focus:bg-gray-50'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl transition-all duration-300 font-medium flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;