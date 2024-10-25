// JavaScript for the gallery slide functionality

// Get all sections and the buttons
const sections = document.querySelectorAll('.sliding');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

let currentIndex = 0; // Track the current section index

// Function to update the visible section
const updateSections = () => {
    sections.forEach((section, index) => {
        section.classList.remove('active', 'prev', 'next'); // Reset classes

        if (index === currentIndex) {
            section.classList.add('active'); // Show current section
        } else if (index === (currentIndex - 1 + sections.length) % sections.length) {
            section.classList.add('prev'); // Show previous section to the left
        } else if (index === (currentIndex + 1) % sections.length) {
            section.classList.add('next'); // Show next section to the right
        }
    });
};

// Initial call to display the first section
updateSections();

// Next button click event
nextButton.addEventListener('click', () => {
    // Increment the index, loop back to the first section if at the last one
    currentIndex = (currentIndex + 1) % sections.length;
    updateSections();
});

// Previous button click event
prevButton.addEventListener('click', () => {
    // Decrement the index, loop back to the last section if at the first one
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    updateSections();
});
