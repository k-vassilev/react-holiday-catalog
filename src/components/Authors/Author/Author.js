import './Author.css';

const Author = (props) => {
	return(
		<>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="tm-about-box-1">
					<img src={props.author.acf.image_url} alt="Author" className="tm-about-box-1-img author-img"/>
					<h3 className="tm-about-box-1-title">{props.author.acf.username}</h3>
				</div>
			</div>
		</>
	)
}
export default Author;