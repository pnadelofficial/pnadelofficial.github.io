---
layout: defaults
title: "NLP Research & Consulting"
---

<section class="hero">
  <h1>Turning Language Data into Solutions</h1> 
  <p class="subtitle">Digital Humanities Natural Language Processing Specialist at Tufts University | Consultant for NLP, AI and ML Pipelines</p>
  <a href="#projects" class="button">View Projects</a>
  <a href="#contact" class="button">Get in Touch</a>
</section>

<section id="projects">
  <h2>Selected Projects</h2>
  <div class="project-grid">
    {% for project in site.projects limit:3 %}
      <div class="project-card">
        <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
        <p>{{ project.description }}</p>
        <span class="tag">{{ project.tags | join: ", " }}</span>
      </div>
    {% endfor %}
  </div>
  <a href="/projects" class="button">See All Projects</a>
</section>

<section id="blog-highlights">
  <h2>Recent Writing</h2>
  {% for post in site.posts limit:2 %}
    <article>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </article>
  {% endfor %}
</section>