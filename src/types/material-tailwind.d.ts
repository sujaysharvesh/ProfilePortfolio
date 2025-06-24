declare module "@material-tailwind/react" {
    import * as React from "react";
  
    export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
      variant?: string;
      color?: string;
      className?: string;
      children?: React.ReactNode;
    }
  
    export const Typography: React.FC<TypographyProps>;
  
    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      variant?: string;
      size?: string;
      color?: string;
      ripple?: boolean;
      className?: string;
    }
  
    export const Button: React.FC<ButtonProps>;
    export const IconButton: React.FC<ButtonProps>;
  
    export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
      className?: string;
      fullWidth?: boolean;
      shadow?: boolean;
    }
  
    export const Navbar: React.FC<NavbarProps>;
    export const Collapse: React.FC<{ open: boolean; children?: React.ReactNode }>;
  
    export const ThemeProvider: React.FC<{ children: React.ReactNode }>;
  
    export const Card: React.FC<React.HTMLAttributes<HTMLDivElement> & {
      color?: string;
      shadow?: boolean;
      variant?: string;
    }>;
  
    export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  
    export const CardHeader: React.FC<
      React.HTMLAttributes<HTMLDivElement> & {
        floated?: boolean;
        shadow?: boolean;
        color?: string;
      }
    >;
  
    export const Avatar: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & {
      variant?: string;
      size?: string;
    }>;
  }
  