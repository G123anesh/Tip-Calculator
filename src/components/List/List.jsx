import styles from "./List.module.css"

// eslint-disable-next-line react/prop-types
const List = ({lName})=>{
    // eslint-disable-next-line react/prop-types
    const listItems = lName.map((customer, index) => (
        <li key={index}>{customer.name} offering a tip of {customer.tip} rupee</li>
      ))
      console.log(listItems)
    return(
        <div>
        <h3 className={styles.listItem}>Customer List </h3>
        <ul className={styles.arow}>
          {listItems}
        </ul>
      
        </div>

    )
}
export default List