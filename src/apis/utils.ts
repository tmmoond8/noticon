export const normalizeMap = ({
  id,
  attributes,
}: {
  id: number;
  attributes: any;
}) => {
  return {
    id,
    ...attributes,
  };
};

export function unwrapStrapiData<T>(response: any): T | null {
  if (!response || typeof response !== 'object') return response;

  if (Array.isArray(response)) {
    return response.map(unwrapStrapiData) as any as T;
  }

  if ('data' in response) {
    return unwrapStrapiData(response.data);
  }

  if ('attributes' in response) {
    const { attributes, id, ...rest } = response;
    const unwrappedAttributes: any = unwrapStrapiData(attributes);

    return { id, ...unwrappedAttributes, ...rest } as T;
  }

  if (typeof response === 'object') {
    return Object.fromEntries(
      Object.entries(response).map(([key, value]) => [
        key,
        unwrapStrapiData(value),
      ]),
    ) as T;
  }

  return response as T;
}
