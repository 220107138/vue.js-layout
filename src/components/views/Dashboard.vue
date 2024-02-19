<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <div class="container row">
        <div class="left column">
            <v-card
                :defaultStyles="{display: 'flex', width: 'calc(100% - 80px)', margin: '20px', backgroundImage: 'linear-gradient(#886cbf, #aa6cc1)'}"
            >
                <span class="column" style="color: white;">
                    <h2>Manage your project<br>in one touch</h2>
                    <p>Let Fillow manage your project<br>automaticlly with our best AI<br>systems</p>
                    <v-button
                        :defaultStyles="{width: 'max-content', padding: '10px 25px', borderRadius: '25px', color: '#303337', fontSize: '12.5px', fontWeight: '600', background: 'white'}"
                    >
                        Try Free Now
                    </v-button>
                </span>
                <img src="../assets/mockup.png" width="200px" height="200px">
            </v-card>

            <v-card
                :defaultStyles="{display: 'flex', flexDirection: 'column', width: 'calc(100% - 80px)', margin: '20px'}"
            >
                <span class="center">
                    <h3>Project Statistics</h3>
                </span>
                <img src="../assets/chart-1.png" width="490px">
                <span class="center" style="gap: 10px;">
                    <p>Number</p><v-switch :checked="true"/><p>Analytics</p><v-switch/>
                </span>
            </v-card>

            <v-card
                :defaultStyles="{display: 'flex', flexDirection: 'column', width: 'calc(100% - 80px)', margin: '20px'}"
            >
                <span class="center" style="justify-content: space-between;">
                    <h3>Completion Project Rate</h3>
                    <v-icon-button>
                        <svg fill="#777" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.15 28.012v-0.85c0.019-0.069 0.050-0.131 0.063-0.2 0.275-1.788 1.762-3.2 3.506-3.319 1.95-0.137 3.6 0.975 4.137 2.787 0.069 0.238 0.119 0.488 0.181 0.731v0.85c-0.019 0.056-0.050 0.106-0.056 0.169-0.269 1.65-1.456 2.906-3.081 3.262-0.125 0.025-0.25 0.063-0.375 0.094h-0.85c-0.056-0.019-0.113-0.050-0.169-0.056-1.625-0.262-2.862-1.419-3.237-3.025-0.037-0.156-0.081-0.3-0.119-0.444zM20.038 3.988l-0 0.85c-0.019 0.069-0.050 0.131-0.056 0.2-0.281 1.8-1.775 3.206-3.538 3.319-1.944 0.125-3.588-1-4.119-2.819-0.069-0.231-0.119-0.469-0.175-0.7v-0.85c0.019-0.056 0.050-0.106 0.063-0.162 0.3-1.625 1.244-2.688 2.819-3.194 0.206-0.069 0.425-0.106 0.637-0.162h0.85c0.056 0.019 0.113 0.050 0.169 0.056 1.631 0.269 2.863 1.419 3.238 3.025 0.038 0.15 0.075 0.294 0.113 0.437zM20.037 15.575v0.85c-0.019 0.069-0.050 0.131-0.063 0.2-0.281 1.794-1.831 3.238-3.581 3.313-1.969 0.087-3.637-1.1-4.106-2.931-0.050-0.194-0.094-0.387-0.137-0.581v-0.85c0.019-0.069 0.050-0.131 0.063-0.2 0.275-1.794 1.831-3.238 3.581-3.319 1.969-0.094 3.637 1.1 4.106 2.931 0.050 0.2 0.094 0.394 0.137 0.588z"></path> </g></svg>
                    </v-icon-button>
                </span>
                <img src="../assets/chart-2.png" width="490px">
            </v-card>

        </div>

        <div class="right column">
            <div class="row">
                <v-card
                    :defaultStyles="{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 'calc(50% - 80px)', margin: '20px', padding: 'px 20px'}"
                >
                    <span class="column" style="width: max-content;">
                        <h3>Total Clients</h3>
                        <span class="row" style="gap: 20px;">
                            <h2 class="lbl">68</h2>
                            <img src="../assets/chart-3.png" width="30px" height="30px">
                        </span>
                    </span>
                    <img src="../assets/chart-4.png" height="70px">
                </v-card>
                <v-card
                    :defaultStyles="{display: 'flex', flexDirection: 'column', width: 'calc(50% - 80px)', margin: '20px'}"
                >
                    <h3>Total Task Done</h3>
                    <span class="center" style="justify-content: space-between;">
                        <img src="../assets/chart-5.png" height="35px">
                        <h2 class="lbl">24</h2>
                    </span>
                </v-card>
            </div>
            <div class="row">
                <v-card
                    :defaultStyles="{display: 'flex', flexDirection: 'column', width: 'calc(50% - 80px)', margin: '20px', padding: '5px 20px'}"
                >
                    <span class="center">
                        <span class="column" style="width: max-content;">
                            <h2 class="lbl">562</h2>
                            <h3>Total Clients</h3>
                        </span>
                        <img src="../assets/chart-6.png" height="50px">
                    </span>
                    <p style="#aaa">
                        <span>-2%</span>
                            than last month
                    </p>
                </v-card>
                <v-card
                    :defaultStyles="{display: 'flex', flexDirection: 'column', width: 'calc(50% - 80px)', margin: '20px', padding: '5px 20px'}"
                >
                    <span class="center">
                        <span class="column" style="width: max-content;">
                            <h2 class="lbl">892</h2>
                            <h3>New Projects</h3>
                        </span>
                        <img src="../assets/chart-7.png" height="50px">
                    </span>
                    <p style="#aaa">
                        <span style="color: #26c553;">+0,5%</span>
                            than last month
                    </p>
                </v-card>
            </div>
            <v-card
                :defaultStyles="{display: 'flex', width: 'calc(100% - 80px)', margin: '20px'}"
            >
                <span class="column">
                    <h3>Fillow Company Profile<br>Website Project</h3>
                    <p>Sed ut perspiciatis unde omnis iste<br>natus error sit voluptatem<br>accusantium doloremque<br>laudantium, totam rem aperiam,<br>eaque ipsa quae ab illo</p>
                    <span class="center">
                        <v-icon-button>
                            <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#d7d7d7" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-310.000000, -1089.000000)" fill="#d7d7d7"> <path d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z" id="arrow-right-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </v-icon-button>
                        <v-icon-button>
                            <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#d7d7d7" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-310.000000, -1089.000000)" fill="#6f7377"> <path d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z" id="arrow-right-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </v-icon-button>
                    </span>
                </span>
                <img src="../assets/chart-8.png" width="250px">
            </v-card>
            <div class="row">
                <v-card
                    :defaultStyles="{display: 'flex', flexDirection: 'column', width: 'calc(50% - 80px)', margin: '20px'}"
                >
                    <h3>Email Categories</h3>
                    <p style="font-size: 13px; color: #777;">Lorem ipsum dolor sit amet</p>
                    <img src="../assets/chart-9.png" width="225px">
                    <p style="color: #777;">Legend</p>
                    <img src="../assets/chart-10.png" width="215px">
                    <v-button
                        :defaultStyles="{padding: '10px 45px', marginTop: '30px', fontSize: '13px', color: '#8c6fc1', border: '1px solid #8c6fc1', borderRadius: '25px', background: 'transparent', alignSelf: 'center'}"
                    >Update Progress</v-button>
                </v-card>
                <v-card
                    :defaultStyles="{display: 'flex', flexDirection: 'column', width: 'calc(50% - 80px)', margin: '20px'}"
                >
                    <h3>Important Projects</h3>
                    <p style="font-size: 13px; color: #777;">Lorem ipsum dolor sit amet</p>
                    <v-avatar
                        src="src/components/assets/logo-1.png"
                        :size="'50px'"
                    >
                        <template v-slot:head>Big Wind</template>
                        <template v-slot:foot>Creative Agency</template>
                    </v-avatar>
                    <p>Optimization Dashboard Page for<br>indexing in Google</p>
                    <span class="row">
                        <v-tag :defaultStyles="{color: '#ffbd59', background: '#ffebcc'}">
                            SEO
                        </v-tag>
                        <v-tag :defaultStyles="{color: '#ff5861', background: '#ffeded'}">
                            MARKETING
                        </v-tag>
                    </span>
                    <img src="../assets/chart-11.png" width="215px" style="margin: 10px 0;">
                    <v-avatar
                        src="src/components/assets/logo-2.png"
                        :size="'50px'"
                    >
                        <template v-slot:head>Circle Hunt</template>
                        <template v-slot:foot>Creative Agency</template>
                    </v-avatar>
                    <p>Redesign Landing Page Website<br>for Company Profile</p>
                    <span class="row">
                        <v-tag :defaultStyles="{color: '#8cdafa', background: '#dfecf2'}">
                            UI/UX
                        </v-tag>
                        <v-tag :defaultStyles="{color: '#eb5ac1', background: '#fecff1'}">
                            WEBSITE
                        </v-tag>
                    </span>
                    <img src="../assets/chart-12.png" width="215px" style="margin: 10px 0;">
                    <v-button
                        :defaultStyles="{padding: '10px 45px', marginTop: '30px', fontSize: '13px', color: '#8c6fc1', border: '1px solid #8c6fc1', borderRadius: '25px', background: 'transparent', alignSelf: 'center'}"
                    >Pin other projects</v-button>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    import vCard from '../Card.vue'
    import vButton from '../Button.vue'
    import vSwitch from '../Switch.vue'
    import vIconButton from '../IconButton.vue'
    import vAvatar from '../Avatar.vue'
    import vTag from '../Tag.vue'

    export default {
        components: {
            vCard,
            vButton,
            vSwitch,
            vIconButton,
            vAvatar,
            vTag
        }
    }
</script>

<style scoped>
    .container {
        padding: 20px;
        height: calc(100% - 90px);
        box-sizing: border-box;
        overflow-y: scroll;
    }
    .row, .column, .center {
        display: flex;
    }
    .column {
        flex-direction: column;
        width: 50%;
    }
    .center {
        align-items: center;
    }

    div.left, div.right {
        flex-grow: 1;
    }

    h2 {
        font-size: 22.5px;
        margin: 0;
    }
    h3 {
        font-size: 17.5px;
        margin: 0;
    }
    p {
        font-size: 12px;
        margin: 10px 0;
    }
    .lbl {
        font-size: 30px;
    }
</style>