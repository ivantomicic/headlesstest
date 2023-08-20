import { Matcher, MatcherOptions } from '@testing-library/dom/types/matches';
import { queryHelpers } from '@testing-library/react';
declare const getByName: queryHelpers.QueryBy<[Matcher, MatcherOptions]>;
declare const getByType: queryHelpers.QueryBy<[Matcher, MatcherOptions]>;
declare const getByValue: queryHelpers.QueryBy<[Matcher, MatcherOptions]>;
export { getByName, getByType, getByValue };
