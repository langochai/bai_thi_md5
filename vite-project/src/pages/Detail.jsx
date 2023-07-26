import {useLocation} from "react-router-dom";

export const Detail = () => {
	const location = useLocation();
	const propsData = location.state;
	console.log(propsData);
	return (
		<>

		</>
	)
}