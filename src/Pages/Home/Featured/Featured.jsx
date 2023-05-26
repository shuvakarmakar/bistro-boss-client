import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading="Check it Out"
                subHeading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get Some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa inventore explicabo quo a enim odit illum accusantium neque aliquid reprehenderit corrupti, error, at velit non aliquam dolorem! Non in unde commodi autem? Mollitia ullam impedit ad soluta, necessitatibus sed officiis placeat sit unde rem labore non illum vel hic!</p>
                    <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;