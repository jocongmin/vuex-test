<template>
    <div class='testbox'>
        <div>
            <button @click="getData()">get-data</button>
            <div>{{testboxdata}}</div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'testbox',
        props: [],
        data() {
            return {
                msg: 'this is components'
            }
        },
        methods:{
            getData:function(){
                console.log('start')
                this.$store.dispatch("getDataforTestBox",15)
            }
        },
        computed:{
            testboxdata:function(){
                return this.$store.state.testbox.data;
            }
        }
    }
</script>

<style scoped>

</style>
