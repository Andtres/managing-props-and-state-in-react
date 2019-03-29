import React, { Component } from 'react'
import { Nav, Item } from '../../components'

class Home extends Component {
	state = {
		isActived: -1,
		isActivedSecond: -1
	}
	toggleState = () =>
		this.setState(state => ({
			isActived: state.isActived < 0 ? 0 : -1,
			isActivedSecond: state.isActived < 0 ? 9 : -1
		}))
	render() {
		const items = [
			{ title: 'First' },
			{ title: 'Second' },
			{ title: 'Third' },
			{ title: 'Fourth' },
			{ title: 'Fifth' },
			{ title: 'Sixth' },
			{ title: 'Seventh' },
			{ title: 'Eighth' },
			{ title: 'Ninth' },
			{ title: 'Tenth' }
		]
		const { isActived, isActivedSecond } = this.state
		const revertColum = isActived === 0 ? {
			diplay: 'flex',
			flexDirection: 'row-reverse'
		} : {}
		return (
			<div>
				<header>
					<Nav isActived={isActived === 0} />
				</header>
				<div className='container mt-5'>
					<div className='row' style={revertColum}>
						<div className='col-12 col-md-6'>
							<ul class='list-group'>
								{items.map((item, key) => (
									<Item
										isActived={key === isActived || key === isActivedSecond}
										title={item.title}
										number={key + 1}
									/>
								))}
							</ul>
						</div>
						<div className='col-12 col-md-6'>
							<div
								class={`jumbotron ${isActived < 0 ? 'bg-info' : 'bg-warning'}`}>
								<h1 class='display-3'>React example</h1>
								<p class='lead'>
									React makes it painless to create interactive UIs. Design
									simple views for each Sstate in your application, and React
									will efficiently update and render just the
								</p>
								<hr class='my-1' />
								<p>
									Build encapsulated components that manage their own state,
									then compose them to make complex UIs.
								</p>
								<p class='lead'>
									<button
										onClick={this.toggleState}
										class={`btn btn-block ${isActived < 0 ? 'btn-primary' : 'btn-danger'} btn-lg`}
										href='#'
										role='button'>
										Button
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
