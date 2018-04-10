import {
	GraphQLObjectType
} from 'graphql';

import AgeTypeMutations from './Mutations/age';
import AreaMutations from './Mutations/area';
import BloodGroupMutations from './Mutations/bloodGroup';
import CampMasterMutations from './Mutations/campMaster';
import CityMutations from './Mutations/city';

export default new GraphQLObjectType({
	name: 'RootMutation',
	fields: {
		addAgeType: AgeTypeMutations.add,
		addArea: AreaMutations.add,
		addBloodGroup: BloodGroupMutations.add,
		addCampMaster: CampMasterMutations.add,
		addCity: CityMutations.add
	}
});