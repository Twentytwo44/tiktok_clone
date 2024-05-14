import React from "react";
import { IoIosMusicalNotes } from "react-icons/io";
export const Music = ({ Musicname }) => {
  return (
    <div className="flex items-center w-[350px] xl:w-[470px] md:w-[600px] lg:w-[700px] justify-between">
        <div className="flex gap-3 ">
            <IoIosMusicalNotes className='text-white my-auto'/><span className="text-white "><marquee>{Musicname}</marquee></span>

        </div>
      
      <div className="animate-spin">
        <svg
          fill="#ffffff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 487.5 487.5"
        >
          <g>
            <g>
              <path
                d="M243.75,487.5c134.621,0,243.75-109.132,243.75-243.75S378.371,0,243.75,0S0,109.132,0,243.75S109.129,487.5,243.75,487.5
      z M315.176,41.217c35.884,12.653,67.396,34.574,91.661,62.89l-89.763,91.688c-8.848-13.498-21.32-24.405-36.034-31.336
      L315.176,41.217z M280.023,31.279l-10.271,127.9c-4.744-1.446-9.598-2.487-14.497-3.114L238.581,28.324
      C252.46,27.973,266.344,28.964,280.023,31.279z M243.75,203.579c22.186,0,40.171,17.985,40.171,40.171
      c0,22.186-17.985,40.171-40.171,40.171c-22.186,0-40.171-17.985-40.171-40.171C203.579,221.564,221.564,203.579,243.75,203.579z
       M188.425,311.702c12.621,10.263,27.854,16.778,43.851,18.909l-43.769,120.613c-36.029-9.609-69.435-28.52-96.381-55.384
      L188.425,311.702z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};