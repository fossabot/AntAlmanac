import { enumerate } from '@packages/peterportal-schemas';
import { type } from 'arktype';

/**
 * Quarterly Academic Calendar {@link https://www.reg.uci.edu/calendars/quarterly/2023-2024/quarterly23-24.html}
 * The `startDate`, if available, should correspond to the __instruction start date__ (not the quarter start date)
 * Months are 0-indexed
 */
export const termsArray = [
    { shortName: '2023 Fall', longName: '2023 Fall Quarter', startDate: [2023, 8, 28] },
    { shortName: '2023 Summer2', longName: '2023 Summer Session 2', startDate: [2023, 7, 7] },
    { shortName: '2023 Summer10wk', longName: '2023 10-wk Summer', startDate: [2023, 5, 26] },
    { shortName: '2023 Summer1', longName: '2023 Summer Session 1', startDate: [2023, 5, 26] },
    { shortName: '2023 Spring', longName: '2023 Spring Quarter', startDate: [2023, 3, 3] },
    { shortName: '2023 Winter', longName: '2023 Winter Quarter', startDate: [2023, 0, 9] },
    { shortName: '2022 Fall', longName: '2022 Fall Quarter', startDate: [2022, 8, 22] },
    { shortName: '2022 Summer2', longName: '2022 Summer Session 2', startDate: [2022, 7, 1] },
    { shortName: '2022 Summer10wk', longName: '2022 10-wk Summer', startDate: [2022, 5, 20] },
    { shortName: '2022 Summer1', longName: '2022 Summer Session 1', startDate: [2022, 5, 20] },
    { shortName: '2022 Spring', longName: '2022 Spring Quarter', startDate: [2022, 2, 28] },
    { shortName: '2022 Winter', longName: '2022 Winter Quarter', startDate: [2022, 0, 3] },
    { shortName: '2021 Fall', longName: '2021 Fall Quarter', startDate: [2021, 8, 23] },
    { shortName: '2021 Summer2', longName: '2021 Summer Session 2' },
    { shortName: '2021 Summer10wk', longName: '2021 10-wk Summer' },
    { shortName: '2021 Summer1', longName: '2021 Summer Session 1' },
    { shortName: '2021 Spring', longName: '2021 Spring Quarter', startDate: [2021, 2, 29] },
    { shortName: '2021 Winter', longName: '2021 Winter Quarter', startDate: [2021, 0, 4] },
    { shortName: '2020 Fall', longName: '2020 Fall Quarter', startDate: [2020, 9, 1] },
    { shortName: '2020 Summer2', longName: '2020 Summer Session 2' },
    { shortName: '2020 Summer10wk', longName: '2020 10-wk Summer' },
    { shortName: '2020 Summer1', longName: '2020 Summer Session 1' },
    { shortName: '2020 Spring', longName: '2020 Spring Quarter', startDate: [2020, 2, 30] },
    { shortName: '2020 Winter', longName: '2020 Winter Quarter', startDate: [2020, 0, 6] },
    { shortName: '2019 Fall', longName: '2019 Fall Quarter', startDate: [2019, 8, 26] },
    { shortName: '2019 Summer2', longName: '2019 Summer Session 2' },
    { shortName: '2019 Summer10wk', longName: '2019 10-wk Summer' },
    { shortName: '2019 Summer1', longName: '2019 Summer Session 1' },
    { shortName: '2019 Spring', longName: '2019 Spring Quarter' },
    { shortName: '2019 Winter', longName: '2019 Winter Quarter' },
    { shortName: '2018 Fall', longName: '2018 Fall Quarter' },
    { shortName: '2018 Summer2', longName: '2018 Summer Session 2' },
    { shortName: '2018 Summer10wk', longName: '2018 10-wk Summer' },
    { shortName: '2018 Summer1', longName: '2018 Summer Session 1' },
    { shortName: '2018 Spring', longName: '2018 Spring Quarter' },
    { shortName: '2018 Winter', longName: '2018 Winter Quarter' },
    { shortName: '2017 Fall', longName: '2017 Fall Quarter' },
    { shortName: '2017 Summer2', longName: '2017 Summer Session 2' },
    { shortName: '2017 Summer10wk', longName: '2017 10-wk Summer' },
    { shortName: '2017 Summer1', longName: '2017 Summer Session 1' },
    { shortName: '2017 Spring', longName: '2017 Spring Quarter' },
    { shortName: '2017 Winter', longName: '2017 Winter Quarter' },
    { shortName: '2016 Fall', longName: '2016 Fall Quarter' },
    { shortName: '2016 Summer2', longName: '2016 Summer Session 2' },
    { shortName: '2016 Summer10wk', longName: '2016 10-wk Summer' },
    { shortName: '2016 Summer1', longName: '2016 Summer Session 1' },
    { shortName: '2016 Spring', longName: '2016 Spring Quarter' },
    { shortName: '2016 Winter', longName: '2016 Winter Quarter' },
    { shortName: '2015 Fall', longName: '2015 Fall Quarter' },
    { shortName: '2015 Summer2', longName: '2015 Summer Session 2' },
    { shortName: '2015 Summer10wk', longName: '2015 10-wk Summer' },
    { shortName: '2015 Summer1', longName: '2015 Summer Session 1' },
    { shortName: '2015 Spring', longName: '2015 Spring Quarter' },
    { shortName: '2015 Winter', longName: '2015 Winter Quarter' },
    { shortName: '2014 Fall', longName: '2014 Fall Quarter' },
] as const;

export const termNamesArray = [...termsArray.map((term) => term.shortName), 'Multiple Terms', 'Any Term'] as const;
export const TermNamesSchema = type(enumerate(termNamesArray));
export type TermNames = typeof TermNamesSchema.infer;
