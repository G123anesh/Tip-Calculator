/* eslint-disable react/prop-types */
import styles from "./Input.module.css"

const Input = ({task, tyu})=>{
    const handleBillAmountChange = (event) => {
        tyu(event.target.value);
      };
      
    return(
        <div className={styles.tipCa}>
        <h3>Enter Your Bill amount</h3>
        <input type="number" value={task}  className={styles.input} onChange={handleBillAmountChange}  />
        </div>
       
    )
}
export default Input