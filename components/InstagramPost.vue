<script setup lang="ts">
interface propsType {
  image: string;
  link: string;
}

const { image, link } = defineProps<propsType>();

function click() {
  window.open(link, "_");
}
</script>

<template>
  <div class="w-[370px] h-[500px] relative cursor-pointer p-5" @click="click">
    <img
      :src="image"
      alt="image"
      class="w-full h-full aspect-auto object-cover cursor-pointer"
    />
  </div>
</template>

<style scoped></style>
