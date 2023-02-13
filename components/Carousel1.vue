<script setup lang="ts">
interface itemsType {
  imageUrl: string;
  title: string;
  description: string;
}

const { items } = defineProps<{
  items: itemsType[];
}>();
</script>

<template>
  <div class="flex flex-wrap py-10 justify-evenly gap-y-14 cursor-default">
    <div
      v-for="item of items"
      class="w-[20vw] flex flex-col justify-between items-center p-4 gap-y-6 rounded-3xl border border-mute border-opacity-40 shadow-lg"
      v-bind:key="items.indexOf(item)"
    >
      <div class="flex items-center justify-center h-full">
        <img :src="item.imageUrl" :alt="`${item.title} logo`" class="w-28" draggable="false" />
      </div>
      <h5 class="text-3xl font-mono">{{ item.title }}</h5>
      <p class="opacity-80">{{ item.description }}</p>
    </div>
  </div>
</template>
