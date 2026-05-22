import { motion } from 'motion/react';
import { Heart, BookOpen, Users, Activity, ChevronRight, Menu, X, GraduationCap, Award, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Types ---
interface MenuItem {
  name: string;
  href: string;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: 'Mission', href: '#mission' },
    { name: 'Medical Literacy', href: '#literacy' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Vision', href: '#vision' },
    { name: 'Community', href: '#join' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-white font-bold text-3xl overflow-hidden shadow-sm border border-slate-100">
                <img 
                  src="/src/assets/images/academy_care_logo_1779203828920.png" 
                  alt="AC" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const span = document.createElement('span');
                      span.className = 'text-brand-red font-display font-bold text-3xl';
                      span.innerText = 'AC';
                      target.parentElement.appendChild(span);
                    }
                  }}
                />
             </div>
             <span className={`font-display font-bold text-3xl tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>AcademyCare</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm font-semibold tracking-wide text-slate-600 hover:text-brand-red transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="#join" className="btn-primary text-sm py-2 px-5 font-bold">Get Involved</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4 shadow-xl"
        >
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-bold text-slate-900 hover:text-brand-red py-2"
            >
              {item.name}
            </a>
          ))}
          <a href="#join" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-brand-red text-white rounded-2xl font-bold">
            Get Involved
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 -skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-red/10 text-brand-red rounded-full text-sm font-bold mb-8 border border-brand-red/10"
            >
              <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
              <span className="uppercase tracking-wider">For students, By students.</span>
            </motion.div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-8">
              Empowering the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-light">Next Gen</span> <br /> 
              of Healthcare.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              AcademyCare bridges the gap between student ambition and real-world medicine through litearcy, workshops, and leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#workshops" className="btn-primary px-8">Explore Workshops</a>
              <a href="#mission" className="btn-secondary px-8 font-bold">Our Mission</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
               {/* Main Logo Container */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="relative z-10 w-full aspect-square bg-white rounded-[3rem] shadow-2xl shadow-brand-red/10 border border-slate-100 flex items-center justify-center p-12"
               >
                  <img 
                    src="/src/assets/images/academy_care_logo_1779203828920.png" 
                    alt="AcademyCare Main Image" 
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/800x800/FFFFFF/E11D48?text=AcademyCare';
                    }}
                  />
               </motion.div>
               
               {/* Floating Interface Elements */}
               <motion.div 
                 initial={{ x: 30, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 z-20"
               >
                  <div className="bg-brand-red/10 text-brand-red p-3 rounded-2xl">
                     <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Live Workshop</p>
                    <p className="font-bold text-slate-900">CPR Demonstration</p>
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ x: -30, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.7 }}
                 className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 z-20"
               >
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">
                     <Users size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Ambassadors</p>
                    <p className="font-bold text-slate-900">Join the Team</p>
                  </div>
               </motion.div>

               {/* Background Glow */}
               <div className="absolute inset-0 bg-brand-red/10 blur-[100px] -z-10 rounded-full scale-125"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  const points = [
    { 
      icon: <BookOpen className="text-brand-red" />, 
      title: "Medical Literacy", 
      description: "Bridging the gap between student ambition and real-world concepts through education." 
    },
    { 
      icon: <Activity className="text-brand-red" />, 
      title: "Hands-on Workshops", 
      description: "CPR training, First Aid, and health awareness events led by passionate students." 
    },
    { 
      icon: <Users className="text-brand-red" />, 
      title: "Student Leadership", 
      description: "Empowering the next generation of healthcare leaders through service opportunities." 
    },
    { 
      icon: <Globe className="text-brand-red" />, 
      title: "Community Impact", 
      description: "Collaborating with NGOs like Emirates Red Crescent to drive meaningful change." 
    },
  ];

  return (
    <section id="mission" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-32">
            <h2 className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-brand-red"></span>
              Our Mission
            </h2>
            <h3 className="text-5xl font-display font-black text-slate-900 mb-8 leading-tight">
              Education, Experience, <span className="text-brand-red">Impact.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We aim to foster a community where medical knowledge is accessible and practical skills are second nature to every student.
            </p>
            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
               <Heart className="w-12 h-12 text-brand-red mb-6 fill-brand-red" />
               <blockquote className="text-xl font-display font-medium leading-relaxed italic border-l-4 border-brand-red pl-6">
                 "For students, By students. We empower ambition with action."
               </blockquote>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-slate-50 rounded-[3rem] border border-transparent hover:border-brand-red/10 hover:bg-white hover:shadow-2xl hover:shadow-brand-red/5 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  {point.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{point.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LiteracyShowcase = () => {
  const topics = [
    { title: "Anatomy & Physiology", desc: "Basic systems and health awareness fundamentals." },
    { title: "Nutrition & Fitness", desc: "Fueling the body for performance and longevity." },
    { title: "Mental wellbeing", desc: "Sleep, stress management, and emotional health." },
    { title: "Emergency Care", desc: "Understanding critical situations and first response." },
    { title: "Public Health", desc: "Disease prevention and hygiene campaigns." },
    { title: "Tech in Medicine", desc: "Exploring AI's potential in the future of healthcare." }
  ];

  return (
    <section id="literacy" className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Abstract Shapes */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-red/20 blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-red/10 blur-[150px]"></div>

        <div className="text-center mb-20">
          <h2 className="text-brand-red-light font-bold uppercase tracking-[0.2em] text-sm mb-4">Educational Pillars</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black mb-6">Medical Literacy Reimagined.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">Providing students with the knowledge toolkit to navigate the healthcare landscape confidently.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                 <div className="w-3 h-3 rounded-full bg-brand-red mb-6"></div>
                 <h4 className="text-2xl font-bold mb-4">{t.title}</h4>
                 <p className="text-slate-400 font-medium leading-relaxed">{t.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between group cursor-pointer">
                 <span className="text-sm font-bold text-slate-500 group-hover:text-white transition-colors uppercase tracking-wider">Learn More</span>
                 <ChevronRight className="w-5 h-5 text-brand-red group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkshopSection = () => {
  const workshops = [
    { 
      title: "CPR & BLS", 
      tag: "Vital Skills",
      desc: "Hands-on demonstrations of Basic Life Support techniques that save lives.",
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80"
    },
    { 
      title: "First Aid Training", 
      tag: "Immediate Response",
      desc: "Practical training for common emergencies, fractures, and wound care.",
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
    },
    { 
      title: "Hygiene Campaigns", 
      tag: "Prevention",
      desc: "Educating our peers on the importance of sanitation and public health.",
      img: "https://images.unsplash.com/photo-1508243771214-6e95d13742f0?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="workshops" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm mb-6">Workshops</h2>
            <h3 className="text-5xl font-display font-black text-slate-900 mb-6">Experience Reality.</h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">Students experience real-world medical situations through immersive, peer-led workshops.</p>
          </div>
          <button className="btn-secondary h-fit py-4 px-10 font-bold whitespace-nowrap">View All Programs</button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {workshops.map((w, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="group flex flex-col md:flex-row bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-brand-red/5 transition-all duration-500 h-full"
            >
               <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                  <img src={w.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={w.title} />
               </div>
               <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <span className="text-brand-red font-bold text-xs uppercase tracking-widest mb-3 block">{w.tag}</span>
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">{w.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">{w.desc}</p>
                  <div className="flex items-center gap-2 text-slate-900 font-bold group/btn cursor-pointer">
                    Book Event <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => {
  const points = [
    "Empower next-gen healthcare leaders.",
    "Promote student health and wellness.",
    "Enable community-driven medical projects."
  ];

  return (
    <section id="vision" className="py-24 bg-brand-red relative overflow-hidden">
       {/* Background Text Overlay */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">
          ACADEMY CARE
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="font-bold uppercase tracking-[0.3em] text-sm mb-6 text-white/80">Our Vision</h2>
                <h3 className="text-4xl md:text-6xl font-display font-black mb-16 leading-tight">
                  Inspiring Meaningful <br className="hidden md:block" /> Leadership in Healthcare.
                </h3>
             </motion.div>
             
             <div className="grid gap-6">
                {points.map((p, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 flex items-center justify-center text-xl md:text-2xl font-bold hover:bg-white/20 transition-all cursor-default"
                   >
                      {p}
                   </motion.div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="md:col-span-5">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2">
                   <img src="/src/assets/images/academy_care_logo_1779203828920.png" className="w-full h-full object-contain" alt="Logo" />
                </div>
                <span className="font-display font-black text-4xl tracking-tighter italic">AcademyCare</span>
             </div>
             <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-10 font-medium">
               A student-led platform bridging the gap between student ambition and real-world healthcare concepts. Empowering the future, today.
             </p>
             <div className="flex gap-4">
                {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                   <div key={social} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer">
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                   </div>
                ))}
             </div>
          </div>

          <div className="md:col-span-2 col-span-6">
            <h5 className="font-black uppercase tracking-widest text-xs text-slate-500 mb-8 font-sans">Organization</h5>
            <ul className="space-y-4 text-slate-300 font-bold">
              <li><a href="#mission" className="hover:text-brand-red transition-colors">Mission</a></li>
              <li><a href="#vision" className="hover:text-brand-red transition-colors">Vision</a></li>
              <li><a href="#literacy" className="hover:text-brand-red transition-colors">Literacy</a></li>
              <li><a href="#join" className="hover:text-brand-red transition-colors">Team</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 col-span-6">
            <h5 className="font-black uppercase tracking-widest text-xs text-slate-500 mb-8 font-sans">Programs</h5>
            <ul className="space-y-4 text-slate-300 font-bold">
              <li><a href="#workshops" className="hover:text-brand-red transition-colors">Workshops</a></li>
              <li><a href="#workshops" className="hover:text-brand-red transition-colors">CPR / BLS</a></li>
              <li><a href="#literacy" className="hover:text-brand-red transition-colors">AI in Health</a></li>
              <li><a href="#literacy" className="hover:text-brand-red transition-colors">Wellness</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="font-black uppercase tracking-widest text-xs text-slate-500 mb-8 font-sans">Newsletter</h5>
            <div className="flex flex-col gap-4">
               <input type="email" placeholder="student@email.com" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red outline-none transition-all font-medium" />
               <button className="btn-primary py-4 font-bold">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 text-center text-slate-500 text-sm font-bold flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} AcademyCare. Student-Led Initiative.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-red selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <MissionSection />
      <LiteracyShowcase />
      <WorkshopSection />
      <VisionSection />
      
      {/* Join / CTA Section */}
      <section id="join" className="py-32 bg-white relative">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center"
            >
               {/* Decorative background elements */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-[80px]"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800 opacity-50 rounded-full blur-[80px]"></div>

               <div className="relative z-10">
                  <div className="w-20 h-20 bg-brand-red rounded-3xl mx-auto mb-10 flex items-center justify-center shadow-xl shadow-brand-red/20 rotate-12">
                     <Users className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">Ready to make a difference?</h2>
                  <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    Whether you're an aspiring healthcare professional or just passionate about student wellness, there's a role for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                     <button className="bg-brand-red hover:bg-brand-red-dark text-white font-black px-12 py-5 rounded-[2rem] text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-red/25">Join the Team</button>
                     <button className="bg-white/10 hover:bg-white/20 text-white font-black px-12 py-5 rounded-[2rem] text-lg transition-all backdrop-blur-md border border-white/10">Partner with Us</button>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
