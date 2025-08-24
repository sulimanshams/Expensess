import './App.css';
import ExpensesCard from './Expenses';
import {Box} from "@mui/material"

function App() {
  return(
  <Box sx={{
    minWidth:"100vw",
    minHeight:"100vh",
    backgroundColor:"#f8e9dd",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }}>
        <ExpensesCard />
  </Box>
  )
}
 
export default App;
