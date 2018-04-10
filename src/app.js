import express from 'express';
import sql from 'mssql';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import config from './config';
import mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/sims').then(
	async function success() {
		try {
			await sql.connect(config);
			app.listen(process.env.PORT || 4000);
			console.log('All server started successfully');
		}catch(e) {
			console.log(e);
		}
	}
);

import Models from './Models';
import Schema from './GraphQL/Schema';

app.all('/graph', graphqlExpress(req => ({
        schema: Schema
})));

app.all('/graphiql', graphiqlExpress({
        endpointURL: '/graph'
}));