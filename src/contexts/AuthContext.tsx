import React, { useContext, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext({ currentUser: "" });

export function useAuth() {
	return useContext(AuthContext);
}

function AuthProvider({ children }: any) {
	const [currentUser, setCurrentUser] = useState();

	function signup(email: string, password: string) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	const value = {
		currentUser: "",
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
