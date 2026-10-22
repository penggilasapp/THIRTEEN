import React, { useState } from 'react';
import { useTour } from '../../context/TourContext';
import { CONTACT_INFO_DATA } from '../../data/policyData';
import { PolicyModal, PolicyModalType } from './PolicyModal';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Lock, 
  HelpCircle, 
  FileText, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight,
  Instagram,
  Youtube,
  Download,
  Database
} from 'lucide-react';
import { DataExportModal } from '../common/DataExportModal';

export const Footer: React.FC = () => {
  const { setViewMode, setClientPage } = useTour();
  const [activePolicyModal, setActivePolicyModal] = useState<PolicyModalType>(null);
  const [dataExportOpen, setDataExportOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#091A14] text-emerald-100/70 text-xs border-t border-emerald-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* 1. Brand Info & Statement */}
            <div className="space-y-4">
              <div 
                onClick={() => setClientPage('home')}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-[#091A14] flex items-center justify-center font-black text-lg font-serif shadow-sm group-hover:scale-105 transition-transform">
                  13
                </div>
                <div>
                  <div className="font-extrabold text-white text-base font-['Playfair_Display']">
                    THIRTEEN
                  </div>
                  <div className="text-[10px] text-emerald-300 font-sans tracking-widest uppercase">
                    Bespoke Indonesian Expeditions
                  </div>
                </div>
              </div>

              <p className="text-emerald-100/70 text-xs leading-relaxed">
                A hybrid tour operator delivering tailor-made expeditions across Bali, Java, and beyond.
              </p>

              <div className="text-[11px] text-emerald-400/80 font-sans">
                Tailored Journeys Across Java &amp; Bali • Registered Operator
              </div>

              {/* Quiet Admin & Export Gateways */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => setViewMode('admin')}
                  className="py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white/90 text-xs flex items-center gap-2 transition-colors cursor-pointer w-fit"
                >
                  <Lock className="w-3 h-3 text-emerald-300" />
                  <span>Operator Admin Portal</span>
                </button>
              </div>
            </div>

            {/* 2. Explore */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider font-['Playfair_Display']">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-emerald-100/80">
                <li>
                  <button
                    onClick={() => setClientPage('destinations')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Destinations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setClientPage('tours')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Tours &amp; Expeditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setClientPage('experiences')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Experiences
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicyModal('booking_info')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Accommodation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setClientPage('travel-guide')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Articles &amp; Guides
                  </button>
                </li>
              </ul>
            </div>

            {/* 3. Guest Support */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider font-['Playfair_Display']">
                Guest Support
              </h4>
              <ul className="space-y-2 text-xs text-emerald-100/80">
                <li>
                  <button
                    onClick={() => setClientPage('faq')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicyModal('booking_info')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Booking Information
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicyModal('terms')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Travel Requirements
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setClientPage('about-us')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Operational Standards
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setClientPage('contact')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Contact Support
                  </button>
                </li>
              </ul>
            </div>

            {/* 4. Contact Information & Follow Us */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider font-['Playfair_Display']">
                Contact Information
              </h4>

              <div className="space-y-2.5 text-xs text-emerald-100/90">
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">{CONTACT_INFO_DATA.phoneWhatsApp}</span>
                    <span className="text-[10px] text-emerald-300 block">WhatsApp 24/7</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0 mt-0.5" />
                  <span className="text-white">{CONTACT_INFO_DATA.reservationEmail}</span>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0 mt-0.5" />
                  <span className="text-emerald-100/80">Sanur (Bali) • Banyuwangi • Yogyakarta</span>
                </div>
              </div>

              {/* Follow Us */}
              <div className="pt-2 border-t border-emerald-900/60 space-y-2">
                <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">
                  Follow Us
                </h5>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
                    aria-label="WhatsApp"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Credits & Legal Compliance */}
          <div className="pt-8 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-300/60">
            <div>
              © 2026 THIRTEEN Operator Tour. All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setActivePolicyModal('terms')} className="hover:text-white cursor-pointer">
                Terms &amp; Conditions
              </button>
              <span>|</span>
              <button onClick={() => setActivePolicyModal('privacy')} className="hover:text-white cursor-pointer">
                Privacy Policy
              </button>
              <span>|</span>
              <button onClick={() => setActivePolicyModal('cancellation')} className="hover:text-white cursor-pointer">
                Cancellation Policy
              </button>
            </div>
            <div>
              Proudly Operated in Indonesia
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Policy Document Modal */}
      <PolicyModal
        type={activePolicyModal}
        onClose={() => setActivePolicyModal(null)}
      />

      {/* Source Data Export Modal */}
      <DataExportModal
        isOpen={dataExportOpen}
        onClose={() => setDataExportOpen(false)}
      />
    </>
  );
};
