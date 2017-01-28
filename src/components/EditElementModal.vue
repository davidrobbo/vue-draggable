<template>
    <div>
        <!-- Modal -->
        <div id="editElementModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Edit the element</h4>
                    </div>
                    <div class="modal-body" v-if="activeList">
                        <h3>Input type chosen</h3>
                        <p>{{element.type.type}}</p>
                        <div class="form-group">
                            <label for="name" class="form-label">Input name (this shows on form responses)</label>
                            <input type="text" v-model="element.name" class="form-control" id="name"/>
                        </div>
                        <div class="form-group" v-if="element.type.shouldHaveMessage">
                            <label for="msg" class="form-label">Question to user:</label>
                            <input type="text" v-model="element.msg" class="form-control" id="msg"/>
                        </div>
                        <div class="form-group" v-if="element.type.shouldHaveMessage">
                            <label for="required" class="form-label">Element is required:</label>
                            <select class="form-control" v-model="element.type.isRequired">
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        <div class="row" v-if="element.type.shouldHaveOptions">
                            <h3 @click="addOption">Add an option</h3>
                            <div class="col-xs-6" v-for="(option,i) in element.type.options">
                                <input type="text" v-model="option.text"/><span @click="deleteOption(i)">DEL</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Done</button>
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
                activeIndex: null,
                activeList: null,
                element: {}
            }
        },
        computed: {
        },
        methods: {
            addOption(){
                this.element.type.options.push({text:""})
            },
            deleteOption(i){
                this.element.type.options.splice(i, 1);
            }
        },
        mounted() {
        },
        created(){
            event.$on('openEditModal', ({list, index, obj}) => {
                this.activeList = list;
                this.activeIndex = index;
                this.element = obj;
                $("#editElementModal").modal("show")
            });
        }     
    }
</script>
<style>
</style>
