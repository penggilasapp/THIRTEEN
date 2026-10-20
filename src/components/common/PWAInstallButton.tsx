import React, { useState } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { Download, Share2, PlusSquare, X, Smartphone, Check } from 'lucide-react';

export const PWAInstallButton: React.FC<{ variant?: 'header' | 'floating' | 'banner' }> = ({ variant = 'header' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installing, setInstalling] = useState(false);

  // If already running as standalone PWA, hide button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    setInstalling(true);
    await install();
    setInstalling(false);
  };

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={handleInstallClick}
        className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer border border-emerald-400/40"
        title="Pasang aplikasi THIRTEEN di layar beranda untuk akses offline"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline font-medium text-[11px]">
          {installing ? 'Memasang...' : 'Install PWA'}
        </span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="px-2.5 py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-200 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
          title="Pasang di iPhone / iPad untuk mode offline"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline text-[11px]">Install iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-slate-800 border border-stone-200 relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold">
                  13
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Pasang di iPhone / iPad</h3>
                  <p className="text-[11px] text-stone-500">Akses itinerary offline saat di gunung</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-600 border-y border-stone-100 py-4 my-2">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                  <span>Sentuh tombol <strong>Share</strong> (ikon kotak berpanah ke atas <Share2 className="w-3 h-3 inline text-blue-600" />) pada bilah bawah Safari.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                  <span>Gulir ke bawah lalu pilih <strong>Add to Home Screen</strong> (<PlusSquare className="w-3 h-3 inline text-emerald-700" /> Tambah ke Layar Utama).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                  <span>Sentuh <strong>Add</strong> di pojok kanan atas. Aplikasi siap dibuka offline kapan saja.</span>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-2 w-full rounded-xl bg-[#0D201A] hover:bg-[#13362A] py-2.5 text-xs font-bold text-white transition-colors"
              >
                Mengerti
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
