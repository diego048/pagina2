<template>
    <div>
        <v-carousel hide-delimiters :show-arrows="false" cycle interval="3000" height="400px" style="position:relative">
            <div  style=" position: absolute ; z-index: 10; height: 400px; width: 100%; background-color: rgba(24, 91, 122, 0.18)" class="d-flex align-center">
                <v-container class="align-center">
                    <v-row>
                        <v-col cols="12" sm="6" md="6" style="color: white" >
                            <h1>TU SOPORTE EN LA GESTIÓN DE SERVICIOS PARA LA SALUD…..</h1>
                            <p>
                                Nos dedicamos a la comercialización y distribución de 
                                material médico, Apreta abajo para ver nuestros productos
                            </p>
                            <br />
                            <v-btn to="/productos" class="boton">
                                NUESTROS PRODUCTOS
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <v-carousel-item
                :src="ima12"
                style="filter: brightness(50%)"
                cover
            ></v-carousel-item>

            <v-carousel-item
                :src="ima13"
                style="filter: brightness(50%)"
                cover
            ></v-carousel-item>

            <v-carousel-item
                :src="ima14"
                style="filter: brightness(50%)"
                cover
            ></v-carousel-item>
        </v-carousel>
      
            <br />
            <br />
            <!--cuadro de nosotros-->
        <div style="position:relative" v-scrolls>
            <div id="circle"></div>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <v-row>
                            <v-col cols="6">
                                <v-img
                                    height="150"
                                    :src="ima4"
                                    cover
                                ></v-img>
                            </v-col>
                            <v-col cols="6">
                                <v-img
                                    height="150"
                                    :src="ima5"
                                    cover
                                ></v-img>
                            </v-col>
                        </v-row>
                        <br />
                        <v-img
                            height="200"
                            :src="ima6"
                            cover
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <p style="color: #0167FF">NOSOTROS</p>
                        <h2 style="color: #1A2A33">
                            ESTAMOS LISTOS PARA BRINDAR EL MEJOR SERVICIO MEDICO
                        </h2>
                        <br />
                        <p>
                            desde el año 2018 hemos logrado consolidar una cartera considerable 
                            de clientes entre ellos Essalud, Minsa y Clínicas privadas como la Clínica 
                            Internacional, Good Hope, San Felipe, entre otras, quienes nos siguen 
                            premiando nuestros esfuerzos a través de la atención de sus necesidades y 
                            requerimientos, garantizándoles resultados óptimos y a los mejores precios
                            del mercado.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
            <br />
            <br />
            <!--cuadros de productos-->
        <div style="background: rgba(239, 239, 239); position:relative;" v-if="activador">
            <div id="circle1" v-scrolls></div>
            <div id="circle2" v-scrolls></div>
            <br />
            <v-container v-scrolls>
                <h2 align="center" style="color: #1A2A33">
                    PRODUCTOS
                </h2>
                <p align="center">
                    Estos son algunos productos que nuestra empresa esta dispuesta a brindarle con la 
                    mejor calidad de servicio.
                </p>
                <br />
                <v-row class="d-flex" height="100">
                    <v-col
                    cols="12"
                    :sm="card.flex"
                    :md="card.flex1"
                    v-for="card in cards"
                    :key="card.id"
                    align="center"
                    class="flex d-flex align-self-stretch"
                    >
                       <v-card elevation="21" style="width: 100%"  @click="showDialog(card)" v-scrolls>
                              <v-img :src="card.src" height="200px"></v-img> 
                                    <div style="background-color: #F7F7F7">    
                                    <v-card-title
                                        class="text-pre-wrap"
                                        style="word-break: break-word"
                                    >
                                        {{ card.title }}
                                    </v-card-title>
                                    <v-card-subtitle> {{card.info}} </v-card-subtitle>
                                    <br />
                                    </div> 
                                </v-card>
                        <dibox v-show="card.show" @close="hideDialog(card)">
                                <div class="d-flex justify-space-between">
                                    <v-card-title class="d-flex justify-end">
                                        {{ card.title }}
                                    </v-card-title
                                    >
                                    <v-card-actions class="d-flex justify-start">
                                        <v-btn
                                            style="color: rgb(203, 50, 52)"
                                            variant="text"
                                            @click="hideDialog(card)"
                                        >
                                            <h1>X</h1>
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                                <v-divider></v-divider>
                                <div align="justify" class="text-pre-wrap">
                                    <div v-show="card.show1">
                                        <v-row>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-carousel show-arrows="hover" hide-delimiters>
                                                    <v-carousel-item
                                                        :src="ima10"
                                                    ></v-carousel-item>

                                                    <v-carousel-item
                                                        :src="card.src"
                                                    ></v-carousel-item>
                                                </v-carousel>
                                                <h2>Descripción</h2>
                                                <br />
                                                <p>
                                                    Cinta quirúrgica de polietileno de baja densidad, transparente,
                                                    macroperforada, libre de látex e hipoalergénica que puede
                                                    cortarse fácilmente en dirección longitudinal y transversal
                                                    sin necesidad de usar tijeras. Posee una alta adhesión inicial
                                                    en piel seca y moderada en piel húmeda. Es versátil y segura
                                                    para aplicaciones de corta duración que requieren rapidez
                                                    y facilidad de manejo, incluso con guantes.
                                                </p>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <h2>Ventajas</h2>
                                                <v-list>
                                                    <v-list-item v-for="item in items13" :key="item.title">
                                                        <div class="d-flex flex-row ">
                                                            <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                            <p class="pl-8">{{ item.title }}</p>
                                                        </div>
                                                    </v-list-item>
                                                </v-list>
                                                <h2>beneficios</h2>
                                                <v-list>
                                                    <v-list-item v-for="item in items14" :key="item.title">
                                                        <div class="d-flex flex-row ">
                                                            <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                            <p class="pl-8">{{ item.title }}</p>
                                                        </div>
                                                    </v-list-item>
                                                </v-list>
                                            </v-col>
                                        </v-row>
                                        <div class="d-none d-sm-flex">
                                            <v-table style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Presentación
                                                        </th>
                                                        <th>
                                                            Tamaño
                                                        </th>
                                                        <th>
                                                            Rollos/Caja
                                                        </th>
                                                        <th>
                                                            Cajas/Cartón.
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>    
                                                        <td>1527-1</td>
                                                        <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                                        <td>12 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>1527-2</td>
                                                        <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                                        <td>6 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>1527-3</td>
                                                        <td>3 in x 10 yd/ 7,5 cm x 9,14 m</td>
                                                        <td>4 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                </tbody>
                                            </v-table>
                                        </div>
                                        <div class="d-flex d-sm-none">
                                            <v-table style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Presentación
                                                        </th>
                                                        <th>
                                                            Tamaño
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>    
                                                        <td>1527-1</td>
                                                        <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>1527-2</td>
                                                        <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>

                                                    </tr>
                                                    <tr>    
                                                        <td>1527-3</td>
                                                        <td>3 in x 10 yd/ 7,5 cm x 9,14 m</td>
                                                    </tr>
                                                </tbody>
                                            </v-table>
                                        </div>
                                        <div class="d-flex d-sm-none">
                                            <v-table style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Rollos/Caja
                                                        </th>
                                                        <th>
                                                            Cajas/Cartón.
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>    
                                                        <td>12 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>6 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>4 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                </tbody>
                                            </v-table>
                                        </div>
                                    </div>
                                    <div v-show="card.show2">
                                    <h2>Descripción</h2>
                                    <p>
                                        Cinta quirúrgica de rayón no tejida, microporosa, libre de látex
                                        e hipoalergénica que es suave con la piel del paciente, aunque,
                                        se adhiere bien especialmente, en piel húmeda y en aplicaciones
                                        prolongadas. Es económica y la marca de mayor confianza para
                                        los profesionales de la salud por más de 50 años.
                                        <br />
                                        <br />
                                        Disponible en color blanco, con y sin dispensador, y en tonalidad 
                                        piel.
                                    </p>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <h2>Ventajas</h2>
                                            <v-list>
                                                <v-list-item v-for="item in items10" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <h2>Beneficios</h2>
                                            <v-list>
                                                <v-list-item v-for="item in items17" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-list>
                                                <v-list-item v-for="item in items11" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-list>
                                                <v-list-item v-for="item in items12" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-list>
                                                <v-list-item>
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">
                                                            Permite corte recto y estético sin necesidad de usar tijeras.
                                                        </p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-list>
                                                <v-list-item>
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">Fácil de usar</p>
                                                    </div>
                                                </v-list-item>
                                                <v-list-item>
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">Conveniencia.</p>
                                                    </div> 
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                    <div  class="d-none d-sm-flex">
                                        <div style="width: 100%">
                                            <v-table>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Presentación
                                                        </th>
                                                        <th>
                                                            Tamaño
                                                        </th>
                                                        <th>
                                                            Rollos/Caja
                                                        </th>
                                                        <th>
                                                            Cajas/Cartón.
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>    
                                                        <td>1530-1</td>
                                                        <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                                        <td>12 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>1530-2</td>
                                                        <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                                        <td>6 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>1530-3</td>
                                                        <td>3 in x 10 yd/ 7,5 cm x 9,14 m</td>
                                                        <td>4 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                </tbody>
                                            </v-table> 
                                        </div> 
                                    </div>                              
                                    <div class="d-flex d-sm-none">
                                            <div>
                                            <v-table>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Presentación
                                                        </th>
                                                        <th>
                                                            Tamaño
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>    
                                                        <td>1530-1</td>
                                                        <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>1530-2</td>
                                                        <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>1530-3</td>
                                                        <td>3 in x 10 yd/ 7,5 cm x 9,14 m</td>
                                                    </tr>
                                                </tbody>
                                            </v-table>
                                            <v-table>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Rollos/Caja
                                                        </th>
                                                        <th>
                                                            Cajas/Cartón.
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>    
                                                        <td>12 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>6 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                    <tr>    
                                                        <td>4 rollos/caja.</td>
                                                        <td>10 cajas/cartón.</td>
                                                    </tr>
                                                </tbody>
                                            </v-table>
                                            </div>
                                    </div>
                                    </div>
                                    <div v-show="card.show3">
                                        <v-row>
                                            <v-col>
                                                <h3>
                                                    Cavilon Película Protectora Sin Ardor es una versátil 
                                                    solución para ayudar a prevenir el daño de la piel antes 
                                                    que suceda y para proteger la piel ya dañada de sufrir mayores 
                                                    lesiones.
                                                </h3>
                                                <br />
                                                <p>
                                                    El trauma adhesivo, los fluidos corporales y la fricción pueden 
                                                    deteriorar la piel rápidamente. Cavilon Película Protectora Sin 
                                                    Ardor es la película protectora libre de alcohol original y la única 
                                                    a base de terpolímero que otorga protección contra el daño de la piel. 
                                                    Su formulación única contiene polímeros que forman una capa protectora
                                                    que no produce ardor al aplicar y que resiste el agua. Es respirable y 
                                                    transparente, permitiendo la visualización y monitoreo continuo de la 
                                                    piel. Gracias a que contiene un plastificante, es flexible y se adapta a 
                                                    la piel durante movimientos o cambios de posición.
                                                </p>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-list>
                                                    <v-list-item v-for="item in items9" :key="item.title">
                                                        <div class="d-flex flex-row ">
                                                            <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                            <p class="pl-8">{{ item.title }}</p>
                                                        </div>
                                                    </v-list-item>
                                                </v-list>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6" class="d-flex justify-center align-self-center">
                                                <div>
                                                    <v-img :src="card.src" style="width: 40vh; min-width: 300px"></v-img>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <p>
                                                    Cavilon Película Protectora Sin Ardor está excepcionalmente formulada
                                                    para proteger la piel de las heces, orina y adhesivos. Su formulación no
                                                    citotóxica y libre de alcohol, otorga comodidad al paciente, incluso cuando
                                                    la piel está dañada.
                                                </p>
                                                <br />
                                                <p>
                                                    Cavilon Película Protectora Sin Ardor está especialmente indicada para proteger 
                                                    la piel intacta (DAI categoría 1) o dañada (DAI categoría 2) y cumple todas
                                                    características de un producto ideal para la DAI.
                                                </p>
                                            </v-col>
                                        </v-row>
                                        <v-img :src="ima11" style="width: 100%"></v-img>
                                    </div>
                                </div>
                        </dibox>
                    </v-col>
                </v-row>
                <br />
                <br />
                <div align="center">
                    <v-btn class="boton" to="/productos" height="50px">
                        APRETA PARA VER TODO LOS PRODUCTOS
                    </v-btn>
                </div>
            </v-container>
            <br />
            <br />
        </div>
        <br />
            <!--cuadros de eventos-->
        <div style="position: relative" v-scrolls>
            <div id="circle3" style="background: rgba(173, 216, 230, 0.5); left: 20px"></div>
            <div id="circle3" style="background: rgba(10, 76, 176, 0.5); left: 30px; top: 20px"></div>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6" style="position: relative">
                        <h1 align="center" style="color: #1A2A33">
                            EVENTOS
                        </h1>
                        <p align="justify">
                            El mundo siempre esta en pleno cambio, por eso nosotros nos enfocamos en brindar 
                            un servicio unico para que nuestros clientes nunca pierdan la confianza en nosotros
                        </p>
                        <br />
                        <div align="center">
                            <v-btn to="/eventos" class="boton" height="40px">
                                MÁS INFORMACIÓN
                            </v-btn>
                        </div>
                        <div id="circle4" style="right: 20px; bottom: 40px"></div>
                        <div id="circle4" style="right: 50px; bottom: 40px"></div>
                        <div id="circle4" style="right: 35px; bottom: 15px"></div>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <v-img
                            height="300"
                            :src="ima7"
                            cover
                        ></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!--formulario-->
        <div id="formulario" style="background: linear-gradient(0.32turn, #101D64, rgba(10,146,176,0.81));">
            <br />
            <h1 style="color: white" align="center" v-scrolls>CONTACTANOS</h1>
            <v-container style="color: white" v-scrolls>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <br />
                        <h3>
                            RUC: 20602907067
                            <br />
                            <br />
                            Calle Cantuarias N° 160 Of. 505 - Miraflores -Lima.
                            <br />
                            <br />
                            (01) 5918989
                            <br />
                            <br />
                            comercial.rspharma@gmail.com
                            <br />
                            <br />
                            ventas@rspharmaperu.com
                        </h3>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="register">
                        <input type="text" placeholder="Nombre" />
                        <input type="text" placeholder="E-mail" />
                        <textarea type="text" rows="6" placeholder="Mensaje"></textarea>
                        <button>Enviar</button>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script>
import imag1 from "../assets/imagen70.png";
import imag2 from "../assets/imagen2.png";
import imag3 from "../assets/imagen3.png";
import imag4 from "../assets/imagen4.png";
import imag5 from "../assets/imagen5.png";
import imag6 from "../assets/imagen6.png";
import imag7 from "../assets/imagen7.png";
import imag8 from "../assets/imagen8.png";
import imag9 from "../assets/imagen9.png";
import imag10 from "../assets/imagen13.jpg"
import imag11 from "../assets/imagen71.png";
import imag12 from "../assets/imagen72.png";
import imag13 from "../assets/imagen62.png"
import imag14 from "../assets/imagen61.png"
import imag15 from "../assets/imagen18.jpg"
import imag16 from "../assets/imagen22.jpg"
import imag17 from "../assets/imagen23.jpg"
export default {
    unmounted(){
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
    beforeMount(){
      this.activador = true
    },
     methods: {
        showDialog(card) {
            this.scrollPosition = window.pageYOffset;
            (card.show) = true;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${this.scrollPosition}px`;
            document.body.style.width = '100%';
            document.body.style.overflowY = 'hidden';
        },
        hideDialog(card) {
            (card.show) = false;
            document.body.style.position = 'static';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
            window.scrollTo(0, this.scrollPosition);
        }
    }
    data() {
      return {
        activador: false,
        ima1: imag1,
        ima2: imag2,
        ima3: imag3,
        ima4: imag4,
        ima5: imag5,
        ima6: imag6,
        ima7: imag10,
        ima8: imag11,
        ima9: imag12,
        ima10: imag13,
        ima11: imag14,
        ima12: imag15,
        ima13: imag16,
        ima14: imag17,
        cards: [
            {
                id: 1, 
                flex: 4, 
                flex1: 4, 
                title: "Cinta Quirúrgica de Plástico Macroperforado", 
                info: "Cinta quirúrgica de polietileno de baja densidad, transparente, macroperforada, libre de latex.....", 
                show1: true,
                show: false, 
                src: imag7,
            },
            {
                id: 2, 
                flex: 4, 
                flex1: 4, 
                title: "Cinta Quirúrgica de Papel Microporosa", 
                info: "Cinta quirúrgica de rayón no tejida, microporosa, libre de latex e hipoalergénica......", 
                show2: true,
                show: false, 
                src: imag8,
            },
            {
                id: 3, 
                flex: 4, 
                flex1: 4, 
                title: "CavilonTM Película Protectora Sin Ardor", 
                info: "Es una versátil solución para ayudar a prevenir el daño de la piel antes que suceda.", 
                show3: true,
                show: false, 
                src: imag9,
            },
        ],
        items9: [
        {title: "Solución versátil para muchos problemas de la piel"},
        {title: "Compatible con gluconato de clorhexidina (CHG) y povidona yodada"},
        {title: "Seca rápidamente y no deja sensación pegajosa"},
        {title: "Hipoalergénica"},
        {title: "Cuenta con presentaciones estériles como hisopos y toallitas"},
        {title: "No produce ardor y no es citotóxica? — se puede usar sobre la piel intacta o dañada"},
        {title: "Costo-efectiva"},
        ],
        items13: [
            {title: "Permite el normal funcionamiento e intercambio gaseoso de la piel."},
            {title: "Evita la maceración y el compromiso de la integridad de la piel al ser porosa."},
            {title: "Permite un fácil corte bi-direccional: tanto en forma longitudinal como transversal sin necesidad de usar tijeras u otros dispositivos corto punzantes"},
            {title: "Puede cortarse en tiras más angostas según la necesidad clínica y el tipo de paciente"},
            {title: "Buena resistencia a la penetración del agua o la humedad de la piel (sudor)"},
            {title: "Transparencia que permite observar la piel. Menos notorio que respaldo de papel."},
            {title: "Permite visualizar el sitio de aplicación. Facilita la detección de problemas en forma precoz (ej. Hebitis, irritación)"},
        ],
        items14: [
            {title: "Seguridad"},
            {title: "Versatilidad"},
            {title: "Comodidad"},
            {title: "Fácil de usar"},
            {title: "Estético"},
            {title: "Complacencia"},
        ],
        items10: [
            {title: "Permite el normal funcionamiento"},
            {title: "intercambio gaseoso de la piel"},
            {title: "Evita la maceración y el compromiso de la integridad de la piel. No es oclusivo"},
            {title: "Suave con la piel. Ideal para ser usada en pacientes con piel delicada o sensible (niños, ancianos) o en vendajes con alta frecuencia de cambio."},
            {title: "Buena adaptabilidad a sitios anatómicos complejos"},
            {title: "Excelente apariencia que mimetiza el color de la piel"},
        ],
        items11: [
            {title: "Hipoalérgico: reduce el riesgo de una reacción alérgica en el paciente. Suave con la piel. Balance adhesivo optimizado. Adhesión inicial baja que incrementa  con el paso del tiempo. Ideal para . aplicaciones de larga duración (>72hrs.)"},
            {title: "Buena adhesión en pieles húmedas debido a estado febril o condición climática calurosa o húmeda. Menor desprendimiento no programado de la cinta."},
            {title: "Mínimo residuo del adhesivo post remoción."},
            {title: "Versatilidad"},
            {title: "Estética"},
            {title: "Complacencia"},
        ],
        items12: [
            {title: "Seguridad"},
            {title: "Confiabilidad"},
            {title: "Ahorro de tiempo"},
            {title: "Ahorro de dinero"},
            {title: "Mayor Productividad"},
            {title: "Mejor calidad de salud"},
        ],
        items17: [
            {title: "Seguridad"},
            {title: "Comodidad"},
            {title: "Protección"},
            {title: "Versatilidad"},
            {title: "Estética"},
            {title: "Complacencia"},
        ],
      };},
};
</script>
<style scoped>
  #circle {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    top: 0;
    right: -150px;
    z-index:-1;
}
  #circle1 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    top: 0;
    left: -150px;
    
}
#circle2 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    bottom: 0;
    right: -150px;
    
}
#circle3 {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    z-index:-1;
}
#circle4 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    position: absolute;
    z-index:-1;
}
#circle5 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    top: 0;
    left: -300px;
    z-index:-1;
}
  .register input {
    width: 100%;
    height: 40px;
    display: block;
    margin: 20px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    padding-left: 20px;
    background: white;
  }
  .register textarea {
    width: 100%;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    resize: none;
    padding-left: 20px;
    margin-bottom: 30px;
    background: white;
  }
  .register button {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    background-color: #2640d3;
    color: #fff;
    border: none;
    border-radius: 5px;
    text-decoration: none;
  }
  .boton {
    background: linear-gradient(0.3turn, #101D64, rgba(10,146,176,0.81)); 
    color: white;
    text-decoration: none;
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
</style>
