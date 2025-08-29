# Diagrama: Arquitectura Hexagonal aplicada a SmartParkingTwo (User Use-cases)

Descripción corta: diagrama que muestra cómo se organizan los componentes al aplicar la arquitectura hexagonal para los casos de uso relacionados con el "User" (registro, login, perfil, reserva).

```mermaid
flowchart LR
  %% Presentación
  subgraph EXTERNAL[Exterior]
    User[Usuario (App / Browser / Mobile)]
  end

  subgraph PRESENTATION[Presentation]
    API[API HTTP / Controllers]
    UI[UI Layer / SDKs]
  end

  subgraph APPLICATION[Application]
    UC1[RegisterUser UseCase]
    UC2[AuthenticateUser UseCase]
    UC3[UpdateProfile UseCase]
    UC4[ReserveParking UseCase]
  end

  subgraph DOMAIN[Domain]
    Entities[Entities: User, ParkingSpot, Reservation]
    Rules[Business Rules (validations, invariants)]
    Ports[Ports (Interfaces): UserRepository, AuthPort, PaymentPort, NotificationPort]
  end

  subgraph INFRA[Infrastructure / Adapters]
    Repo[PostgresUserRepository
(mapea UserRepository)]
    Cache[RedisCacheAdapter]
    Email[SMTP / EmailAdapter
(mapea NotificationPort)]
    Payment[PaymentGatewayAdapter
(mapea PaymentPort)]
    AuthAdapter[JWTAuthAdapter
(mapea AuthPort)]
  end

  User -->|HTTP| API
  UI --> API
  API -->|llama| UC1
  API -->|llama| UC2
  API -->|llama| UC3
  API -->|llama| UC4

  UC1 -->|crea/valida| Entities
  UC2 -->|valida credenciales| Entities
  UC4 -->|genera reserva| Entities

  UC1 -->|usa| Ports
  UC2 -->|usa| Ports
  UC3 -->|usa| Ports
  UC4 -->|usa| Ports

  Ports --> Repo
  Ports --> Cache
  Ports --> Email
  Ports --> Payment
  Ports --> AuthAdapter

  %% notas
  classDef layer fill:#f9f,stroke:#333,stroke-width:1px;
  class PRESENTATION,APPLICATION,DOMAIN,INFRA layer;

  click Repo "./src/infrastructure/repositories" "Repositorio concreto (ej: Postgres)"
```

Puntos clave:
- Los Use Cases (Application) orquestan la lógica y dependen solo de los puertos definidos en el dominio.
- Los adaptadores (infraestructura) implementan esos puertos (repositorios, servicios de pago, email, auth).
- La presentación (API / Controllers) es un adaptador de entrada que invoca los casos de uso.
- El dominio (Entities y Business Rules) no conoce detalles de infraestructura ni multitenancy.

Cómo usar: abrir este archivo en VSCode (o GitHub) y visualizar el bloque Mermaid (o usar extensión Mermaid Preview).
