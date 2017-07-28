<template>
    <div class="test" @click='greet()'>
        {{msg}}
        <Mytest abc='this is props' abd='this is props abd'>
            <div>this is slot</div>
        </Mytest>
        <div>{{getTagList}}</div>
    </div>
</template>
<script>
import Mytest from './Mytest'
export default {
    name: 'test',
    data() {
        return {
            msg: 'jocm app'
        }
    },
    components: {
        Mytest
    },
    mounted: function () {
        console.log(this.$route,'route===========')
    },
    methods: {
        greet: function (event) {
            alert('hello test')
        }
    },
    computed: {
        getTagList: function () {
            return this.$store.state.tags.tagList;  //when the data change in vuex by other page , here it also will change
        }
    }
}
</script>

<style scoped>
.test {
    color: red;
}
</style>
