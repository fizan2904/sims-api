import sql from 'mssql';
import mongoose from 'mongoose';

const ModelNames = [
	'age',
	'bloodgroup',
	'campmaster',
	'company',
	'education',
	'maritalstatus',
	'occupation',
	'refsource',
	'refsourcedetail',
	'relation',
	'sex',
	'title'
];
let Models = {};

ModelNames.forEach(el => Models[el] = mongoose.model(el) );

export const insertSql = (tableName, params, returnData) => {
	return new Promise((resolve, reject) => {
		try{
			const transaction = new sql.Transaction();
			transaction.begin(err => {
				if(err) { throw err; }
				new sql.Request().query(`
					INSERT INTO dbo.[${tableName}] 
					(${Object.keys(params).join(',')}) 
					OUTPUT Inserted.${returnData} VALUES 
					('${Object.values(params).join("','")}')`, (err, result) => {
						if(err) { throw err; }
						transaction.commit(err => {
							if(err) { throw err; }
							return resolve(result.recordset[0][returnData]);
						});
					});
			});
		}catch(e){
			return reject(e);
		}
	});
};

export const insertMongo = async (modelName, params) => {
	return new Promise(async (resolve, reject) => {
		try{
			return resolve(await new Models[modelName](params).save());
		}catch(e){
			return reject(e);
		}
	});
};

export const deleteKeys = async (Obj, keys) => {
	return new Promise(async (resolve, reject) => {
		try{
			keys.forEach(key => delete Obj[key]);
			return resolve(Obj);
		}catch(e){
			return reject(e);
		}
	});
}