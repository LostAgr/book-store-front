export function getPrettyDate(tpl, date) {
	const d = date ? new Date(date) : new Date();
	const strg = {
        'hh': (`0${d.getHours()}`).slice(-2),
        'mm': (`0${d.getMinutes()}`).slice(-2),
        'ss': (`0${d.getSeconds()}`).slice(-2),
		'yy': String(d.getFullYear()).substr(2),
		'yyyy': d.getFullYear(),
		'MM': (`0${d.getMonth() + 1}`).slice(-2),
		'MMM': ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth() + 1],
		'dd': (`0${d.getDate()}`).slice(-2),
		'ddd': ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fry', 'Sut'][d.getDay()],
	};
	
	return tpl.replace(/\w+/g, (v) => strg[v]);
}