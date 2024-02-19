<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <button
        :style="computeStyles"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @mousedown="isActive = true"
        @mouseup="isActive = false"
    >
        <img
            v-if="src"
            :src="src"
            :style="computeIconStyles"
        >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        data() {
            return {
                isHovered: false,
                isActive: false
            };
        },

        props: {
            src: String,
            defaultStyles: Object,
            hoverStyles: Object,
            activeStyles: Object,
            iconDefaultStyles: Object,
            iconHoverStyles: Object,
            iconActiveStyles: Object
        },

        computed: {
            computeStyles() {
                return {
                    ...this.defaultStyles,
                    ...this.styleOnHover,
                    ...this.styleOnActive
                };
            },
            styleOnHover() {
                return this.isHovered ? this.hoverStyles : {};
            },
            styleOnActive() {
                return this.isActive ? this.activeStyles : {};
            },
            computeIconStyles() {
                return {
                    ...this.iconDefaultStyles,
                    ...this.iconOnHover,
                    ...this.iconOnActive
                };
            },
            iconOnHover() {
                return this.isHovered ? this.iconHoverStyles : {};
            },
            iconOnActive() {
                return this.isActive ? this.iconActiveStyles : {};
            }
        }
    }
</script>

<style scoped>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 7.5px 15px;

        font: 20px 'Poppins', sans-serif;
        color: white;

        border: none;
        border-radius: 10px;
        background-color: #876cbd;
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover, button:focus {
        background-color: #765bad;
        outline: none;
    }
    button:active {
        box-shadow: none;
        background-color: #654a9c;
    }

    button img {
        height: 35px;
        margin: -2.5px;
    }
</style>