<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <div class="container">
        <v-contact-card v-for="contact in contacts" :key="contact.name"
            :src="contact.src"
            :name="contact.name"
            :from="contact.from"
        />
    </div>
</template>

<script>
    import vContactCard from '../ContactCard.vue'

    export default {
        data() {
            return {
                contacts: [
                    {
                        src: 'src/components/assets/avatar-1.png',
                        name: 'Jakob Gouse',
                        from: 'Highspeed Inc.'
                    },{
                        src: 'src/components/assets/avatar-2.png',
                        name: 'Gretchen Aminoff',
                        from: 'Redblue '
                    },{
                        src: 'src/components/assets/avatar-3.png',
                        name: 'Davis Siphron',
                        from: 'Beep Beep Inc'
                    },{
                        src: 'src/components/assets/avatar-4.png',
                        name: 'Zaire Lubin',
                        from: 'Highspeed Inc'
                    },{
                        src: 'src/components/assets/avatar-5.png',
                        name: 'Miracle Rosser',
                        from: 'Zero Two Studios'
                    },{
                        src: 'src/components/assets/avatar-6.png',
                        name: 'Ann Baptista',
                        from: 'Zero Two Studios'
                    },{
                        src: 'src/components/assets/avatar-7.png',
                        name: 'Charlie Dokidis',
                        from: 'Maximize Tearn Management'
                    },{
                        src: 'src/components/assets/avatar-8.png',
                        name: 'Carla Levin',
                        from: 'Zero Two Studios'
                    },{
                        src: 'src/components/assets/avatar-9.png',
                        name: 'Cooper Curtis',
                        from: 'UI Designer'
                    },{
                        src: 'src/components/assets/avatar-10.png',
                        name: 'Maria Dorwart',
                        from: 'UI Designer'
                    },{
                        src: 'src/components/assets/avatar-4.png',
                        name: 'Lydia Westervelt',
                        from: 'UI Designer'
                    },{
                        src: 'src/components/assets/avatar-8.png',
                        name: 'Kadin Schleifer',
                        from: 'UI Designer'
                    },
                ]
            };
        },
        components: {
            vContactCard
        }
    }
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        padding: 20px;
        height: calc(100% - 90px);
        box-sizing: border-box;
        overflow-y: scroll;
    }
</style>