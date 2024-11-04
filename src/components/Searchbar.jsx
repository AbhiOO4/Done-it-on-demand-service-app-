import React from 'react'
import search from '../images/search.png'

function Searchbar() {
  return (
    <div className="mb-3 xl:w-96 m-4 sticky top-2">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch h-11">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded-xl border border-solid border-neutral-300/30 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />
          </div>
      </div>
  )
}

export default Searchbar