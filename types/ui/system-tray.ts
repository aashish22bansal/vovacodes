export interface ISystemTrayButton {
  id: number;
  src: string;
  size: { width: number; height: number };
  action: () => void;
  alt: string;
}