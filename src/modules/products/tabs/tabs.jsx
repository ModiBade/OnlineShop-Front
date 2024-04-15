"use client"

import { Tab } from "@headlessui/react"

const ProductTabs = () => {

    return (
        <Tab.Group>
            <Tab.List className="border-b border-gray-100">
                <Tab as="span">
                    {({ selected }) => (
                        <button
                            className={`transition ${selected
                                    ? `bg-green-100 text-emerald-500`
                                    : `bg-slate-100 text-slate-500`
                                } px-4 py-1 text-sm ml-2 rounded-t-lg focus:outline-0`}
                        >
                            توضیحات محصول
                        </button>
                    )}
                </Tab>
                <Tab as="span">
                    {({ selected }) => (
                        <button
                            className={`transition ${selected
                                    ? `bg-green-100 text-emerald-500`
                                    : `bg-slate-100 text-slate-500`
                                } px-4 py-1 text-sm ml-2 rounded-t-lg focus:outline-0`}
                        >
                            مشخصات فنی
                        </button>
                    )}
                </Tab>
                <Tab as="span">
                    {({ selected }) => (
                        <button
                            className={`transition ${selected
                                    ? `bg-green-100 text-emerald-500`
                                    : `bg-slate-100 text-slate-500`
                                } px-4 py-1 text-sm ml-2 rounded-t-lg focus:outline-0`}
                        >
                            دیدگاه ها
                        </button>
                    )}
                </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
                <Tab.Panel></Tab.Panel>
                <Tab.Panel></Tab.Panel>
                <Tab.Panel></Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )

}

export default ProductTabs