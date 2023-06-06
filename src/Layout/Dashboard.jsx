import { FaCalendarAlt, FaHome, FaShoppingCart, FaUser, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    // TODO : Load Data From The Server to have Dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();


    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>
                                Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additem"><FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUser></FaUser> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>
                                User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </NavLink></li>
                        </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                    <li></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;