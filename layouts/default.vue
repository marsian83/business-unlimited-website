<template>
  <Preloader />
  <Navbar />
  <slot />
  <Footer />
  <div
    class="widescreen:hidden fixed top-0 left-0 h-screen w-screen bg-background z-[999999] flex justify-center items-center text-xl font-semibold italic font-rubik text-center"
  >
    NOT YET AVAILABLE ON MOBILE <br />
    PLEASE VISIT DESKTOP SITE
  </div>
</template>
