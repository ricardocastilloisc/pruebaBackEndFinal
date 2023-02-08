# teamknowlogy BackEnd



## Instalación

En terminal, bash o cmd utilizar:

```bash
npm install
```

## Uso

### Local
Iniciar servidor, el servidor arrancara en el puerto:  8080

```bash
node index.js
```
o puede utilizar
```bash
npm run start
```

Para usar la api localmente deberás acceder con los siguiente endpoints:


* http://localhost:8080/mutation/ --> post
* http://localhost:8080/stats/ --> get

### Api de deploy

Para usar la api de prueba podras usarlas en:

* https://panicky-windbreaker-moth.cyclic.app/mutation/ --> post

petición para post en json

{ "dna": ["ATGCGA","CAGTAC","TTAAGT","AGAAGG","CCCCTA","TCACTG"] } 

* https://panicky-windbreaker-moth.cyclic.app/stats/ --> get


### Endpoints

-------------  | JSON body example | Response | Method
--- | ---  | --- | |
mutation/ | { "dna": ["ATGCGA","CAGTAC","TTAAGT","AGAAGG","CCCCTA","TCACTG"] } | { "ok": "Mutation"} | POST|
stats/ | | { "count_mutations": 1,"count_no_mutation": 0,"ratio": "1.00"} | GET|
