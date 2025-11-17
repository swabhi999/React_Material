import React from 'react'

const Card = (props) => {
  return (
    <div> 
        <a
        href={props.elem.url}
            target="blank"
            className="flex flex-col gap-2 items-center p-3 bg-gray-800 rounded-lg"
          >
            <div className="h-40 w-44 bg-white rounded-2xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
               
              />
            </div>
            <h1 className="font-bold text-lg">{props.elem.author}</h1>
          </a>
    </div>
  )
}

export default Card