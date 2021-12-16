import {useState, useEffect} from 'react';
import * as userService from "../../../services/userService";
import './DestinationAuthor.css';

const DestinationAuthor = ({authorId}) => {
	const [author, setAuthor] = useState({});
	useEffect(() => {
		userService.getOneUser(authorId)
		.then(res => setAuthor(res));
	}, [authorId]);

	return <p className="author-info">{author.name}</p>;
};

export default DestinationAuthor;
