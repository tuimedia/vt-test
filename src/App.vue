<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/transitions" class="nav-link">Transitions Demo</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>

    <footer>
      <p>View Transitions API Demo | Vue.js 3</p>
    </footer>
  </div>
</template>

<style>
/* Global styles for view transitions */
::view-transition-old(root) {
  animation: 300ms cubic-bezier(0.4, 0, 0.2, 1) both fade-out;
}

::view-transition-new(root) {
  animation: 300ms cubic-bezier(0.4, 0, 0.2, 1) both fade-in;
}

@keyframes fade-in {
  from { opacity: 0; }
}

@keyframes fade-out {
  to { opacity: 0; }
}
</style>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: var(--color-background-soft);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: all 0.3s;
}

.router-link-active {
  background-color: var(--color-accent);
  color: white;
}

main {
  flex: 1;
  padding: 2rem 1rem;
}

footer {
  background-color: var(--color-background-soft);
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.8;
}
</style>
