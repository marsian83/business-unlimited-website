<script setup lang="ts">
interface propTypes {
  title: string;
  description: string;
  isFor: string;
  content: { heading: string; items: string[] };
  edge: string;
  type: string; //gold, platinum etc
}

const props = defineProps<propTypes>();
</script>

<template>
  <div
    class="card border overflow-hidden border-front rounded-3xl border-opacity-40 flex flex-col justify-between"
  >
    <div class="">
      <div class="bg-front p-6">
        <h1 class="text-2xl font-bold text-center text-back font-rubik italic1">
          {{ title }}
          <span
            class="bg-clip-text text-transparent capitalize"
            :style="`background-image: var(--gradient-${type})`"
          >
            {{ type }}
          </span>
          Program
        </h1>
        <p class="text-back text-opacity-70 mt-2">
          {{ description }}
        </p>
      </div>
      <div class="p-4 flex items-center">
        <div class="bullet"></div>
        <div class="w-full">
          <h2 class="text-xl font-bold">Who is it for?</h2>
          <p class="text-mute">{{ isFor }}</p>
        </div>
      </div>
      <div class="p-4 flex">
        <div class="bullet"></div>
        <div class="w-full">
          <h2 class="text-xl font-bold">Program Content</h2>
          <p class="py-2">
            {{ content.heading }}
          </p>
          <ul class="text-mute list-disc ml-[1rem]">
            <li v-for="item of content.items">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="p-4 flex">
        <div class="bullet"></div>
        <div class="w-full">
          <h2 class="text-xl font-bold">BU EDGE</h2>
          <p class="text-mute">{{ edge }}</p>
        </div>
      </div>
    </div>
    <NuxtLink
      to="#book-meeting"
      class="self-center px-8 py-2 mt-4 mb-8 rounded-md text-back font-bold shadow-xl duration-300 hover:shadow-lg hover:scale-105"
      :style="`background: var(--gradient-${type})`"
      >BOOK NOW</NuxtLink
    >
  </div>
</template>

<style scoped>
.card {
  --gradient-gold: radial-gradient(
      ellipse farthest-corner at right bottom,
      #fedb37 0%,
      #fdb931 8%,
      #9f7928 30%,
      #8a6e2f 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      #ffffff 0%,
      #ffffac 8%,
      #d1b464 25%,
      #5d4a1f 62.5%,
      #5d4a1f 100%
    );
  --gradient-platinum: radial-gradient(
      ellipse farthest-corner at right bottom,
      #feefd4 0%,
      #fddefe 8%,
      #dedefe 30%,
      #888888 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      #ffffff 0%,
      #acacac 8%,
      #d1b4e4 25%,
      #5d5d5d 62.5%,
      #444444 100%
    );
}

button {
  text-shadow: 0 0 1rem black, 0 0 0.3rem black;
}

.bullet {
  @apply w-8 h-8 bg-gradient-to-br from-primary to-black mr-4 rounded-full opacity-80 p-0 m-0;
}

</style>
