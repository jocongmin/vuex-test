<template>
    <div :class="{ 'red': true, 'blue': false}" @click='greet()'>
        {{msg}}
        <Mytest abc='this is props' abd='this is props abd'>
            <div>this is slot</div>
        </Mytest>
        <div :class="{blue}">{{getTagList}}</div>
        <div><span :class="{'blue':true}">dkfdkfjdkj</span></div>
        <div><span :class="{'red':true}">dkfdkfjdkj</span></div>
        <div><span :class="classA ? 'red' : 'blue' ">dkfdkfjdkj</span></div>
        <div class='childClass'><span>时刻记得发</span></div>
        <div><span v-for="(item,index) in dataArr">{{item}},{{index}}<br/></span></div>
    </div>
</template>
<script>
    import Mytest from './Mytest'
    export default {
        name: 'test',
        data() {
            return {
                msg: 'jocm app',
                classA:false,
                dataArr:[12,13,15,165,18]
            }
        },
        components: {
            Mytest
        },
        mounted: function() {
            console.log(this.$route, 'route===========')
        },
        methods: {
            greet: function(event) {
                alert('hello test')
            }
        },
        computed: {
            getTagList: function() {
                return this.$store.state.tags.tagList; //when the data change in vuex by other page , here it also will change
            }
        }
    }
</script>

<style scoped>
    .red {
        color: red;
    }
    .blue {
        color: blue;
    }
    .childClass{
        span{
            color:red;
        }
    }
</style>
