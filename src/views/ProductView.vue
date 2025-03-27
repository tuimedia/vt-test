<script setup>
import { computed } from 'vue'
// Router is no longer needed since we're using router-link
// import { useRouter } from 'vue-router'

// Props to receive the product ID from the route
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// const router = useRouter()

// Product database (in a real app, this would be fetched from an API)
const productsData = [
  {
    id: 1,
    name: 'Mountain Landscape',
    image: 'https://picsum.photos/id/29/800/600',
    color: '#3498db',
    description: 'Breathtaking mountain views with clear blue skies and lush valleys. Perfect for desktop wallpapers or inspiring posters. This stunning natural scene captures the majesty of high peaks against a perfect blue sky.',
    details: [
      'Resolution: 800x600 pixels',
      'Location: Grand Tetons, Wyoming',
      'Photographer: John Smith',
      'Season: Summer'
    ]
  },
  {
    id: 2,
    name: 'Ocean Sunset',
    image: 'https://picsum.photos/id/37/800/600',
    color: '#e74c3c',
    description: 'Spectacular sunset over the ocean with vibrant orange and red hues. This dramatic seascape captures the perfect moment as the sun dips below the horizon, painting the sky and water with brilliant warm colors.',
    details: [
      'Resolution: 800x600 pixels',
      'Location: Malibu Beach, California',
      'Photographer: Emily Chen',
      'Time: Golden hour'
    ]
  },
  {
    id: 3,
    name: 'Forest Trail',
    image: 'https://picsum.photos/id/15/800/600',
    color: '#2ecc71',
    description: 'Serene forest path surrounded by towering trees and dappled sunlight. This peaceful woodland scene invites viewers to imagine walking along the quiet forest floor, with sunlight filtering through the dense canopy overhead.',
    details: [
      'Resolution: 800x600 pixels',
      'Location: Olympic National Park',
      'Photographer: Marcus Lee',
      'Season: Spring'
    ]
  },
  {
    id: 4,
    name: 'Desert Dunes',
    image: 'https://picsum.photos/id/28/800/600',
    color: '#f39c12',
    description: 'Sweeping desert landscape with golden sand dunes stretching to the horizon. The stark beauty of this arid wilderness is captured in perfect detail, showing the mesmerizing patterns created by wind and sand.',
    details: [
      'Resolution: 800x600 pixels',
      'Location: Sahara Desert, Morocco',
      'Photographer: Sarah Johnson',
      'Time: Early morning'
    ]
  },
  {
    id: 5,
    name: 'Coastal Cliffs',
    image: 'https://picsum.photos/id/65/800/600',
    color: '#1abc9c',
    description: 'Dramatic coastal cliffs with crashing waves and rugged shorelines. This powerful seascape showcases the raw power of nature where land meets sea, with towering rock formations standing defiant against the relentless ocean.',
    details: [
      'Resolution: 800x600 pixels',
      'Location: Cliffs of Moher, Ireland',
      'Photographer: David O\'Brien',
      'Weather: Partly cloudy'
    ]
  },
  {
    id: 6,
    name: 'Lake Reflection',
    image: 'https://picsum.photos/id/76/800/600',
    color: '#9b59b6',
    description: 'Tranquil lake reflecting the surrounding mountains and sky like a mirror. This peaceful alpine scene captures that perfect moment of stillness when the water surface becomes a flawless reflection of the majestic landscape.',
    details: [
      'Resolution: 800x600 pixels',
      'Location: Lake Louise, Canada',
      'Photographer: Jasmine Wong',
      'Season: Fall'
    ]
  }
]

const product = computed(() => productsData.find(p => p.id === parseInt(props.id)))

// Get all other products for the navigation
const otherProducts = computed(() => 
  productsData.filter(p => p.id !== parseInt(props.id))
)

// Using router-link instead
// const goBack = () => {
//   router.push({ name: 'transitions' })
// }

// We'll use router-link instead of this function
// const goToProduct = (productId) => {
//   router.push({ name: 'product', params: { id: productId } })
// }
</script>

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
          <div class="nav-product-name" :style="`view-transition-name: product-name-${navProduct.id}`">
            {{ navProduct.name }}
          </div>
          <div 
            class="nav-product-color-tag"
            :style="{
              backgroundColor: navProduct.color,
              viewTransitionName: `product-color-${navProduct.id}`
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