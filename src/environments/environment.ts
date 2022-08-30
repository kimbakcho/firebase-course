// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: "AIzaSyDoV1erQRj_RA3fr-BBIl8aDByNr1RYxnw",
    authDomain: "fir-course-18110.firebaseapp.com",
    projectId: "fir-course-18110",
    storageBucket: "fir-course-18110.appspot.com",
    messagingSenderId: "1003179760281",
    appId: "1:1003179760281:web:be9999f8c9cc694666b608"
  },
  api: {

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
