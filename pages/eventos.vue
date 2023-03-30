<template>
    <div v-if="activador">
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
                                        src="/imag/imagen30.jpg"
                                        cover
                                    ></v-carousel-item>

                                    <v-carousel-item
                                        src="/imag/imagen31.jpg"
                                        cover
                                    ></v-carousel-item>

                                    <v-carousel-item
                                        src="/imag/imagen32.jpg"
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
                                    src="/imag/imagen30.jpg"
                                    cover
                                ></v-carousel-item>

                                <v-carousel-item
                                    src="/imag/imagen31.jpg"
                                    cover
                                ></v-carousel-item>

                                <v-carousel-item
                                    src="/imag/imagen32.jpg"
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
                                    src="/imag/imagen26.jpg"
                                    cover
                                ></v-carousel-item>

                                <v-carousel-item
                                    src="/imag/imagen27.jpg"
                                    cover
                                ></v-carousel-item>

                                <v-carousel-item
                                    src="/imag/imagen28.jpg"
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
export default {
    beforeMount(){
      this.activador = true
    },
    data() {
        return {
            active: false,
            cards: ["/imag/imagen10.jpg", "/imag/imagen11.jpg", "/imag/imagen12.jpg", "/imag/imagen13.jpg", "/imag/imagen14.jpg", "/imag/imagen15.jpg", "/imag/imagen16.jpg", "/imag/imagen17.jpg"],
            cards1: ["/imag/imagen18.jpg", "/imag/imagen19.jpg", "/imag/imagen20.jpg", "/imag/imagen21.jpg", "/imag/imagen22.jpg", "/imag/imagen23.jpg", "/imag/imagen24.jpg", "/imag/imagen25.jpg"],
            activador: false,
        }
    }
}
</script>
