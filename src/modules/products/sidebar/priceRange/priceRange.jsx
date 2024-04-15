"use client"

import { numberFormat } from '@/lib/tools/utils';
import Image from 'next/image';
import { useState } from 'react';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const PriceRange = () => {

    const [value, setValue] = useState([100, 1000])

    const handleOnChange = (e) => {
        setValue(e)
    }

    return (
        <div>
            <div className="flex mb-4">
                <FaMoneyBillTransfer className="text-xl text-gray-500" />
                <h3 className="text-gray-500 mr-2">محدوده قیمت مورد نظر</h3>
            </div>
            <RangeSlider
                className="dual-range-slider"
                min={0}
                max={1000}
                value={value}
                step={2}
                orientation="horizontal"
                onChange={handleOnChange}
                onThumbDragStart={e => setMin(e)}
            />
            <div className="flex items-center justify-between mt-4">
                <div className="flex bg-green-100 text-emerald-500 px-3 py-1 rounded-lg">
                    <span className="ml-2">{numberFormat(0)}</span>
                    <Image
                        src="/media/icons/svg/toman.svg"
                        width={18}
                        height={18}
                        alt="toman"
                    />
                </div>
                <div className="flex items-center bg-green-100 text-emerald-500 px-3 py-1 rounded-lg">
                    <span className="ml-2">{numberFormat(30000000)}</span>
                    <Image
                        src="/media/icons/svg/toman.svg"
                        width={18}
                        height={18}
                        alt="toman"
                    />
                </div>
            </div>
        </div>
    )

}

export default PriceRange;