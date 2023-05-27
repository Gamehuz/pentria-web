import { useState } from 'react'
import { statesList } from '@/util/state'

interface states {
  changeState(e: string): void;
  changeCity(e: string): void; 
}

function States({ changeState, changeCity }: states) {

  const [citites, setCitites] = useState<string[] | undefined>([])
  const [state, setState] = useState("")
  const states = statesList

  const updateCity = (e: any) => {
    const findCity = states.find(item => item.name === e.target.value)
    changeState(e.target.value)
    setCitites(findCity?.lgas)
  }

  const addCity = (e:any) => {
    changeCity(e.target.value)
  }


  return (
    <div className='lg:flex justify-between'>
      <div className='lg:w-[45%] block'>
        <label className="font-medium">
          State
        </label>
        <div>
        <select onChange={updateCity} className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'>

        <option defaultValue={''}>
        Select State
        </option>
        { states.map(state => 
        <option key={state.code} value={state.name}>
          {state.name}
        </option>
        )
        }
        </select>
        </div>
      </div>
      <div className='lg:w-[45%]'>
        <label className="font-medium">
          City
        </label>
        <div>
        <select onChange={addCity} className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'>

        <option defaultValue={''}>
        Select City
        </option>
        { citites?.map(city => 
        <option key={city} value={city}>
          {city}
        </option>
        )
        }
        </select>
        </div>
      </div>
    </div>
  )
}

export default States