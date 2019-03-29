import React from 'react'

const Nav = ({isActived}) => (
	<nav className={`navbar navbar ${!isActived ? 'bg-dark' : 'bg-danger' }`}>
		<a class='navbar-brand img-nav' href='#'>
			<img
				src='https://blog.leonhassan.co.uk/content/images/size/w600/2018/01/nodejs.svg'				
				className='img-fluid'				
			/>			
		</a>
	</nav>
)

export default Nav
