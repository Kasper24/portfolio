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
    <Button className="w-full px-3" variant="outline" asChild>
      <a href={link}>
        <Icon data-testid="icon"></Icon>
        <h3>{name}</h3>
      </a>
    </Button>
  );
};

export default SocialMedia;
