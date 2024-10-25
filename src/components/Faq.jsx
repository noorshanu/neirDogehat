import React from 'react'
import Accordion from './Accordion'

function Faq() {
  return (
   <section>
    <div className=' container-wrapper my-4'>
        <div className=' bg-white border-4 border-black rounded-3xl p-4'>

            <h1 className=' text-3xl sm:text-7xl font-dream font-bold text-center'>FAQ $NEIROH</h1>

            <div className=' flex justify-around items-center flex-col sm:flex-row'>

              <div className=' border-4 rounded-3xl box-s2 border-black p-4'>

                

              </div>

            </div>

            <Accordion/>

        </div>

    </div>
   </section>
  )
}

export default Faq