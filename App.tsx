import React from 'react';
import PdfPage from './components/PdfPage';
import Logo from './components/Logo';
import { ArrowDown, MapPin, Phone, Mail, Calendar, Award, CheckCircle2, Users, Stethoscope, Building2, Briefcase, Wind } from 'lucide-react';
import { STATS, SERVICES, PROJECT_CATEGORIES } from './constants';

function App() {
  return (
    <div className="min-h-screen w-full py-8 px-4 sm:px-8 flex flex-col items-center gap-8">
      
      {/* UI Controls outside the PDF */}
      <div className="fixed top-0 left-0 w-full bg-slate-800 text-white p-4 z-50 flex justify-between items-center shadow-md print:hidden">
        <div className="flex items-center gap-2">
          <span className="font-semibold">HEVACO Profile.pdf</span>
        </div>
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          Print / Save as PDF
        </button>
      </div>
      
      <div className="mt-12 w-full flex flex-col items-center print:mt-0">

        {/* --- PAGE 1: COVER --- */}
        <PdfPage hideHeader hideFooter className="bg-white text-slate-900">
           <div className="h-full flex flex-col">
              <div className="p-12 pb-0">
                <Logo className="scale-125 origin-top-left" />
              </div>
              
              <div className="flex-grow flex flex-col justify-center px-12 relative z-10">
                 <h2 className="text-blue-600 tracking-[0.2em] text-sm font-bold uppercase mb-4">Company Profile</h2>
                 <h1 className="text-6xl font-bold text-slate-900 leading-tight mb-6 serif">
                   Advanced <br/>
                   <span className="text-blue-700">Climate Control</span> <br/>
                   Solutions
                 </h1>
                 <div className="h-1 w-24 bg-red-500 mb-8"></div>
                 <p className="text-xl text-slate-600 max-w-md leading-relaxed font-light">
                   Established in 2007, HEVACO is Kerala's premier provider of comprehensive HVAC solutions for healthcare, corporate, and industrial sectors.
                 </p>
              </div>

              {/* Abstract Background Graphic */}
              <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50 -z-0 clip-diagonal">
                 <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="HVAC Machinery"
                  className="w-full h-full object-cover opacity-20 grayscale mix-blend-multiply"
                 />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50"></div>
              </div>
              
              <div className="bg-slate-900 text-white p-12 mt-auto relative z-10">
                 <div className="flex justify-between items-end">
                    <div>
                       <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Est. 2007</p>
                       <p className="text-2xl font-light">Your Trusted HVAC Partner</p>
                    </div>
                    <div className="text-right">
                       <p className="text-sm text-slate-400">www.hevaco.com</p>
                    </div>
                 </div>
              </div>
           </div>
        </PdfPage>

        {/* --- PAGE 2: ABOUT & LEADERSHIP --- */}
        <PdfPage pageNumber={2}>
          <div className="px-12 py-8 h-full flex flex-col">
            <div className="flex gap-8 mb-12">
               <div className="w-2/3 pr-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4 serif">About HEVACO</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                    Established in 2007, HEVACO Cooling Systems (Pvt.) Ltd has grown to become one of the leading air conditioning and HVAC solution providers in Kerala. With over 18 years of proven excellence and more than 200 successfully completed projects, we have established ourselves as the go-to partner for comprehensive climate control solutions.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Recently, we have strategically partnered with <strong>DeltaQ HVAC & Refrigeration Consultants</strong> to expand our technological capabilities, particularly in specialized areas like cleanrooms and advanced refrigeration systems.
                  </p>
               </div>
               <div className="w-1/3 bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <h4 className="text-blue-800 font-bold text-sm uppercase mb-4">At a Glance</h4>
                  <ul className="space-y-4">
                     {STATS.map(stat => (
                        <li key={stat.id} className="flex items-center gap-3">
                           <div className="text-blue-600"><stat.icon size={18} /></div>
                           <div>
                              <span className="block text-xl font-bold text-slate-900">{stat.value}</span>
                              <span className="text-[10px] text-slate-500 uppercase">{stat.label}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-xl relative overflow-hidden mb-8 flex-grow">
               <div className="relative z-10">
                  <h3 className="serif text-xl mb-2 text-blue-300">Leadership & Vision</h3>
                  <h2 className="text-2xl font-bold mb-4">Mr. Mohankumar N</h2>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">Managing Director</p>
                  
                  <div className="flex gap-6 text-sm text-slate-300 font-light leading-relaxed">
                     <p>
                        With over 5 decades of experience in the HVAC industry, Mr. Mohankumar has been the driving force behind HEVACO's growth. His deep technical knowledge and commitment to quality have established HEVACO as a trusted name in Kerala.
                     </p>
                  </div>
               </div>
               <div className="absolute -bottom-10 -right-10 text-slate-800 opacity-20">
                  <Award size={200} />
               </div>
            </div>
          </div>
        </PdfPage>

        {/* --- PAGE 3: HEALTHCARE SPECIALIZATION --- */}
        <PdfPage pageNumber={3}>
           <div className="px-12 py-8 h-full flex flex-col">
              <div className="mb-8">
                 <h2 className="text-3xl font-bold text-slate-900 serif mb-2">Healthcare Excellence</h2>
                 <p className="text-slate-500 text-sm">Core Specialization: Hospitals, Clean Rooms & Critical Care</p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-10">
                 <div className="space-y-6">
                    <p className="text-sm text-slate-600 leading-relaxed text-justify">
                       HEVACO is the premier provider of hospital HVAC solutions in Kerala. We create climate-controlled environments that meet the stringent requirements of medical facilities, including NABH and NABL accreditations.
                    </p>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                       <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <Stethoscope size={18} /> Specialized Expertise
                       </h4>
                       <ul className="space-y-2 text-sm text-blue-800">
                          <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Operation Theater Climate Control</li>
                          <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> ICU & Critical Care Ventilation</li>
                          <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Clean Room Design (ISO Class 1-8)</li>
                          <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> HEPA & ULPA Filtration Systems</li>
                       </ul>
                    </div>
                 </div>
                 <div className="bg-slate-100 rounded-lg overflow-hidden relative h-64">
                    <img 
                       src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                       className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
                       alt="Hospital Clean Room"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent p-4">
                       <p className="text-white text-xs font-medium">Precision Climate Control for Surgical Environments</p>
                    </div>
                 </div>
              </div>

              <div className="mt-auto">
                 <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Featured Healthcare Projects</h3>
                 <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="border-l-2 border-blue-500 pl-4">
                       <h4 className="font-bold text-slate-900 text-sm">KJK Hospital</h4>
                       <p className="text-xs text-slate-500 mt-1">Complete HVAC Solution (VRF 74HP + OT 39TR)</p>
                       <p className="text-xs font-medium text-blue-600 mt-1">Value: ₹1.03 Crores</p>
                    </div>
                    <div className="border-l-2 border-slate-300 pl-4">
                       <h4 className="font-bold text-slate-900 text-sm">Punarjani Hospital</h4>
                       <p className="text-xs text-slate-500 mt-1">Ductable Split System (45 TR)</p>
                    </div>
                    <div className="border-l-2 border-slate-300 pl-4">
                       <h4 className="font-bold text-slate-900 text-sm">Govt. Hospital, Neyyatinkara</h4>
                       <p className="text-xs text-slate-500 mt-1">AHU Clean Room (16.5 TR)</p>
                    </div>
                    <div className="border-l-2 border-slate-300 pl-4">
                       <h4 className="font-bold text-slate-900 text-sm">Cosmo Hospital</h4>
                       <p className="text-xs text-slate-500 mt-1">Specialized Ventilation Systems</p>
                    </div>
                 </div>
              </div>
           </div>
        </PdfPage>

        {/* --- PAGE 4: PROJECT PORTFOLIO --- */}
        <PdfPage pageNumber={4}>
           <div className="px-12 py-8 h-full flex flex-col">
              <h2 className="text-3xl font-bold text-slate-900 serif mb-8">Client Portfolio</h2>

              <div className="space-y-8">
                 {/* Govt & Defense */}
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-slate-100 rounded text-slate-700"><Building2 size={20}/></div>
                       <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Government & Defense</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {PROJECT_CATEGORIES.find(c => c.id === 'gov')?.clients.map((client, i) => (
                           <div key={i} className="text-xs border border-slate-200 p-3 rounded bg-slate-50 text-slate-700 font-medium">
                              {client}
                           </div>
                        ))}
                    </div>
                 </div>

                 {/* Corporate */}
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-slate-100 rounded text-slate-700"><Briefcase size={20}/></div>
                       <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Corporate & Banking</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {PROJECT_CATEGORIES.find(c => c.id === 'corp')?.clients.map((client, i) => (
                           <div key={i} className="text-xs border border-slate-200 p-3 rounded bg-slate-50 text-slate-700 font-medium">
                              {client}
                           </div>
                        ))}
                    </div>
                 </div>

                 {/* Hospitality */}
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-slate-100 rounded text-slate-700"><Users size={20}/></div>
                       <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Hospitality & Retail</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {PROJECT_CATEGORIES.find(c => c.id === 'hospitality')?.clients.map((client, i) => (
                           <div key={i} className="text-xs border border-slate-200 p-3 rounded bg-slate-50 text-slate-700 font-medium">
                              {client}
                           </div>
                        ))}
                    </div>
                 </div>
              </div>
           </div>
        </PdfPage>

        {/* --- PAGE 5: SERVICES & EXPERTISE --- */}
        <PdfPage pageNumber={5}>
           <div className="px-12 py-8 h-full flex flex-col">
              <h2 className="text-3xl font-bold text-slate-900 serif mb-8">Our Services</h2>

              <div className="grid grid-cols-2 gap-6 mb-8">
                 {SERVICES.map((service) => (
                    <div key={service.id} className="border border-slate-200 p-5 rounded-lg hover:border-blue-300 transition-colors">
                       <div className="text-blue-600 mb-3">
                          <service.icon size={24} />
                       </div>
                       <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                       <p className="text-xs text-slate-500 mb-3 leading-relaxed">{service.description}</p>
                       <div className="flex flex-wrap gap-2">
                          {service.details.map((tag, i) => (
                             <span key={i} className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600 font-medium">
                                {tag}
                             </span>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>

              <div className="mt-auto bg-slate-900 text-white p-6 rounded-lg">
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                       <Wind size={24} />
                    </div>
                    <div>
                       <h3 className="font-bold text-lg mb-1">Annual Maintenance Contracts (AMC)</h3>
                       <p className="text-xs text-slate-300 mb-3">
                          We currently maintain 75+ active AMC contracts, ensuring long-term system reliability and efficiency.
                       </p>
                       <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-slate-400">
                          <span className="flex items-center gap-2">✓ 24/7 Mobile Service Units</span>
                          <span className="flex items-center gap-2">✓ Genuine Spare Parts</span>
                          <span className="flex items-center gap-2">✓ Preventive Maintenance</span>
                          <span className="flex items-center gap-2">✓ Energy Audits</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </PdfPage>

        {/* --- PAGE 6: BACK COVER / CONTACT --- */}
        <PdfPage hideHeader hideFooter className="bg-slate-900 text-white">
           <div className="h-full flex flex-col p-12">
              <div className="flex-1 flex flex-col justify-center items-center text-center">
                 <Logo className="text-white mb-8 scale-150 [&_h1]:text-white [&_span]:text-slate-300" />
                 
                 <h2 className="text-3xl serif mb-12">Partner with Excellence</h2>
                 
                 <div className="space-y-8 w-full max-w-md">
                    <div className="flex items-center gap-6 border-b border-slate-700 pb-6">
                       <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div className="text-left">
                          <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Headquarters</p>
                          <p className="font-light text-sm">Konark, EVRA No. B-72, Elipodu-Valiyavila Road, <br/>Thirumala P.O., Thiruvananthapuram - 695 006</p>
                       </div>
                    </div>

                    <div className="flex items-center gap-6 border-b border-slate-700 pb-6">
                       <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone size={24} />
                       </div>
                       <div className="text-left">
                          <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Contact</p>
                          <p className="font-light text-sm">0471-2362115</p>
                          <p className="font-light text-sm">9447196429 (MD)</p>
                       </div>
                    </div>

                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail size={24} />
                       </div>
                       <div className="text-left">
                          <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Email</p>
                          <p className="font-light text-sm">hevaco_india@yahoo.co.in</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="text-center pt-12 border-t border-slate-800">
                 <p className="text-xs text-slate-500">© {new Date().getFullYear()} HEVACO Cooling Systems (Pvt.) Ltd. All rights reserved.</p>
              </div>
           </div>
        </PdfPage>

      </div>
    </div>
  );
}

export default App;