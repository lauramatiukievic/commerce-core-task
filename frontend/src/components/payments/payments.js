import { useForm } from "react-hook-form";
import NortonSecure from '../gallery/NortonSecure.png'
import VeriSign from '../gallery/VeriSign.png'
import McAfee from '../gallery/McAfee.png'
import Comodo from '../gallery/Comodo.png'
import "./payments.scss";
import { toast } from 'react-toastify';
import ApiUtils from "../../lib/api-utils";

const Payments = ({ countries, regions }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            country: "",
            region: "",
        }
    });

    const onSubmit = async (data) => {
        try {
            ApiUtils.submitOrder(data);
            reset()
            toast.success('Order completed successfully!');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Order submission failed.')
        }
    };
    const logos = [NortonSecure, VeriSign, McAfee, Comodo]

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="payment-shipping">
                <div className="custom-info">
                    <h2 className="customer-title">Customer Information</h2>
                    <span className="required-info">Fields marked as (*) are required.</span>
                    <div className="customer-info">
                        <div className="form-field">
                            <input {...register("name", { required: true })} placeholder="First name*" type="text"></input>
                            {errors.name && <span className="error-message">This field is required!</span>}
                        </div>
                        <div className="form-field">
                            <input {...register("lastName", { required: true })} placeholder="Last name*" type="text"></input>
                            {errors.lastName && <span className="error-message">This field is required!</span>}
                        </div>
                    </div>
                </div>
                <div className="shipping-info">
                    <h2 className="shipping-title">Shipping Address</h2>
                    <div className="form-field address">
                        <input {...register("address", { required: true })} placeholder="Address*"></input>
                        {errors.address && <span className="error-message">This field is required!</span>}
                    </div>

                    <div className="live-place">
                        <div className="form-field country">
                            <label>Country*</label>
                            <select {...register("country", { required: true })}  data-testid="country">
                                <option value="" disabled>Select</option>
                                {countries?.map((country, index) => (
                                    <option key={index} value={country.name.common}>
                                        {country.name.common}
                                    </option>
                                ))}
                            </select>
                            {errors.country && <span className="error-message">This field is required!</span>}
                        </div>

                        <div className="form-field region">
                            <label htmlFor="region-select">Region/State*</label>
                            <select id='region-select' {...register("region", { required: true })} data-testid="region">
                                <option value="" disabled>Select</option>
                                {regions?.map((region, index) => (
                                    <option key={index} value={region.subregion}>
                                        {region.subregion}
                                    </option>
                                ))}
                            </select>
                            {errors.region && <span className="error-message">This field is required!</span>}
                        </div>

                        <div className="form-field postal-code">
                            <input {...register("postalCode", { required: true })} placeholder="Postal code*"></input>
                            {errors.postalCode && <span className="error-message">This field is required!</span>}
                        </div>
                    </div>
                </div>
                <div className="payment-info">
                    <h2 className="payment-title">Payment Method</h2>
                    <div className="about-card">
                        <h3 className="credit-card-title">Credit Card</h3>
                        <div className="payments-content">
                            <div className="form-field card-number">
                                <input {...register("cardNumber")} placeholder="Card Number" type='text'></input>
                            </div>
                            <div className="card-info">
                                <div className="form-field month-year">
                                    <input {...register("monthYear")} placeholder="MM/YY" type='text'></input>
                                </div>
                                <div className="form-field cvv-number">
                                    <input {...register("cvv")} placeholder="CVV" type='text'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='submit-order' type='submit'>COMPLETE ORDER</button>
                <div className="logo-content">
                    {logos.map((logo) =>(
                        <img src={logo} alt={logo}/>
                    ))}
                </div>
            </div>
        </form>
    );
}

export default Payments;
