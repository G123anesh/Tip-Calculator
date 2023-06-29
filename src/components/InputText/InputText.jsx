/* eslint-disable react/prop-types */
import styles from "./InputText.module.css"

const InputText = ({cName, tok})=>{
    
  const handleCustomerNameChange = (event) => {
    tok(event.target.value);
  };
 
    return(
        <div className={styles.light}>
        <input type="text" placeholder="Customer Name" value ={cName} onChange={handleCustomerNameChange}/>
        </div>
       
    )
}
export default InputText