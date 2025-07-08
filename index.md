---
layout: home
author_profile: true
title: "Data Science Portfolio"
---

# Welcome to My Portfolio

I'm a data scientist and web developer passionate about turning data into insights and building interactive applications. Here you'll find a showcase of my latest projects, from machine learning models to web applications.

## Featured Projects

<div class="feature__wrapper">
  {% for project in site.projects limit:6 %}
    <div class="feature__item">
      <div class="archive__item">
        <div class="archive__item-body">
          <h2 class="archive__item-title">
            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          </h2>
          <div class="archive__item-excerpt">
            {{ project.excerpt | markdownify }}
          </div>
          <p><strong>Tech Stack:</strong> {{ project.tech_stack }}</p>
          <p>
            <a href="{{ project.github_url }}" class="btn btn--primary">View Code</a>
            {% if project.demo_url %}
              <a href="{{ project.demo_url }}" class="btn btn--info">Live Demo</a>
            {% endif %}
          </p>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

[View All Projects](/projects/){: .btn .btn--large}
