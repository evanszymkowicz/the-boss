import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
//	custom actions
import { updateItemCount, removeFromCart, emptyCart } from '../../actions/cart';

const Cart = ({ toggleCartButton, cartVisibility, updateItemCount, removeFromCart, emptyCart, cart }) => {
	let visibility = 'hide';

	if (cartVisibility) {
		visibility = 'show';
	}

	const addCount = (_id) => {
		let count = 1;
		updateItemCount({ _id, count });
	};

	const minusCount = (_id) => {
		let count = -1;
		updateItemCount({ _id, count });
	};

	const cartTotal = (cart) => {
		const total = cart.reduce((acc, item) => {
			acc += item.price * item.count;
			return acc;
		}, 0);
		const subTotal = Math.round(total * 100) / 100;
		return subTotal;
	};

	const amount = cartTotal(cart) * 1000 / 10;

	const handleToken = async (token, addresses) => {
		const body = {
			cart: cart,
			token: token
		};
		try {
			const res = await axios.post('/store/checkout', body);
			const { status } = res.data;
			if (status === 'success') {
				alert('Thank You for Shopping With Us!');
				emptyCart();
				toggleCartButton(false);
			} else {
				alert('Sorry, something went wrong. Please try again.');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div id="cart" className={visibility}>
			<div className="cart-grid">
				<div className="cart-grid__details-wrapper">
					{cart.map((cartItem) => (
						<Fragment key={cartItem._id}>
							<div className="cart-grid__details">
								<div className="cart-img">
									<img src={`/imgs/${cartItem.imgName}`} alt={cartItem.name} />
								</div>
								<div>
									<h6>{cartItem.name}</h6>
									<p>${cartItem.price}</p>
								</div>
								<div className="cart-qty">
									<img
										src="/imgs/minus.svg"
										alt="remove 1"
										onClick={() => minusCount(cartItem._id)}
									/>
									<p>{cartItem.count}</p>
									<img src="/imgs/plus.svg" alt="add 1" onClick={() => addCount(cartItem._id)} />
								</div>
								<div>
									<button
										type="button"
										className="cart-delete-btn"
										onClick={() => removeFromCart(cartItem._id)}>
										&times;
									</button>
								</div>
							</div>
						</Fragment>
					))}
				</div>

				<div className="cart-grid__total">
					<h4>CART TOTAL</h4>
					<p>
						<strong>${cartTotal(cart)}</strong>
					</p>
					<p>Test Number:</p>
					<p>
						<strong>5555 5555 55555 5555</strong>
					</p>
					<p>
						any time in the future such as <strong>09/99</strong>; CVV: <strong>123</strong>{' '}
					</p>
					<div>
						<StripeCheckout
							stripeKey="	
pk_test_51HRoB8GgkbGr7YgDUvJhn8Z18EEBaD5RLEvJi5V4mmmPPF9DiSZQH0uWA5tiTU8f8ScVcBflmZHsStOj7WIkWFwg002RsGFAwd"
							token={handleToken}
							amount={amount}
							description="Products from the Boss"
							image=""
							locale="auto"
							currency="USD"
							name="Rick Ross Shop"
							label="Checkout"
							shippingAddress
							billingAddress
						/>
					</div>
				</div>

				<button type="button" className="back-to-shop" onClick={toggleCartButton}>
					&times;
				</button>
			</div>
		</div>
	);
};

Cart.propTypes = {
	toggleCartButton: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
	updateItemCount: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	emptyCart: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	cart: state.cart
});

export default connect(mapStateToProps, { updateItemCount, removeFromCart, emptyCart })(Cart);
