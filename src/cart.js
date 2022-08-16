import Table from 'react-bootstrap/Table';
import {  useDispatch, useSelector } from "react-redux";
import { changeCount } from "./store.js";
function CartPage() {
    let SavedItem = useSelector((state)=>{return state.SavedItem});
    let dispatch = useDispatch()
    // useSelcetor는 reducer 집합 덩어리 
    // reduer 중에 각 state를 가져 올수 있음 
    //let state  = useSelector((state) => {return state});
    return(
        <>
            <section>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Name</th>
                    <th>count</th>
                    </tr>
                </thead>
                {
                SavedItem.map((a,i)=>(
                    <tbody>
                        <tr>
                            <td>{i}</td>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>
                                {a.count}
                                <button onClick={()=>{
                                    dispatch(changeCount(i))
                                }}
                                >+</button>
                            </td>
                        </tr>
                    </tbody>
                ))
            }
            </Table>
            </section>
        </>
    );
}

export default CartPage