document.addEventListener('DOMContentLoaded', function() {
    fetch('js/resume_data.json')
      .then(response => response.json())
      .then(resumeData => {
  
        // Function to create contact details
        function createContactDetails(data) {
          const contactContainer = document.getElementById('contact');
          data.forEach(item => {
            const contactDiv = document.createElement('div');
            contactDiv.innerHTML = `<i class="fa fa-${item.subcategory.toLowerCase()}"></i> ${item.content}`;
            contactContainer.appendChild(contactDiv);
          });
        }
  
        // Function to create items within a section (Experience, Education)
        function createItems(sectionId, data) {
          const sectionContainer = document.getElementById(sectionId);
          let currentItem = {}; // Store data for the current item being built
  
          data.forEach(item => {
            if (item.subcategory === 'Job' || item.subcategory === 'College' || item.subcategory === 'School') {
              // If a new item is starting, create the HTML structure
              if (Object.keys(currentItem).length !== 0) {
                // Append the previous item to the container before starting a new one
                createItemElement(sectionContainer, currentItem);
                currentItem = {}; // Reset for the next item
              }
            }
  
            // Store the current item's data
            currentItem[item.title] = item.content;
          });
  
          // Append the last item
          if (Object.keys(currentItem).length !== 0) {
            createItemElement(sectionContainer, currentItem);
          }
        }
  
        // Helper function to create the HTML for an item (Job, Education)
        function createItemElement(sectionContainer, itemData) {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
  
          for (const key in itemData) {
            const element = document.createElement(key === 'Job Role' || key === 'Degree' || key === 'Grade' ? 'h3' : 'p');
            element.innerHTML = itemData[key];
            if (key === 'Duration' || key === 'Year') {
              element.classList.add('duration');
            }
            itemDiv.appendChild(element);
          }
  
          sectionContainer.appendChild(itemDiv);
        }
  
        // Function to create skills list
        function createSkillsList(data) {
          const skillsContainer = document.getElementById('expertise');
          const skillsDiv = document.createElement('div');
          skillsDiv.classList.add('skills');
          data.forEach(item => {
            if (item.subcategory === 'Technical Skill' || item.subcategory === 'Personal Skill') {
              const skillItems = item.content.split(', '); // Assuming skills are comma-separated
              skillItems.forEach(skill => {
                const skillDiv = document.createElement('div');
                skillDiv.classList.add('skill');
                skillDiv.textContent = skill;
                skillsDiv.appendChild(skillDiv);
              });
            }
          });
          skillsContainer.appendChild(skillsDiv);
        }
  
        // Function to create interests list
        function createInterestsList(data) {
          const interestsContainer = document.getElementById('interests');
          const interestsList = document.createElement('ul');
          data.forEach(item => {
            if (item.title === 'Interests') {
              const interestItems = item.content.split(', '); // Assuming interests are comma-separated
              interestItems.forEach(interest => {
                const interestItem = document.createElement('li');
                interestItem.textContent = interest;
                interestsList.appendChild(interestItem);
              });
            }
          });
          interestsContainer.appendChild(interestsList);
        }
  
        // Populate the resume sections
        createContactDetails(resumeData.contact);
        createItems('experience', resumeData.experience);
        createItems('education', resumeData.education);
        createSkillsList(resumeData.expertise);
        createInterestsList(resumeData.interests);
        document.getElementById('about').textContent = resumeData.about[0].content; // Assuming About Me is a single item
  
      })
      .catch(error => console.error('Error loading JSON:', error));
  });