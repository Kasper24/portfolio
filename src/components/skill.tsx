import React from "react";
import BlurredCard from "@/components/blurred-card";

const Skill = ({
  color,
  Logo,
}: {
  color: string;
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <BlurredCard gradientClassNames="blur-lg rounded-none" color={color}>
      <div className="p-2">
        <Logo data-testid="icon" className="fill-foreground"></Logo>
      </div>
    </BlurredCard>
  );
};

export default Skill;
