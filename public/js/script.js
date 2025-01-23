
// Sample question paper data (you can replace this with actual data from a backend)
const questionPapers = {
    mathematics: [
        { year: 2024, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Fall', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2024, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Fall', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
    ],
    physics: [
        { year: 2024, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Fall', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' }
    ],
    chemistry: [
        { year: 2024, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Fall', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' }
    ],
    biology: [
        { year: 2024, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Fall', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' }
    ],
    english: [
        { year: 2024, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Fall', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' }
    ],
    computer: [
        { year: 2024, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Fall', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' },
        { year: 2023, semester: 'Spring', link: 'https://drive.google.com/file/d/1ZIG6sw2PjB8OXRN94qhvU-v5VweRZFWC/view?usp=sharing' }
    ]
};

// Get DOM elements
const modal = document.getElementById('questionPaperModal');
const modalTitle = document.getElementById('modalSubjectTitle');
const questionPapersList = document.getElementById('questionPapersList');
const closeBtn = document.querySelector('.close-btn');
const subjectCards = document.querySelectorAll('.subject-card');

// Add click event listeners to subject cards
subjectCards.forEach(card => {
    card.addEventListener('click', () => {
        const subject = card.dataset.subject;
        showQuestionPapers(subject);
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Function to display question papers for a subject
function showQuestionPapers(subject) {
    const papers = questionPapers[subject];
    modalTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1) + ' Question Papers';
    
    // Clear previous content
    questionPapersList.innerHTML = '';
    
    // Add question papers to the list
    papers.forEach(paper => {
        const paperItem = document.createElement('div');
        paperItem.className = 'question-paper-item';
        paperItem.innerHTML = `
            <span>${paper.semester} ${paper.year}</span>
            <a href="${paper.link}" target="_blank">Download PDF</a>
        `;
        questionPapersList.appendChild(paperItem);
    });
    
    // Show the modal
    modal.style.display = 'block';
}


// Get the modal and query button
const queryModal = document.getElementById('queryModal');
const queryButton = document.getElementById('queryButton');
const closeBtn1 = document.querySelector('.close-btn');

// Open the modal when the query button is clicked
queryButton.addEventListener('click', () => {
    queryModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    queryModal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === queryModal) {
        queryModal.style.display = 'none';
    }
});
