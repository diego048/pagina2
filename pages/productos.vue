<template>
    <div>
        <div id="background">
            <br />
            <br />
            <br />
            <v-container>
                <v-row>
                    <v-col cols="8" sm="6" md="6" style="color: white">
                        <h1>PRODUCTOS</h1>
                        <h3>
                            ponemos a su total disposición nuestra mercancía 
                            de la más alta calidad
                        </h3>
                    </v-col>
                </v-row>
            </v-container>
            <br />
            <br />
            <br />
        </div>
        <v-container>
            <h2 align="center">Pulse en los cuadros para más información</h2>
            <br />
            <v-row class="d-flex" height="100">
                <v-col
                cols="12"
                md="4"
                sm="6"
                v-for="card in cards"
                :key="card.id"
                align="center"
                class="flex d-flex align-self-stretch"
                v-scrolls
                >
                <v-card  @click="showDialog(card)" elevation="21" align="center" style="width: 100%"  v-scrolls>
                                <v-img :src="card.src" height="200px" style="background-color: #F1F1F1"></v-img>      
                                <v-card-title
                                    class="text-pre-wrap"
                                    style="word-break: break-word"
                                >
                                    {{ card.title }}
                                </v-card-title>
                                <v-card-subtitle 
                                    class="text-pre-wrap" 
                                    style="word-break: break-word"
                                >
                                    {{card.info}}
                                </v-card-subtitle>
                            </v-card>
                </v-col>
            </v-row>
        </v-container>
        <br />
        <div style="background: linear-gradient(0.3turn, #101D64, rgba(10,146,176,0.81));">
            <v-container v-scrolls>
                <v-row>
                    <v-col class="d-flex justify-space-between">
                        <v-btn style="
                                    background: white;
                                    color: black"
                                    @click="showDialog1()"
                                >
                                    NUESTROS PRODUCTOS
                                </v-btn>
                        <h1 style="color: white">LISTA DE PRODUCTOS</h1>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-container>
            <br />
            <v-row class="d-flex" height="100">
                <v-col
                cols="12"
                sm="6"
                :md="card.flex1"
                v-for="card in cards1"
                :key="card.id"
                align="center"
                class="flex d-flex align-self-stretch"
                v-scrolls
                >
                    <v-card  @click="showDialog(card)" elevation="21" align="center" style="width: 100%"  v-scrolls>
                                <v-img :src="card.src" height="200px" style="background-color: #F1F1F1"></v-img>      
                                <v-card-title
                                    class="text-pre-wrap"
                                    style="word-break: break-word"
                                >
                                    {{ card.title }}
                                </v-card-title>
                                <v-card-subtitle> {{card.info}} </v-card-subtitle>
                            </v-card>
                </v-col>
            </v-row>
        </v-container>
        
        <div v-for="card in cards" :key="card.id">
            <dibox v-show="card.show" @close="hideDialog(card)">
                        
                        <v-card>
                            <div class="d-flex justify-space-between text-pre-wrap">
                                <div>
                                    <v-card-title class="text-pre-wrap" style="word-break: break-word">
                                        {{ card.title }}
                                    </v-card-title>
                                </div>
                                <v-card-actions>
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
                            <v-card-text align="justify">
                                <div v-show="card.show1">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-img :src="ima14" style="width: 100%"></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-img :src="ima15" style="width: 100%"></v-img>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-img :src="ima16" style="width: 100%"></v-img>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6" class="align-self-center">
                                            <h2>
                                                Apósito Transparente Tegaderm CHG para el Aseguramiento del 
                                                Sitio 1.V. con Gluconato de Clorhexidina
                                            </h2>
                                            <p>
                                                El único apósito transparente que se ha comprobado que reduce CREBSI y la
                                                colonización del catéter vascular. La almohadilla de gel provee 2% de CHG
                                                a la superficie de la piel inmediatamente, sin requerir humedad para acti-
                                                varse. El diseño integrado asegura una aplicación consistente, apegándose
                                                a los lineamientos basados en evidencia y los estándares de la práctica.
                                            </p>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-img :src="ima17" style="width: 100%"></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-img :src="ima18" style="width: 100%"></v-img>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <h2>
                                                Diseñados para brindar aseguramiento consistente y comodidad
                                            </h2>
                                            <h4>
                                                Apósito Transparente 3M'“ Tegaderm"* |.V. Aseguramiento Avanzado
                                            </h4>
                                            <p>
                                                Un apósito transparente transpirable, que protege de la contaminación 
                                                externa y puede usarse como método de aseguramiento primario para catéteres 
                                                periféricos, arteriales y catéteres centrales de inserción periférica (PICCs, 
                                                por sus siglas en inglés). Los Apósitos Transparentes 3M'“ Tegaderm"" 1.V. 
                                                Aseguramiento Avanzado son una solución cómoda que brinda aseguramiento, 
                                                visibilidad del sitio de inserción y transpirabilidad en un solo producto.
                                            </p>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" class="align-self-center">
                                            <v-img :src="ima19" style="width: 100%"></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-img :src="ima20" style="width: 100%"></v-img>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-show="card.show2">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <h2>Descripción</h2>
                                            <p>
                                                Cinta quirúrgica tipo seda de tafetán tejido, libre
                                                de látex e hipoalergénica que puede cortarse
                                                fácilmente en dirección longitudinal y transversal
                                                sin necesidad de usar tijeras. Posee una alta adhesión
                                                inicial y a largo plazo. En piel húmeda su adhesión
                                                es baja. El tipo de soporte otorga a la cinta una gran
                                                resistencia a la tensión y al agua, y una apariencia
                                                profesional. Es segura para aplicaciones que requieren
                                                un mayor poder adhesivo y resistencia por tiempo
                                                prolongado.
                                            </p>
                                            <br />
                                            <h2>Beneficios</h2>
                                            <v-list>
                                                <v-list-item v-for="item in items15" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>

                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <h2>Ventajas</h2>
                                            <v-list>
                                                <v-list-item v-for="item in items16" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
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
                                                    <td>1538-1</td>
                                                    <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                                    <td>12 rollos/caja.</td>
                                                    <td>10 cajas/cartón.</td>
                                                </tr>
                                                <tr>    
                                                    <td>1538-2</td>
                                                    <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                                    <td>6 rollos/caja.</td>
                                                    <td>10 cajas/cartón.</td>
                                                </tr>
                                                <tr>    
                                                    <td>1538-3</td>
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
                                                    <td>1538-1</td>
                                                    <td>1 in x 10 yd /2,5 cm x 9,14 m</td>

                                                </tr>
                                                <tr>    
                                                    <td>1538-2</td>
                                                    <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                                </tr>
                                                <tr>    
                                                    <td>1538-3</td>
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
                                <div v-show="card.show3">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-carousel show-arrows="hover" hide-delimiters>
                                                <v-carousel-item
                                                    :src="ima13"
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
                                <div v-show="card.show4">
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
                                <div v-show="card.show5">
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
                                    <v-img :src="ima12" style="width: 100%"></v-img>
                                </div>
                                <div v-show="card.show6">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <h3>
                                                Los pacientes anestesiados no pueden regular su temperatura
                                            </h3>
                                            <br />
                                            <p>
                                                La respuesta fisiológica del cuerpo a la anestesia pone en riesgo
                                                de hipotermia inadvertida prácticamente a cada paciente
                                                quirúrgico anestesiado, independientemente de la edad, el
                                                sexo 0 el estado físico. Las investigaciónes muestran que la
                                                temperatura central del cuerpo disminuye rápidamente (hasta
                                                1,6 “C solo en la primera hora') después de la inducción de la
                                                anestesia.
                                            </p>
                                            <br />
                                            <p>
                                                Desafortunadamente, la hipotermia inadvertida sigue siendo
                                                una complicación demasiado frecuente y costosa de la cirugía,
                                                a menudo asociada con tasas más altas de mortalidad”,
                                                hospitalizaciones más prolongadas* y una mayor tasa de
                                                infección en las heridas".
                                            </p>
                                            <br />
                                            <h2>Mantas bajo paciente</h2>
                                            <v-row>
                                                <v-col>
                                                    <v-img :src="ima3" style="width: 100%"></v-img>
                                                </v-col>
                                                <v-col>
                                                    <v-img :src="ima4" style="width: 100%"></v-img>
                                                </v-col>
                                                <v-col>
                                                    <v-img :src="ima5" style="width: 100%"></v-img>
                                                </v-col>
                                            </v-row>
                                            <h2>Mantas intraoperatorias</h2>
                                            <v-row>
                                                <v-col>
                                                    <v-img :src="ima6" style="width: 100%"></v-img>
                                                </v-col>
                                                <v-col>
                                                    <v-img :src="ima7" style="width: 100%"></v-img>
                                                </v-col>
                                            </v-row>
                                            <h2>Mantas para postoperatorio</h2>
                                            <v-img :src="ima8" style="width: 100%"></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <h3>
                                                La buena noticia: la hipotermia inadvertida se puede prevenir 
                                                fácilmente
                                            </h3>
                                            <br />
                                            <p>
                                                Los estudios muestran que la administración de calor al paciente
                                                en la fase perioperatoria para mantener una temperatura central
                                                de 36,0 *C o superior, ayuda a mejorar los resultados, ya que
                                                reduce la frecuencia de las complicaciones que a menudo están
                                                asociadas con la hipotermia inadvertida. El calentamiento con
                                                aire forzado ofrece un método seguro, simple y económico
                                                de prevenir la hipotermia inadvertida y sus complicaciones.
                                            </p>
                                            <br />
                                            <v-row>
                                                <v-col cols="6" sm="6" md="6">
                                                    <v-img :src="ima9" style="width: 100%"></v-img>
                                                </v-col>
                                                <v-col cols="6" sm="6" md="6">
                                                    <v-img :src="ima10" style="width: 100%"></v-img>
                                                </v-col>
                                                <v-col cols="6" sm="12" md="12">
                                                    <v-img :src="ima11" style="width: 100%"></v-img>
                                                </v-col>
                                                <v-col cols="6" sm="12" md="12">
                                                    <v-img :src="card.src" style="width: 100%"></v-img>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    
                                </div>
                                <div v-show="card.show7">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-container style="background-color: #F5F5F5">
                                                <h1 align="center">Mascarillas versus Respiradores</h1>
                                                <br />
                                                <v-table>
                                                    <tbody>
                                                    <tr
                                                        v-for="item in cards2"
                                                        :key="item.name"
                                                    >
                                                        <td style="background-color: #F5F5F5">{{ item.text1 }}</td>
                                                        <td style="background-color: #C3BADC" align="center">{{ item.text2 }}</td>
                                                        <td style="background-color: #F5F5F5">{{ item.text3 }}</td>
                                                    </tr>
                                                    </tbody>
                                                </v-table>
                                            </v-container>
                                            <br />
                                            <h2></h2>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <div align="center" class="d-flex d-sm-none justify-center">
                                                <div>
                                                    <v-img :src="card.src" style="width: 50vh" ></v-img>
                                                </div>
                                            </div>
                                            <h2>Aspectos Claves</h2>
                                            <v-list>
                                                <v-list-item v-for="item in items5" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                                <br />
                                                <h2>Composición del material</h2>
                                                <v-list-item v-for="item in items6" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <div align="center" class="d-none d-sm-flex justify-center">
                                                <div>
                                                    <v-img :src="card.src" style="width: 50vh" ></v-img>
                                                </div>
                                            </div>
                                            <br />
                                            <h2>Aprobaciones y Normas</h2>
                                            <v-list>
                                                <v-list-item v-for="item in items8" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <h2>País de origen</h2>
                                            <p>
                                                Hecho en los EE. UU. con materiales de
                                                abastecimiento global
                                            </p>
                                            <br />
                                            <h2>Debe usarse para:</h2>
                                            <v-list>
                                                <v-list-item v-for="item in items7" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                                
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-show="card.show8">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6" class="align-self-center d-flex d-sm-none">
                                            <v-img :src="card.src" style="width: 100%"></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <h2>Descripción</h2>
                                            <p>
                                                El respirador desechable 3M Aura 1870+ ha sido diseñado 
                                                especialmente para proteger contra material particulado a 
                                                los usuarios que laboran en el área de la salud. Está destinado 
                                                a reducir la exposición a ciertas partículas en el aire, incluyendo 
                                                las generadas por electrocauterización, cirugía con láser, entre 
                                                otros. Además, cumple con las directrices establecidas por el Centers 
                                                for Disease Control and Prevention (CDC) de Estados Unidos, para el 
                                                control de la exposición a Mycobacterium Tuberculosis.
                                            </p>
                                            <br />
                                            <p>
                                                Adicionalmente, este respirador ha sido aprobado por la FDA para ser 
                                                utilizado como una mascarilla quirúrgica, dado que resiste las salpicaduras 
                                                de fluidos, sangre y otros materiales infecciosos en forma de partículas o 
                                                presentes sobre partículas. Este respirador puede ser usado en quirófanos, 
                                                clínicas, centros de atención primaria, partos y nacimientos, laboratorios 
                                                clínicos, emergencias y/o planes de preparación pandémica, entre otros.
                                            </p>
                                            <br />
                                            <p>
                                                Su diseño único de tres paneles se ajusta a la mayoría de tamaños de cara y 
                                                formas de cabeza, permitiendo la estandarización de un solo respirador.
                                            </p>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" class="align-self-center d-none d-sm-flex">
                                            <v-img :src="card.src" style="width: 100%"></v-img>
                                        </v-col>
                                    </v-row>
                                    <br />
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <h2 align="center">Características</h2>
                                            <v-list>
                                                <v-list-item v-for="item in items3" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <h2 align="center">Certificaciones y Aprobaciones</h2>
                                            <br />
                                            <p>
                                                Este respirador ha sido Certificado por NIOSH (National
                                                Institute for Occupational Safety And Health) de Estados
                                                Unidos bajo la especificación N95 de la norma 42CFRS4.
                                            </p>
                                            <v-list>
                                                <v-list-item v-for="item in items4" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-show="card.show9">
                                    <v-row>
                                        <v-col>
                                            <h2>DESCRIPCIÓN:</h2>
                                            <p align="justify">
                                                Vendaje con unguento no medicado, estéril, que asegura que la 
                                                herida no sea afectada y ayuda a mantener un entorno húmedo que 
                                                contribuye a la cicatrización de la herida
                                            </p>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="6">
                                            <h2>CARACTERÍSTICAS:</h2>
                                            <br />
                                            <v-list>
                                                <v-list-item v-for="item in items2" :key="item.title">
                                                    <div class="d-flex flex-row ">
                                                        <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                        <p class="pl-8">{{ item.title }}</p>
                                                    </div>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-carousel show-arrows="hover" hide-delimiters>
                                                <v-carousel-item
                                                    :src="ima1"
                                                ></v-carousel-item>

                                                <v-carousel-item
                                                    :src="card.src"                                                    
                                                ></v-carousel-item>

                                                <v-carousel-item
                                                    :src="ima2"                                                    
                                                ></v-carousel-item>
                                            </v-carousel>
                                        </v-col>
                                    </v-row>

                                </div>
                            </v-card-text>
                            <v-divider></v-divider>
                            <br />
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                to="/#formulario"
                            >
                                MÁS INFORMACIÓN
                            </v-btn>
                            <br />
                        </v-card>
            </dibox>
        </div>
        <div v-for="card in cards1" :key="card.id">
            <dibox v-show="card.show" @close="hideDialog(card)">
                        <v-card>
                            <div class="d-flex justify-space-between">
                                <v-card-title class="d-flex justify-end">
                                    {{ card.title }}
                                </v-card-title>
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
                            <v-card-text align="justify" class="text-pre-wrap">
                                <v-row v-show="card.show1">
                                    <v-col cols="12" sm="6" md="6" align="center">
                                        <v-card rounded="lg" variant="outlined" color="blue" align="center" width="300">
                                            <h2 style="color: black">Medidas</h2>                                        
                                            <br />
                                            <p style="color: black">
                                                3" x 5 yardas
                                                <br />
                                                4" x 5 yardas
                                                <br />
                                                5"  x 5 yardas
                                                <br />
                                                6"  x 5 yardas
                                                <br />
                                                8"  x 5 yardas
                                                <br />
                                                10" x 5 yardas
                                                <br />
                                                12" x 5 yardas
                                            </p>
                                        </v-card>
                                        <br />
                                        <v-img :src="card.src" height="200px"></v-img>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6" >
                                        <v-list>
                                            <v-list-item v-for="item in items1" :key="item.title">
                                                <div class="d-flex flex-row ">
                                                    <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                    <p class="pl-8">{{ item.title }}</p>
                                                </div>
                                            </v-list-item>
                                        </v-list>
                                    </v-col>
                                </v-row>
                                <v-row v-show="card.show2">
                                    <v-col cols="12" sm="6" md="6" align="center">
                                        <v-img :src="card.src" height="200px"></v-img>
                                        <br />
                                        <v-card rounded="pill" style="background-color:red; color: white" align="center" width="200">
                                            <h2>Medidas</h2>
                                        </v-card>
                                        <br />
                                        <p>
                                            4" x 5 yardas
                                            <br />
                                            6" x 5 yardas
                                            <br />
                                            8" x 5 yardas
                                        </p>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6" >
                                        <v-list>
                                            <v-list-item v-for="item in items" :key="item.title">
                                                <div class="d-flex flex-row ">
                                                    <v-icon icon="mdi-circle" color="blue-darken-4" ></v-icon>
                                                    <p class="pl-8">{{ item.title }}</p>
                                                </div>
                                            </v-list-item>
                                        </v-list>
                                    </v-col>
                                </v-row>
                                <div v-show="card.show3">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <div style="background: linear-gradient(0.3turn, #101D64, rgba(10,146,176,0.81)); color: white;" align="center">
                                                <br />
                                                <h3>DESCRIPCIÓN DEL PRODUCTO</h3>
                                                <br />
                                            </div>
                                            <br />
                                            <p>
                                                El paquete de pruebas Bowie & Dick Comply™ 00135LF, consiste de una hoja
                                                con indicador químico sensible a la presencia del vapor, ubicada dentro de
                                                un paquete de pruebas construido de materiales porosos (hojas de papel),
                                                ubicados entre dos capas de material impermeable (parte superior e inferior).
                                                El paquete de pruebas se encuentra empacado en material no tejido
                                                descartable.
                                                <br />
                                                <br />
                                                Todos los indicadores químicos utilizados son libres de plomo.
                                                La hoja primaria de Bowie & Dick; permite detectar la presencia de bolsas
                                                de aire para determinar un adecuado vacío de aire. Cuando se remueve
                                                exitosamente el aire del interior de la cámara; cruz de San Andrés modificada,
                                                cambia; pasando de color amarillo a color marrón oscuro.
                                                Adicionalmente, el paquete de pruebas incluye una hoja de alerta temprana
                                                en la parte inferior del paquete. Esta hoja contiene un círculo amarillo en su
                                                centro, que cambia totalmente a marrón oscuro al ser evaluados equipos sin
                                                problemas.
                                                <br />
                                                <br />
                                                En el caso de equipos que evidencian una pérdida de la capacidad de remover
                                                aire, este círculo amarillo cambiara parcialmente o no cambiara de color;
                                                evidenciando que el equipo tiene una reducida capacidad de remover aire de
                                                la cámara. Esta indicación permite establecer que en un futuro cercano, el
                                                equipo debe ser sometido a inspección, mantención y/o reparación.
                                            </p>
                                            <br />
                                            <div style="background: linear-gradient(0.3turn, #101D64, rgba(10,146,176,0.81)); color: white;" align="center">
                                                <br />
                                                <h3>PROPUESTA DE VALOR</h3>
                                                <br />
                                            </div>
                                            <br />
                                            <p>
                                                Los paquetes de prueba Bowie & Dick Comply™ 00135 LF con hoja de
                                                alerta temprana permiten determinar la idoneidad de uso inmediato del
                                                equipo y simultáneamente, permiten entregar información predictiva del
                                                comportamiento futuro de los Esterilizadores de vapor con sistemas de pre
                                                vacío (Venturi o bomba de pre vacío)
                                                <br />
                                                <br />
                                                El uso de Paquetes de Prueba Bowie & Dick para monitorear la remoción
                                                de aire en esterilizadores a vapor, es parte fundamental de un adecuado
                                                monitoreo de la esterilidad de cargas y forma parte de un portafolio integral
                                                de soluciones para el monitoreo de la esterilidad de los productos.
                                            </p>
                                        </v-col>
                                        <v-col cols="12" sm>
                                            <div style="background: linear-gradient(0.3turn, #101D64, rgba(10,146,176,0.81)); color: white;" align="center">
                                                <br />
                                                <h3>CARACTERÍSTICAS, VENTAJAS Y BENEFICIOS</h3>
                                                <br />
                                            </div>
                                            <br />
                                            <h3 style="color: rgb(90,192,239)">Características:</h3>
                                            <p>
                                                El paquete de pruebas Bowie & Dick Comply™ 00135 LF; se encuentra
                                                construido de hojas de papel, una capa de espuma reticulada, capas de
                                                material impermeable, empacado en material desechable.
                                                Cuenta con indicadores químicos Tipo 1 de exposición en el exterior del
                                                producto y con hojas de prueba específicas para determinar la remoción de
                                                aire y fallas futuras (Indicador Químico Tipo 2).
                                            </p>
                                            <br />
                                            <h3 style="color: rgb(90,192,239)">Ventajas:</h3>
                                            <p>
                                                El monitoreo diario de los equipos esterilizadores de vapor con sistemas de
                                                pre vacío (Venturi o bomba de pre vacío) y la capacidad de remover aire,
                                                es fundamental en el funcionamiento de un equipo y del resultado de la
                                                esterilización. Los paquetes de prueba Bowie & Dick Comply™ 00135LF,
                                                permiten entregar el resultado de las pruebas de vacío y adicionalmente;
                                                proveer información predictiva de potenciales fallas futuras en el sistema de
                                                vacío.
                                            </p>
                                            <br />
                                            <h3 style="color: rgb(90,192,239)">Beneficios:</h3>
                                            <p>
                                                El uso de paquetes de prueba Bowie & Dick Comply™ 00135 con hoja de
                                                alerta temprana, permite detectar potenciales fallas futuras y de esta forma
                                                ayudarle a planificar la mantención necesaria del equipo con antelación.
                                                Esto le permite realizar una adecuada planificación de las cargas que debe
                                                entregar de acuerdo a la Tabla Quirúrgica de su Hospital.
                                                <br />
                                                <br />
                                                Los indicadores químicos utilizados son libres de plomo, lo que permite su
                                                uso seguro para sus operadores
                                            </p>
                                        </v-col>
                                        <v-col cols="12">
                                            <div style="background: linear-gradient(0.3turn, #101D64, rgba(10,146,176,0.81)); color: white;" align="center">
                                                <br />
                                                <br />
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <div style="background: linear-gradient(0.3turn, #101D64, rgba(10,146,176,0.81)); color: white;" align="center">
                                                <br />
                                                <h3>RECOMENDACIÓN</h3>
                                                <br />
                                            </div>
                                            <br />
                                            <h3 style="color: rgb(90,192,239)">Racional:</h3>
                                            <p>
                                                La esterilización por vapor requiere el contacto del agente esterilizante (vapor)
                                                con cada uno de los dispositivos o materiales a esterilizar, durante el tiempo
                                                de contacto establecido en función de la temperatura de esterilización (e.g. 4
                                                minutos @ 134ºC).
                                                <br />
                                                <br />
                                                La presencia de aire dentro de la cámara, evita que el vapor se encuentre en
                                                contacto con los dispositivos, reduciendo el tiempo de contacto y afectando
                                                la esterilidad del ciclo.
                                                <br />
                                                <br />
                                                La verificación de una adecuada remoción de aire es fundamental, toda
                                                vez que el aire caliente no cuenta con la misma capacidad de esterilizar
                                                dispositivos médicos al ser comparado con el vapor saturado
                                            </p>
                                            <br />
                                            <h3 style="color: rgb(90,192,239)">Frecuencia:</h3>
                                            <p>
                                                Las pruebas de Bowie & Dick deben ser realizadas diariamente, de acuerdo a
                                                recomendaciones AAMI, CSA, ISO y regulaciones locales; en todos los equipos
                                                esterilizadores por pre vacío.
                                            </p>
                                        </v-col>
                                        <v-col>
                                            <h3 style="color: rgb(90,192,239)">Estándares de referencia:</h3>
                                            <p>
                                                i. AAMI St79:2010, 2011 & 2012 10.7.6.1: la Prueba de Bowie & Dick debe
                                                ser realizada cada día que el esterilizador es utilizado, antes de una carga
                                                con material a esterilizar. Un Indicador químico tipo 2 debe ser utilizado para
                                                este proceso. Un ciclo reducido (ciclo sin fase de secado) deben ser realizado
                                                antes de realizar la prueba. Si el esterilizador se utiliza de manera continua, la
                                                prueba puede ser realizada a cualquier hora y debe ser realizada a la misma
                                                hora todos los días.
                                                <br />
                                                <br />
                                                ii. ISO 15882:2008 6.2. Indicadores tipo 2 “La penetración del vapor o prueba
                                                de remoción de aire debe ser realizada en una cámara vacía. Las instrucciones
                                                del fabricante deben ser seguidas durante el uso de este indicador”,
                                                <br />
                                                <br />
                                                iii. CSA Z314.3-14 “Esterilización por vapor efectiva en instituciones de
                                                salud”: 8.6.3.4.1: Para esterilizadores con sistemas de remoción dinámico de
                                                aire, la prueba de vacío se debe realizar diariamente. Se requiere suficiente
                                                vacío de aire para lograr penetración de vapor y que entre en contacto con la
                                                superficie de los dispositivos. La prueba de remoción de aire está definida en
                                                el estándar ISO 11140-5.
                                            </p>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-img :src="ima22"></v-img>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-show="card.show4">
                                    <v-row>
                                        <v-col>
                                            <p>
                                                Los Cartuchos de Gas de OE Steri-Gas™ de 3M™ son
                                                cartuchos de un solo uso, que contienen 100% óxido de
                                                etileno, para ser utilizados en los Esterilizadores Steri-Gas™
                                                de 3M™ (esterilizadores de óxido de etileno). Al ser utilizado
                                                en el Esterilizador Steri-Gas™ de 3M™ adecuado, el cartucho
                                                emite la cantidad de óxido de etileno predeterminada
                                                para cada ciclo de esterilización. Antes de iniciar un ciclo
                                                de esterilización, un operador asegura un cartucho en el
                                                puerto de cartuchos, ubicado en el interior de la cámara
                                                del esterilizador. Se coloca la carga dentro de la cámara del
                                                esterilizador; la puerta del esterilizador se cierra y se traba
                                                automáticamente una vez iniciado el ciclo de esterilización.
                                                Dentro de la cámara cerrada de esterilización, una vez
                                                alcanzados los parámetros condicionados, el cartucho es
                                                perforado en vacío y todo su contenido de óxido de etileno
                                                es esparcido dentro de la cámara de esterilización.
                                                <br />
                                                <br />
                                                Una vez completada la esterilización y la aireación, el
                                                cartucho usado puede ser reciclado o desechado con
                                                desechos no incinerables, de acuerdo a las políticas del
                                                establecimiento.
                                            </p>
                                            <br />
                                            <v-img :src="card.src" style="width: 100%"></v-img>
                                        </v-col>
                                        <v-col>
                                            <p>
                                                Los Cartuchos de Gas de OE Steri-Gas™ de 3M™ fueron
                                                desarrollados y diseñados teniendo en mente la seguridad de
                                                operadores y pacientes.
                                            </p>
                                            <p>
                                                • Los cartuchos sólo contienen pequeñas cantidades de
                                                óxido de etileno (peso neto nominal 100-170 grs)
                                                <br />
                                                <br />
                                                • Los cartuchos entregan la cantidad justa de OE para cada
                                                ciclo de esterilización. Los cartuchos son colocados dentro
                                                de la cámara de esterilización y perforados sólo una vez que
                                                la puerta de la cámara ha sido trabada, se haya producido
                                                vacío dentro de la cámara, y los parámetros del proceso
                                                hayan alcanzado los valores predeterminados.
                                                <br />
                                                <br />
                                                • Los cartuchos permiten un proceso de esterilización
                                                realizado totalmente en vacío. Si la integridad del sistema
                                                se ve comprometida durante la exposición al gas OE,
                                                entrará aire ambiental en la cámara. En este caso, el sistema
                                                detectará un alza de presión y cancelará el ciclo si el sistema
                                                no puede mantener el vacío. El sistema limpiará la cámara
                                                del esterilizador con aire ambiental y lo evacuará a través
                                                del sistema de ventilación del esterilizador
                                                <br />
                                                <br />
                                                • Los cartuchos no contienen clorofluorcarburo ni ningún
                                                otro diluyente prohibido e implicado en la destrucción de
                                                la capa de ozono.
                                                <br />
                                                <br />
                                                • Los cartuchos tienen un código de barra 2D escaneable,
                                                individualizado para cada cartucho. El código de barra 2D
                                                está encriptado con el número de catálogo de Cartuchos
                                                de Gas de OE Steri-Gas™ de 3M™ , código de lote (fecha
                                                de vencimiento) y peso nominal. El código de barra es
                                                único para cada cartucho, reduciendo el riesgo de que se
                                                use un cartucho equivocado en algún ciclo o esterilizador
                                                determinado.
                                                <br />
                                                <br />
                                                3M recomienda almacenar inventarios de más de 12
                                                cartuchos llenos, en un gabinete para líquidos inflamables,
                                                con ventilación hacia al exterior.
                                            </p>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <h3>
                                                Uso del Producto
                                            </h3>
                                            <p>
                                                Los Cartuchos de Gas de OE Steri-Gas™ de 3M™ son utilizados como esterilizantes
                                                en los Esterilizadores Steri-Vac™ de 3M, por personal capacitado en
                                                establecimientos de cuidado de la salud, ciencias de la vida, y otros lugares para
                                                la esterilización de productos y dispositivos médicos. Refiérase a la Tabla 1 para
                                                determinar el Cartucho de Gas de OE Steri-Gas™ de 3M™ adecuado para cada tipo
                                                de Esterilizador Steri-Vac™ de 3M™
                                            </p>
                                            <v-img :src="ima23" style="width: 100%"></v-img>
                                            <h3>Status Regulatorio </h3>
                                            <p>
                                                Siempre consulte los requerimientos regulatorios nacional, regional y local,
                                                antes de usar el número 75-21-B de la Chemical Abstract Society (CAS) para
                                                el óxido de etileno al 100%. A continuación se indican las clasificaciones/
                                                registros de los Cartuchos de Gas de OE Steri-Gas de 3M para varias
                                                regiones globales.
                                            </p>
                                            <p>
                                                • U.S. EPA Registro Number 7182-1
                                                <br />
                                                <br />
                                                • Salud Canada Número de Identificación de Drogas de Canadá (DIN)
                                                02154900
                                                <br />
                                                <br />
                                                • Unión Europea registro REACH en Unión Europea (EU) como accesorio
                                                a dispositivo médico; CE marcado como dispositivo médico Clase I 
                                                (noestéril, no-medible) con registro REACH de la Unión Europea.
                                                <br />
                                                <br />
                                                • Ministerio de Salud, Trabajo y Bienestar Japonés (MHLW)(Koselrodosho)
                                                clasificado y regulado como farmacéutico.
                                            </p>
                                        </v-col>
                                        <v-col>
                                            <h3>Concentraciones de Rendimiento y Aplicación</h3>
                                            <p>
                                                La concentración de gas en la cámara se basa en el peso neto normal
                                                de fabricación y el volumen interno de la cámara de la respectiva serie
                                                de esterilizador. La Tabla 2 proporciona cálculos de concentraciones de
                                                gas en una cámara vacía (mg/L) y el cálculo de los aumentos mínimos de
                                                presión (mBar y kPa) para temperaturas de proceso entre 34 - 60°C para
                                                cada modelo de Esterilizador Steri-Vac™
                                                de 3M™ . El aumento mínimo de
                                                presión calculado (mBar y kPa) es la presión mínima esperada basado en los
                                                siguientes parámetros:
                                                <br />
                                                <br />
                                                Alza estimada de presión a aproximadamente 70 segundos de iniciada la
                                                etapa de inyección de OE.
                                                <br />
                                                <br />
                                                Gama de temperaturas de proceso.
                                                <br />
                                                <br />
                                                Volumen interno de la cámara del respectivo esterilizador
                                            </p>
                                            <br />
                                            <v-img :src="ima24" style="width: 100%"></v-img>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <h3>Certificación de Pesos Netos por el Cliente</h3>
                                            <p>
                                                Los Cartuchos de Gas OE Steri-Gas™ de 3M™ están clasificados como Gas a Presión: Gas
                                                Licuado1 Dentro del cilindro, estos gases existen en un balance o equilibrio líquidovapor. 
                                                Inicialmente, el cilindro está casi lleno de líquido, y el gas llena el espacio sobre el
                                                líquido. A medida que el gas es liberado del cilindro, se evapora suficiente líquido para
                                                remplazarlo, manteniendo constante la presión dentro del cilindro. Los Cartuchos de
                                                Gas OE Steri-Gas™ de 3M™ son cilindros con gases licuados, y pueden emitir a niveles
                                                muy bajos; sin embargo, si son almacenados de acuerdo a las recomendaciones de 3M,
                                                cumplen o exceden los requerimientos de seguridad ocupacional. En su fabricación,
                                                los Cartuchos de Gas OE Steri-Gas™ de 3M™ son certificados y liberados con su peso
                                                nominal neto. En el establecimiento del cliente y durante su vida útil, los Cartuchos de
                                                Gas OE Steri-Gas™ de 3M™ están certificados en sus pesos netos, según se indica en la
                                                Tabla 3.
                                            </p>
                                            <v-img :src="ima25" style="width: 100%"></v-img>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card-text>
                            <v-divider></v-divider>
                            <br />
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                to="/#formulario"
                            >
                                MÁS INFORMACION
                            </v-btn>
                            <br />
                        </v-card>
                    </dibox>
        </div>
        <dibox scrollable v-show="model1" @close="hideDialog1()" v-if="activador">
                            <v-card>
                                <div class="d-flex justify-space-between">
                                    <v-card-title class="d-flex justify-end">
                                        LISTA DE PRODUCTOS
                                    </v-card-title>
                                    <v-card-actions class="d-flex justify-start">
                                        <v-btn
                                            style="color: rgb(203, 50, 52)"
                                            variant="text"
                                            @click="hideDialog1()"
                                        >
                                            <h1>X</h1>
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                                <v-divider></v-divider>
                                <v-card-text class="text-pre-wrap">
                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <p style="color: #083545">
                                            ESPARADRAPO HIPOALERGÉNICO DE TELA 2.5 cm X 9.1 m - CAJA X 12 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO HIPOALERGÉNICO DE PAPEL 2.5 cm X 9.1 m - CAJA X 12 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO ANTIALÉRGICO PLASTIFICADO 2.5 cm X 9.1 m - CAJA X 12 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO HIPOALERGÉNICO DE TELA 5 cm X 9.1 m - CAJA X 06 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO HIPOALERGÉNICO DE PAPEL 5 cm X 9.1 m - CAJA X 06 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO ANTIALÉRGICO PLASTIFICADO 5 cm X 9.1 m - CAJA X 06 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO HIPOALERGÉNICO DE TELA 7.5 cm X 9.1 m - CAJA X 04 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO HIPOALERGÉNICO DE PAPEL 7.5 cm X 9.1 m - CAJA X 04 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO ANTIALÉRGICO PLASTIFICADO 7.5 cm X 9.1 m - CAJA X 04 ROLLOS.
                                            <br />
                                            <br />
                                            ESPARADRAPO HIPOALERGÉNICO DE TELA - CAJA X 08 ROLLOS (04 rollos de 2.5 cm X 9.1 m y 04 rollos de 5 cm X 9.1 m).
                                            <br />
                                            <br />
                                            PROTECTOR CUTANEO HEXAMETILDISILOXANO+TERPOLIMERO ACRILATO+POLIFENILMETILSILOXANO AEROSOL 28 mL - FRASCO.
                                            <br />
                                            <br />
                                            PROTECTOR CUTANEO HEXAMETILDISILOXANO+TERPOLIMERO ACRILATO+POLIFENILMETILSILOXANO X 1 mL.
                                            <br />
                                            <br />
                                            APOSITO TRANSPARENTE ADHESIVO 4.4 cm X 4.4 cm - CAJA X 100 UND.
                                            <br />
                                            <br />
                                            APOSITO TRANSPARENTE ADHESIVO 6 cm X 7 cm - CAJA X 100 UND.
                                            <br />
                                            <br />
                                            APOSITO TRANSPARENTE ADHESIVO 10 cm X 12 cm - CAJA X 50 UND.	
                                            <br />
                                            <br />
                                            APOSITO TRANSPARENTE ADHESIVO 15 cm X 20 cm - CAJA X 10 UND.
                                            <br />
                                            <br />
                                            APÓSITO TRANSPARENTE CON GLUCONATO DE CLORHEXIDINA 7 cm X 8.5 cm - CAJA X 25 UND.
                                            <br />
                                            <br />
                                            APÓSITO TRANSPARENTE CON GLUCONATO DE CLORHEXIDINA 8.5 cm X 11.5 cm - CAJA X 25 UND. - CAJA X 25 SACHETS.
                                            <br />
                                            <br />
                                            APÓSITO TRANSPARENTE CON BORDE REFORZADO 3.8 cm X 4.5 cm - CAJA X 100 UND.
                                            <br />
                                            <br />
                                            APÓSITO TRANSPARENTE CON BORDE REFORZADO 7 cm X 8 cm - CAJA X 100 UND.
                                            <br />
                                            <br />
                                            APÓSITO TRANSPARENTE CON BORDE REFORZADO 5 cm X 5.7 cm - CAJA X 100 UND.
                                            <br />
                                            <br />
                                            APÓSITO TRANSPARENTE CON BORDE REFORZADO 6.5 cm X 7 cm - CAJA X 100 UND.
                                            <br />
                                            <br />
                                            APÓSITO TRANSPARENTE CON BORDE REFORZADO 8.5 cm X 11.5 cm - CAJA X 50 UND.
                                            <br />
                                            <br />
                                            APÓSITO TRANSPARENTE CON BORDE REFORZADO 10 cm X 12 cm - CAJA X 50 UND.
                                            <br />
                                            <br />
                                            MANTA TÉRMICA PARA CUERPO ENTERO 91 cm X 2.13 m APROX.
                                            <br />
                                            <br />
                                            MANTA TERMICA PEDIATRICA 91 cm X 1.52 m.
                                            <br />
                                            <br />
                                            MANTA TÉRMICA PARA EXTREMIDADES INFERIORES 91 cm X 1.52 m APROX.
                                            <br />
                                            <br />
                                            MANTA TERMICA PEDIATRICA 1.52 m X 81 cm.
                                            <br />
                                            <br />
                                            MANTA TERMICA PEDIATRICA 91 cm X 84 cm.
                                            <br />
                                            <br />
                                            MANTA TÉRMICA PARA EXTREMIDADES SUPERIORES 61 cm X 1.98 m
                                            <br />
                                            <br />
                                            MANTA TÉRMICA DE CUERPO ENTERO 91 cm X 2.21 m.
                                            <br />
                                            <br />
                                            RESPIRADOR QUIRURGICO TIPO N95.
                                        </p>
                                    </v-col>
                                </v-row>
                                </v-card-text>
                            </v-card>
        </dibox>
    </div>
</template>
<script>
import ima1 from "../assets/imagen38.png"
import ima2 from "../assets/imagen39.png"
import ima3 from "../assets/imagen40.png"
import ima4 from "../assets/imagen41.png"
import ima5 from "../assets/imagen42.png"
import ima6 from "../assets/imagen43.png"
import ima7 from "../assets/imagen77.png"
import ima8 from "../assets/imagen75.png"
import ima9 from "../assets/imagen78.png"
import ima10 from "../assets/imagen47.png"
import ima11 from "../assets/imagen48.png"
import ima12 from "../assets/imagen50.png"
import ima13 from "../assets/imagen51.png"
import ima14 from "../assets/imagen52.png"
import ima15 from "../assets/imagen53.png"
import ima16 from "../assets/imagen54.png"
import ima17 from "../assets/imagen55.png"
import ima18 from "../assets/imagen56.png"
import ima19 from "../assets/imagen57.png"
import ima20 from "../assets/imagen58.png"
import ima21 from "../assets/imagen59.png"
import ima22 from "../assets/imagen60.png"
import ima23 from "../assets/imagen61.png"
import ima24 from "../assets/imagen62.png"
import ima25 from "../assets/imagen63.png"
import ima26 from "../assets/imagen64.png"
import ima27 from "../assets/imagen65.png"
import ima28 from "../assets/imagen66.png"
import ima29 from "../assets/imagen67.png"
import ima30 from "../assets/imagen68.png"
import ima31 from "../assets/imagen69.png"
import ima32 from "../assets/imagen79.png"
import ima33 from "../assets/imagen80.jpg"
import ima34 from "../assets/imagen81.jpg"
import ima35 from "../assets/imagen82.jpg"
import ima36 from "../assets/imagen83.jpg"
export default {
    beforeMount(){
      this.activador = true
    },
          unmounted(){
    document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
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
        showDialog1() {
        this.scrollPosition = window.pageYOffset;
        this.model1 = true;
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
    },
        hideDialog1() {
        this.model1 = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
  },
    data() {
      return {
        activador: false,
        model1: false,
        ima1: ima12,
        ima2: ima13,
        ima3: ima14,
        ima4: ima15,
        ima5: ima16,
        ima6: ima17,
        ima7: ima18,
        ima8: ima19,
        ima9: ima20,
        ima10: ima21,
        ima11: ima22,
        ima12: ima23,
        ima13: ima24,
        ima14: ima25,
        ima15: ima26,
        ima16: ima27,
        ima17: ima28,
        ima18: ima29,
        ima19: ima30,
        ima20: ima31,
        ima21: ima32,
        ima22: ima33,
        ima23: ima34,
        ima24: ima35,
        ima25: ima36,
        items: [
        { title: "Fraguado extra rápido."},
        { title: "Vendaje de acabado liso, sin grumos."},
        { title: "Su textura permite una buena distribución."},
        { title: "Por su excelente capacidad de absorción no debe sumergirse mas de 5 segundos en el agua."},
        { title: "Excelente plasticidad. De facil manipulacion."},
        { title: "Yeso bien distribuido."},
        { title: "Acreditado con Certificados: \n - ISO 9001 \n - ISO 13485"}
        ],
        items1: [
            { title: "Para una adecuada protección en la zona afectada."},
            { title: "Por su adecuada elasticidad, le asegura un ajuste perfecto."},
            { title: "Fabricado bajo estrictas condiciones de higiene."},
            { title: "Color blanco uniforme."},
            { title: "Libre de defectos que afecten su apariencia."},
            { title: "Reusable, lavar a mano, larga vida."},
            { title: "Producto acreditado con Certificado ISO 900 - ISO 13485."}
        ],
        items2: [
            { title: "Únicamente de uso externo."},
            { title: "Contenido estéril mientras el envoltorio esté intacto."},
            { title: "Evita que el apósito se adhiera a la herida y es calmante del dolor."},
            { title: "Ayuda a mantener un ambiente húmedo de cicatrización, favoreciendo la granulación"},
            { title: "No se deshilacha, no deja partículas, ni fibras en el interior de laherida."},
            { title: "Permite que el exudado drene libremente hacia el apósito secundario absorbente."},
        ],
        items3: [
            { title: "No contiene componentes hechos de látex de caucho natural."},
            { title: "El medio filtrante patentado por 3M ha sido diseñado para entregar el mayor confort al momento de respirar."},
            { title: "Clip nasal ajustable ayuda a proporcionar un sello seguro ajustado a la medida de cada usuario"},
            { title: "Cuenta con una suave espuma nasal y materiales interiores lisos que se ajustan comodamente a la piel"},
            { title: "Innovadora pestaña en la barbilla facilita su posicionamiento, colocación y ajuste."},
            { title: "Compatible con una gran variedad de lentes"},
            { title: "El panel superior en relieve ayuda a reducir el empañamiento de los lentes y el panel de la nariz ayuda a mejorar el campo de visión."},
            { title: "Su diseño plegable permite un almacenamiento conveniente y facilita su portabilidad"},
            { title: "Empaque individual que ayuda a proteger el respirador de la contaminación antes de su uso"},
        ],
        items4: [
            { title: "Cumple con las directrices establecidas por el Centers for Disease Control and Prevention (CDC) de Estados Unidos. para el control de la exposición a Mycobacterium Tuberculosis"},
            { title: "Presenta una Eficacia de Filtración Bacteriana (BFE) superior al 99% según lo indicado en la norma ASTM F2101"},
            { title: "Presenta el mayor nivel de resistencia a los fluidos de acuerdo con la norma ASTM F 1862. a 160 mm Hg."},
        ],
        items5: [
            {title: "N95 con calificación aprobada por NIOSH Aprobado por la FDA para su uso como barbijo quirúrgico"},
            {title: "Resistente a los fluidos de 120 mmHg"},
            {title: "Clasificación de inflamabilidad Clase |"},
            {title: "Broche para la nariz ajustable"},
            {title: "Bandas para la cabeza trenzadas y grapadas"},

        ],
        items6: [
            {title: "Correas: polisopreno trenzado"},
            {title: "Grapas: acero"},
            {title: "Espuma nasal: espuma de poliuretano"},
            {title: "Filtro: polipropileno/ poliéster"},
            {title: "Armazón: polipropileno"},
            {title: "Tejido de cubierta: polipropileno"},
            {title: "No se fabrica con látex de goma natural"},
            {title: "Peso aproximado del producto: 0,40 oz"},

        ],
        items7: [
            {title: "Diseñado para ser usado por el personal del quirófano durante los procedimientos quirúrgicos para ayudar a proteger tanto al paciente quirúrgico como al personal del quirófano contra la transferencia de microorganismos, fluidos corporales y material particulado."},
            {title: "Siempre siga las /nstrucciones de uso y utilícelo de la manera indicada"},
        ],
        items8: [
            {title: "Respirador N95 aprobado por NIOSH"},
            {title: "Cumple con los requisitos N95 del CFR 84, NIOSH 42, respecto a tener una eficiencia de filtración mínima del 95 % contra aerosoles sólidos y líquidos que no contienen aceite."},
            {title: "Número de aprobación del NIOSH: TC-84A-0006"},
            {title: "Aprobado por la FDA para su uso como barbijo quirúrgico"},
            {title: "Dispositivo médico de Clase | de Health Canada"},
            {title: "Eficiencia de la filtración bacteriana F2101 >99 % BFE (eficacia de filtración bacteriana)"},
            {title: "Factor de protección asignado (APF 10) por la OSHA de los EE. UU. y la CSA de Canadá"},
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
        items15: [
            {title: "Seguridad"},
            {title: "Comodidad"},
            {title: "Estética"},
            {title: "Versatilidad"},
            {title: "Conveniencia"},
            {title: "Complacencia"},
        ],
        items16: [
            {title: "Permite el normal funcionamiento e intercambio gaseoso de la piel."},
            {title: "Evita la maceración y el compromiso de la integridad de la piel. No es oclusivo."},
            {title: "Altamente resistente a la tensión."},
            {title: "Permite la fijación y sujeción de dispositivos de gran volumen y peso. Ideal cuando se requiere estabilizar tubos críticos, apósitos voluminosos o inmovilizar."},
            {title: "Permite un corte bi-direccional: tanto en forma longitudinal como transversal sinnecesidad de usar tijeras u otros dispositivos de cortes"},
            {title: "Elegante apariencia profesional y agradable textura"},
            {title: "Buena resistencia a la penetración del agua o la humedad"},
        ],
        items17: [
            {title: "Seguridad"},
            {title: "Comodidad"},
            {title: "Protección"},
            {title: "Versatilidad"},
            {title: "Estética"},
            {title: "Complacencia"},
        ],
        cards: [
            {
                id: 1, 
                flex: 4, 
                flex1: 4, 
                title: "APÓSITO TRANSPARENTE TEGADERM", 
                info: "El único apósito transparente que se ha comprobado que reduce CRBSI", 
                show1: true,
                show: false, 
                src: ima1, 
            },
            {
                id: 2, 
                flex: 4, 
                flex1: 4, 
                title: "CINTA QUIRÚRGICA DE GÉNERO TIPO SEDA", 
                info: "Cinta quirúrgica tipo seda de tafetán tejido, libre de latex e hipoalergénica", 
                show: false, 
                show2: true,
                src: ima2,
            },
            {
                id: 3, 
                flex: 4, 
                flex1: 4, 
                title: "CINTA QUIRÚRGICA DE PLÁSTICO MACROPERFORADA", 
                info: "Cinta quirúrgica de polietileno de baja densidad, transparente, macroperforada", 
                show: false,
                show3: true,
                src: ima3,
            },
            {
                id: 4, 
                flex: 4, 
                flex1: 4, 
                title: "CINTA QUIRÚRGICA DE PAPEL MICROPOROSA", 
                info: "Cinta quirúrgica de rayón no tejida, microporosa, libre de latex e hipoalergénica", 
                show: false, 
                show4: true,
                src: ima4 
            },
            {
                id: 5, 
                flex: 4, 
                flex1: 4, 
                title: "CAVILON PELÍCULA PROTECTORA SIN ARDOR", 
                info: "Es una versátil solución para ayudar a prevenir el daño de la piel antes que suceda", 
                show: false, 
                show5: true,
                src: ima5
            },
            {
                id: 6, 
                flex: 4, 
                flex1: 4, 
                title: "BAIR HUGGER MANTAS 3M", 
                info: "Los pacientes anestesiados no pueden regular su temperatura", 
                show: false, 
                show6: true,
                src: ima6, 
            },
            {
                id: 7, 
                flex: 4, 
                flex1: 4, 
                title: "RESPIRADOR QUIRÚRGICO 1860", 
                info: "n95 con calificación aprobada por NIOSH", 
                show: false, 
                show7: true,
                src: ima7
            },
            {
                id: 8, 
                flex: 4, 
                flex1: 4, 
                title: "RESPIRADOR QUIRÚRGICO AURA", 
                info: "Esto ha sido diseñado especialmente para proteger contra material particular", 
                show: false,
                show8: true,
                src: ima8,
            },
            {
                id: 9, 
                flex: 4, 
                flex1: 4, 
                title: "GASA ESTÉRIL PARAFINADA", 
                info: "Vendaje con ungüento no medicado, estéril", 
                show: false, 
                show9: true,
                src: ima9
            },
        ],
        cards1: [
            {
                id: 1, 
                flex: 4, 
                flex1: 4, 
                title: "VENDAS ELASTICAS GALENO", 
                info: "En diferentes tamaños", 
                show: false, 
                show1: true,
                src: ima10,
            },
            {
                id: 2, 
                flex: 4, 
                flex1: 4, 
                title: "VENDAS DE YESO (YESTEL)", 
                info: "En diferentes tamaños", 
                show: false, 
                show2: true,
                src: ima11,
            },
            {
                id: 3, 
                flex: 4, 
                flex1: 4, 
                title: "PAQUETE DE PRUEBAS BOWIE & DickTM 00135 LF", 
                info: "más info", 
                show: false, 
                show3: true,
                src: ima32,
            },
            {
                id: 4, 
                flex: 4, 
                flex1: 4, 
                title: "CARTUCHOS DE GAS DE OE STERI-GAS", 
                info: "más info", 
                show: false, 
                show4: true,
                src: ima9,
            },
        ],
        cards2: [
          {
            text1: "Ayudan a evitar que las partículas grandes expulsadas por el usuario (por ejemplo, saliva, mucosa) lleguen al paciente.",
            text2: "Uso previsto",
            text3: "Ayudan a reducir la exposición del usuario a determinadas partículas suspendidas en el aire.",
          },
          {
            text1: "Con frecuencia quedan sueltas sobre la cara, dejando espacios entre la mascarilla y el usuario. No requieren prueba de ajuste",
            text2: "Ajuste",
            text3: "Diseñados para ajustarse en forma ceñida a la cara, creando un sello entre la cara y el respirador. Requieren prueba de ajuste antes de su uso.",
          },
          {
            text1: "Ayudan a proteger el campo quirúrgico estéril de la contaminación de partículas exhaladas. Además, las mascarillas quirúrgicas resistentes a líquidos ayudan a reducir la exposición del usuario a la sangre y los líquidos corporales",
            text2: "Aplicación/Uso",
            text3: "Diseñados para ayudar a reducir la exposición del usuario a determinadas partículas suspendidas en el aire, entre otras las generadas por electrocauterización, cirugía láser y otros instrumentos médicos electricos. Los respiradores N95 definidos por las pautas CDC se pueden usar para el control de la exposición a Mycobacterium tuberculosis.",
          },
          {
            text1: "Aprobadas para la venta por la Agencia de medicamentos y alimentos (FDA).",
            text2: "Aprobación",
            text3: "Aprobados y certificados por el NIOSH. Aprobados por la FDA para usar como mascarillas quirúrgicas.",
          },
          {
            text1: "Pruebas de eficacia de filtración de partículas (PFE), eficacia de filtración de bacterias (BFE), resistencia a líquidos, presión diferencial e inflamabilidad.",
            text2: "Pruebas",
            text3: "Deben cumplir con los estrictos criterios de prueba definidos en el apartado 84 de la norma CFR 42; además de pruebas de resistencia a líquidos e inflamabilidad. Además se deben realizar las pruebas de PFE, BFE y presión diferencial.",
          },
        ],
      };},
};
</script>
<style scoped>
#background {
  background: url("../assets/imagen36.png");
  background-position: 50% 65%;
  background-repeat: no-repeat;
  background-size: cover;
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
