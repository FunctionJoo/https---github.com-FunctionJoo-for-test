<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in todolist" :key="index" class="shadow">
        <div v-if="todoItem.chk" class="chk_on"></div>
        <div v-else class="chk_off"></div>
        <div @click="chktoggle(todoItem.txt, index)" class="checkBtn"><i class="fa fa-check" aria-hidden="true"></i></div>
        <span class="txt">{{ todoItem.txt }}</span>
        <span class="removeBtn" type="button" @click="removeTodo(todoItem.txt, index)">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit('setTodo');
  },
  computed: {
    todolist () {
      return this.$store.state.todoItems
    }
  },

  methods: {
    removeTodo(todoItem, index) {
      this.$store.commit('removeTodo', [todoItem, index]);
    },
    chktoggle(todoItem, index) {
      this.$store.commit('chktoggle', [todoItem, index]);
    },
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }


  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-move {
    transition: transform 0.3s;
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.3s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .chk_off+.checkBtn,
  .chk_off+.checkBtn+.txt {
    color: #ccc;
  }
</style>
