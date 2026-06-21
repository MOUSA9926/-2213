import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Home, Swords, UserX, MessageSquare, Users, Landmark, Clock, Scale, Gavel, Crown, Globe, ChevronDown } from 'lucide-react';
import { translations, AgreementData } from './data';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-4 h-4" />,
  Home: <Home className="w-4 h-4" />,
  Swords: <Swords className="w-4 h-4" />,
  UserX: <UserX className="w-4 h-4" />,
  MessageSquare: <MessageSquare className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
  Landmark: <Landmark className="w-4 h-4" />,
  Clock: <Clock className="w-4 h-4" />,
  Scale: <Scale className="w-4 h-4" />,
  Gavel: <Gavel className="w-4 h-4" />,
};

export default function App() {
  const [lang, setLang] = useState<string>(() => {
    return localStorage.getItem('language') || 'en';
  });

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSwitchingLang, setIsSwitchingLang] = useState(false);

  const agreementData: AgreementData = translations[lang] || translations['en'];
  const isRtl = lang === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const changeLanguage = (newLang: string) => {
    if (newLang !== lang) {
      setIsSwitchingLang(true);
      localStorage.setItem('language', newLang);
      setTimeout(() => {
        window.location.reload();
      }, 700);
    }
    setIsLangOpen(false);
  };

  return (
    <div dir={dir} className={`min-h-screen bg-[#070709] text-zinc-300 font-sans selection:bg-amber-500/30 overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`}>
      
      <AnimatePresence>
        {isSwitchingLang && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070709]/80"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="relative flex items-center justify-center w-16 h-16"
            >
              <div className="absolute inset-0 rounded-full border-t-2 border-amber-500/80 animate-pulse" />
              <Crown className="w-8 h-8 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-0">
        <div className="w-[800px] h-[800px] bg-amber-900/10 rounded-full blur-[120px] opacity-50 absolute -top-[200px]" />
        <div className="w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[100px] opacity-30 absolute top-[40%]" />
      </div>

      <div className="w-full max-w-lg mx-auto bg-[#0a0b0e]/80 backdrop-blur-2xl min-h-screen border-x border-white/[0.03] relative flex flex-col shadow-2xl z-10">
        
        {/* Language Switcher */}
        <div className="absolute top-5 end-5 z-50">
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 bg-[#0a0b0e] border border-amber-500/20 px-3 py-1.5 rounded-full text-amber-500/90 text-xs font-bold tracking-wider hover:bg-amber-900/20 hover:border-amber-500/40 transition-all shadow-[0_0_15px_rgba(245,158,11,0.05)]"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'ar' ? 'العربية' : lang === 'en' ? 'English' : lang === 'tr' ? 'Türkçe' : lang === 'zh' ? '中文' : lang === 'ko' ? '한국어' : lang === 'pt' ? 'Português' : 'English'}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="absolute top-full mt-2 w-full min-w-[120px] bg-[#0a0b0e] border border-amber-500/20 rounded-xl overflow-hidden shadow-xl start-0"
                >
                   <button onClick={() => changeLanguage('ar')} className={`w-full text-start px-4 py-3 text-xs font-bold text-zinc-300 hover:bg-amber-900/40 hover:text-amber-500 transition-colors ${lang === 'ar' ? 'bg-amber-900/20 text-amber-500' : ''}`}>العربية</button>
                   <button onClick={() => changeLanguage('en')} className={`w-full text-start px-4 py-3 text-xs font-bold text-zinc-300 hover:bg-amber-900/40 hover:text-amber-500 transition-colors ${lang === 'en' ? 'bg-amber-900/20 text-amber-500' : ''}`}>English</button>
                   <button onClick={() => changeLanguage('zh')} className={`w-full text-start px-4 py-3 text-xs font-bold text-zinc-300 hover:bg-amber-900/40 hover:text-amber-500 transition-colors ${lang === 'zh' ? 'bg-amber-900/20 text-amber-500' : ''}`}>中文</button>
                   <button onClick={() => changeLanguage('ko')} className={`w-full text-start px-4 py-3 text-xs font-bold text-zinc-300 hover:bg-amber-900/40 hover:text-amber-500 transition-colors ${lang === 'ko' ? 'bg-amber-900/20 text-amber-500' : ''}`}>한국어</button>
                   <button onClick={() => changeLanguage('pt')} className={`w-full text-start px-4 py-3 text-xs font-bold text-zinc-300 hover:bg-amber-900/40 hover:text-amber-500 transition-colors ${lang === 'pt' ? 'bg-amber-900/20 text-amber-500' : ''}`}>Português</button>
                   <button onClick={() => changeLanguage('tr')} className={`w-full text-start px-4 py-3 text-xs font-bold text-zinc-300 hover:bg-amber-900/40 hover:text-amber-500 transition-colors ${lang === 'tr' ? 'bg-amber-900/20 text-amber-500' : ''}`}>Türkçe</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Header Section */}
        <div className="relative pt-12 pb-5 px-6 text-center shrink-0 border-b border-white/[0.04] bg-gradient-to-b from-[#0a0b0e] to-transparent">
           <motion.div 
             initial={{ filter: 'blur(10px)', opacity: 0 }}
             animate={{ filter: 'blur(0px)', opacity: 1 }}
             transition={{ duration: 0.7, ease: "easeOut" }}
             className="inline-flex justify-center items-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-900/40 border border-amber-500/30 mb-3 shadow-[0_0_30px_rgba(245,158,11,0.15)] relative"
           >
             <div className="absolute inset-0 bg-amber-500/10 rounded-xl blur-md" />
             <Crown className="w-5 h-5 text-amber-500 drop-shadow-lg relative z-10" />
           </motion.div>

           <motion.div
             initial={{ filter: 'blur(5px)', opacity: 0 }}
             animate={{ filter: 'blur(0px)', opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
             className="flex flex-col items-center"
           >
             <h1 className="text-xl font-extrabold text-amber-500 mb-1.5 tracking-wider [text-shadow:0_0_20px_rgba(245,158,11,0.6)]">
                {agreementData.title}
             </h1>
             <div className="inline-block px-2 py-0.5 bg-amber-950/40 border border-amber-500/20 rounded-full text-amber-500/90 text-[9px] font-bold tracking-widest mt-0.5">
               {agreementData.kingdom}
             </div>
             {agreementData.subtitle && (
               <p className="text-xs text-zinc-500 font-medium tracking-wide mt-2">
                 {agreementData.subtitle}
               </p>
             )}
           </motion.div>
        </div>

        {/* Timeline List */}
        <div className="relative inline-block py-10 flex-grow pb-8 overflow-hidden w-full overflow-y-auto">
          {/* Main Vertical Timeline Line */}
          <div className="absolute start-[43px] top-14 bottom-10 w-[1px] bg-amber-500/30" />
          
          <div className="space-y-10 ps-6 pe-2">
            {agreementData.rules.map((rule, idx) => (
               <motion.div 
                  key={rule.id}
                  initial={{ filter: 'blur(8px)', opacity: 0 }}
                  animate={{ filter: 'blur(0px)', opacity: 1 }}
                  transition={{ delay: 0.1 + (idx * 0.1), duration: 0.8, ease: "easeOut" }}
                  className="relative flex items-start gap-4 group"
               >
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 w-10 h-10 rounded-xl bg-[#0a0b0e] border border-amber-600/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.1)] mt-1 group-hover:border-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300">
                     <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent rounded-xl" />
                     <div className="text-amber-500 relative z-10">
                        {iconMap[rule.icon]}
                     </div>
                  </div>

                  {/* Rule Card */}
                  <div className="flex-1 bg-white/[0.02] border border-white/[0.05] border-e-0 rounded-s-3xl rounded-e-none pe-4 ps-5 py-5 relative overflow-hidden backdrop-blur-sm group-hover:bg-white/[0.04] group-hover:border-amber-500/20 transition-colors duration-300">
                     {/* Watermark Number */}
                     <div className="absolute top-0 start-2 text-8xl font-black text-white/[0.015] select-none pointer-events-none leading-none -translate-y-2">
                       {rule.id}
                     </div>
                     
                     <h3 className="text-lg font-bold text-amber-50 mb-3 relative z-10 text-start">
                        {rule.title}
                     </h3>
                     
                     <p className="text-zinc-400 text-sm leading-relaxed relative z-10 font-medium text-start">
                        {rule.description}
                     </p>

                     {rule.notes.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/[0.05] space-y-2.5 relative z-10 items-start flex flex-col">
                          {rule.notes.map((note, nIdx) => (
                            <div key={nIdx} className="flex gap-2.5 text-xs text-zinc-500 text-start items-start justify-start w-full">
                              <div className="w-1 h-1 rounded-full bg-amber-700 mt-2 shrink-0 opacity-80" />
                              <p className="leading-relaxed font-medium">{note}</p>
                            </div>
                          ))}
                        </div>
                     )}
                  </div>

               </motion.div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-white/[0.05] bg-[#0a0b0e]/95 backdrop-blur-lg pb-10 pt-6 text-center shrink-0 z-20 relative">
          <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-900/30 to-transparent mx-auto mb-4" />
          <p className="text-xs font-medium text-zinc-500 tracking-wide">
            {agreementData.footerDesigner} <span className="font-mono font-bold text-amber-600/80 tracking-widest text-[13px] ms-1">ALFA</span>
          </p>
          <span className="text-[10px] text-zinc-600 font-medium mt-3 block tracking-wider uppercase">
            {agreementData.footerKingdom} • {new Date().getFullYear()}
          </span>
        </div>

      </div>
    </div>
  );
}
