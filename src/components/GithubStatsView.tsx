"use client";

import { GithubLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function GithubStatsView({
  repos,
  followers,
  sinceYear,
}: {
  repos: number;
  followers: number;
  sinceYear: number;
}) {
  const { t } = useLanguage();

  const stats = [
    { value: repos, label: t.github.reposLabel },
    { value: followers, label: t.github.followersLabel },
    { value: sinceYear, label: t.github.sinceLabel },
  ];

  return (
    <div className="mt-3 flex flex-wrap items-center gap-3">
      <GithubLogo size={18} className="text-fg-faint" />
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-baseline gap-1.5 text-sm">
          <span className="font-mono font-semibold text-fg">{stat.value}</span>
          <span className="text-fg-faint">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
