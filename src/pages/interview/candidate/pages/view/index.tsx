import type { FC } from 'react';
import { useParams } from 'umi';

const EditCandidate: FC = () => {
  const params = useParams();

  return <h1>params: {JSON.stringify(params)}</h1>;
};

export default EditCandidate;
