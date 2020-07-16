<template>
  <div>
    <form action>
      <div class="form-group">
        <label for="name">نام محصول:</label>
        <input type="text" class="form-control" id="name" placeholder name="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="grouping">دسته بندی:</label>
        <input type="text" class="form-control" id="grouping" placeholder name="group" v-model="category">
      </div>
      <div class="form-group">
        <label class="code">کد محصول:</label>
        <input type="text" class="form-control" id="coding" placeholder name="code" v-model="code">
      </div>
      <div class="form-group">
        <label for="price">قیمت محصول</label>
        <input type="text" class="form-control" id="pricing" placeholder name="price" v-model="price">
      </div>
      <button type="button" class="btn btn-success send"  @click.prevent="addUser">ثبت اطلاعات</button>
    </form>
  </div>
</template>
<script>
export default {
    data(){ return {  name: '',  category: '',  code: '',  price: '', }  },
  methods: {
     addUser() { 
         this.$store.dispatch('updateName', this.name)  
         this.$store.dispatch('updateCategory', this.category)  
         this.$store.dispatch('updateCode', this.code)  
         this.$store.dispatch('updatePrice', this.price)  
     }, 
    
  }
};
</script>
<style scoped>
</style>