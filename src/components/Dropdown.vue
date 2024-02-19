<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <div>
        <button
            :style="computeSelectedStyles"
            @click="isOpen = !isOpen"
            @blur="isOpen = false"
            @mouseenter="selectedIsHovered = true"
            @mouseleave="selectedIsHovered = false"
            @mousedown="selectedIsActive = true"
            @mouseup="selectedIsActive = false"
        >
            <slot name="left"></slot>
            {{ this.selectedOption }}
            <slot name="right"></slot>
        </button>
        <transition name="fade">
            <ul
                v-if="isOpen" @click.stop
                :style="this.listDefaultStyles"
            >
                <li
                    v-for="option in options"
                    :key="option"
                    :style="computeOptionStyles"
                    @click="selectOption(option)"
                >
                    {{ option }}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false,
                selectedOption: this.options[0],
                selectedIsHovered: false,
                selectedIsActive: false,
                optionIsHovered: false
            };
        },

        props: {
            options: [null],
            selectedDefaultStyles: Object,
            selectedHoverStyles: Object,
            selectedActiveStyles: Object,
            listDefaultStyles: Object,
            optionDefaultStyles: Object,
            optionHoverColor: String,
            optionHoverBackground: String
        },

        computed: {
            computeSelectedStyles() {
                return {
                    ...this.selectedDefaultStyles,
                    ...this.selectedOnHover,
                    ...this.selectedOnActive
                };
            },
            selectedOnHover() {
                return this.selectedIsHovered ? this.selectedHoverStyles : {};
            },
            selectedOnActive() {
                return this.selectedIsActive ? this.selectedActiveStyles : {};
            },

            computeOptionStyles() {
                return {
                    ...this.optionDefaultStyles,
                    '--option-hover-color': this.optionHoverColor || 'black',
                    '--option-hover-background': this.optionHoverBackground || 'rgba(196,180,220, 0.5)'
                };
            }
        },

        methods: {
            selectOption(option) {
                this.selectedOption = option;
                this.isOpen = false;
            } 
        }
    }
</script>

<style scoped>
    div {
        position: relative;
        width: min-content;
    }

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
        transition: 0.3s;
        cursor: pointer;
    }
    button:hover, button:focus {
        background-color: #765bad;
        outline: none;
    }
    button:active {
        box-shadow: none;
        background-color: #654a9c;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    ul {
        position: absolute;
        padding: 0;
        margin: 7.5px 0 0 0;
        border: 1px solid rgba(196,180,220, 0.5);
        border-radius: 11px;
        background-color: rgba(242, 237, 247, 0.25);
        backdrop-filter: blur(15px);
        z-index: 5;
    }
    ul li {
        padding: 7.5px 15px;
        text-align: start;
        font: 20px 'Poppins', sans-serif;

        list-style: none;
        border: none;
        border-radius: 10px;
        background-color: transparent;
        transition: 0.3s;
        cursor: pointer;
    }
    ul li:hover {
        color: var(--option-hover-color);
        background: var(--option-hover-background);
    }
</style>