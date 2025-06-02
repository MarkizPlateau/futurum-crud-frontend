import { Button, type ButtonProps } from "@chakra-ui/react";

export const NavigationButton = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & ButtonProps) => {
  return (
    <Button as="a" href={href} {...props}>
      {children}
    </Button>
  );
};
