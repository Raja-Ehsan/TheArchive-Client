import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heading from '../components/heading'
import Nav from '../components/nav'
import "../css/admin.css"
import { setOrders } from '../redux/actions/productActions'
import { setAllUsers } from '../redux/actions/userActions'

export const AdminHome = () => {
    
    const allOrders = useSelector((state) => state.reducers.orders);
    const allUsers=useSelector((state)=>state.reducers.allUsers);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('http://localhost:1000/order/get')
            .then(res => res.json())
            .then(res => {
                dispatch(setOrders(res))
            })
    }, [])
    useEffect(() => {
        fetch('http://localhost:1000/user/getAllUser')
            .then(res => res.json())
            .then(res => {
                dispatch(setAllUsers(res))
            })
    }, [])

    return (
        <div className='page-container'>
            <Nav admin={true} />
            <div className="admin-dash">
                <Heading item='Dashboard' />
                <div className="dash-items">
                    <div className="item">
                        <div className="item-inner1">
                            <h1>${Math.ceil(allOrders?.orders.reduce((accumulator,object)=>{
                                return accumulator+object.total
                            },0))}</h1>
                        </div>
                        <a href="/admin">
                            <div className="item-inner2"><h3>Total Sellings</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <div className="item-inner1">
                            <h1>{allOrders?.orders.filter((item)=>item.state==='Completed').length}</h1>
                        </div>
                        <a href="/admin/order?order-state=Completed">
                            <div className="item-inner2"><h3>Completed Orders</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <div className="item-inner1">
                            <h1>{allOrders?.orders.filter((item)=>item.state==='Approved').length}</h1>
                        </div>
                        <a href="/admin/order?order-state=Approved">
                            <div className="item-inner2"><h3>Orders Approved</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <div className="item-inner1">
                            <h1>{allOrders?.orders.filter((item)=>item.state==='Pending').length}</h1>
                        </div>
                        <a href="/admin/order?order-state=Pending">
                            <div className="item-inner2">
                                <h3>Pending Orders</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <div className="item-inner1">
                            <h1>{allUsers?.filter((item)=>item.userRole==='Normal').length}</h1>
                        </div>
                        <a href="/admin/users?keyword=Normal">
                            <div className="item-inner2">
                                <h3>Normal Users</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <div className="item-inner1">
                            <h1>{allUsers?.filter((item)=>item.userRole==='Admin').length}</h1>
                        </div>
                        <a href="/admin/users?keyword=Admin">
                            <div className="item-inner2">
                                <h3>Admin Users</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <div className="item-inner1">
                            <h1>{allUsers?.length}</h1>
                        </div>
                        <a href="/admin/users">
                            <div className="item-inner2">
                                <h3>Total Accounts</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
