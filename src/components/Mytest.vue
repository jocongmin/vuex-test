<template>
    <div class="mytest">
        {{msg}}
        <div>
            {{abc}}
            <div>
                {{abd}}
            </div>
        </div>
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name: 'mytest',
        props: ['abc', 'abd'],
        data() {
            return {
                msg: 'this is components'
            }
        }
    }
</script>

<style scoped>
    .mytest {
        color: red;
    }
</style>
