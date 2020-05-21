import React from 'react';
// import { isDark } from '../../redux/actions/actions';
// import { useDispatch } from 'react-redux';
import './style.css';
export default function Toggle() {
  //   const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center w-full mb-24">
        <label for="toogleA" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className="hidden"
              // to change the state when click
              //   onClick={() => dispatch(isDark())}
            />
            <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="toggle__dot absolute w-6 h-6 bg-yellow-600 rounded-full shadow inset-y-0 left-0"></div>
          </div>
        </label>
      </div>
    </div>
  );
}
