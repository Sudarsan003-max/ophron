import { useState } from "react";
import { ShieldCheck, Lock, CheckCircle2, X } from "lucide-react";

export function SecurityShieldModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Security Badge Indicator */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-pine-950/90 px-3.5 py-2 font-mono text-[10px] text-emerald-400 backdrop-blur-md shadow-2xl transition-all hover:border-emerald-400 hover:bg-pine-900 hover:scale-105 active:scale-95"
        title="View Data Privacy & Operational Security Guarantees"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
        <span className="font-semibold tracking-wider uppercase hidden sm:inline">256-Bit SSL Protected</span>
      </button>

      {/* Security & Data Privacy Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-2xl border border-brass/40 bg-pine-950 p-6 sm:p-8 text-paper shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-sage/70 hover:bg-paper/10 hover:text-paper transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brass/40 bg-brass/10 text-brass-300">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-champagne">
                  Platform &amp; Data Security
                </h3>
                <p className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase">
                  PDPA Compliant · 256-Bit SSL Encrypted
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-sage leading-relaxed">
              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-pine-900/60 p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-paper">Personal Data Protection Act (PDPA)</h4>
                  <p className="mt-0.5 text-xs text-sage/80">
                    All client information, site specifications, and contact records submitted through GKT International are strictly encrypted and processed under Singapore PDPA regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-pine-900/60 p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-paper">End-to-End Transport Security</h4>
                  <p className="mt-0.5 text-xs text-sage/80">
                    HTTPS TLS 1.3 encryption &amp; Content Security Policy (CSP) headers protect user interaction from interception, tampering, or malicious script injections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-pine-900/60 p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-paper">Statutory License &amp; Safety Verification</h4>
                  <p className="mt-0.5 text-xs text-sage/80">
                    National Environment Agency (NEA) Class A Operator License and WSH Council bizSAFE Level 3 verified status.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-paper/10 pt-4 flex justify-between items-center text-xs font-mono text-sage">
              <span>GKT International Pte. Ltd.</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded bg-brass px-4 py-2 font-mono text-xs font-semibold text-pine-950 uppercase hover:bg-champagne transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
