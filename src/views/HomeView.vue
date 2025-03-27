<script setup>
import InPageTransitions from '@/components/InPageTransitions.vue'
</script>

<template>
  <div class="home">
    <h1>View Transitions API Demo</h1>
    <p class="intro">
      This demo showcases the new View Transitions API for creating smoother transitions in web applications.
    </p>
    
    <InPageTransitions />
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.9;
}
</style>
