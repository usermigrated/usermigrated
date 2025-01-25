<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Graphic</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="image.dialog"
        lazy
        max-width="800"
        v-for="image in images"
        :key="image.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="image.poster"
                height="230"
                :alt="image.title"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{image.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="image.dialog">
          <v-img :src="image.poster"></v-img>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Graphic Portfolio ",
    titleTemplate: "%s ← Saad's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Saad's Graphic Adobe PhotoShop Logo Design Instagram Poster"
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
          "Saad's Graphic Adobe PhotoShop Logo Design Instagram Poster"
      }
    ]
  },
  data() {
    return {
      dialog: false,
      // images: [
      //   {
      //     dialog: false,
      //     title: "VilaShirts Logo",
      //     poster: "https://i.imgur.com/QEnmqcE.png"
      //   },
      //   {
      //     dialog: false,
      //     title: "BlackBird Property Group Logo",
      //     poster: "https://i.imgur.com/b37FfUU.jpg"
      //   },
      //   {
      //     dialog: false,
      //     title: "TeeLock Consulting Logo",
      //     poster: "https://i.imgur.com/XSo4bmw.jpg"
      //   },
      //   {
      //     dialog: false,
      //     title: "SEA||WA||MMXI",
      //     poster: "https://i.imgur.com/thxUnTH.jpg"
      //   },
      //   {
      //     dialog: false,
      //     title: "Alpine365 Logo",
      //     poster: "https://i.imgur.com/LOzW21e.jpg"
      //   },
      //   {
      //     dialog: false,
      //     title: "Josefine Product Pack",
      //     poster: "https://i.imgur.com/TrthgRN.jpg"
      //   },
      //   {
      //     dialog: false,
      //     title: "Next Party Flayer",
      //     poster: "https://i.imgur.com/tYjfL2d.jpg"
      //   },
      //   {
      //     dialog: false,
      //     title: "VilaShirts T-Shirts",
      //     poster: "https://i.imgur.com/ULuRuFB.jpg"
      //   },
      //   {
      //     dialog: false,
      //     title: "BAB Coin",
      //     poster: "https://i.imgur.com/YU52AVB.jpg"
      //   }
      // ]
    };
  }
};
</script>

<style  scoped>
</style>
