const valueFormat = (type: string, value: string) => {
	let valueFormated;

	if (type === 'DATE') {
		const date = new Date(value);

		const day = date.getDate();
		const month =
			date.getMonth() < 9
				? `0${date.getMonth() + 1}`
				: `${date.getMonth() + 1}`;
		const year = date.getFullYear();

		valueFormated = `${day}/${month}/${year}`;
	}

	if (type === 'PRICE') {
		const number = Number(value);

		const price = number.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL',
		});

		valueFormated = price;
	}

	if (type === 'NUMBERS') {
		const numbers = value.split(',');

		const arrayNumbers = numbers.map((item) => {
			const number = parseFloat(item);
			return number < 10 ? `0${number}` : number;
		});

		valueFormated = arrayNumbers.join(', ');
	}

	return valueFormated;
};

export const getGameColor = (games: any, id: number) => {
	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return gameSelected.color;
};

export const getGameName = (games: any, id: number) => {
	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return gameSelected.type;
};

export const getGamePrice = (games: any, id: number) => {
	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return valueFormat('PRICE', gameSelected.price);
};

export const getGamePriceNumber = (games: any, id: number) => {
	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return Number(gameSelected.price);
};

export const completeArray = (
	array: number[],
	maxNumber: number,
	range: number
) => {
	const newArray: number[] = [];
	if (array.length < maxNumber) {
		let toComplete = maxNumber - array.length;

		while (toComplete > 0) {
			const number = Math.floor(Math.random() * range + 1);

			if (!newArray.includes(number) && !array.includes(number)) {
				newArray.push(number);
				toComplete--;
			}
		}
	}
	return newArray;
};

export default valueFormat;
