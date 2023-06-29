import Input from "../Input/Input"
import Service from "../Service/Service"
import InputText from "../InputText/InputText"
import Button from "../Button/Button"
import List from "../List/List"
import { useState } from "react"
import ButtonPart from "../ButtonPart/ButtonPart"
const FirstComponent = ()=>{
    
    const [inp, setInp] = useState('')
    const [serviceRating, setRating] = useState('')
    const [customerName, setCustomerName] = useState('');
    const [customers, setCustomers] = useState([]);
    const [list, setList] = useState(0)
    
    const calculateTip = () => {
        let tipPercentage = 0;
        if ( serviceRating === 'excellent') {
          tipPercentage = 0.2;
        } else if (serviceRating === 'moderate') {
          tipPercentage = 0.1;
        } else if ( serviceRating === 'bad') {
          tipPercentage = 0.05;
        }
    
        const tipAmount = parseInt(inp) * tipPercentage;
        return tipAmount.toFixed(2);
      };
    
       let handleAddCustomer = () => {
        const tipAmount = calculateTip();
        const customer = {
          name: customerName,
          tip: tipAmount,
        };
    
        setCustomers([...customers, customer]);
        setInp('');
        setCustomerName('');
        setRating('');
        // setList(customers.length+1)

      };

      const handleCalculateTotal = () => {
        let totalTip = 0;
        setList(customers.length)
        customers.forEach((customer) => {
          totalTip += parseFloat(customer.tip);
        });
    
        return totalTip.toFixed(2);
        
      };
   console.log(list)
    return (
        <div>
        <Input task = {inp} tyu = {setInp}/>
        <hr />
        <Service rating = {serviceRating} set = {setRating}/>
        <InputText cName = {customerName} tok = {setCustomerName}/>
        <Button btnClick={handleAddCustomer}/>
        <br /><br /><br /><br /><br /><br />
        <List lName = {customers}/>
        <ButtonPart rt = {list} btnClick = {handleCalculateTotal}/>
        </div>
       
    )
}
export default FirstComponent