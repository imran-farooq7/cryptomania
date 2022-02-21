import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeader = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "e855ed817fmsh254d4ee6a4771d6p1a293ejsnc52d1f6abd55",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => {
	return {
		url,
		headers: cryptoApiHeader,
	};
};

export const cryptoApi = createApi({
	reducerPath: "crypto",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCrypto: builder.query({
			query: () => createRequest("/coins"),
		}),
	}),
});
export const { useGetCryptoQuery } = cryptoApi;
