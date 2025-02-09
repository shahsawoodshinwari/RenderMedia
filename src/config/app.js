export default {
  /*
   |--------------------------------------------------------------------------
   | Application Name
   |--------------------------------------------------------------------------
   |
   | This value is the name of your application, which will be used when the
   | framework needs to place the application's name in a notification or
   | other UI elements where an application name needs to be displayed.
   |
   */

  name: import.meta.env.VITE_APP_NAME || 'Render Media',

  /*
   |--------------------------------------------------------------------------
   | Application Locale Configuration
   |--------------------------------------------------------------------------
   |
   | The application locale determines the default locale that will be used
   | by Laravel's translation / localization methods. This option can be
   | set to any locale for which you plan to have translation strings.
   |
   */

  locale: import.meta.env.VITE_APP_LOCALE || 'en',

  fallback_locale: import.meta.env.VITE_APP_FALLBACK_LOCALE || 'en',

  supported_locales: import.meta.env.VITE_APP_SUPPORTED_LOCALES || ['en', 'ar'],

  /*
   |--------------------------------------------------------------------------
   | Application Timezone
   |--------------------------------------------------------------------------
   |
   | Here you may specify the default timezone for your application, which
   | will be used by the PHP date and date-time functions. We have chosen
   | to set this to a sensible default for you out of the box.
   |
   */

  timezone: import.meta.env.VITE_APP_TIMEZONE || 'UTC',
}
