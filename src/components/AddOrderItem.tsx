import { useState } from "react"

import { api } from "../utils/api";
import { createOrderInputSchema } from "~/types";


export function AddOrderItem() {
    const [name,setNewName] = useState('')
    const [contact,setNewContact] = useState('')
    const [address,setNewAddress] = useState('')
    const [orderCode,setNewOrderCode] = useState('')
    const {mutate} = api.order.createOrder.useMutation()
	return (
		<div className="mt-40 flex items-center justify-center">
			<form  className="flex gap-2" onSubmit={(e)=>{
                e.preventDefault()

                const result = createOrderInputSchema.safeParse({name, contact, address, orderCode})
                
                if(!result.success){
                    console.log("not vallid")
                }
                //create to order
                mutate({name, contact, address, orderCode});
            }}>
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Name"
					type="text" name="name" id="name"
                    value={name}
                    onChange={(e) => {
                        setNewName(e.target.value)
                    }}
				/>
                <input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="contact"
					type="text" name="contact" id="contact"
                    value={contact}
                    onChange={(e) => {
                        setNewContact(e.target.value)
                    }}	
				/>
                <input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="address"
					type="text" name="contact" id="contact"
                    value={address}
                    onChange={(e) => {
                        setNewAddress(e.target.value)
                    }}		
				/>
                <input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="orderCode"
					type="text" name="orderCode" id="orderCode"
                    value={orderCode}
                    onChange={(e) => {
                        setNewOrderCode(e.target.value)
                    }}		
				/>
				<button
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Create</button>
			</form>
		</div>
	)
}