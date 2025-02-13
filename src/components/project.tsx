import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import BlurredCard from "@/components/blurred-card";

const GithubStars = ({ owner, repo }: { owner: string; repo: string }) => {
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchRepoData();
  }, [owner, repo]);

  if (error) {
    console.error(error);
    return null;
  }

  if (stars === null) {
    <div className="flex space-x-2">
      <FaStar aria-label="star" className="text-yellow-500" />
      <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"></svg>
    </div>;
  }

  return (
    <div className="flex space-x-2">
      <FaStar aria-label="star" className="text-yellow-500" />
      <div>{stars}</div>
    </div>
  );
};

const Images = ({ repo, imgs }: { repo: string; imgs: string[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {imgs.map((img, index) => (
        <li key={img}>
          <img
            className="rounded-md"
            src={img}
            alt={`${repo} image ${index + 1}`}
            loading="lazy"
            decoding="async"
          ></img>
        </li>
      ))}
    </ul>
  );
};

const Features = ({
  features,
  color,
}: {
  features: string[];
  color: string;
}) => {
  return (
    <ul className="flex gap-2">
      {features.map((feature) => (
        <li key={feature}>
          <Badge
            style={{ backgroundColor: color }}
            className="sm:text-md text-sm text-white"
          >
            {feature}
          </Badge>
        </li>
      ))}
    </ul>
  );
};

const Project = ({
  owner,
  repo,
  desc,
  imgs,
  color,
  showStars,
  features,
}: {
  owner: string;
  repo: string;
  desc: string;
  imgs: string[];
  color: string;
  showStars: boolean;
  features: string[];
}) => {
  const stars = showStars ? (
    <GithubStars owner={owner} repo={repo}></GithubStars>
  ) : null;

  return (
    <li>
      <BlurredCard color={color} className="p-10">
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="space-y-1">
              <div className="text-2xl font-bold">{repo}</div>
              <div className="place-self-center sm:place-self-start">
                {stars}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-lg font-light">{desc}</p>
              <Features features={features} color={color}></Features>
            </div>
          </div>
          <Images repo={repo} imgs={imgs} />
        </div>
      </BlurredCard>
    </li>
  );
};

export default Project;
