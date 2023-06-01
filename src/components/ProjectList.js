const ProjectList = ({projects}) => {
	const imgs = projects.map((project, index) => {
		return <li><img width={'320px'} src={project.img}
						alt={project.category} key={index}/></li>
	})
	return (
		<ul>{imgs}</ul>
	)
}

export default ProjectList
