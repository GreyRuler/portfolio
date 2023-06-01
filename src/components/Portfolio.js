import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { useState } from 'react';

const Portfolio = () => {
	const filters = ["All", "Websites", "Flayers", "Business Cards"]
	const projects = [{
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
		category: "Business Cards"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
		category: "Business Cards"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
		category: "Business Cards"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
		category: "Flayers"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
		category: "Business Cards"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
		category: "Business Cards"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
		category: "Websites"
	}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
		category: "Flayers"
	}]
	const [selected, setSelected] = useState("All")
	const [projectsFiltered, setProjects] = useState(projects)
	const onSelectFilter = (filter) => {
		setSelected(filter)
		setProjects(projects.filter((project) => {
			if (filter === 'All') return true
			return project.category === filter
		}))
	}
	return (
		<div className="container">
			<Toolbar
				filters={filters}
				selected={selected}
				onSelectFilter={onSelectFilter}/>
			<ProjectList projects={projectsFiltered}/>
		</div>
	)
}

export default Portfolio
