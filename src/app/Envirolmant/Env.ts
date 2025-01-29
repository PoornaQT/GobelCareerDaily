
export const API_URLS = {
    // YEAR_API_URL: "https://localhost:44384/api/Year/",
    // BILLING_API_URL: "https://localhost:44384/api/BillingData/",
    // COMPANY_API_URl: "https://localhost:44384/api/Company/",
    // FISCIAL_API_URL:"https://localhost:44384/api/FiscialYear/",
    // MONTH_API_URL :"https://localhost:44384/api/Month/",
    // PROJECT_API_URL :"https://localhost:44384/api/Project/",
    // VENDER_API_URL :"https://localhost:44384/api/Vender/",
    // CLIENT_API_URL:"https://localhost:44384/api/Client/",
    // EMPLOYEETYPE_API_URL:"https://localhost:44384/api/EmployeeType/",
    // ROLETYPE_API_URL:"https://localhost:44384/api/RoleType/",
    // BILLABLE_API_URL:"https://localhost:44384/api/Billable/",
    // ONBOARDINGSTATUS:"https://localhost:44384/api/OnBoardingStatus/",
    // EMPLOYEE_API_URL:"https://localhost:44384/api/Employee/",
    API_URL:"https://localhost:44384/api/"
};


export const msalConfig = {
  auth: {
    clientId: '49cdfa65-39b3-4049-9691-89ee21475e4a',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'http://localhost:4200/',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};