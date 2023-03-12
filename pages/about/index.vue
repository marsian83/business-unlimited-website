<template>
  <main
    class="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden"
  >
    <section
      id="hero"
      class="h-screen snap-start py-24 bg-cover bg-bottom p-page flex flex-col justify-center items-center"
    >
      <h1 class="text-5xl py-4 font-semibold italic1 font-rubik">
        The Premise
      </h1>
      <p class="text-front text-center">
        We believe many entrepreneurs and business leaders today are tackling
        their problems alone. They don't have the access to tap professional
        help in terms of support, mentorship, guidance or coaching. Without this
        support, they might find it harder to stay accountable and make informed
        decisions while also failing to grow as a leader. In ever evolving
        conditions, we don't need to wait for a crisis to seek external support.
        We believe that being proactive accelerates the steering towards
        achieving personal and professional growth and see things from a
        different perspective
      </p>
    </section>
    <section
      class="flex h-screen snap-start justify-center items-center flex-col p-page py-24 bg-gradient-to-r from-front to-foreground text-back"
    >
      <h1 class="text-5xl pb-8 font-semibold italic1 font-rubik text-center">
        We are your growth advisors
      </h1>
      <p
        class="text-transparent text-center bg-gradient-to-r from-back to-back bg-clip-text"
      >
        Business Unlimited is the brainchild of a group of business leaders and
        certified executive coaches with passion for business and personal
        transformation to fill the gap. Business Unlimited believes that every
        entrepreneur/leader is the key to building a better world and has the
        required potential to succeed. We connect with you as a whole person,
        and work with you to overcome your hurdles to unlock that potential so
        you and your business are truly unlimited.
      </p>
      <p
        class="text-white text-center italic1 pt-8 opacity-80 text-lg font-thin tracking-wider"
      >
        > We steer leaders, organizational teams and entrepreneurs towards
        transformative results.
      </p>
    </section>
    <section
      class="h-screen snap-start flex justify-center items-center flex-col p-page py-24"
    >
      <h1 class="text-center font-rubik text-5xl font-bold italic1">
        Our Ethos
      </h1>
      <p class="text-center flex flex-col py-6 text-mute">
        ONE SIZE DOESN'T FIT ALL !!
      </p>
      <hr class="opacity-0 text-center" />
      <p class="text-justify">
        We develop tailored solutions after understanding your specific
        challenges and steer you towards faster growth and performance. We
        engage with you as a whole person as we believe that the "personal" and
        "professional" aspects of one's life are inseparable from each other and
        growing in both avenues simultaneously is what makes a great leader from
        the rest. We are engaged by businesses across all sectors - be it
        startups, legacy empires, enterprises, or corporations for a strategic
        bend into their growth trajectory.
      </p>
    </section>
    <section
      id="founders"
      class="widescreen:h-screen snap-start flex flex-col justify-center items-center pt-24 bg-gradient-to-tl from-front to-foreground p-page"
    >
      <h1
        class="text-back text-5xl font-semibold font-rubik italic1 text-center"
      >
        MEET OUR FOUNDERS
      </h1>
      <div class="flex flex-col mobile:flex-col-reverse">
        <div class="founder-card">
          <img src="/images/anamika.jpeg" alt="anamika" />
          <div class="founder-card-content">
            <h2 class="">Anamika</h2>
            <p class="">
              A transformational and charismatic global leader with
              international experience of more than 25 years, Anamika blends her
              cultural sensitivity to her tough output-oriented approach and
              gives every interaction and intervention her own spin. She has
              built and led high performing teams of as big as 200 people in
              multi-ethnic environments in India, Southeast Asia, the Pacific,
              Latin America, Europe, and Africa. Due to her varied knowledge and
              global exposure, she finds herself comfortable working in
              high-pressure situations while specializing in leadership
              competencies, strategic planning and execution, business process
              improvement among other skills. She has worked in various global,
              regional, and country leadership positions in multinational giants
              such as Conservation International, PwC, Ernst & Young, and the
              William J Clinton Foundation.
            </p>
          </div>
        </div>
        <hr class="widescreen:hidden mt-8" />
        <div class="founder-card">
          <img src="/images/rajeev.jpeg" alt="rajeev" />
          <div class="founder-card-content">
            <h2>Rajeev</h2>
            <p class="">
              Through his decision-making prowess and leadership skills, Rajeev
              has successfully led teams as a CXO leader over a period of three
              decades in several multinational companies. Known for formulating
              and implementing strategies for enhancing organizational bottom
              lines, he has worked closely with boards, senior management and
              business owners towards organization configuration, cost-benefit,
              and value chain analysis, among other strategies. He combines his
              varied experience of working in multiple formats and sizes of
              business with his keen understanding of human behavior and infuses
              these into his style. He has worked in leadership positions in
              multinational companies such as Voltas Ltd, Trans Africa, Asmara
              International, Elangperdana Tyres, just to name a few.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
#hero {
  background: url("/images/abstract1.jpg");
}
.founder-card {
  @apply flex mobile:flex-col items-center widescreen:px-8;
}
.founder-card-content {
  @apply flex flex-col widescreen:pl-8;
}
.founder-card img {
  @apply w-[14vw] mobile:w-[40vw] aspect-square rounded-full border-2 border-back my-8 object-cover;
}
.founder-card h2 {
  @apply text-back pb-6 text-4xl italic1 font-rubik font-medium;
}
.founder-card p {
  @apply text-back font-thin text-justify tracking-tight;
}
</style>
