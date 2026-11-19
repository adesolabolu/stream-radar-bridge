import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Radio,
  ExternalLink,
  Volume2
} from 'lucide-react'

const BOT_URL = 'https://t.me/tt_stream_tracker_bot?start=tiktok'

export default function App() {
  const [showNotification, setShowNotification] = useState(false)
  const [buttonFeedback, setButtonFeedback] = useState<string | null>(null)

  const triggerSimulation = () => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 5000)
  }

  const handleInteractiveClick = (actionName: string, url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }
    setButtonFeedback(actionName)
    setTimeout(() => setButtonFeedback(null), 2000)
  }

  return (
    <div className="min-h-[100dvh] w-full bg-[#0a0f16] text-[#f4f4f6] flex flex-col justify-between items-center px-4 py-6 sm:py-10 relative select-none font-sans antialiased">
      
      {/* Telegram-style ambient glow */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[260px] opacity-10 overflow-hidden" 
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#2481cc] via-[#2ba5e0] to-transparent blur-[90px]" />
      </div>

      {/* Simulated Telegram Push Notification (Glides from top) */}
      <div 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm transition-all duration-300 ${
          showNotification 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-5 scale-[0.96] pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
      >
        <div className="bg-[#17212b]/95 backdrop-blur-xl border border-[#2b3a4a] rounded-2xl p-3.5 shadow-2xl shadow-black/80 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2481cc] flex items-center justify-center text-white shrink-0 shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-[-1px]">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-[11px] text-[#829bb0] mb-0.5">
              <span className="font-semibold tracking-wide uppercase text-[10px]">TikTok Stream Tracker</span>
              <span className="font-mono text-[10px]">now</span>
            </div>
            <p className="text-xs font-semibold text-white truncate">
              🔴 kingnee001 is LIVE on TikTok!
            </p>
            <p className="text-[11px] text-[#8fa5b8] truncate mt-0.5">
              🎬 "GTA VI STREAMING" • 👥 23 Viewers
            </p>
          </div>
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press px-2.5 py-1.5 text-[11px] font-semibold rounded-lg bg-[#2481cc] text-white shrink-0 self-center shadow-sm"
          >
            Open
          </a>
        </div>
      </div>

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#2481cc]/15 border border-[#2481cc]/30 flex items-center justify-center text-[#2481cc]">
            <Radio className="w-4 h-4 animate-pulse" strokeWidth={1.75} />
          </div>
          <span className="text-xs font-semibold tracking-tight text-white">Stream Tracker Bot</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#182533] border border-[#2b3a4a] text-[11px] text-[#829bb0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#27a644] animate-pulse" />
          <span>24/7 Live Radar</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-sm my-auto py-3 flex flex-col">
        
        {/* Headline */}
        <div className="text-center mb-5">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Live Stream Alerts
          </h1>
          <p className="text-xs sm:text-sm text-[#8fa5b8] mt-1.5 leading-relaxed max-w-[300px] mx-auto">
            Get instant push notifications the exact second your favorite TikTok creators go live.
          </p>
        </div>

        {/* Telegram Chat Frame */}
        <div className="w-full bg-[#0e1621] border border-[#202e3d] rounded-2xl p-3 sm:p-3.5 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Telegram Doodle Canvas Pattern Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#202e3d]/80 text-[11px] text-[#6c8295]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#27a644]" />
              <span className="font-semibold text-white">@tt_stream_tracker_bot</span>
            </div>
            <span className="font-mono text-[10px]">telegram bot</span>
          </div>

          {/* Interactive Telegram Message View */}
          <div className="space-y-2">
            {/* Message Bubble */}
            <div className="bg-[#212d3b] text-white rounded-2xl p-3.5 border border-white/5 shadow-md space-y-1.5 relative">
              <p className="font-bold text-sm tracking-wide flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff3b30] animate-ping" />
                kingnee001 is LIVE on TikTok!
              </p>
              <p className="italic text-xs text-[#d1dce6]">
                🎬 "GTA VI STREAMING"
              </p>
              <div className="flex items-center justify-between pt-0.5 text-xs text-[#8fa5b8]">
                <span>👥 Current Viewers: 23</span>
                <span className="text-[10px] text-[#6c8295] font-mono">00:51</span>
              </div>
            </div>

            {/* 6 Inline Keyboard Buttons (2-Column Grid matching bot code) */}
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => handleInteractiveClick('📊 Showing Live Card...')}
                className="btn-press bg-[#2b3a4a] hover:bg-[#344659] text-white text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>📊</span>
                <span>Live Card</span>
              </button>

              <a
                href="https://www.tiktok.com/@kingnee001/live"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press bg-[#2b3a4a] hover:bg-[#344659] text-white text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span className="text-red-500">🔴</span>
                <span className="truncate">Watch on Tik...</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>

              <button
                type="button"
                onClick={() => handleInteractiveClick('🔕 Muted live alerts for kingnee001')}
                className="btn-press bg-[#2b3a4a] hover:bg-[#344659] text-white text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>🔕</span>
                <span className="truncate">Mute Live Alerts</span>
              </button>

              <button
                type="button"
                onClick={() => handleInteractiveClick('🧹 Clearing alerts...')}
                className="btn-press bg-[#2b3a4a] hover:bg-[#344659] text-white text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>🧹</span>
                <span>Clear Alerts</span>
              </button>

              <button
                type="button"
                onClick={() => handleInteractiveClick('📡 Fetching active streams...')}
                className="btn-press bg-[#2b3a4a] hover:bg-[#344659] text-white text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>📡</span>
                <span className="truncate">Active Streams</span>
              </button>

              <button
                type="button"
                onClick={() => handleInteractiveClick('🏠 Returning to Main Menu...')}
                className="btn-press bg-[#2b3a4a] hover:bg-[#344659] text-white text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>🏠</span>
                <span>Main Menu</span>
              </button>
            </div>

            {buttonFeedback && (
              <div className="text-[11px] text-center font-medium text-[#2481cc] bg-[#17212b] p-2 rounded-lg border border-[#2b3a4a] animate-fade-in">
                {buttonFeedback} (Open bot to execute live)
              </div>
            )}
          </div>
        </div>

        {/* Primary High-Converting CTA Button */}
        <div className="w-full mt-4 space-y-2">
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press w-full h-12 rounded-xl bg-[#2481cc] hover:bg-[#2072b4] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#2481cc]/25"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-[-1px]">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span>Open in Telegram & Start Alerts</span>
            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.2} />
          </a>

          {/* Test simulation button */}
          <button
            type="button"
            onClick={triggerSimulation}
            className="btn-press w-full h-9 rounded-lg bg-[#17212b] border border-[#2b3a4a] hover:border-[#384b60] text-[#8fa5b8] hover:text-white text-xs font-medium flex items-center justify-center gap-1.5"
          >
            <Volume2 className="w-3.5 h-3.5 text-[#2481cc]" strokeWidth={1.75} />
            <span>Simulate Incoming Push Notification</span>
          </button>
        </div>

        {/* Value Points */}
        <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-[#8fa5b8]">
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3 text-[#27a644]" strokeWidth={2} />
            &lt; 5s Live Pings
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3 text-[#27a644]" strokeWidth={2} />
            Free Forever
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3 text-[#27a644]" strokeWidth={2} />
            iOS & Android
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-sm text-center text-[11px] text-[#55697a]">
        Stream Tracker Bot &bull; Direct Telegram Notifications for TikTok Streams
      </footer>
    </div>
  )
}
