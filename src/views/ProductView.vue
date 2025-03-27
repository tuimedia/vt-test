<script setup>
import { computed } from 'vue'
import { products as productsData } from '@/data/products'

// Props to receive the product ID from the route
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const product = computed(() => productsData.find(p => p.id === parseInt(props.id)))

// Get all other products for the navigation
const otherProducts = computed(() => 
  productsData.filter(p => p.id !== parseInt(props.id))
)</script>

<template>
  <div v-if="product" class="product-detail">
    <router-link :to="{ name: 'transitions' }" class="back-button">
      ← Back to Products
    </router-link>
    
    <div class="product-hero">
      <div 
        class="product-image" 
        :style="`view-transition-name: product-image-${product.id}`">
        <img :src="product.image" :alt="product.name">
      </div>
      
      <div class="product-info">
        <h1 :style="`view-transition-name: product-name-${product.id}`">
          {{ product.name }}
        </h1>
        
        <div 
          class="color-tag"
          :style="{
            backgroundColor: product.color,
            viewTransitionName: `product-color-${product.id}`
          }"
        ></div>
        
        <p class="description">{{ product.description }}</p>
        
        <ul class="details">
          <li v-for="(detail, index) in product.details" :key="index">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
    
    <section class="product-navigation">
      <h2>More Products</h2>
      <div class="nav-products-grid">
        <router-link 
          v-for="navProduct in otherProducts" 
          :key="navProduct.id" 
          :to="{ name: 'product', params: { id: navProduct.id } }"
          class="nav-product-card"
        >
          <div class="nav-product-image">
            <img :src="navProduct.image" :alt="navProduct.name" :style="`view-transition-name: product-image-${navProduct.id}`">
          </div>
          <div class="nav-product-name">
            {{ navProduct.name }}
          </div>
          <div 
            class="nav-product-color-tag"
            :style="{
              backgroundColor: navProduct.color
            }"
          ></div>
        </router-link>
      </div>
    </section>
  </div>
  <div v-else class="error">
    Product not found
  </div>
</template>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.back-button {
  background: var(--color-background-soft);
  border: none;
  padding: 0.75rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  color: var(--color-text);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  text-decoration: none;
}

.back-button:hover {
  background: var(--color-accent);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.product-hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .product-hero {
    grid-template-columns: 1fr 1fr;
  }
}

.product-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.product-image img {
  width: 100%;
  height: auto;
  display: block;
}

.product-info {
  position: relative;
}

h1 {
  margin-bottom: 2rem;
  font-size: 2rem;
  line-height: 1.2;
}

.color-tag {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.description {
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;
}

.details {
  background: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: 8px;
  list-style-type: none;
}

.details li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.details li:last-child {
  border-bottom: none;
}

.error {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
  background: var(--color-background-soft);
  border-radius: 8px;
  font-size: 1.5rem;
  color: #e74c3c;
}

/* Product Navigation Styles */
.product-navigation {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.product-navigation h2 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.nav-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.nav-product-card {
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  background-color: var(--color-background);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: var(--color-text);
  display: block;
}

.nav-product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.nav-product-image {
  height: 100px;
  overflow: hidden;
}

.nav-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-product-name {
  padding: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-product-color-tag {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
</style>