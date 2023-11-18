import React from 'react'

export const Card = ({user}) => {    
  return (
    <div className="mx-3 mt-6 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
        <img
            className="rounded-t-lg"
            src={user.url}
            alt="Hollywood Sign on The Hill"
        />
        </a>
        <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            <strong>{user.title}</strong>
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {user.description}
        </p>
        </div>
    </div>
  )
}
