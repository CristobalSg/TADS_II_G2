# Diagrama: Arquitectura Monolítica (semana2/ejemplos/monolitico)

Breve: muestra cómo en el ejemplo `monolitico` todo está en un único archivo y las capas se mezclan.

```mermaid
flowchart TB
  subgraph MONO[Monolitico]
    App[monolitico.js]
  end

  subgraph COMPONENTS[Componentes mezclados]
    Validation[Validacion]
    Business[Logica de negocio]
    Persistence[Persistencia in-memory]
    Presentation[Console IO]
  end

  App --> Validation
  App --> Business
  App --> Persistence
  App --> Presentation
```

Puntos clave:
- Todo en `monolitico.js`.
- No hay contratos ni separación clara.
- Útil solo para prototipos.
