import {useState, useEffect} from 'react';
import * as userService from "../../../services/userService";

const DestinationAuthor = ({authorId}) => {
	const [author, setAuthor] = useState({});
	useEffect(() => {
		userService.getOneUser(authorId)
		.then(res => setAuthor(res));
	}, [authorId]);

	return <p className="destination-author">{author.name}</p>;
};

export default DestinationAuthor;
