import { NavLink } from 'react-router-dom';
import './Author.css';

const Author = (props) => {
	return(
		<>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="tm-about-box-1">
					<NavLink to={`/authors/${props.author.id}`}><img src={props.author.acf.image_url} alt="Author" className="tm-about-box-1-img author-img"/></NavLink>
					<h3 className="tm-about-box-1-title">{props.author.acf.username}</h3>
					<p className="margin-bottom-15 gray-text">{props.author.acf.user_description}</p>
				</div>
			</div>
		</>
	)
}

export default Author;