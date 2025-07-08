---
layout: home
author_profile: true
title: " "
---

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

<style>
.project-item, .post-item {
  background: #f8f9fa;
  padding: 1.5rem;
  margin: 1rem
