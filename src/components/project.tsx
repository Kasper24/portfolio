import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

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
        setStars(data.stargazers_count); // Get the number of stars
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchRepoData();
  }, [owner, repo]);

  if (error) {
    console.error(error);
    <div className="flex space-x-2">
      <FaStar className="text-yellow-500" />
      <div>0</div>
    </div>;
  }

  if (stars === null) {
    <div className="flex space-x-2">
      <FaStar className="text-yellow-500" />
      <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"></svg>
    </div>;
  }

  return (
    <div className="flex space-x-2">
      <FaStar className="text-yellow-500" />
      <div>{stars}</div>
    </div>
  );
};

const Project = ({
  owner,
  repo,
  img,
  desc,
  showStars,
  features,
}: {
  owner: string;
  repo: string;
  img: string;
  desc: string;
  showStars: boolean;
  features: string[];
}) => {
  const stars = showStars ? (
    <GithubStars owner={owner} repo={repo}></GithubStars>
  ) : null;

  return (
    <li className="relative space-y-4 rounded-xl bg-foreground/5 p-3 pb-12">
      <img
        className="aspect-video h-32 w-full rounded-xl object-cover"
        src={img}
        alt={repo}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      ></img>
      <div>
        <div className="text-2xl font-bold tracking-wide">{repo}</div>
        {stars}
        <p>{desc}</p>
      </div>
      <ul className="xs:flex xs:space-x-2 xs:space-y-0 absolute bottom-3 left-3 space-y-2">
        {features.map((feature) => (
          <li key={feature}>
            <Badge className="sm:text-md text-sm">{feature}</Badge>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Project;
