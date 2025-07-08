---
layout: home
author_profile: true
title: "Data Science Portfolio"
---

# Welcome to My Portfolio

I'm a data scientist and web developer passionate about turning data into insights and building interactive applications. Here you'll find a showcase of my latest projects, from machine learning models to web applications.

## Featured Projects

{% for project in site.projects limit:6 %}
  <div class="project-item">
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p>{{ project.excerpt }}</p>
    <p><strong>Tech Stack:</strong> {{ project.tech_stack }}</p>
    <p>
      <a href="{{ project.github_url }}" class="btn btn--primary">View Code</a>
      {% if project.demo_url %}
        <a href="{{ project.demo_url }}" class="btn btn--info">Live Demo</a>
      {% endif %}
    </p>
  </div>
{% endfor %}

<a href="{{ '/projects/' | relative_url }}" class="btn btn--large">View All Projects</a>
