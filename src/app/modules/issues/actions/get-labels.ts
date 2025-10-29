import { environment } from '@environments/environment';
import { GithubLabel } from '../interfaces/github-label.interface';
import { sleep } from '@helpers/sleep';

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1500); // Hecho intencionadamente

  try {
    const resp = await fetch(environment.url);

    if (!resp.ok) throw 'Can´t load labels';

    const labels: GithubLabel[] = await resp.json();
    console.log(labels);

    return labels;
  } catch (error) {
    throw 'Can´t load labels';
  }
};
