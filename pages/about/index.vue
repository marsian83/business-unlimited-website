<template>
  <main
    class="widescreen:snap-y widescreen:snap-mandatory h-screen overflow-scroll overflow-x-hidden"
  >
    <section
      id="hero"
      class="h-screen relative snap-start py-24 bg-cover bg-bottom p-page flex flex-col justify-center items-center"
    >
      <span
        class="material-icons absolute bottom-4 text-6xl left-1/2 -translate-x-1/2 z-[2] text-primary mobile:text-3xl"
        >&#xe313;</span
      >
      <span
        class="material-icons absolute bottom-8 mobile:bottom-6 text-6xl left-1/2 -translate-x-1/2 z-[2] text-primary mobile:text-3xl"
        >&#xe313;</span
      >
      <h1 class="text-5xl py-4 font-semibold italic1 font-montserrat">
        The Premise
      </h1>
      <p class="text-front text-justify text-lg">
        In today's fast-paced business landscape, many individuals,
        entrepreneurs, and business leaders face the challenge of navigating
        their problems alone. They lack access to professional support,
        mentorship, guidance, or coaching, which can hinder their ability to
        stay accountable, make informed decisions, and grow as leaders. At
        Business Unlimited, we believe that waiting for a crisis to seek
        external support is unnecessary. We advocate for a proactive approach
        that accelerates personal and professional growth, providing individuals
        with a fresh perspective.
      </p>
    </section>
    <section
      class="flex relative h-screen snap-start justify-center items-center flex-col p-page py-24 bg-gradient-to-r from-front to-foreground text-back"
    >
      <span
        class="material-icons absolute bottom-4 text-6xl left-1/2 -translate-x-1/2 z-[2] text-background mobile:text-3xl"
        >&#xe313;</span
      >
      <span
        class="material-icons absolute bottom-8 mobile:bottom-6 text-6xl left-1/2 -translate-x-1/2 z-[2] text-background mobile:text-3xl"
        >&#xe313;</span
      >
      <h1
        class="text-5xl pb-8 font-semibold italic1 font-montserrat text-center"
      >
        We are your growth advisors
      </h1>
      <p
        class="text-transparent text-justify bg-gradient-to-r from-back to-back bg-clip-text text-lg"
      >
        Business Unlimited is the brainchild of experienced business leaders and
        certified executive coaches who are passionate about fostering business
        and personal transformation. We firmly believe that every individual
        possesses the potential to succeed and play a pivotal role in building a
        better world. By connecting with you as a whole person, we work
        collaboratively to overcome obstacles and unlock your unlimited
        potential, enabling both you and your business to thrive.
      </p>
      <!-- <p
        class="text-white text-center italic1 pt-8 opacity-80 text-lg font-thin tracking-wider"
      >
        > We steer leaders, organizational teams and entrepreneurs towards
        transformative results.
      </p> -->
    </section>
    <section
      class="h-screen snap-start relative flex justify-center items-center flex-col p-page py-24"
    >
      <span
        class="material-icons absolute bottom-4 text-6xl left-1/2 -translate-x-1/2 z-[2] text-primary mobile:text-3xl"
        >&#xe313;</span
      >
      <span
        class="material-icons absolute bottom-8 mobile:bottom-6 text-6xl left-1/2 -translate-x-1/2 z-[2] text-primary mobile:text-3xl"
        >&#xe313;</span
      >
      <h1 class="text-center font-montserrat text-5xl font-bold italic1">
        Our Ethos
      </h1>
      <p class="text-justify flex flex-col py-6 text-mute text-2xl">
        We understand that one size doesn't fit all !!
      </p>
      <hr class="opacity-0 text-center" />
      <p class="text-justify text-lg">
        Therefore, we develop tailored solutions that address your specific
        challenges, steering you towards financial growth and personal
        development. By nurturing growth in both personal and professional
        domains simultaneously, we believe you can expedite the achievement of
        your desired outcomes. We are engaged by diverse businesses across
        sectors, including individuals, startups, family-owned businesses,
        enterprises, and corporations, to strategically enhance their growth
        trajectories.
      </p>
    </section>
    <section
      id="founders"
      class="widescreen:h-screen snap-start flex flex-col gap-y-6 justify-center items-center pt-24 bg-gradient-to-tl from-front to-foreground p-page"
    >
      <h1
        class="text-back text-5xl font-semibold font-montserrat italic1 text-center mt-8"
      >
        MEET OUR FOUNDERS
      </h1>
      <div class="flex flex-col mobile:flex-col-reverse gap-y-5">
        <div class="founder-card">
          <img src="/images/anamika.jpeg" alt="anamika" />
          <div class="founder-card-content">
            <h2 class="">Anamika</h2>
            <p class="">
              With over 25 years of international experience, Anamika is a
              transformational and charismatic global leader. Her cultural
              sensitivity, combined with a results-oriented approach, infuses
              every interaction and intervention with her unique touch. Having
              led high-performing teams of up to 250 individuals in multi-ethnic
              environments across India, Southeast Asia, the Pacific, Latin
              America, Europe, and Africa, she thrives in high-pressure
              situations. Anamika specializes in leadership competencies,
              strategic planning and execution, and business process
              improvements. Her extensive background includes holding leadership
              positions in multinational giants such as Conservation
              International, PwC, Ernst & Young, and the William J Clinton
              Foundation.
            </p>
          </div>
        </div>
        <hr class="widescreen:hidden mt-8" />
        <div class="founder-card">
          <img src="/images/rajeev.jpeg" alt="rajeev" />
          <div class="founder-card-content">
            <h2>Rajeev</h2>
            <p class="">
              Over three decades, Rajeev has demonstrated his decision-making
              prowess and leadership skills by successfully leading teams as a
              CXO leader in various multinational companies. Renowned for
              formulating and implementing strategies to enhance organizational
              bottom lines, he has collaborated closely with boards, senior
              management, and business owners on organization configuration,
              cost-benefit analysis, and value chain optimization. Rajeev
              leverages his diverse experience across different business formats
              and sizes, complemented by his keen understanding of human
              behaviour. His leadership roles encompass notable multinational
              companies such as Voltas Ltd, Trans Africa, Asmara International,
              and Elangperdana Tyres.
            </p>
          </div>
        </div>
      </div>

      <p class="text-white text-center mb-8 text-lg pb-8">
        By harnessing our collective expertise and experiences, we at Business
        Unlimited are committed to driving your growth, empowering you to reach
        new heights of success in both your personal and professional
        endeavours.
      </p>
    </section>
    <section class="snap-start">
      <section
        id="meeting"
        class="p-page py-10 bg-front flex flex-col items-center"
      >
        <NuxtLink
          to="/services#book-meeting"
          class="btn-1 px-6 py-2 text-3xl my-8 hover:border-front hover:text-front"
          >Book now</NuxtLink
        >
        <p
          class="font-montserrat text-2xl mobile:text-lg opacity-75 text-back text-center italic1"
        >
          Connect with us today, without any obligations.
        </p>
        <p class="text-xl italic1 opacity-75 text-back text-center py-1">
          <!-- Business Unlimited believes that every entrepreneur/leader is the key to
      building a better world and has the required potential to succeed. We
      connect with you as a whole person, and work with you to overcome your
      hurdles to unlock that potential so you and your business are truly
      unlimited. -->
        </p>
      </section>
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
  @apply text-back pb-6 text-4xl italic1 font-montserrat font-medium;
}
.founder-card p {
  @apply text-back font-thin text-justify tracking-tight;
}
</style>
