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

let calendlyWidget = ref(null);

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
            {
              content: "market scenario analysis",
              tooltip:
                "An examination and evaluation of the current and potential market conditions, including factors such as competition, trends, and customer behavior.",
            },
            {
              content: "pricing and margins",
              tooltip:
                "The process of determining the optimal price points and profit margins for a product or service, based on factors such as production costs, competition, and consumer demand.",
            },
            {
              content: "supply chain management",
              tooltip:
                "The management of the flow of goods and services from the point of origin to the point of consumption, with a focus on optimizing efficiency and minimizing costs.",
            },
            {
              content: "expenditure and cost-cutting",
              tooltip:
                "The management of expenses and the implementation of strategies to reduce costs and increase profitability, without sacrificing quality or efficiency.",
            },
            {
              content: "business performance enhancement",
              tooltip:
                "The process of identifying and implementing strategies to improve overall business performance, with a focus on increasing revenue, profitability, and customer satisfaction.",
            },
            {
              content: "working capital management",
              tooltip:
                "The management of a company's short-term assets and liabilities, with a focus on ensuring that there is enough cash flow to support daily operations and growth initiatives.",
            },
            {
              content: "increased sales growth",
              tooltip:
                "The process of developing and implementing strategies to increase sales revenue, with a focus on expanding customer reach and improving customer satisfaction.",
            },
          ],
        },
        edge: "We have partnered with The Alpha Group, an international organization with presence over 20 countries, and who have a track record of facilitating businesses and multiplying their growth successfully for over a decade.",
        type: "gold",
      },
      {
        title: "Business Growth",
        description:
          "We have personalized business coaching / mentoring/ consulting / advising on specific business challenges or gaps in required skill set converting groups into focused teams. We learn from each other.",
        isFor: "Business Owners/Corporates/Startups",
        content: {
          heading: "Elevate your existing business, get expert guidance on- ",
          items: [
            {
              content: "business restructuring",
              tooltip:
                "The process of reorganizing a company's operations and structure, often with the goal of improving efficiency, reducing costs, or adapting to changing market conditions.",
            },
            {
              content: "specific areas such as digitalization",
              tooltip:
                "The process of incorporating digital technologies and strategies into a company's operations, with the goal of improving efficiency, reaching new customers, and enhancing overall performance.",
            },
            {
              content: "software solutions",
              tooltip:
                "Computer programs and applications designed to perform specific tasks or solve particular problems, such as managing data, improving productivity, or enhancing customer experience.",
            },
            {
              content: "effective organizational structure",
              tooltip:
                "The arrangement of a company's resources and employees in a way that maximizes efficiency, productivity, and communication, often through the creation of clear roles and responsibilities, and effective reporting lines.",
            },
            {
              content: "operations excellence",
              tooltip:
                "The process of achieving high levels of efficiency and quality in a company's operations, often through the use of lean management principles, continuous improvement initiatives, and effective performance metrics.",
            },
            {
              content: "business transformation",
              tooltip:
                "A fundamental and far-reaching change in a company's operations, structure, or culture, often with the goal of achieving significant improvements in performance or adapting to changing market conditions.",
            },
            {
              content: "team performance enhancement",
              tooltip:
                "The process of improving the performance and productivity of a company's employees, often through the implementation of training programs, coaching, and the creation of a positive and supportive work culture.",
            },
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
            {
              content: "goal setting and attainment",
              tooltip:
                "The process of identifying specific objectives or targets for a person or organization, and developing strategies and plans to achieve them.",
            },
            {
              content: "cognitive thinking",
              tooltip:
                "The mental processes and skills used to perceive, understand, and reason about information, including skills such as perception, memory, attention, and problem-solving.",
            },
            {
              content: "motivating / guiding others",
              tooltip:
                "The process of inspiring and directing others towards specific goals or objectives, often through the use of effective communication, leadership, and coaching skills.",
            },
            {
              content: "inclusivity and diversity",
              tooltip:
                "The practice of creating a workplace culture that is welcoming and supportive of people of all backgrounds, including people from diverse racial, ethnic, and cultural backgrounds, and people of all genders, ages, and abilities.",
            },
            {
              content: "cultural empathy development",
              tooltip:
                "The process of developing a deep understanding and appreciation of different cultures, and the ability to interact effectively with people from diverse backgrounds.",
            },
            {
              content: "strategic planning",
              tooltip:
                "The process of developing a long-term plan for achieving specific goals or objectives, often through the analysis of internal and external factors, and the development of strategies and tactics to address them.",
            },
            {
              content: "work-life balance",
              tooltip:
                "The practice of balancing the demands of work with the demands of personal and family life, often through the use of strategies such as flexible work hours, time management, and stress reduction techniques.",
            },
            {
              content: "stress management",
              tooltip:
                "The practice of managing stress and anxiety in order to improve overall health and wellbeing, often through the use of techniques such as meditation, exercise, and time management.",
            },
          ],
        },
        edge: "We are a team of credentialed coaches (International Coaching Federation (ICF) and European Mentor and Coaching Council (EMCC)) and certified practitioner of neuro-linguistic programming (NLP)",
        type: "gold",
      },
      {
        title: "Self Growth",
        description:
          "We strive to connect with you as a 'Whole Person,' to  work with you to overcome your hurdles, and unlock that potential so your life becomes *truly unlimited*",
        isFor: "Self aware Individuals looking to improve.",
        content: {
          heading: "Some of the specifically curated areas could be -",
          items: [
            {
              content: "growth-centered approach to life",
              tooltip:
                "The practice of continuously striving for personal and professional growth, often through the development of new skills, experiences, and perspectives.",
            },
            {
              content: "becoming self-dependent",
              tooltip:
                "The process of becoming self-sufficient and independent, often through the development of skills such as critical thinking, problem-solving, and decision-making.",
            },
            {
              content: "self compassion",
              tooltip:
                "The practice of being kind, understanding, and forgiving towards oneself, often through the development of a positive self-image and a focus on personal growth and improvement.",
            },
            {
              content: "purpose and meaning",
              tooltip:
                "The practice of identifying and pursuing personal and professional goals that align with one's values and beliefs, and provide a sense of purpose and fulfillment.",
            },
            {
              content: "emotional regulation",
              tooltip:
                "The ability to recognize, manage, and express one's emotions in a healthy and constructive way, often through the use of techniques such as mindfulness, meditation, and cognitive-behavioral therapy.",
            },
            {
              content: "judgment and biases",
              tooltip:
                "The process of identifying and overcoming personal biases and prejudices, and developing a more objective and open-minded approach to decision-making and problem-solving.",
            },
            {
              content: "work-life balance",
              tooltip:
                "The practice of balancing the demands of work with the demands of personal and family life, often through the use of strategies such as flexible work hours, time management, and stress reduction techniques.",
            },
            {
              content: "stress management",
              tooltip:
                "The practice of managing stress and anxiety in order to improve overall health and wellbeing, often through the use of techniques such as meditation, exercise, and time management.",
            },
          ],
        },
        edge: "We are a team of credentialed coaches (International Coaching Federation (ICF) and European Mentor and Coaching Council (EMCC)) and certified practitioner of neuro-linguistic programming (NLP)",
        type: "platinum",
      },
    ],
  },
];

const meetings = await useFetch("https://api.npoint.io/98e5bbe82c045818f723");

onMounted(() => {
});
</script>

<template>
  <section
    class="p-page pt-24 pb-8 flex flex-col justify-center items-center bg-foreground text-back"
  >
    <h1 class="text-5xl mobile:text-3xl font-semibold font-montserrat italic1 py-4">
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
    <h1
      class="text-3xl mobile:text-2xl mobile:font-bold font-semibold text-center"
    >
      {{ program.title }}
    </h1>
    <h2 class="text-mute italic1 text-center py-3 text-lg mobile:text-base">
      {{ program.description }}
    </h2>
    <div
      class="program-cards flex justify-evenly mobile:flex-wrap mobile:gap-y-8 py-8"
    >
      <ProgramCard
        v-for="pkg of program.packages"
        style="width: var(--card-width)"
        :title="pkg.title"
        :description="pkg.description"
        :isFor="pkg.isFor"
        :content="pkg.content"
        :edge="pkg.edge"
        :type="pkg.type"
      />
    </div>
  </section>
  <section id="book-meeting" class="bg-black flex flex-col items-center p-page">
    <h1
      class="text-4xl py-8 font-montserrat font-semibold text-back italic1 text-center mt-12 mobile:text-xl"
    >
      Connect with us today, without any obligations.
    </h1>
    <p
      class="text-xl mobile:text-base mobile:py-8 italic1 opacity-75 text-back text-center pb-6"
    >
      Business Unlimited believes that every entrepreneur/leader is the key to
      building a better world and has the required potential to succeed. We
      connect with you as a whole person, and work with you to overcome your
      hurdles to unlock that potential so you and your business are truly
      unlimited.
    </p>
    <p class="text-back mt-8 mb-4">Who would like to have a meeting with?</p>
    <div class="flex justify-center mobile:flex-col mobile:gap-y-6 gap-x-12 w-full items-center pb-8">
      <NuxtLink
        class="bg-background text-front flex justify-center items-center text-2xl font-medium italic rounded-xl w-[10vw] mobile:w-[80vw] py-5 duration-300 hover:-translate-y-1"
        v-for="mtng of meetings.data.value"
        :to="mtng.link"
      >
        <p>
          {{ mtng.name }}
        </p>
      </NuxtLink>
    </div>
    <!-- Calendly inline widget begin -->
    <!-- <div
      class="calendly-inline-widget min-w-[99vw] h-[150vh]"
      ref="calendlyWidget"
      data-url="https://calendly.com/businessunlimited/no-obligations-meeting-with-business-unlimited"
    ></div> -->
    <!-- Calendly inline widget end -->
  </section>
</template>

<!-- <script
  type="text/javascript"
  src="https://assets.calendly.com/assets/external/widget.js"
  async
></script> -->

<style scoped>
.program-cards {
  --card-width: 38%;
}
@media only screen and (max-width: 780px) {
  .program-cards {
    --card-width: 99%;
  }
}

.VJL48qbQzWENTFAh1Knk,
.e9TS9yoMqqIN2PqBo1QG,
._i6SG2jlTfccH2ZZblil {
  @apply hidden before:hidden after:hidden;
  background-color: red;
}
</style>
