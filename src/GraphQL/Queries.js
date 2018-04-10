import {
	GraphQLObjectType
} from 'graphql';

import AgeQuery from './Queries/age';

export default new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		AgeQuery
	}
});