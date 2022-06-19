import { Html, useProgress } from '@react-three/drei';

const LoaderSuspense = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};
export default LoaderSuspense;
