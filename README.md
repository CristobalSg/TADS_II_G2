# TADS_II_G2 - Topicos Avanzados de Desarrollo de Software II

> **Universidad Católica de Temuco (UCT)**  
> **Ramo:** INFO1189 - Topicos Avanzados de Desarrollo de Software II
> **Grupo:** 2  
> **Proyecto:** Smart Parking Two

## 📋 Descripción del Repositorio

Este repositorio contiene el trabajo académico y de investigación del **Grupo 2** para el ramo INFO1189, enfocado en el desarrollo del proyecto **Smart Parking Two**. El repositorio documenta la evolución del aprendizaje en técnicas avanzadas de desarrollo de software, desde principios fundamentales hasta arquitecturas empresariales complejas.

## 🎯 Proyecto Principal: Smart Parking Two

**Smart Parking Two** es un sistema inteligente de gestión de estacionamientos que implementa arquitecturas de software modernas, patrones de diseño avanzados y principios de desarrollo escalables.

### 🔗 Enlaces Importantes

- **Repositorio Principal del Proyecto:** [SmartParkingTwo](https://github.com/CristobalSg/SmartParkingTwo)
- **Presentaciones del Proyecto:** [Presentación Login de Admin Smart Parking](./presentaciones/)

## 📁 Estructura del Repositorio

```
TADS_II_G2/
├── README.md                           # Este archivo
├── ejercicios/                         # Ejercicios semanales del ramo
│   ├── semana1/                        # Principios SOLID
│   │   ├── ejercicio1.md              # Enunciados y casos de estudio
│   │   ├── main.py                    # Demostración principal
│   │   ├── SRP.py                     # Single Responsibility Principle
│   │   ├── OCP.py                     # Open/Closed Principle
│   │   ├── LSP.py                     # Liskov Substitution Principle
│   │   ├── ISP.py                     # Interface Segregation Principle
│   │   ├── DIP.py                     # Dependency Inversion Principle
│   │   └── reporte.txt                # Salida de ejemplo
│   └── semana2/                        # Evolución Arquitectural
│       └── ejemplos/                   # Ejemplos comparativos
│           ├── README.md              # Guía de evolución arquitectural
│           ├── monolitico/            # Arquitectura monolítica
│           ├── modular/               # Arquitectura modular
│           ├── hexagonal/             # Arquitectura hexagonal
│           └── diagrams/              # Diagramas explicativos
├── diagramas/                          # Diagramas del proyecto Smart Parking
│   ├── caso_de_uso.pdf                # Casos de uso del sistema
│   ├── classDiagram.pdf               # Diagrama de clases general
│   ├── cryptoDiagram.pdf              # Diagramas de criptografía
│   ├── diagrama_clases_frontend.pdf   # Clases del frontend
│   ├── diagrama_mer_login.pdf         # Modelo entidad-relación de login
│   ├── observerDiagram.pdf            # Patrón Observer
│   ├── secuenceDiagram.pdf            # Diagramas de secuencia
│   ├── strategyDiagram.pdf            # Patrón Strategy
│   └── [otros diagramas...]           # Diagramas adicionales
└── presentaciones/                     # Material de presentaciones
    └── Presentación Login de Admin Smart Parking.pdf
```

## 🎓 Contenido Académico

### 📚 Semana 1: Principios SOLID

Los **principios SOLID** son la base del desarrollo de software mantenible y escalable. En esta sección se implementan ejemplos prácticos de cada principio:

#### 🔵 **S** - Single Responsibility Principle (SRP)

- **Concepto:** Una clase debe tener una sola razón para cambiar
- **Implementación:** Separación de responsabilidades en generación de reportes
- **Archivo:** [`ejercicios/semana1/SRP.py`](./ejercicios/semana1/SRP.py)

#### 🟢 **O** - Open/Closed Principle (OCP)

- **Concepto:** Abierto para extensión, cerrado para modificación
- **Implementación:** Sistema de pagos extensible usando patrón Strategy
- **Archivo:** [`ejercicios/semana1/OCP.py`](./ejercicios/semana1/OCP.py)

#### 🟡 **L** - Liskov Substitution Principle (LSP)

- **Concepto:** Los objetos de las subclases deben ser intercambiables
- **Implementación:** Jerarquía correcta de formas geométricas
- **Archivo:** [`ejercicios/semana1/LSP.py`](./ejercicios/semana1/LSP.py)

#### 🟠 **I** - Interface Segregation Principle (ISP)

- **Concepto:** No forzar dependencias de interfaces no utilizadas
- **Implementación:** Segregación de interfaces de trabajo
- **Archivo:** [`ejercicios/semana1/ISP.py`](./ejercicios/semana1/ISP.py)

#### 🔴 **D** - Dependency Inversion Principle (DIP)

- **Concepto:** Depender de abstracciones, no de concreciones
- **Implementación:** Sistema de notificaciones con inversión de dependencias
- **Archivo:** [`ejercicios/semana1/DIP.py`](./ejercicios/semana1/DIP.py)

### 🏗️ Semana 2: Evolución Arquitectural

Estudio comparativo de la evolución natural en arquitecturas de software, desde monolitos hasta arquitecturas hexagonales:

#### 🔴 **Arquitectura Monolítica**

- **Características:** Todo en un solo archivo, alta acoplamiento
- **Ventajas:** Desarrollo rápido para prototipos
- **Desventajas:** Difícil de mantener, testear y escalar
- **Ejemplo:** [`ejercicios/semana2/ejemplos/monolitico/`](./ejercicios/semana2/ejemplos/monolitico/)

#### 🟡 **Arquitectura Modular**

- **Características:** Separación en capas (Models, Services, Repositories)
- **Ventajas:** Mejor organización, reutilización de código
- **Desventajas:** Aún hay dependencias directas entre capas
- **Ejemplo:** [`ejercicios/semana2/ejemplos/modular/`](./ejercicios/semana2/ejemplos/modular/)

#### 🟢 **Arquitectura Hexagonal**

- **Características:** Ports & Adapters, inversión de dependencias completa
- **Ventajas:** Altamente testeable, mantenible y escalable
- **Desventajas:** Mayor complejidad inicial, curva de aprendizaje
- **Ejemplo:** [`ejercicios/semana2/ejemplos/hexagonal/`](./ejercicios/semana2/ejemplos/hexagonal/)

### 📊 Comparación Arquitectural

| Aspecto           | Monolítica     | Modular          | **Hexagonal**       |
| ----------------- | -------------- | ---------------- | ------------------- |
| **Separación**    | ❌ Inexistente | ⚠️ Básica        | ✅ **Excelente**    |
| **Testabilidad**  | ❌ Muy difícil | ⚠️ Regular       | ✅ **Excepcional**  |
| **Mantenimiento** | ❌ Complejo    | ⚠️ Moderado      | ✅ **Muy simple**   |
| **Escalabilidad** | ❌ Limitada    | ⚠️ Media         | ✅ **Muy alta**     |
| **Flexibilidad**  | ❌ Rígida      | ⚠️ Algo flexible | ✅ **Muy flexible** |

## 🎨 Diagramas y Diseño

El directorio `diagramas/` contiene toda la documentación visual del proyecto Smart Parking Two:

### 📋 **Análisis y Diseño**

- **Casos de Uso:** Funcionalidades principales del sistema
- **Diagramas de Clases:** Estructura orientada a objetos
- **Modelo Entidad-Relación:** Diseño de base de datos

### 🔄 **Patrones de Diseño Implementados**

- **Observer Pattern:** Para notificaciones en tiempo real
- **Strategy Pattern:** Para diferentes algoritmos de asignación de espacios
- **Repository Pattern:** Para abstracción de acceso a datos

### 🔐 **Seguridad y Criptografía**

- **Diagramas de Seguridad:** Flujos de autenticación y autorización
- **Criptografía:** Esquemas de encriptación para datos sensibles

## 🚀 Tecnologías y Herramientas

### **Lenguajes de Programación**

- **Python:** Ejemplos de principios SOLID y patrones
- **JavaScript/TypeScript:** Implementaciones de arquitecturas
- **Node.js:** Backend del proyecto principal

### **Arquitecturas Implementadas**

- **Clean Architecture:** Separación de capas y responsabilidades
- **Hexagonal Architecture:** Ports & Adapters pattern
- **Microservicios:** Arquitectura distribuida escalable

### **Patrones de Diseño**

- **Creacionales:** Factory, Builder, Singleton
- **Estructurales:** Adapter, Facade, Decorator
- **Comportamentales:** Observer, Strategy, Command

### **Herramientas de Desarrollo**

- **Control de Versiones:** Git & GitHub
- **Gestión de Dependencias:** npm, pip
- **Documentación:** Markdown, Mermaid diagrams
- **Testing:** Jest, pytest

## 📖 Guías de Uso

### **Ejecutar Ejemplos SOLID (Semana 1)**

```bash
cd ejercicios/semana1/
python main.py
```

### **Ejecutar Ejemplos Arquitecturales (Semana 2)**

**Monolítico:**

```bash
cd ejercicios/semana2/ejemplos/monolitico/
node monolitico.js
```

**Modular:**

```bash
cd ejercicios/semana2/ejemplos/modular/
npm install
npm start
```

**Hexagonal:**

```bash
cd ejercicios/semana2/ejemplos/hexagonal/
npm install
npm start
```

## 🎯 Objetivos de Aprendizaje

### **Técnicos**

- ✅ Dominar principios SOLID en desarrollo de software
- ✅ Comprender evolución de arquitecturas de software
- ✅ Implementar patrones de diseño avanzados
- ✅ Aplicar Clean Architecture y arquitectura hexagonal

### **Profesionales**

- ✅ Trabajo en equipo y metodologías ágiles
- ✅ Documentación técnica profesional
- ✅ Control de versiones avanzado
- 🔄 Despliegue y DevOps
- 🔄 Análisis de rendimiento y optimización

## 👥 Información del Grupo

**Grupo 2 - TADS II**

- **Universidad:** Universidad Católica de Temuco (UCT)
- **Ramo:** INFO1189 - Topicos Avanzados de Desarrollo de Software II
- **Proyecto:** Smart Parking Two - Sistema de Gestión de Estacionamientos

## 📚 Referencias y Recursos

### **Libros y Publicaciones**

- _Clean Architecture_ - Robert C. Martin
- _Design Patterns_ - Gang of Four
- _Refactoring_ - Martin Fowler
- _Domain-Driven Design_ - Eric Evans

### **Artículos y Recursos Online**

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Ports & Adapters Pattern](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)

---

## Contacto

Para consultas sobre este proyecto académico o colaboraciones:

**Repositorio Principal del Proyecto:** [SmartParkingTwo](https://github.com/CristobalSg/SmartParkingTwo)

---

_Este repositorio es parte del trabajo académico del curso INFO1189 - Topicos Avanzados de Desarrollo de Software II en la Universidad Católica de Temuco (UCT)._
