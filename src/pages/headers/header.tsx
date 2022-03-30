import React from "react";
import { useUserAuth } from "@contexts/AuthContext";

import { MainHeader } from "./main-header";
import { AdminHeader } from "./admin-header";
import { StudentHeader } from "./student-header";

import "./main-header.css";

const Header = () => {
	const { user } = useUserAuth();

	if (user && user.isAdmin) {
		return <AdminHeader />;
	}

	if (user && !user.isAdmin) {
		return <StudentHeader />;
	}

	return <MainHeader />;
};

export { Header };
