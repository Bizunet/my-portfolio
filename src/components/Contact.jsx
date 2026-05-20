import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, MapPin, Mail, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

// ── Fill these in after setting up EmailJS (see README) ──
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const services = [
  "Event Poster Design","Logo & Brand Identity","Print Design",
  "Social Media Graphics","Ethiopic Typography","Commercial Advertising","Other",
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-cream-100 dark:bg-ink-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[4px] uppercase text-amber mb-2">Get In Touch</p>
            <h2 className="font-display text-[clamp(40px,5.5vw,64px)] leading-none tracking-wide mb-1">
              LET'S<br />
              <span className="text-amber">WORK</span><br />
              TOGETHER
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber to-crimson mt-3 mb-6" />
            <p className="text-[14px] text-ink-600/60 dark:text-cream-200/50 leading-relaxed mb-8">
              Have a project in mind? Whether it's an event poster, a brand identity,
              or something in between — reach out and let's build something meaningful.
            </p>

            <div className="flex flex-col gap-0">
              {[
                { icon: <MapPin size={15}/>,         label:"Location", value:"Dire Dawa, Ethiopia" },
                { icon: <Mail size={15}/>,            label:"Email",    value:"bizunehsode@gmail.com" },
                { icon: <MessageCircle size={15}/>,   label:"Telegram", value:"@your_telegram" },
              ].map(r => (
                <div key={r.label}
                  className="flex items-center gap-4 py-4 border-b border-amber/15">
                  <div className="w-9 h-9 border border-amber/20 rounded-sm flex items-center justify-center
                    flex-shrink-0 text-amber">
                    {r.icon}
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[2px] uppercase text-ink-600/50 dark:text-cream-300/40">{r.label}</p>
                    <p className="text-[13px] text-ink-800 dark:text-cream-50 mt-0.5">{r.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white dark:bg-ink-700 border border-amber/15 rounded-sm p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-amber" />
                <h3 className="font-serif text-xl font-semibold">Message Sent!</h3>
                <p className="text-[13px] text-ink-600/60 dark:text-cream-200/50">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button onClick={() => setStatus("idle")}
                  className="mt-4 text-[11px] tracking-[2px] uppercase text-amber hover:underline">
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* hidden field so EmailJS knows where to send */}
                <input type="hidden" name="to_email" value="bizunehsode@gmail.com" />

                <Field label="Your Name"     name="from_name"  type="text"  placeholder="Full name" required />
                <Field label="Email Address" name="reply_to"   type="email" placeholder="your@email.com" required />

                <div>
                  <label className="block text-[9px] tracking-[2px] uppercase text-ink-600/50 dark:text-cream-300/40 mb-2">
                    Service Needed
                  </label>
                  <select name="service"
                    className="w-full bg-cream-50 dark:bg-ink-800 border border-amber/20 text-ink-800
                      dark:text-cream-50 px-4 py-3 text-[13px] rounded-sm outline-none
                      focus:border-amber transition-colors appearance-none">
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] tracking-[2px] uppercase text-ink-600/50 dark:text-cream-300/40 mb-2">
                    Message
                  </label>
                  <textarea name="message" rows={4} placeholder="Tell me about your project…" required
                    className="w-full bg-cream-50 dark:bg-ink-800 border border-amber/20 text-ink-800
                      dark:text-cream-50 px-4 py-3 text-[13px] rounded-sm outline-none resize-y
                      focus:border-amber transition-colors" />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-[12px]">
                    <AlertCircle size={14}/> Something went wrong. Please try again.
                  </div>
                )}

                <button type="submit" disabled={status === "sending"}
                  className="w-full bg-amber hover:bg-amber/dark text-white font-display text-base
                    tracking-[4px] py-4 rounded-sm transition-all duration-300 flex items-center
                    justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed
                    hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber/20">
                  {status === "sending" ? "SENDING…" : <><Send size={15}/> SEND MESSAGE</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, required }) {
  return (
    <div>
      <label className="block text-[9px] tracking-[2px] uppercase text-ink-600/50 dark:text-cream-300/40 mb-2">
        {label}
      </label>
      <input type={type} name={name} placeholder={placeholder} required={required}
        className="w-full bg-cream-50 dark:bg-ink-800 border border-amber/20 text-ink-800
          dark:text-cream-50 px-4 py-3 text-[13px] rounded-sm outline-none
          focus:border-amber transition-colors" />
    </div>
  );
}
