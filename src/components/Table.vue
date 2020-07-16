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
                        <tr>
                            <td>{{ code }}</td>
                            <td>{{ name }}</td>
                            <td>{{ category }}</td>
                            <td>{{ price }}</td>
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
    import {mapGetters} from 'vuex'
    
    export default {
        computed: {
            ...mapGetters([
                'name',
                'category',
                'code',
                'price',
                'fdata'
        ]),
      }
    }
</script>


<style scoped>
    
</style>