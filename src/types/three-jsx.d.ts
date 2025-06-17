import { Object3D, Points, BufferGeometry, Material, Group, Mesh } from 'three';
import { ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';

type DreiComponent<T> = ForwardRefExoticComponent<T & RefAttributes<Object3D>>;

interface CanvasProps {
  children?: ReactNode;
  className?: string;
}

interface FloatProps {
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  children?: ReactNode;
}

interface StarsProps {
  radius?: number;
  depth?: number;
  count?: number;
  factor?: number;
  saturation?: number;
  fade?: boolean;
  speed?: number;
}

interface Text3DProps {
  font: string;
  size?: number;
  height?: number;
  curveSegments?: number;
  children?: ReactNode;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      meshStandardMaterial: any;
      Canvas: ForwardRefExoticComponent<CanvasProps & RefAttributes<HTMLCanvasElement>>;
      Stars: DreiComponent<StarsProps>;
      Float: DreiComponent<FloatProps>;
      Center: DreiComponent<{ children?: ReactNode }>;
      Text3D: DreiComponent<Text3DProps>;
    }
  }
} 