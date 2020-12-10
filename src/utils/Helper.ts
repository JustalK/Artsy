/**
 * Check if a string or array of string is defined
 * @params {(string | string[])} data The variable about to get checked
 * @return {boolean} True if the variable exist and is defined
 **/
export const isDefine = (data: string | string[]): boolean => {
	return data !== undefined && data !== null && data !== '';
};

/**
 * A string to sanitize
 * @params {string} data The data to sanitize
 * @return {string} The sanitized string or 'No data' if does not exist
 **/
export const sanitize = (data: string): string => {
	if (!isDefine(data)) {
		return 'No Data';
	}

	return data.trim();
};

/**
 * Creating a string from an array of string
 * @params {string[]} data The array of string
 * @return {string} The join data
 **/
export const join = (data: string[]): string => {
	if (!isDefine(data)) {
		return 'No Data';
	}

	return data.join(', ');
};
