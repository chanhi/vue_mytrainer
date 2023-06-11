<template>
  <div class="exercises-container">
    <header class="exercises-header">
      <div>Exercises</div>
    </header>

    <div class="image-grid">
      <div v-for="(image, index) in getImageFiles()" :key="index" class="card">
        <img :src="require(`@/assets/exercises/${image}`)" alt="Image" />
        <div class="img-desc">{{ image.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ExercisesView',
  components: {},
  methods: {
    getImageFiles () {
      const images = []
      const requireImages = require.context(
        '@/assets/exercises',
        false,
        /\.(png|jpe?g|gif|svg)$/
      )
      requireImages.keys().forEach((key) => {
        images.push(key.slice(2))
      })
      return images
    }
  }
}
</script>

<style>
.exercises-container {
  width: 100%;
}
.exercises-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.image-grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.card {
  width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid #ccc;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
