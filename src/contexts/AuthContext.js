import React, { useContext, useState, useEffect, createContext } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

import { app, addAdminRole } from "@firebase-file";

export const auth = getAuth(app);
export { addAdminRole };
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState();

	function signin(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth).then(() => {
			setUser(undefined);
		});
	}

	useEffect(async () => {
		const unsubscribe = await onAuthStateChanged(auth, (currentUser) => {
			if (!currentUser) return;

			return currentUser.getIdTokenResult().then((idTokenResult) => {
				currentUser.isAdmin = idTokenResult.claims.admin;
				setUser(currentUser);
			});
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
				logout,
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
