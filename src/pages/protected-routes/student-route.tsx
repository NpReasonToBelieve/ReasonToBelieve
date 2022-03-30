import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "@contexts/AuthContext";

type Props = {
	children: ReactElement;
};

const StudentRoute = ({ children }: Props) => {
	const { user } = useUserAuth();

	if (!user || !user.isAdmin) {
		<Navigate to="/" />;
	}
	return children;
};

export { StudentRoute };
