import { Html, useProgress } from '@react-three/drei';

const LoaderSuspense = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="castom-spinner">{progress.toFixed(2)} % loaded</div>
    </Html>
  );
};
export default LoaderSuspense;
