import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "@contexts/AuthContext";

type Props = {
	children: ReactElement;
};

const AdminRoute = ({ children }: Props) => {
	const { user } = useUserAuth();

	if (!user) {
		return <Navigate to="/" />;
	}

	if (!user.admin) {
		return <Navigate to="/" />;
	}

	return children;
};

export { AdminRoute };
