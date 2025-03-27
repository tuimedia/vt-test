<script setup>
</script>

<template>
  <div class="about">
    <h1>About View Transitions</h1>
    
    <div class="content">
      <section>
        <h2>What is the View Transitions API?</h2>
        <p>
          The View Transitions API provides a standardized way to create animated transitions between 
          different states of a document, both within a single page and between different pages. 
          It allows for smooth animations when elements change, appear, or disappear.
        </p>
      </section>
      
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Handles complex animations between page states automatically</li>
          <li>Works with both single-page applications and multi-page navigations</li>
          <li>Provides fine-grained control over transition effects</li>
          <li>Fallbacks gracefully in unsupported browsers</li>
          <li>Easy to implement with minimal code changes</li>
        </ul>
      </section>
      
      <section>
        <h2>Browser Support</h2>
        <p>
          The View Transitions API is supported in Chromium-based browsers (Chrome, Edge, Opera, etc.) 
          as of 2023. Support in Firefox and Safari is planned but not yet implemented.
          This demo provides fallbacks for unsupported browsers.
        </p>
      </section>
      
      <section>
        <h2>Learn More</h2>
        <p>
          Visit the
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API" target="_blank" rel="noopener">
            MDN documentation
          </a>
          or the
          <a href="https://developer.chrome.com/docs/web-platform/view-transitions/" target="_blank" rel="noopener">
            Chrome Developers guide
          </a>
          for more information about the View Transitions API.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  background-color: var(--color-background-soft);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

section {
  margin-bottom: 2rem;
}

h2 {
  color: var(--color-accent);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

a {
  font-weight: 500;
}
</style>
