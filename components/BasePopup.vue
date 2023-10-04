<template>
    <div class="popup-wrapper">
        <div class="popup-content" ref="popupInside">
            <button class="popup-cross" @click="$emit('close')"></button>
            <h2 class="popup-header">{{ title }}</h2>
            
            <slot />
        </div>
    </div>
</template>

<script lang="js">
    export default{
        props:[
            'title'
        ]
    }
</script>

<style lang="scss">
    .popup-wrapper{
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 10;
        background-color: rgba($color: #000000, $alpha: 0.5);

        .popup-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            height: 80%;
            width: 80%;
            max-width: 90%;
            background-color: #ffffff;

            .popup-cross{
                position: absolute;
                right: 10px;
                top: 10px;
                width: 30px;
                height: 30px;
                z-index: 11;
                background-color: transparent;
                outline: none;
                border: none;
                background-image: url('/icons/cross.svg') ;
                background-size: 30px 30px;
                background-position: center center;
            }

            .popup-header{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                text-align: center;
                padding: 10px;
                z-index: 10;
                background-color: rgba($color: #000000, $alpha: 0.5);
            }
        }
    }
</style>