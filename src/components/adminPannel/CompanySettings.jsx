import React,{useState} from "react";
import profile from "../../assets/company.png";
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
    value: "Guaranty Trust Bank",
  },
  {
    label: "Company website link",
    value: "gtbank",
  },
  
];

const addressInputs = [
  {
    label: "twitter",
    value: "gtbank",
  },
  {
    label: "facebook",
    value: "gtbank",
  },
  {
    label: "linkedin",
    value: "gtbank",
  },
  {
    label: "untitledui",
    value: "gtbank",
  },
];

function CompanySettings() {
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
      <div className="flex flex-col gap-y-2 font-customBold">
        <span className="text-[22px]">Charlotte</span>
        <span className="text-sm text-[#0F73FF]">guarantytrustbank.com</span>
        <span onClick={()=>setUploadModal(true)} className="border cursor-pointer w-[91px] h-[28px] text-center pt-1.5 mt-2 rounded-md text-[10px] text-black">
          Upload
        </span>
      </div>
  
      {/* Edit Button */}
      <span className="absolute top-36 mt-3 right-0 " onClick={()=>setOpen(true)}>
        <span className="flex flex-row gap-x-1 items-center justify-center w-16 border rounded-full">
          <img className="w-4 h-4" src={pen} alt="" />
          <span className="font-customBold text-smallHead">Edit</span>
        </span>
      </span>
    </div>
  
    {/* Personal Information Section */}
    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-8 lg:gap-x-16 xl:gap-x-20 w-full ">
      <div className="flex flex-col gap-y-2 font-customBold lg:w-1/3">
        <p className="text-sm xlx:text-[16px] text-[#121212]">Public profile </p>
        <p className="text-smallHead text-customeGray2">
        This will be displayed on your profile 
        </p>
      </div>
      <div className="flex flex-col gap-y-5 lg:w-2/3">
        {personalInfoInputs.map((input, index) => (
          <div key={index} className="flex border rounded-md overflow-hidden">
            {index!==0 &&   <div className="bg-gray-100 flex text-xs sm:text-sm font-customBold text-[#130F26BA] items-center pl-5 w-2/4 text-center gap-x-3">
            
              <span>{input.label}</span>
            </div>}
         
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
        <p className="text-sm xlx:text-[16px] text-[#121212]">Social profiles</p>
        <p className="text-smallHead text-customeGray2">
        Add your logo to reports and emails.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 lg:w-2/3">
        {addressInputs.map((input, index) => (
          <div key={index} className="flex border rounded-md overflow-hidden">
            <div className="bg-gray-100 flex text-xs sm:text-sm font-customBold text-[#130F26BA] items-center pl-7 w-2/4 text-center gap-x-3">
             
              <span>{input.label}</span>
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
    {open && (<div className="flex justify-end -my-5 mb-8">
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
  
    {uploadModal && <Upload closeModal={closeModal} updateProfileImage={handleProfileImageUpdate} /> }
    {deleteModal && <DeleteAccount closeModal={closeModal2}/> }

  </div>
  
  );
}

export default CompanySettings;
