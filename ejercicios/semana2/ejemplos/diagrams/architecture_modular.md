# Diagrama: Arquitectura Modular (semana2/ejemplos/modular)

Breve: muestra las capas separadas (models, services, repositories) y dependencias directas en el ejemplo `modular`.

```mermaid
flowchart LR
  subgraph PRESENT[Presentation]
    Main[src/main.js]
  end

  subgraph SERVICE[Services]
    AdminService[AdminService.js]
  end

  subgraph MODEL[Models]
    AdminModel[Admin.js]
  end

  subgraph REPO[Repositories]
    AdminRepo[AdminRespository.js]
  end

  Main --> AdminService
  AdminService --> AdminRepo
  AdminService --> AdminModel
  AdminRepo --> Persistence[(in-memory array)]
```

Puntos clave:
- Mejor organización que el monolito
- Aún hay acoplamiento a implementaciones concretas
- Más fácil de testear que el monolito
