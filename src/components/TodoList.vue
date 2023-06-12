<template>
    <div class="todo-list">
            <input
                class="todo-input"
                type="text"
                v-model.trim="addtext"
                v-on:keyup.enter="addToDo"
                placeholder="할일"
            />
            <button class="clear-btn" v-on:click="cleanToDo">처리완료삭제</button>
            <p>{{ remaining }} / {{ todos.length }}건 처리</p>
            <div class="ctodos">
                <div class="ctodo">
                    <div v-for="(todo, index) in todos" :key="index">
                        <label>
                            <input type="checkbox" class="todo-check" v-model="todo.done" />
                            <span class="todo-label" v-bind:class="{donestyle:todo.done}">{{todo.text}}</span>
                        </label>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      addtext: '',
      todos: []
    }
  },
  computed: {
    remaining: function () {
      return this.todos.filter(function (val) {
        return val.done === true
      }).length
    }
  },
  methods: {
    addToDo: function () {
      if (this.addtext) {
        this.todos.push({ done: false, text: this.addtext })
        this.addtext = ''
      }
    },
    cleanToDo: function () {
      this.todos = this.todos.filter(function (val) {
        return val.done === false
      })
    }
  }

}
</script>

<style>
.todo-list {
    margin-top: 20px;
}
.donestyle {
    text-decoration: line-through;
    color: lightgray;
}
.todo-input {
    height: 50px;
    width: 30%;
    outline: none;
    padding: 0 15px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid rgb(138, 222, 255);
}
.clear-btn {
    height: 50px;
    padding: 0 15px;
    margin-left: 2px;
    border-radius: 6px;
    background: rgb(138, 222, 255);
    border: none;
}
.ctodos {
    display: flex;
    justify-content: center;
    align-items: center;
}
.ctodo {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.todo-check {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #3f9cff;
    border-radius: 4px;
    outline: none;
    position: relative;
    cursor: pointer;
}
.todo-check:checked {
  background-color: #3f9cff;
}

.todo-check:checked:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
}

.todo-label {
  margin-left: 5px;
}
</style>
