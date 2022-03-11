<template>
    <c-box px="32" py="3">
        <c-box><img src="../assets/logo.svg" alt=""></c-box>
        <c-flex align-items="center">
            <c-box w="50%" px="20">
                <c-flex justifyContent="center"><img src="../assets/welcome.svg" alt=""></c-flex>
                <c-box>
                    <c-text fontWeight="bold" fontSize="32px" mb="2"><c-text as="span" color="#4DE897">Welcome! </c-text>Let's get to know you.</c-text>
                    <c-text>Your first step toward a better financial lifestyle starts here.</c-text>
                </c-box>
            </c-box>
            <c-box w="50%">
                <c-box bg="#fff" borderWidth="1px" borderStyle="solid" borderColor="#f1f1f1" px="16" py="10" h="100%">
                    
                    <c-flex justifyContent="space-between" mb="4">
                        <c-box w="48%">
                            <c-text fontSize="14px" mb="2">First Name</c-text>
                            <c-input type="text" v-model="form.firstname" placeholder="Enter First Name" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                        </c-box>
                        <c-box w="48%">
                            <c-text fontSize="14px" mb="2">Last Name</c-text>
                            <c-input type="text" v-model="form.lastname" placeholder="Enter Last Name" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                        </c-box>
                        
                    </c-flex>
                    <c-box mb="4">
                        <c-text fontSize="14px" mb="2">Email address</c-text>
                        <c-input type="email" v-model="form.email" placeholder="Enter Email" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                    </c-box>
                    
                    <c-box mb="4">
                        <c-text fontSize="14px" mb="2">Password</c-text>
                        <c-input type="password" v-model="form.password" placeholder="Enter Password" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                    </c-box>
                    <c-box mb="4">
                        <c-text fontSize="14px" mb="2">Confirm Password</c-text>
                        <c-input type="password" v-model="form.password_confirmation" placeholder="Confirm Password" fontSize="14px" py="6" size="md" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                    </c-box>
                    <c-flex align-items="center">
                        <c-button @click="registerUser" w="100%" bg="green.300" border="none" my="2" py="6">
                            SIGN UP
                        </c-button>
                        <c-circular-progress v-show="loading" color="green.300" is-indeterminate/>
                    </c-flex>

                    <c-text textAlign="center" mt="4">Already have an account? <c-button textDecoration="none" bg="none" as="router-link" to="/login" color="green.300" fontWeight="bold">Login Here</c-button></c-text>
                </c-box>

                <c-text color="gray.300" textAlign="center" my="5" px="4" lineHeight="1">By clicking on Login, you agree to our <c-text as="span" color="green.300">Terms & Conditions and Privacy Policy</c-text></c-text>
            </c-box>
        </c-flex> 
    </c-box>
</template>

<script>
import { CFlex,CButton,CBox,CStack,CInput,CText,CFormLabel,CCircularProgress} from "@chakra-ui/vue";

export default {
    components:{
        CFlex,CButton,CBox,CStack,CInput,CText,CFormLabel,CCircularProgress
    },
    data(){
        return{
            loading:false,
            form:{
                firstname: '',
                lastname: '',
                email:'',
                password:'',
                password_confirmation:''
            }
        };
    },
    methods:{
        async registerUser(){
            try{
                this.loading = true;
                await this.$store.dispatch('register', this.form);
                this.$toast({
                    title: 'Account created successfully.',
                    description: "We've created your account for you. You can proceed to login",
                    status: 'success',
                    duration: 1000
                })
                this.$router.push('/login');
                this.loading = false;
            } catch (err) {
                this.$toast({
                    title: 'Error.',
                    description: "We could not create an account.",
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