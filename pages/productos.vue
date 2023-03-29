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
        hideDialog1(card) {
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
