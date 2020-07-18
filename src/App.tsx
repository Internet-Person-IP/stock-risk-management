import React,{useState} from 'react';
import './App.css';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
function App() {

  const [values, setValues] = useState(
    { 
    StopLoss: 0, 
    TwoPercentage: 0, 
    Percentage30:0 ,
    Percentage37:0, 
    Percentage44:0,
    Percentage55: 0
  });

 const updateValues = (event: any) =>{
   const DataPoint: number = parseFloatIgnoreCommas(event.target.value);
   
   setValues({
     StopLoss: RoundNumber(DataPoint*0.98),
     TwoPercentage: RoundNumber(DataPoint*1.023),
     Percentage30: RoundNumber(DataPoint*1.03),
     Percentage37: RoundNumber(DataPoint*1.037),
     Percentage44: RoundNumber(DataPoint*1.044),
     Percentage55: RoundNumber(DataPoint*1.055)
   });
 }

 const RoundNumber = (Data: number ) : number => {
   return Number(Data.toFixed(3));
 }
 const parseFloatIgnoreCommas = (numb: string) : number => {
   if(numb==="") return 0;
  const numberNoCommas = numb.replace(/,/g, '.');
  return parseFloat(numberNoCommas);
}
 
 const {
  StopLoss,
  TwoPercentage,
  Percentage30,
  Percentage37,
  Percentage44,
  Percentage55
  } = values
  return (

    
    <div className="App">
      <div className="table-with-res">
      <h1 className="stock-management">Stock Risk Management</h1>
      <InputGroup className="mb-3" onChange={updateValues}>
    <FormControl
      placeholder="Value Of Stock"
      aria-label="Value Of Stock"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">$</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

    <Table striped bordered variant="dark">
  <thead>
    <tr >
      <th>Percentage</th>
      <th>Value</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-danger" >
      <td >Stop Loss</td>
      <td className="valuepercentage">{StopLoss}</td>
      <td className="meaningofvalue">Sell Stock Retard</td>
    </tr>
    <tr className="bg-success">
      <td>+2,3%</td>
      <td className="valuepercentage">{TwoPercentage}</td>
      <td className="meaningofvalue">GOAL!!!</td>
    </tr>
    <tr className="bg-primary">
      <td>+3,0%</td>
      <td className="valuepercentage">{Percentage30}</td>
      <td className="meaningofvalue">WE TAKE THOSE!!!</td>
    </tr>
    <tr className="percentage37">
      <td>+3,7%</td>
      <td className="valuepercentage">{Percentage37}</td>
      <td className="meaningofvalue">DON'T CUT! CONSISTENCY IS AT SERIOUS RISK</td>
    </tr>
    <tr className="bg-warning">
      <td>+4,4%</td>
      <td className="valuepercentage">{Percentage44}</td>
      <td className="meaningofvalue"><label className="text-dark"> Don't... risk..it.</label> Don't be brave. Set stop loss at +2,3%</td>
    </tr>
    <tr className="bg-white text-dark">
      <td>5,5%</td>
      <td className="valuepercentage">{Percentage55}</td>
      <td className="meaningofvalue percentage55">SELL OUT. TAKE A BREAK. GTFO AND LOOK FOR INTRADAY OPPORTUNITIES.</td>
    </tr>
  </tbody>
</Table>
<h3 className="stock-management">Good luck. Stay consistent. Stay Frosty...For now.</h3>
</div>
</div>
  );
}

export default App;
