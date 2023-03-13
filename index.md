---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

🌱 Hey there! Welcome to my Github Page! My name is Elvann and I'm a music artist and web developer! On this website, I'd love to share resources I create, my thoughts and other fun project I'm working on!

Here a couple things on my mind I'd like to share:

- Coding Projects
- UI & UX Designs
- Music Learning Resources
- Language Learning & Finnish Language

See you around!

---

## Pages

{% assign page_title = page.title %}

  <ul>
    {% for page in site.pages %}
        {% if page.title and page.title != page_title %}
        <li><a href="{{ page.url }}">{{ page.title }}</a></li>
        {% endif %}  
    {% endfor %}
  </ul>

---

## Archives

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%B %Y'" %}
{% for yearMonth in postsByYearMonth %}

  <h3>{{ yearMonth.name }}</h3>
  <ul>
    {% for post in yearMonth.items %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
