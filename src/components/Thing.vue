<template>
    <div class="thing">
        <div><button @click='testfn()'>btn-one</button></div>
        <div>{{msg}}</div>
        <div>{{testcm}}</div>
        <div><input type='text' v-model='arr.one' /></div>
        <div ref='eldata' @click='refget()'>{{arr.one}}</div>
        <router-link :to="{ name: 'test'}">测试</router-link>
        <div @click='dispatchThing()'>{{tagContents}}</div>
        <div>{{dataTwo}}</div>
        <div><button @click='changeDataTwo()'>change datatwo</button></div>
        <div><router-link :to="{ name: 'test'}">测试</router-link></div>
        <div><router-link :to="{ name: 'test',  query: { plan: 'private' }}">测试p</router-link></div>
    </div>
</template>
<script>
    export default {
        name: 'thing',
        data() {
            return {
                msg: 'message test data',
                num: 125,
                arr: {
                    one: 123,
                    two: 125
                }
            }
        },
        beforeCreate: function() {
            console.log("创建前", 'beforeCreate')
        },
        created: function() {
            console.log("创建之后", 'created');
        },
        beforeMount: function() {
            console.log("mount之前", 'beforeMount')
        },
        mounted: function() {
            console.log("mount之后", 'mounted')
        },
        beforeUpdate: function() {
            console.log("更新前", 'beforeUpdate');
        },
        updated: function() {
            console.log("更新完成", 'updated');
        },
        beforeDestroy: function() {
            console.log("销毁前", 'beforeDestroy');
        },
        destroyed: function() {
            console.log("已销毁", 'destroyed');
        },
        methods: {
            testfn: function() {
                this.msg = 'one data';
                this.num = 25;
                alert(this.msg, 'msg')
            },
            refget: function() {
                console.log(this.$refs.eldata, 'get el ment')
            },
            dispatchThing:function(){
                this.$store.dispatch('getContentList',88888888888888888)
            },
            changeDataTwo:function(){
                 this.$store.dispatch('changeDataTwo','datatwochanged')
            },
        },
        computed: {
            testcm: function() {
                return this.num + 5;
            },
            tagContents:function() {
                console.log(this.$store.state,'test get state')
                return this.$store.state.tags.tagList
            },
            dataTwo:function(){
                return this.$store.state.tags.dataTwo
            }
        },
    }
</script>

<style scoped>

</style>
