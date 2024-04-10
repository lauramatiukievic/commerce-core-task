import ThreePants from '../gallery/Group 1808.png'
import OnePant from '../gallery/Group 1809.png'
import './items.scss'
const Items = () => {
    return (
        <div className="items-content">
            <div className="multi-pants">
                <img className='items-image three' src={ThreePants} alt='three-pants' />
                <div className='product-three-cost'>
                    <div className='product-with-delete'>
                        <span className="about-product-three"><b>3x </b>CoreProduct®</span>
                        <span className="delete-item-three">x Remove</span>
                    </div>
                    <p className="product-cost">$39.99</p>
                </div>
            </div>
            <div className="single-pants">
                <img className='items-image one' src={OnePant} alt='one-pant' />
                <div className='product-one-cost'>
                    <div className='product-with-delete'>
                        <span className="about-product-one"><b>1x </b>Extra CoreProduct®</span>
                        <span className="delete-item">x Remove</span>
                    </div>
                    <p className="product-cost">$9.99</p>
                </div>
            </div>
            <div className="cost">
                <p className="total-title">Total</p>
                <div className="about-cost">
                    <p className="currency">USE</p>
                    <p className="total-price"><b>$49.98</b></p>
                </div>
            </div>
        </div>

    )

}
export default Items 