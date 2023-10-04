<template>
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="navbar__wrap menuFlex">
                    <div class="hamb">
                        <div class="hamb__field" id="hamb" :class="{ active : isMenu }" @click="toogleMenu">
                            <span class="bar"></span> <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                    <ul class="menu menu__list" id="menu">
                        <li class="menu__item"><a href="#about">Обо мне</a></li>
                        <li class="menu__item"><a href="#work">С чем я работаю</a></li>
                        <li class="menu__item"><a href="#price">Стоимость</a></li>
                        <li class="menu__item"><a href="#contacts">Контакты</a></li>
                    </ul>
                    <a href="#card" class="btnDark">Карта дня</a>
                </div>
            </div>
        </nav>

        <Transition name="slide">
            <div v-if="isMenu" class="popup">
                <ul class="menu menu__list">
                    <li class="menu__item"><a href="#about">Обо мне</a></li>
                    <li class="menu__item"><a href="#work">С чем я работаю</a></li>
                    <li class="menu__item"><a href="#price">Стоимость</a></li>
                    <li class="menu__item"><a href="#contacts">Контакты</a></li>
                </ul>
            </div>
        </Transition>

    </header>
</template>

<script lang="js">
    export default{
        data(){
            return{
                isMenu: false,
            }
        },
        methods:{
            toogleMenu(){
                this.isMenu = !this.isMenu;
                if(this.isMenu){
                    document.body.style.overflow = 'hidden';
                }
                else{
                    document.body.style.overflow = 'auto';
                }
            },
        }
    }
</script>

<style lang="scss">
   .slide-enter-active, .slide-leave-active {
        transition: all 0.5s ease;
    }
    .slide-enter-from{
        left: -100%;
    }
    .slide-enter-to{
        left: 0;
    }
    .slide-leave-to {
        transform: translateX(-100%);
    }
</style>