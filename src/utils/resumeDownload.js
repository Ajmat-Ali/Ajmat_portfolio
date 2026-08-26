import { CONTACT } from "../data/contactData";

const handleResumeClick = (e) => {
  e.preventDefault();

  // Open in new tab
  window.open(CONTACT.developerProfile.resume, "_blank", "noopener,noreferrer");

  // Trigger download
  const link = document.createElement("a");
  link.href = CONTACT.developerProfile.resume;
  link.download = "AjmatAli_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default handleResumeClick;
