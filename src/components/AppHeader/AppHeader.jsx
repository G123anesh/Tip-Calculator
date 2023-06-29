import {Container, Navbar } from 'react-bootstrap';
import styles from "./AppHeader.module.css"

const AppHeader = ()=>{
    
    return(
        <header >
       <Navbar bg="primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand className={styles.tipContainer}>Tip Calculator</Navbar.Brand>
        </Container>
      </Navbar>
        </header>
     
    )
}
export default AppHeader;