// Konfiguracja Karma
// wygenerowana Sun Dec 01 2013 16:50:31 GMT+0000 (GMT Standard Time).

module.exports = function(config) {
  config.set({

    // Podstawowa ścieżka dostępu będzie używana w celu odwoływania się do plików, a także wykluczania ich.
    basePath: '',


    // Frameworki do użycia.
    frameworks: ['jasmine'],


    // Lista plików i wzorców do wczytania w przeglądarce internetowej.
    files: [
      'angular.js',
      'angular-mocks.js',
      '*.js',
      'tests/*.js'
    ],


    // Lista plików wykluczonych.
    exclude: [
      
    ],


    // Użycie komponentu zgłaszającego wyniki testów,
    // dozwolone wartości: 'dots', 'progress', 'junit', 'growl', 'coverage'.
    reporters: ['progress'],


    // Port serwera WWW.
    port: 9876,


    // Włączenie lub wyłączenie koloru w danych wyjściowych (wyświetlane przez reporter i umieszczane w plikach dzienników zdarzeń).
    colors: true,


    // Poziom rejestrowania informacji,
    // dozwolone wartości: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG.
    logLevel: config.LOG_INFO,


    // Włączenie lub wyłączenie monitorowania pliku i przeprowadzania testów po wprowadzeniu zmian w jakimkolwiek pliku.
    autoWatch: true,


    // Uruchomienie przeglądarek internetowych; obecnie są obsługiwane następujące:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (narzędzie trzeba zainstalować za pomocą polecenia `npm install karma-opera-launcher`)
    // - Safari (tylko komputery Mac; narzędzie trzeba zainstalować za pomocą polecenia `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (tylko system Windows; narzędzie trzeba zainstalować za pomocą polecenia `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // Jeżeli przeglądarka nie przechwyci danych w podanym czasie [ms], należy ją zamknąć.
    captureTimeout: 60000,


    // Tryb ciągłej integracji. W przypadku wartości true następuje przechwycenie
    // przeglądarek internetowych, wykonanie testów i zakończenie działania.
    singleRun: false
  });
};
