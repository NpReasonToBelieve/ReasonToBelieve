export function closeModal(id: string): void {
	const el = document.getElementById(id);

	if (el) {
		el.classList.remove("is-active");
	}
}
