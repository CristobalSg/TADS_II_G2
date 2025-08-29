# Diagrama: Arquitectura Monolítica (semana2/ejemplos/monolitico)

Breve: muestra cómo en el ejemplo `monolitico` todo está en un único archivo y las capas se mezclan.

```mermaid
flowchart TB
  subgraph MONO[Monolítico]
    App[monolitico.js]
  end

  subgraph COMPONENTS[Componentes mezclados]
    Validation[Validación]
    Business[Lógica de negocio]
    Persistence[Persistencia (in-memory)]
    Presentation[Console / I/O]
  end

  App --> Validation
  App --> Business
  App --> Persistence
  App --> Presentation

  note right of App
    Problemas:
    - Acoplamiento alto
    - Difícil testing
    - Lógica dispersa
  end
```

Puntos clave:
- Todo en `monolitico.js`.
- No hay contratos ni separación clara.
- Útil solo para prototipos.
