
 export const env = {
    auth: {
        clientId: '49cdfa65-39b3-4049-9691-89ee21475e4a',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: 'http://localhost:4200/',
        tenantID: '253a978d-3cf8-46ee-8fe6-42a779649eaf',
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false,
    },
    API_URL: "https://localhost:44384/api/",
    scopes : ["api://49cdfa65-39b3-4049-9691-89ee21475e4a/access_as_user"]
}
