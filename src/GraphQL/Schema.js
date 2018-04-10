import {
	GraphQLSchema
} from 'graphql';

import Mutations from './Mutations';
import Queries from './Queries';

export default new GraphQLSchema({
	query: Queries,
	mutation: Mutations
});