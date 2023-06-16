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
    class="h-[85vh] flex flex-col justify-center items-center relative gap-y-10 p-page mobile:py-32"
  >
    <span
      class="material-icons absolute bottom-4 text-6xl left-1/2 -translate-x-1/2 z-[2] text-primary mobile:text-3xl"
      >&#xe313;</span
    >
    <span
      class="material-icons absolute bottom-8 mobile:bottom-6 text-6xl left-1/2 -translate-x-1/2 z-[2] text-primary mobile:text-3xl"
      >&#xe313;</span
    >
    <h1
      class="text-5xl font-semibold italic1 text-center font-montserrat mobile:text-2xl"
    >
      <!-- Innovative ways to enable <br /> -->
      Welcome to Business Unlimited
    </h1>
    <!-- <h2 class="text-2xl italic1 text-center mobile:text-sm">
      Struggling to grow your business or sustain your growth?
      <br />
      Want to thrive with positivity, optimism and energy? 
    </h2> -->
    <h3
      class="text-4xl font-semibold italic1 text-center text-primary font-montserrat"
    >
      We make your 'rich-life' possible!
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
  <section class="bg-[#00203f] p-[10vw] py-24 mobile:px-8 mobile:py-5">
    <img src="/images/vector.png" alt="" />
  </section>
  <section
    class="p-page py-14 flex flex-col items-center gap-y-6 mobile:gap-y-3"
  >
    <h1
      class="text-3xl font-semibold italic1 text-center font-montserrat mobile:text-2xl mobile:py-8"
    >
      Why Us
    </h1>
    <p class="text-xl text-mute text-center mobile:text-base">
      Business Unlimited is dedicated to helping individuals and businesses
      achieve their financial and personal growth goals. Our team of experts
      provides comprehensive 360-degree development programs to steer you
      towards your 'Rich Life.'
    </p>
  </section>
  <section
    class="p-page py-14 flex flex-col items-center gap-y-6 mobile:gap-y-3 mobile:py-8"
  >
    <h1
      class="text-3xl font-semibold italic1 text-center font-montserrat mobile:text-2xl"
    >
      What We Do
    </h1>
    <p class="text-xl text-center text-mute mobile:text-base">
      At Business Unlimited, we offer the following programs to support your
      growth:
      <br />
      <br />
      <b class="text-front"> Money Growth Program </b>
      – elevate your personal / business finances
      <br />
      <b class="text-front"> Self-Growth Program </b>
      – making you, the ‘best’ version of yourself
    </p>
  </section>
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
      Business Partnerships and
      <span class="text-primary">Collaborations</span>
    </h1>
    <p class="text-xl text-mute text-center mobile:text-sm">
      A partnership model of Business Unlimited signifies a formal and
      professional approach of collaborating with like-minded organizations. By
      harnessing the unique strengths and expertise of each partner, the model
      helps Business Unlimited to leverage diverse perspectives, skills,
      experiences, driving innovation and fostering a culture of continuous
      improvement to deliver exceptional results.
    </p>
    <Carousel1 :items="businessCollaborations" />
  </section>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1
        class="text-3xl font-medium title-font text-gray-900 mb-12 text-center"
      >
        Testimonials
      </h1>
      <div class="overflow-x-scroll overflow-y-clip testimonials-container">
        <div class="flex m-4 flex-row w-[250vw] mobile:w-[250vh]">
          <div class="p-4 md:w-[50vw] w-full">
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
                expression and deep listening of what is being said and 'not'
                said were of immense value to dwell on my personal challenges as
                well
              </p>
              <a class="inline-flex items-center">
                <!-- <img
                alt="testimonial"
                src="https://www.mantruckandbus.com/fileadmin/_processed_/9/c/csm_FT_05-06_Header_Schoenherr_2-min_d50a71a2cd.jpg"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                /> -->
                <span class="flex-grow flex flex-col">
                  <!-- <span class="title-font font-medium text-gray-900"
                    >Sanjay Poddar</span
                > -->
                  <span class="font-semibold">HALDIRAM SNACKS</span>
                </span>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-[50vw] w-full">
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
                It is a privilege to be a mentee with Anamika. I have learnt
                great things from her resourcefulness. I have since grown and do
                contribute it partly to her kindness and perseverance as my
                mentor. Her sharing of her own professional and personal
                experiences inspired and influenced me which then led to
                critical insights to work on my blind spots. My learnings to
                deal with complex and ambiguous situations, difficult people has
                been instrumental in my growth both as a professional and a
                person
              </p>
              <a class="inline-flex items-center">
                <!-- <img
                alt="testimonial"
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                /> -->
                <span class="flex-grow flex flex-col">
                  <!-- <span class="title-font font-medium text-gray-900"
                  >Leona Chopkorir</span
                > -->
                  <span class="font-semibold"
                    >Regional Operations Director- Africa - Conservation
                    International</span
                  >
                </span>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-[50vw] w-full">
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
                complex management matters. Her hand holding has been a
                priceless support for me to gain confidence as a leader. As a
                mentor, she has helped me understand my real self, identify my
                own potentials and strengths to deal with various management
                issues. This relationship has also given me an opportunity to
                work on my improvement areas, identified during our
                interactions, which have proven to be critically beneficial for
                both my personal and professional life. Anamika is a spontaneous
                leader with clear insights. Her style is direct yet respectful
                and empathetic, practical yet strategic
              </p>
              <a class="inline-flex items-center">
                <!-- <img
                alt="testimonial"
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              /> -->
                <span class="flex-grow flex flex-col">
                  <!-- <span class="title-font font-medium text-gray-900"
                  >Leona Chopkorir</span
                > -->
                  <span class="font-semibold"
                    >Country Executive Director - Conservation International
                    Philippines</span
                  >
                </span>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-[50vw] w-full">
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
                Anamika’s astute leadership and managerial skills are
                instrumental in giving clearer insights for my growth and career
                direction. I have greatly benefited from the engagement and have
                improved performance and productivity for my social enterprise,
                Happy Universe LLP. Ms Anamika has a holistic business acumen
                coupled with a strong background in sustainability from her own
                experience in the industry. She always helped me explore on the
                best opportunities and set a clearer sense of direction towards
                my progression as a social entrepreneur in this field. The
                journey has been very reflective and delightful
              </p>
              <a class="inline-flex items-center">
                <!-- <img
                alt="testimonial"
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                /> -->
                <span class="flex-grow flex flex-col">
                  <!-- <span class="title-font font-medium text-gray-900"
                  >Leona Chopkorir</span
                  > -->
                  <span class="font-semibold"
                    >Founder Happy Universe LLP - Singapore</span
                  >
                </span>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-[50vw] w-full">
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
                I worked with Rajeev as a ‘Grief and End of Life’ coach to
                explore my challenges of moving forward. The connectedness and
                being non judgmental / un-biased provided me the safe space to
                express truthfully & completely. His listening and complete
                presence support by succinct enquiries assisted me in going
                deeper into myself - Innocent
              </p>
              <a class="inline-flex items-center">
                <!-- <img
                alt="testimonial"
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                /> -->
                <span class="flex-grow flex flex-col">
                  <!-- <span class="title-font font-medium text-gray-900"
                  >Leona Chopkorir</span
                  > -->
                  <span class="font-semibold">Tendai Mujajati / Zimbabwe</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
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
