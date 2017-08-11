<template>
    <div class='testbox'>
        <div>
            <button @click="getData()">get-data</button>
            <div>{{testboxdata}}</div>
            <div>
                <span class="mar" v-for="(item,index) in testArrData" :key="index">{{item}}</span>
            </div>
            <div><button @click="getDataFromApi()">get data from api</button></div>
            <div v-if="apiData.data!=undefined"><span class='mar' v-for="(item,index) in apiData.data" :key="index">{{item.name}}</span></div>
            <div v-else>loading</div>
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
            console.dir(this.$http,'http');
            console.log("mount之后", 'mounted');
             console.log(this.apiData.data,'apidata')
        },
        beforeUpdate: function() {
            console.log(this.testArrData,'testArrData-beforeUpdate');//当state数据更新的时候会触发这个周期
            console.log("更新前", 'beforeUpdate');
        },
        updated: function() { //当state数据更新的时候会触发这个周期
            console.log(this.testArrData,'testArrData-updated')
            console.log("更新完成", 'updated');
            console.log(this.apiData.data,'apidata')
        },
        beforeDestroy: function() {
            console.log("销毁前", 'beforeDestroy');
        },
        destroyed: function() {
            console.log("已销毁", 'destroyed');
        },
        methods: {
            getData: function() {
                console.log('start')
                this.$store.dispatch("getDataforTestBox", 15); //触发storeaction的方法
                this.$store.dispatch('getArrData', null);

            },
            getDataFromApi:function(){
                this.$store.dispatch('getDataFromApi',null)
            }
        },
        computed: {
            testboxdata: function() { //获取store的数据
                return this.$store.state.testbox.data;
            },
            testArrData: function() {
                return this.$store.state.testbox.testArr;
            },
            apiData:function(){
                return this.$store.state.testbox.apiData;
            }
        }
    }
</script>

<style scoped>
    .mar {
        margin-right: 10px;
    }
</style>
