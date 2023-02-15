  <template>
    <nav
      class="fixed py-6 p-page flex items-center justify-between w-full bg-background z-[90]"
      ref="navbar"
    >
      <!-- <img src="/logo.svg" alt="business unlimited logo" /> -->
      <NuxtLink to="/" class="italic1 text-primary font-rubik font-bold text-3xl"
        >BUSUNLIMIT</NuxtLink
      >
      <button class="widescreen:hidden">
        <img
          src="/icons/hamburger.png"
          alt="hamburger mobile menu"
          class="w-10 aspect-square"
          @click="showMobileMenu()"
        />
      </button>
      <div :class="`nav-items mobile:fixed mobile:right-5 mobile:top-20 mobile:z-[91] mobile:hidden mobile:flex-col flex mobile:bg-[#ffffff55] mobile:rounded-md mobile:backdrop-blur-md mobile:p-5 mobile:gap-y-6 gap-x-12`">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
        <NuxtLink to="/knowledge">Knowledge</NuxtLink>
      </div>
    </nav>
  </template>

  <style scoped>
  .nav-items a {
    @apply text-mute font-semibold text-base mobile:text-xl mobile:text-front;
  }
  .nav-fixed {
    @apply fixed;
  }
  /* .nav-items .router-link-active{
    @apply brightness-0 cursor-default pointer-events-none;
  } */
  </style>

  <script setup lang="ts">
  let navbar = ref<HTMLElement>();

  function showMobileMenu() {
    navbar.value?.querySelector('.nav-items')?.classList.toggle('mobile:hidden')
  }
  </script>
