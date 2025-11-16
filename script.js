// ==================== Smooth Navigation & Mobile Menu ==================== 

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // ==================== Fetch GitHub Projects ==================== 
  fetchGitHubProjects();

  // ==================== Form Submission ==================== 
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});

// Fetch GitHub repositories
async function fetchGitHubProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  try {
    const response = await fetch('https://api.github.com/users/ChiefYasser/repos?sort=updated&per_page=6');
    if (!response.ok) throw new Error('Failed to fetch repos');
    
    const repos = await response.json();
    projectsGrid.innerHTML = '';

    repos.forEach((repo, index) => {
      if (!repo.fork) {
        const projectCard = createProjectCard(repo);
        projectsGrid.appendChild(projectCard);
        setTimeout(() => {
          projectCard.style.animation = `slideIn 0.5s ease-out ${index * 0.1}s both`;
        }, 0);
      }
    });

    if (repos.length === 0) {
      projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">No public repositories found</p>';
    }
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">Unable to load projects. Please try again later.</p>';
  }
}

// Create individual project card
function createProjectCard(repo) {
  const card = document.createElement('div');
  card.className = 'project-card';

  const name = document.createElement('a');
  name.href = repo.html_url;
  name.target = '_blank';
  name.className = 'project-name';
  name.textContent = repo.name;

  const header = document.createElement('div');
  header.className = 'project-header';

  const link = document.createElement('a');
  link.href = repo.html_url;
  link.target = '_blank';
  link.className = 'project-link';
  link.innerHTML = '<i class="fas fa-external-link-alt"></i>';
  link.title = 'View on GitHub';

  header.appendChild(name);
  header.appendChild(link);

  const description = document.createElement('p');
  description.className = 'project-description';
  description.textContent = repo.description || 'No description provided';

  const language = document.createElement('span');
  language.className = 'project-language';
  language.textContent = repo.language || 'JavaScript';

  card.appendChild(header);
  card.appendChild(description);
  card.appendChild(language);

  return card;
}

// Handle contact form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const message = `New message from ${formData.get('name')} (${formData.get('email')}): ${formData.get('message')}`;
  
  // Simulate form submission (in production, would send to backend)
  console.log('Form submitted:', message);
  
  // Show success message
  alert('Thank you for your message! I\'ll get back to you soon.');
  this.reset();
}

// ==================== Scroll Animations ==================== 
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe skill categories and project cards on scroll
document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-category');
  const statCards = document.querySelectorAll('.stat');
  
  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });

  statCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });
});

// ==================== Navbar Active Link ==================== 
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.3)';
  } else {
    navbar.style.borderBottomColor = 'var(--color-border)';
  }
});

// ==================== Utility Functions ==================== 

// Get current year for footer
document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerYear = document.querySelector('.footer p');
  if (footerYear) {
    footerYear.textContent = `© ${year} Yassir Nmar. All rights reserved.`;
  }
});