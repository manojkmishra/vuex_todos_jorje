<template>
<div>
  <b-button @click="addBox()">Add Box</b-button>

  <div v-for="(box, index) in boxes" :key="`box_${index}`">
    <!-- This updates so is not related to the parents loop -->
    <p>{{ box.items.length }}</p>
    <Box :box="box" />
  </div>
  </div>
</template>

<script>
// Import VueX
import { mapGetters, mapActions } from "vuex";

// Import Components
import Box from "./Todo";

export default {
  name: "BoxesPage",
  layout: "BoxesLayout",
  components: { Box },
  computed: {
   boxes(){
      this.$store.getters.message
    }
  },
  methods: {
    ...mapActions({
      addItemColumn: "items/addItemColumn"
    })
  },
  async fetch({ store, params }) {
    await store.dispatch('getInventory');
  }
};
</script>