import styles from "./Service.module.css"
// eslint-disable-next-line react/prop-types
const Service = ({rating, set})=>{
    const handleServiceRatingChange = (event) => {
        set(event.target.value);
      };
      
    return(
        <div className={styles.try}>
    <h3>How was the service</h3>

   
    <select id="service" className={styles.posi} onChange={handleServiceRatingChange}>
    <option  value={rating}>-- Choose an Option --</option>
          <option value="excellent">Excellent (20%)</option>
          <option value="moderate">Moderate (10%)</option>
          <option value="bad">Bad (5%)</option>
    </select>

    </div>
  
       
   

    )
}
export default Service