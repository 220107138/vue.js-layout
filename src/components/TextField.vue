<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <label for="input"
        :style="computeContainerStyles"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <slot name="left"></slot>
        <input
            id="input" :type="computeType"
            :style="computeInputStyles"
            :placeholder="placeholder"
        >
        <slot name="right"></slot>
    </label>
</template>

<script>
    export default {
        data() {
            return {
                isHovered: false
            };
        },

        props: {
            type: 'text',
            placeholder: String,
            containerDefaultStyles: Object,
            containerHoverStyles: Object,
            inputDefaultStyles: Object,
            inputHoverStyles: Object
        },

        computed: {
            computeType() {
                if (this.type == 'password' ||
                    this.type == 'email' ||
                    this.type == 'number')
                    return this.type;
                else
                    return 'text';
            },

            computeContainerStyles() {
                return {
                    ...this.containerDefaultStyles,
                    ...this.containerOnHover
                };
            },
            containerOnHover() {
                return this.isHovered ? this.containerHoverStyles : {};
            },
            computeInputStyles() {
                return {
                    ...this.inputDefaultStyles,
                    ...this.inputOnHover
                };
            },
            inputOnHover() {
                return this.isHovered ? this.inputHoverStyles : {};
            }
        }
    }
</script>

<style scoped>
    label {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        padding: 10px 15px;
        overflow: hidden;

        border: 1px solid #777;
        border-radius: 15px;
        background-color: rgba(242, 237, 247, 0.25);
        cursor: text;
    }

    input {
        width: 100%;
        margin: 0 5px;
        font: 12.5px 'Popins', sans-serif;
        color: black;
        word-wrap: break-word;
        border: none;
        background-color: transparent;
        transition: 0.3s;
    }

    input:focus {
        outline: none;
    }
</style>