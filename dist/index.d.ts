export declare function getMovies(): Promise<object>;
export declare function getMovieById(id: string): Promise<object>;
export declare function getQuotesByMovieId(id: string): Promise<object>;
export declare function getQuotes(): Promise<object>;
export declare function getQuoteById(id: string): Promise<object>;
declare const _default: {
    getMovies: typeof getMovies;
    getMovieById: typeof getMovieById;
    getQuotesByMovieId: typeof getQuotesByMovieId;
    getQuotes: typeof getQuotes;
    getQuoteById: typeof getQuoteById;
};
export default _default;
