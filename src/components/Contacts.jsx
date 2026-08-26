import { useState } from "react";
import { CONTACT } from "../data/contactData";
import {
  Mail,
  // FaGithub,
  // FaLinkedin,
  FileText,
  Copy,
  Check,
  Send,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdError } from "react-icons/md";
import handleResumeClick from "../utils/resumeDownload";

const Contacts = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const { developerProfile } = CONTACT;

  return (
    <div id="contact" className="scroll-mt-24 py-20">
      <div className="flex flex-col gap-y-5">
        <p className="font-mono font-[400px] text-sm text-accent uppercase">
          {CONTACT.index}
        </p>
        <h1 className="font-bold text-4xl text-text-primary | max-md:text-3xl">
          {CONTACT.title}
        </h1>
        <p className="text-text-muted">{CONTACT.description}</p>
      </div>
      <div className="mt-13 flex items-stretch gap-x-5 gap-y-5 justify-between flex-wrap | max-lg:flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-lg bg-[#131826] border border-[#1E2638] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#8B93A7] uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#3ECF8E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
                  Active Inbox
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded bg-[#0E131F] border border-[#1E2638]">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#3ECF8E] shrink-0" />
                  <span className="text-sm font-mono text-[#E4E7EC] truncate">
                    {developerProfile.email}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-[#131826] border border-[#1E2638] hover:border-[#3ECF8E] text-[#8B93A7] hover:text-[#3ECF8E] text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />
                        <span className="text-[#3ECF8E]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${developerProfile.email}`}
                    className="px-3 py-1.5 rounded bg-[#3ECF8E] text-[#0B0F19] text-xs font-medium hover:bg-[#34b77c] transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={developerProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-lg bg-[#131826] border border-[#1E2638] hover:border-[#3ECF8E] transition-all group flex flex-col justify-between"
              >
                <FaLinkedin className="w-5 h-5 text-[#8B93A7] group-hover:text-[#3ECF8E] transition-colors mb-4" />
                <div>
                  <div className="text-xs font-mono text-[#8B93A7]">
                    Network
                  </div>
                  <div className="text-sm font-medium text-[#E4E7EC] group-hover:text-white">
                    LinkedIn
                  </div>
                </div>
              </a>

              <a
                href={developerProfile.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-lg bg-[#131826] border border-[#1E2638] hover:border-[#3ECF8E] transition-all group flex flex-col justify-between"
              >
                <FaGithub className="w-5 h-5 text-[#8B93A7] group-hover:text-[#3ECF8E] transition-colors mb-4" />
                <div>
                  <div className="text-xs font-mono text-[#8B93A7]">
                    Codebases
                  </div>
                  <div className="text-sm font-medium text-[#E4E7EC] group-hover:text-white">
                    GitHub
                  </div>
                </div>
              </a>

              <button
                type="button"
                onClick={handleResumeClick}
                className="p-4 rounded-lg bg-[#131826] border border-[#1E2638] hover:border-[#3ECF8E] transition-all group flex flex-col justify-between text-left cursor-pointer"
              >
                <FileText className="w-5 h-5 text-[#3ECF8E] mb-4" />
                <div>
                  <div className="text-xs font-mono text-[#8B93A7]">
                    Curriculum Vitae
                  </div>
                  <div className="text-sm font-medium text-[#3ECF8E]">
                    View Resume
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 sm:p-7 rounded-lg bg-[#131826] border border-[#1E2638]">
              <div className="text-xs font-mono text-[#8B93A7] uppercase tracking-wider mb-4 border-b border-[#1E2638] pb-3">
                Send a Direct Message
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full ||bg-[#3ECF8E]/20|| bg-[#FFFBEB] text-[#92400E] |--text-[#3ECF8E]--| flex items-center justify-center mx-auto">
                    <MdError />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#E4E7EC]">
                    Message Couldn't Reach Ajmat Ali
                  </h4>
                  <p className="text-xs text-[#8B93A7] max-w-xs mx-auto">
                    {/* Thank you for reaching out. I'll get back to you at{" "} */}
                    Thank you for filling out the form. This contact option is
                    currently offline. Please use the social media or email
                    links listed on this portfolio to get in touch. I appreciate
                    your patience and will reply quickly..
                    {/* <span className="text-[#3ECF8E]">
                      {formData.email}
                    </span>{" "} */}
                    {/* shortly. */}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-4 text-xs font-mono text-[#3ECF8E] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-[#8B93A7] mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Sarah Connor"
                        className="w-full px-3.5 py-2.5 rounded bg-[#0E131F] border border-[#1E2638] text-sm text-[#E4E7EC] placeholder-[#5D677F] focus:outline-none focus:border-[#3ECF8E] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-[#8B93A7] mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded bg-[#0E131F] border border-[#1E2638] text-sm text-[#E4E7EC] placeholder-[#5D677F] focus:outline-none focus:border-[#3ECF8E] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[#8B93A7] mb-1.5"
                    >
                      Message / Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Ajmat, we're looking for a MERN developer to build..."
                      className="w-full px-3.5 py-2.5 rounded bg-[#0E131F] border border-[#1E2638] text-sm text-[#E4E7EC] placeholder-[#5D677F] focus:outline-none focus:border-[#3ECF8E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded bg-[#3ECF8E] text-[#0B0F19] font-medium text-xs font-mono flex items-center justify-center gap-2 hover:bg-[#34b77c] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending payload...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
