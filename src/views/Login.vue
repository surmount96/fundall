<template>
    <c-box px="32" py="3">
        <c-box><img src="../assets/logo.svg" alt=""></c-box>
        <c-flex align-items="center">
            <c-box w="50%" px="20">
                <c-flex justifyContent="center" mb="4"><img src="../assets/login.svg" alt=""></c-flex>
                <c-box>
                    <c-text fontWeight="bold" fontSize="32px" mb="2"><c-text color="#4DE897">Welcome back! </c-text>We miss you.</c-text>
                </c-box>
            </c-box>
            <c-box w="50%">
                <c-box bg="#fff" borderWidth="1px" borderStyle="solid" borderColor="#f1f1f1" px="16" py="10" h="100%">
                    <c-box mb="12" >
                        <c-text fontSize="34px" mb="2">Holla!</c-text>
                        <c-text fontSize="20px">Sign in to vibe!</c-text>
                    </c-box>
                    <c-box mb="8">
                        <c-text fontSize="14px" mb="2">Email or Username</c-text>
                        <c-input type="email" v-model="form.email" required placeholder="Enter Email" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                    </c-box>
                    
                    <c-box mb="4">
                        <c-text fontSize="14px" mb="2">Password</c-text>
                        <c-input type="password" v-model="form.password" required placeholder="Enter Password" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                    </c-box>
                    <c-flex align-items="center">
                        <c-button @click="login" w="100%" bg="green.300" border="none" my="2" py="6">
                            LOGIN
                        </c-button>
                        <c-circular-progress v-show="loading" color="green.300" is-indeterminate/>
                    </c-flex>

                    <c-text textAlign="center" mt="4">Dont have an account? <c-button py="0" px="0" textDecoration="none" bg="none" as="router-link" to="/register" color="green.300" fontWeight="bold">Register Here</c-button></c-text>
                    <c-text color="gray.300" textAlign="center" my="5" px="4" lineHeight="1">By clicking on Login, you agree to our <c-text as="span" color="green.300">Terms & Conditions and Privacy Policy</c-text></c-text>
                </c-box>
            </c-box>
        </c-flex> 
    </c-box>
</template>

<script>
import { CFlex,CButton,CBox,CStack,CInput,CText,CFormLabel,CCircularProgress } from "@chakra-ui/vue";

export default {
    components:{
        CFlex,CButton,CBox,CStack,CInput,CText,CFormLabel,CCircularProgress
    },
    data(){
        return{
            loading:false,
            form:{
                email:'',
                password:''
            }
        };
    },
    methods:{
        login(){
            if(!this.form.email && !this.form.password) {
                this.$toast({
                    title: 'Error.',
                    description: "Ensure all fields are filled.",
                    status: 'error',
                    duration: 1000
                })
                return ;
            }
            try{
                this.loading = true;
                this.$store.dispatch('login', this.form);
                this.$toast({
                    title: 'Successfully login.',
                    description: "Redirecting to dashboard",
                    status: 'success',
                    duration: 1000
                })
                setTimeout(() => {
                    this.$router.push('/dashboard');
                    this.loading = false;
                },2000)
            } catch (err) {
                console.log(err.response)
                this.loading = false;
                this.$toast({
                    title: 'Error.',
                    description: "Please check your credentials.",
                    status: 'error',
                    duration: 1000
                })
            }
        }
    }
}
</script>

<style>

</style>