# Sepet Uygulaması

Angular starter template olarak [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket/)
version 5.3.0 kullanılmıştır. Detayları repository' sinden inceleyebilirsiniz.

Uygulamada, SAP' nin openIU demo datası kullanılmaktadır.

Data erişiminde cross-browser problemi yaşamamak için angular proxy kullanılmıştır.

# Başlangıç

1. Proje klasörüne eriştikten sonra dependency' leri yüklemelisiniz.

```sh
npm install
```

2. Yükleme tamamlandıktan sonra aşağıdaki task' ı çağırarak `localhost:4200` adresi üzerinden erişim sağlayabilirsiniz.

```sh
npm run start:dev
```

# Tasklar

| Task                                            | Description                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `npm start`                                     | Run development server on `http://localhost:4200/`                                                               |
| `npm run start:dev`                             | Run development server on `http://localhost:4200/` (included proxy api)                                                              |
| `npm run mock:server`                           | Run mock data server on `http://localhost:3000/`                                                            |
| `npm run build [-- --configuration=test]`       | Lint code and build web app for test (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder |
| `npm run build [-- --configuration=production]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder |
| `npm test`                                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode                                         |
| `npm run test:ci`                               | Lint code and run unit tests once for continuous integration                                                     |
| `npm run e2e`                                   | Run e2e tests using [Protractor](http://www.protractortest.org)                                                  |
| `npm run lint`                                  | Lint code                                                                                                        |
| `npm run translations:extract`                  | Extract strings from code and templates to `src/app/translations/template.json`                                  |
| `npm run docs`                                  | Display project documentation                                                                                    |
| `npm run prettier`                              | Automatically format all `.ts`, `.js` & `.scss` files                                                            |
