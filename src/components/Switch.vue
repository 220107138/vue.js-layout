<template>
    <label class="switch">
        <input type="checkbox" :checked="checked">
        <span class="slider"></span>
    </label>
</template>

<script>
    export default {
        props: {
            checked: false
        }
    }
</script>

<style scoped>
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
    }

    .switch input {
        display: none;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #d2d2d2;
        transition: .4s;
        border-radius: 20px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: -3.5px;
        bottom: -3.5px;
        border: 2.5px solid white;
        border-radius: 50%;
        background-color: #71747a;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #ece2fa;
    }

    input:checked + .slider:before {
        background-color: #896cbe;
    }

    input:checked + .slider:before {
        transform: translateX(20px);
    }
</style>