const Toolbar = ({filters, selected, onSelectFilter}) => {
	return (
		<div className="toolbar">
			{filters.map((filter, index) => {
				return <button className={filter === selected ? 'active' : ''}
							   onClick={() => onSelectFilter(filter)} key={index}>
					{filter}
				</button>
			})}
		</div>
	)
}

export default Toolbar
