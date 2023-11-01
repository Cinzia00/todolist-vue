<script>
export default {
  data() {
    return {
        editable: false,
        taskText: this.todo.task,
        isError: false,
        isCheck: false
    }
  },
  methods: {
    //rende editabile l'input
    toggleEditable() {
        this.editable = !this.editable;
    },
    //controlla i dati inseriti dall'utente e salva il task modificato tramite la funzione editTask
    handleEditTask() {
        if (this.taskText.length > 1 && this.taskText.length < 100) {
            this.isError = false;
            this.editTask(this.todo.id, this.taskText);
            this.editable = false;
        } else {
            this.isError = true;
            // console.log('errore');
        }
    },
    //aggiunge o toglie la classe check all'input
    setDone() {
        this.isCheck = !this.isCheck
    }
  },
  props: {
    todo: Object,
    editTask: Function,
    deleteTask: Function
  }
}

</script>


<template>

    <form>
        
        
        <label for="task"></label>
        <div class="d-flex">
            <div class="container-input">
                <input required type="text" id="task" v-model="taskText" :disabled="!this.editable" :class="{ error: isError, check: isCheck }">
                <small class="text-danger" v-if="taskText.length > 100">Max 100 caratteri</small>
            </div>
            <div class="container-button">

                <button class="btn color-secondary btn-icon" @click="setDone()">
                    <font-awesome-icon :icon="['fas', 'check']" />
                </button>
                <button class="btn color-secondary btn-icon" id="edit-button" @click="toggleEditable">
                    <font-awesome-icon :icon="['fas', 'pencil']" />
                </button>            
                <button class="btn btn-icon" @click="deleteTask(todo.id)">
                    <font-awesome-icon :icon="['fas', 'trash-can']" />
                </button>
                <button v-if="this.editable" class="btn btn-icon" @click="handleEditTask(todo.id, taskText)">
                    <font-awesome-icon :icon="['far', 'floppy-disk']" />
                </button>
            </div>
        </div>
    </form>
    
</template>


<style lang="scss"> 
.btn-icon {
    font-size: 18px;
    color:gray;
}

input:disabled {
    border: none;
    background-color: transparent;
    color: white;
}

.error {
    border: 2px solid red;
}

.check {
    text-decoration: line-through;
}

.container {
    &-input {
        width: 80%;

        input {
            width: 100%;
        }
    }

    &-button {
        display: flex;
        align-items: start;
        width: auto;
        margin-left: 20px;
    }
}
</style>