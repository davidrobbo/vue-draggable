<template>
    <div class="row">
        <div class="col-xs-12 col-md-9">
            <div class="form-group">
                <label for="form-ref" class="form-label">Reference*:</label>
                <input type="text" v-model="form.reference" id="form-ref" class="form-control" @input="updateFormDetails"/>
            </div>
        </div>
        <div class="col-xs-12 col-md-3">
            <div class="form-group">
                <label for="form-cols" class="form-label">Number of columns*:</label>
                <input type="number" v-model="form.columns" id="form-cols" class="form-control" min="1" max="3" @input="updateFormDetails"/>
            </div>
        </div>
        <div class="col-xs-12 col-md-12">
            <div class="form-group">
                <label for="form-msg" class="form-label">Heading to form: <small>(optional)</small></label>
                <textarea v-model="form.header" id="form-msg" class="form-control" @input="updateFormDetails"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: '',
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'form'
            ])
        },
        watch: {
        },
        methods: {
            updateFormDetails(){
                this.$store.dispatch('updateFormDetails', {form: this.form})
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
