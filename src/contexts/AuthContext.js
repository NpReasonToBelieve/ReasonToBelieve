import React, { useContext, useState, useEffect, createContext } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../firebase";

const auth = getAuth(app);
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState();

	function signin(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<userAuthContext.Provider
			value={{
				signin,
				login,
				user,
			}}
		>
			{children}
		</userAuthContext.Provider>
	);
}

export function useUserAuth() {
	return useContext(userAuthContext);
}
