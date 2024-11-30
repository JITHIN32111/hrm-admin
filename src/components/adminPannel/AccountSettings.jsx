import React,{useState} from "react";
import profile from "../../assets/Frame.png";
import { CiMail, CiUser } from "react-icons/ci";
import call from "../../assets/Calling.png";
import trash from '../../assets/trash.png'
import pen from '../../assets/Edit.png'
import Upload from '../../modals/Upload'
import DeleteAccount from "../../modals/DeleteAccount";
// Dummy data for inputs
const personalInfoInputs = [
  {
    label: "Phone",
    value: "(897) 333-543",
    icon: <img src={call} alt="Phone" className="w-4 h-4" />,
  },
  {
    label: "Email address",
    value: "charlotte99@gmail.com",
    icon: <CiMail size={18} className="text-black" />,
  },
  {
    label: "Name",
    value: "Charlotte",
    icon: <CiUser size={18} className="text-black" />,
  },
];

const addressInputs = [
  {
    label: "Address",
    value: "244 Market Street, Suite 900",
    icon: <CiUser size={18} className="text-black" />, // Placeholder icon
  },
  {
    label: "Postcode",
    value: "878983",
    icon: <CiUser size={18} className="text-black" />, // Placeholder icon
  },
  {
    label: "City/State",
    value: "Charlotte",
    icon: <CiUser size={18} className="text-black" />, // Placeholder icon
  },
];

function AccountSettings() {
    const [open,setOpen]=useState(false)
    const [uploadModal,setUploadModal]=useState(false)
    const [deleteModal,setDeleteModal]=useState(false)
    const [profileImage, setProfileImage] = useState(profile); 
    const closeModal=()=>{
      setUploadModal(false)
    }
    const closeModal2=()=>{
      setDeleteModal(false)
    }
    const handleProfileImageUpdate = (newImage) => {
      setProfileImage(URL.createObjectURL(newImage)); // Convert file to a temporary URL
    };
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-14 lg:mr-22 xl:mr-52 pt-4 relative">
    {/* Profile Section */}
    <div className="flex flex-row justify-start gap-x-3 relative">
      <img src={profileImage} alt="Profile" className="w-[129.44px] h-[131px] rounded-md"/>
      <div className="flex flex-col gap-y-3 font-customBold">
        <span className="text-[22px]">Charlotte</span>
        <span className="text-sm text-[#757575]">Human Resources</span>
        <span className="text-sm text-[#757575]">charlotte99@gmail.com</span>
        <span onClick={()=>setUploadModal(true)} className="border cursor-pointer w-[91px] h-[28px] text-center pt-1.5 rounded-md text-[10px] text-black">
          Upload
        </span>
      </div>
  
      {/* Edit Button */}
      <span className="absolute top-40 right-0 " onClick={()=>setOpen(true)}>
        <span className="flex flex-row gap-x-1 items-center justify-center w-16 border rounded-full">
          <img className="w-4 h-4" src={pen} alt="" />
          <span className="font-customBold text-smallHead">Edit</span>
        </span>
      </span>
    </div>
  
    {/* Personal Information Section */}
    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-8 lg:gap-x-16 xl:gap-x-20 w-full ">
      <div className="flex flex-col gap-y-2 font-customBold lg:w-1/3">
        <p className="text-sm xlx:text-[16px] text-[#121212]">Personal information</p>
        <p className="text-smallHead text-customeGray2">
          This will be displayed on your profile
        </p>
      </div>
      <div className="flex flex-col gap-y-5 lg:w-2/3">
        {personalInfoInputs.map((input, index) => (
          <div key={index} className="flex border rounded-md overflow-hidden">
            <div className="bg-gray-100 flex text-xs sm:text-sm font-customBold text-[#130F26BA] items-center pl-7 w-2/4 text-center gap-x-3">
              {input.icon}
              <span>{input.label}:</span>
            </div>
            <input
              type="text"
              value={input.value}
              className="w-full text-sm text-[#121212] font-customBold3 px-3 py-2 focus:outline-none"
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  
    {/* Address Section */}
    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-8 lg:gap-x-16 xl:gap-x-20 w-full">
      <div className="flex flex-col gap-y-2 font-customBold lg:w-1/3">
        <p className="text-sm xlx:text-[16px] text-[#121212]">Address</p>
        <p className="text-smallHead text-customeGray2">
          This will be displayed on your profile
        </p>
      </div>
      <div className="flex flex-col gap-y-5 lg:w-2/3">
        {addressInputs.map((input, index) => (
          <div key={index} className="flex border rounded-md overflow-hidden">
            <div className="bg-gray-100 flex text-xs sm:text-sm font-customBold text-[#130F26BA] items-center pl-7 w-2/4 text-center gap-x-3">
              {input.icon}
              <span>{input.label}:</span>
            </div>
            <input
              type="text"
              value={input.value}
              className="w-full text-sm text-[#121212] font-customBold3 px-3 py-2 focus:outline-none"
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  
    {/* Buttons Section */}
    {open && (<div className="flex justify-end -my-5">
      <button
        type="button"
        className="px-10 text-sm transition duration-300 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-red-500 hover:text-white"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="ml-4 px-10 transition text-sm duration-300 py-2 bg-[#022213] text-white rounded-md hover:bg-[#72A10F]"
      >
        Save
      </button>
    </div>)}
    
  
    {/* Delete Account Section */}
    <div className="w-full sm:w-2/3 xl:w-1/3 pb-8 ">
      <p className="text-sm font-customBold text-[#1E1E1E]">Delete Account</p>
      <p className="text-smallHead text-customeGray2 my-2 md:my-4">
        Once you delete your account, all related information, including tasks,
        events, and projects, will be permanently lost and cannot be
        recovered. Please consider this action carefully before proceeding.
      </p>
      <button onClick={()=>setDeleteModal(true)} className="text-sm flex gap-x-2 items-center pt-1">
        <img src={trash} alt="" />
        <span className="font-customBold3 text-[#CC0000]">Delete my account</span>
      </button>
    </div>
    {uploadModal && <Upload closeModal={closeModal} updateProfileImage={handleProfileImageUpdate} /> }
    {deleteModal && <DeleteAccount closeModal={closeModal2}/> }

  </div>
  
  );
}

export default AccountSettings;
