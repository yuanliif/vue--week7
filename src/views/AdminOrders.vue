<template>
  <h2>後臺訂單</h2>
  <div class="container">
    <div v-if="orders.length > 0">
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">訂單編號</th>
            <th>付款方式</th>
            <th width="120">購買人</th>
            <th width="120">電話</th>
            <th width="100">是否啟用</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.payment_method }}</td>
            <td class="text-end">
              {{ item.user.name }}
            </td>
            <td class="text-end">
              {{ item.user.tel }}
            </td>
            <td>
              <span v-if="item.is_paid" class="text-success">已付款</span>
              <span v-else>未付款</span>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    </div>
    <div v-else>
      <h4>尚無訂單</h4>
    </div>
  </div>
</template>

<script>
import Pagination from '../components/GeneralPagination.vue'
export default {
  data() {
    return {
      orders: []
    }
  },
  components: {
    Pagination
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http
        .get(api)
        .then((response) => {
          this.products = response.data.products
          this.pagination = response.data.pagination
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  }
}
</script>
