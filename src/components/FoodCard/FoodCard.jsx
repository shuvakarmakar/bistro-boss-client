import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {menuItemId : _id, image, name, price, email: user.email}
            fetch("http://localhost:5000/carts", {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added To Cart Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Order The Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from : location}})
                }
            })
        }
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">{price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 border-orange-400 mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;