<template>
    <div>
        <div id="background1">
            <br />
            <h1 align="center" style="color: white">ESTAMOS CAMBIANDO EL MUNDO</h1>
        </div>
        <br />
        <br />
        <div>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6" class="align-self-center" v-scrolls>
                        <p align="justify">
                            Somos una empresa dedicada a la comercialización y distribución de 
                            material médico, dispositivos médicos y productos farmacéuticos 
                            oncológicos de procedencia nacional y extranjera
                        </p>
                        <br />
                        <v-img
                            height="200px"
                            :src="ima2"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" style="position: relative" v-scrolls>
                        <div id="circle1" style="right: 0px; top: 20px"></div>
                        <div id="circle1" style="right: 10px"></div>
                        <v-img
                            class="d-none d-sm-flex"
                            height="180px"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/3M_wordmark.svg/1200px-3M_wordmark.svg.png"
                        ></v-img>
                        <br />
                        <h3>
                            Contamos con la autorización de la empresa 3M PERU S.A.C
                        </h3>
                        <p>
                            Gracias a nuestra vasta experiencia en el sector salud, es que desde 
                            el año 2019 contamos con esto. para la comercialización y distribución 
                            de su línea médica más reconocidas en el mercado mundial
                        </p>
                        <br class="d-flex d-sm-none" />
                        <v-img
                            class="d-flex d-sm-none"
                            height="180px"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/3M_wordmark.svg/1200px-3M_wordmark.svg.png"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <br />
        <br />
        <div style="background: rgba(173, 216, 230, 0.5); z-index:-2; position: relative">
            <div id="circle2"></div>
            <div id="circle3"></div>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6" v-scrolls class="align-self-center">
                        <h2 style="color: #1A2A33" align="center">NUESTRA MISIÓN</h2>
                        <p align="justify">
                            Es ofrecer a nuestros clientes del sector salud tanto público como privado 
                            productos de alta calidad, tecnología y seguridad, logrando satisfacer sus 
                            exigencias que permite con ello ser su mejor aliado para el logro de sus 
                            objetivos, que es el de otorgar a sus pacientes una mejor calidad de vida.
                        </p>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" v-scrolls>
                        <v-card height="350px" elevation="21">
                        <v-img
                            height="350px"
                            src="https://www.emprendedorinteligente.com/wp-content/uploads/2021/06/Que-es-la-mision-de-una-empresa.jpg"
                        ></v-img>
                    </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <br />
        <br />
        <div>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6" class="d-none d-sm-flex" v-scrolls>
                        <v-card elevation="15" style="width: 100%">
                            <v-img
                                height="350px"
                                cover
                                src="https://aprendihoy.com/wp-content/uploads/2021/08/imagen-destacada-mision-y-vision-930x620.png"
                            ></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" style="position: relative" v-scrolls class="align-self-center">
                        <div id="circle4" style="bottom: 100px" class="d-none d-sm-flex"></div>
                        <div id="circle4" style="right: 0; top: 100px"></div>
                        <h2 style="color: #1A2A33" align="center">NUESTRA VISIÓN</h2>
                        <p>
                            Es ser reconocidos como una empresa sólida en el mercado nacional, con un 
                            amplio portafolio de productos dirigido al sector de la salud, así como 
                            ofrecer a nuestros clientes un servicio personalizado, orientándolos siempre 
                            a una mejora continua de sus objetivos.
                        </p>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="d-flex d-sm-none" v-scrolls>
                        <v-card elevation="15" style="width: 100%">
                            <v-img
                                height="350px"
                                cover
                                src="https://aprendihoy.com/wp-content/uploads/2021/08/imagen-destacada-mision-y-vision-930x620.png"
                            ></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-img
            height="200px"
            src="/imagen1.png"
        ></v-img>
    </div>
</template>
<script>
import imag1 from "../assets/imagen33.png";
import imag2 from "../assets/imagen35.png";
import imag3 from "../assets/imagen76.jpeg";
export default {
    data() {
        return {
            ima1: imag1,
            ima2: imag2,
            ima3: imag3,
        }
    }
}
</script>
<style scoped>
.before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
#circle {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    bottom: 0;
    left: -150px;
    z-index:-1;
}
#circle1 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index:-1;
}
#circle2 {
    background: white;
    border-radius: 50%;
    width: 300px;
    height: 250px;
    position: absolute;
    bottom: -150px;
    left: -150px;
    z-index:-1;
}
#circle3 {
    background: white;
    border-radius: 50%;
    width: 300px;
    height: 250px;
    position: absolute;
    top: -150px;
    right: -150px;
    z-index:-1;
}
#circle4 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index:-3;
}
#circle5 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    top: -40px;
    right: 400px;
    z-index: -1;
}
#circle6 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -20px;
    z-index: -1;
}
#background1 {
    background: linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)),
      url("../assets/imagen76.jpeg");
    background-position: 50% 40%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px
  }
</style>
