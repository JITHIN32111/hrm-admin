import React,{useState} from 'react';
import folder from '../../assets/Calender.png';
import AddLeave from '../../modals/AddLeave';
import Leaves from './Leaves';
function LeaveSettings() {
    const [open,setOpen]=useState(false)
    const [showLeaves, setShowLeaves] = useState(false);

    const closeModal=()=>{
        setOpen(false)
    }
    if(showLeaves){
      return <Leaves/>
    }
  return (
    <div className="flex items-center justify-center mt-40">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <img src={folder} alt="Folder Icon" />
        <span className="flex flex-col gap-y-2 text-sm xlx:text-[16px] justify-center items-center text-center">
          <p className="font-customBold text-sm text-[#1E1E1E]">
          Create and customize a new leave type for your <br /> organization’s needs.          </p>
        </span>
        <button onClick={()=>setOpen(true)} className="bg-customGreen flex justify-center items-center text-white rounded-lg px-3 py-2 text-smallHead xlx:text-sm w-[182px] h-[40px] hover:bg-liteGreen transition-all">
          
          <span className="pl-1" >Add new  leave type</span>
        </button>
      </div>
      {open && <AddLeave closeModal={closeModal} setShowLeaves={setShowLeaves} />}
    </div>
  );
}

export default LeaveSettings;
