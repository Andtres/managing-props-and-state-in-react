import React from 'react'

const Nav = ({ title, number, isActived }) => (
	<li
		className={`list-group-item d-flex justify-content-between align-items-center  dark ${isActived && 'text-danger bg-warning'}`}>
		{title}
		<span class='badge badge-primary badge-pill'>{number}</span>
	</li>
)

export default Nav
