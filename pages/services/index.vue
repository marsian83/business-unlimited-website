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
    book: false,
    title: "Money Growth Program",
    description:
      "Watch yourself excel in personal and business finances with our Money Growth Program.",
    packages: [
      {
        title: "Business Growth",
        description:
          "Personalized: tailored solutions to address your specific business challenges and drive sustainable growth. \nCollaborative: join a group of like-minded entrepreneurs, creating a collective intelligence platform to work through challenges together. ",
        isFor: [
          "Successful first-generation entrepreneurs looking to multiply their business value.",
          "Next-generation family business owners seeking to align their businesses with modern trends and strategies.",
          "Business owners looking for fresh energy and diverse experiences to take their businesses to the next level.",
          "Solopreneurs who need support to grow their business effectively.",
          "Startups aiming to build robust processes, strategies, and structures. ",
        ],
        content: {
          heading:
            "Our program offers practical solutions to challenges such as : ",
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
            {
              content: "business restructuring ",
              tooltip:
                "Making business more efficient and profitable by aligning all their resources to the objectives and goals",
            },
            {
              content: "digitalization, automation, software solutions ",
              tooltip: "",
            },
            {
              content: "operations excellence",
              tooltip:
                "Achieving excellence in productivity by optimizing resources and removing redundancies",
            },
            {
              content: "business transformation ",
              tooltip: "Strategies and guidance on transforming your Business",
            },
            {
              content: "team performance enhancement",
              tooltip:
                "Cultivate collaborative eco system in your teams by removing silos, fostering trust, enhancing communication}} ",
            },
          ],
        },
        edge: "Benefit from our expertise spanning over six decades of combined leadership experience in diverse sectors, including technology, manufacturing, FMCG, trading, and consulting. We collaborate with international organizations known for facilitating business growth.",
        type: "gold",
      },
      {
        book: false,
        title: "Personal Money Growth",
        description:
          "Let us help you achieve financial freedom and build the rich life you desire. ",
        isFor: [
          "Individuals/professionals seeking financial comfort.",
          "Those aspiring for financial independence and the ability to live life on their own terms.",
          "Couples looking to create a cohesive financial plan for their future.",
          "Solopreneurs neglecting their personal finances.",
        ],
        content: {
          heading: "Elevate your finances for wealth creation through",
          items: [
            {
              content: "financial literacy",
              tooltip:
                "Improved ability and skill development to understand and manage finances",
            },
            {
              content: "learn financial prudence",
              tooltip: "Advance planning and execution for wealth creation",
            },
            {
              content: "develop abundance mindset ",
              tooltip: "Inculcating an attitude that I have more than enough",
            },
            {
              content: "create assets for financial independence",
              tooltip:
                "Financial structuring that will help you do what you want to do without worrying about money",
            },
            {
              content: "manage credit cards and debts ",
              tooltip:
                "Track spending to manage your debts and loans including credit cards",
            },
            {
              content:
                "build a comprehensive financial plan aligned with your goals",
              tooltip: "Overall financial planning to have financial freedom",
            },
          ],
        },
        edge: "Our founders have personal experience in achieving financial independence, acquiring financial literacy, and building assets to live their desired rich lives. ",
        type: "platinum",
      },
    ],
  },
  {
    book: false,
    title: "Self-Growth Program",
    description:
      "Whether focusing on leadership at work or inner personality development, our program provides a holistic and transformative experience.",
    packages: [
      {
        title: "Leadership Growth",
        description:
          "Here we enable individuals to become effective leaders and enhance their overall capabilities.",
        isFor: [
          "Specifically curated for C-suite executives, leaders at various organizational levels",
          "Women entrepreneurs seeking work-life balance",
          "Business owners aiming to enhance team productivity and create a preferred work environment",
        ],
        content: {
          heading: "The program addresses gaps such as-",
          items: [
            {
              content: "authentic Leadership ",
              tooltip:
                "Explore the principles of authentic leadership and align personal values with professional roles",
            },
            {
              content: "goal setting and attainment",
              tooltip:
                "Develop effective strategies for setting and achieving personal and professional goals}",
            },
            {
              content: "cognitive thinking",
              tooltip:
                "Enhance critical thinking skills and cultivate a problem-solving mindset",
            },
            {
              content: "motivating / guiding others",
              tooltip:
                "Acquire the skills to motivate and guide individuals or teams toward success",
            },
            {
              content: "inclusivity and diversity",
              tooltip:
                "Foster an inclusive work environment by understanding and valuing diverse perspectives",
            },
            {
              content: "cultural empathy development",
              tooltip:
                "Cultivate cultural empathy and enhance cross-cultural communication skills.",
            },
            {
              content: "strategic planning",
              tooltip:
                "Earn to develop and implement strategic plans to drive organizational growth",
            },
            {
              content: "work-life balance",
              tooltip:
                "Explore strategies to achieve a healthy work-life balance and maintain overall well-being",
            },
            {
              content: "stress management",
              tooltip:
                "Develop techniques to effectively manage stress and build resilience.",
            },
          ],
        },
        edge: "We are a team of credentialed coaches (International Coaching Federation (ICF) and European Mentor and Coaching Council (EMCC)) and certified systemic team coaches",
        type: "gold",
      },
      {
        book: false,
        title: "Inner Self Growth ",
        description:
          "Using proven structured approach, we provide personalized coaching, mentoring, and guidance to help you gain a deeper understanding of yourself and others.",
        isFor: [
          "Individuals, from any walk of life, seeking comprehensive personal development and a deeper understanding of their inner selves.",
          "Professionals looking to get support for various career related challenges",
          "Women looking to get back to their careers after sabbatical",
        ],
        content: {
          heading: "Some of the specifically curated areas could be -",
          items: [
            {
              content: "self-reflection ",
              tooltip:
                "Engage in introspective exercises to gain a deeper understanding of personal values, beliefs, and aspirations}",
            },
            {
              content: "emotional intelligence",
              tooltip:
                "Develop emotional intelligence skills to better manage emotions and enhance interpersonal relationships",
            },
            {
              content: "mindfulness and self-care",
              tooltip:
                "Earn practices to cultivate mindfulness, reduce stress, and promote self-care",
            },
            {
              content: "effective communication",
              tooltip:
                "Enhance communication skills to build strong connections and resolve conflicts",
            },
            {
              content: "personal branding",
              tooltip:
                "Learn techniques to effectively represent oneself and create a positive personal brand",
            },
            {
              content: "resilience and adaptability",
              tooltip:
                "Build resilience to overcome challenges and embrace change",
            },
            {
              content: "life vision and purpose",
              tooltip:
                "Dentify personal life vision and purpose to guide decision-making and prioritize goals",
            },
            {
              content: "growth mindset",
              tooltip:
                "Considering every mistake as learning and growth opportunity ",
            },
          ],
        },
        edge: "We are a team of credentialed coaches (International Coaching Federation (ICF) and European Mentor and Coaching Council (EMCC)) and Licensed practitioners of neuro-linguistic programming (NLP) ",
        type: "platinum",
      },
    ],
  },
];

const meetings = await useFetch("https://api.npoint.io/98e5bbe82c045818f723");

onMounted(() => {});
</script>

<template>
  <section
    class="p-page pt-24 pb-8 flex flex-col justify-center items-center bg-foreground text-back"
  >
    <h1
      class="text-5xl mobile:text-3xl font-semibold font-montserrat italic1 py-4"
    >
      This is how we help you to build your 'Rich-Life'
    </h1>
    <p class="text-back text-opacity-70 text-center">
      Business Unlimited serves as your growth advisor, progress umpire, and
      self-development trainer. <br />
      Explore our services and find the right fit for you.
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
      class="program-cards flex justify-evenly items-start mobile:flex-wrap mobile:gap-y-8 py-8"
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
        :book="pkg.book"
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
      <!-- Business Unlimited believes that every entrepreneur/leader is the key to
      building a better world and has the required potential to succeed. We
      connect with you as a whole person, and work with you to overcome your
      hurdles to unlock that potential so you and your business are truly
      unlimited. -->
    </p>
    <p class="text-back mt-8 mb-4">What would you like to contact us for??</p>
    <div
      class="flex justify-center mobile:flex-col mobile:gap-y-6 gap-x-12 w-full items-center pb-8"
    >
      <NuxtLink
        class="bg-background text-front flex justify-center whitespace-nowrap items-center text-2xl font-medium italic rounded-xl w-[30vw] mobile:w-[80vw] py-5 duration-300 hover:-translate-y-1"
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
  --card-width: 48%;
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
