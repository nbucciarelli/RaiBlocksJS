import getSuccessResponse from '../../utils/getSuccessResponse';

export default function Bootstrap(rpc) {
  return async ({ address, port } = {}) => {
    if (!address || !port) {
      const response = await rpc('bootstrap_any');
      return getSuccessResponse(response);
    }

    const response = await rpc('bootstrap', { address, port });
    return getSuccessResponse(response);
  };
}
