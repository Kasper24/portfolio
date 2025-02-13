import { Button } from "@/components/ui/button";

const SocialMedia = ({
  name,
  link,
  Icon,
}: {
  name: string;
  link: string;
  Icon: React.ComponentType;
}) => {
  return (
    <Button className="px-3" variant="outline" asChild>
      <a href={link}>
        <Icon></Icon>
        <h3>{name}</h3>
      </a>
    </Button>
  );
};

export default SocialMedia;
