import React from 'react';
import { useQuery } from 'react-query';

function usePrincipalQuery() {
    return useQuery({
        queryKey: ["principal"],
        queryFn: async () => await reqPrincipal(),
    });
}

export default usePrincipalQuery;