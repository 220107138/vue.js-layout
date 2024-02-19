<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
 
    <v-card
        :defaultStyles="{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: 'calc(100% - 60px)', padding: '20px 10px'}"
    >
        <span class="column">
            <p class="code">{{ code }}</p>
            <h3>{{ title }}</h3>
            <p>
                <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 14V12C22 11.161 22 10.4153 21.9871 9.75H2.0129C2 10.4153 2 11.161 2 12V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z" fill="#777"></path> <path d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z" fill="#777"></path> </g></svg>
                Created on {{ date }}
            </p>
        </span>

        <v-avatar :src="clientAvatar" size="50px" :headStyles="infoHeadStyle" :footStyles="infoFootStyle">
            <template v-slot:head>Client</template>
            <template v-slot:foot>{{ clientName }}</template>
        </v-avatar>

        <v-avatar :src="chargerAvatar" size="50px" :headStyles="infoHeadStyle" :footStyles="infoFootStyle">
            <template v-slot:head>Person in charge</template>
            <template v-slot:foot>{{ chargerName }}</template>
        </v-avatar>

        <v-avatar src="src/components/assets/deadline.png" size="50px" :headStyles="infoHeadStyle" :footStyles="infoFootStyle">
            <template v-slot:head>Deadline</template>
            <template v-slot:foot>{{ day }}, {{ deadlineDate }}</template>
        </v-avatar>

        <v-tag :defaultStyles="{padding: '10px', color: tagColor, background: tagBackground}">
            {{ tagTitle }}
        </v-tag>
    </v-card>
</template>

<script>
    import vAvatar from './Avatar.vue'
    import vCard from './Card.vue'
    import vTag from './Tag.vue'

    export default {
        components: {
            vCard,
            vAvatar,
            vTag
        },

        data() {
            return {
                infoHeadStyle: {fontSize: '12px', fontWeight: '400', color: '#777'},
                infoFootStyle: {fontSize: '13px', fontWeight: '500', color: 'black'},
            };
        },

        props: {
            code: String,
            title: String,
            date: String,
            clientAvatar: String,
            clientName: String,
            chargerAvatar: String,
            chargerName: String,
            day: String,
            deadlineDate: String,
            tagTitle: String,
            tagColor: String,
            tagBackground: String
        }
    }
</script>

<style scoped>
    .column {
        display: flex;
        flex-direction: column;
    }
    h3, p {
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    h3 {
        font-size: 15px;
        font-weight: 500;
    }
    p {
        display: flex;
        align-items: center;
        font-size: 12px;
        gap: 10px;
        color: #777;
    }
    p.code {
        color: #8465be;
    }
</style>