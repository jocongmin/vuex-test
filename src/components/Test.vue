<template>
    <div :class="{ 'red': true, 'blue': false}">
        {{msg}}
        <Mytest abc='this is props' abd='this is props abd'>
            <div>this is slot</div>
        </Mytest>
        <div @click='greet()'>{{getTagList}}</div>
        <div>
            <span :class="{'blue':true}">dkfdkfjdkj</span>
        </div>
        <div>
            <span :class="{'red':true}">dkfdkfjdkj</span>
        </div>
        <div>
            <span :class="classA ? 'red' : 'blue' ">dkfdkfjdkj</span>
        </div>
        <div class='childClass'>
            <span>时刻记得发</span>
        </div>
        <div>
            <span v-for="(item,index) in dataArr" :key="index">{{item}},{{index}}
                <br/>
            </span>
        </div>
        <div>
            <button @click="gotoWatchTest()">watch click</button>
        </div>
        <div @click="goRouter()">goRouter</div>
        <div @click="routerTest()">router-test-2</div>
        <div>
            <select v-model="fruit" @change="getWhich()">
                <option value='apple'>苹果</option>
                <option value='yali'>鸭梨</option>
            </select>
        </div>
        <div><input type='checkbox' @change="checkChange()" v-model="ischeck"/></div>
        <div><button v-tap="{ methods : vtap ,abc:'sdksjflksdlfk',num:4654654}">v-tap</button></div>
    </div>
</template>
<script>
import Mytest from './Mytest'
import router from "../router"
export default {
    name: 'test',
    data() {
        return {
            msg: 'jocm app',
            classA: false,
            dataArr: [12, 13, 15, 165, 18],
            beWatchData: 15,
            beWatchData2: 17,
            fruit:'yali',
            ischeck:false
        }
    },
    components: {
        Mytest
    },
    mounted: function () {
        console.log(this.$route, 'route===========')
        console.log(this.$router, 'router')
    },
    methods: {
        vtap:function(params){
            console.log(params.abc,params.num)
        },
        greet: function (event) {
            alert('hello test')
        },
        gotoWatchTest: function () {
            this.beWatchData = 16;
            this.beWatchData2 = 18
        },
        goRouter: function () {
            console.log(router, 'router')
            return;
            router.push({ name: 'thing' })
        },
        routerTest: function () {
            console.log(this.$router);
            return;
            this.$router.push('/thing')
        },
        getWhich:function(){
            console.log(this.fruit,'fruit')
        },
        checkChange:function(){
            console.log(this.ischeck,'ischeck')
        }
    },
    computed: {
        getTagList: function () {
            return this.$store.state.tags.tagList; //when the data change in vuex by other page , here it also will change
        }
    },
    watch: {
        beWatchData: {
            handler(newValue, oldValue) {
                console.log(newValue, oldValue, 'beWatchData')
            },
            deep: true
        },
        beWatchData2: function (newValue, oldValue) {
            console.log(newValue, oldValue, 'beWatchData2')
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

.childClass {
    span {
        color: red;
    }
}
</style>
