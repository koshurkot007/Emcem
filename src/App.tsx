import { motion } from 'motion/react';
import { ArrowRight, Leaf, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0D0C] text-[#F4F7F5] overflow-hidden flex flex-col font-sans selection:bg-[#4ADE80]/30">
      {/* Background Ambient Glows & Logo Watermark */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#4ADE80] rounded-full blur-[180px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#14B8A6] rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />

      {/* Navigation / Header */}
      <nav className="w-full relative z-20 px-6 py-8 md:px-16 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter text-[#F4F7F5] uppercase leading-none">
              emcem
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#4ADE80] mt-1 font-bold">
              Ecology First
            </span>
          </div>
        </motion.div>
        
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-semibold hidden md:flex">
          <span className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Philosophy</span>
          <span className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Infrastructure</span>
          <span className="text-[#4ADE80] cursor-default">Future Proof v1.0</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center relative z-10 px-8 md:px-16 w-full max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 bg-[#4ADE80] animate-pulse rounded-full"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#4ADE80]">Systems Priming / Coming Soon</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative inline-block w-full"
        >
          <h1 className="font-display text-[60px] sm:text-[90px] md:text-[130px] lg:text-[150px] font-black leading-[0.85] md:leading-[0.8] tracking-tighter uppercase m-0 p-0 text-left">
            Enviro<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #4ADE80' }}>
              Future
            </span>
          </h1>
          <div className="absolute top-0 right-0 md:mt-8 w-24 md:w-48 h-px bg-[#4ADE80] hidden md:block"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full mt-12 md:mt-16 mb-16"
        >
          <div className="col-span-1 md:col-span-8 lg:col-span-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight text-[#F4F7F5]/90 mb-4 text-left max-w-2xl">
              Recalibrating the relationship between human industry and planetary health.
            </p>
            <p className="text-sm font-light text-[#F4F7F5]/50 leading-relaxed max-w-sm text-left">
              EMCEM is currently developing next-generation environmental solutions. A revolutionary approach to green technology is taking root.
            </p>
          </div>
          <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col items-start md:items-end mt-8 md:mt-0">
            <div className="text-[60px] md:text-[80px] font-black leading-none opacity-20">00</div>
            <div className="text-xs uppercase tracking-[0.4em] mb-4 text-[#F4F7F5]/80">Days Until Disclosure</div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 w-full p-8 md:p-16 text-[#F4F7F5]/40 text-xs font-mono uppercase tracking-widest flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-white/10 mt-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          &copy; {new Date().getFullYear()} Emcem Enviro Future. All rights reserved.
        </motion.div>
        
        <div className="flex items-center gap-4 hidden lg:flex">
          <div className="w-2 h-2 bg-[#4ADE80] animate-ping rounded-full"></div>
          <span className="text-[10px] tracking-[0.2em]">GPS LOC: 51.5074° N, 0.1278° W</span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col items-start md:items-end gap-2"
        >
          <a href="https://www.emcem.asia" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors flex items-center gap-1.5 group">
            <span>WWW.EMCEM.ASIA</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="mailto:info@emcem.asia" className="hover:text-[#4ADE80] transition-colors">INFO@EMCEM.ASIA</a>
        </motion.div>
      </footer>
    </div>
  );
}
