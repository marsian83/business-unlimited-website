<template>
  <nav
    class="fixed py-6 p-page flex items-center justify-between w-full bg-background z-[90]"
    ref="navbar"
  >
    <!-- <img src="/logo.svg" alt="business unlimited logo" /> -->
    <NuxtLink to="/" class="italic text-primary font-rubik font-bold text-3xl">BUSUNLIMIT</NuxtLink>
    <div class="nav-items flex gap-x-12">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/about">About Us</NuxtLink>
      <NuxtLink to="/knowledge">Knowledge</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.nav-items a {
  @apply text-mute font-semibold text-sm;
}
.nav-fixed{
    @apply fixed;
}
/* .nav-items .router-link-active{
  @apply brightness-0 cursor-default pointer-events-none;
} */
</style>

<script setup lang="ts">
let navbar = ref<HTMLElement>();
</script>
