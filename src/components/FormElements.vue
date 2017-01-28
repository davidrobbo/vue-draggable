<template>
    <div class="row">
        <div class="btn btn-accent col-xs-4 col-md-2" v-for="el in elements" @click="openModal(el.id)">
            {{ upper(el.type) }}
        </div>
    </div>
</template>
<script>
    import event from '../Event.js'
    export default {
        name: '',
        data() {
            return {
                elements: [
                    {id:1, type: 'radio'},
                    {id:2, type: 'text'},
                    {id:3, type: 'email'},
                    {id:4, type: 'date'},
                    {id:5, type: 'select'},
                    {id:6, type: 'checkbox'},
                    {id:7, type: 'color'},
                    {id:8, type: 'file'},
                    {id:9, type: 'submit'},
                    {id:10, type: 'number'},
                    {id:11, type: 'textarea'}
                ],
            }
        },
        computed: {        
        },
        methods: {
            upper(val){
                return val.charAt(0).toUpperCase() + val.slice(1, val.length);
            },
            openModal(id){
                event.$emit("openNewModal", {id});
            }
        },
        mounted() {
        },
        created(){
        }     
    }
</script>
<style>
</style>
