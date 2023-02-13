<template>
  <section
    id="hero"
    class="h-screen bg-cover bg-bottom p-page flex flex-col justify-center items-center"
  >
    <h1 class="text-5xl py-4 font-semibold italic font-rubik">The Premise</h1>
    <p class="text-mute">
      We believe many entrepreneurs and business leaders today are tackling
      their problems alone. They don't have the access to tap professional help
      in terms of support, mentorship, guidance or coaching. Without this
      support, they might find it harder to stay accountable and make informed
      decisions while also failing to grow as a leader. In ever evolving
      conditions, we don't need to wait for a crisis to seek external support.
      We believe that being proactive accelerates the steering towards achieving
      personal and professional growth and see things from a different
      perspective
    </p>
  </section>
  <section
    class="flex justify-center items-center flex-col p-page py-24 bg-gradient-to-r from-front to-foreground text-back"
  >
    <h1 class="text-5xl pb-8 font-semibold italic font-rubik">
      We are your growth advisors
    </h1>
    <p class="text-transparent bg-gradient-to-r from-mute to-back bg-clip-text">
      Business Unlimited is the brainchild of a group of business leaders and
      certified executive coaches with passion for business and personal
      transformation to fill the gap. Business Unlimited believes that every
      entrepreneur/leader is the key to building a better world and has the
      required potential to succeed. We connect with you as a whole person, and
      work with you to overcome your hurdles to unlock that potential so you and
      your business are truly unlimited.
    </p>
    <p
      class="text-white text-center italic pt-8 opacity-80 text-lg font-thin tracking-wider"
    >
      > We steer leaders, organizational teams and entrepreneurs towards
      transformative results.
    </p>
  </section>
  <section class="p-page py-24">
    <h1 class="text-center font-rubik text-5xl font-bold italic">Our Ethos</h1>
    <p class="text-center flex flex-col py-6 text-mute">
      ONE SIZE DOESN'T FIT ALL !! <hr class="opacity-0" />
      We develop tailored solutions after understanding your specific challenges
      and steer you towards faster growth and performance. We engage with you as
      a whole person as we believe that the "personal" and "professional"
      aspects of one's life are inseparable from each other and growing in both
      avenues simultaneously is what makes a great leader from the rest. We are
      engaged by businesses across all sectors - be it startups, legacy empires,
      enterprises, or corporations for a strategic bend into their growth
      trajectory.
    </p>
  </section>
  <section id="founders" class="py-12 bg-gradient-to-tl from-front to-foreground p-page">
    <h1 class="text-back text-5xl font-semibold font-rubik italic text-center">MEET OUR FOUNDERS</h1>

    <div class="flex mobile:flex-col-reverse">
        <div class="founder-card ">
            <img src="/images/anamika.jpeg" alt="anamika">
            <h2 class="">Anamika</h2>
            <p class="">A transformational and charismatic global leader with international experience of more than 25 years, Anamika blends her cultural sensitivity to her tough output-oriented approach and gives every interaction and intervention her own spin. She has built and led high performing teams of as big as 200 people in multi-ethnic environments in India, Southeast Asia, the Pacific, Latin America, Europe, and Africa. Due to her varied knowledge and global exposure, she finds herself comfortable working in high-pressure situations while specializing in leadership competencies, strategic planning and execution, business process improvement among other skills. She has worked in various global, regional, and country leadership positions in multinational giants such as Conservation International, PwC, Ernst & Young, and the William J Clinton Foundation. 
</p>
        </div>
        <hr class="widescreen:hidden mt-8" />
        <div class="founder-card ">
            <img src="/images/rajeev.jpeg" alt="rajeev">
            <h2>Rajeev</h2>
            <p class="">Through his decision-making prowess and leadership skills, Rajeev has successfully led teams as a CXO leader over a period of three decades in several multinational companies. Known for formulating and implementing strategies for enhancing organizational bottom lines, he has worked closely with boards, senior management and business owners towards organization configuration, cost-benefit, and value chain analysis, among other strategies. He combines his varied experience of working in multiple formats and sizes of business with his keen understanding of human behavior and infuses these into his style. He has worked in leadership positions in multinational companies such as Voltas Ltd, Trans Africa, Asmara International, Elangperdana Tyres, just to name a few. </p>
        </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
#hero {
  background: url("https://img.freepik.com/free-vector/white-abstract-background_23-2148809724.jpg?w=1480&t=st=1676278736~exp=1676279336~hmac=56e57289e2439c00a1c6c0242728d75c110771f93b558b9f33f6216e354c99fa");
}
.founder-card{
    @apply flex flex-col items-center widescreen:px-8
}
.founder-card img{
    @apply w-[20vw] mobile:w-[40vw] aspect-square rounded-full border-2 border-back my-8 object-cover
}
.founder-card h2{
    @apply text-back pb-6 text-4xl italic font-rubik font-medium;
}
.founder-card p{
    @apply text-back font-thin text-justify tracking-tight
}
</style>
