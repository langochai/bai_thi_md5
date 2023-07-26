import {useLocation} from "react-router-dom";

export const Delete = () => {
	const location = useLocation();
	const propsData = location.state;
	console.log(propsData);
	return (
		<></>
	)
}