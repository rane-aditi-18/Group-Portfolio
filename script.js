function showSection(id) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((sec) => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }
  
  // Show first section by default
  window.onload = () => {
    showSection("aman");
  };
  