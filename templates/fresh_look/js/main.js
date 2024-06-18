// Example data for testing
const data = {
    "name": "Jones Laura",
    "title": "AI/ML/DL/LLM Engineer",
    "contact": {
        "email": "joneslaura07@gmail.com",
        "phone": "+91 94438 78524",
        "website": "www.yourdomainname.com",
        "address": "Nagercoil, India"
    },
    "aboutMe": "An enthusiastic AI/ML/DL/LLM Engineer skilled in developing and implementing machine learning, deep learning models, and prompt engineering techniques. Experienced in diverse roles, with a passion for continuous learning and contributing to innovative AI projects.",
    "experience": [
        {
            "role": "Associate Software Engineer (AI/ML/DL/LLM)",
            "company": "CapeStart - India",
            "period": "2023 - Present",
            "details": "I specialize in developing advanced AI applications using machine learning, deep learning models, and large language models. With a rapid learning curve, I quickly mastered vision-based projects and collaborated effectively with cross-functional teams, writing Python scripts to enhance project outcomes. My expertise includes training models for Key Information Extraction with PaddleOCR, fine-tuning OCR tools, and implementing advanced algorithms like RNN, LSTM, and XGBoost to improve model accuracy. I significantly enhanced screening performance using zero-shot training with LLMs and played a key role in deploying the SLR Screening project within the PharmaNLP platform. Currently, I focus on indexing with HNSW and using innovative methods to continuously improve results."
        },
        {
            "role": "System Engineer",
            "company": "CapeStart - India",
            "period": "2022 - 2023",
            "details": "I managed IT infrastructure and supported employees with IT-related inquiries, efficiently handling high-pressure workloads while optimizing workflows to enhance service delivery and security. I self-hosted servers and implemented new firewall rules to improve network security. My achievements include receiving the Super Star Award for Q1 2023 for mastering IT processes, providing seamless support, and initiating new team growth processes. I received appreciation from IT Managers and Team Leads for my dedication, technical expertise, problem-solving skills, and proactive approach."
        },
        {
            "role": "Support Analyst",
            "company": "CapeStart - India",
            "period": "2021 - 2022",
            "details": "I handled Tier 1 cases for EZ Texting customers, achieving a top Customer Effort Score of 4.58. I managed complex Tier 2 and Tier 3 tickets, including developing API code for scheduling SMS messages, which was adopted by the US team. Promoted to Tier 2 within five months, I also served as a trainer, creating onboarding modules still in use. My exceptional performance earned me the Employee of the Month award three times."
        },
        {
            "role": "Material Under Repair Coordinator",
            "company": "Video Home - Qatar",
            "period": "2020 - 2021",
            "details": "I managed stocks worth $1.5 million under repair for resale. I implemented new protocols to correct operational flaws, achieving a 100% effective workflow. Utilizing ORION and AXIA systems, I ensured accurate stock and job card analysis, and developed advanced Excel tools for detailed analysis. My efforts resulted in a 99.9% audit compliance rate."
        },
        {
            "role": "Content Creator",
            "company": "QtPi Robotics - India",
            "period": "2019 - 2020",
            "details": "I created engaging and educational robotics videos for students, simplifying complex concepts with clear and captivating graphics. I introduced innovative ideas that inspired the team, leading to significant improvements in video quality that persisted after my departure. I used Adobe Premiere Pro and After Effects for video production, as well as Code2Play for robotics programming."
        }
    ],
    "education": [
        {
            "degree": "B.Sc. Information Technology & Management",
            "institution": "Arul Anandar College - India",
            "period": "2014 - 2017"
        },
        {
            "degree": "HSC Computer Science",
            "institution": "Belfield Matriculation Higher Secondary School - India",
            "period": "2012 - 2012"
        },
        {
            "degree": "SSLC",
            "institution": "Belfield Matriculation Higher Secondary School - India",
            "period": "2010 - 2010"
        }
    ],
    "expertise": [
        "Python, C, C++, Networking and Routing, HTML, CSS, Microsoft: Excel, Powerpoint, Word", "Adobe: Premier Pro, Photoshop, After Effects, Illustrator"
    ],
    "interests": "Sports - Cycling[Gravel, Endurance], Football, Music - Pop, Video Game, Video Editing, Photography"
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
        filename: 'jones_laura_resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
