import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CartCard } from '../components/cartCard'
import { changeOrderState } from '../redux/actions/productActions'
export const OrderCard = (props) => {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false)
    function approve(){
            fetch(`http://localhost:1000/order/approveOrder/${props._id}`).then(res=>res.json())
            .then(res=>{
            dispatch(changeOrderState({id:props._id,state:'Approved'}))
            })
    }
    function complete(){
        fetch(`http://localhost:1000/order/completed/${props._id}`).then(res=>res.json())
        .then(res=>{
        dispatch(changeOrderState({id:props._id,state:'Completed'}))
        })     
    }
    return (
        <>
            <div className="order-item" >
                <div clas>
                    <h1>Order No {props.number+1  }.</h1>
                    <h3>Total:<span>${props.total}</span> </h3>
                </div>
                <div>
                    <p>
                        <span> From </span>: {props.User.name} <br />
                        <span>Email</span> : {props.User.email} <br />
                        <span>Address1 </span>: {props.User.address1} <br />
                        <span>Address2</span> : {props.User.address2} <br />
                        <h4 onClick={()=>{setShow(!show)}}>show items</h4>
                    </p>
                    {props.state==='Pending'?<button onClick={approve} style={{ width: '150px' }}>
                        Approve Order
                    </button>:<></>
                    }
                    {props.state==='Approved'?<button onClick={complete} style={{ width: '150px' }}>
                        Mark as Completed
                    </button>:<></>
                    }
                </div>
            </div>
            {
                show ?
                    <div className='order-item-allorders' >
                        {props.products.map((item) => {
                            return (
                                <>
                                    <CartCard admin={true} {...item} key={item._id} />
                                    <hr style={{ width: '90%' }} />
                                </>
                            )
                        })}
                    </div>
                    : <>
                    </>
            }
        </>
    )
}
