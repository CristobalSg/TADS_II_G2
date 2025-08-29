# Diagrama: Enfoque Multitenant en SmartParkingTwo

Descripción corta: diagrama que explica cómo se implementa multitenancy en SmartParkingTwo (conceptual), mostrando separación de datos, contexto por tenant y adaptadores necesarios.

```mermaid
flowchart LR
  subgraph EXTERNAL[Clientes]
    TenantAdmin1[Tenant Admin A]
    TenantAdmin2[Tenant Admin B]
  end

  subgraph GATEWAY[Gateway / API Layer]
    API[API Gateway / Controllers]
    Auth[Auth Service (tokens con tenantId)]
  end

  subgraph APPLICATION[Application]
    UC[Use Cases (tenant-aware)]
  end

  subgraph DOMAIN[Domain]
    Entities[Entities neutrales al tenant]
    TenantContext[Tenant Context (injection)]
    Ports[Ports que aceptan tenantId]
  end

  subgraph INFRA[Infrastructure]
    DB1[(DB Shared Schema with tenantId)]
    DB2[(DB per-tenant) - optional]
    Cache[Redis (namespaces por tenant)]
    AuthStore[Identity Provider]
    Config[Config Store (tenant-specific)]
  end

  TenantAdmin1 -->|HTTP + token(tenantId)| API
  TenantAdmin2 -->|HTTP + token(tenantId)| API
  API --> Auth
  API --> UC
  UC --> TenantContext
  TenantContext --> Ports
  Ports --> DB1
  Ports --> Cache
  Ports --> AuthStore
  Ports --> Config

  note right of DB1
    Estrategias:
    - Shared DB con tenantId (más simple)
    - DB por tenant (aislamiento)
    - Schema por tenant
  end

  classDef infra fill:#eef,stroke:#333;
  class INFRA infra;
```

Puntos clave:
- Autenticación incluye tenantId en tokens para identificar contexto.
- Los use-cases son tenant-aware: reciben/inyectan el tenant context.
- Opción A (compartido): una sola base de datos con columna tenantId.
- Opción B (aislamiento): bases de datos o schemas separados por tenant.
- Config y caché deben soportar namespacing por tenant.
- En SmartParkingTwo, el código debe mantener el dominio independiente de tenant; la capa de aplicación debe ocuparse del tenant context.
