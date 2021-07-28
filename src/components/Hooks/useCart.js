import React from 'react'
import AppContext from '../../context'

export function useCart() {
	const { cartDrawer, setCartDrawer } = React.useContext(AppContext)
	const totalPrice = cartDrawer.reduce((sum, obj) => obj.price + sum, 0)

	return {cartDrawer, setCartDrawer, totalPrice}
}

