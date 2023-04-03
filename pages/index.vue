<script setup>
// const businessPartnerships = [
//   {
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png",
//     title: "Adidas",
//     description:
//       "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
//   },
//   {
//     imageUrl:
//       "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
//     title: "HP",
//     description:
//       "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
//   },
//   {
//     imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
//     title: "Polygon",
//     description:
//       "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
//   },
//   {
//     imageUrl:
//       "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
//     title: "HP",
//     description:
//       "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
//   },
//   {
//     imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
//     title: "Polygon",
//     description:
//       "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
//   },
//   {
//     imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
//     title: "Polygon",
//     description:
//       "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
//   },
//   {
//     imageUrl:
//       "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
//     title: "HP",
//     description:
//       "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
//   },
//   {
//     imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
//     title: "Polygon",
//     description:
//       "As a former partner of Adidas, Unlimited Business has a proven track record of success and is dedicated to providing top-notch services to its clients.",
//   },
// ];

const businessCollaborations = [
  {
    imageUrl: "/collaborations/relymore.png",
    title: "Relymore",
    description:
      "RelyMore Solutions brings brands to life with vibrant storytelling and technology. From strategy to activation, we collaborate with our partners to craft the content, moments, and messages that build modern brands. We help simplify and clarify who they are and what they stand for. We construct and deploy thoughtful, well-crafted solutions that inspire your customers to take action.",
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
    <div class="absolute right-2 bottom-2 flex gap-x-8">
      <NuxtLink to="/privacy" class="text-back">Privacy Policy</NuxtLink>
    </div>
  </section>
  <img src="/images/vector.png" alt="">
  <!-- <section
    id="a"
    class="h-screen bg-gradient-to-b from-black to-foreground"
  ></section> -->
  <!-- <section id="partnerships" class="p-page py-8">
    <h1 class="heading text-center">
      Business <span class="text-primary">Partnerships</span>
    </h1>
    <Carousel1 :items="businessPartnerships" />
  </section> -->
  <section id="collaborations" class="p-page py-8">
    <h1 class="heading text-center">
      Business <span class="text-primary">Collaborations</span>
    </h1>
    <Carousel1 :items="businessCollaborations" />
  </section>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1
        class="text-3xl font-medium title-font text-gray-900 mb-12 text-center"
      >
        Testimonials
      </h1>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/2 w-full">
          <div
            class="h-full shadow-lg border border-front border-opacity-20 p-8 rounded flex flex-col justify-between"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path
                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
              ></path>
            </svg>
            <p class="leading-relaxed mb-6">
              Rajeev, coached and mentored me through my difficult times,
              specially when I was quite disappointed of not getting a well
              deserved promotion or not being able to communicate with my MD
              (reporting boss) on the expected deliverables. His clarity of
              expression and deep listening of what is being said and 'not' said
              were of immense value to dwell on my personal challenges as well
            </p>
            <a class="inline-flex items-center">
              <img
                alt="testimonial"
                src="https://www.mantruckandbus.com/fileadmin/_processed_/9/c/csm_FT_05-06_Header_Schoenherr_2-min_d50a71a2cd.jpg"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900"
                  >Sanjay Poddar</span
                >
                <span class="text-gray-500 text-sm">HALDIRAM SNACKS</span>
              </span>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/2 w-full">
          <div
            class="h-full bg-background shadow-lg border border-front border-opacity-20 p-8 rounded flex flex-col justify-between"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path
                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
              ></path>
            </svg>
            <p class="leading-relaxed mb-6">
              It is a privilege to be a mentee with Anamika. I have learnt great
              things from her resourcefulness. I have since grown and do
              contribute it partly to her kindness and perseverance as my
              mentor. Her sharing of her own professional and personal
              experiences inspired and influenced me which then led to critical
              insights to work on my blind spots. My learnings to deal with
              complex and ambiguous situations, difficult people has been
              instrumental in my growth both as a professional and a person
            </p>
            <a class="inline-flex items-center">
              <img
                alt="testimonial"
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900"
                  >Leona Chopkorir</span
                >
                <span class="text-gray-500 text-sm">DIRECTOR - ACI</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    id="meeting"
    class="p-page py-10 bg-front flex flex-col items-center"
  >
    <h1
      class="text-5xl mobile:text-3xl font-rubik font-semibold text-back italic1 text-center"
    >
      Curious? Want to know more?
    </h1>
    <p
      class="font-rubik text-2xl mobile:text-lg opacity-75 text-back text-center italic1 py-6"
    >
      Connect with us today, without any obligations.
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
  background-image: url("/images/hero-bg.png");
}
.heading {
  @apply text-3xl font-semibold py-10;
}
</style>
