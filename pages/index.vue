<script setup>
const businessPartnerships = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png",
    title: "Adidas",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl:
      "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
    title: "HP",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    title: "Polygon",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl:
      "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
    title: "HP",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    title: "Polygon",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    title: "Polygon",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl:
      "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
    title: "HP",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    title: "Polygon",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
];

const businessCollaborations = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png",
    title: "Adidas",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl:
      "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
    title: "HP",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    title: "Polygon",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    title: "Polygon",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl:
      "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
    title: "HP",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
  {
    imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    title: "Polygon",
    description:
      "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
  },
];
</script>

<template>
  <section
    id="hero"
    class="h-screen flex flex-col justify-center items-center gap-y-10 p-page mobile:py-32"
  >
    <h1
      class="text-5xl font-semibold italic1 text-center font-rubik mobile:text-2xl"
    >
      Innovative ways to enable <br />
      your business and self-growth.
    </h1>
    <h2 class="text-2xl italic1 text-center mobile:text-sm mobile:text-left">
      Struggling to grow your business or sustain your growth?
      <br />
      Want to thrive with positivity, optimism and energy?
    </h2>
    <h3 class="text-4xl font-semibold italic1 text-primary font-rubik">
      We can help!
    </h3>
    <div class="flex gap-x-8">
      <NuxtLink to="/services" class="btn-1 px-4 py-2 font-bold text-lg"
        >Services</NuxtLink
      >
      <NuxtLink to="/knowledge" class="btn-2 px-4 py-2 font-bold text-lg"
        >Knowledge</NuxtLink
      >
    </div>
  </section>
  <section
    id="a"
    class="h-screen bg-gradient-to-b from-black to-foreground"
  ></section>
  <section id="partnerships" class="p-page py-8">
    <h1 class="heading text-center">
      Business <span class="text-primary">Partnerships</span>
    </h1>
    <Carousel1 :items="businessPartnerships" />
  </section>
  <section id="collaborations" class="p-page py-8">
    <h1 class="heading text-center">
      Business <span class="text-primary">Collaborations</span>
    </h1>
    <Carousel1 :items="businessCollaborations" />
  </section>
  <section
    id="meeting"
    class="p-page py-10 bg-front flex flex-col items-center"
  >
    <h1
      class="text-5xl mobile:text-3xl font-rubik font-semibold text-back italic1 text-center"
    >
      Curious? Know more
    </h1>
    <p
      class="font-rubik text-2xl mobile:text-lg opacity-75 text-back text-center italic1 py-6"
    >
      Book a "No Obligation" call with us
    </p>
    <NuxtLink
      to="/services#book-meeting"
      class="btn-1 px-6 py-2 text-3xl my-8 hover:border-front hover:text-front"
      >Book now</NuxtLink
    >
    <p class="text-xl italic1 opacity-75 text-back text-center py-6">
      Business Unlimited believes that every entrepreneur/leader is the key to
      building a better world and has the required potential to succeed. We
      connect with you as a whole person, and work with you to overcome your
      hurdles to unlock that potential so you and your business are truly
      unlimited.
    </p>
  </section>
</template>

<style scoped>
section#hero {
  @apply bg-top bg-cover;
  background-image: url("/images/hero-bg.webp");
}
.heading {
  @apply text-3xl font-semibold py-10;
}
</style>
