<template>
    <div class='testbox'>
        <div>
            <button @click="getData()">get-data</button>
            <div>{{testboxdata}}</div>
            <div>
                <span class="mar" v-for="(item,index) in testArrData" :key="index">{{item}}</span>
            </div>
            <div>
                <button @click="getDataFromApi()">get data from api</button>
            </div>
            <div v-if="apiData.data!=undefined">
                <span class='mar' v-for="(item,index) in apiData.data" :key="index">{{item.name}}</span>
            </div>
            <div v-else>loading</div>
            <div @click="getDataTwo()">
                <button>get data two</button>
            </div>
            <div>
                <div v-if="dataTwo.data!=undefined">{{dataTwo.data[0].xingmin}}</div>
                <div v-else>loading2</div>
            </div>
            <div>
                <button @click="loadAgain()">load again</button>
            </div>
            <div>
                <div>{{this.testObj.one}}</div>
                <button @click="changeChild()">change child</button>
            </div>
            <div>
                <div v-for="(item,index) in tcArr">{{item}}</div>
                <button @click="changeArr()">change arr</button>
            </div>
            <div v-if="this.tcData.one!=undefined">{{this.tcData.one}}</div>
            <div v-if="this.tcData.two!=undefined">{{this.tcData.two}}</div>
        </div>
    </div>
</template>


<script>
import Vue from "vue";
import {GET_DATA_FROM_DATA_TWO} from "../vuex/request-types"
export default {
    name: 'testbox',
    props: [],
    data() {
        return {
            msg: 'this is components',
            testObj:{
                one:6,
                two:8
            },
            tcArr:[{"one":"skldjflksdjlfk"},{"two":"slkdfjsldkjflskdjf"}],
            tcData:{
                "one":"sdlkjflskdjflksjd"
            }
        }
    },
    beforeCreate: function () {
        console.log("创建前", 'beforeCreate')
    },
    created: function () {
        console.log("创建之后", 'created');
    },
    beforeMount: function () {
        console.log("mount之前", 'beforeMount')
    },
    mounted: function () {
        console.dir(this.$http, 'http');
        console.log("mount之后", 'mounted');
        console.log(this.apiData.data, 'apidata')
    },
    beforeUpdate: function () {
        console.log(this.testArrData, 'testArrData-beforeUpdate'); //当state数据更新的时候会触发这个周期
        console.log("更新前", 'beforeUpdate');
    },
    updated: function () { //当state数据更新的时候会触发这个周期
        console.log(this.testArrData, 'testArrData-updated')
        console.log("更新完成", 'updated');
        console.log(this.apiData.data, 'apidata')
    },
    beforeDestroy: function () {
        console.log("销毁前", 'beforeDestroy');
    },
    destroyed: function () {
        console.log("已销毁", 'destroyed');
    },
    methods: {
        getData: function () {
            console.log('start')
            this.$store.dispatch("getDataforTestBox", 15); //触发storeaction的方法
            this.$store.dispatch('getArrData', null);
        },
        getDataFromApi: function () {
            this.$store.dispatch('getDataFromApi', null)
        },
        getDataTwo: function () {
            this.$store.dispatch("getDataTwo", null);
        },
        loadAgain: function () {
            this.$store.dispatch("setReqState",{ name: GET_DATA_FROM_DATA_TWO, reqIs: false });
            //可以重新继续请求数据
        },
        changeChild:function(){
            this.testObj.one=55555555;
           // this.$set(this.testObj,'one',8888888888);
            console.log(this.testObj,'testobj')
        },
        changeArr:function(){
            this.tcArr[0].one=4646446;
           // this.$set(this.tcArr[0],'one',46464654)
        },
    },
    computed: {
        testboxdata: function () { //获取store的数据
            return this.$store.state.testbox.data;
        },
        testArrData: function () {
            return this.$store.state.testbox.testArr;
        },
        apiData: function () {
            return this.$store.state.testbox.apiData;
        },
        dataTwo: function () {
            return this.$store.state.testbox.apiData2;
        }
    }
}
</script>

<style scoped>
.mar {
    margin-right: 10px;
}
</style>
