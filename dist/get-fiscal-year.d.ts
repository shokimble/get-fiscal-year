import { FiscalData } from "./classes/fiscal-data.class.js";
export default class GetFiscalYear {
    currentDate: Date;
    constructor();
    /**
     * This takes the country and the period and returns the FiscalData
     * @param {string} country This is the country the user would like fiscal year data on
     * @param {string} period This is the fiscal year time period valid options are 'last', 'next', 'current'
     */
    getFiscalYear(country: string, period?: "last" | "current" | "next"): FiscalData;
    /**
     * This takes the end date and the period and returns the FiscalData
     * @param {string} date This is fiscal end date
     * @param {string} period This is the fiscal year time period valid options are 'last', 'next', 'current'
     */
    getFiscalYearByDate(date: string, period?: "last" | "current" | "next"): FiscalData;
    /**
     * This take a message and logs an error to the console
     */
    private error;
    /**
     * This checks to see if the date passed in is valid
     */
    private checkDate;
    /**
     * This checks to see if the date string has a leading zero or not
     */
    private checkLeadingZero;
    /**
     * This checks to see if the period is a correct value
     */
    private checkPeriod;
    /**
     * This takes in the country the user input and matches the data to the fiscalData
     */
    private getCountryInfo;
    /**
     * Checks to see if a valid country was found
     */
    private checkCountry;
    /**
     * This function appends a leading zero
     */
    private appendLeadingZero;
    /**
     * This returns the date breakdown as a usable object
     */
    private getDateBreakdownByCountry;
    /**
     * This returns the date breakdown as a usable object
     */
    private getDateBreakdownByDate;
    /**
     * Returns last fiscal year data
     */
    private lastFiscalYear;
    /**
     * Returns current fiscal year data
     */
    private currentFiscalYear;
    /**
     * Returns next fiscal year data
     */
    private nextFiscalYear;
    /**
     * Creates the date ISO String
     */
    private createISODateString;
}
