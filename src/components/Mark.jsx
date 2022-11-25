function Mark({ markNumber }) {
	if (markNumber === -1) return;
	if (markNumber === 0) {
		return <span className="blue">O</span>;
	}
	if (markNumber === 1) {
		return <span className="red">X</span>;
	}
}

export default Mark;
