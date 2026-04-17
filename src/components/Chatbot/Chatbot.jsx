import React, { useEffect, useRef, useState } from 'react';
import { FaMicrophone, FaPaperPlane, FaRobot, FaTimes, FaVolumeUp } from 'react-icons/fa';
import { education, projects, SkillsInfo } from '../../constants';

const portfolioLinks = {
  resume: '/Vivek_Resume.pdf',
  github: 'https://github.com/singhvivek76',
  linkedin: 'https://www.linkedin.com/in/singhvivek76/',
  leetcode: 'https://leetcode.com/u/tovivek/',
};

const commandSuggestions = [
  'Tell me about Vivek',
  'What skills do you have?',
  'Open GitHub',
  'Download resume',
];

const getBrowserRecognition = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
};

const recognitionSupported =
  typeof window !== 'undefined' && Boolean(getBrowserRecognition());

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [voiceReplyEnabled, setVoiceReplyEnabled] = useState(true);
  const [isRecognitionSupported] = useState(recognitionSupported);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi, I'm Vivek's assistant. Ask about skills, projects, education, or use commands like 'go to projects', 'open GitHub' and 'open Resume'.",
    },
  ]);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onend = null;
        recognitionRef.current.stop();
      }

      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const addAssistantMessage = (text, shouldSpeak = false) => {
    setMessages((current) => [...current, { role: 'assistant', text }]);

    if (
      shouldSpeak &&
      voiceReplyEnabled &&
      typeof window !== 'undefined' &&
      'speechSynthesis' in window
    ) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const navigateToSection = (sectionId, label) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return `I couldn't find the ${label} section on this page.`;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return `Taking you to the ${label} section.`;
  };

  const openLink = (url, label) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    return `Opening ${label}.`;
  };

  const getSkillsSummary = () => {
    const categories = SkillsInfo.map((category) => {
      const names = category.skills.map((skill) => skill.name).join(', ');
      return `${category.title}: ${names}`;
    });

    return `Vivek works across ${categories.join(' | ')}.`;
  };

  const getProjectsSummary = () => {
    const summaries = projects.map(
      (project) => `${project.title}: ${project.description}`,
    );

    return summaries.join(' ');
  };

  const getEducationSummary = () => {
    const summaries = education.map(
      (item) => `${item.degree} at ${item.school} (${item.date}), grade ${item.grade}.`,
    );

    return summaries.join(' ');
  };

  const getProjectMatch = (query) => {
    return projects.find((project) => {
      const haystack = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase();
      return haystack.includes(query);
    });
  };

  const getSkillMatch = (query) => {
    for (const category of SkillsInfo) {
      const skill = category.skills.find((item) => item.name.toLowerCase().includes(query));
      if (skill) {
        return `${skill.name} is part of Vivek's ${category.title.toLowerCase()} toolkit.`;
      }
    }

    return null;
  };

  const buildReply = (rawPrompt) => {
    const prompt = rawPrompt.trim();
    const query = prompt.toLowerCase();

    if (!query) {
      return 'Type or say a question, and I will help you explore the portfolio.';
    }

    if (
      query.includes('hello') ||
      query.includes('hi') ||
      query.includes('hey')
    ) {
      return "Hi! You can ask me about Vivek's skills, projects, education, resume, or ask me to navigate the page.";
    }

    if (query.includes('help') || query.includes('command') || query.includes('Help') || query.includes('Command') || query.includes('HELP') || query.includes('COMMAND')) {
      return "Try: 'go to about', 'show projects', 'what skills do you have?', 'download resume', 'open GitHub', or 'how can I contact Vivek?'.";
    }

    if (query.includes('go to home') || query.includes('scroll to home') || query.includes('Go to home') || query.includes('Go to Home') || query.includes('GO TO HOME') || query.includes('Scroll to home') || query.includes('Scroll to Home') || query.includes('SCROLL TO HOME')) {
      return navigateToSection('home', 'home');
    }

    if (query.includes('go to about') || query.includes('scroll to about') || query === 'about') {
      return navigateToSection('about', 'about');
    }

    if (query.includes('go to skills') || query.includes('scroll to skills')) {
      return navigateToSection('skills', 'skills');
    }

    if (query.includes('go to projects') || query.includes('scroll to projects')) {
      return navigateToSection('projects', 'projects');
    }

    if (query.includes('go to education') || query.includes('scroll to education')) {
      return navigateToSection('education', 'education');
    }

    if (query.includes('go to contact') || query.includes('scroll to contact') || query.includes('Go to contact') || query.includes('Go to Contact') || query.includes('contact me') || query.includes('Contact me') || query.includes('CONTACT ME') || query.includes('scroll to contact') || query.includes('Scroll to contact') || query.includes('Scroll to Contact')) {
      return navigateToSection('contact', 'contact');
    }

    if (query.includes('resume') || query.includes('resumes') || query.includes('cv') || query.includes('Resume') || query.includes('Resumes') || query.includes('RESUME') || query.includes('Cv') || query.includes('CV')) {
      return openLink(portfolioLinks.resume, 'the resume');
    }

    if (query.includes('github') || query.includes('GitHub') || query.includes('GITHUB')) {
      return openLink(portfolioLinks.github, 'GitHub');
    }

    if (query.includes('linkedin') || query.includes('LinkedIn') || query.includes('LINKEDIN')) {
      return openLink(portfolioLinks.linkedin, 'LinkedIn');
    }

    if (query.includes('leetcode') || query.includes('LeetCode') || query.includes('LEETCODE')) {
      return openLink(portfolioLinks.leetcode, 'LeetCode');
    }

    if (query.includes('who is vivek') || query.includes('vivek') || query.includes("Vivek") || query.includes('VIVEK') || query.includes('WHO IS VIVEK') || query.includes('tell me about vivek') || query.includes('Tell me about vivek') || query.includes('TELL ME ABOUT VIVEK') || query.includes('Tell me about Vivek') || query.includes('about vivek') || query.includes('Who is Vivek') || query.includes('Tell me about Vivek') || query.includes('About Vivek') || query.includes('who is Vivek') || query.includes('Who is vivek')) {
      return "Vivek Kumar Singh is a full-stack developer and Computer Science student at Meerut Institute of Technology. He focuses on scalable web apps, strong DSA fundamentals, and problem solving with modern frontend and backend tools.";
    }

    if (query.includes('skills') || query.includes('tech stack') || query.includes('Skills') || query.includes('skill') || query.includes('SKILL') || query.includes('SKILLS')) {
      return getSkillsSummary();
    }

    if (query.includes('project') || query.includes('work') || query.includes('projectS') || query.includes('Project') || query.includes('Work') || query.includes('Projects') || query.includes('PROJECT') || query.includes('WORK') || query.includes('PROJECTS')) {
      return getProjectsSummary();
    }

    if (query.includes('education') || query.includes('educations') || query.includes('Education') || query.includes('Educations') || query.includes('EDUCATION') || query.includes('EDUCATIONS') || query.includes('study') || query.includes('college')) {
      return getEducationSummary();
    }

    if (query.includes('contact') || query.includes('contactS') || query.includes('CONTACT') || query.includes('CONTACTS') || query.includes('email') || query.includes('reach')) {
      return "You can reach Vivek from the contact section on this page, or use the GitHub, LinkedIn, and LeetCode links shown in the portfolio.";
    }

    const projectMatch = getProjectMatch(query);
    if (projectMatch) {
      return `${projectMatch.title} uses ${projectMatch.tags.join(', ')}. ${projectMatch.description}`;
    }

    const skillMatch = getSkillMatch(query);
    if (skillMatch) {
      return skillMatch;
    }

    return "I can help with portfolio questions and commands. Try asking about skills, projects, education, contact details, or say 'go to projects'.";
  };

  const handleSend = (messageText, fromVoice = false) => {
    const trimmed = messageText.trim();
    if (!trimmed) {
      return;
    }

    setMessages((current) => [...current, { role: 'user', text: trimmed }]);
    const reply = buildReply(trimmed);
    addAssistantMessage(reply, fromVoice);
    setInput('');
  };

  const startListening = () => {
    const SpeechRecognition = getBrowserRecognition();

    if (!SpeechRecognition) {
      addAssistantMessage('Voice input is not supported in this browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      addAssistantMessage('Listening now. Say a question or a command.');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleSend(transcript, true);
    };

    recognition.onerror = () => {
      addAssistantMessage('I could not capture that clearly. Please try again.');
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-6 right-6 z-[70] flex h-16 w-16 items-center justify-center rounded-full border border-purple-300/30 bg-gradient-to-br from-[#8245ec] via-[#a855f7] to-[#ec4899] text-white shadow-[0_0_30px_rgba(130,69,236,0.45)] transition hover:scale-105"
        aria-label="Toggle portfolio assistant"
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={22} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-26 right-4 z-[70] flex h-[36rem] w-[calc(100vw-2rem)] max-w-[24rem] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0719]/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="border-b border-white/10 bg-gradient-to-r from-[#140b31] via-[#1d113f] to-[#2a1346] px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                
                <h3 className="text-lg font-semibold text-white text-center">Chatbot</h3>
                <p className="mt-1 text-sm text-gray-300 text-center">Chat or use voice.</p>
              </div>

                <button
                type="button"
                onClick={() => setVoiceReplyEnabled((current) => !current)}
                className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                  voiceReplyEnabled
                    ? 'border-purple-400/60 bg-purple-500/20 text-purple-100'
                    : 'border-white/10 bg-white/5 text-gray-300'
                }`}
                aria-label="Toggle spoken replies"
              >
                <span className="inline-flex items-center gap-2">
                  <FaVolumeUp />
                  {voiceReplyEnabled ? 'Voice on' : 'Voice off'}
                </span>
              </button>
              
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-white/10 px-4 py-3">
            {commandSuggestions.map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => handleSend(command)}
                className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-100 transition hover:bg-purple-500/20"
              >
                {command}
              </button>
            ))}
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#8245ec] to-[#ec4899] text-white'
                      : 'border border-white/10 bg-white/5 text-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 px-4 py-4">
            <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
              <span className={`h-2 w-2 rounded-full ${isListening ? 'bg-pink-400' : 'bg-emerald-400'}`}></span>
              {isListening
                ? 'Voice capture is active'
                : isRecognitionSupported
                  ? 'Voice commands are available'
                  : 'Voice input depends on browser support'}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={startListening}
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
                  isListening
                    ? 'border-pink-400/60 bg-pink-500/20 text-pink-200'
                    : 'border-purple-400/20 bg-purple-500/10 text-purple-100'
                }`}
                aria-label="Start voice input"
              >
                <FaMicrophone />
              </button>

              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSend(input);
                  }
                }}
                placeholder="Ask about skills, projects, or say go to contact"
                className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-purple-400/60"
              />
            </div>
            <div className="mt-3 flex  w-full">
              <button
                type="button"
                onClick={() => handleSend(input)}
                className="flex h-12 w-12 items-center justify-center rounded-full w-full bg-gradient-to-r from-[#8245ec] to-[#ec4899] text-white transition hover:scale-105"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
