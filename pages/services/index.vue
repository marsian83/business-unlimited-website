<script setup>
useHead({
  script: [
    {
      hid: "calendly",
      src: "https://assets.calendly.com/assets/external/widget.js",
      defer: true,
    },
  ],
});

const programs = [
  {
    title: "Business Growth Program",
    description:
      "Watch your business perform better. Address silos, get killer strategies, and make more money.",
    packages: [
      {
        title: "Business Growth",
        description:
          "We bring together a group of like-minded entrepreneurs (a mirror image of a Corporate Board) serving as a sounding platform bringing their collective intelligence to work through your challenges. We learn from each other.",
        isFor: "Entrepreneurs/Startups",
        content: {
          heading: "Get practical and doable solutions for - ",
          items: [
            "market scenario analysis",
            "pricing and margins",
            "supply chain management",
            "xpenditure and cost-cutting",
            "business performance enhancement",
            "working capital management",
            "increased sales growth",
          ],
        },
        edge: "We have partnered with The Alpha Group, an international organization with presence over 20 countries, and who have a track record of facilitating businesses and multiplying their growth successfully for over a decade.",
        type: "gold",
      },
      {
        title: "Business Growth",
        description:
          "We have personalized business coaching / mentoring/ consulting / advising on specific business challenges or gaps in required skill set converting groups into focused teams.",
        isFor: "Business Owners/Entrepreneurs/Corporates/Startups",
        content: {
          heading: "Elevate your existing business, get expert guidance on- ",
          items: [
            "business restructuring",
            "specific areas such as digitalization",
            "software solutions",
            "effective organizational structure",
            "operations excellence",
            "business transformation",
            "team performance enhancement",
          ],
        },
        edge: "We bring our expertise drawn from over 60 years of combined multinational industry experience spanning sectors as diverse as technology, manufacturing, FMCG, trading, and consulting etc. We have worked both for corporate and family-run businesses complemented by our deep understanding of working across many cultures.",
        type: "platinum",
      },
    ],
  },
  {
    title: "Self Enrichment Program",
    description:
      "This program enables you to be a better leader and an improved version of yourself. We work with you through personal (one-to-one) coaching and mentoring, helping to understand self and others, challenging some of your perceived beliefs not helping you to move forward.",
    packages: [
      {
        title: "Self Growth",
        description:
          "Be it a business of your own or an employee of an organization,  each one has the potential to evolve as long as there's constant learning",
        isFor: "Entrepreneurs, C-suite executives",
        content: {
          heading: "The program addresses gaps such as-",
          items: [
            "goal setting and attainment",
            "cognitive thinking",
            "motivating / guiding others",
            "inclusivity and diversity",
            "cultural empathy development",
            "strategic planning",
            "work-life balance",
            "stress management",
          ],
        },
        edge: "We are a team of credentialed coaches (International Coaching Federation (ICF) and European Mentor and Coaching Council (EMCC)) and certified practitioner of neuro-linguistic programming (NLP)",
        type: "gold",
      },
      {
        title: "Self Growth",
        description:
          "We strive to connect with you as a 'Whole Person,' to  work with you to overcome your hurdles, and unlock that potential so your life becomes *truly unlimited*",
        isFor:
          "Self aware Individuals who want to be a better version of themselves.",
        content: {
          heading: "Some of the specifically curated areas could be -",
          items: [
            "growth-centered approach to life",
            "behavioral blocks and limiting mindsets",
            "becoming self-dependent",
            "self compassion",
            "purpose and meaning",
            "emotional regulation",
            "judgment and biases",
            "work-life balance",
            "stress management",
          ],
        },
        edge: "We are a team of credentialed coaches (International Coaching Federation (ICF) and European Mentor and Coaching Council (EMCC)) and certified practitioner of neuro-linguistic programming (NLP)",
        type: "platinum",
      },
    ],
  },
];
</script>

<template>
  <section
    class="p-page pt-24 pb-8 flex flex-col justify-center items-center bg-foreground text-back"
  >
    <h1 class="text-5xl font-semibold font-rubik italic py-4">
      What do we offer?
    </h1>
    <p class="text-back text-opacity-70">
      We are the push you need for business growth and self growth Business
      Unlimited is your growth advisor, your progress umpire and
      self-development trainer. Read on to understand what we offer, and you may
      find something that works for you.
    </p>
  </section>
  <section v-for="program of programs" :id="program.title" class="p-page py-10">
    <h1 class="text-3xl font-semibold text-center">
      {{ program.title }}
    </h1>
    <h2 class="text-mute italic text-center py-3 text-lg">
      {{ program.description }}
    </h2>
    <div class="flex justify-evenly py-8">
      <ProgramCard
        v-for="pkg of program.packages"
        style="width: 38%"
        :title="pkg.title"
        :description="pkg.description"
        :isFor="pkg.isFor"
        :content="pkg.content"
        :edge="pkg.edge"
        :type="pkg.type"
      />
    </div>
  </section>
  <section id="book-meeting" class="bg-black flex flex-col items-center">
    <h1
      class="text-5xl font-rubik font-semibold text-back italic text-center pt-12"
    >
      Book a "No Obligation" call with us
    </h1>
    <p class="text-xl italic opacity-75 text-back text-center pb-6">
      Business Unlimited believes that every entrepreneur/leader is the key to
      building a better world and has the required potential to succeed. We
      connect with you as a whole person, and work with you to overcome your
      hurdles to unlock that potential so you and your business are truly
      unlimited.
    </p>
    <!-- Calendly inline widget begin -->
    <div
      class="calendly-inline-widget"
      data-url="https://calendly.com/businessunlimited/no-obligations-meeting-with-business-unlimited"
      style="min-width: 80vw; height: 100vh;"
    ></div>
    <!-- Calendly inline widget end -->
  </section>
</template>

<!-- <script
  type="text/javascript"
  src="https://assets.calendly.com/assets/external/widget.js"
  async
></script> -->

<style scoped></style>
