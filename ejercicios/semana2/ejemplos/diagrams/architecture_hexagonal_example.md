# Diagrama: Arquitectura Hexagonal (semana2/ejemplos/hexagonal)

Breve: muestra la separación entre Presentation, Application, Domain y Infrastructure tal como implementado en `hexagonal`.

```mermaid
flowchart LR
  subgraph PRESENT[Presentation]
    Controller[AdminController.js]
  end

  subgraph APP[Application]
    CreateUC[CreateAdminUseCase.js]
    GetAllUC[GetAllAdminsUseCase.js]
    GetByIdUC[GetAdminByIdUseCase.js]
  end

  subgraph DOMAIN[Domain]
    AdminEntity[Admin.js]
    Ports[AdminRepositoryPort.js, PasswordServicePort.js]
  end

  subgraph INFRA[Infrastructure]
    InMemoryRepo[InMemoryAdminRepository.js]
    PasswordService[SimplePasswordService.js]
  end

  Controller --> CreateUC
  Controller --> GetAllUC
  Controller --> GetByIdUC

  CreateUC --> AdminEntity
  CreateUC --> Ports
  GetAllUC --> Ports
  GetByIdUC --> Ports

  Ports --> InMemoryRepo
  Ports --> PasswordService

  note right of Ports
    Los puertos definen contratos; la infraestructura los implementa
  end
```

Puntos clave:
- Dependencia dirigida hacia adentro
- Dominio independiente de frameworks
- Fácilmente testeable e intercambiable
