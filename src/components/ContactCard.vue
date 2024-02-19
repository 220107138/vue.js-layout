<template>
    <v-card
        :defaultStyles="{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0', padding: '20px 30px'}"
    >
        <v-icon-button
            :buttonStyles="{position: 'absolute', top: '0', right: '0'}"
        >
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="1.5" fill="#000"></circle> <circle cx="12" cy="12" r="1.5" fill="#000"></circle> <circle cx="12" cy="18" r="1.5" fill="#000"></circle> </g></svg>
        </v-icon-button>
        <img :src="src" width="100px" height="100px">
        <h3>{{ name }}</h3>
        <p>{{ from }}</p>
        <span class="row">
            <v-icon-button
                :buttonStyles="{background: '#f1e7ff', padding: '10px', borderRadius: '50%'}"
            >
                <svg width="25px" height="25px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>call [#846cb9]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#846cb9"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596" id="call-[#846cb9]"> </path> </g> </g> </g> </g></svg>
            </v-icon-button>
            <v-icon-button
                :buttonStyles="{background: '#f1e7ff', padding: '10px', borderRadius: '50%'}"
            >
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 6.75C21.5188 6.75 22.75 5.51878 22.75 4C22.75 2.48122 21.5188 1.25 20 1.25C18.4812 1.25 17.25 2.48122 17.25 4C17.25 5.51878 18.4812 6.75 20 6.75Z" fill="#846cb9"></path> <path d="M19.04 8.15C17.47 7.81 16.19 6.53 15.85 4.96C15.72 4.35 15.71 3.76 15.82 3.2C15.95 2.58 15.49 2 14.85 2H7C4.24 2 2 4.24 2 7V13.95C2 16.71 4.24 18.95 7 18.95H8.5C8.78 18.95 9.14 19.13 9.3 19.35L10.8 21.34C11.46 22.22 12.54 22.22 13.2 21.34L14.7 19.35C14.89 19.1 15.18 18.95 15.5 18.95H17.01C19.77 18.95 22 16.72 22 13.96V9.15C22 8.52 21.42 8.06 20.8 8.18C20.24 8.28 19.65 8.28 19.04 8.15ZM8 12C7.44 12 7 11.55 7 11C7 10.45 7.44 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12ZM12 12C11.44 12 11 11.55 11 11C11 10.45 11.44 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12ZM16 12C15.44 12 15 11.55 15 11C15 10.45 15.44 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z" fill="#846cb9"></path> </g></svg>
            </v-icon-button>
            <v-icon-button
                :buttonStyles="{background: '#f1e7ff', padding: '10px', borderRadius: '50%'}"
            >
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C3.79086 4 2 5.79086 2 8V16C2 18.2091 3.79086 20 6 20H13C15.2091 20 17 18.2091 17 16V15.7454L18.6621 17.2412C19.9491 18.3996 22 17.4862 22 15.7547V8.24538C22 6.51384 19.9491 5.60045 18.6621 6.75879L17 8.25466V8C17 5.79086 15.2091 4 13 4H6Z" fill="#846cb9"></path> </g></svg>
            </v-icon-button>
        </span>
    </v-card>
</template>

<script>
    import vCard from './Card.vue'
    import vIconButton from './IconButton.vue'

    export default {
        components: {
            vCard,
            vIconButton
        },
        props: {
            src: String,
            name: String,
            from: String
        }
    }
</script>

<style scoped>
    .row {
        display: flex;
        margin: 10px;
    }

    h3 {
        font-size: 15px;
        color: black;
        margin: 0;
    }
    p {
        font-size: 12px;
        color: #777;
        margin: 0;
    }

    img {
        border-radius: 50%;
        margin: 10px;
    }
</style>