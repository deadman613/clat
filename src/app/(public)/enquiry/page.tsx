import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Book Free Counselling — LexAscent",
  description: "Book a free CLAT counselling session with our experts. Get a personalized study plan and course recommendation.",
};

export default function EnquiryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="gradient-hero py-12">
          <div className="container-custom text-center">
            <h1 className="font-playfair text-4xl font-bold text-white mb-3">Book Free Counselling</h1>
            <p className="text-blue-200/70">Get expert guidance from our CLAT specialists — completely free.</p>
          </div>
        </div>
        {/* Import the counselling section directly */}
        <div className="bg-white">
          <div className="container-custom py-16 max-w-4xl">
            <p className="text-center text-slate-500 mb-6 text-sm">
              Fill the form below and our counsellor will contact you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

async function ContactForm() {
  // Server component — renders the form
  return (
    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-slate-900">Get in Touch</h2>
          <p className="text-slate-600 text-sm">Our counsellors are available Monday to Saturday, 9 AM to 7 PM IST.</p>
          {[
            { icon: "📞", label: "Phone", value: "+91 98765 43210" },
            { icon: "✉️", label: "Email", value: "hello@lexascent.in" },
            { icon: "📍", label: "Address", value: "304, Law Tower, Janpath, New Delhi — 110001" },
            { icon: "🕒", label: "Hours", value: "Mon–Sat: 9 AM – 7 PM IST" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="text-xs font-semibold text-slate-500">{item.label}</div>
                <div className="text-slate-800 text-sm font-medium">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-600 rounded-xl p-6 text-white">
          <h3 className="font-semibold mb-3">What you get in the free session:</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            {["Personalized course recommendation", "Preparation strategy based on your profile", "CLAT syllabus walkthrough", "Customized study plan", "Scholarship assessment"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-slate-500 text-sm">
        Use the enquiry form on the <a href="/" className="text-blue-600 font-semibold">homepage</a> or call us directly to book your session.
      </p>
    </div>
  );
}
