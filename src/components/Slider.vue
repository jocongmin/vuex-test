<template>
    <div class="slider">
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>


<script>
    require('vue-swipe/dist/vue-swipe.css');
    // in ES6 modules
    import {
        Swipe,
        SwipeItem
    } from 'vue-swipe';
    export default {
        name: 'slider',
        components: {
            Swipe,
            SwipeItem
        },
        data() {
            return {
                msg: 'this is components'
            }
        }
    }
</script>

<style scoped>
    .my-swipe {
        height: 200px;
        width:500px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .slide1 {
        background-color: #0089dc;
        color: #fff;
    }
    .slide2 {
        background-color: #ffd705;
        color: #000;
    }
    .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }
</style>
