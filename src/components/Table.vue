<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>کد</th>
          <th>نام محصول</th>
          <th>دسته</th>
          <th>قیمت</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.name">
          <td>{{ item.code }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button type="button" class="btn btn-primary mt">ویرایش</button>
            <button type="button" class="btn btn-danger mt">حذف</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["tableData"])
  }
};
</script>


<style scoped>
</style>