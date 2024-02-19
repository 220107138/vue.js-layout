<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    
    <div class="container"
        :style="containerStyles"
    >
        <img v-if="src"
            :src="src"
            :width="size"
            :height="size"
            :style="imgStyles"
        >
        <div class="right">
            <p class="head"
                :style="headStyles"
            >
                <slot name="head"></slot>
            </p>
            <p class="foot"
                :style="footStyles"
            >
                <slot name="foot"></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            src: String,
            size: '50px',
            containerStyles: Object,
            imgStyles: Object,
            headStyles: Object,
            footStyles: Object
        }
    }
</script>

<style scoped>
    div.container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    img {
        border-radius: 50%;
    }

    div.right {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 0;
        font: 13px 'Poppins', sans-serif;
    }
    p.head {
        font-weight: 600;
    }
    p.foot {
        color: #666;
        font-size: 10px;
    }
</style>