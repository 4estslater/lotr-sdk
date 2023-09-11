export declare function getAllMovies(): Promise<object>;
export declare function getMovieById(id: string): Promise<object>;
export declare function getQuotesByMovieId(id: string): Promise<object>;
export declare function getAllQuotes(): Promise<object>;
export declare function getQuoteById(id: string): Promise<object>;
declare const _default: {
    getAllMovies: typeof getAllMovies;
    getMovieById: typeof getMovieById;
    getQuotesByMovieId: typeof getQuotesByMovieId;
    getAllQuotes: typeof getAllQuotes;
    getQuoteById: typeof getQuoteById;
};
export default _default;
