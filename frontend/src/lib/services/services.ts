
import { Dates } from '../../enums.js';

export const getFetchingData = async (
	action: string,
	method: string,
	body: BodyInit | null
): Promise<ResponseData> => {
	const data: ResponseData = await fetch(action, {
		method,
		body
	}).then(res => res.json());

	return data;
};

export function handleImage(this: HTMLInputElement) {
	const reader: FileReader = new FileReader();
	const sibling = this.nextElementSibling;
	const parent = this.parentElement;

	if (this.files !== null && sibling !== null) {
		reader.readAsDataURL(this.files[0]);
		reader.addEventListener('load', function(this: FileReader) {
			const url = this.result;
			if (typeof url === 'string') sibling.setAttribute('src', url);
		});
	}

	if (parent !== null) {
		parent.style.backgroundImage = 'url()';
	}
}

export const timeago = (date: Date): string => {
	const oldDate = new Date(date);
	const actDate = new Date();
	const difference = actDate.getTime() - oldDate.getTime();

	if (difference < Dates.MINUTE) {
		return 'just now';
	} else if (difference < Dates.HOUR) {
		const number = Math.trunc(difference / Dates.MINUTE);
		if (number > 1) {
			return `${number} minutes ago`;
		} else {
			return `${number} minute ago`;
		}
	} else if (difference < Dates.DAY) {
		const number = Math.trunc(difference / Dates.HOUR);
		if (number > 1) {
			return `${number} hours ago`;
		} else {
			return `${number} hour ago`;
		}
	} else if (difference < Dates.WEEK) {
		const number = Math.trunc(difference / Dates.DAY);
		if (number > 1) {
			return `${number} days ago`;
		} else {
			return `${number} day ago`;
		}
	} else if (difference < Dates.MONTH) {
		const number = Math.trunc(difference / Dates.WEEK);
		if (number > 1) {
			return `${number} weeks ago`;
		} else {
			return `${number} week ago`;
		}
	} else if (difference < Dates.YEAR) {
		const number = Math.trunc(difference / Dates.MONTH);
		if (number > 1) {
			return `${number} months ago`;
		} else {
			return `${number} month ago`;
		}
	} else {
		const number = Math.trunc(difference / Dates.YEAR);
		if (number > 1) {
			return `${number} years ago`;
		} else {
			return `${number} year ago`;
		}
	}
};
