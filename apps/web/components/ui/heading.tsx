type HeadingVariant = "default" | "large" | "gradient";

interface HeadingProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  variant?: HeadingVariant;
}

export const Heading = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  children,
  variant = "default"
}: HeadingProps) => {
  const variants = {
    default: "text-3xl md:text-4xl",
    large: "text-3xl md:text-8xl",
    gradient: "text-3xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-600"
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <h2 className={`font-bold leading-tight ${variants[variant]} ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl text-neutral-500 dark:text-neutral-400 ${descriptionClassName}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}; 