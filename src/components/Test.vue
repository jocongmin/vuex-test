<template>
    <div class="test" @click='greet()'>
        {{msg}}
        <Mytest abc='this is props' abd='this is props abd'>
            <div>this is slot</div>
        </Mytest>
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
        methods: {
            greet: function(event) {
                alert('hello test')
            }
        }
    }
</script>

<style scoped>
    .test {
        color: red;
    }
</style>
