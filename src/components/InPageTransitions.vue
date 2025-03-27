<script setup>
import { ref } from 'vue'

// Image gallery
const images = [
  { id: 1, src: 'https://picsum.photos/id/10/800/500', alt: 'Landscape 1' },
  { id: 2, src: 'https://picsum.photos/id/11/800/500', alt: 'Landscape 2' },
  { id: 3, src: 'https://picsum.photos/id/12/800/500', alt: 'Landscape 3' }
]
const currentImageIndex = ref(0)

const nextImage = () => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % images.length
    })
  } else {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }
}

const prevImage = () => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
    })
  } else {
    currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
  }
}

// Expandable card
const isExpanded = ref(false)

const toggleCard = () => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      isExpanded.value = !isExpanded.value
    })
  } else {
    isExpanded.value = !isExpanded.value
  }
}

// Theme toggle
const isDarkTheme = ref(false)

const toggleTheme = () => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      isDarkTheme.value = !isDarkTheme.value
      document.documentElement.classList.toggle('dark-theme')
    })
  } else {
    isDarkTheme.value = !isDarkTheme.value
    document.documentElement.classList.toggle('dark-theme')
  }
}
</script>

<template>
  <div 
    class="in-page-transitions" 
    :class="{ 'dark-theme': isDarkTheme }"
  >
    <h1>In-Page View Transitions</h1>
    
    <section>
      <h2>1. Image Gallery</h2>
      <div class="gallery">
        <button @click="prevImage" class="gallery-btn prev-btn" style="view-transition-name: gallery-arrow-prev">←</button>
        <div class="image-container" style="view-transition-name: gallery-image">
          <img 
            :src="images[currentImageIndex].src" 
            :alt="images[currentImageIndex].alt"
            :key="images[currentImageIndex].id"
            class="gallery-img"
            style="transform: translateX(0);"
          />
        </div>
        <button @click="nextImage" class="gallery-btn next-btn" style="view-transition-name: gallery-arrow-next">→</button>
      </div>
      <p class="description">Images transition smoothly between each other with fade effects</p>
    </section>

    <section>
      <h2>2. Expandable Card</h2>
      <div 
        class="card" 
        :class="{ 'expanded': isExpanded }" 
        @click="toggleCard"
        style="view-transition-name: expand-card"
      >
        <h3>Click to expand</h3>
        <div class="card-content" v-if="isExpanded">
          <p>This card expands and collapses with a smooth transition effect.</p>
          <p>The View Transitions API makes it easy to animate between two states.</p>
        </div>
      </div>
      <p class="description">Card smoothly transitions between collapsed and expanded states</p>
    </section>

    <section>
      <h2>3. Theme Toggle</h2>
      <button 
        @click="toggleTheme" 
        class="theme-toggle"
        :class="{ 'dark': isDarkTheme }"
      >
        {{ isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode' }}
      </button>
      <p class="description">Theme transitions smoothly between light and dark</p>
    </section>
  </div>
</template>

<style scoped>
.in-page-transitions {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--color-background-soft);
}

h1 {
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.description {
  margin-top: 1rem;
  font-style: italic;
  opacity: 0.8;
}

/* Gallery styles */
.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform: translateX(0);
}

.gallery-btn {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

/* Card styles */
.card {
  background: var(--color-background);
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: height 0.3s;
}

.card h3 {
  margin: 0;
  text-align: center;
}

.card-content {
  margin-top: 1rem;
}

.card-content p {
  margin-bottom: 0.5rem;
}

.expanded {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Theme toggle styles */
.theme-toggle {
  display: block;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dark-theme {
  --color-background: #121212;
  --color-background-soft: #1e1e1e;
  --color-text: #f5f5f5;
  --color-border: #333;
}

/* Simplified transitions - using consistent fade effects */
::view-transition-old(gallery-image),
::view-transition-old(gallery-arrow-prev),
::view-transition-old(gallery-arrow-next) {
  animation-name: fade-out;
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
}

::view-transition-new(gallery-image),
::view-transition-new(gallery-arrow-prev),
::view-transition-new(gallery-arrow-next) {
  animation-name: fade-in;
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
}

/* Card transitions */
::view-transition-old(expand-card) {
  animation-name: fade-out;
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
}

::view-transition-new(expand-card) {
  animation-name: fade-in;
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
}

/* Simple fade animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>