import { cn } from "@/lib/utils";

const GradientEffect = ({
  color,
  className,
}: {
  color: string;
  className?: string;
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cn(
        "absolute left-1/2 top-1/2 -z-50 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform",
        "rounded-full bg-gradient-to-br from-background blur-3xl",
        "transition-all duration-1000",
        "group-hover:h-full group-hover:w-full",
        className,
      )}
    ></div>
  );
};

const BlurredCard = ({
  children,
  className,
  gradientClassNames,
  color,
}: {
  children: React.ReactNode;
  className?: string;
  gradientClassNames?: string;
  color: string;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md bg-foreground/5",
        className,
      )}
    >
      <GradientEffect className={gradientClassNames} color={color} />
      {children}
    </div>
  );
};

export default BlurredCard;
