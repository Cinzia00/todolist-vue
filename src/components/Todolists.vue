<script>
import axios from 'axios';

export default {
  data() {
    return {
        todolists: []
    }
  },
  methods: {
    fetchTodolists() {
        axios.get('http://127.0.0.1:8000/api/todolist').then(res => {
            console.log(res)
            const { results } = res.data
            this.todolists = results
        })
        .catch(err => {
            console.log(err)
        })
    }
  },
  mounted() {
    this.fetchTodolists()
  }
}
</script>

<template>
    <div class="container">
        <div class="row-title">
            <h1>LA MIA TODOLIST</h1>
        </div>
        <div class="row">
            <div class="content">
                <img src="../assets/img/list.jpg" alt="">
            </div>
            <div class="content-list">
                <div class="add-task">
                    <input type="text">
                    <button>Aggiungi task</button>
                </div>
                
                <p v-for="todolist in todolists">{{ todolist.task }}</p>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>

.row-title {
    text-align: center;
    margin: 50px;
    color: rgb(16, 174, 209);
}
.row {
    display: flex;
    line-height: 30px;
    
    .content-list {
        margin: 50px 0;

        .add-task {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;

            button {
                padding: 8px;
                background-color: rgb(16, 174, 209);
                border: 0px;
                border-radius: 5px;
                color: white;
            }

            button:hover {
                background-color: white;
                color: rgb(16, 174, 209);
                border: 1px solid rgb(16, 174, 209);
                padding: 7px;
            }

            
        }
    }
    
    .content {
        flex-basis:50%;  
        margin-top: 100px;
        margin-left: 90px;

        img {
            border-radius: 40px;
        }
        
    }
}
    
</style>
