<template>
  <Preloader />
  <Navbar />
  <slot />
  <Footer />
</template>

<style>
body {
  @apply bg-background;
}
</style>
