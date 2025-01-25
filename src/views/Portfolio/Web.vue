<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Web</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{project.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technology</span>
            </h3>
            <v-chip color="green" text-color="white">{{project.tech.tech1}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech2}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech3}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech4}}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn flat large dark color="green" :href="project.git" target="_blank">
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn large flat dark color="green" :href="project.demo" target="_blank">
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Web Portfolio",
    titleTemplate: "%s ← Saad's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Saad Masood Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Saad' Space" },
      { property: "og:site_name", content: "Saad' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "http://usermigrated.com/" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      {
        property: "og:description",
        content:
          "Saad Masood Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
      }
    ]
  },
  data() {
    return {
      dialog: false,
      projects: [
         {
          dialog: false,
          title: "Quickbit",
          git: "https://home.quickbit.eu/",
          demo: "https://home.quickbit.eu/",
          tech: {
            tech1: "Gatsby",
            tech2: "JavaScript",
            tech3: "SCSS",
            tech4: "Markdown"
          },
          poster: "data:image/png;base64,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"
        },

        {
          dialog: false,
          title: "Celoxo",
          git: "https://celoxo.com/",
          demo: "https://celoxo.com/",
          tech: {
            tech1: "VUE",
            tech2: "SCSS",
            tech3: "HTML",
            tech4: "JavaScript"
          },
          poster: "data:image/png;base64,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"
        },
        {
          dialog: false,
          title: "Xero",
          git: "https://github.com/calcinai/xero-php",
          demo: "https://www.xero.com/",
          tech: {
            tech1: "VUE",
            tech2: "CSS",
            tech3: "HTML",
            tech4: "JavaScript"
          },
          poster: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAYFBMVEUAt+P///8AseEAteIAtOIAsOH4/f510OxDwufl9vzq+PxRxejy+/2t4fPW8Plly+owvuaI1e7D6faQ2O+45fWs4fOb2/F50e3d8/rL7Pc7wOak3vKV2fC+5/VbyOnJ6/e6GXe0AAADr0lEQVR4nO3cDU+jQBAGYHZ2FigfBVpaoPXw///L24UFavVs4XJXk3mfGCVRk/pmdpgFaRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HtaMxNre2C/sNavfj0/lw2ojE5dEiorzPZ5Uw7BwSeaymui7mR5SojrnqaovU9qlFTMr351P4qN6lNRLcIK1bXg8g9VNVdXSq9+jT8FvX0flZOjuBzN3eOslNoFSMtG8E23+uAivs/rMnwyK6VS4Wnp4PmslIpFr0StsxVZKVVKTov2q7JSmeCFyOd1WSl1EDtv6cvarJSKpC5E2q0PKxQaFjfrs1LqJLNt0ZqpYSFyktfVpqxULrG06Nltzj2JlZVuzEpV8tLiemtYe3mzFq3b6NwS1+K3DKQTcYMpj+fCulgyKHL7KTsXcXEdh4rzvmsid5gXcf+2nA/EnQ/51/B3NyaeIkhNZPMhQ+7DNbTQsD1u1cF+scw8arTSmta01SnIp5VS77IL8iTcvTFdbVisizZUNVHVhskpoLkKxYU1je8+rdhldSB/3XSnbUXZsOxhQjxexwlLyqcOLwwvrYouPitVzoPquy2jcIgxmiPKKPBHwq6Y6kDdpBX3Q1aJSbPdKAnIhuXm1iHWfX8aftBfK+yFhVXejgLMQzt6Z00T9mFlxiXG2ticrsYPsoXgsFLmYe/TUdxEXtOOYYXD6TJgY08IZ6lh3SzDmKLG9S27DPubCKdlSO471cGtPmpFLsNA32RV+C6vLvMNjMNxCqui6UJ9a6ZyFNbgl9EhHsenIS27RR5Phx3RFFbGNM6vSWAO/nekbQ6noTSeRs0hrTPxcb/rGnK5jGGpzlB/aLuKlxFe2lDqtzuFmcfyyB3W2hgyJnDLMfRbobY0FvFp+klx2x0+juvtuDT047v7XDdR5ZdbPnWw7hhVN5e/amkbaR2rzRphLcuW1rZ7O460/v43l5XFtSy7DvvHsXxN4A0L3Apbg3GTdQV+HMxX5LV3Z1tpySysjV1LZF05GwbTRmhh2YV4XZvVu7wZa0YPntm5J/kfcNf/a/erX/BrlY8TWqRiu/tIr0irl7wIB7p8diXG4rNyfeupxywS0Y+izDQ98aBFjcfwPb48eHwg6wXPV/c0Nd91rjeU1Qeamz9UV3bU6Oz3NMX5p/IK654Q1Vfc26tU9d4nlrV1dcHbq3xD28BsKWntDvDGPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB//AbqmCN314j0jQAAAABJRU5ErkJggg=="
        },
        // {
        //   dialog: false,
        //   title: "ChemPhobia",
        //   git: "http://chemphobia.com/",
        //   demo: "http://chemphobia.com/",
        //   tech: {
        //     tech1: "VUE",
        //     tech2: "GraphQL",
        //     tech3: "Axios",
        //     tech4: "JavaScript"
        //   },
        //   poster: "data:image/jpeg;base64,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"
        // },
      ]
    };
  }
};
</script>

<style  scoped>
</style>
