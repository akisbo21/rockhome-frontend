<template>
    <v-container>
        <v-row>
            <v-col
                    v-for="item in items"
                    :key="item.external_id"
                    cols="4"
            >
                <v-card height="300"
                        :href="'/ingatlan/adatlap/' + item.external_id"
                >
                    <v-card-title>
                        <div>{{ item.settlement }}</div>
                        <div>#{{ item.external_id }}</div>
                    </v-card-title>

                    <v-card-text>
                        <v-img
                                :height="200"
                                aspect-ratio="16/9"
                                cover
                                :src="item.images.image[0]"
                        ></v-img>

                        <div class="mt-1 text-right"><b>{{ $formatter.formatNumber(item.price) }} Ft</b></div>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        components: {
        },

        data: () => ({
            totalCount: 0,
            items: []
        }),

        computed : {
        },

        methods: {
        },

        mounted () {
            console.log('List.vue - mounted');

            this.$rockApi.get('/ingatlan/lista').then(data => {
                console.log('/ingatlan/lista', data);

                this.items = data.items;
                this.totalCount = data.totalCount

            });

            this.$emit('updateTitle', 'Rockhome ingatlan lista');
        }
    };
</script>
