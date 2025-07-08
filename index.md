---
layout: home
author_profile: true
title: " "
---

<style>
/* Modern Hamburger Menu Styles - Black & White */
.greedy-nav {
    position: relative;
    min-height: 4rem;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    margin-bottom: 2rem;
}

.greedy-nav a {
    display: block;
    margin: 0 1.5rem;
    padding: 0.75rem 0;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.greedy-nav a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.7));
    transition: width 0.3s ease;
}

.greedy-nav a:hover {
    color: #f5f5f5;
    transform: translateY(-2px);
}

.greedy-nav a:hover::before {
    width: 100%;
}

.greedy-nav .visible-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
}

.greedy-nav .visible-links li {
    flex: none;
    margin: 0;
}

.greedy-nav .visible-links a {
    position: relative;
    display: block;
    margin: 0 1.5rem;
    padding: 0.75rem 0;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Modern Hamburger Button */
.greedy-nav .nav-toggle {
    display: none;
    position: relative;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.greedy-nav .nav-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.2);
}

.greedy-nav .nav-toggle:active {
    transform: scale(0.95);
}

/* Animated Hamburger Lines */
.greedy-nav .nav-toggle::before,
.greedy-nav .nav-toggle::after {
    content: '';
    position: absolute;
    left: 12px;
    width: 24px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.greedy-nav .nav-toggle::before {
    top: 16px;
    box-shadow: 0 8px 0 #fff;
}

.greedy-nav .nav-toggle::after {
    top: 32px;
}

/* Hamburger Animation */
.greedy-nav .nav-toggle.active::before {
    transform: rotate(45deg);
    top: 23px;
    box-shadow: none;
}

.greedy-nav .nav-toggle.active::after {
    transform: rotate(-45deg);
    top: 23px;
}

/* Mobile styles */
@media (max-width: 768px) {
    .greedy-nav {
        padding: 0 1rem;
        justify-content: space-between;
    }
    
    .greedy-nav .nav-toggle {
        display: block;
        margin: 0;
        order: 2;
    }
    
    .greedy-nav .visible-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(45, 45, 45, 0.98) 100%);
        backdrop-filter: blur(20px);
        border-radius: 0 0 20px 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-top: none;
        display: none;
        flex-direction: column;
        z-index: 999;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        margin: 0;
        padding: 1rem 0;
        animation: slideDown 0.3s ease-out;
        order: 3;
        width: 100%;
    }
    
    .greedy-nav .visible-links.nav-open {
        display: flex;
    }
    
    .greedy-nav .visible-links li {
        width: 100%;
        margin: 0;
    }
    
    .greedy-nav .visible-links a {
        padding: 1rem 2rem;
        margin: 0;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }
    
    .greedy-nav .visible-links li:last-child a {
        border-bottom: none;
    }
    
    .greedy-nav .visible-links a::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s;
    }
    
    .greedy-nav .visible-links a:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(10px);
        color: #f5f5f5;
    }
    
    .greedy-nav .visible-links a:hover::before {
        left: 100%;
    }
    
    .greedy-nav .visible-links a:active {
        transform: translateX(5px);
    }

    /* Add logo/brand space on the left */
    .greedy-nav::before {
        content: '';
        flex: 1;
        order: 1;
    }
}

/* Desktop layout adjustments */
@media (min-width: 769px) {
    .greedy-nav {
        justify-content: flex-end;
    }
}

/* Smooth slide animation */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Your existing styles */
.project-item, .post-item {
    background: #f8f9fa;
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 8px;
    border-left: 4px solid #007bff;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.tech-item {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-top: 3px solid #28a745;
}

.tech-item h4 {
    color: #333;
    margin-bottom: 0.5rem;
}

.navigation-buttons, .contact-buttons {
    margin: 2rem 0;
    text-align: center;
}

.navigation-buttons .btn, .contact-buttons .btn {
    margin: 0.5rem;
    display: inline-block;
}

.btn--large {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
}

@media (max-width: 768px) {
    .tech-grid {
        grid-template-columns: 1fr;
    }
    
    .navigation-buttons .btn, .contact-buttons .btn {
        display: block;
        width: 100%;
        margin: 0.5rem 0;
    }
}
</style>

<!-- Modern Navigation Menu -->
<nav class="greedy-nav">
    <button class="nav-toggle" onclick="toggleNav()"></button>
    <ul class="visible-links" id="navLinks">
        <li><a href="https://asmuie-analytics.github.io/">Home</a></li>
        <li><a href="mailto:asmui@uitm.edu.my">Contact Me</a></li>
        <li><a href="https://asmuie-analytics.github.io/modules/">View Courses</a></li>
    </ul>
</nav>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    window.toggleNav = function() {
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navLinks && navToggle) {
            navLinks.classList.toggle('nav-open');
            navToggle.classList.toggle('active');
        }
    };

    // Close nav when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.greedy-nav');
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (nav && navLinks && navToggle && !nav.contains(event.target)) {
            navLinks.classList.remove('nav-open');
            navToggle.classList.remove('active');
        }
    });

    // Close nav when window is resized to desktop
    window.addEventListener('resize', function() {
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navLinks && navToggle && window.innerWidth > 768) {
            navLinks.classList.remove('nav-open');
            navToggle.classList.remove('active');
        }
    });
});
</script>

# Welcome to My Data Science Portfolio

I'm a lecturer specializing in statistics and programming for data science, passionate about teaching students how to transform data into meaningful insights. Here you'll find my research projects, teaching materials, and demonstrations using R and Python.

## About My Teaching

I focus on empowering students through hands-on learning in:
- **Statistical Analysis**: From descriptive statistics to advanced modeling techniques
- **R Programming**: Data manipulation, visualization with ggplot2, and statistical computing
- **Python for Data Science**: pandas, scikit-learn, matplotlib, and data analysis workflows

## Featured Projects

{% for project in site.projects limit:6 %}
  <div class="project-item">
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p>{{ project.excerpt }}</p>
    <p><strong>Tech Stack:</strong> {{ project.tech_stack }}</p>
    <p><strong>Course/Topic:</strong> {{ project.course_topic }}</p>
    <p>
      <a href="{{ project.github_url }}" class="btn btn--primary">View Code</a>
      {% if project.demo_url %}
        <a href="{{ project.demo_url }}" class="btn btn--info">Live Demo</a>
      {% endif %}
      {% if project.notebook_url %}
        <a href="{{ project.notebook_url }}" class="btn btn--success">View Notebook</a>
      {% endif %}
    </p>
  </div>
{% endfor %}

<div class="navigation-buttons">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn--large btn--primary">View All Projects</a>
  <a href="https://asmuie-analytics.github.io/" class="btn btn--large btn--info" target="_blank">Visit My GitHub Pages</a>
</div>

## Recent Research & Teaching Materials

{% for post in site.posts limit:3 %}
  <div class="post-item">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt }}</p>
    <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
  </div>
{% endfor %}

<a href="{{ '/posts/' | relative_url }}" class="btn btn--inverse">View All Posts</a>

## Programming Languages & Tools

<div class="tech-grid">
  <div class="tech-item">
    <h4>📈 R Programming</h4>
    <p>Statistical computing, dplyr, ggplot2, shiny applications, and advanced statistical modeling</p>
  </div>
  
  <div class="tech-item">
    <h4>🐍 Python</h4>
    <p>Data analysis with pandas, machine learning with scikit-learn, visualization with matplotlib and seaborn</p>
  </div>
  
  <div class="tech-item">
    <h4>📊 Data Visualization</h4>
    <p>Creating compelling visual stories with data using both R and Python visualization libraries</p>
  </div>
  
  <div class="tech-item">
    <h4>🔢 Statistical Analysis</h4>
    <p>Descriptive statistics, hypothesis testing, regression analysis, and predictive modeling</p>
  </div>
</div>

## Connect With Me

Interested in learning more about data science or collaborating on research projects? I'm always excited to connect with fellow data enthusiasts and students.

<div class="contact-buttons">
  <a href="https://asmuie-analytics.github.io/" class="btn btn--primary" target="_blank">GitHub Pages</a>
  <a href="mailto:asmui@uitm.edu.my" class="btn btn--info">Email Me</a>
  <a href="https://asmuie-analytics.github.io/modules/" class="btn btn--success">View Courses</a>
</div>
