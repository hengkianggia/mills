import Div from '@/components/helper/Div'
import React from 'react'

const FilterListProductModal = () => {
  return (
    <Div flex column full className="gap-5">
      <p className="text-lg font-semibold">Tentukan range harga</p>
      <Div className='space-y-2'>
        <input
          type="range"
          min={0}
          max={1000000}
          defaultValue={10.0}
          onChange={(e) => console.log(e.target.value)}
          class="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
      [&::-webkit-slider-thumb]:w-2.5
      [&::-webkit-slider-thumb]:h-2.5
      [&::-webkit-slider-thumb]:-mt-0.5
      [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:bg-white
      [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
      [&::-webkit-slider-thumb]:rounded-full
      [&::-webkit-slider-thumb]:transition-all
      [&::-webkit-slider-thumb]:duration-150
      [&::-webkit-slider-thumb]:ease-in-out

      [&::-moz-range-thumb]:w-2.5
      [&::-moz-range-thumb]:h-2.5
      [&::-moz-range-thumb]:appearance-none
      [&::-moz-range-thumb]:bg-white
      [&::-moz-range-thumb]:border-4
      [&::-moz-range-thumb]:border-yellow-me
      [&::-moz-range-thumb]:rounded-full
      [&::-moz-range-thumb]:transition-all
      [&::-moz-range-thumb]:duration-150
      [&::-moz-range-thumb]:ease-in-out

      [&::-webkit-slider-runnable-track]:w-full
      [&::-webkit-slider-runnable-track]:h-2
      [&::-webkit-slider-runnable-track]:bg-gray-100
      [&::-webkit-slider-runnable-track]:rounded-full

      [&::-moz-range-track]:w-full
      [&::-moz-range-track]:h-2
      [&::-moz-range-track]:bg-gray-700
      [&::-moz-range-track]:rounded-full"
          id="basic-range-slider-usage"
        ></input>
        <Div flex full between itemsCenter className='text-xs'>
          <p>rendah</p>
          <p>tinggi</p>
        </Div>
      </Div>

      <Div flex column gap='3'>
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
        <Checkbox title='Terbaru' />
      </Div>
    </Div>
  );
}

export default FilterListProductModal

export const Checkbox = ({title}) => {
  return (
    <div class="flex">
      <input
        type="checkbox"
        class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        id="hs-checked-checkbox"
      />
      <label
        for="hs-checked-checkbox"
        class="text-gray-800 ms-3"
      >
        {title}
      </label>
    </div>
  );
}