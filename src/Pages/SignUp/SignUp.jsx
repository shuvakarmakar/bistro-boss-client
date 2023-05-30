import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser= result.loggedUser;
            console.log(loggedUser);
        })
    }
    console.log(watch("example"));

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Signup</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-700">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.name && <span className="text-red-700">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*])/
                                })} name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-700">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-700">Password Must be 6 Charecters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-700">Password Must have One UpperCase one LowerCase and One Special Charecter and One Number</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Sign Up" />
                            </div>
                        </form>
                        <p><small>Already Have an Account?<Link to="/login">Please Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;