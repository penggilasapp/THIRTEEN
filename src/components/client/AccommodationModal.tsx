import React from 'react';
import { X, Sparkles, MapPin, CheckCircle2, Bed, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTour } from '../../context/TourContext';

interface AccommodationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ACCOMMODATIONS_DATA = [
  {
    id: 'acc-plataran-bromo',
    name: 'Plataran Bromo Resort & Spa',
    location: 'Tosari, Tengger Highlands · Mount Bromo',
    type: 'Alpine Heritage Mountain Lodge',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    description: 'Perched in the misty agricultural foothills of Mount Bromo at 2,000m elevation. Panoramic mountain chalets, Swiss-inspired alpine architecture, heated plunge pools, and pre-dawn 4x4 departure point.',
    amenities: ['Private Chalets & Villas', 'Heated Mountain Pools', 'Pre-Dawn Butler Service', 'Direct 4x4 Track Access']
  },
  {
    id: 'acc-dialoog-banyuwangi',
    name: 'Dialoog Banyuwangi',
    location: 'Kalipuro, East Java Coastline · Mount Ijen Hub',
    type: 'Oceanfront Minimalist Beachfront Resort',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'Facing the Bali Strait with direct coconut palm oceanfront views. Serene minimalist concrete-and-timber architecture, tranquil infinity pool, and seamless midnight transfers to Ijen Crater base camp.',
    amenities: ['Oceanfront Suites', 'Infinity Lap Pool', 'Midnight Expedition Breakfast', 'Bali Ferry Private Transfer']
  },
  {
    id: 'acc-amanjiwo',
    name: 'Amanjiwo Heritage Sanctuary',
    location: 'Menoreh Hills, Magelang · Yogyakarta / Borobudur',
    type: 'Royal Monolithic Stone Sanctuary',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed in the amphitheater silhouette of Borobudur temple from local limestone. Sweeping vistas across terraced rice fields to the ninth-century stupas, private pool suites, and royal Mataram banquets.',
    amenities: ['Limestone Pool Pavilions', 'Direct Borobudur Dawn Access', 'Archaeologist-in-Residence', 'Royal Javanese Spa']
  },
  {
    id: 'acc-mandapa-ubud',
    name: 'Mandapa, a Ritz-Carlton Reserve',
    location: 'Ayung River Gorge · Ubud, Bali',
    type: 'Riverfront Cultural Sanctuary',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    description: 'Secluded along the sacred Ayung River amidst centuries-old subak rice terraces. Private villa pools, sound of rushing rapids, holistic wellness pavilions, and private temple Melukat water blessings.',
    amenities: ['Private River Pool Villas', 'Subak Rice Terrace Views', 'Personal Patih (Butler)', 'Organic Farm-to-Table Dining']
  },
  {
    id: 'acc-alila-uluwatu',
    name: 'Alila Villas Uluwatu',
    location: 'Pecatu Limestone Bluffs · Uluwatu, Bali',
    type: 'Clifftop Architectural Masterpiece',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    description: 'Poised 100 meters above the Indian Ocean on the southern limestone plateau. Iconic cantilevered sunset cabana, infinity pool hanging over the cliffs, and private chauffeur access to Uluwatu temple.',
    amenities: ['Cantilevered Cliff Cabana', 'Private Plunge Pools', 'Indian Ocean Horizon Views', 'VIP Sunset Access']
  }
];

export const AccommodationModal: React.FC<AccommodationModalProps> = ({ isOpen, onClose }) => {
  const { openInquireForPackage } = useTour();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF9F6] border border-stone-200 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative my-auto">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#0F2922] text-white flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Stays &amp; Alpine Lodges</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display'] text-white">
              Curated Accommodations
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
              Every THIRTEEN journey pairs private overland transport with audited boutique hotels, high-altitude alpine lodges, and private pool villas tailored to your comfort tier.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Accommodations List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACCOMMODATIONS_DATA.map((acc) => (
              <div
                key={acc.id}
                className="rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={acc.image}
                      alt={acc.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0F2922] text-white">
                      {acc.type}
                    </span>
                    <span className="absolute bottom-2.5 left-3 text-xs text-emerald-200 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-300 shrink-0" />
                      <span className="line-clamp-1">{acc.location}</span>
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 font-['Playfair_Display']">
                      {acc.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {acc.description}
                    </p>

                    <div className="pt-2 space-y-1">
                      {acc.amenities.slice(0, 3).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                          <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-900 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Included in Custom Itinerary</span>
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      openInquireForPackage(undefined, undefined);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#0F2922] hover:bg-[#153A30] text-white text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-emerald-950 font-['Playfair_Display']">
                Have a preferred hotel, private villa, or luxury tented camp?
              </h4>
              <p className="text-xs text-emerald-900/80 mt-0.5">
                We accommodate your personal hotel reservations or book contracted wholesale rates on your behalf.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                openInquireForPackage();
              }}
              className="px-5 py-2.5 rounded-xl bg-[#0F2922] text-white hover:bg-[#153A30] text-xs font-bold whitespace-nowrap transition-all shadow-xs"
            >
              Request Custom Stay Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
