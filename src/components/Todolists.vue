<script>
import axios from 'axios';
import Todo from './Todo.vue';

export default {
    components: {
        Todo
    },
    data() {
        return {
            todolists: [],
            newTask: "",
        }
    },
    methods: {
        //Faccio chiamata axios per reperire l'intera lista dei task
        fetchTodolists() {
            axios.get('http://127.0.0.1:8000/api/todolist')
            .then(res => {
                console.log(res)
                const { results } = res.data
                this.todolists = results
            })
            .catch(err => {
                console.log(err)
            });
        },

        //Aggiungo un nuovo task 
        AddTask() {
            document.getElementById('input-task').type = 'block';
            if (this.newTask != "") {
                axios.post('http://127.0.0.1:8000/api/newtask', {
                task: this.newTask
                })
                .then(response => {
                    console.log(response);
                    this.fetchTodolists();
                    this.newTask = "";
                })
                .catch(error => {
                    console.log(error);
                });
            }
        },

        EditTask(id, text) {
            axios.post(`http://127.0.0.1:8000/api/editask/${id}`, {
                task: text
            })
            .then(response => {
                console.log('ok', response);
            })
            .catch(error => {
                console.log('ko', error);
            })
            .finally(() => {
                this.fetchTodolists();
            });
        },

        DeleteTask(id) {
            axios.delete(`http://127.0.0.1:8000/api/todolist/${id}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.fetchTodolists();
            });

        },
     
    },
    mounted() {
        this.fetchTodolists()
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center">
        <div>
            <div class="text-center title my-5">
                <h1>TODOLIST</h1>
            </div>
            <div class="container-list my-5">
                <form>
                    <label for="newTask"></label>
                    <button id="newTask" class="btn btn-secondary my-3 me-2" @click="AddTask">Aggiungi task</button>
                    <input type="hidden" id="input-task" class="my-3" v-model="newTask"
                        placeholder="Aggiungi nuovo task">
                        <div>
                            <small class="text-danger" v-if="newTask.length > 100">Max 100 caratteri</small>
                        </div>
                </form>

                <span v-for="todo in todolists">
                    <Todo :key="todo.id" :todo="todo" :editTask="EditTask" :class="{ check: isCheck }" :deleteTask="DeleteTask"/>
                </span>
                
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.container-list {
    min-width: 1100px;
    min-height: 600px;
    border-radius: 30px;
    background: #2f363e;
    padding: 30px 40px;
    box-shadow: 25px 25px 75px rgba(0,0,0,0.25),
    10px 10px 70px rgba(0,0,0,0.25),
    inset 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(255,255,255,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.5);
}

.title {
    animation-name: title;
    animation-duration: 1s;

    @keyframes title {
        0% {
            opacity: 0;
            transform: translateX(-20%);
        }
        100% {
            opacity: 1;
        }
    }
}

.none {
    display: none;
}

.block {
    display: block;
}



</style>
