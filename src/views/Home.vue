<template>
  <div>
    <nav>
      <c-flex justifyContent="space-between" p="10">
        <img src="../assets/logo.svg" alt="">
        <c-flex>
          <c-button fontSize="14px" textDecoration="none" as="router-link" to="/login" fontWeight="normal" bg="none" border="none" mr="3" cursor="pointer">
            LOG IN
          </c-button>
          <c-button as="router-link" to="/register" textDecoration="none" fontSize="14px" fontWeight="normal" bg="#4DE897" color="#fff" border="none" cursor="pointer">SIGN UP</c-button>
        </c-flex>
      </c-flex>
    </nav>
    <c-box fontSize="30px" >
      <c-flex justifyContent="center" my="5">
        <img src="../assets/welcome.svg" alt="">
      </c-flex>
      <c-box textAlign="center">
        <c-text fontWeight="bold">Fundall Expense Tracker</c-text>
        <c-text mb="2">Mini Project Frontend</c-text>
        <c-text fontSize="14px">by Babatunde Fashola</c-text>
      </c-box>
    </c-box>
  </div>
</template>

<script>
import { CText,CFlex,CButton,CBox } from '@chakra-ui/vue'
export default {
  name: 'Home',
  components: {
    CText,CFlex,CButton,CBox
  }
}
</script>
