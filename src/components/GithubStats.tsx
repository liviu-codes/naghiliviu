import { GithubStatsView } from "./GithubStatsView";

const GITHUB_USERNAMES = ["liviu-codes", "naghiLiviu"];

interface GithubUser {
  public_repos: number;
  followers: number;
  created_at: string;
}

async function fetchGithubUser(username: string): Promise<GithubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function GithubStats() {
  const users = (await Promise.all(GITHUB_USERNAMES.map(fetchGithubUser))).filter(
    (user): user is GithubUser => user !== null
  );

  if (users.length === 0) return null;

  const repos = users.reduce((sum, user) => sum + user.public_repos, 0);
  const followers = users.reduce((sum, user) => sum + user.followers, 0);
  const sinceYear = Math.min(...users.map((user) => new Date(user.created_at).getFullYear()));

  return <GithubStatsView repos={repos} followers={followers} sinceYear={sinceYear} />;
}
