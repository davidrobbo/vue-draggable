<template>
    <div>
        <!-- Modal -->
        <div id="newElementModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add a new element to the form</h4>
                    </div>
                    <div class="modal-body">
                        <h3>Input type chosen</h3>
                        <p>{{choice.type}}</p>
                        <div class="form-group">
                            <label for="name" class="form-label">Input name (this shows on form responses)</label>
                            <input type="text" v-model="name" class="form-control" id="name"/>
                        </div>
                        <div class="form-group" v-if="choice.shouldHaveMessage">
                            <label for="msg" class="form-label">Question to user:</label>
                            <input type="text" v-model="msg" class="form-control" id="msg"/>
                        </div>
                        <div class="form-group">
                            <label for="addto" class="form-label">Add to which column?</label>
                            <select disabled v-model="addTo" id="addto" class="form-control" v-if="form.columns == 1">
                                <option value="listOne">Only Column</option>
                            </select>
                            <select v-model="addTo" id="addto" class="form-control" v-if="form.columns == 2">
                                <option value="listOne">Left Column</option>
                                <option value="listTwo">Right Column</option>
                            </select>
                            <select v-model="addTo" id="addto" class="form-control" v-if="form.columns == 3">
                                <option value="listOne">Left Column</option>
                                <option value="listTwo">Centre Column</option>
                                <option value="listThree">Right Column</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" @click="pushToList">Add</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal" @click="reset">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import event from '../Event.js'
    import elements from '../form-elements-json.js'
    import { mapGetters } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                elements: elements,
                active: 0,
                addTo: "listOne",
                msg: "",
                name: ""
            }
        },
        computed: {
            ...mapGetters([
               'form'
            ]),
            choice(){
                return this.elements[this.active];
            }
        },
        methods: {
            pushToList(){
                event.$emit("addToList", {list: this.addTo, obj: {msg: this.msg, name: this.name, type: this.choice}});
                this.reset();
            },
            reset(){
                this.active = 0;
                this.addTo = "listOne";
                this.msg = "";
                this.name = "";
            }
        },
        mounted() {
        },
        created(){
            event.$on('openNewModal', ({id}) => {
                this.active = id;
                $("#newElementModal").modal("show")
            });
        }     
    }
</script>
<style>
</style>
