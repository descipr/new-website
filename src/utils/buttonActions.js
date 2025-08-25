const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const joinOurCommunity = () => {
  openInNewTab("https://www.linkedin.com/company/descipr/");
};

export const openWhatsApp = () => {
  openInNewTab("https://wa.me/9148398744");
};

export const openYouTube = () => {
  openInNewTab("https://www.youtube.com/@descipr");
};

export const scrollToSchool = () => {
  const element = document.getElementById("school-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToCollege = () => {
  const element = document.getElementById("college-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToAiBootcamp = () => {
  const element = document.getElementById("campuseco");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToProducts = () => {
  const element = document.getElementById("mainproducts");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};