"use client"

import { Switch } from "@headlessui/react"
import { useState } from "react";

const InStockFilter = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex items-center justify-between">
            <div className="text-gray-600">فقط محصولات موجود</div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-violet-500' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${enabled ? 'translate-x-[-.25rem]' : 'translate-x-[-1.50rem]'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
        </div>
    )

}

export default InStockFilter;