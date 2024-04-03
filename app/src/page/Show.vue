<template>
    <div>
        <div class="nav-back">
            <a href="/ingatlan/lista"><< Ingatlan lista</a>
        </div>

        <v-container v-if="data">
            <v-row>
                <v-col
                    cols="12"
                >
                    <v-card>
                        <v-card-title>
                            <v-img
                                    :height="400"
                                    aspect-ratio="16/9"
                                    cover
                                    :src="data.images.image[0]"
                            ></v-img>
                        </v-card-title>

                        <v-card-text>
                            <v-row no-gutters>
                                <v-col>
                                    <div>#{{ data.external_id }}</div>
                                    <div>{{ data.user_name }}</div>
                                    <div>Tel: {{ data.user_phone }}</div>
                                </v-col>
                                <v-col>
                                    <div>Irányítószám: {{ data.postal_code }}</div>
                                    <div>{{ data.settlement }}</div>
                                    <div>{{ data.street }}</div>
                                    <div>Épület: {{ data.building }}</div>
                                    <div>Típus: {{ data.type }}</div>
                                    <div>Állapot: {{ data.state }}</div>
                                </v-col>
                                <v-col>
                                    <div>Méret: {{ data.size }}m<sup>2</sup></div>
                                    <div>Szobák: {{ data.rooms }} db</div>
                                    <div>Ár: {{ $formatter.formatNumber(data.price) }} Ft</div>
                                    <div>Közművek: {{ data.utilities }}</div>
                                    <div>Fűtés: {{ data.heating }}</div>
                                </v-col>
                            </v-row>

                            <v-row no-gutters class="mt-6">
                                <v-col>
                                    {{ data.description }}
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        components: {
        },

        data: () => ({
            data: null
        }),

        computed : {
        },

        methods: {
        },

        mounted () {
            console.log('Show.vue - mounted', this.$route.params.id);

            this.$rockApi.get('/ingatlan/adatlap/' + this.$route.params.id).then(data => {
                console.log('/ingatlan/adatlap' + this.$route.params.id, data);

                this.data = data;
                this.$emit('updateTitle', 'Rockhome ingatlan adatlap #' + this.$route.params.id);
            });
        }
    };
</script>