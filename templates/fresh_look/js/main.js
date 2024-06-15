// Example data for testing
const data = {
    "name": "David Anderson",
    "title": "Web & Graphic Designer",
    "contact": {
        "email": "youremail@gmail.com",
        "phone": "+123 456 789",
        "website": "www.yourdomainname.com",
        "address": "Country, City, MO 56347"
    },
    "aboutMe": "My name is Thomas Hussey Lorem ipsum dolor sit amet...",
    "experience": [
        {
            "role": "Website Designer",
            "company": "Company Name Here - USA",
            "period": "2015 - Present",
            "details": "Porttitor amet massa Dodne por the ttilor dolor edsdst nisl..."
        },
        {
            "role": "UI and UX Designer",
            "company": "Company Name Here - USA",
            "period": "2013 - 2015",
            "details": "Porttitor amet massa Dodne por the ttilor dolor edsdst nisl..."
        }
    ],
    "education": [
        {
            "degree": "Master of Social Science",
            "institution": "Your College Name Here - USA",
            "period": "2015 - Present"
        },
        {
            "degree": "Bachelor of Arts",
            "institution": "Your College Name Goes Here - USA",
            "period": "2013 - 2015"
        }
    ],
    "expertise": [
        "Wordpress", "Adobe Photoshop", "Microsoft Word", "Adobe Illustrator", "Adobe PowerPoint"
    ],
    "interests": "Sports - Football, Music - Pop, Video games, Video Editing, Photography"
};

document.addEventListener('DOMContentLoaded', () => {
    // Populate data
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('email').textContent = data.contact.email;
    document.getElementById('phone').textContent = data.contact.phone;
    document.getElementById('website').textContent = data.contact.website;
    document.getElementById('address').textContent = data.contact.address;
    document.getElementById('about-me').querySelector('p').textContent = data.aboutMe;
    
    const experienceSection = document.getElementById('experience').querySelector('div');
    data.experience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.innerHTML = `<h3>${exp.role}</h3><p>${exp.company} - ${exp.period}</p><p>${exp.details}</p>`;
        experienceSection.appendChild(expDiv);
    });
    
    const educationSection = document.getElementById('education').querySelector('div');
    data.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.innerHTML = `<h3>${edu.degree}</h3><p>${edu.institution} - ${edu.period}</p>`;
        educationSection.appendChild(eduDiv);
    });

    const expertiseSection = document.getElementById('expertise').querySelector('div');
    expertiseSection.innerHTML = `<p>${data.expertise.join(', ')}</p>`;
    
    document.getElementById('interests').querySelector('p').textContent = data.interests;
});

function downloadPDF() {
    const element = document.querySelector('.container');
    html2pdf(element, {
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
