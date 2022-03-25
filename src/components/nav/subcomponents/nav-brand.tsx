import React, { ReactElement, RefObject, useCallback, useRef } from "react";

type Props = {
	children: ReactElement;
};

function useHookWithRefCallback() {
	const ref = useRef(null);
	const setRef = useCallback((node) => {
		if (ref.current) {
			ref.current = null;
		}

		if (node) {
			node.addEventListener("click", (e: MouseEvent) => {
				const el = document.querySelector(".navbar-menu");
				node.classList.toggle("is-active");
				el?.classList.toggle("is-active");
			});
		}

		ref.current = node;
	}, []);

	return [setRef];
}

const NavBrand = ({ children }: Props) => {
	const [ref] = useHookWithRefCallback();

	return (
		<div className="navbar-brand">
			{children}

			<a
				role="button"
				className="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbar-burger"
				ref={ref}
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
	);
};

export { NavBrand };
