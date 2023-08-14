export function Range() {
	return (
		<>
			<div>
				<input
					type='range'
					id='pages'
					name='pages'
					min='0'
					max='100'
					value='90'
					step='10'
				/>
				<label for='cowbell'>Cowbell</label>
			</div>
		</>
	)
}
