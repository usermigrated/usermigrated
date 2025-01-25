<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>My</span>
          <span class="green--text">Services</span>
        </h2>
      </v-flex>
      <v-flex v-for="service in services" :key="service.src" xs6 sm3 md3 lg3 xl3>
        <v-card hover flat color="transparent" :style="{'cursor':'context-menu'}">
          <v-card-title></v-card-title>
          <v-img
            :src="service.src"
            height="100"
            aspect-ratio="2.75"
            :alt="'Saad do '+service.title"
            lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            contain
          ></v-img>
          <v-card-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{service.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>My</span>
          <span class="green--text">Clients</span>
        </h2>
      </v-flex>

      <v-flex v-for="client in clients" :key="client.src" xs6 sm4 md3 lg2 xl2>
        <v-card flat :href="client.href" target="_blank" color="transparent">
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              :src="client.src"
              :alt="client.name+' logo'"
              lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              height="100"
              width="160"
              aspect-ratio="2.75"
              contain
            >
              <v-expand-transition>
                <div
                  v-if="!hover"
                  class="transition-fast-in-fast-out green v-img--reveal"
                  style="height: 100%;"
                ></div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Services",
    titleTemplate: "%s ← Saad's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Saad's Services Web Development Video Editing Graphic Design Front-End Advetising"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Saad' Space" },
      { property: "og:site_name", content: "Saad' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "http://usermigrated.com/" },
      {
        property: "og:image",
        content: "https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/13962707_1036578746457697_4073775371878566819_n.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=eyZ01bzof8wAX8oa4gV&_nc_ht=scontent.flhe5-1.fna&oh=918421935372ddf19ed3f05eef57217e&oe=5F0A2E1E"
      },
      {
        property: "og:description",
        content:
          "Saad Services Web Development Video Editing Graphic Design Front-End Advetising"
      }
    ]
  },
  data() {
    return {
      clients: [
        {
          name: "Agentpet",
          src: "https://www.agentpet.com/img/agent-pet-logo.png",
          href: "https://www.agentpet.com/"
        },
        {
          name: "BearPlex",
          src: "https://bearplex.com/wp-content/uploads/2021/04/bearplex-gif.gif",
          href: "http://bearplex.com/"
        },
        {
          name: "Quickbit",
          src: "data:image/png;base64,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",
          href: "https://quickbit.eu/"
        },
        {
          name: "Programmers Force",
          src: "data:image/png;base64,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",
          href: "https://pf.com.pk/"
        },
        {
          name: "Cybeorg",
          src: "https://cybeorg.com/wp-content/uploads/2020/08/WhatsApp_Image_2020-09-09_at_5.34.12_PM__1_-removebg-preview.png",
          href: "https://cybeorg.com/"
        },
      ],
      services: [
        {
          src: "https://i.imgur.com/GvTt5GG.png",
          title: "Web Development"
        },
        {
          src: "https://i.imgur.com/g74mGuU.png",
          title: "Web Design"
        },

        // {
        //   src: "https://i.imgur.com/wXLtLKy.png",
        //   title: "Video Editing"
        // },
        // {
        //   src: "https://i.imgur.com/tcZnDep.png",
        //   title: "Advertising"
        // }
      ]
    };
  }
};
</script>
<style >
.v-img--reveal {
  opacity: 0.3;
}
</style>
