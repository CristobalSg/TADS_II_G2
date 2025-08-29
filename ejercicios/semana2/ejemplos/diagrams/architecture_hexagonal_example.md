# Diagrama: Arquitectura Hexagonal Implementada (ejemplos/hexagonal)

Diagrama simplificado que muestra exactamente lo que está implementado en `ejemplos/hexagonal/` - solo Admin entity y sus casos de uso básicos.

```mermaid
flowchart TB
  %% Actor Externo
  subgraph EXTERNAL[Actor Externo]
    Console[Demo Console]
  end

  %% Presentation Layer
  subgraph PRESENTATION[Presentation]
    AdminController[AdminController.js]
  end

  %% Application Layer  
  subgraph APPLICATION[Application]
    CreateAdminUC[CreateAdminUseCase.js]
    GetAllAdminsUC[GetAllAdminsUseCase.js]
    GetAdminByIdUC[GetAdminByIdUseCase.js]
    
    CreateAdminDto[CreateAdminDto.js]
    AdminResponseDto[AdminResponseDto.js]
  end

  %% Domain Core
  subgraph DOMAIN[Domain]
    AdminEntity[Admin.js]
    AdminRepositoryPort[AdminRepositoryPort.js]
    PasswordServicePort[PasswordServicePort.js]
  end

  %% Infrastructure
  subgraph INFRASTRUCTURE[Infrastructure]
    InMemoryRepo[InMemoryAdminRepository.js]
    PasswordService[SimplePasswordService.js]
  end

  %% Storage
  subgraph STORAGE[Storage]
    MemoryMap[JavaScript Map]
  end

  %% Connections
  Console --> AdminController
  AdminController --> CreateAdminUC
  AdminController --> GetAllAdminsUC  
  AdminController --> GetAdminByIdUC
  
  CreateAdminUC --> AdminEntity
  CreateAdminUC --> AdminRepositoryPort
  CreateAdminUC --> PasswordServicePort
  
  GetAllAdminsUC --> AdminRepositoryPort
  GetAdminByIdUC --> AdminRepositoryPort
  
  AdminRepositoryPort <--> InMemoryRepo
  PasswordServicePort <--> PasswordService
  
  InMemoryRepo --> MemoryMap

  class PRESENTATION presentation
  class APPLICATION application
  class DOMAIN domain
  class INFRASTRUCTURE,STORAGE infrastructure
```

## Implementación Real del Ejemplo:

### 🎯 **Lo que está implementado:**
- **1 Entity**: Solo `Admin` con validaciones básicas
- **3 Use Cases**: Create, GetAll, GetById
- **2 Ports**: Repository y PasswordService  
- **2 Adapters**: InMemory repository y simple password hash
- **2 DTOs**: Input y output para API

### 🔧 **Casos de uso reales:**
1. **CreateAdmin**: Email único + hash password + save
2. **GetAllAdmins**: Lista todos los admins (sin filtros)
3. **GetAdminById**: Busca por ID específico

### � **Storage real:**
- JavaScript `Map` en memoria
- Hash simple (no bcrypt real)
- Sin persistencia real

### ✅ **Principios hexagonales aplicados:**
- Ports definen contratos
- Domain no conoce infrastructure  
- Fácil intercambiar adapters
- Testing con mocks simple
