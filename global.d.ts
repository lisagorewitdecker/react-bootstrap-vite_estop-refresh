declare module "*.css";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.webp";
declare module "*.ico";
declare module "*.woff";
declare module "*.woff2";
declare module "*.ttf";
declare module "*.json";
declare module "*.md";
declare module "*.d";
declare module "*.ts";
declare module "*.tsx";
declare module "*.mjs";

interface Window {
  ElfsightApps?: {
    init: () => void;
  };
}

