"use client";

import { Button } from "@/components/ui/button";


export default function Home() {


  return(
    <>
        <section className="w-full md:w-[70%] py-25 px-2 mx-auto ">
        <form>      
          <div className="mb-3">
            <input type="text" className="w-full px-3 py-2 border rounded-md" 
            placeholder="Enter Title" />
          </div>
          <div className="mb-3">
              <textarea className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black resize-none" 
              placeholder="give a small Description" 
              rows={10} cols={30}/>
          </div>
          <Button className="transition duration-500 ease-in-out hover:bg-blue-500 active:bg-blue-700 cursor-pointer">Add ToDo</Button>
        </form>

        
        </section>

    </>
  )
}
