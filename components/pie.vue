<template>
    <div style="background: #E3EEFF">
        <v-container>
            <v-row>
                <v-col cols="6">
                    <div>
                        <nuxtLink to="/" class="link">
                            HOME
                        </nuxtLink>
                    </div>
                    <br />
                    <div>
                        <nuxtLink to="/nosotros" class="link">
                            NOSOTROS
                        </nuxtLink>
                    </div>
                    <br />
                    <div>
                        <nuxtLink to="/productos" class="link">
                            PRODUCTOS
                        </nuxtLink>
                    </div>
                    <br />
                    <div>
                        <nuxtLink to="/eventos" class="link">
                            EVENTOS
                        </nuxtLink>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <v-img
                            
                            height="150px"
                            src="/imag/imagen35-.png"
                        ></v-img>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.link { 
    text-decoration: none;
    color: #0B6D7A;
    }
</style>
