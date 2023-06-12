<script setup>
let objects = await useFetch("https://api.npoint.io/e976d956bdd8c10460d1");
objects = objects.data.value;
// console.log(objects);
</script>

<template>
  <section class="pt-24 p-page flex flex-col gap-y-4">
    <div class="flex relative overflow-hidden mobile:flex-col-reverse">
      <div class="flex flex-col gap-y-4">
        <h1 class="heading">
          Coaching v/s Mentoring v/s Consulting v/s Training: Understanding the
          Differences
        </h1>
        <p>
          When it comes to making positive changes in your life, seeking
          guidance from a neutral and professional individual outside your inner
          circle can be immensely beneficial. There are various services
          available, such as coaching, mentoring, consulting, and training, that
          have helped countless individuals and organizations achieve their
          goals. However, these terms are often used interchangeably and can
          cause confusion. While all these services aim to assist you in
          reaching your objectives, there are distinct differences among them.
        </p>
        <hr />
        <h1 class="heading">Coaching :</h1>
        <p>
          According to the International Coaching Federation (ICF), coaching
          involves partnering with clients in a thought-provoking and creative
          process that inspires them to maximize their personal and professional
          potential. Coaching is future-oriented and helps individuals overcome
          self-limiting beliefs and habits to achieve desired outcomes.
        </p>
        <hr />
        <h1 class="heading">Mentoring :</h1>
        <p>
          Mentoring is a relationship in which a more experienced and
          knowledgeable individual (mentor) provides advice and guidance to
          someone with less experience (mentee). The mentor acts as a support
          system, guiding the mentee in their decisions and actions to aid their
          development and growth.
        </p>
      </div>
      <div class="h-full mobile:my-6" v-if="objects[0]">
        <InstagramPost :link="objects[0].link" :image="objects[0].image" />
      </div>
    </div>
    <div class="flex overflow-hidden mobile:flex-col">
      <div class="h-full" v-if="objects[1]">
        <InstagramPost :link="objects[1].link" :image="objects[1].image" />
      </div>
      <div class="flex flex-col gap-y-4 pl-3">
        <hr />
        <h1 class="heading">
          Coaching v/s Mentoring :
          <br />Directive and non-directive
        </h1>
        <p>
          Mentoring tends to be more directive, with the mentor taking a more
          active role in providing guidance and advice. In coaching, the coach
          often poses questions and allows the individual to reflect and speak,
          taking a non-directive approach.
        </p>
        <hr />
        <h1 class="heading">Short Term and Long Term</h1>
        <p>
          Mentoring relationships are often long-term, with some lasting for
          years, especially in fields such as arts, acting, and sports, where
          ongoing support is crucial at different stages of a career. Coaching,
          on the other hand, is typically short-term and goal-oriented,
          concluding once the desired goals have been achieved.
        </p>
        <hr />
        <h1 class="heading">Qualifications</h1>
        <p>
          Mentoring is based on the mentor's skills and experience in a specific
          field. Coaches, however, do not necessarily need to be subject matter
          experts. They acquire expertise through training and credentialing
          processes with internationally recognized organizations.
        </p>
        <hr />
      </div>
    </div>
    <div class="flex mobile:flex-col-reverse">
      <div class="flex flex-col gap-y-4">
        <h1 class="heading">Consulting</h1>
        <p>
          Consulting involves providing expertise to help organizations or
          businesses achieve specific objectives. Consultants are subject matter
          experts in a particular area relevant to the client's industry or
          profession
        </p>
        <hr />
        <h1 class="heading">Coaching v/s Consulting <br />Solve the problem</h1>
        <p>
          Coaching helps individuals develop problem-solving abilities over
          time. Consultants actively participate in solving problems by offering
          plausible solutions.
        </p>
        <hr />
        <h1 class="heading">Focus</h1>
        <p>
          Coaching focuses on the individual as a whole, aiming to apply
          learnings in both their professional and personal lives. Consulting
          focuses on specific problems and utilizes a more data-driven approach,
          enabling quantifiable results.
        </p>
        <hr />
        <h1 class="heading">Training:</h1>
        <p>
          Training refers to teaching and learning activities conducted to help
          individuals within an organization acquire and apply the knowledge,
          skills, abilities, and attitudes required for a particular job or
          organization.
        </p>
      </div>
      <div class="h-full" v-if="objects[2]">
        <InstagramPost :link="objects[2].link" :image="objects[2].image" />
      </div>
    </div>

    <div class="flex mobile:flex-col">
      <div class="h-full" v-if="objects[3]">
        <InstagramPost :link="objects[3].link" :image="objects[3].image" />
      </div>
      <div class="flex flex-col gap-y-4 pl-3">
        <hr />
        <h1 class="heading">Coaching vs Training <br />End result</h1>
        <p>
          Training typically enhances an individual's skill set or knowledge in
          a specific area. Coaching, on the other hand, aims to transform the
          individual into an improved version of themselves.
        </p>
        <hr />
        <h1 class="heading">Goals and accountability</h1>
        <p>
          Training goals and methodologies are typically determined by
          individuals other than the person being trained. Coaching goals and
          outcomes are owned by the person being coached, fostering a sense of
          accountability.
        </p>
        <hr />
        <h1 class="heading">Empowering</h1>
        <p>
          Training empowers individuals with additional knowledge and skills.
          Coaching empowers individuals with awareness, improved beliefs, and
          the innate abilities they possess.
        </p>
        <hr />
      </div>
    </div>
    <p class="text-primary text-center py-14 font-semibold text-xl">
      Despite the aforementioned differences, all these interventions have
      evolved to become highly sought-after by individuals, professionals,
      C-suite executives, businesses of any size, and organizations. They
      contribute to education, development, growth, and guidance in various
      contexts.
    </p>
  </section>
  <Footer />
</template>

<script setup></script>

<style scoped>
.heading {
  @apply text-2xl font-semibold font-montserrat tracking-wide;
}
</style>
