<template>

</template>

<script lang="ts">
import Vue from 'vue'
Vue.component('MyList', {
  /* ... */
   name: 'HelloWorld',
  data: function () {

  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',

  })
// export default Vue.extend({


// })
class ListItem {
  public Name:string;
  public Text:string;
  public Id:string;
  public ItemControl;
  public ItemData;
}
class List {
  constructor() {

  }
  public ItemCreate:(item:ListItem)=>void;
  public ItemCreateAfter:()=>void;
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
