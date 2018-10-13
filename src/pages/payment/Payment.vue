<template>
  <div class="payment">
    <payment-header></payment-header>
    <payment-content></payment-content>
    <payment-information></payment-information>
    <payment-total></payment-total>
  </div>
</template>

<script>
import PaymentHeader from "./components/Header.vue"
import PaymentContent from "./components/content.vue"
import PaymentInformation from "./components/information.vue"
import PaymentTotal from "./components/total.vue"
export default {
  name: 'payment',
  components:{
    PaymentHeader,
    PaymentContent,
    PaymentInformation,
    PaymentTotal
  }
}
</script>

<style lang="stylus" scoped>
  .payment
    background: #f5f5f5
</style>
