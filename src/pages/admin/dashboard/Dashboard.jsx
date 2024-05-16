import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { fireDB } from '../../../fireabase/FirebaseConfig';

function Dashboard() {
    const context = useContext(myContext)
    const { mode, user, product,order} = context
    const numberOfUsers = user.length;
    const noOfProducts = product.length
    const numberOforders = order.length;
    console.log("Number of users:", numberOfUsers);
    console.log("Number of products:", noOfProducts);
    const users = ()=>{
        user.map((item,index)=>{
            const {name,uid,email,date} = item;
            console.log("name :", name)
            console.log("uid :", uid)
            console.log("email :", email)
            console.log("data :", date)
        })
    }
  return (
    <Layout>
        <section className="text-gray-600 body-font mt-10 mb-10">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                {/* <FaUserTie size={50} /> */}
                                <FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faBox} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{noOfProducts}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                
                                <FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faShoppingCart} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{numberOforders}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Orders</p>
                        </div>
                        {/* <button onClick={users}>Users</button> */}
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                                
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{user.length}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Users</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <DashboardTab/>
        </section>
    </Layout>
  )
}

export default Dashboard