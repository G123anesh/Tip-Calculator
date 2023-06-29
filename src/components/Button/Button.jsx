import styles from "./Button.module.css"

// eslint-disable-next-line react/prop-types
const Button = ({btnClick})=>{

    return(
        
        <button onClick={btnClick} className={styles.addCustomer}>Add Customers</button>      
        
    )
}
export default Button