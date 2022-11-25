function Mark({ markNumber }) {
	if (markNumber === -1) return;
	if (markNumber === 0) {
		return <>O</>;
	}
	if (markNumber === 1) {
		return <>X</>;
	}
}

export default Mark;
