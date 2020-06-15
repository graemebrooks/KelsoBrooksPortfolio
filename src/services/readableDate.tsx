export default function readableDate(unformattedDate: string) {
	let date = unformattedDate.match('^.{0,10}');
	return date;
}
