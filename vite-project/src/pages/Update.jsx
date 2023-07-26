import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const Update = (props) => {
	const location = useLocation();
	const propsData = location.state;
	console.log(propsData);
	return (
		<>
		<p>ah</p>
		</>
	)
}