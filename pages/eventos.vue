<template>
    <div>
      <v-lazy v-model="active" :options="{ threshold: .5 }">
        <div id="background">
            <br />
            <br />
            <br />
            <v-container>
                <v-row>
                    <v-col cols="6" sm="6" md="6" style="color: white">
                        <h1>EVENTOS</h1>
                    </v-col>
                </v-row>
            </v-container>
            <br />
            <br />
            <br />
        </div>
        <br />
        <div>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6" class="d-none d-sm-flex" v-scrolls>
                        <div style="height:400px; width: 100%">
                            <v-card elevation="20" style="height:400px; width: 100%">
                                <v-carousel hide-delimiters show-arrows="hover" cycle interval="3000" cover style="height:400px">
                                    <v-carousel-item
                                        :src="ima21"
                                        cover
                                    ></v-carousel-item>

                                    <v-carousel-item
                                        :src="ima22"
                                        cover
                                    ></v-carousel-item>

                                    <v-carousel-item
                                        :src="ima23"
                                        cover
                                    ></v-carousel-item>
                                </v-carousel>
                            </v-card>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" style="position: relative" v-scrolls class="align-self-center">
                        <div id="circle4" style="bottom: 100px" class="d-none d-sm-flex"></div>
                        <div id="circle4" style="right: 0; top: 100px"></div>
                        <h2 style="color: #1A2A33" align="center">Capacitación en el manejo de los equipos y mantas Bair Hugger</h2>
                        <br />
                        <p>
                        Algunas de nuestras fotos son:
                            <br />
                        -	Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) – Reunión con médicos residentes Anestesiólogos
                            <br />
                            <br />
                        -	Capacitación a Licenciados de la Unidad de Cuidados Intensivos (UCI) y del Servicio de Hemodiálisis del Hospital Naval.
                            <br />
                            <br />
                        -	Capacitación a Licenciados de la Unidad de Cuidados Intensivos (UCI) y del Servicio de Hemodiálisis del Hospital Naval.

                        </p>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="d-flex d-sm-none" v-scrolls v-if="activador">
                        <v-card elevation="20" style="width: 100%">
                            <v-carousel hide-delimiters show-arrows="hover" cycle interval="3000" height="400px" >
                                <v-carousel-item
                                    :src="ima21"
                                    cover
                                ></v-carousel-item>

                                <v-carousel-item
                                    :src="ima22"
                                    cover
                                ></v-carousel-item>

                                <v-carousel-item
                                    :src="ima23"
                                    cover
                                ></v-carousel-item>
                            </v-carousel>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <br />
        <div>
            <v-container>
                <v-sheet
                    class="mx-auto"
                    elevation="8"
                >
                    <v-slide-group
                    class="pa-4"
                    center-active
                    show-arrows
                    >
                    <v-slide-group-item
                        v-for="card in cards"
                        :key="card"
                    >
                        <v-card
                        class="ma-4"
                        height="300"
                        width="300"
                        elevation="18"
                        >
                            <v-img :src="card" cover style="height: 100%" ></v-img>
                        </v-card>
                    </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-container>
        </div>
        <br />
        <div style="background: rgba(173, 216, 230, 0.5);">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6" style="position: relative" v-scrolls class="align-self-center">
                        <div id="circle4" style="right: 0; bottom: 100px; background: rgba(255, 255, 255, 0.4);" class="d-none d-sm-flex"></div>
                        <div id="circle4" style="left: 0; top: 100px; background: rgba(255, 255, 255, 0.5);"></div>
                        <p>
                            - Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) – Reunión con médicos residentes anestesiólogos
                            <br />
                            <br />
                            -Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) – Reunión con Licenciadas del Centro Quirúrgico
                        </p>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" v-scrolls>
                        <v-card elevation="20">
                            <v-carousel hide-delimiters show-arrows="hover" cycle interval="3000" height="400px" >
                                <v-carousel-item
                                    :src="ima17"
                                    cover
                                ></v-carousel-item>

                                <v-carousel-item
                                    :src="ima18"
                                    cover
                                ></v-carousel-item>

                                <v-carousel-item
                                    :src="ima19"
                                    cover
                                ></v-carousel-item>
                            </v-carousel>
                        </v-card>
                        
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <br />
        <div>
            <v-container>
                <v-sheet
                    class="mx-auto"
                    elevation="8"
                >
                    <v-slide-group
                    class="pa-4"
                    center-active
                    show-arrows
                    >
                    <v-slide-group-item
                        v-for="card in cards1"
                        :key="card"
                    >
                        <v-card
                        class="ma-4"
                        height="300"
                        width="300"
                        elevation="18"
                        >
                            <v-img :src="card" cover style="height: 100%" ></v-img>
                        </v-card>
                    </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-container>
        </div>
        <br />
        </v-lazy>
    </div>
</template>
<style scoped>
#background {
  background: url("../assets/imagen49.png");
  background-position: 50% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
}
.before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
  #circle4 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index:-3;
}
</style>
<script>
import imag1 from "../assets/imagen10.jpg"
import imag2 from "../assets/imagen11.jpg"
import imag3 from "../assets/imagen12.jpg"
import imag4 from "../assets/imagen13.jpg"
import imag5 from "../assets/imagen14.jpg"
import imag6 from "../assets/imagen15.jpg"
import imag7 from "../assets/imagen16.jpg"
import imag8 from "../assets/imagen17.jpg"
import imag9 from "../assets/imagen18.jpg"
import imag10 from "../assets/imagen19.jpg"
import imag11 from "../assets/imagen20.jpg"
import imag12 from "../assets/imagen21.jpg"
import imag13 from "../assets/imagen22.jpg"
import imag14 from "../assets/imagen23.jpg"
import imag15 from "../assets/imagen24.jpg"
import imag16 from "../assets/imagen25.jpg"
import imag17 from "../assets/imagen26.jpg"
import imag18 from "../assets/imagen27.jpg"
import imag19 from "../assets/imagen28.jpg"
import imag20 from "../assets/imagen29.jpg"
import imag21 from "../assets/imagen30.jpg"
import imag22 from "../assets/imagen31.jpg"
import imag23 from "../assets/imagen32.jpg"
export default {
    beforeMount(){
      this.activador = true
    },
    data() {
        return {
            active: false,
            cards: [imag1, imag2, imag3, imag4, imag5, imag6, imag7, imag8],
            cards1: [imag9, imag10, imag11, imag12, imag13, imag14, imag15, imag16],
            activador: false,
            ima17: imag17,
            ima18: imag18,
            ima19: imag19,
            ima20: imag20,
            ima21: imag21,
            ima22: imag22,
            ima23: imag23,
        }
    }
}
</script>
