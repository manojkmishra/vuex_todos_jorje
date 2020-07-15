<template>
    <div class="todo" >
     {{ text }}
     <button  @click="$emit('delete')" >del</button>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Todo",
  props: {  text: { type: String, default: '',  },  },
};
</script>
<style scoped>
.todo{
  padding-top:10px;
  padding-bottom:10px;
}
</style>