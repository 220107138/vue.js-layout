<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <aside>
        <div class="head">
            <img src="./assets/logo.png" width="45px" height="45px">
            <div class="right">
                <h1>fillow.</h1>
                <p>Saas Admin Dashboard</p>
            </div>
        </div>
        <slot name="head"></slot>
        <nav>
            <h2>Main Menu</h2>
            <router-link to="/">
                <button @click="select" class="selected">
                    <svg fill="#777" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="home-alt-3" class="icon glyph" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.71,10.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v6a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,10.29Z"></path></g></svg>
                    Dashboard
                </button>
            </router-link>
            <router-link to="/project">
                <button @click="select">
                    <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#777" class="bi bi-lightning-fill" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"></path> </g></svg>
                    Project
                    <v-tag :defaultStyles="{position: 'absolute', left: '130px', padding: '4px 8px', color: 'white', fontSize: '11px', fontWeight: '700', borderRadius: '20px', background: '#09bc3c', boxShadow: '0 0 5px #09bc3c'}">
                        67
                    </v-tag>
                </button>
            </router-link>
            <router-link to="/contacts">
                <button @click="select">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#777"></path> </g></svg>
                    Contacts
                </button>
            </router-link>
            <router-link to="/404">
                <button @click="select">
                    <svg fill="#777" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m0 0v10.719h10.719v-10.719zm13.279 0v10.719h10.719v-10.719zm-13.279 13.281v10.719h10.719v-10.719zm13.279 0v10.719h10.719v-10.719z"></path></g></svg>
                    Kanban
                </button>
            </router-link>
            <router-link to="/404">
                <button @click="select">
                    <svg fill="#777" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6,13H2c-0.6,0-1,0.4-1,1c0,0,0,0,0,0v8c0,0.6,0.4,1,1,1c0,0,0,0,0,0h4c0.6,0,1-0.4,1-1c0,0,0,0,0,0v-8C7,13.4,6.6,13,6,13C6,13,6,13,6,13z M22,9h-4c-0.6,0-1,0.4-1,1c0,0,0,0,0,0v12c0,0.6,0.4,1,1,1c0,0,0,0,0,0h4c0.6,0,1-0.4,1-1c0,0,0,0,0,0V10C23,9.4,22.6,9,22,9C22,9,22,9,22,9z M14,1h-4C9.4,1,9,1.4,9,2c0,0,0,0,0,0v20c0,0.6,0.4,1,1,1c0,0,0,0,0,0h4c0.6,0,1-0.4,1-1c0,0,0,0,0,0V2C15,1.4,14.6,1,14,1C14,1,14,1,14,1z"></path></g></svg>
                    Analytics
                    <v-tag :defaultStyles="{position: 'absolute', left: '150px', padding: '4px 8px', color: 'white', fontSize: '11px', fontWeight: '700', borderRadius: '20px', background: '#ffcd66', boxShadow: '0 0 5px #ffsd66'}">
                        12
                    </v-tag>
                </button>
            </router-link>
            <router-link to="/404">
                <button @click="select">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 14V12C22 11.161 22 10.4153 21.9871 9.75H2.0129C2 10.4153 2 11.161 2 12V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z" fill="#777"></path> <path d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z" fill="#777"></path> </g></svg>
                    Calendar
                </button>
            </router-link>
            <router-link to="/404">
                <button @click="select">
                    <svg fill="#777" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-6 11H7v-2h7v2zm3-4H7V7h10v2z"></path></g></svg>
                    Messages
                </button>
            </router-link>
        </nav>

        <v-avatar
            src="src/components/assets/me.webp"
            :size="'40px'"
            :containerStyles="{width: '80%', margin: '15px 0', alignSelf: 'center'}"
            :imgStyles="{padding: '2px', border: '3px solid #d4aafb'}"
        >
            <template v-slot:head>Levi Siregar</template>
            <template v-slot:foot>leviregar@mail.com</template>
        </v-avatar>
        <img src="./assets/progress.png" width="80%" style="margin: 0 auto;">
        
        <v-avatar
            :containerStyles="{width: '80%', margin: '100px 0', alignSelf: 'center'}"
            :headStyles="{fontWeight: '500'}"    
        >
            <template v-slot:head>Follow Saas Admin</template>
            <template v-slot:foot>(c)2020 All Rights Reserved<br><br>Made with 🤕 by Medat</template>
        </v-avatar>
    </aside>
</template>

<script>
    import vTag from './Tag.vue'
    import vAvatar from './Avatar.vue';

    export default {
        components: {
            vTag,
            vAvatar
        },

        methods: {
            select(event) {
                document.querySelectorAll('button.selected').forEach(btn => btn.classList.remove('selected'));
                event.target.classList.add('selected');
            }
        }
    }
</script>

<style scoped>
    aside {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-y: scroll;
        width: 275px;
        height: calc(100vh - 16px);
        border-right: 0.5px solid #dedede;
        background-color: white;
    }
    aside::-webkit-scrollbar {
        display: none;
    }

    div.head {
        display: flex;
        align-items: center;
        align-self: center;
        gap: 20px;
        margin: 20px 0;
    }

    div.head div.right h1, div.head div.right p {
        margin: 0;
    }

    div.head div.right h1 {
        font-size: 28px;
        color: #4f3f6b;
    }

    div.head div.right p {
        font-size: 11px;
        color: #999;
    }

    div.head, nav {
        font-family: 'Poppins', sans-serif;
    }

    nav h2 {
        color: #ccc;
        font-size: 14px;
        margin: 10px 50px;
    }

    button {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 20px;
        position: relative;
        width: 90%;
        padding: 15px 40px;
        margin: 6px 0;
        color: #777;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        border-radius: 0 15px 60px 0;
        background-color: transparent;
    }

    button.selected {
        color: #886cbf;
        background-color: #f1e9fe;
    }
    button.selected::after {
        content: '';
        position: absolute;
        left: 0;
        width: 10px;
        height: 100%;
        border-radius: 0 7.5px 7.5px 0;
        background-color: #886cbf;
    }
</style>