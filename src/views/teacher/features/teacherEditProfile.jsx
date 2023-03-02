import React, { useState } from "react";
import teacherImg from "assets/img/tutor.png"

// import reviewImg from "assets/img/tutor.png"
import { Button } from "shared/components/button/index"
// import { TagGenarate } from "shared/components/tagGenarator";



const TeacherEditProfile = () => {
  const [name, setName] = useState("Sakib Ahmed")
  const [tag, setTag] = useState(" ")
  const [edit, setEdit] = useState(true)
  const [Save, setSave] = useState(false)
console.log(name)



    const divisions = ['DHAKA','CHITTAGONG','BARISAL','RAJSHAHI','KHULNA','RANGPUR','SYLHET','MYMENSINGH']
    
    

  return (
    <div className="grid grid-cols-3 gap-2 p-2 overflow-hidden md:grid-cols-1 lg:grid-cols-3  sm:grid-cols-1 xs:grid-cols-1   justify-center ">


    {/* .................................Left side */}
    <div className=" col-span-1 min-w-xs flex flex-col items-center px-2 ">
    
      {/* PORFILE NAME AND UNIVERSITY */}
        <img className="w-32 min-h-min z-10 -mb-8 rounded-sm "  src={teacherImg} alt="" />
      <div className="min-w-full  bg-bgAccent rounded-2xl  px-4 flex flex-col justify-center ">
        
          <input value={name} placeholder="Your Name" readOnly className=" w-full border rounded-lg outline-none  mt-10 font-semibold  text-muted  px-2 mb-2"/>
        <input defaultValue="Bangladesh University of Professionals"  readOnly className="w-full border  outline-none rounded-lg px-2 mb-2 text-muted"/>
        

        {/* HOURLY RATE */}
        <div className="grid grid-cols-3 justify-between font-bold pb-2 w-full  ">
          <h2 className="col-span-2 bg-inputBg px-5 py-1 font-bold text-muted rounded-lg w-fit">Hourly Rate </h2>
          <span className="col-span-1 w-full"><input className="w-1/2 text-right outline-primaryDark rounded-lg px-1" defaultValue="200" type="text" /> BDT</span> </div>
        <div className="flex flex-row justify-between font-bold pb-2"><h2 className="bg-inputBg px-5 py-1 font-bold text-muted rounded-lg">Student Reffer</h2> <span>150 </span> </div>
        
        <div className="flex flex-row justify-between font-bold pb-2 ">
          <h2 className="bg-inputBg px-5 py-1 font-bold text-muted rounded-lg">Tutions Complete</h2> <span>150 </span> 
        </div>

        {/* ABOUT */}
        <div>
          <h1 className="text-muted">Aboute me </h1>
          <textarea className="outline-primaryDark p-4 w-full text-muted"  defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea necessitatibus sed aspernatur mollitia, voluptatem iste?" name="about" id=""  rows="5">
            
          </textarea>
       </div>
         
       
        <hr />
        {/* ....SUBJEECT.... */}
        <div className="mt-4 mb-4 ">
          {/* <TagGenarate className="border outline-blue-500 w-full primary rounded-lg" label="Subject Willing to Teach" handleAddition={ tag} onChange={(e)=>setTag(e.target.value)} >

          </TagGenarate> */}
          {/* <span className="pb-2 w-full bg-slate-300 px-5 py-1 font-bold text-muted rounded-lg">Math</span>
          <span className="pb-2 w-full bg-pink-200 px-5 py-1 font-bold text-muted rounded-lg">Bangla</span>
          <span className="pb-2 w-full bg-slate-200 px-5 py-1 font-bold text-muted rounded-lg">Physics</span>
          <span className="pb-2 w-full bg-slate-200 px-5 py-1 font-bold text-muted rounded-lg">English</span>
          <span className="pb-2 w-full bg-yellow-200 px-5 py-1 font-bold text-muted rounded-lg">Bangla</span>
          <span className="pb-2 w-full bg-green-200 px-5 py-1 font-bold text-muted rounded-lg">Physics</span>
          <span className="pb-2 w-full bg-blue-100 px-5 py-1 font-bold text-muted rounded-lg">English</span> */}
          
        </div>
       
      </div>
         {/*..  AVAILABILITY ..*/}
        <div className="min-w-full bg-bgAccent  mt-2 p-2 rounded-2xl  ">
         <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Availability</p>
        <div className="grid gap-2 grid-cols-2 grid-flow-row-dense mt-2 ">
          <span className="pb-2 border  border-primaryDark  px-5 py-1 font-bold text-black rounded-lg">12 PM</span>
          <span className="pb-2 border  border-primaryDark  px-5 py-1 font-bold text-black rounded-lg">10 AM</span>
          <span className="pb-2 border  border-primaryDark px-5 py-1 font-bold text-black rounded-lg">After 05 PM</span>
           </div>

        </div>
    </div>



{/*........................................... Right SIde..................
............................................................................. */}
    <div className="overflow-hidden max-h-screen overflow-y-auto  col-span-2">

      <div className=" grid grid-cols-1 gap-y-8">


        {/* BASIC INFO SEGMENT */}

         <div className="min-w-full bg-bgAccent mt-2 p-4 rounded-2xl  ">
          
             <div className="flex justify-between">
             <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Basic Information</p>
        
              {edit ? <Button onClick={() => setEdit(false)} label="EDIT" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center"></Button> :
              <Button onClick={() =>{
                setEdit(true)
                setSave(true)
              }} label="SAVE" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center">
              </Button>}
             </div>
              
       
           <div className="grid gap-2 grid-cols-3 xs:grid-cols-1   grid-flow-row-dense mt-2 ">

            {/* Name */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Name</h1>
              {edit ? <input readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted" defaultValue={name} /> :
                <input onChange={(e)=>setName(e.target.value)} className="w-full outline-primaryDark py-2  px-5  font-bold  rounded-lg text-muted" defaultValue="Sakib Abdullah" />}
            </div>
              
            {/* email */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Email</h1>
             <input readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted"  defaultValue="sakibabdullah@gmail.com"/>
            </div>
           {/* contact number */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted"> Contact Number</h1>
              {edit? <input readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted"  defaultValue="01757777771"/> :<input className="w-full outline-primaryDark py-2  px-5  font-bold  rounded-lg text-muted"  defaultValue="274, sher-e-bangla road, Dhaka- 1209"/>}
            </div>
                {/* division village */}
            <div className="grid gap-2 grid-cols-2  rounded-lg">
              <div className="border rounded-xl"><h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Division</h1>
                {
                  !edit ? <select className="w-full outline-none py-2   px-5 text-sm font-semibold  rounded-lg text-muted"  >
                 
                    {divisions.map((division, index) => {
                      return <option key={index}>{ division}</option>
                  })} 
                  </select>
                    :
                  <input readOnly className="w-full outline-none    px-5  font-semibold  rounded-lg text-muted"  defaultValue="DHAKA"/>
                }
              </div>

              <div className="border rounded-xl"><h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Village</h1>
                {edit? <input readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted"  defaultValue="Sokal dupur"/> :<input className="w-full outline-primaryDark py-2   px-5  font-bold  rounded-lg text-muted"  defaultValue="Sokal dupur"/>}
              </div>
              
            
            </div>

           
             {/* Preferred medium */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Preferred Medium</h1>
              {
                  !edit ? <select className="w-full outline-none py-2  px-5 text-sm font-semibold  rounded-lg text-muted"  >
                 
                    {divisions.map((division, index) => {
                      return <option key={index}>{ division}</option>
                  })} 
                  </select>
                    :
                  <input readOnly className="w-full outline-none    px-5  font-semibold  rounded-lg text-muted"  defaultValue="DHAKA"/>
                }
            </div>

            {/* Preferred Class */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Preferred Class</h1>
              {
                  !edit ? <select className="w-full outline-none py-2  px-5 text-sm font-semibold  rounded-lg text-muted"  >
                 
                    {divisions.map((division, index) => {
                      return <option key={index}>{ division}</option>
                  })} 
                  </select>
                    :
                  <input readOnly className="w-full outline-none    px-5  font-semibold  rounded-lg text-muted"  defaultValue="DHAKA"/>
                }
            </div>
             
          
         </div>
          </div>

          {/* EDUCATION SEGMENT */}

         <div className="min-w-full bg-bgAccent mt-2 p-4 rounded-2xl  ">
         <div className="flex justify-between">
             <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Education</p>
        
            {edit ? <Button onClick={() => setEdit(false)} label="EDIT" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center"></Button> :
              <Button onClick={() =>{
                setEdit(true)
                setSave(true)
              }} label="SAVE" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center">
              </Button>}
          </div>

          <div className="grid gap-2 grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 grid-flow-row-dense mt-2 ">
          {/* current instituition */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Current Institution</h1>
              {edit ? <input readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted" defaultValue="North South" /> :
                <input onChange={(e)=>setName(e.target.value)} className="w-full outline-primaryDark py-2   px-5  font-bold  rounded-lg text-muted" defaultValue="North South" />}
            </div>
            
          <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Previous Institution</h1>
              {edit ? <input readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted" defaultValue="North South" /> :
                <input onChange={(e)=>setName(e.target.value)} className="w-full outline-primaryDark py-2  px-5  font-bold  rounded-lg text-muted" defaultValue="North South" />}
            </div>
            
         <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Department</h1>
              {edit ? <input readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted" defaultValue="North South" /> :
                <input onChange={(e)=>setName(e.target.value)} className="w-full outline-primaryDark py-2  px-5  font-bold  rounded-lg text-muted" defaultValue="North South" />}
            </div>
            
          <div className="border rounded-xl"><h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Medium</h1>
                {
                  !edit ? <select className="w-full outline-none py-2  px-5 text-sm font-semibold  rounded-lg text-muted"  >
                 
                    {divisions.map((division, index) => {
                      return <option key={index} className="py-2">{ division}</option>
                  })} 
                  </select>
                    :
                  <input readOnly className="w-full outline-none    px-5  font-semibold  rounded-lg text-muted"  defaultValue="DHAKA"/>
                }
              </div>
          
           </div>
            </div>

            {/* ACHIVMENT SEGEMNT */}

           <div className="min-w-full bg-bgAccent mt-2 p-4 rounded-2xl  ">
          <div className="flex justify-between xs:justify-around sm:justify-around md:justify-around lg:justify-around">
             <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Achievements</p>
        
            {edit ? <Button onClick={() => setEdit(false)} label="EDIT" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center"></Button> :
              <Button onClick={() =>{
                setEdit(true)
                setSave(true)
              }} label="SAVE" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center">
              </Button>}
           </div>
          <div className="grid gap-2 grid-cols-1 grid-flow-row-dense mt-2 ">
        
            <div>
              {edit ? <textarea readOnly className="w-full outline-none   px-5   rounded-lg text-muted" defaultValue="tell us your Achivments" /> :
              <textarea  className="w-full outline-none   px-5  font-thin  rounded-lg text-muted" defaultValue="" />}
            </div>
           </div>

            </div>




        {/* ......ACCOUNT DETAILS..... */}
    
          <div className="min-w-full bg-bgAccent mt-2 p-4 rounded-2xl  ">
         <div className="flex justify-between">
          <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Account details</p>
          <p className="py-1 mt-4  inline px-5 xs:hidden  font-medium text-muted rounded-md text-center">Change Password</p>
          
        
            {edit ? <Button onClick={() => setEdit(false)} label="EDIT" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center"></Button> :
              <Button onClick={() =>{
                setEdit(true)
                setSave(true)
              }} label="SAVE" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center">
              </Button>}
          </div>

        <div className="grid gap-2 grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 grid-flow-row-dense mt-2 ">
          {/* Current password */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Current password</h1>
              {edit ? <input  readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted" /> :
                <input   className="w-full outline-primaryDark py-2  px-5  font-bold  rounded-lg text-muted" />}
          </div>
          {/*  */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">New password</h1>
              {edit ? <input  readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted" /> :
                <input   className="w-full outline-primaryDark py-2  px-5  font-bold  rounded-lg text-muted" />}
            </div>
            
       
          
           </div>
        </div>

      
        {/* Payment method */}

        <div className="min-w-full bg-bgAccent mt-2 p-4 rounded-2xl  ">
         <div className="flex justify-between">
          <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Payment Method</p>
          
          
        
            {edit ? <Button onClick={() => setEdit(false)} label="EDIT" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center"></Button> :
              <Button onClick={() =>{
                setEdit(true)
                setSave(true)
              }} label="SAVE" className="py-1 mt-4 bg-inputBg  inline px-5   text-primaryDark rounded-md text-center">
              </Button>}
          </div>

        <div className="grid gap-2 grid-cols-2 xs:grid-cols-1  sm:grid-cols-2 grid-flow-row-dense mt-2 ">
          {/* Current password */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Select method</h1>
              {edit ? <input  readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted" defaultValue="bKash" /> :
              <select className="w-full outline-primaryDark py-2  px-5  font-bold  rounded-lg text-muted" >
              <option value="">bKash</option>
              <option value="">Nagad</option>
              <option value="">Rocket</option>
              
              </select>}
          </div>
          {/*  */}
            <div className="border rounded-lg"> <h1 className="   px-5 py-1 font-thin  rounded-lg text-muted">Select opeartor</h1>
              {edit ? <input  readOnly  className="w-full outline-none   px-5  font-bold  rounded-lg text-muted" /> :
                <input   className="w-full outline-primaryDark py-2  px-5  font-bold  rounded-lg text-muted" />}
            </div>
            
       
          
           </div>
        </div>


      </div>
      
      


    </div>

  </div>
  )
};

export default TeacherEditProfile;
