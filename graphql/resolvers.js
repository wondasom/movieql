const dasom = {
	name: 'Dasom',
	age: 27,
	gender: 'not your business'
};

const resolvers = {
	Query: {
		person: () => dasom
	}
};

export default resolvers;
