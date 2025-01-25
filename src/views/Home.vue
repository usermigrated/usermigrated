<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '1300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br>

    <vue-typer class="headline" :repeat="0" text="Saad Masood"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="green--text">Me</span>
            </h3>
            <div>
              <p>
                Hello! I’m Saad Masood. I'm a computer scientist who
                is passionate about
                <span
                  class="green--text font-weight-bold"
                >VUE</span>, building great user experiences,
                fighting for simplicity over complexity and constantly learning.
                When I'm not coding or making videos, you'll find me traveling across Europe.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Saad's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Saad Masood's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Saad' Space" },
      { property: "og:site_name", content: "Saad' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "http://usermigrated.com/" },
      {
        property: "og:image",
        content: "https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/13962707_1036578746457697_4073775371878566819_n.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=eyZ01bzof8wAX8oa4gV&_nc_ht=scontent.flhe5-1.fna&oh=918421935372ddf19ed3f05eef57217e&oe=5F0A2E1E"
      },
      { property: "og:description", content: "Saad Masood's Portfolio" }
    ]
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/usermigrated", icon: "fab fa-github" },
        {
          href: "https://stackoverflow.com/users/19445361/saad-masood",
          icon: "fab fa-stack-overflow"
        },
        { href: "https://x.com/saadifalcon", icon: "fab fa-twitter" },
        {
          href: "https://www.linkedin.com/in/saad-masood-192210160/",
          icon: "fab fa-linkedin-in"
        },
        {
          href: "https://www.facebook.com/saad.masood.3152",
          icon: "fab fa-facebook-f"
        },
          {
          href: "https://www.snapchat.com/add/usermigrated",
          icon: " fab fa-snapchat"
        },

        { href: "https://www.instagram.com/officialsaadchaudhry", icon: "fab fa-instagram" }
      ],
      text1: ["Back-End Developer", "Web Developer", "Web Designer"],
      leftImage:  "https://i.imgur.com/Bp6WcsQ.png",
      rightImage: "https://i.imgur.com/Qp1BIVI.jpg",
      leftImage2: "https://i.imgur.com/N8QOm8j.jpg",
      rightImage2:"https://i.imgur.com/a5R7hgq.jpg",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  }
};
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>

