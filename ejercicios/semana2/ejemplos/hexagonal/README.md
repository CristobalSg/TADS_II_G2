# Arquitectura Hexagonal - Ejemplo Práctico

Este proyecto demuestra la implementación de la **Arquitectura Hexagonal** (también conocida como Ports & Adapters) para la gestión de administradores, inspirado en el proyecto SmartParking.

## 🏗️ Estructura de la Arquitectura

```
src/
├── domain/                    # ← NÚCLEO - Lógica de negocio pura
│   ├── entities/             # Entidades del dominio
│   │   └── Admin.js          # Entidad Admin con lógica de negocio
│   └── ports/                # Contratos (interfaces)
│       ├── AdminRepositoryPort.js    # Puerto para persistencia
│       └── PasswordServicePort.js    # Puerto para encriptación
│
├── application/              # ← CASOS DE USO - Orquestación
│   ├── use-cases/           # Casos de uso específicos
│   │   ├── CreateAdminUseCase.js
│   │   ├── GetAllAdminsUseCase.js
│   │   └── GetAdminByIdUseCase.js
│   └── dtos/                # Objetos de transferencia de datos
│       ├── CreateAdminDto.js
│       └── AdminResponseDto.js
│
├── infrastructure/          # ← ADAPTADORES - Detalles técnicos
│   └── adapters/
│       ├── InMemoryAdminRepository.js    # Adaptador de persistencia
│       └── SimplePasswordService.js     # Adaptador de encriptación
│
└── presentation/           # ← INTERFAZ - Controllers/API
    └── AdminController.js  # Controlador HTTP (simulado)
```

## 🎯 Conceptos Clave Implementados

### 1. **Separación en Capas**
- **Dominio**: Lógica de negocio pura, independiente de tecnología
- **Aplicación**: Casos de uso que orquestan el dominio
- **Infraestructura**: Implementaciones concretas (BD, APIs, etc.)
- **Presentación**: Interfaz de usuario/API

### 2. **Puertos y Adaptadores**
- **Puertos**: Interfaces que define el dominio
- **Adaptadores**: Implementaciones concretas de los puertos

### 3. **Inversión de Dependencias**
- El dominio no depende de infraestructura
- La infraestructura implementa contratos del dominio
- Inyección de dependencias desde el exterior

## 🚀 Ejecutar el Ejemplo

```bash
npm install
npm start
```

## 📋 Funcionalidades Demostradas

1. **Crear Administrador**
   - Validación de datos
   - Verificación de email único
   - Encriptación de contraseña
   - Persistencia

2. **Obtener Administradores**
   - Listar todos
   - Buscar por ID
   - Manejo de errores

3. **Validaciones de Dominio**
   - Email válido
   - Nombre requerido
   - Contraseña segura

## 🧪 Ventajas Demostradas

### ✅ **Testabilidad**
```javascript
// Fácil de testear - mockear puertos
const mockRepository = new MockAdminRepository();
const useCase = new CreateAdminUseCase(mockRepository, mockPasswordService);
```

### ✅ **Intercambiabilidad**
```javascript
// Cambiar de en-memoria a base de datos real
const repository = new PostgreSQLAdminRepository(); // En lugar de InMemoryAdminRepository
```

### ✅ **Independencia de Framework**
- No depende de Express, Fastify, etc.
- Lógica de dominio pura
- Fácil migración entre tecnologías

### ✅ **Mantenibilidad**
- Responsabilidades claras
- Bajo acoplamiento
- Alta cohesión

## 🔄 Comparación con otras Arquitecturas

| Aspecto | Monolítico | Modular | **Hexagonal** |
|---------|------------|---------|---------------|
| Separación | ❌ Baja | ⚠️ Media | ✅ **Excelente** |
| Testabilidad | ❌ Difícil | ⚠️ Regular | ✅ **Muy fácil** |
| Escalabilidad | ❌ Limitada | ⚠️ Media | ✅ **Muy alta** |
| Mantenimiento | ❌ Complejo | ⚠️ Moderado | ✅ **Muy simple** |

## 📚 Recursos Adicionales

- [Hexagonal Architecture by Alistair Cockburn](https://alistair.cockburn.us/hexagonal-architecture/)
- [Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Ports & Adapters Pattern](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)
