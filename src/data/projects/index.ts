import { caraeximProject } from './caraexim';
import { clusterProject } from './cluster';
import { graphyProject } from './graphy';
import { eventttsProject } from './eventtts';
import { qnsaiProject } from './qnsai';
import { carboProject } from './carbo';
import { proddyProject } from './proddy';
import { ctrackProject } from './ctrack';

export const projectsdata = [
	proddyProject,
	ctrackProject,
	carboProject,
	clusterProject,
	eventttsProject,
	qnsaiProject,
	graphyProject,
	caraeximProject,
];

export type Project = typeof caraeximProject;
