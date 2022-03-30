import { toast } from "bulma-toast";
import { Navbar } from "@components/nav/nav";
import { Button } from "@components/button/button";
import { useUserAuth } from "@contexts/AuthContext";

const StudentHeader = () => {
	const { logout } = useUserAuth();

	const brandImage = (
		<img className="logo" src="/assets/img/reason-to-believe.jpg" />
	);

	const onClick = async () => {
		await logout();

		toast({
			message: "Successfully logged out",
			type: "is-primary",
			dismissible: false,
			position: "center",
			animate: { in: "fadeIn", out: "fadeOut" },
		});
	};

	const items = [
		<a className="navbar-item">Students</a>,
		<a className="navbar-item">Curriculum</a>,
		<a className="navbar-item">Schedule</a>,
	];

	const endItems = [
		<Button buttonType="dark" onClick={onClick}>
			Log out
		</Button>,
	];

	return (
		<div className="main-header">
			<Navbar
				brandImage={brandImage}
				navStartItems={items}
				navEndItems={endItems}
			/>
		</div>
	);
};

export { StudentHeader };
