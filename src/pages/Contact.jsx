import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowLeft, Send, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [lastSubmit, setLastSubmit] = useState(0);

  // Telegram Bot Configuration
  const TELEGRAM_BOT_TOKEN = '8132003043:AAEPhIREYJ9lvOrx8MScgNT7hH9YVGI9Wso';
  const TELEGRAM_CHAT_ID = '6445389299';

  const sendToTelegram = async (data) => {
    const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}

💬 *Message:*
${data.message}

---
_Sent from Portfolio Contact Form_
_Time: ${new Date().toLocaleString()}_
    `;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      const result = await response.json();
      
      if (!result.ok) {
        throw new Error('Failed to send to Telegram');
      }
      
      return true;
    } catch (error) {
      console.error('Telegram Error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting: only allow 1 submission per minute
    const now = Date.now();
    if (now - lastSubmit < 60000) {
      setSubmitMessage('Please wait a minute before sending another message.');
      setTimeout(() => setSubmitMessage(''), 5000);
      return;
    }
    
    setIsSubmitting(true);
    
    // Send to Telegram
    const success = await sendToTelegram(formData);
    
    if (success) {
      setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
      setFormData({ name: '', email: '', message: '' });
      setLastSubmit(now);
    } else {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
    }
    
    setIsSubmitting(false);
    
    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const accentColor = darkMode ? 'text-purple-400' : 'text-amber-600';
  const borderColor = darkMode ? 'border-purple-400/30' : 'border-amber-600/30';
  const inputBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const btnBorder = darkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-amber-600 text-amber-600 hover:bg-amber-600/10';

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-50'} transition-colors duration-500`}>
      {/* Simple Header with Back Button */}
      <header className={`sticky top-0 ${darkMode ? 'bg-[#1e293b]/80' : 'bg-white/80'} backdrop-blur-md border-b ${borderColor} transition-colors duration-500 z-50`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className={accentColor}>×</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Thonny</span>
            </div>
            
            <Link 
              to="/" 
              className={`flex items-center gap-2 ${btnBorder} border px-4 py-2 rounded-lg transition-all hover:shadow-lg`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-12 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in <span className={accentColor}>Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className={`border ${borderColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
                    <Mail className={`w-6 h-6 ${accentColor}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                    <a 
                      href="mailto:thoeunthonny4@gmail.com" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      thoeunthonny4@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">I'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className={`border ${borderColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
                    <Phone className={`w-6 h-6 ${accentColor}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
                    <a 
                      href="tel:+855979265878" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      +855 979 265 878
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              <div className={`border ${borderColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
                    <MapPin className={`w-6 h-6 ${accentColor}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                    <p className="text-gray-400">Phnom Penh, Cambodia</p>
                    <p className="text-sm text-gray-500 mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={`border ${borderColor} p-6 rounded-xl`}>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Follow Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/ThoenThonny" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg transition-colors`}
                  >
                    <Github className="w-5 h-5 text-gray-400" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/thoeun-thonny-2a1862254/" 
                    target='_blank'
                    rel="noopener noreferrer"
                    className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg transition-colors`}
                  >
                    <Linkedin className="w-5 h-5 text-gray-400" />
                  </a>
                  <a 
                    href="https://t.me/nyfinker" 
                    target='_blank'
                    rel="noopener noreferrer"
                    className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg transition-colors`}
                  >
                    <Send className="w-5 h-5 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`border ${borderColor} p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
                <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send a Message
                </h2>
                
                {submitMessage && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitMessage.includes('error') || submitMessage.includes('wait')
                      ? darkMode ? 'bg-red-900/20 border border-red-800' : 'bg-red-50 border border-red-200'
                      : darkMode ? 'bg-green-900/20 border border-green-800' : 'bg-green-50 border border-green-200'
                  }`}>
                    <p className={submitMessage.includes('error') || submitMessage.includes('wait') ? 'text-red-600' : 'text-green-600'}>
                      {submitMessage}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${borderColor} ${inputBg} ${darkMode ? 'text-white' : 'text-gray-900'} rounded-lg focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-purple-400' : 'focus:ring-amber-600'} transition-all`}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${borderColor} ${inputBg} ${darkMode ? 'text-white' : 'text-gray-900'} rounded-lg focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-purple-400' : 'focus:ring-amber-600'} transition-all`}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                 

                  <div>
                    <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 border ${borderColor} ${inputBg} ${darkMode ? 'text-white' : 'text-gray-900'} rounded-lg focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-purple-400' : 'focus:ring-amber-600'} transition-all resize-none`}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-gray-400">
                      * Required fields
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center gap-2 ${btnBorder} border px-6 py-3 rounded-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* FAQ Section */}
                <div className={`mt-12 pt-8 border-t ${borderColor}`}>
                  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Frequently Asked
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                      <div>
                        <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          What's your typical response time?
                        </p>
                        <p className="text-sm text-gray-400">
                          I usually respond within 24 hours on weekdays.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                      <div>
                        <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Do you work with international clients?
                        </p>
                        <p className="text-sm text-gray-400">
                          Yes, I work with clients worldwide and can accommodate different time zones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mt-16 p-8 rounded-xl text-center ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Looking for something else?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Check out my portfolio or learn more about my experience and skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/projects" 
                className={`border ${btnBorder} px-6 py-3 rounded-lg transition-all hover:shadow-lg`}
              >
                View Projects
              </Link>
              <Link 
                to="/" 
                className={`border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-200'} px-6 py-3 rounded-lg transition-all hover:shadow-lg`}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className={`border-t ${darkMode ? 'border-purple-500/20' : 'border-amber-600/20'} py-6 px-4 sm:px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={accentColor}>×</span>
              <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-bold`}>Thonny</span>
              <span className="text-gray-400 text-sm ml-3">Web Developer & Instructor</span>
            </div>
            <div className="text-gray-400 text-sm">
              © Copyright {new Date().getFullYear()}. Made with ❤️ by Thonny
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;