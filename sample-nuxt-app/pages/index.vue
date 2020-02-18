<template>
  <div class="container">
    <h1>Sample Nuxt App</h1>
    <ul>
      <li v-for="i in 30" :key="i">
        <nuxt-link :to="`/articles/${i}`">Article {{ i }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
