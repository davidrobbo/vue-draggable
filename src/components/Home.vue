<template>
    <div>
        <modal></modal>
        <editmodal></editmodal>
        <formdetails></formdetails>
        <formelements></formelements>
        <div class="row">
            <div :class="cols">
                <draggable class="some-height" :list="listOne" :options="options" @start="drag=true" @end="drag=false" >
                    <div class="element" v-for="(element, i) in listOne">
                        <i class="fa fa-arrows">icon</i> {{element.name }} | {{ element.type.type }}
                        <div class="btn btn-default" @click="editElement('listOne', i)">Edit</div>
                        <div class="btn btn-danger" @click="deleteElement('listOne', i)">Delete</div>
                    </div>
                </draggable>
            </div>
            <div :class="cols" v-if="form.columns>1">
                <draggable class="some-height" :list="listTwo" :options="options" @start="drag=true" @end="drag=false" >
                    <div class="element" v-for="(element, i) in listTwo">
                        <i class="icon-move">icon</i> {{element.name}} | {{ element.type.type }}
                        <div class="btn btn-default" @click="editElement('listTwo', i)">Edit</div>
                        <div class="btn btn-danger" @click="deleteElement('listTwo', i)">Delete</div>
                    </div>
                </draggable>
            </div>
            <div :class="cols" v-if="form.columns>2">
                <draggable class="some-height" :list="listThree" :options="options" @start="drag=true" @end="drag=false" >
                    <div class="element" v-for="(element, i) in listThree">
                        <i class="icon-move">icon</i> {{element.name}} | {{ element.type.type }}
                        <div class="btn btn-default" @click="editElement('listThree', i)">Edit</div>
                        <div class="btn btn-danger" @click="deleteElement('listThree', i)">Delete</div>
                    </div>
                </draggable>
            </div>
            {{ listOne }}
        </div>
    </div>
</template>
<script>
    import FormDetails from './FormDetails.vue'
    import FormElements from './FormElements.vue'
    import Modal from './NewElementModal.vue'
    import EditModal from './EditElementModal.vue'
    import draggable from 'vuedraggable'
    import event from '../Event.js'
    import { mapGetters } from 'vuex'
    export default {
        name: '',
        components: {
            formdetails: FormDetails,
            formelements: FormElements,
            modal: Modal,
            draggable: draggable,
            editmodal: EditModal
        },
        data() {
            return {
                options: {
                    group: 'forms',
                    handle: '.icon-move'
                }
            }
        },
        computed: {
             ...mapGetters([
                'form',
                'listOne',
                'listTwo',
                'listThree'
             ]),
             cols(){
                const cols = ( this.form.columns == 1 ? 'col-xs-12' : this.form.columns == 2 ? 'col-xs-6' : 'col-xs-4' );
                return cols + ' some-height';
             }
        },
        methods: {
            test(){
                return "test"
            },
            openModal(){
                $("#myModal").modal("show")
            },
            editElement(list, index){
                event.$emit('openEditModal', {list, index, obj: this[list][index]});
            },
            deleteElement(list, index){
                this[list].splice(index, 1);
            }
        },
        mounted() {
        },
        created(){
            event.$on('addToList', ({list, obj}) => {
                this[list].push(obj);
            });
        }     
    }
</script>
<style>
    .some-height {
        min-height: 50px;
    }
    .element {
        background-color: blue;
        border: 2px solid #ffffff;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .icon-move{
        cursor:pointer;
    }
</style>
