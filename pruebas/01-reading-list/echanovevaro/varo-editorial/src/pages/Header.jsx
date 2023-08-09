import React from 'react'

export default function Header() {
	return (
		<div className='header-container header'>
			<nav>
				<span> Editorial aR</span>
				<ul>
					<li>
						<p>- mis listas</p>
					</li>
					<li>
						<select name='select'>
							<option value='value1' selected>
								colección completa
							</option>
							<option value='value2'>Value 2</option>
							<option value='value3'>Value 3</option>
						</select>
					</li>
				</ul>
			</nav>
		</div>
	)
}
