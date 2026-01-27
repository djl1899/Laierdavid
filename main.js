function toggleMenu() {
  const menu = document.getElementById("menu-overlay");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// INFINITE SLIDER
const track = document.querySelector('.slider-track');
if (track) {
  const slides = Array.from(track.children);
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });
}
const projects = document.querySelectorAll('.project');
const previewImage = document.getElementById('preview-image');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    previewImage.src = project.dataset.image;
    previewImage.classList.add('active');
  });
});
