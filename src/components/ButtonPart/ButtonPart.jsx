import styles from "./ButtonPart.module.css"


// eslint-disable-next-line react/prop-types
const ButtonPart = ({rt, btnClick, total})=>{
    return(
        <>
 <button onClick={btnClick} className={styles.last} >Calculate Tip & Customer</button>
    <table className={styles.cht}>
        
            <tr>
                <th className={styles.chigg}>Total Customers</th>
                <th className={styles.chig}>Total Tip</th>
            </tr>
     
          <tr className={styles.chi}>
            <td>{rt}</td>
            <td>{total}</td>
          </tr>
      
    </table>
        </>
   
    )
}
export default ButtonPart;