import { getJestProjectsAsync } from '@nx/jest';

const getAllProjectsConfigs = async () => ({
  projects: await getJestProjectsAsync(),
});

export default getAllProjectsConfigs;
