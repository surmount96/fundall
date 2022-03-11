<template>
    <c-box px="24" py="3">
        <c-box><img src="../assets/logo.svg" alt=""></c-box>
        <c-flex align-items="centers">
            <c-box w="40%" px="6">
                <c-flex py="6" alignItems="center">
                    <c-box py="4" px="6" bg="gray.300" borderRadius="6px">
                        <img src="../assets/user.svg" alt="user" width="20px"/>
                    </c-box>
                    <c-box ml="4">
                        <c-text>Babatunde Fashola</c-text>
                        <c-text>baba2@gmail.com</c-text>
                    </c-box>
                </c-flex>
                <c-text fontSize="21px" mb="1">Target Monthly Expenses</c-text>
                <c-text fontSize="28px" mb="4" fontWeight="bold"> ₦ 596,000</c-text>
                <c-box bg="#EFEFEF" h="7px" mb="8"><c-box bg="green.300" h="100%" w="40%"></c-box></c-box>
                <c-box bg="#fff" p="3" boxShadow="sm">
                    <c-text fontSize="14px">Daily Expenses Summary</c-text>
                    <c-flex mt="4" mb="8" align-items="center">
                        <c-text w="20%"></c-text>
                        <c-text w="40%">Date</c-text>
                        <c-text w="40%">Amount</c-text>
                    </c-flex>
                    <c-flex mb="4" align-items="center" pb="6" borderWidth="1px" borderBottomStyle="solid" borderColor="#f1f1f1">
                        <c-box w="20%">
                            <c-box h="3" w="3" mx="auto" bg="green.300" borderRadius="100px"></c-box>
                        </c-box>
                        <c-text w="40%">30 Nov, 2018</c-text>
                        <c-text w="40%" color="green.300">₦30,000</c-text>
                    </c-flex>
                    <c-flex mb="4" align-items="center" pb="6" borderWidth="1px" borderBottomStyle="solid" borderColor="#f1f1f1">
                        <c-box w="20%">
                            <c-box h="3" w="3" mx="auto" bg="green.300" borderRadius="100px"></c-box>
                        </c-box>
                        <c-text w="40%">30 Nov, 2018</c-text>
                        <c-text w="40%" color="green.300">₦30,000</c-text>
                    </c-flex>
                    <c-flex mb="4" align-items="center" pb="6" borderWidth="1px" borderBottomStyle="solid" borderColor="#f1f1f1">
                        <c-box w="20%">
                            <c-box h="3" w="3" mx="auto" bg="green.300" borderRadius="100px"></c-box>
                        </c-box>
                        <c-text w="40%">30 Nov, 2018</c-text>
                        <c-text w="40%" color="green.300">₦30,000</c-text>
                    </c-flex>
                </c-box>
            </c-box>
            <c-box w="60%">
                <c-box bg="#F2F3F7" p="4" borderWidth="1px" borderStyle="solid" borderColor="#f1f1f1" px="8" py="10" h="100%">
                    <c-flex bg="#fff" h="15vh" p="3" mb="3" align-items="center" justifyContent="space-between">
                        <c-box>
                            <c-text fontSize="22px" fontWeight="800" mb="2"><c-text as="span" color="green.300">Welcome back,</c-text> Babatunde</c-text>
                            <c-text fontSize="15px">Now, let’s get your expenses for this month</c-text>
                        </c-box>
                        <c-box>
                            <c-box>
                                <img src="../assets/dashboard.svg" alt="dashboard" />
                            </c-box>
                        </c-box>
                        
                    </c-flex>
                    
                    <c-box mb="4" w="70%">
                        <c-text fontSize="14px" mb="1">Target Monthly Expenses</c-text>
                        <c-input placeholder="Enter Email" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                    </c-box>
                    
                    <c-box mb="4" w="70%">
                        <c-text fontSize="14px" mb="2">Date</c-text>
                        <c-input placeholder="Enter Password" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                    </c-box>
                    <c-text fontSize="14px" mb="1">Today's Expense</c-text>
                    <c-flex justifyContent="space-between" mb="4">
                        <c-box w="48%">
                            <c-input placeholder="Pizza" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="gray.300" boxShadow="none" />
                        </c-box>
                        <c-box w="48%">
                            <c-input placeholder="10,000" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="gray.300" boxShadow="none" />
                        </c-box>
                        
                    </c-flex>
                    <c-flex justifyContent="space-between" mb="4">
                        <c-box w="48%">
                            <c-input placeholder="Textbook" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="gray.300" boxShadow="none" />
                        </c-box>
                        <c-box w="48%">
                            <c-input placeholder="10,000" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="gray.300" boxShadow="none" />
                        </c-box>
                        
                    </c-flex>
                    <c-flex justifyContent="space-between" mb="4">
                        <c-box w="48%">
                            <c-input placeholder="Tuition Fee" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="gray.300" boxShadow="none" />
                        </c-box>
                        <c-box w="48%">
                            <c-input placeholder="10,000" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="gray.300" boxShadow="none" />
                        </c-box>
                        
                    </c-flex>
                    <c-flex justifyContent="end" align-items="center" mb="3">
                        <c-text>Total Actual Expenses: <c-text as="span" fontSize="20px" fontWeight="bold" mr="1">₦ </c-text></c-text>
                        <c-input placeholder="40,000" w="20%" fontSize="14px" py="6" borderStyle="solid" borderWidth="1px" borderColor="green.100" boxShadow="none" />
                    </c-flex>
                    <c-button w="100%" bg="green.300" border="none" my="2" py="6">
                        SAVE TODAY’S EXPENSES
                    </c-button>
                </c-box>
            </c-box>
        </c-flex> 
    </c-box>
</template>

<script>
import { CFlex,CButton,CBox,CStack,CInput,CText,CFormLabel,CImage } from "@chakra-ui/vue";

export default {
    components:{
        CFlex,CButton,CBox,CStack,CInput,CText,CFormLabel,CImage
    },
    data(){
        return{
            //
        };
    }
}
</script>

<style>

</style>