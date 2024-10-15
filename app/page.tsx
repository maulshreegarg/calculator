'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Home() {

const [result,setResult]=useState('');
const [expression,setExpression]=useState('');

const handleButtonClick=( value ) => {
  if (value === '='){
try{
  setResult(eval(expression).toString())
}
catch(error){
  setResult("error");
}
  }
  else if (value==="c")
  {
    setResult("");
    setExpression("");
  }
  else{
    setExpression((prevExpression)=>prevExpression+value)
  }
}
const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  'c'
];
  return (
      <main className="flex min-h-screen flex-col  items-center p-24">
       <h1 className="text-4xl font-bold mb-10">calculator</h1>
       <div className="bg-white p-6 rounded-lg shadow-lg">
       <input
          type="text"
          className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
          value={expression}
          readOnly
        />
          <input
          type="text"
          className="w-full text-4xl font-bold mb-4 focus:outline-none"
          value={result}
          readOnly
        />
         <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <Button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              variant= "tina"
            >
              {btn}
            </Button>
         
          ))}
        </div>
       </div>
    </main>
  );
}
