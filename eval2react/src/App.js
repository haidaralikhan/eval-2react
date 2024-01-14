
import './App.css';
import Khan from './Component'



function App() {

const data = [
  {
    name : "haidar khan",
    age : 26,
    mobNo: 8737909044,
    grade : 1,
    email : "haidarali@gmail.com"
  }
]
  
  return (
    <>
    <Khan props={data} />
    </>
   );
}

export default App;
