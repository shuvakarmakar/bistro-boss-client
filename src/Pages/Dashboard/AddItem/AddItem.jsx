import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
console.log(img_hosting_token);

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                    .then(data =>{
                        console.log('After posting New Item', data.data);
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Menu Item Addeded Successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    } )
                }
            })

    }
    // console.log(errors);
    // console.log(img_hosting_token);
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's New" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex gap-3 my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category</span>

                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Deshi</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Type here"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"
                        placeholder="Bio"
                        {...register("recipe", { required: true })}
                    ></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full " />
                </div>
                <input type="submit" className="btn btn-sm mt-4" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;