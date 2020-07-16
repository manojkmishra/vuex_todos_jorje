<template>
  <div class="main">
    <div class="container p-3 main-box">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-4 space line">
          <app-form></app-form>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-8 space">
          <app-table></app-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";

export default {
  components: {
    appForm: Form,
    appTable: Table
  }
};
</script>

<style scoped>
</style>