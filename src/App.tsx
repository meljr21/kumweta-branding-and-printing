import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Printer, 
  Shirt, 
  Image as ImageIcon, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  Instagram,
  Facebook,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  features: string[];
  image: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'canvas',
    title: 'Canvas Printing',
    description: 'High-quality canvas prints to preserve your memories or decorate your space.',
    icon: <ImageIcon className="w-8 h-8" />,
    price: 'From K150',
    features: [
      '42x57 – K150',
      '60x80 – K200',
      '80x100 – K300',
      'Premium Matte Finish',
      'Sturdy Wooden Frames'
    ],
    image: 'https://picsum.photos/seed/canvas-print/800/600'
  },
  {
    id: 'dtf',
    title: 'DTF Printing',
    description: 'Direct-to-Film printing for vibrant, durable designs on any fabric.',
    icon: <Printer className="w-8 h-8" />,
    price: 'From K130',
    features: [
      'Starting from K130 for 60cm',
      'Vibrant Full Color',
      'Stretch Resistant',
      'Wash Durable',
      'Works on Cotton & Polyester'
    ],
    image: 'https://picsum.photos/seed/dtf-printing/800/600'
  },
  {
    id: 'embroidery',
    title: 'Embroidery Services',
    description: 'Professional embroidery for corporate wear, uniforms, and custom apparel.',
    icon: <Shirt className="w-8 h-8" />,
    features: [
      'T-shirts & Golfers',
      'Corporate Shirts',
      'Worksuits & Overalls',
      'High Stitch Density',
      'Long-lasting Quality'
    ],
    image: 'https://picsum.photos/seed/embroidery/800/600'
  }
];

const GALLERY_IMAGES = [
  'https://picsum.photos/seed/k1/400/400',
  'https://picsum.photos/seed/k2/400/400',
  'https://picsum.photos/seed/k3/400/400',
  'https://picsum.photos/seed/k4/400/400',
  'https://picsum.photos/seed/k5/400/400',
  'https://picsum.photos/seed/k6/400/400',
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-red p-2 rounded-lg">
            <Printer className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-brand-black' : 'text-white'}`}>
            KUMWETA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-bold uppercase text-sm tracking-widest hover:text-brand-red transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/260770701940" target="_blank" className="btn-primary py-2 px-6 text-sm">
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-brand-black' : 'text-white'} /> : <Menu className={scrolled ? 'text-brand-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-bold uppercase text-brand-black hover:text-brand-red"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/260770701940" target="_blank" className="btn-primary text-center">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/printing-shop/1920/1080" 
          alt="Printing Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Lusaka's Premier Branding Hub
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Professional <span className="text-brand-red">Printing</span> <br />
            & Branding Services
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            From high-quality canvas prints to custom embroidery and DTF printing. 
            We bring your brand to life with precision and passion.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#services" className="btn-primary flex items-center justify-center gap-2">
              Explore Services <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black">
              Get a Quote
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">What we do</span>
            <h2 className="section-title mb-0">Our Core Services</h2>
          </div>
          <p className="text-gray-600 max-w-md">
            We offer a wide range of branding solutions tailored to your needs, 
            ensuring high quality and fast turnaround times.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-2xl text-brand-red shadow-lg">
                  {service.icon}
                </div>
                {service.price && (
                  <div className="absolute bottom-4 right-4 bg-brand-red text-white px-4 py-1 rounded-full font-bold text-sm">
                    {service.price}
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-red" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/260770701940?text=I'm interested in ${service.title}`} 
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-brand-black font-bold hover:bg-brand-black hover:text-white transition-all"
                >
                  Order Now <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Portfolio</span>
          <h2 className="section-title text-white">Our Recent Work</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="aspect-square rounded-2xl overflow-hidden group relative cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-red/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://picsum.photos/seed/about-branding/800/1000" 
                alt="About Kumweta" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-red text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-black mb-1">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest">Quality Guaranteed</p>
              </div>
            </motion.div>
          </div>

          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">About Us</span>
            <h2 className="section-title">Your Vision, <br /> Our Craft.</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              KUMWETA is a Lusaka-based printing and branding powerhouse. We specialize in transforming ideas into tangible, high-quality products that help businesses and individuals stand out.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-gray-100 p-3 rounded-2xl h-fit">
                  <CheckCircle2 className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Mission</h4>
                  <p className="text-gray-500">To provide premium branding solutions that combine creativity with industrial-grade quality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-gray-100 p-3 rounded-2xl h-fit">
                  <CheckCircle2 className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Commitment</h4>
                  <p className="text-gray-500">Fast turnaround times, affordable pricing, and a relentless focus on customer satisfaction.</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn-primary inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Get in touch</span>
            <h2 className="section-title">Let's Build Your Brand</h2>
            <p className="text-gray-600 mb-12">
              Have a project in mind? Reach out to us today for a custom quote or to discuss your branding needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-red">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-black">+260 770 701 940</p>
                  <p className="text-xl font-black">+260 976 979 735</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-red">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Email Us</p>
                  <p className="text-xl font-black">kumwetahubsltd@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-red">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Visit Us</p>
                  <p className="text-xl font-black">Fidelity Shopping Mall, Shop 17</p>
                  <p className="text-gray-500">Katondo Street, Lusaka, Zambia</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="bg-white p-4 rounded-2xl shadow-sm hover:text-brand-red transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-white p-4 rounded-2xl shadow-sm hover:text-brand-red transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://wa.me/260770701940" target="_blank" className="bg-white p-4 rounded-2xl shadow-sm hover:text-brand-red transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-red transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-red transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Service Required</label>
                <select className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-red transition-all">
                  <option>Canvas Printing</option>
                  <option>DTF Printing</option>
                  <option>Embroidery</option>
                  <option>Other Branding</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-red transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-red p-2 rounded-lg">
              <Printer className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter">KUMWETA</span>
          </div>
          
          <div className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} KUMWETA Branding & Printing. All rights reserved.
          </div>

          <div className="flex gap-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Home</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/260770701940" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-float"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
