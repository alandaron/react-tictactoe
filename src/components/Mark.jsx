function Mark({ markNumber }) {
	if (markNumber === -1) return <td></td>;
	if (markNumber === 0) {
		return <td>O</td>;
	}
	if (markNumber === 1) {
		return <td>X</td>;
	}
}

export default Mark;
