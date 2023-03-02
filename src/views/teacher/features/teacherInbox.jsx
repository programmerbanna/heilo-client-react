import React,{useRef,useState} from 'react'
import db from 'assets/img/tutor.png'
import { Button } from 'shared/components/button';
import ScrollToBottom from 'react-scroll-to-bottom';


export const TeacherInbox = () => {
  const dummy = useRef();
  const [formValue, setFormValue] = useState('');
  const indexs = [1,2,3,4]

  const sendMessage = async (e) => {
    e.preventDefault();

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

    return (
        <div className='grid gap-4 grid-cols-3 xs:grid-row- overflow-hidden p-2'>
          {/* LEFT Side */}

            <div className='col-span-1 h-screen xs:hidden sm:hidden  md:hidden lg:block' >
                {/* Search */}
                <div className='mt-3'>
                    <input placeholder='Search conversation' className='px-2 outline-primaryDark py-2 rounded-3xl bg-inputBg w-full mb-2' type="text" />
                    <h2>All Messages (12)</h2>
          </div>
          
          
          <div className='overflow-hidden overflow-y-auto'>
             {/* conversation */}
               { indexs.map((index)=> {return <div key={index} className='border-l-4 m-1 border-primaryDark grid grid-cols-3 w-full gap-x-8 bg-inputBg py-2 '>
            <div className=''><img className='w-1/2 h-auto mx-auto' src={db} alt="" /></div>
            <div>
              <h1 className=' text-primaryDark font-semibold'>Rahul tusar</h1>  
             <span className=' p-1  bg-amber-400 border text-white rounded-md text-xs '>active</span>
            </div>
                    <div><p className='text-muted'>hi, how are you  <span className='text-primaryDark' > - 06.00 pm</span></p>
                    </div>
                </div>}) }
         </div>
        </div>
        



      
        <div className="col-span-2 xs:col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 ">
          <div className='  justify-center items-center   h-screen  relative   w-full'>
            <h1>This is Chat area</h1>
        {/*............ chat content................ */}
            <ScrollToBottom className='w-full h-screen bg-inputBg' mode='bottom' initialScrollBehavior='smooth'>
              <h1>hlw guys</h1>
              <h1>hlw guys</h1>
              <h1>hlw guys</h1>
              <h1>hlw guys</h1>
               </ScrollToBottom>

            
            <div className='flex gap-4 w-full   absolute  bottom-0 right-0 p-2'>
              <button className=' border-2 bg-primaryLight rounded-2xl px-1 text-white '>attachment</button>
              <input  type="text" className='w-full outline-primaryDark outline-2 border-2 p-2 rounded-3xl'  />
              <button className='bg-primaryDark text-white p-2 rounded-md'>SEND</button>
              {/* <Button label="SEND" className="shadow-lg hover:bg-primaryDark  bg-primaryLight  rounded-lg text-white active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out mb-4"></Button> */}
            </div>
          </div>
        </div>
    </div>
  )
}
