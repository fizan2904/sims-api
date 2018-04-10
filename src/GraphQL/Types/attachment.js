import {
	GraphQLObjectType,
	GraphQLString
} from 'graphql';
import GraphQLDate from 'graphql-date';
import sql from 'mssql';

export default new GraphQLObjectType({
	name: 'Attachment',
	fields: () => ({
		userId:  { type: GraphQLString },
		fieldname: { type: GraphQLString },
		originalname: { type: GraphQLString },
		encoding: { type: GraphQLString },
		mimetype: { type: GraphQLString },
		destination: { type: GraphQLString },
		filename: { type: GraphQLString },
		path: { type: GraphQLString },
		size: { type: GraphQLString },
		attachmentType:  { type: GraphQLString },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate }
	})
});