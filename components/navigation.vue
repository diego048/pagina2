<template>
    <div>
      <v-layout :lazy="true">
        <v-navigation-drawer v-model="drawer" app>
        <v-img
          class="mx-2"
          src="/imag/imagen37.png"
          contain
        ></v-img>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            router
            to="/"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group"
            title="nosotros"
            router
            to="/nosotros"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-medical-bag"
            title="Productos"
            router
            to="/productos"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-calendar-heart"
            title="Eventos"
            router
            to="/eventos"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>    
        <v-app-bar app color="white accent-3" class="pe-2">
          <div>
            <v-app-bar-title class="ma-0 pa-0" style="width: 18vw; min-width: 200px">
                <NuxtLink class="link" to="/">
                  <v-img
                    class="mx-2"
                    :src="p1"
                    style="width: 90%"
                    contain
                  ></v-img>
                </NuxtLink>
            </v-app-bar-title>
          </div>
          <v-spacer></v-spacer>
          <div v-show="!mobile" class="d-none d-sm-flex">
            <v-btn class="link" to="/">
              HOME
            </v-btn>
          </div>
          <div v-show="!mobile" class="d-none d-sm-flex">
            <v-btn class="link" to="/nosotros">
              NOSOTROS
            </v-btn>
          </div>
          <div v-show="!mobile" class="d-none d-sm-flex">
            <v-btn class="link" to="/productos">
              PRODUCTOS
            </v-btn>
          </div>
          <div v-show="!mobile" class="d-none d-sm-flex">
            <v-btn class="link" to="/eventos">
              EVENTOS
            </v-btn>
          </div>
          <v-app-bar-nav-icon @click="drawer = !drawer" v-show="mobile">
          </v-app-bar-nav-icon>
        </v-app-bar>
        <v-main></v-main>
      </v-layout>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        drawer: false,
        mobile: null,
        windowwith: null,
      }
    },
    beforeMount() {
      window.addEventListener("resize", this.checkScreen);
      this.checkScreen();
    },
    methods : {
      checkScreen() {
        this.windowwith = window.innerWidth;
        if (this.windowwith <= 740) {
          this.mobile = true;
          return;
        }
        this.drawer = false;
        this.mobile = false;
        return;
      },
    }
  };
</script>
  <style scoped>
  .link {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  </style>
  
