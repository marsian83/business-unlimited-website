<template>
  <Preloader />
  <Navbar />
  <slot />
  <div
    class="fixed top-0 left-0 z-[999999] w-full h-full bg-bacground text-primary text-center flex items-center justify-center text-3xl italic bg-opacity-70 backdrop-blur-lg"
  >
    <p class="bg-white p-2 rounded-lg bg-opacity-70 font-medium">
      Development Preview has expired
    </p>
  </div>
</template>

<style>
body {
  @apply bg-background;
}
</style>
