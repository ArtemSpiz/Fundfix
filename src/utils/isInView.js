export function observeElementInView(
	element,
	callback,
	options = { threshold: 1.0 }
) {
	const observer = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			callback()
			observer.disconnect()
		}
	}, options)

	if (element) {
		observer.observe(element)
	}

	return () => observer.disconnect()
}
