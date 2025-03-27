<script setup>
import { ref } from 'vue'

// Product data
const products = ref([
  {
    id: 1,
    name: 'Mountain Landscape',
    image: 'https://picsum.photos/id/29/800/600',
    color: '#3498db',
    description: 'Breathtaking mountain views with clear blue skies and lush valleys.'
  },
  {
    id: 2,
    name: 'Ocean Sunset',
    image: 'https://picsum.photos/id/37/800/600',
    color: '#e74c3c',
    description: 'Spectacular sunset over the ocean with vibrant orange and red hues.'
  },
  {
    id: 3,
    name: 'Forest Trail',
    image: 'https://picsum.photos/id/15/800/600',
    color: '#2ecc71',
    description: 'Serene forest path surrounded by towering trees and dappled sunlight.'
  },
  {
    id: 4,
    name: 'Desert Dunes',
    image: 'https://picsum.photos/id/28/800/600',
    color: '#f39c12',
    description: 'Sweeping desert landscape with golden sand dunes stretching to the horizon.'
  },
  {
    id: 5,
    name: 'Coastal Cliffs',
    image: 'https://picsum.photos/id/65/800/600',
    color: '#1abc9c',
    description: 'Dramatic coastal cliffs with crashing waves and rugged shorelines.'
  },
  {
    id: 6,
    name: 'Lake Reflection',
    image: 'https://picsum.photos/id/76/800/600',
    color: '#9b59b6',
    description: 'Tranquil lake reflecting the surrounding mountains and sky like a mirror.'
  }
])
</script>

<template>
  <div class="transitions-page">
    <h1>Cross-Page Transitions</h1>
    <p class="description">
      Click on any product to see a smooth transition to its detail page. 
      The View Transitions API allows for seamless navigation between pages.
    </p>

    <div class="products-grid">
      <router-link 
        v-for="product in products" 
        :key="product.id" 
        :to="{ name: 'product', params: { id: product.id } }"
        class="product-card"
      >
        <div 
          class="product-image"
          :style="`view-transition-name: product-image-${product.id}`"
        >
          <img :src="product.image" :alt="product.name">
        </div>
        <div 
          class="product-name" 
          :style="`view-transition-name: product-name-${product.id}`"
        >
          {{ product.name }}
        </div>
        <div 
          class="product-color-tag"
          :style="{
            backgroundColor: product.color,
            viewTransitionName: `product-color-${product.id}`
          }"
        ></div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.transitions-page {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 0.5rem;
}

.description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0.8;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.product-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  position: relative;
  background-color: var(--color-background);
  text-decoration: none;
  color: var(--color-text);
  display: block;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-name {
  padding: 1rem;
  font-weight: 500;
  font-size: 1.2rem;
}

.product-color-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>