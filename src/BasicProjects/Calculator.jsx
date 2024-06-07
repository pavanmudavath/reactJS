import { useState } from "react"

const Calculator = () => {
    const [input,setInput]=useState('');
    const handleButtonClick=(value)=>{
        if(value === 'AC'){
            setInput('');
        }else if(value === 'DE' ){
            setInput(input.slice(0,-1));
        }else if(value === '='){
            try{
                setInput(eval(input).toString());
            }catch{
                setInput('Error');
            }
        }else{
            setInput(input+value);
        }
    };
    console.log("input state",input);
  return (
    <div className="bg-blue-100 h-screen  flex items-center justify-center">
        <div className="bg-custom h-4/5 w-96 flex items-center justify-center rounded-lg">
        <form>
            <div>
            <input className="rounded-lg border border-teal-300 bg-custom text-right font-semibold text-white flex justify-end items-end w-full mb-8 h-16 " type="text" name="display" value={input || ''} readOnly/>
            </div>
            <div>
                <div>
                    <input  className="text-teal-300 bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="AC"  onClick={()=>handleButtonClick('AC')}/>
                    <input  className="text-teal-300 bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="DE" onClick={()=>handleButtonClick('DE')} />
                    <input  className="text-teal-300 bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer  h-14 w-14  " type="button" value="." onClick={()=>handleButtonClick('.')}/>
                    <input  className="text-teal-300 bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="/" onClick={()=>handleButtonClick('/')}/>
                </div>
                <div>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="7"  onClick={()=>handleButtonClick('7')}/>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="8" onClick={()=>handleButtonClick('8')}/>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="9"onClick={()=>handleButtonClick('9')} />
                    <input  className="text-teal-300 bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="*" onClick={()=>handleButtonClick('*')}/>
                </div>
                <div>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="4" onClick={()=>handleButtonClick('4')}/>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="5" onClick={()=>handleButtonClick('5')}/>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="6" onClick={()=>handleButtonClick('6')} />
                    <input  className="text-teal-300 bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="-"  onClick={()=>handleButtonClick('-')}/>
                </div>
                <div>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="1" onClick={()=>handleButtonClick('1')}/>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="2" onClick={()=>handleButtonClick('2')}/>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="3" onClick={()=>handleButtonClick('3')}/>
                    <input  className="text-teal-300 bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="+" onClick={()=>handleButtonClick('+')}/>
                </div>
                <div>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="00" onClick={()=>handleButtonClick('00')}/>
                    <input  className="text-white bg-custom rounded-custom shadow-custom mr-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer h-14 w-14  " type="button" value="0" onClick={()=>handleButtonClick('0')}/>
                    <input  className="text-teal-300 bg-custom rounded-custom shadow-custom ml-5 mb-5 font-medium bg-transparent  p-4 cursor-pointer  h-14 w-28  " type="button" value="=" onClick={()=>handleButtonClick('=')}/>
                </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Calculator