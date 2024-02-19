<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <div
        :style="defaultStyles"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isHovered: false
            };
        },

        props: {
            defaultStyles: Object,
            hoverStyles: Object
        },

        computed: {
            computeSyles() {
                return {
                    ...this.defaultStyles,
                    ...this.styleOnHover
                };
            },
            styleOnHover() {
                return isHovered ? this.hoverStyles : {};
            }
        }
    }
</script>

<style scoped>
    div {
        width: max-content;
        margin: 20px;
        padding: 20px;
        font-family: 'Poppins', sans-serif;
        border-radius: 20px;
        box-shadow: 0 2px 4px #dedede;
        background-color: white;
    }
</style>