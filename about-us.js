let sections = document.querySelectorAll('.sliding');
let nextButton = document.getElementById('nextBtn');
let prevButton = document.getElementById('prevBtn');

let firstIndex = 0; 
let updateSections = () => {
    sections.forEach((section, index) => {
        section.classList.remove('active', 'prev', 'next'); 

        if (index === firstIndex) {
            section.classList.add('active'); 
        } else if (index === (firstIndex - 1 + sections.length) % sections.length) {
            section.classList.add('prev');
        } else if (index === (firstIndex + 1) % sections.length) {
            section.classList.add('next'); 
        }
    });
};

updateSections();

nextButton.addEventListener('click', () => {
    
    firstIndex = (firstIndex + 1) % sections.length;
    updateSections();
});

prevButton.addEventListener('click', () => {
    firstIndex = (firstIndex - 1 + sections.length) % sections.length;
    updateSections();
});
