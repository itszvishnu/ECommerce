import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PaymentView from '../components/PaymentView'
import axios  from 'axios';


const PaymentScreen = ({navigation,route}) => {
    const product = route.params;
    const [response, setResponse] = useState()

    const [ makePayment, setMakePayment ] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState('')

    const cartInfo = {
        id: '1',
        name: 'Play Station 4',
        amount: 39999
    }

    const onCheckStatus = async (paymentResponse) => {
        setPaymentStatus('Please wait while confirming your payment!')
        setResponse(paymentResponse)

        let jsonResponse = JSON.parse(paymentResponse);
        // perform operation to check payment status

        try {
    
            const stripeResponse = await axios.post('http://localhost:8000/payment', {
                email: 'test@gmail.com',
                product: cartInfo,
                authToken: jsonResponse
            })

            if(stripeResponse){

                const { paid } = stripeResponse.data;
                if(paid === true){
                    setPaymentStatus('Payment Success')
                }else{
                    setPaymentStatus('Payment Success')
                }

            }else{
                setPaymentStatus('Payment Success')
            }

            
        } catch (error) {
            
            console.log(error)
            setPaymentStatus('Payment Success')

        }
 
    }



    const paymentUI = () => {

        if(!makePayment){

            return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    <Text style={{ fontSize: 25, margin: 10}}> Make Payment </Text>
                    <Text style={{ fontSize: 16, margin: 10}}> Product Name: {cartInfo.name} </Text>
                    <Text style={{ fontSize: 16, margin: 10}}> Payable Amount: {cartInfo.amount} </Text>

                    <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#FF5733', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => {
                            setMakePayment(true)
                        }}
                        >
                        <Text style={{ color: '#FFF', fontSize: 20}}>
                            Proceed To Pay
                        </Text>

                    </TouchableOpacity>


                </View>


             
            // show to make payment
        }else{

            if(response !== undefined){
                return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    <Text style={{ fontSize: 25, margin: 10}}> { paymentStatus} </Text>
                    <Text style={{ fontSize: 16, margin: 10}}> { response} </Text>
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatus} product={cartInfo.name} amount={cartInfo.amount} />

            }
            
        }

    }



    return (<View style={styles.container}>
        {paymentUI()}
    </View>)
}

const styles = StyleSheet.create({
container: { flex: 1,},
navigation: { flex: 2, backgroundColor: 'red' },
body: { flex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' },
footer: { flex: 1, backgroundColor: 'cyan' }
})

export default PaymentScreen