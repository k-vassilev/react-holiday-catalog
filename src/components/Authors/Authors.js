import "./Authors.css";
import Author from "./Author/Author";

const Authors = () => {
	return (
		<>
			<section className="container tm-home-section-1" id="more">
				<div className="tm-section-header">
					<div className="col-lg-6 col-md-6 col-sm-6">
						<h2 className="tm-section-title">Contributors:</h2>
					</div>
				</div>
				<Author />
				<Author />
				<Author />
				<Author />
			</section>
		</>
	);
};

export default Authors;
