"use client"

import SubsTableItem from "@/Components/AdminComponents/SubsTableItem"
import axios from "axios"
import { useEffect, useState } from "react"

const page = () => {
    const [emails, setEmail] = useState([])
    const fetchEmail = async () => {
        const response = await axios.get('/api/email');
        setEmail(response.data.emails);
    }
    useEffect(() => {
        fetchEmail();
    }, [])
    const deleEmail = async (mongoId) => {
        const response = await axios.delete('/api/email', {
            params: {
                id: mongoId
            }
        })
        fetchEmail();
        console.log(response.data.msg);
    }

    return (
        <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
            <h1>All Subscription</h1>
            <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
                <table className="w-full text-sm text-gray-500">
                    <thead className="text-xs text-left text-gray-700 border-b">
                        <tr>
                            <th scope="col" className="px-6 py-3 ">Email Subscription</th>
                            <th scope="col" className="px-6 py-3 hidden sm:block">Date</th>
                            <th scope="col" className="px-6 py-3 ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emails.map((items, index) => {
                                return <SubsTableItem deleEmail={deleEmail} key={index} mongoId={items._id} email={items.email} date={items.date} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page